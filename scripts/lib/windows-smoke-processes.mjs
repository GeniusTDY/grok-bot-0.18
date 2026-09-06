import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const LOCAL_EXEC_GENERATION_TOKEN_ARG = "--sand-local-exec-generation=";
const LOCAL_EXEC_PUBLICATION_LAG_MS = 60_000;
const PROCESS_CLOCK_SKEW_MS = 5_000;

export function normalizeWindowsPath(value) {
  return typeof value === "string" && value.length > 0
    ? path.win32.normalize(value).toLowerCase()
    : "";
}

export function parseWindowsProcessCreationDate(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string" || value.length === 0) return null;
  const dotNet = /^\/Date\((\d+)(?:[+-]\d+)?\)\/$/.exec(value);
  if (dotNet != null) return Number(dotNet[1]);
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function parsePowerShellProcessJson(raw) {
  const normalized = String(raw).replace(/^\uFEFF/, "").trim();
  if (normalized.length === 0 || normalized === "null") return [];
  const parsed = JSON.parse(normalized);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function commandContainsExactArgument(commandLine, argument) {
  if (typeof commandLine !== "string" || argument.length === 0) return false;
  let offset = commandLine.indexOf(argument);
  while (offset >= 0) {
    const before = offset === 0 || /[\s"]/.test(commandLine[offset - 1]);
    const end = offset + argument.length;
    const after = end === commandLine.length || /[\s"]/.test(commandLine[end]);
    if (before && after) return true;
    offset = commandLine.indexOf(argument, offset + 1);
  }
  return false;
}

function normalizeProcess(entry) {
  const pid = Number(entry?.ProcessId ?? entry?.pid);
  const parentPid = Number(entry?.ParentProcessId ?? entry?.parentPid);
  if (!Number.isInteger(pid) || pid <= 0 || !Number.isInteger(parentPid) || parentPid < 0) return null;
  const creationDate = entry?.CreationDate ?? entry?.creationDate ?? null;
  return {
    pid,
    parentPid,
    name: typeof (entry?.Name ?? entry?.name) === "string" ? (entry.Name ?? entry.name) : null,
    executablePath: typeof (entry?.ExecutablePath ?? entry?.executablePath) === "string"
      ? (entry.ExecutablePath ?? entry.executablePath)
      : null,
    commandLine: typeof (entry?.CommandLine ?? entry?.commandLine) === "string"
      ? (entry.CommandLine ?? entry.commandLine)
      : null,
    creationDate,
    creationEpochMs: parseWindowsProcessCreationDate(creationDate),
  };
}

function generationFingerprint(value) {
  return typeof value === "string" && value.length > 0
    ? createHash("sha256").update(value, "utf8").digest("hex")
    : null;
}

export function redactLocalExecGeneration(value) {
  const source = String(value);
  const marker = "--sand-local-exec-generation=";
  const lower = source.toLowerCase();
  let cursor = 0;
  let output = "";
  for (;;) {
    const start = lower.indexOf(marker, cursor);
    if (start < 0) return output + source.slice(cursor);
    output += source.slice(cursor, start) + marker + "[REDACTED]";
    let end = start + marker.length;
    if (source.startsWith("[REDACTED]", end)) {
      end += "[REDACTED]".length;
    } else if (source[end] === "\\" && (source[end + 1] === '"' || source[end + 1] === "'")) {
      const quote = source[end + 1];
      end += 2;
      while (end < source.length) {
        if (source[end] === "\\" && source[end + 1] === quote) {
          end += 2;
          break;
        }
        end += 1;
      }
    } else if (source[end] === '"' || source[end] === "'") {
      const quote = source[end];
      end += 1;
      while (end < source.length) {
        if (source[end] === "\\") {
          end += Math.min(2, source.length - end);
          continue;
        }
        if (source[end] === quote) {
          end += 1;
          break;
        }
        end += 1;
      }
    } else {
      while (end < source.length && !/[\s"'\r\n]/.test(source[end])) end += 1;
    }
    cursor = end;
  }
}

function sanitizeCommandLine(value) {
  if (typeof value !== "string") return null;
  return redactLocalExecGeneration(value)
    .replace(/[\r\n\u0000-\u001f\u007f]+/g, " ")
    .slice(0, 4_096);
}

function sanitizeProcess(entry) {
  return {
    pid: entry.pid,
    parentPid: entry.parentPid,
    name: entry.name,
    executablePath: entry.executablePath,
    commandLine: sanitizeCommandLine(entry.commandLine),
    creationDate: entry.creationDate,
    creationEpochMs: entry.creationEpochMs,
  };
}

function sanitizeDiscovery(discovery, identityVerified) {
  if (discovery == null || !Number.isInteger(discovery.pid) || discovery.pid <= 0) return null;
  return {
    pid: discovery.pid,
    startedAt: typeof discovery.startedAt === "number" ? discovery.startedAt : null,
    entryRealpath: typeof discovery.entryRealpath === "string" ? discovery.entryRealpath : null,
    generationTokenPresent: typeof discovery.generationToken === "string" && discovery.generationToken.length > 0,
    generationFingerprint: generationFingerprint(discovery.generationToken),
    inflightCount: Number.isInteger(discovery.inflightCount) ? discovery.inflightCount : null,
    identityVerified,
  };
}

export function classifyRelatedWindowsProcesses({
  processes,
  rootPid,
  executable,
  userDataDir,
  dataRoot,
  launchStartedAtMs,
  observedAtMs = Date.now(),
  localExecDiscovery,
}) {
  const rows = processes.map(normalizeProcess).filter(Boolean);
  const launchLowerBound = Number.isFinite(launchStartedAtMs)
    ? launchStartedAtMs - PROCESS_CLOCK_SKEW_MS
    : observedAtMs - LOCAL_EXEC_PUBLICATION_LAG_MS;
  const inLaunchWindow = entry =>
    entry.creationEpochMs != null
    && entry.creationEpochMs >= launchLowerBound
    && entry.creationEpochMs <= observedAtMs + PROCESS_CLOCK_SKEW_MS;

  const relatedPids = new Set(Number.isInteger(rootPid) && rootPid > 0 ? [rootPid] : []);
  let changed = true;
  while (changed) {
    changed = false;
    for (const entry of rows) {
      if (!inLaunchWindow(entry) || !relatedPids.has(entry.parentPid) || relatedPids.has(entry.pid)) continue;
      relatedPids.add(entry.pid);
      changed = true;
    }
  }

  const executableKey = normalizeWindowsPath(executable);
  const profileArgument = typeof userDataDir === "string" && userDataDir.length > 0
    ? `--user-data-dir=${userDataDir}`.toLowerCase()
    : null;
  const discoveryPid = Number.isInteger(localExecDiscovery?.pid) ? localExecDiscovery.pid : null;
  const relevantProcesses = rows.filter(entry =>
    relatedPids.has(entry.pid)
      || entry.pid === discoveryPid
      || (inLaunchWindow(entry)
        && executableKey.length > 0
        && normalizeWindowsPath(entry.executablePath) === executableKey)
      || (inLaunchWindow(entry)
        && profileArgument != null
        && commandContainsExactArgument(entry.commandLine?.toLowerCase(), profileArgument))
  ).sort((left, right) => left.pid - right.pid);

  let verifiedDaemon = null;
  if (
    discoveryPid != null
    && typeof localExecDiscovery?.startedAt === "number"
    && Number.isFinite(localExecDiscovery.startedAt)
    && typeof localExecDiscovery?.entryRealpath === "string"
    && localExecDiscovery.entryRealpath.length > 0
    && typeof localExecDiscovery?.generationToken === "string"
    && localExecDiscovery.generationToken.length > 0
  ) {
    const candidate = relevantProcesses.find(entry => entry.pid === discoveryPid);
    const commandKey = candidate?.commandLine?.toLowerCase() ?? "";
    const entryKey = normalizeWindowsPath(localExecDiscovery.entryRealpath);
    const discoveryFollowsSpawn = candidate?.creationEpochMs != null
      && localExecDiscovery.startedAt >= candidate.creationEpochMs
      && localExecDiscovery.startedAt - candidate.creationEpochMs <= LOCAL_EXEC_PUBLICATION_LAG_MS
      && localExecDiscovery.startedAt <= observedAtMs + PROCESS_CLOCK_SKEW_MS;
    if (
      candidate != null
      && normalizeWindowsPath(candidate.executablePath) === executableKey
      && entryKey.length > 0
      && commandContainsExactArgument(commandKey, entryKey)
      && commandContainsExactArgument(
        candidate.commandLine,
        `${LOCAL_EXEC_GENERATION_TOKEN_ARG}${localExecDiscovery.generationToken}`,
      )
      && discoveryFollowsSpawn
    ) verifiedDaemon = candidate;
  }

  const unexpectedProcessRows = relevantProcesses.filter(entry => entry.pid !== verifiedDaemon?.pid);
  const onlyExpectedPersistentDaemon = verifiedDaemon != null
    && relevantProcesses.length === 1
    && unexpectedProcessRows.length === 0;
  return {
    rootPid: Number.isInteger(rootPid) ? rootPid : null,
    localExecDiscovery: sanitizeDiscovery(localExecDiscovery, verifiedDaemon != null),
    relevantProcesses: relevantProcesses.map(sanitizeProcess),
    unexpectedProcesses: unexpectedProcessRows.map(sanitizeProcess),
    verifiedLocalExecDaemonPid: verifiedDaemon?.pid ?? null,
    onlyExpectedPersistentDaemon,
    cleanExitSurvivors: relevantProcesses.length === 0 || onlyExpectedPersistentDaemon,
  };
}

function powershellExecutable(environment = process.env) {
  const systemRoot = environment.SystemRoot ?? environment.SYSTEMROOT ?? "C:\\Windows";
  return path.win32.join(systemRoot, "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
}

async function readDiscovery(dataRoot, readFileImpl) {
  try {
    const value = JSON.parse(await readFileImpl(path.join(dataRoot, "local-exec-daemon.json"), "utf8"));
    return value != null && typeof value === "object" ? value : null;
  } catch {
    return null;
  }
}

export async function inspectRelatedWindowsProcesses({
  rootPid,
  executable,
  userDataDir,
  dataRoot,
  launchStartedAtMs,
  observedAtMs = Date.now(),
  execFileImpl = execFileAsync,
  readFileImpl = readFile,
  environment = process.env,
}) {
  const localExecDiscovery = await readDiscovery(dataRoot, readFileImpl);
  try {
    const command = [
      "$ErrorActionPreference = 'Stop'",
      "[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)",
      "Get-CimInstance Win32_Process -ErrorAction Stop | Select-Object ProcessId,ParentProcessId,Name,ExecutablePath,CommandLine,CreationDate | ConvertTo-Json -Depth 3 -Compress",
    ].join("; ");
    const { stdout } = await execFileImpl(
      powershellExecutable(environment),
      ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command", command],
      { timeout: 10_000, windowsHide: true, maxBuffer: 4 * 1024 * 1024, encoding: "utf8" },
    );
    return classifyRelatedWindowsProcesses({
      processes: parsePowerShellProcessJson(stdout),
      rootPid,
      executable,
      userDataDir,
      dataRoot,
      launchStartedAtMs,
      observedAtMs,
      localExecDiscovery,
    });
  } catch (error) {
    return {
      rootPid: Number.isInteger(rootPid) ? rootPid : null,
      localExecDiscovery: sanitizeDiscovery(localExecDiscovery, false),
      inventoryError: error instanceof Error ? error.message : String(error),
      relevantProcesses: [],
      unexpectedProcesses: [],
      verifiedLocalExecDaemonPid: null,
      onlyExpectedPersistentDaemon: false,
      cleanExitSurvivors: false,
    };
  }
}

function assertUsableInventory(state, operation) {
  if (state.inventoryError != null) {
    throw new Error(`${operation}: Windows process inventory failed: ${state.inventoryError}`);
  }
}

function assertOnlyVerifiedDaemon(state, operation) {
  assertUsableInventory(state, operation);
  if (
    state.localExecDiscovery == null
    || state.verifiedLocalExecDaemonPid == null
    || !state.onlyExpectedPersistentDaemon
    || state.unexpectedProcesses.length > 0
  ) throw new Error(`${operation}: refusing an unverified or ambiguously related Windows process`);
}

export async function terminateVerifiedLocalExecDaemon(options) {
  const state = await inspectRelatedWindowsProcesses(options);
  assertUsableInventory(state, "Before local-exec cleanup");
  if (state.relevantProcesses.length === 0) return { terminated: false };
  assertOnlyVerifiedDaemon(state, "Before local-exec cleanup");

  const targetPid = state.verifiedLocalExecDaemonPid;
  const confirmed = await inspectRelatedWindowsProcesses(options);
  assertUsableInventory(confirmed, "Immediately before local-exec termination");
  if (confirmed.relevantProcesses.length === 0) return { terminated: false };
  assertOnlyVerifiedDaemon(confirmed, "Immediately before local-exec termination");
  if (confirmed.verifiedLocalExecDaemonPid !== targetPid) {
    throw new Error("Refusing local-exec termination because the verified PID changed");
  }

  const taskkill = path.win32.join(
    options.environment?.SystemRoot ?? options.environment?.SYSTEMROOT ?? process.env.SystemRoot ?? "C:\\Windows",
    "System32",
    "taskkill.exe",
  );
  let taskkillError;
  try {
    await (options.execFileImpl ?? execFileAsync)(
      taskkill,
      ["/PID", String(targetPid), "/T", "/F"],
      { timeout: 10_000, windowsHide: true },
    );
  } catch (error) {
    taskkillError = error;
  }

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const observed = await inspectRelatedWindowsProcesses(options);
    assertUsableInventory(observed, "After local-exec termination");
    if (observed.relevantProcesses.length === 0) {
      return { terminated: true, pid: targetPid };
    }
    const targetStillPresent = observed.relevantProcesses.some(process => process.pid === targetPid);
    if (!targetStillPresent) {
      throw new Error(`Verified local-exec daemon ${targetPid} exited but other related Windows processes remained`);
    }
    if (attempt < 9) await new Promise(resolve => setTimeout(resolve, 250));
  }
  const suffix = taskkillError == null
    ? ""
    : `: taskkill failed: ${taskkillError instanceof Error ? taskkillError.message : String(taskkillError)}`;
  throw new Error(`Verified local-exec daemon ${targetPid} remained alive after taskkill${suffix}`);
}
