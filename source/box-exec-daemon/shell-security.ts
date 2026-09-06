import { readFileSync } from "node:fs";

import { scrubHostControlEnvVars } from "../packages/shell-exec/env-filter.js";

export const BOX_EXEC_SHELL_USER_ENV = "SAND_BOX_EXEC_SHELL_USER";

export interface BoxExecShellIdentity {
  readonly username: string;
  readonly uid: number;
  readonly gid: number;
  readonly home: string;
}

export interface BoxExecEnvironmentUpdate {
  readonly env: Readonly<Record<string, string>>;
  readonly replace: boolean;
}

/**
 * The daemon is a control-plane process. Its own environment can contain the
 * gateway credential, but no model-invoked shell may inherit that credential.
 */
export function sanitizeBoxExecShellEnvironment(
  environment: NodeJS.ProcessEnv,
  identity?: BoxExecShellIdentity,
): NodeJS.ProcessEnv {
  return {
    ...scrubHostControlEnvVars(environment),
    ...(identity == null ? {} : {
      HOME: identity.home,
      USER: identity.username,
      LOGNAME: identity.username,
    }),
  };
}

/** Mutates the daemon's shell environment while refusing reserved credentials. */
export function applySanitizedBoxExecEnvironmentUpdate(
  current: NodeJS.ProcessEnv,
  update: BoxExecEnvironmentUpdate,
): { readonly applied: number; readonly removed: number } {
  const next = scrubHostControlEnvVars(update.env);
  let removed = 0;
  if (update.replace) {
    for (const key of Object.keys(current)) {
      if (!(key in next)) {
        delete current[key];
        removed += 1;
      }
    }
  } else {
    // Defense in depth for runtimes created before the constructor scrub or
    // callers that retained and mutated the supplied environment object.
    const sanitizedCurrent = scrubHostControlEnvVars(current);
    for (const key of Object.keys(current)) {
      if (!(key in sanitizedCurrent)) {
        delete current[key];
        removed += 1;
      }
    }
  }
  for (const [key, value] of Object.entries(next)) current[key] = value;
  return { applied: Object.keys(next).length, removed };
}

export function parsePosixAccount(
  passwd: string,
  username: string,
): BoxExecShellIdentity | null {
  if (!/^[a-z_][a-z0-9_-]{0,31}$/i.test(username)) return null;
  for (const line of passwd.split(/\r?\n/)) {
    if (line.length === 0 || line.startsWith("#")) continue;
    const [name, _password, uidText, gidText, _gecos, home] = line.split(":");
    if (name !== username || uidText == null || gidText == null || home == null) continue;
    const uid = Number.parseInt(uidText, 10);
    const gid = Number.parseInt(gidText, 10);
    if (!Number.isSafeInteger(uid) || uid <= 0 || !Number.isSafeInteger(gid) || gid <= 0 || !home.startsWith("/")) return null;
    return { username, uid, gid, home };
  }
  return null;
}

export function resolveBoxExecShellIdentity(
  environment: NodeJS.ProcessEnv = process.env,
  options: {
    readonly platform?: NodeJS.Platform;
    readonly passwd?: string;
    readonly currentUid?: number;
    readonly currentGid?: number;
  } = {},
): BoxExecShellIdentity | undefined {
  const username = environment[BOX_EXEC_SHELL_USER_ENV]?.trim();
  if (username == null || username.length === 0) return undefined;
  if ((options.platform ?? process.platform) === "win32") throw new Error("A non-root box shell identity requires a POSIX container.");
  const passwd = options.passwd ?? readFileSync("/etc/passwd", "utf8");
  const identity = parsePosixAccount(passwd, username);
  if (identity == null) throw new Error(`Configured box shell user ${username} is unavailable or is not a non-root account.`);
  const currentUid = options.currentUid ?? process.getuid?.();
  const currentGid = options.currentGid ?? process.getgid?.();
  if (currentUid == null || currentGid == null) throw new Error("The box daemon could not verify its POSIX process identity.");
  if (currentUid !== 0 && (currentUid !== identity.uid || currentGid !== identity.gid)) {
    throw new Error(`The box daemon cannot drop shells from uid/gid ${currentUid}:${currentGid} to ${identity.uid}:${identity.gid}.`);
  }
  // A same-uid daemon would leave its original Docker environment readable via
  // /proc. Standalone Proxy Gateway mode therefore requires a privileged controller
  // and an unprivileged, distinct shell identity.
  if (currentUid === identity.uid) throw new Error("The box daemon and model shell must not share a uid.");
  return identity;
}
