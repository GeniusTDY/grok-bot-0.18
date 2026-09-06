import { createHash, randomBytes } from "node:crypto";
import { spawn } from "node:child_process";
import { chmod, mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { SandSettingsStore } from "../../shared/node/settings/sand-settings-store.js";
import { hardenWindowsPrivatePath } from "../../shared/node/windows-private-path.js";
import { ensureSandboxComputerTunnel } from "./sandbox-computer-connector.js";
import type { RecreateResult } from "./box-recreate-commands.js";
import type { SandRemoteHostConnector } from "./box-host-connector.js";
import type { GatewayConnection } from "./gateway-descriptor-cache.js";

// Audited linux/amd64 manifest published behind sand-box-latest on 2026-08-30.
// Keep the runtime content-addressed; upgrades require an explicit review.
export const LOCAL_DOCKER_BOX_IMAGE = "public.ecr.aws/k0i0n2g5/cursorenvironments/universal@sha256:3f9e25e1e382b7c4b71e08eb549098a6106fadc615feba848e6cc5c1ef4be3b6";
export const LOCAL_DOCKER_BOX_CONTAINER = "grok-bot-local-vm";
export const LOCAL_DOCKER_GATEWAY_URL = "http://127.0.0.1:1340";
export const LOCAL_DOCKER_OWNER_LABEL = "com.grok-bot.local-vm=1";
export const LOCAL_DOCKER_NETWORK = "grok-bot-local-vm-net";
export const LOCAL_DOCKER_NETWORK_OWNER_LABEL = "com.grok-bot.local-vm-network=1";
export const LOCAL_DOCKER_CONTROL_VOLUME = "grok-bot-local-vm-control";
export const LOCAL_DOCKER_CONTROL_VOLUME_OWNER_LABEL = "com.grok-bot.local-vm-control=1";
export const LOCAL_DOCKER_GATEWAY_TOKEN_PATH = "/run/grok-bot-control/gateway-token";
export const LOCAL_DOCKER_EXEC_DAEMON_WRAPPER_PATH = "/usr/local/bin/start-exec-daemon";
export const LOCAL_DOCKER_SCHEMA_VERSION = "11";
const READY_TIMEOUT_MS = 180_000;
const OPTIONAL_CREDENTIAL_TIMEOUT_MS = 3_000;
const DOCKER_QUERY_TIMEOUT_MS = 30_000;
const DOCKER_LIFECYCLE_TIMEOUT_MS = 120_000;
const DOCKER_IMAGE_OPERATION_TIMEOUT_MS = 10 * 60_000;
const DOCKER_TERMINATION_GRACE_MS = 2_000;

/**
 * The stock image supervisor owns Computer/fork lifecycle, so its native exec
 * daemon must remain the only listener on 1337. This launcher preserves those
 * capabilities while dropping the model-facing daemon (and every descendant)
 * to the existing `box` account without capabilities. The gateway host stays
 * root so it alone can read the root-owned gateway credential file.
 */
export const LOCAL_DOCKER_EXEC_DAEMON_WRAPPER = [
  "#!/usr/bin/env bash",
  "set -euo pipefail",
  'requested_shell_user="${SAND_BOX_EXEC_SHELL_USER:-}"',
  "unset SAND_BOX_EXEC_SHELL_USER SAND_GATEWAY_TOKEN SAND_GATEWAY_TOKEN_FILE SAND_GATEWAY_TLS_KEY SAND_HOST_GATEWAY_TOKEN SAND_HOST_GATEWAY_NETWORK_TOKEN SAND_BOX_EXEC_DAEMON_AUTH_TOKEN SAND_INFERENCE_RENEWAL_CREDENTIAL SAND_DEV_INFERENCE_TOKEN_FILE SAND_PRODUCT_HTTP_TOKEN SAND_EGRESS_TUNNEL_NETWORK_TOKEN SAND_EGRESS_TUNNEL_BEARER SAND_LOCAL_EXEC_GENERATION_TOKEN",
  "export CURSOR_AGENT_SOCKET=/tmp/sand-identity.sock",
  '{ echo -1000 > "/proc/$$/oom_score_adj" || sudo -n sh -c "echo -1000 > /proc/$$/oom_score_adj"; } >/dev/null 2>&1 || true',
  "cd /workspace",
  "daemon=(",
  "  /exec-daemon/exec-daemon serve",
  "  --port 1337 --pty-websocket-port 1338",
  "  --auth-token local --rg-path /exec-daemon/rg --pty-auth-token local-pty",
  "  --computer-use-enabled --computer-use-lazy-init",
  "  --mcp-meta-tool-enabled --origin-cli-enabled",
  '  "$@"',
  ")",
  'case "$requested_shell_user" in',
  '  "") exec "${daemon[@]}" ;;',
  "  box)",
  '    box_uid="$(id -u box)"',
  '    box_gid="$(id -g box)"',
  '    if [ "$box_uid" -le 0 ] || [ "$box_gid" -le 0 ]; then echo "box exec daemon refuses uid/gid ${box_uid}:${box_gid}" >&2; exit 78; fi',
  '    if [ "$(id -u)" -eq 0 ]; then',
  "      marker=/var/lib/sand/grok-bot-model-shell-owner-v1",
  '      if [ ! -e "$marker" ]; then',
  '        chown -hR -- "$box_uid:$box_gid" /workspace',
  "        install -d -m 0755 -o root -g root /var/lib/sand",
  '        touch "$marker"',
  '        chown root:root "$marker"',
  '        chmod 0444 "$marker"',
  "      fi",
  '      drop=(/usr/bin/setpriv --reuid="$box_uid" --regid="$box_gid" --init-groups --bounding-set=-all --inh-caps=-all --ambient-caps=-all --no-new-privs /usr/bin/env HOME=/home/box USER=box LOGNAME=box NPM_CONFIG_PREFIX=/home/box/.local "PATH=/home/box/.local/bin:${PATH}")',
  "      exec \"${drop[@]}\" /bin/sh -ceu 'test \"$(id -u)\" -ne 0; test -w /workspace; test ! -r /run/grok-bot-control/gateway-token; exec \"$@\"' sh \"${daemon[@]}\"",
  '    elif [ "$(id -u)" = "$box_uid" ] && [ "$(id -g)" = "$box_gid" ]; then',
  "      exec /bin/sh -ceu 'test \"$(id -u)\" -ne 0; test -w /workspace; test ! -r /run/grok-bot-control/gateway-token; exec \"$@\"' sh \"${daemon[@]}\"",
  "    else",
  '      echo "box exec daemon refuses controller uid/gid $(id -u):$(id -g)" >&2',
  "      exit 78",
  "    fi",
  "    ;;",
  '  *) echo "unsupported SAND_BOX_EXEC_SHELL_USER: $requested_shell_user" >&2; exit 78 ;;',
  "esac",
  "",
].join("\n");

export interface LocalDockerStatus {
  readonly available: boolean;
  readonly running: boolean;
  readonly ready: boolean;
  readonly containerName: string;
  readonly image: string;
  readonly detail: string;
}

export interface CommandResult { readonly ok: boolean; readonly output: string }
export type DockerCommandRunner = (
  args: readonly string[],
  stdin?: string,
) => Promise<CommandResult>;
export interface InferenceCredential { readonly accessToken: string; readonly backendUrl: string; readonly expiresAtMs: number }
interface LocalHostBundle {
  readonly path: string;
  readonly sha256: string;
  readonly boxExecDaemonPath: string;
  readonly boxExecDaemonSha256: string;
  readonly execDaemonWrapperPath: string;
  readonly execDaemonWrapperSha256: string;
}

interface LocalHostBundleContent {
  readonly hostBytes: Buffer;
  readonly boxExecDaemonBytes: Buffer;
  readonly execDaemonWrapperBytes: Buffer;
  readonly sha256: string;
  readonly boxExecDaemonSha256: string;
  readonly execDaemonWrapperSha256: string;
}

export type LocalInferenceAuthProvider = "codex" | "claude-code";

export interface LocalDockerStartOptions {
  /** Mount only the credential directory belonging to this explicit provider. */
  readonly localAuthProvider?: LocalInferenceAuthProvider;
}

export function resolveLocalInferenceAuthProvider(provider: unknown): LocalInferenceAuthProvider | undefined {
  return provider === "codex" || provider === "claude-code" ? provider : undefined;
}

export function localDockerStartOptionsForProvider(provider: unknown): LocalDockerStartOptions {
  const localAuthProvider = resolveLocalInferenceAuthProvider(provider);
  return localAuthProvider == null ? {} : { localAuthProvider };
}

export interface DockerCommandOptions {
  readonly timeoutMs?: number;
  readonly terminationGraceMs?: number;
  readonly spawn?: typeof spawn;
}

function requiresConfirmedDockerCommandClose(args: readonly string[]): boolean {
  const command = args[0] ?? "";
  if (["info", "inspect", "logs"].includes(command)) return false;
  if (
    ["container", "network", "volume"].includes(command)
    && ["inspect", "ls"].includes(args[1] ?? "")
  ) return false;
  return true;
}

export function resolveDockerCommandTimeoutMs(args: readonly string[]): number {
  if (args[0] === "run") return DOCKER_IMAGE_OPERATION_TIMEOUT_MS;
  if (["info", "inspect", "logs", "exec"].includes(args[0] ?? "")) return DOCKER_QUERY_TIMEOUT_MS;
  if (["container", "network", "volume"].includes(args[0] ?? "") && ["inspect", "ls"].includes(args[1] ?? "")) return DOCKER_QUERY_TIMEOUT_MS;
  return DOCKER_LIFECYCLE_TIMEOUT_MS;
}

export function runDockerCommand(
  args: readonly string[],
  stdin?: string,
  options: DockerCommandOptions = {},
): Promise<CommandResult> {
  return new Promise((resolve) => {
    const timeoutMs = options.timeoutMs ?? resolveDockerCommandTimeoutMs(args);
    const terminationGraceMs = options.terminationGraceMs ?? DOCKER_TERMINATION_GRACE_MS;
    const requiresConfirmedClose = requiresConfirmedDockerCommandClose(args);
    const spawnDocker = options.spawn ?? spawn;
    const child = spawnDocker("docker", [...args], {
      stdio: [stdin == null ? "ignore" : "pipe", "pipe", "pipe"],
      windowsHide: true,
    });
    let output = "";
    let settled = false;
    let timedOut = false;
    let forceTimer: ReturnType<typeof setTimeout> | undefined;
    const append = (chunk: Buffer): void => { output += chunk.toString(); if (output.length > 200_000) output = output.slice(-200_000); };
    const finish = (ok: boolean, suffix = ""): void => {
      if (settled) return;
      settled = true;
      clearTimeout(timeoutTimer);
      if (forceTimer !== undefined) clearTimeout(forceTimer);
      const combined = `${output}${suffix.length === 0 ? "" : `\n${suffix}`}`.trim();
      resolve({ ok, output: combined });
    };
    child.stdout?.on("data", append);
    child.stderr?.on("data", append);
    child.stdin?.on("error", () => undefined);
    child.once("error", (error) => {
      if (timedOut && requiresConfirmedClose) {
        output = `${output}\n${error.message}`.trim();
        return;
      }
      finish(false, error.message);
    });
    child.once("close", (code) => finish(!timedOut && code === 0, timedOut ? `Docker command timed out after ${timeoutMs} ms.` : ""));
    const timeoutTimer = setTimeout(() => {
      timedOut = true;
      try { child.kill("SIGTERM"); } catch {}
      forceTimer = setTimeout(() => {
        try { child.kill("SIGKILL"); } catch {}
        // A query may be abandoned after the child ignores SIGKILL. A
        // mutating Docker CLI must not release the lifecycle lane until its
        // process actually closes: its daemon request may still be carrying a
        // late run/start/restart after the final quit stop otherwise.
        if (!requiresConfirmedClose) {
          finish(false, `Docker command timed out after ${timeoutMs} ms.`);
        }
      }, terminationGraceMs);
      forceTimer.unref?.();
    }, timeoutMs);
    timeoutTimer.unref?.();
    if (stdin != null) child.stdin?.end(stdin);
  });
}

const runDocker: DockerCommandRunner = runDockerCommand;

function credentialPath(settingsPath: string): string {
  return join(dirname(settingsPath), "local-docker-vm.json");
}

function inferenceCredentialPath(settingsPath: string): string {
  return join(dirname(settingsPath), "local-docker-credential", "inference.json");
}

async function persistInferenceCredential(settingsPath: string, credential: InferenceCredential): Promise<string> {
  const target = inferenceCredentialPath(settingsPath);
  const temporary = `${target}.${process.pid}.tmp`;
  await mkdir(dirname(target), { recursive: true });
  await writeFile(temporary, `${JSON.stringify({ accessToken: credential.accessToken, expiresAtMs: credential.expiresAtMs })}\n`, { encoding: "utf8", mode: 0o600 });
  try {
    if (process.platform === "win32") await hardenWindowsPrivatePath(temporary);
    else await chmod(temporary, 0o600);
    await rename(temporary, target);
  } finally {
    await rm(temporary, { force: true }).catch(() => undefined);
  }
  if (process.platform === "win32") await hardenWindowsPrivatePath(target);
  else await chmod(target, 0o600);
  return target;
}

async function readOrCreateToken(settingsPath: string): Promise<string> {
  const target = credentialPath(settingsPath);
  const stored = await readStoredToken(settingsPath);
  if (stored != null) {
    if (process.platform === "win32") await hardenWindowsPrivatePath(target);
    else await chmod(target, 0o600);
    return stored;
  }
  const token = randomBytes(32).toString("hex");
  await mkdir(dirname(target), { recursive: true });
  const temporary = `${target}.${process.pid}.${randomBytes(8).toString("hex")}.tmp`;
  await writeFile(temporary, `${JSON.stringify({ schemaVersion: 1, token }, null, 2)}\n`, { encoding: "utf8", mode: 0o600, flag: "wx" });
  try {
    if (process.platform === "win32") await hardenWindowsPrivatePath(temporary);
    else await chmod(temporary, 0o600);
    await rm(target, { force: true });
    await rename(temporary, target);
  } finally {
    await rm(temporary, { force: true }).catch(() => undefined);
  }
  return token;
}

async function readStoredToken(settingsPath: string): Promise<string | undefined> {
  try {
    const parsed = JSON.parse(await readFile(credentialPath(settingsPath), "utf8")) as {
      token?: unknown;
    };
    return typeof parsed.token === "string" && /^[A-Za-z0-9_-]{32,256}$/.test(parsed.token)
      ? parsed.token
      : undefined;
  } catch {
    return undefined;
  }
}

async function gatewayReady(): Promise<boolean> {
  try {
    const response = await fetch(`${LOCAL_DOCKER_GATEWAY_URL}/health`, {
      signal: AbortSignal.timeout(2_000),
    });
    return response.ok;
  } catch { return false; }
}

const MODEL_SHELL_ATTESTATION_COMMAND = [
  "set -eu",
  'box_uid="$(id -u box)"',
  'test "$box_uid" -gt 0',
  "found=0",
  "for process_root in /proc/[0-9]*; do",
  '  executable="$(readlink "$process_root/exe" 2>/dev/null || true)"',
  '  test "$executable" = "/exec-daemon/node" || continue',
  '  arguments="$(tr "\\000" " " < "$process_root/cmdline")"',
  '  case "$arguments" in *"/exec-daemon/index.js serve --port 1337 "*) ;; *) continue ;; esac',
  "  uid= cap_eff= no_new_privs=",
  "  while read -r key first _rest; do",
  '    case "$key" in Uid:) uid="$first" ;; CapEff:) cap_eff="$first" ;; NoNewPrivs:) no_new_privs="$first" ;; esac',
  '  done < "$process_root/status"',
  '  test "$uid" = "$box_uid"',
  '  test "$cap_eff" = "0000000000000000"',
  '  test "$no_new_privs" = "1"',
  '  if tr "\\000" "\\n" < "$process_root/environ" | grep -q "^SAND_GATEWAY_TOKEN_FILE="; then exit 79; fi',
  "  found=$((found + 1))",
  "done",
  'test "$found" -eq 1',
  "/usr/bin/setpriv --reuid=box --regid=box --init-groups --bounding-set=-all --inh-caps=-all --ambient-caps=-all --no-new-privs /bin/sh -ceu 'test \"$(id -u)\" -ne 0; test -w /workspace; test ! -r /run/grok-bot-control/gateway-token'",
].join("\n");

async function modelShellIsolationReady(): Promise<boolean> {
  const result = await runDocker([
    "exec", "--user", "0:0", LOCAL_DOCKER_BOX_CONTAINER,
    "/bin/sh", "-ceu", MODEL_SHELL_ATTESTATION_COMMAND,
  ]);
  return result.ok;
}

type DockerResourceKind = "container" | "network" | "volume";

function dockerResourceListArguments(
  kind: DockerResourceKind,
  name: string,
): readonly string[] {
  return kind === "container"
    ? ["container", "ls", "--all", "--filter", `name=^/${name}$`, "--format", "{{.Names}}"]
    : [kind, "ls", "--filter", `name=^${name}$`, "--format", "{{.Name}}"];
}

async function confirmDockerResourceAbsent(
  kind: DockerResourceKind,
  name: string,
  inspectFailure: CommandResult,
  command: DockerCommandRunner,
): Promise<void> {
  const listed = await command(dockerResourceListArguments(kind, name));
  if (!listed.ok) {
    throw new Error(`Could not inspect the local Docker ${kind} ${name}, and its absence could not be confirmed: ${listed.output || "Docker returned an unspecified list error."}`);
  }
  const names = listed.output.split(/\r?\n/u).map(value => value.trim()).filter(Boolean);
  if (names.length === 0) return;
  if (names.length === 1 && names[0] === name) {
    throw new Error(`Docker could not inspect the existing local ${kind} ${name}: ${inspectFailure.output}`);
  }
  throw new Error(`Docker returned unexpected data while confirming that local ${kind} ${name} is absent.`);
}

async function inspectContainer(
  command: DockerCommandRunner = runDocker,
): Promise<{ exists: boolean; running: boolean; owned: boolean; image: string; networkMode: string; hostSha256: string; boxExecDaemonSha256: string; execDaemonWrapperSha256: string; gatewayTokenSha256: string; hasGatewayTokenEnv: boolean; hasGatewayTokenFile: boolean; hasInferenceCredential: boolean; localAuthProvider: string; hasIsolatedModelShell: boolean; schemaVersion: string }> {
  const result = await command(["inspect", "--format", "{{json .}}", LOCAL_DOCKER_BOX_CONTAINER]);
  if (!result.ok) {
    await confirmDockerResourceAbsent("container", LOCAL_DOCKER_BOX_CONTAINER, result, command);
    return { exists: false, running: false, owned: false, image: "", networkMode: "", hostSha256: "", boxExecDaemonSha256: "", execDaemonWrapperSha256: "", gatewayTokenSha256: "", hasGatewayTokenEnv: false, hasGatewayTokenFile: false, hasInferenceCredential: false, localAuthProvider: "", hasIsolatedModelShell: false, schemaVersion: "" };
  }
  try {
    const value = JSON.parse(result.output) as { State?: { Running?: unknown }; Config?: { Image?: unknown; Env?: unknown; Labels?: Record<string, unknown> }; HostConfig?: { NetworkMode?: unknown } };
    const environment = Array.isArray(value.Config?.Env) ? value.Config.Env.filter((entry): entry is string => typeof entry === "string") : [];
    return {
      exists: true,
      running: value.State?.Running === true,
      owned: value.Config?.Labels?.["com.grok-bot.local-vm"] === "1",
      image: typeof value.Config?.Image === "string" ? value.Config.Image : "",
      networkMode: typeof value.HostConfig?.NetworkMode === "string" ? value.HostConfig.NetworkMode : "",
      hostSha256: typeof value.Config?.Labels?.["com.grok-bot.local-vm.host-sha256"] === "string" ? value.Config.Labels["com.grok-bot.local-vm.host-sha256"] as string : "",
      boxExecDaemonSha256: typeof value.Config?.Labels?.["com.grok-bot.local-vm.box-exec-daemon-sha256"] === "string" ? value.Config.Labels["com.grok-bot.local-vm.box-exec-daemon-sha256"] as string : "",
      execDaemonWrapperSha256: typeof value.Config?.Labels?.["com.grok-bot.local-vm.exec-daemon-wrapper-sha256"] === "string" ? value.Config.Labels["com.grok-bot.local-vm.exec-daemon-wrapper-sha256"] as string : "",
      gatewayTokenSha256: typeof value.Config?.Labels?.["com.grok-bot.local-vm.gateway-token-sha256"] === "string" ? value.Config.Labels["com.grok-bot.local-vm.gateway-token-sha256"] as string : "",
      hasGatewayTokenEnv: environment.some(entry => entry.startsWith("SAND_GATEWAY_TOKEN=")),
      hasGatewayTokenFile: environment.includes(`SAND_GATEWAY_TOKEN_FILE=${LOCAL_DOCKER_GATEWAY_TOKEN_PATH}`),
      hasInferenceCredential: value.Config?.Labels?.["com.grok-bot.local-vm.inference-credential"] === "1",
      localAuthProvider: typeof value.Config?.Labels?.["com.grok-bot.local-vm.local-auth-provider"] === "string" ? value.Config.Labels["com.grok-bot.local-vm.local-auth-provider"] as string : "",
      hasIsolatedModelShell: value.Config?.Labels?.["com.grok-bot.local-vm.model-shell"] === "box",
      schemaVersion: typeof value.Config?.Labels?.["com.grok-bot.local-vm.schema-version"] === "string" ? value.Config.Labels["com.grok-bot.local-vm.schema-version"] as string : "",
    };
  } catch { throw new Error("Docker returned malformed container inspection data."); }
}

async function inspectControlVolume(
  command: DockerCommandRunner = runDocker,
): Promise<{ exists: boolean; owned: boolean; driver: string }> {
  const result = await command(["volume", "inspect", "--format", "{{json .}}", LOCAL_DOCKER_CONTROL_VOLUME]);
  if (!result.ok) {
    await confirmDockerResourceAbsent("volume", LOCAL_DOCKER_CONTROL_VOLUME, result, command);
    return { exists: false, owned: false, driver: "" };
  }
  try {
    const value = JSON.parse(result.output) as { Driver?: unknown; Labels?: Record<string, unknown> };
    return {
      exists: true,
      owned: value.Labels?.["com.grok-bot.local-vm.control"] === "1",
      driver: typeof value.Driver === "string" ? value.Driver : "",
    };
  } catch { throw new Error("Docker returned malformed control-volume inspection data."); }
}

function assertControlVolume(volume: Awaited<ReturnType<typeof inspectControlVolume>>): void {
  if (!isControlVolumeValid(volume)) {
    throw new Error(`Local Docker VM cannot use ${LOCAL_DOCKER_CONTROL_VOLUME}: the volume is not owned by Grok Bot.`);
  }
}

function isControlVolumeValid(
  volume: Awaited<ReturnType<typeof inspectControlVolume>>,
): boolean {
  return volume.exists && volume.owned && volume.driver === "local";
}

async function ensureControlVolume(): Promise<void> {
  const inspected = await inspectControlVolume();
  if (inspected.exists) {
    assertControlVolume(inspected);
    return;
  }
  const created = await runDocker(["volume", "create", "--label", LOCAL_DOCKER_CONTROL_VOLUME_OWNER_LABEL, LOCAL_DOCKER_CONTROL_VOLUME]);
  if (!created.ok) {
    const raced = await inspectControlVolume();
    if (!raced.exists) throw new Error(`Could not create the local Docker control volume: ${created.output}`);
    assertControlVolume(raced);
  }
}

async function provisionGatewayToken(token: string): Promise<void> {
  const command = [
    "set -eu",
    "umask 077",
    "mkdir -p /control",
    "temporary=/control/gateway-token.tmp",
    "trap 'rm -f \"$temporary\"' EXIT",
    "cat > \"$temporary\"",
    "chmod 600 \"$temporary\"",
    "mv -f \"$temporary\" /control/gateway-token",
    "trap - EXIT",
  ].join("\n");
  const result = await runDocker([
    "run", "--rm", "--platform", "linux/amd64", "--network", "none",
    "--user", "0:0", "--cap-drop", "ALL", "--security-opt", "no-new-privileges:true",
    "--mount", `type=volume,src=${LOCAL_DOCKER_CONTROL_VOLUME},dst=/control`,
    "--entrypoint", "/bin/sh", LOCAL_DOCKER_BOX_IMAGE, "-ceu", command,
  ], `${token}\n`);
  if (!result.ok) throw new Error(`Could not provision the local Docker gateway credential: ${result.output}`);
}

async function inspectDedicatedNetwork(
  command: DockerCommandRunner = runDocker,
): Promise<{ exists: boolean; owned: boolean; driver: string; internal: boolean; interContainerCommunication: string; foreignContainers: readonly string[] }> {
  const result = await command(["network", "inspect", "--format", "{{json .}}", LOCAL_DOCKER_NETWORK]);
  if (!result.ok) {
    await confirmDockerResourceAbsent("network", LOCAL_DOCKER_NETWORK, result, command);
    return { exists: false, owned: false, driver: "", internal: false, interContainerCommunication: "", foreignContainers: [] };
  }
  try {
    const value = JSON.parse(result.output) as { Driver?: unknown; Internal?: unknown; Labels?: Record<string, unknown>; Options?: Record<string, unknown>; Containers?: Record<string, { Name?: unknown }> };
    const attachedNames = Object.values(value.Containers ?? {}).flatMap(container => typeof container.Name === "string" ? [container.Name] : ["<unknown>"]);
    return {
      exists: true,
      owned: value.Labels?.["com.grok-bot.local-vm-network"] === "1",
      driver: typeof value.Driver === "string" ? value.Driver : "",
      internal: value.Internal === true,
      interContainerCommunication: typeof value.Options?.["com.docker.network.bridge.enable_icc"] === "string"
        ? value.Options["com.docker.network.bridge.enable_icc"] as string
        : "",
      foreignContainers: attachedNames.filter(name => name !== LOCAL_DOCKER_BOX_CONTAINER),
    };
  } catch { throw new Error("Docker returned malformed local-network inspection data."); }
}

function assertDedicatedNetwork(network: Awaited<ReturnType<typeof inspectDedicatedNetwork>>): void {
  if (!isDedicatedNetworkValid(network)) {
    throw new Error(`Local Docker VM cannot use ${LOCAL_DOCKER_NETWORK}: it must be the owned ICC-disabled bridge with no other containers attached.`);
  }
}

function isDedicatedNetworkValid(
  network: Awaited<ReturnType<typeof inspectDedicatedNetwork>>,
): boolean {
  return network.exists
    && network.owned
    && network.driver === "bridge"
    && !network.internal
    && network.interContainerCommunication === "false"
    && network.foreignContainers.length === 0;
}

async function ensureDedicatedNetwork(): Promise<void> {
  const inspected = await inspectDedicatedNetwork();
  if (inspected.exists) {
    assertDedicatedNetwork(inspected);
    return;
  }
  const created = await runDocker([
    "network", "create",
    "--driver", "bridge",
    "--opt", "com.docker.network.bridge.enable_icc=false",
    "--label", LOCAL_DOCKER_NETWORK_OWNER_LABEL,
    LOCAL_DOCKER_NETWORK,
  ]);
  if (!created.ok) {
    const raced = await inspectDedicatedNetwork();
    if (!raced.exists) throw new Error(`Could not create the isolated local Docker network: ${created.output}`);
    assertDedicatedNetwork(raced);
  }
}

export async function getLocalDockerStatus(
  settingsPath: string,
  provider?: unknown,
): Promise<LocalDockerStatus> {
  const daemon = await runDocker(["info", "--format", "{{.ServerVersion}}"]).catch(() => ({ ok: false, output: "Docker is not installed." }));
  if (!daemon.ok) return { available: false, running: false, ready: false, containerName: LOCAL_DOCKER_BOX_CONTAINER, image: LOCAL_DOCKER_BOX_IMAGE, detail: daemon.output || "Docker is not running." };
  const inspected = await inspectContainer();
  if (!inspected.exists) return { available: true, running: false, ready: false, containerName: LOCAL_DOCKER_BOX_CONTAINER, image: LOCAL_DOCKER_BOX_IMAGE, detail: "Ready to create the local VM." };
  if (!inspected.owned) return { available: true, running: inspected.running, ready: false, containerName: LOCAL_DOCKER_BOX_CONTAINER, image: inspected.image, detail: `Container ${LOCAL_DOCKER_BOX_CONTAINER} exists but is not owned by Grok Bot.` };
  try {
    const [bundle, token, network, controlVolume] = await Promise.all([
      readCurrentHostBundleContent(),
      readStoredToken(settingsPath),
      inspectDedicatedNetwork(),
      inspectControlVolume(),
    ]);
    const localAuthProvider = resolveLocalInferenceAuthProvider(provider);
    // Cursor's short-lived credential is optional. Every other provider has an
    // exact credential mode derivable from desktop settings.
    const expectedInferenceCredential = provider === "cursor"
      ? inspected.hasInferenceCredential
      : false;
    const expectedIsolatedModelShell = localAuthProvider == null
      && !expectedInferenceCredential;
    const expectedTokenSha256 = token == null
      ? ""
      : createHash("sha256").update(token).digest("hex");
    const configurationMatches = inspected.image === LOCAL_DOCKER_BOX_IMAGE
      && inspected.schemaVersion === LOCAL_DOCKER_SCHEMA_VERSION
      && inspected.networkMode === LOCAL_DOCKER_NETWORK
      && isDedicatedNetworkValid(network)
      && isControlVolumeValid(controlVolume)
      && inspected.hostSha256 === bundle.sha256
      && inspected.boxExecDaemonSha256 === bundle.boxExecDaemonSha256
      && inspected.execDaemonWrapperSha256 === bundle.execDaemonWrapperSha256
      && expectedTokenSha256.length > 0
      && inspected.gatewayTokenSha256 === expectedTokenSha256
      && !inspected.hasGatewayTokenEnv
      && inspected.hasGatewayTokenFile
      && inspected.hasInferenceCredential === expectedInferenceCredential
      && inspected.localAuthProvider === (localAuthProvider ?? "none")
      && inspected.hasIsolatedModelShell === expectedIsolatedModelShell;
    const modelShellReady = configurationMatches
      && expectedIsolatedModelShell
      ? await modelShellIsolationReady()
      : configurationMatches;
    const ready = inspected.running
      && configurationMatches
      && modelShellReady
      && await gatewayReady();
    const detail = ready
      ? "Local Docker VM is ready."
      : !configurationMatches
        ? "Local Docker VM configuration differs from this app and must be reconciled."
        : !inspected.running
          ? "Local Docker VM is stopped."
          : expectedIsolatedModelShell && !modelShellReady
            ? "Local Docker VM model-shell isolation is not ready."
            : "Container is starting.";
    return { available: true, running: inspected.running, ready, containerName: LOCAL_DOCKER_BOX_CONTAINER, image: inspected.image, detail };
  } catch (error) {
    return {
      available: true,
      running: inspected.running,
      ready: false,
      containerName: LOCAL_DOCKER_BOX_CONTAINER,
      image: inspected.image,
      detail: `Could not attest the local Docker VM: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

interface LocalDockerLifecycleLane {
  generation: number;
  tail: Promise<void>;
  closedForQuit: boolean;
  latestEnsure: {
    readonly generation: number;
    readonly key: string;
    readonly promise: Promise<SerializedLocalDockerEnsureResult>;
  } | undefined;
}

export interface SerializedLocalDockerLifecycleResult<T> {
  readonly value: T;
  readonly generation: number;
  readonly isSuperseded: () => boolean;
}

interface SerializedLocalDockerEnsureResult
  extends SerializedLocalDockerLifecycleResult<GatewayConnection> {
  readonly connection: GatewayConnection;
}

// The container, network, and control volume have process-global fixed names,
// so every settings-path spelling must share one mutation lane and quit fence.
const localDockerLifecycleLaneState: LocalDockerLifecycleLane = {
  generation: 0,
  tail: Promise.resolve(),
  closedForQuit: false,
  latestEnsure: undefined,
};

export class LocalDockerLifecycleClosedError extends Error {
  constructor() {
    super("Local Docker lifecycle intake is closed for application quit.");
    this.name = "LocalDockerLifecycleClosedError";
  }
}

class StaleLocalDockerSelectionError extends Error {
  constructor() {
    super("Local Docker selection changed while its container was starting.");
    this.name = "StaleLocalDockerSelectionError";
  }
}

function localDockerLifecycleLane(_settingsPath: string): LocalDockerLifecycleLane {
  return localDockerLifecycleLaneState;
}

function isLocalDockerLifecycleGenerationCurrent(
  _settingsPath: string,
  generation: number,
): boolean {
  return localDockerLifecycleLaneState.generation === generation;
}

/**
 * Serializes every mutation of the one process-owned local container.
 * Enqueuing a newer mutation advances the generation immediately, so a
 * connector waiting on an older ensure can never publish that stale result.
 */
function enqueueLocalDockerLifecycleMutation<T>(
  settingsPath: string,
  operation: (generation: number) => Promise<T>,
  allowAfterQuit: boolean,
): Promise<SerializedLocalDockerLifecycleResult<T>> {
  const lane = localDockerLifecycleLane(settingsPath);
  if (lane.closedForQuit && !allowAfterQuit) {
    return Promise.reject(new LocalDockerLifecycleClosedError());
  }
  const generation = lane.generation + 1;
  lane.generation = generation;
  const promise = lane.tail.catch(() => undefined).then(async () => ({
    value: await operation(generation),
    generation,
    isSuperseded: () => lane.generation !== generation,
  }));
  lane.tail = promise.then(() => undefined, () => undefined);
  return promise;
}

export function serializeLocalDockerLifecycleMutation<T>(
  settingsPath: string,
  operation: (generation: number) => Promise<T>,
): Promise<SerializedLocalDockerLifecycleResult<T>> {
  return enqueueLocalDockerLifecycleMutation(settingsPath, operation, false);
}

function serializeLocalDockerEnsure(
  settingsPath: string,
  key: string,
  ensure: (generation: number) => Promise<GatewayConnection>,
): Promise<SerializedLocalDockerEnsureResult> {
  const lane = localDockerLifecycleLane(settingsPath);
  if (
    lane.latestEnsure?.key === key
    && lane.latestEnsure.generation === lane.generation
  ) return lane.latestEnsure.promise;

  const serialized = serializeLocalDockerLifecycleMutation(settingsPath, ensure);
  const promise = serialized.then((result) => ({
    ...result,
    connection: result.value,
  }));
  const generation = lane.generation;
  lane.latestEnsure = { generation, key, promise };
  void promise.then(
    () => {
      if (lane.latestEnsure?.generation === generation) lane.latestEnsure = undefined;
    },
    () => {
      if (lane.latestEnsure?.generation === generation) lane.latestEnsure = undefined;
    },
  );
  return promise;
}

async function isDirectory(path: string): Promise<boolean> {
  try { return (await stat(path)).isDirectory(); } catch { return false; }
}

async function readCurrentHostBundleContent(): Promise<LocalHostBundleContent> {
  const moduleDirectory = dirname(fileURLToPath(import.meta.url));
  const readRuntime = async (relative: string): Promise<Buffer> => {
    const candidates = [resolve(moduleDirectory, `../${relative}`), resolve(moduleDirectory, `../../${relative}`)];
    for (const candidate of candidates) {
      try { return await readFile(candidate); } catch {}
    }
    throw new Error(`The reconstructed runtime is unavailable at ${candidates.join(" or ")}; refusing to start a stock local VM.`);
  };
  const hostBytes = await readRuntime("host/host-main.cjs");
  const boxExecDaemonBytes = await readRuntime("box-exec-daemon/main.cjs");
  const execDaemonWrapperBytes = Buffer.from(LOCAL_DOCKER_EXEC_DAEMON_WRAPPER, "utf8");
  const sha256 = createHash("sha256").update(hostBytes).digest("hex");
  const boxExecDaemonSha256 = createHash("sha256").update(boxExecDaemonBytes).digest("hex");
  const execDaemonWrapperSha256 = createHash("sha256").update(execDaemonWrapperBytes).digest("hex");
  return {
    hostBytes,
    boxExecDaemonBytes,
    execDaemonWrapperBytes,
    sha256,
    boxExecDaemonSha256,
    execDaemonWrapperSha256,
  };
}

async function stageCurrentHostBundle(settingsPath: string): Promise<LocalHostBundle> {
  const {
    hostBytes,
    boxExecDaemonBytes,
    execDaemonWrapperBytes,
    sha256,
    boxExecDaemonSha256,
    execDaemonWrapperSha256,
  } = await readCurrentHostBundleContent();
  const directory = join(dirname(settingsPath), "local-docker-runtime", `${sha256}-${boxExecDaemonSha256}-${execDaemonWrapperSha256}`);
  const persistRuntime = async (name: string, bytes: Buffer, mode: number): Promise<string> => {
    const target = join(directory, name);
    await mkdir(dirname(target), { recursive: true });
    let exists = false;
    try {
      const existing = await readFile(target);
      if (!existing.equals(bytes)) throw new Error(`Content-addressed local runtime ${target} has unexpected bytes.`);
      exists = true;
    } catch (error) {
      const code = typeof error === "object" && error != null && "code" in error ? String(error.code) : "";
      if (code !== "ENOENT") throw error;
    }
    if (!exists) {
      const temporary = `${target}.${process.pid}.tmp`;
      await writeFile(temporary, bytes, { mode, flag: "wx" });
      try {
        await chmod(temporary, mode);
        if (process.platform === "win32") await hardenWindowsPrivatePath(temporary);
        await rename(temporary, target);
      } finally {
        await rm(temporary, { force: true }).catch(() => undefined);
      }
    }
    await chmod(target, mode);
    if (process.platform === "win32") await hardenWindowsPrivatePath(target);
    return target;
  };
  await mkdir(directory, { recursive: true });
  return {
    path: await persistRuntime("host-main.cjs", hostBytes, 0o600),
    sha256,
    boxExecDaemonPath: await persistRuntime("box-exec-daemon/main.cjs", boxExecDaemonBytes, 0o600),
    boxExecDaemonSha256,
    execDaemonWrapperPath: await persistRuntime("start-exec-daemon", execDaemonWrapperBytes, 0o700),
    execDaemonWrapperSha256,
  };
}

async function localAuthMountArguments(provider: LocalInferenceAuthProvider): Promise<string[]> {
  const [sourceDirectory, destination] = provider === "codex"
    ? [".codex", "/root/.codex"] as const
    : [".claude", "/root/.claude"] as const;
  const source = join(homedir(), sourceDirectory);
  return await isDirectory(source)
    ? ["--mount", `type=bind,src=${source},dst=${destination},readonly`]
    : [];
}

async function ensureLocalDockerBox(
  settingsPath: string,
  inferenceCredential?: InferenceCredential,
  options: LocalDockerStartOptions = {},
  isSuperseded: () => boolean = () => false,
): Promise<GatewayConnection> {
  const assertCurrent = (): void => {
    if (isSuperseded()) throw new StaleLocalDockerSelectionError();
  };
  assertCurrent();
  const localAuthProvider = options.localAuthProvider;
  const localAuthProviderLabel = localAuthProvider ?? "none";
  const isolateModelShell = localAuthProvider == null && inferenceCredential == null;
  const token = await readOrCreateToken(settingsPath);
  const gatewayTokenSha256 = createHash("sha256").update(token).digest("hex");
  const hostBundle = await stageCurrentHostBundle(settingsPath);
  if (inferenceCredential == null) {
    await rm(inferenceCredentialPath(settingsPath), { force: true });
  }
  const inferenceFile = inferenceCredential == null ? undefined : await persistInferenceCredential(settingsPath, inferenceCredential);
  assertCurrent();
  const daemon = await runDocker(["info", "--format", "{{.ServerVersion}}"]).catch(() => ({ ok: false, output: "Docker is not installed." }));
  if (!daemon.ok) throw new Error(`Local Docker VM is selected, but Docker is unavailable: ${daemon.output || "start Docker and try again"}`);
  assertCurrent();
  await ensureDedicatedNetwork();
  await ensureControlVolume();
  assertCurrent();
  const inspected = await inspectContainer();
  if (inspected.exists && !inspected.owned) throw new Error(`Local Docker VM cannot use ${LOCAL_DOCKER_BOX_CONTAINER}: an unowned container already has that name.`);
  const shouldReplace = inspected.exists && (
    inspected.image !== LOCAL_DOCKER_BOX_IMAGE
    || inspected.schemaVersion !== LOCAL_DOCKER_SCHEMA_VERSION
    || inspected.networkMode !== LOCAL_DOCKER_NETWORK
    || inspected.hostSha256 !== hostBundle.sha256
    || inspected.boxExecDaemonSha256 !== hostBundle.boxExecDaemonSha256
    || inspected.execDaemonWrapperSha256 !== hostBundle.execDaemonWrapperSha256
    || inspected.gatewayTokenSha256 !== gatewayTokenSha256
    || inspected.hasGatewayTokenEnv
    || !inspected.hasGatewayTokenFile
    || inspected.hasInferenceCredential !== (inferenceCredential != null)
    || inspected.localAuthProvider !== localAuthProviderLabel
    || inspected.hasIsolatedModelShell !== isolateModelShell
  );
  if (shouldReplace) {
    const removed = await runDocker(["rm", "--force", LOCAL_DOCKER_BOX_CONTAINER]);
    if (!removed.ok) throw new Error(`Could not replace the local VM with the current app runtime: ${removed.output}`);
  }
  assertCurrent();
  const current = shouldReplace ? await inspectContainer() : inspected;
  if (current.exists && !current.running) {
    const started = await runDocker(["start", LOCAL_DOCKER_BOX_CONTAINER]);
    if (!started.ok) throw new Error(`Could not start the local Docker VM: ${started.output}`);
  } else if (!current.exists) {
    assertCurrent();
    await provisionGatewayToken(token);
    const authMounts = localAuthProvider == null ? [] : await localAuthMountArguments(localAuthProvider);
    const created = await runDocker([
      "run", "--detach", "--name", LOCAL_DOCKER_BOX_CONTAINER,
      "--label", LOCAL_DOCKER_OWNER_LABEL, "--label", `com.grok-bot.local-vm.host-sha256=${hostBundle.sha256}`,
      "--label", `com.grok-bot.local-vm.box-exec-daemon-sha256=${hostBundle.boxExecDaemonSha256}`,
      "--label", `com.grok-bot.local-vm.exec-daemon-wrapper-sha256=${hostBundle.execDaemonWrapperSha256}`,
      "--label", `com.grok-bot.local-vm.gateway-token-sha256=${gatewayTokenSha256}`,
      "--label", `com.grok-bot.local-vm.inference-credential=${inferenceCredential == null ? "0" : "1"}`,
      "--label", `com.grok-bot.local-vm.local-auth-provider=${localAuthProviderLabel}`,
      "--label", `com.grok-bot.local-vm.model-shell=${isolateModelShell ? "box" : "root"}`,
      "--label", `com.grok-bot.local-vm.schema-version=${LOCAL_DOCKER_SCHEMA_VERSION}`,
      "--platform", "linux/amd64", "--restart", "unless-stopped",
      "--network", LOCAL_DOCKER_NETWORK,
      "--security-opt", "no-new-privileges:true",
      "--cap-drop", "NET_RAW",
      "--env", "SAND_SUPERVISOR_ENABLED=1", "--env", "SAND_BOX_AUTO_UPDATE=0", "--env", "SAND_USE_EXISTING_BOX_EXEC_DAEMON=1", "--env", "SAND_TREE_SITTER_NODE_DEPS=/home/box/deps", "--env", "NODE_PATH=/home/box/deps", "--env", "SAND_GATEWAY_BIND_HOST=0.0.0.0", "--env", "SAND_HOST_PORT=1340", "--env", `SAND_GATEWAY_TOKEN_FILE=${LOCAL_DOCKER_GATEWAY_TOKEN_PATH}`,
      ...(isolateModelShell ? ["--env", "SAND_BOX_EXEC_SHELL_USER=box"] : []),
      ...(inferenceCredential == null ? [] : ["--env", "SAND_DEV_INFERENCE_TOKEN_FILE=/run/grok-bot/inference.json", "--env", `SAND_BACKEND_URL=${inferenceCredential.backendUrl}`]),
      "--publish", "127.0.0.1:1340:1340",
      "--publish", "127.0.0.1:6080:6080", "--publish", "127.0.0.1:6081:6081",
      "--volume", "grok-bot-local-vm-workspace:/workspace", "--volume", "grok-bot-local-vm-data:/home/box/sand-data",
      "--mount", `type=volume,src=${LOCAL_DOCKER_CONTROL_VOLUME},dst=${dirname(LOCAL_DOCKER_GATEWAY_TOKEN_PATH)},readonly`,
      "--mount", `type=bind,src=${hostBundle.path},dst=/home/box/sand-host/host-main.cjs,readonly`,
      "--mount", `type=bind,src=${dirname(hostBundle.boxExecDaemonPath)},dst=/home/box/box-exec-daemon,readonly`,
      "--mount", `type=bind,src=${hostBundle.execDaemonWrapperPath},dst=${LOCAL_DOCKER_EXEC_DAEMON_WRAPPER_PATH},readonly`,
      ...(inferenceFile == null ? [] : ["--mount", `type=bind,src=${dirname(inferenceFile)},dst=/run/grok-bot,readonly`]),
      ...authMounts,
      LOCAL_DOCKER_BOX_IMAGE,
    ]);
    if (!created.ok) throw new Error(`Could not create the local Docker VM: ${created.output}`);
  }
  const deadline = Date.now() + READY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    assertCurrent();
    if (await gatewayReady() && (!isolateModelShell || await modelShellIsolationReady())) {
      assertCurrent();
      return { baseUrl: LOCAL_DOCKER_GATEWAY_URL, token };
    }
    const state = await inspectContainer();
    if (!state.running) {
      const logs = await runDocker(["logs", "--tail", "80", LOCAL_DOCKER_BOX_CONTAINER]);
      throw new Error(`Local Docker VM stopped before its gateway became ready.\n${logs.output}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1_000));
  }
  throw new Error("Local Docker VM did not expose its gateway within three minutes.");
}

