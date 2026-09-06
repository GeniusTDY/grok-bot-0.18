import { copyFile, mkdir, mkdtemp, rename, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { archivedWindowsInstaller, cachedWindowsInstaller, cachedWindowsRuntimeDescriptor, cachedWindowsRuntimeRoot, windowsInstallerSha256, windowsInstallerUrl } from "./lib/config.mjs";
import { windowsInstallerBytes } from "./lib/config.mjs";
import { downloadExactFile } from "./lib/bounded-download.mjs";
import { hydrateSourcePayloadFromAsar } from "./lib/runtime.mjs";
import { cacheWindowsRuntime, discoverInstalledWindowsRuntime, extractPinnedWindowsInstaller, findSevenZipExecutable, pathExists, resolveCachedWindowsRuntime, sha256File, verifyPinnedWindowsInstaller } from "./lib/windows-runtime.mjs";

async function ensureInstaller() {
  await mkdir(path.dirname(cachedWindowsInstaller), { recursive: true });
  if (await pathExists(cachedWindowsInstaller)) { try { return await verifyPinnedWindowsInstaller(cachedWindowsInstaller); } catch { await rm(cachedWindowsInstaller, { force: true }); } }
  if (await pathExists(archivedWindowsInstaller)) {
    const artifact = await verifyPinnedWindowsInstaller(archivedWindowsInstaller);
    await copyFile(artifact.path, cachedWindowsInstaller);
    return verifyPinnedWindowsInstaller(cachedWindowsInstaller);
  }
  const partial = `${cachedWindowsInstaller}.partial`; await rm(partial, { force: true });
  await downloadExactFile({ url: windowsInstallerUrl, destination: partial, expectedBytes: windowsInstallerBytes });
  const digest = await sha256File(partial); if (digest !== windowsInstallerSha256) { await rm(partial, { force: true }); throw new Error(`Downloaded Windows installer checksum mismatch: ${digest}`); }
  await rename(partial, cachedWindowsInstaller); return verifyPinnedWindowsInstaller(cachedWindowsInstaller);
}

let runtime;
if (await pathExists(cachedWindowsRuntimeRoot) && await pathExists(cachedWindowsRuntimeDescriptor)) {
  runtime = await resolveCachedWindowsRuntime();
} else {
  const installed = await discoverInstalledWindowsRuntime();
  if (installed != null && process.env.GROK_BOT_018_WINDOWS_APP?.trim()) {
    runtime = await cacheWindowsRuntime(installed, { kind: "installed-copy", appAsarSha256: installed.appAsarSha256 });
  } else {
    const installer = await ensureInstaller(), sevenZip = await findSevenZipExecutable(), temporary = await mkdtemp(path.join(tmpdir(), "grok-bot-018-win-"));
    try { const extracted = await extractPinnedWindowsInstaller({ installer: installer.path, destination: path.join(temporary, "runtime"), sevenZip }); runtime = await cacheWindowsRuntime(extracted.runtime, { kind: "pinned-nsis", bytes: installer.bytes, sha256: installer.sha256 }); }
    finally { await rm(temporary, { recursive: true, force: true }); }
  }
}
const hydrated = await hydrateSourcePayloadFromAsar(runtime.appAsarPath, { expectedSha256: runtime.appAsarSha256 });
console.log(`Windows runtime ready: ${runtime.root}`);
console.log(`Runtime descriptor: ${cachedWindowsRuntimeDescriptor}`);
console.log(`Checksum-pinned Windows source payload ready: ${hydrated.destination} (${hydrated.sha256})`);
console.log("The pinned NSIS carrier was checksum-verified and extracted with 7-Zip; it was never executed.");
