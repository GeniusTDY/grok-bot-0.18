import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import { basename, dirname, join } from "node:path";

import { getSandRootDir } from "../host-paths.js";
import {
  LOCAL_EXEC_DAEMON_CONNECTION_FILENAME,
  LOCAL_EXEC_DAEMON_CREDENTIAL_FILENAME,
  LOCAL_EXEC_DAEMON_DISCOVERY_FILENAME,
  LOCAL_EXEC_STARTUP_QUARANTINE_DIRECTORY,
  LOCAL_EXEC_SUPERVISOR_HEARTBEAT_FILENAME
} from "../../shared/local-exec-daemon.js";
import { findSystemErrno } from "../../shared/system-errno.js";

export interface LocalExecConnection { readonly baseUrl: string; readonly token?: string; readonly headers?: Readonly<Record<string, string>>; }
export interface LocalExecDiscovery { readonly pid: number; readonly startedAt: number; readonly entryRealpath?: string; readonly generationToken?: string; readonly inflightCount?: number; }
export interface LocalExecStartupQuarantine {
  readonly version: 1;
  readonly pid: number;
  readonly spawnRequestedAt: number;
  readonly recordedAt: number;
  readonly entryRealpath: string;
  readonly generationToken: string;
}
export interface LocalExecSupervisorHeartbeat { readonly pid: number; readonly at: number; }
export interface LocalExecCredential { readonly credential: string; readonly backendUrl: string; readonly expiresAtMs?: number; }

export function getLocalExecDaemonConnectionPath(homeDir?: string): string { return join(getSandRootDir(homeDir), LOCAL_EXEC_DAEMON_CONNECTION_FILENAME); }
export function getLocalExecDaemonDiscoveryPath(homeDir?: string): string { return join(getSandRootDir(homeDir), LOCAL_EXEC_DAEMON_DISCOVERY_FILENAME); }
export function getLocalExecStartupQuarantineDirectory(homeDir?: string): string { return join(getSandRootDir(homeDir), LOCAL_EXEC_STARTUP_QUARANTINE_DIRECTORY); }
export function getLocalExecDaemonCredentialPath(homeDir?: string): string { return join(getSandRootDir(homeDir), LOCAL_EXEC_DAEMON_CREDENTIAL_FILENAME); }
export function getLocalExecSupervisorHeartbeatPath(homeDir?: string): string { return join(getSandRootDir(homeDir), LOCAL_EXEC_SUPERVISOR_HEARTBEAT_FILENAME); }

function record(value: unknown): value is Record<string, unknown> { return typeof value === "object" && value !== null; }
function optionalString(value: unknown): value is string | undefined { return value === undefined || typeof value === "string"; }

export function parseLocalExecConnection(value: unknown): LocalExecConnection | null {
  if (!record(value) || typeof value.baseUrl !== "string" || value.baseUrl.length === 0 || !optionalString(value.token)) return null;
  if (value.headers !== undefined && (!record(value.headers) || Object.values(value.headers).some((item) => typeof item !== "string"))) return null;
  return { baseUrl: value.baseUrl, ...(value.token === undefined ? {} : { token: value.token }), ...(value.headers === undefined ? {} : { headers: value.headers as Record<string, string> }) };
}

export function parseLocalExecDiscovery(value: unknown): LocalExecDiscovery | null {
  if (!record(value) || !Number.isInteger(value.pid) || (value.pid as number) <= 0 || typeof value.startedAt !== "number" || !Number.isFinite(value.startedAt)) return null;
  if (value.inflightCount !== undefined && (!Number.isInteger(value.inflightCount) || (value.inflightCount as number) < 0)) return null;
  if (value.entryRealpath !== undefined && (typeof value.entryRealpath !== "string" || value.entryRealpath.length === 0)) return null;
  if (value.generationToken !== undefined && (typeof value.generationToken !== "string" || value.generationToken.length === 0)) return null;
  return { pid: value.pid as number, startedAt: value.startedAt, ...(value.entryRealpath === undefined ? {} : { entryRealpath: value.entryRealpath as string }), ...(value.generationToken === undefined ? {} : { generationToken: value.generationToken as string }), ...(value.inflightCount === undefined ? {} : { inflightCount: value.inflightCount as number }) };
}

