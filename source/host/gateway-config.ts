import { randomBytes } from "node:crypto";
import { lstatSync, readFileSync, type Stats } from "node:fs";

export class SandGatewayConfigError extends Error {
  constructor(message: string) { super(message); this.name = "SandGatewayConfigError"; }
}

export interface GatewayServerConfig {
  readonly host: string;
  readonly port?: number;
  readonly authToken?: string;
  readonly tls?: { readonly cert: Buffer; readonly key: Buffer };
}

const LOOPBACK_HOSTS = new Set(["127.0.0.1", "localhost", "::1", "[::1]"]);
export function isLoopbackHost(host: string): boolean { return LOOPBACK_HOSTS.has(host.trim().toLowerCase()); }

function isTruthyEnv(value: string | undefined): boolean {
  if (value == null) return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes";
}

function readPort(raw: string | undefined): number | undefined {
  if (raw == null || raw.length === 0) return undefined;
  const parsed = Number.parseInt(raw, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

function resolveTls(env: NodeJS.ProcessEnv): GatewayServerConfig["tls"] {
  const certPath = env.SAND_GATEWAY_TLS_CERT?.trim();
  const keyPath = env.SAND_GATEWAY_TLS_KEY?.trim();
  if ((certPath == null || certPath.length === 0) && (keyPath == null || keyPath.length === 0)) return undefined;
  if (certPath == null || certPath.length === 0 || keyPath == null || keyPath.length === 0) {
    throw new SandGatewayConfigError("Gateway TLS needs both SAND_GATEWAY_TLS_CERT and SAND_GATEWAY_TLS_KEY.");
  }
  try { return { cert: readFileSync(certPath), key: readFileSync(keyPath) }; }
  catch (error) { throw new SandGatewayConfigError(`Failed to read gateway TLS cert/key (${certPath}, ${keyPath}): ${String(error)}`); }
}

function normalizedGatewayToken(value: string, source: string): string {
  const token = value.trim();
  if (!/^[A-Za-z0-9_-]{32,256}$/.test(token)) throw new SandGatewayConfigError(`${source} did not contain a valid gateway token.`);
  return token;
}

export function readPrivateGatewayTokenFile(
  target: string,
  options: {
    readonly lstat?: (path: string) => Stats;
    readonly readFile?: (path: string) => string;
    readonly currentUid?: number;
    readonly platform?: NodeJS.Platform;
  } = {},
): string {
  try {
    const state = (options.lstat ?? lstatSync)(target);
    if (state.isSymbolicLink() || !state.isFile()) throw new Error("not a direct regular file");
    if ((options.platform ?? process.platform) !== "win32") {
      const currentUid = options.currentUid ?? process.getuid?.();
      if (currentUid == null || state.uid !== currentUid || (state.mode & 0o077) !== 0) throw new Error("owner or mode mismatch");
    }
    return normalizedGatewayToken((options.readFile ?? ((path: string) => readFileSync(path, "utf8")))(target), "The gateway token file");
  } catch (error) {
    if (error instanceof SandGatewayConfigError) throw error;
    throw new SandGatewayConfigError(`Failed to read the private gateway token file ${target}.`);
  }
}

export function resolveGatewayServerConfig(
  env: NodeJS.ProcessEnv = process.env,
  generateToken: () => string = () => randomBytes(32).toString("base64url")
): GatewayServerConfig {
  const host = env.SAND_GATEWAY_BIND_HOST?.trim() || "127.0.0.1";
  const port = readPort(env.SAND_HOST_PORT);
  const tls = resolveTls(env);
  const directToken = env.SAND_GATEWAY_TOKEN?.trim();
  const tokenFile = env.SAND_GATEWAY_TOKEN_FILE?.trim();
  if (directToken && tokenFile) throw new SandGatewayConfigError("Gateway authentication must use either a direct token or a token file, not both.");
  const pinnedToken = tokenFile
    ? readPrivateGatewayTokenFile(tokenFile)
    : directToken == null || directToken.length === 0 ? undefined : normalizedGatewayToken(directToken, "SAND_GATEWAY_TOKEN");
  const requireAuth = !isLoopbackHost(host) || isTruthyEnv(env.SAND_GATEWAY_REQUIRE_AUTH) || (pinnedToken != null && pinnedToken.length > 0);
  const authToken = requireAuth ? (pinnedToken != null && pinnedToken.length > 0 ? pinnedToken : generateToken()) : undefined;
  return { host, ...(port === undefined ? {} : { port }), ...(authToken === undefined ? {} : { authToken }), ...(tls === undefined ? {} : { tls }) };
}

export function gatewayScheme(config: GatewayServerConfig): "http" | "https" { return config.tls == null ? "http" : "https"; }
