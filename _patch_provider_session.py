import io, sys

path = "/tmp/gbrw/source/host/extensions/inference/provider-session.ts"
src = io.open(path, "r", encoding="utf-8").read()

old_imp = 'import { lstatSync, readFileSync, renameSync, writeFileSync } from "node:fs";'
new_imp = 'import { closeSync, constants, lstatSync, openSync, readFileSync, renameSync, writeFileSync } from "node:fs";'
assert src.count(old_imp) == 1, "imports anchor not found"
src = src.replace(old_imp, new_imp)

anchor = "type CodexCredentials = { accessToken: string; refreshToken: string; idToken: string; accountId: string; path: string; document: Loose };"
assert src.count(anchor) == 1, "codexCredentials anchor not found"
helper = anchor + '''

function unescapeLinuxMountPath(value: string): string {
  return value.replace(/\\040/g, " ").replace(/\\011/g, "\\t").replace(/\\012/g, "\\n").replace(/\\134/g, "\\\\");
}

function isReadOnlyLocalAuthMount(path: string): boolean {
  if (process.env.SAND_LOCAL_AUTH_MOUNT !== "1" || process.platform !== "linux") return false;
  try {
    let best: { mountPoint: string; readOnly: boolean } | undefined;
    for (const line of readFileSync("/proc/self/mountinfo", "utf8").split("\\n")) {
      const fields = line.split(" ");
      if (fields.length < 6) continue;
      const mountPoint = unescapeLinuxMountPath(fields[4]!);
      if (path !== mountPoint && !path.startsWith(`${mountPoint}/`)) continue;
      const readOnly = fields[5]!.split(",").includes("ro");
      if (best == null || mountPoint.length > best.mountPoint.length) best = { mountPoint, readOnly };
    }
    if (best?.readOnly === true) return true;
  } catch { /* Fall through to a kernel-enforced write-open check. */ }
  try {
    const descriptor = openSync(path, constants.O_WRONLY | constants.O_APPEND);
    closeSync(descriptor);
    return false;
  } catch (error) {
    return (error as NodeJS.ErrnoException).code === "EROFS";
  }
}'''
src = src.replace(anchor, helper)

old_perm = '''  const stat = lstatSync(path);
  if (!stat.isFile() || stat.isSymbolicLink() || (stat.mode & 0o077) !== 0) throw new Error("Codex login credentials must be a private direct regular file.");'''
new_perm = '''  const stat = lstatSync(path);
  // Node's POSIX mode bits on Windows are synthesized and do not represent the
  // file's NTFS ACL. Keep the direct-file and symlink checks there, and reserve
  // chmod-style privacy validation for platforms where those bits are real.
  const hasUnsafeUnixPermissions = process.platform !== "win32" && (stat.mode & 0o077) !== 0 && !isReadOnlyLocalAuthMount(path);
  if (!stat.isFile() || stat.isSymbolicLink() || hasUnsafeUnixPermissions) throw new Error("Codex login credentials must be a private direct regular file or an app-owned read-only local auth mount.");'''
assert src.count(old_perm) == 1, "permission check anchor not found"
src = src.replace(old_perm, new_perm)

old_refresh = '''  const temporary = `${current.path}.${process.pid}.${crypto.randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(document, null, 2)}\\n`, { encoding: "utf8", mode: 0o600, flag: "wx" });
  renameSync(temporary, current.path);
  return codexCredentials();
}'''
new_refresh = '''  const refreshed = {
    accessToken: document.tokens.access_token,
    refreshToken: document.tokens.refresh_token,
    idToken: document.tokens.id_token,
    accountId: current.accountId,
    path: current.path,
    document,
  };
  // The local VM receives the user's Codex profile as a read-only bind mount.
  // Refresh in memory there so a long-running turn can continue without ever
  // modifying, copying, or publishing the host's authentication file.
  if (isReadOnlyLocalAuthMount(current.path)) return refreshed;
  const temporary = `${current.path}.${process.pid}.${crypto.randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(document, null, 2)}\\n`, { encoding: "utf8", mode: 0o600, flag: "wx" });
  renameSync(temporary, current.path);
  return codexCredentials();
}'''
assert src.count(old_refresh) == 1, "refresh anchor not found"
src = src.replace(old_refresh, new_refresh)

io.open(path, "w", encoding="utf-8").write(src)
print("provider-session.ts patched OK")