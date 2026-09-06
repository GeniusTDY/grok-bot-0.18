import { spawn, type ChildProcess } from "node:child_process";

import { type SandboxComputerConfig } from "../../shared/box-runtime.js";
import type { GatewayConnection } from "./gateway-descriptor-cache.js";

/**
 * "Sandbox Computer" box runtime.
 *
 * A Linux VPS runs the Grok Bot box/gateway on its loopback port 1340, kept
 * always on by a process manager such as systemd. This connector owns an SSH
 * "always-on" remote-forward-style local tunnel in the Electron main process:
 * `ssh -N -L 127.0.0.1:1340:127.0.0.1:1340`, then health-checks the forwarded
 * gateway on localhost:1340. It is the third box mechanism alongside the
 * managed remote sandbox and the local Docker VM.
 */

export const SANDBOX_COMPUTER_GATEWAY_URL = "http://127.0.0.1:1340";
export const SANDBOX_COMPUTER_GATEWAY_PORT = 1340;
const GATEWAY_READY_TIMEOUT_MS = 90_000;
const HEALTH_TIMEOUT_MS = 2_000;

export interface SandboxComputerStatus {
  readonly available: boolean;
  readonly running: boolean;
  readonly ready: boolean;
  readonly host: string;
  readonly detail: string;
}

interface SandboxComputerTunnel {
  readonly config: SandboxComputerConfig;
  readonly child: ChildProcess;
  readonly exited: Promise<void>;
}

// The box runtime is process-global (only one mode is active at a time), so a
// single module-level tunnel holder mirrors the local-Docker lifecycle lane.
let activeTunnel: SandboxComputerTunnel | undefined;

function sshTarget(config: SandboxComputerConfig): string {
  return config.user != null && config.user.length > 0
    ? `${config.user}@${config.host}`
    : config.host;
}

export function buildSshTunnelArgs(config: SandboxComputerConfig): string[] {
  const args: string[] = [
    "-N",
    "-o", "BatchMode=yes",
    "-o", "ServerAliveInterval=30",
    "-o", "ServerAliveCountMax=3",
    "-o", "ExitOnForwardFailure=yes",
    "-L", `127.0.0.1:${SANDBOX_COMPUTER_GATEWAY_PORT}:127.0.0.1:${SANDBOX_COMPUTER_GATEWAY_PORT}`,
    "-p", String(config.port),
  ];
  if (config.sshKey != null && config.sshKey.length > 0) args.push("-i", config.sshKey);
  args.push(sshTarget(config));
  return args;
}

async function gatewayReady(): Promise<boolean> {
  try {
    const response = await fetch(`${SANDBOX_COMPUTER_GATEWAY_URL}/health`, {
      signal: AbortSignal.timeout(HEALTH_TIMEOUT_MS),
    });
    return response.ok;
  } catch {
    return false;
  }
}

function configsMatch(a: SandboxComputerConfig, b: SandboxComputerConfig): boolean {
  return a.host === b.host
    && a.port === b.port
    && (a.user ?? "") === (b.user ?? "")
    && (a.sshKey ?? "") === (b.sshKey ?? "");
}

function processAlive(child: ChildProcess): boolean {
  return child.exitCode === null && child.signalCode === null;
}

function spawnTunnel(config: SandboxComputerConfig): SandboxComputerTunnel {
  // A changed selection replaces any prior tunnel so only one lives at a time.
  if (activeTunnel != null) {
    try { activeTunnel.child.kill("SIGTERM"); } catch {}
    activeTunnel = undefined;
  }
  const child = spawn("ssh", buildSshTunnelArgs(config), {
    stdio: "ignore",
    windowsHide: true,
  });
  let resolveExited!: () => void;
  const exited = new Promise<void>((resolve) => { resolveExited = resolve; });
  child.once("error", () => resolveExited());
  child.once("exit", () => resolveExited());
  child.once("close", () => resolveExited());
  const tunnel: SandboxComputerTunnel = { config, child, exited };
  activeTunnel = tunnel;
  return tunnel;
}

export async function stopSandboxComputerTunnel(): Promise<void> {
  const tunnel = activeTunnel;
  activeTunnel = undefined;
  if (tunnel == null) return;
  try { tunnel.child.kill("SIGTERM"); } catch {}
  await tunnel.exited.catch(() => undefined);
}

export async function getSandboxComputerStatus(
  config: SandboxComputerConfig,
): Promise<SandboxComputerStatus> {
  const tunnel = activeTunnel;
  const running = tunnel != null && processAlive(tunnel.child);
  const ready = running && await gatewayReady();
  const hostLabel = `${config.user != null && config.user.length > 0 ? `${config.user}@` : ""}${config.host}:${config.port}`;
  return {
    available: running || ready,
    running,
    ready,
    host: hostLabel,
    detail: ready
      ? "Sandbox Computer is ready."
      : running
        ? "SSH tunnel is up; waiting for the remote gateway."
        : tunnel == null
          ? "Not connected. The SSH tunnel is off."
          : "SSH tunnel is starting.",
  };
}

export async function ensureSandboxComputerTunnel(
  config: SandboxComputerConfig,
): Promise<GatewayConnection> {
  const current = activeTunnel;
  if (current != null && configsMatch(current.config, config) && processAlive(current.child)) {
    if (await gatewayReady()) return { baseUrl: SANDBOX_COMPUTER_GATEWAY_URL };
  }
  const tunnel = spawnTunnel(config);
  const deadline = Date.now() + GATEWAY_READY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    if (activeTunnel !== tunnel) {
      throw new Error("Sandbox Computer selection changed while its SSH tunnel was starting.");
    }
    if (await gatewayReady()) return { baseUrl: SANDBOX_COMPUTER_GATEWAY_URL };
    if (!processAlive(tunnel.child)) {
      throw new Error(
        `The SSH tunnel to the sandbox exited before its gateway became ready (exit code ${tunnel.child.exitCode ?? "none"}).`,
      );
    }
    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }
  throw new Error(
    `The remote sandbox gateway did not become reachable at ${SANDBOX_COMPUTER_GATEWAY_URL} within the timeout.`,
  );
}