import { accessSync, constants, existsSync, lstatSync, readFileSync, realpathSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { delimiter, extname, join } from "node:path";

export interface LocalInferenceCliStatus {
  readonly installed: boolean;
  readonly authenticated: boolean;
  readonly executablePath: string | null;
}

export interface LocalInferenceCliResolveOptions {
  readonly env?: NodeJS.ProcessEnv;
  readonly homeDir?: string;
  readonly platform?: NodeJS.Platform;
}

const WINDOWS_CLI_EXTENSIONS = [".com", ".exe", ".bat", ".cmd"] as const;

function executableExtensions(env: NodeJS.ProcessEnv, platform: NodeJS.Platform): readonly string[] {
  if (platform !== "win32") return [""];
  const configured = (env.PATHEXT ?? ".COM;.EXE;.BAT;.CMD")
    .split(";")
    .map(value => value.trim().toLowerCase())
    .filter(value => (WINDOWS_CLI_EXTENSIONS as readonly string[]).includes(value));
  return configured.length > 0 ? [...new Set(configured)] : WINDOWS_CLI_EXTENSIONS;
}

function expandExecutable(candidate: string | undefined, extensions: readonly string[]): string[] {
  if (candidate == null || candidate.trim().length === 0) return [];
  const value = candidate.trim().replace(/^"|"$/g, "");
  return extname(value).length > 0 || extensions.length === 1 && extensions[0] === ""
    ? [value]
    : extensions.map(extension => `${value}${extension}`);
}

function isUsableExecutable(candidate: string, platform: NodeJS.Platform): boolean {
  try {
    const link = lstatSync(candidate);
    if (platform === "win32") {
      // Do not trust junction/symlink/reparse-style CLI shims on Windows. npm's
      // normal .cmd launchers are regular files and remain supported.
      return (WINDOWS_CLI_EXTENSIONS as readonly string[]).includes(extname(candidate).toLowerCase())
        && link.isFile() && !link.isSymbolicLink();
    }
    const target = link.isSymbolicLink() ? statSync(realpathSync(candidate)) : link;
    if (!target.isFile()) return false;
    accessSync(candidate, constants.X_OK);
    return true;
  } catch { return false; }
}

function firstExecutable(candidates: readonly string[], platform: NodeJS.Platform): string | null {
  for (const candidate of candidates) if (isUsableExecutable(candidate, platform)) return candidate;
  return null;
}

function pathCandidates(name: string, env: NodeJS.ProcessEnv, extensions: readonly string[]): string[] {
  return (env.PATH ?? "")
    .split(extensions.length === 1 && extensions[0] === "" ? delimiter : ";")
    .map(directory => directory.trim().replace(/^"|"$/g, ""))
    .filter(Boolean)
    .flatMap(directory => extensions.map(extension => join(directory, `${name}${extension}`)));
}

export function resolveCodexCliPath(options: LocalInferenceCliResolveOptions = {}): string | null {
  const env = options.env ?? process.env, platform = options.platform ?? process.platform, home = options.homeDir ?? homedir();
  const extensions = executableExtensions(env, platform);
  const appDataCandidates = platform === "win32" ? expandExecutable(env.APPDATA == null ? undefined : join(env.APPDATA, "npm", "codex"), extensions) : [];
  const posixCandidates = platform === "win32" ? [] : ["/opt/homebrew/bin/codex", "/usr/local/bin/codex"];
  return firstExecutable([
    ...expandExecutable(env.CODEX_PATH, extensions),
    ...expandExecutable(join(home, ".local", "bin", "codex"), extensions),
    ...expandExecutable(join(home, ".codex", "bin", "codex"), extensions),
    ...appDataCandidates,
    ...pathCandidates("codex", env, extensions),
    ...posixCandidates,
  ], platform);
}

export function resolveClaudeCodeCliPath(options: LocalInferenceCliResolveOptions = {}): string | null {
  const env = options.env ?? process.env, platform = options.platform ?? process.platform, home = options.homeDir ?? homedir();
  const extensions = executableExtensions(env, platform);
  const appDataCandidates = platform === "win32" ? expandExecutable(env.APPDATA == null ? undefined : join(env.APPDATA, "npm", "claude"), extensions) : [];
  const posixCandidates = platform === "win32" ? [] : ["/opt/homebrew/bin/claude", "/usr/local/bin/claude"];
  return firstExecutable([
    ...expandExecutable(env.CLAUDE_CODE_PATH, extensions),
    ...expandExecutable(join(home, ".local", "bin", "claude"), extensions),
    ...expandExecutable(join(home, ".claude", "local", "claude"), extensions),
    ...appDataCandidates,
    ...pathCandidates("claude", env, extensions),
    ...posixCandidates,
  ], platform);
}

function hasUsableCodexLogin(path: string, platform = process.platform): boolean {
  try {
    const stat = lstatSync(path);
    if (!stat.isFile() || stat.isSymbolicLink() || (platform !== "win32" && (stat.mode & 0o077) !== 0)) return false;
    const parsed = JSON.parse(readFileSync(path, "utf8")) as Record<string, any>;
    return parsed.auth_mode === "chatgpt"
      && typeof parsed.tokens?.access_token === "string" && parsed.tokens.access_token.length > 0
      && typeof parsed.tokens?.refresh_token === "string" && parsed.tokens.refresh_token.length > 0
      && typeof parsed.tokens?.id_token === "string" && parsed.tokens.id_token.length > 0
      && typeof parsed.tokens?.account_id === "string" && parsed.tokens.account_id.length > 0;
  } catch { return false; }
}

export function getLocalInferenceCliStatus(): { readonly codex: LocalInferenceCliStatus; readonly "claude-code": LocalInferenceCliStatus } {
  const home = homedir();
  const codexPath = resolveCodexCliPath();
  const claudePath = resolveClaudeCodeCliPath();
  const codexAuthPath = join(process.env.CODEX_HOME?.trim() || join(home, ".codex"), "auth.json");
  const hasCodexAuthFile = existsSync(codexAuthPath);
  const hasCodexLogin = hasUsableCodexLogin(codexAuthPath);
  return {
    // Codex inference is a Grok Bot-owned HTTP transport authenticated by the
    // existing Codex login. The CLI binary is not in the request path.
    codex: { installed: hasCodexAuthFile, authenticated: hasCodexLogin, executablePath: codexPath },
    "claude-code": { installed: claudePath != null, authenticated: existsSync(join(home, ".claude", ".credentials.json")) || (process.env.ANTHROPIC_API_KEY?.length ?? 0) > 0, executablePath: claudePath },
  };
}