export async function startLocalDockerBox(
  settingsPath: string,
  options: LocalDockerStartOptions = {},
  provider: unknown = "manual",
): Promise<GatewayConnection> {
  const credentialMode = options.localAuthProvider == null
    ? "none"
    : `local-auth:${options.localAuthProvider}`;
  const ensured = await serializeLocalDockerEnsure(
    settingsPath,
    `${settingsPath}\0${String(provider)}\0${credentialMode}`,
    async (generation) => await ensureLocalDockerBox(
      settingsPath,
      undefined,
      options,
      () => !isLocalDockerLifecycleGenerationCurrent(settingsPath, generation),
    ),
  );
  if (ensured.isSuperseded()) throw new StaleLocalDockerSelectionError();
  return ensured.connection;
}

export async function stopLocalDockerBoxNow(
  command: DockerCommandRunner = runDocker,
): Promise<void> {
  const inspected = await inspectContainer(command);
  if (!inspected.exists || !inspected.running) return;
  if (!inspected.owned) throw new Error(`Refusing to stop unowned container ${LOCAL_DOCKER_BOX_CONTAINER}.`);
  const stopped = await command(["stop", LOCAL_DOCKER_BOX_CONTAINER]);
  if (!stopped.ok) throw new Error(`Could not stop the local Docker VM: ${stopped.output}`);
}

