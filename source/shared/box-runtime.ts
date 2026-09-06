export type SandBoxRuntime = "remote" | "local-docker" | "sandbox-computer";

export const DEFAULT_SAND_BOX_RUNTIME: SandBoxRuntime = "remote";

export function isSandBoxRuntime(value: unknown): value is SandBoxRuntime {
  return value === "remote" || value === "local-docker" || value === "sandbox-computer";
}

export const SANDBOX_COMPUTER_DEFAULT_PORT = 22;

export interface SandboxComputerConfig {
  readonly host: string;
  readonly port: number;
  readonly user?: string;
  readonly sshKey?: string;
}

export const DEFAULT_SANDBOX_COMPUTER_CONFIG: SandboxComputerConfig = {
  host: "localhost",
  port: SANDBOX_COMPUTER_DEFAULT_PORT,
};

export function normalizeSandboxComputerConfig(value: unknown): SandboxComputerConfig {
  const raw = typeof value === "object" && value != null && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
  const host = typeof raw.host === "string" ? raw.host.trim() : "";
  const rawPort = raw.port;
  const port = typeof rawPort === "number"
    ? rawPort
    : typeof rawPort === "string" && rawPort.trim().length > 0
      ? Number.parseInt(rawPort, 10)
      : SANDBOX_COMPUTER_DEFAULT_PORT;
  const user = typeof raw.user === "string" ? raw.user.trim() : "";
  const sshKey = typeof raw.sshKey === "string" ? raw.sshKey.trim() : "";
  return {
    host: host.length > 0 ? host : DEFAULT_SANDBOX_COMPUTER_CONFIG.host,
    port: Number.isInteger(port) && port > 0 && port <= 65_535 ? port : SANDBOX_COMPUTER_DEFAULT_PORT,
    ...(user.length > 0 ? { user } : {}),
    ...(sshKey.length > 0 ? { sshKey } : {}),
  };
}