export function parseLocalExecStartupQuarantine(value: unknown): LocalExecStartupQuarantine | null {
  if (!record(value)) return null;
  const keys = Object.keys(value).sort();
  const expectedKeys = ["entryRealpath", "generationToken", "pid", "recordedAt", "spawnRequestedAt", "version"];
  if (keys.length !== expectedKeys.length || keys.some((key, index) => key !== expectedKeys[index])) return null;
  if (value.version !== 1 || !Number.isInteger(value.pid) || (value.pid as number) <= 0) return null;
  if (typeof value.spawnRequestedAt !== "number" || !Number.isFinite(value.spawnRequestedAt) || value.spawnRequestedAt <= 0) return null;
  if (typeof value.recordedAt !== "number" || !Number.isFinite(value.recordedAt) || value.recordedAt < value.spawnRequestedAt || value.recordedAt - value.spawnRequestedAt > 60_000) return null;
  if (typeof value.entryRealpath !== "string" || value.entryRealpath.length === 0) return null;
  if (typeof value.generationToken !== "string" || value.generationToken.length === 0) return null;
  return {
    version: 1,
    pid: value.pid as number,
    spawnRequestedAt: value.spawnRequestedAt,
    recordedAt: value.recordedAt,
    entryRealpath: value.entryRealpath,
    generationToken: value.generationToken,
  };
}

function sameLocalExecStartupQuarantine(
  left: LocalExecStartupQuarantine,
  right: LocalExecStartupQuarantine,
): boolean {
  return left.version === right.version
    && left.pid === right.pid
    && left.spawnRequestedAt === right.spawnRequestedAt
    && left.recordedAt === right.recordedAt
    && left.entryRealpath === right.entryRealpath
    && left.generationToken === right.generationToken;
}

function localExecStartupQuarantineFilename(info: Pick<LocalExecStartupQuarantine, "pid" | "entryRealpath" | "generationToken">): string {
  const digest = createHash("sha256")
    .update(String(info.pid))
    .update("\0")
    .update(info.entryRealpath)
    .update("\0")
    .update(info.generationToken)
    .digest("hex");
  return `${digest}.json`;
}

export function getLocalExecStartupQuarantinePath(
  info: Pick<LocalExecStartupQuarantine, "pid" | "entryRealpath" | "generationToken">,
  directory = getLocalExecStartupQuarantineDirectory(),
): string {
  return join(directory, localExecStartupQuarantineFilename(info));
}

async function readLocalExecStartupQuarantineFile(path: string, validateFilename = true): Promise<LocalExecStartupQuarantine> {
  let raw: string;
  try { raw = await fs.readFile(path, "utf8"); }
  catch (error) { throw new Error(`could not read local-exec startup quarantine record ${basename(path)}`, { cause: error }); }
  let value: unknown;
  try { value = JSON.parse(raw) as unknown; }
  catch (error) { throw new Error(`local-exec startup quarantine record ${basename(path)} contains invalid JSON`, { cause: error }); }
  const parsed = parseLocalExecStartupQuarantine(value);
  if (parsed == null) throw new Error(`local-exec startup quarantine record ${basename(path)} has an invalid schema`);
  if (validateFilename && basename(path) !== localExecStartupQuarantineFilename(parsed)) {
    throw new Error(`local-exec startup quarantine record ${basename(path)} has a mismatched identity filename`);
  }
  return parsed;
}

export function parseLocalExecSupervisorHeartbeat(value: unknown): LocalExecSupervisorHeartbeat | null {
  return record(value) && Number.isInteger(value.pid) && (value.pid as number) > 0 && typeof value.at === "number" ? { pid: value.pid as number, at: value.at } : null;
}

export function parseLocalExecCredential(value: unknown): LocalExecCredential | null {
  if (!record(value) || typeof value.credential !== "string" || value.credential.length === 0 || typeof value.backendUrl !== "string" || value.backendUrl.length === 0) return null;
  if (value.expiresAtMs !== undefined && typeof value.expiresAtMs !== "number") return null;
  return { credential: value.credential, backendUrl: value.backendUrl, ...(value.expiresAtMs === undefined ? {} : { expiresAtMs: value.expiresAtMs }) };
}

export async function writeDaemonJsonFile(path: string, data: unknown, options: { pretty?: boolean; mode?: number } = {}): Promise<void> {
  await fs.mkdir(dirname(path), { recursive: true });
  const tempPath = `${path}.${process.pid}.tmp`;
  const serialized = JSON.stringify(data, null, options.pretty === true ? 2 : undefined);
  await fs.writeFile(tempPath, serialized, options.mode != null ? { encoding: "utf8", mode: options.mode } : "utf8");
  await fs.rename(tempPath, path);
}

async function readDaemonJsonFile<T>(path: string, parse: (value: unknown) => T | null): Promise<T | null> {
  let raw: string;
  try { raw = await fs.readFile(path, "utf8"); }
  catch (error) { if (findSystemErrno(error) === "ENOENT") return null; throw error; }
  try { return parse(JSON.parse(raw) as unknown); } catch { return null; }
}

export function writeLocalExecDaemonConnection(connection: LocalExecConnection, path = getLocalExecDaemonConnectionPath()): Promise<void> { return writeDaemonJsonFile(path, connection, { mode: 0o600 }); }
export function readLocalExecDaemonConnection(path = getLocalExecDaemonConnectionPath()): Promise<LocalExecConnection | null> { return readDaemonJsonFile(path, parseLocalExecConnection); }
export function readLocalExecDaemonDiscovery(path = getLocalExecDaemonDiscoveryPath()): Promise<LocalExecDiscovery | null> { return readDaemonJsonFile(path, parseLocalExecDiscovery); }
export function readLocalExecDaemonCredential(path = getLocalExecDaemonCredentialPath()): Promise<LocalExecCredential | null> { return readDaemonJsonFile(path, parseLocalExecCredential); }