export async function stopLocalDockerBox(settingsPath: string): Promise<void> {
  await serializeLocalDockerLifecycleMutation(
    settingsPath,
    async () => await stopLocalDockerBoxNow(),
  );
  await rm(inferenceCredentialPath(settingsPath), { force: true });
}

/**
 * Permanently closes local-Docker mutation intake for this process, then queues
 * the final owned-container stop behind work that was already admitted.
 */
export async function stopLocalDockerBoxForQuit(
  settingsPath: string,
  command: DockerCommandRunner = runDocker,
): Promise<void> {
  const lane = localDockerLifecycleLane(settingsPath);
  lane.closedForQuit = true;
  await enqueueLocalDockerLifecycleMutation(
    settingsPath,
    async () => await stopLocalDockerBoxNow(command),
    true,
  );
  await rm(inferenceCredentialPath(settingsPath), { force: true });
}

/**
 * A host-side Proxy Gateway lease is memory-only, so stopping the app-owned host is
 * the fail-closed fallback when its authenticated control channel cannot
 * confirm revocation. The ownership check remains inside stopLocalDockerBox.
 */
export async function revokeProxyGatewayLeaseOrStopOwnedLocalDocker(
  revokeLease: () => Promise<unknown>,
  stopOwnedLocalDocker: () => Promise<void>,
): Promise<void> {
  try {
    await revokeLease();
  } catch (revokeError) {
    try {
      await stopOwnedLocalDocker();
    } catch (stopError) {
      throw new AggregateError(
        [revokeError, stopError],
        "Could not revoke the Proxy Gateway credential lease or stop the owned local Docker VM.",
      );
    }
  }
}

export interface SettingsRoutedHostConnectorOptions {
  readonly ensureLocalBox?: (
    settingsPath: string,
    inferenceCredential?: InferenceCredential,
    options?: LocalDockerStartOptions,
    isSuperseded?: () => boolean,
  ) => Promise<GatewayConnection>;
  readonly optionalCredentialTimeoutMs?: number;
}

export function createSettingsRoutedHostConnector(
  remote: SandRemoteHostConnector,
  settings: SandSettingsStore,
  options: SettingsRoutedHostConnectorOptions = {},
): SandRemoteHostConnector {
  const ensureLocalBox = options.ensureLocalBox ?? ensureLocalDockerBox;
  const optionalCredentialTimeoutMs = options.optionalCredentialTimeoutMs
    ?? OPTIONAL_CREDENTIAL_TIMEOUT_MS;
  const usesStandaloneLocalWorkspace = (): boolean =>
    settings.getBoxRuntime() === "local-docker"
    && settings.getInferenceProvider() === "proxy-gateway";
  const localConnect = async (): Promise<GatewayConnection> => {
    for (let attempt = 0; attempt < 16; attempt += 1) {
      if (settings.getBoxRuntime() !== "local-docker") {
        throw new Error("Local Docker VM is no longer selected.");
      }
      const inferenceProvider = settings.getInferenceProvider();
      // The Proxy Gateway local workspace is intentionally independent of Cursor
      // account services. A remote Cursor inference credential belongs only
      // to the explicit Cursor provider; direct providers use their own
      // coordinator transport or narrowly mounted local authentication.
      const issued = inferenceProvider !== "cursor" || remote.issueInferenceCredential == null
        ? undefined
        : await Promise.race([
            remote.issueInferenceCredential().catch(() => undefined),
            new Promise<undefined>((resolve) => setTimeout(resolve, optionalCredentialTimeoutMs)),
          ]);
      if (settings.getBoxRuntime() !== "local-docker") {
        throw new Error("Local Docker VM is no longer selected.");
      }
      if (settings.getInferenceProvider() !== inferenceProvider) continue;

      const startOptions = localDockerStartOptionsForProvider(inferenceProvider);
      const credentialMode = startOptions.localAuthProvider == null
        ? issued == null ? "none" : "inference-credential"
        : `local-auth:${startOptions.localAuthProvider}`;
      const ensureKey = `${settings.settingsPath}\0${inferenceProvider}\0${credentialMode}`;
      let ensured: SerializedLocalDockerEnsureResult;
      try {
        ensured = await serializeLocalDockerEnsure(settings.settingsPath, ensureKey, async (generation) => {
          if (
            settings.getBoxRuntime() !== "local-docker"
            || settings.getInferenceProvider() !== inferenceProvider
          ) throw new StaleLocalDockerSelectionError();
          return await ensureLocalBox(
            settings.settingsPath,
            issued,
            startOptions,
            () => !isLocalDockerLifecycleGenerationCurrent(settings.settingsPath, generation),
          );
        });
      } catch (error) {
        if (settings.getBoxRuntime() !== "local-docker") {
          throw new Error("Local Docker VM is no longer selected.", { cause: error });
        }
        if (
          error instanceof StaleLocalDockerSelectionError
          || settings.getInferenceProvider() !== inferenceProvider
        ) continue;
        throw error;
      }
      if (settings.getBoxRuntime() !== "local-docker") {
        throw new Error("Local Docker VM is no longer selected.");
      }
      if (ensured.isSuperseded()) continue;
      if (settings.getInferenceProvider() !== inferenceProvider) continue;
      return ensured.connection;
    }
    throw new Error("Local Docker provider changed repeatedly while its container was starting.");
  };
  const sandboxComputerConnect = async (): Promise<GatewayConnection> =>
    await ensureSandboxComputerTunnel(settings.getSandboxComputerConfig());
  return {
    connect: async () => {
      if (settings.getBoxRuntime() === "local-docker") return await localConnect();
      if (settings.getBoxRuntime() === "sandbox-computer") return await sandboxComputerConnect();
      return await remote.connect();
    },
    ...(remote.issueLocalExecDaemonCredential == null ? {} : {
      issueLocalExecDaemonCredential: async () => usesStandaloneLocalWorkspace()
        ? undefined
        : await remote.issueLocalExecDaemonCredential!(),
    }),
    ...(remote.issueInferenceCredential == null ? {} : {
      issueInferenceCredential: async () => settings.getInferenceProvider() === "cursor"
        ? await remote.issueInferenceCredential!()
        : undefined,
    }),
    recreate: async (args): Promise<RecreateResult> => {
      if (settings.getBoxRuntime() !== "local-docker") {
        if (remote.recreate == null) throw new Error("Remote computer recreation is unavailable.");
        return await remote.recreate(args);
      }
      await serializeLocalDockerLifecycleMutation(settings.settingsPath, async () => {
        if (settings.getBoxRuntime() !== "local-docker") throw new StaleLocalDockerSelectionError();
        const restarted = await runDocker(["restart", LOCAL_DOCKER_BOX_CONTAINER]);
        if (!restarted.ok) throw new Error(`Could not restart the local Docker VM: ${restarted.output}`);
      });
      await localConnect();
      return { status: "started-untrackable" };
    },
    forceRecreate: async (): Promise<RecreateResult> => {
      if (settings.getBoxRuntime() !== "local-docker") {
        if (remote.forceRecreate == null) return { status: "rejected", reason: "Remote computer reset is unavailable." };
        return await remote.forceRecreate();
      }
      const removed = await serializeLocalDockerLifecycleMutation(settings.settingsPath, async () => {
        if (settings.getBoxRuntime() !== "local-docker") throw new StaleLocalDockerSelectionError();
        return await runDocker(["rm", "--force", LOCAL_DOCKER_BOX_CONTAINER]);
      });
      if (!removed.value.ok && !/no such container/i.test(removed.value.output)) {
        return { status: "rejected", reason: removed.value.output };
      }
      await localConnect();
      return { status: "started-untrackable" };
    },
  };
}