export async function readLocalExecStartupQuarantines(
  directory = getLocalExecStartupQuarantineDirectory(),
): Promise<readonly LocalExecStartupQuarantine[]> {
  let entries;
  try { entries = await fs.readdir(directory, { withFileTypes: true }); }
  catch (error) { if (findSystemErrno(error) === "ENOENT") return []; throw error; }
  if (entries.length > 64) throw new Error("local-exec startup quarantine directory exceeded its bounded record count");
  const records: LocalExecStartupQuarantine[] = [];
  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    if (!entry.isFile() || !/^[a-f0-9]{64}\.json$/.test(entry.name)) {
      throw new Error(`local-exec startup quarantine directory contains an unexpected entry: ${entry.name}`);
    }
    records.push(await readLocalExecStartupQuarantineFile(join(directory, entry.name)));
  }
  return records;
}

export async function writeLocalExecStartupQuarantine(
  info: LocalExecStartupQuarantine,
  directory = getLocalExecStartupQuarantineDirectory(),
): Promise<LocalExecStartupQuarantine> {
  const parsed = parseLocalExecStartupQuarantine(info);
  if (parsed == null) throw new Error("refusing to write an invalid local-exec startup quarantine record");
  await fs.mkdir(directory, { recursive: true });
  const path = getLocalExecStartupQuarantinePath(parsed, directory);
  try {
    await fs.writeFile(path, JSON.stringify(parsed, null, 2), { encoding: "utf8", flag: "wx", mode: 0o600 });
    return parsed;
  } catch (error) {
    if (findSystemErrno(error) !== "EEXIST") throw error;
    const existing = await readLocalExecStartupQuarantineFile(path);
    if (existing.pid === parsed.pid
      && existing.entryRealpath === parsed.entryRealpath
      && existing.generationToken === parsed.generationToken) return existing;
    throw new Error("local-exec startup quarantine identity collision");
  }
}

export async function clearLocalExecStartupQuarantineIfMatches(
  expected: LocalExecStartupQuarantine,
  directory = getLocalExecStartupQuarantineDirectory(),
): Promise<boolean> {
  const path = getLocalExecStartupQuarantinePath(expected, directory);
  let observed: LocalExecStartupQuarantine;
  try { observed = await readLocalExecStartupQuarantineFile(path); }
  catch (error) {
    const cause = record(error) ? error.cause : undefined;
    if (findSystemErrno(cause) === "ENOENT") return false;
    throw error;
  }
  if (!sameLocalExecStartupQuarantine(observed, expected)) return false;
  try { await fs.rm(path); }
  catch (error) { if (findSystemErrno(error) !== "ENOENT") throw error; }
  return true;
}

export const NO_SUPERVISOR_HEARTBEAT = { pid: 0, at: 0 } as const;
export async function readLocalExecSupervisorHeartbeat(path = getLocalExecSupervisorHeartbeatPath()): Promise<LocalExecSupervisorHeartbeat> {
  try { return await readDaemonJsonFile(path, parseLocalExecSupervisorHeartbeat) ?? NO_SUPERVISOR_HEARTBEAT; }
  catch { return NO_SUPERVISOR_HEARTBEAT; }
}

export function writeLocalExecDaemonDiscovery(info: LocalExecDiscovery, path = getLocalExecDaemonDiscoveryPath()): Promise<void> { return writeDaemonJsonFile(path, info, { pretty: true }); }
export async function clearLocalExecDaemonDiscovery(path = getLocalExecDaemonDiscoveryPath()): Promise<void> { await fs.rm(path, { force: true }); }
export async function clearLocalExecDaemonDiscoveryIfMatches(expected: LocalExecDiscovery, path = getLocalExecDaemonDiscoveryPath()): Promise<boolean> {
  const quarantinePath = `${path}.${process.pid}.${Date.now()}.retired`;
  try { await fs.rename(path, quarantinePath); }
  catch (error) { if (findSystemErrno(error) === "ENOENT") return false; throw error; }
  try {
    const observed = await readLocalExecDaemonDiscovery(quarantinePath);
    if (observed != null
      && observed.pid === expected.pid
      && observed.startedAt === expected.startedAt
      && observed.entryRealpath === expected.entryRealpath
      && observed.generationToken === expected.generationToken) return true;
    try { await fs.link(quarantinePath, path); }
    catch (error) { if (!record(error) || error.code !== "EEXIST") throw error; }
    return false;
  } finally { await fs.rm(quarantinePath, { force: true }); }
}
