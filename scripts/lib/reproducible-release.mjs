import { constants as fsConstants } from "node:fs";
import { lstat, mkdir, open, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createDeflateRaw } from "node:zlib";

const ZIP_LOCAL_HEADER = 0x04034b50;
const ZIP_DATA_DESCRIPTOR = 0x08074b50;
const ZIP_CENTRAL_HEADER = 0x02014b50;
const ZIP_END_RECORD = 0x06054b50;
const ZIP_UTF8_FLAG = 0x0800;
const ZIP_DATA_DESCRIPTOR_FLAG = 0x0008;
const ZIP_DEFLATE = 8;
const ZIP_STORE = 0;
const ZIP_VERSION = 20;
const ZIP_UNIX_VERSION = (3 << 8) | ZIP_VERSION;
const ZIP_MAX_32 = 0xffff_ffff;
const ZIP_MAX_ENTRIES = 0xffff;
const ZIP_FILE_MODE = 0o100644;
const ZIP_DIRECTORY_MODE = 0o040755;
const CYCLONEDX_SPEC_VERSION = "1.5";
const CYCLONEDX_SCHEMA = "http://cyclonedx.org/schema/bom-1.5.schema.json";
const CYCLONEDX_COMPONENT_NAME = "Grok Bot 0.18 Reconstructed";
const ELECTRON_VERSION = "42.1.0";
const ELECTRON_REFERENCE = `pkg:npm/electron@${ELECTRON_VERSION}`;
const WINDOWS_RESERVED_COMPONENT = /[<>:"/\\|?*\u0000-\u001f]/u;
const WINDOWS_RESERVED_DEVICE = /^(?:con|prn|aux|nul|clock\$|conin\$|conout\$|com[1-9¹²³]|lpt[1-9¹²³])(?:\..*)?$/iu;

const crcTable = new Uint32Array(256);
for (let index = 0; index < crcTable.length; index += 1) {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) value = (value & 1) === 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  crcTable[index] = value >>> 0;
}

function updateCrc32(previous, bytes) {
  let value = previous;
  for (const byte of bytes) value = crcTable[(value ^ byte) & 0xff] ^ (value >>> 8);
  return value >>> 0;
}

function zipTimestamp(epochSeconds) {
  if (!Number.isSafeInteger(epochSeconds) || epochSeconds < 0) throw new TypeError("A non-negative integer source epoch is required");
  const value = new Date(epochSeconds * 1_000);
  if (Number.isNaN(value.getTime())) throw new TypeError("The source epoch is outside the JavaScript date range");
  const year = value.getUTCFullYear();
  if (year < 1980 || year > 2107) throw new RangeError("The source epoch is outside the portable ZIP timestamp range");
  return {
    date: ((year - 1980) << 9) | ((value.getUTCMonth() + 1) << 5) | value.getUTCDate(),
    time: (value.getUTCHours() << 11) | (value.getUTCMinutes() << 5) | Math.floor(value.getUTCSeconds() / 2),
  };
}

export function assertWindowsPathComponent(value, label = "Windows archive path component") {
  if (typeof value !== "string" || value.length === 0 || value === "." || value === "..") {
    throw new Error(`${label} must be one nonempty ordinary path component`);
  }
  if (value !== value.normalize("NFC")) throw new Error(`${label} is not NFC-normalized: ${value}`);
  if (WINDOWS_RESERVED_COMPONENT.test(value)) throw new Error(`${label} contains a Win32-reserved character: ${value}`);
  if (/[ .]$/u.test(value)) throw new Error(`${label} has a Win32-ambiguous trailing dot or space: ${value}`);
  if (WINDOWS_RESERVED_DEVICE.test(value)) throw new Error(`${label} is a reserved DOS device name: ${value}`);
  if (value.length > 255) throw new Error(`${label} exceeds the reviewed Win32 component length: ${value}`);
  return value;
}

function windowsCollisionKey(value) {
  return value.replace(/[ .]+$/gu, "").toUpperCase();
}

export function assertDistinctWindowsPathComponents(values, label = "Windows archive directory") {
  const seen = new Map();
  for (const value of values) {
    assertWindowsPathComponent(value, `${label} child`);
    const key = windowsCollisionKey(value);
    const previous = seen.get(key);
    if (previous != null) throw new Error(`${label} contains Win32-colliding names: ${previous} and ${value}`);
    seen.set(key, value);
  }
}

function safeArchiveRoot(sourceDirectory, requested) {
  const value = requested ?? path.basename(sourceDirectory);
  return assertWindowsPathComponent(value, "The ZIP root name");
}

function compareEntryNames(left, right) {
  return Buffer.compare(Buffer.from(left.name, "utf8"), Buffer.from(right.name, "utf8"));
}

function captureIdentity(stats, kind) {
  return Object.freeze({
    kind,
    dev: stats.dev,
    ino: stats.ino,
    mode: stats.mode,
    size: stats.size,
    ctimeNs: stats.ctimeNs,
    mtimeNs: stats.mtimeNs,
  });
}

function assertIdentity(stats, expected, target) {
  const correctType = expected.kind === "file" ? stats.isFile() : stats.isDirectory();
  if (stats.isSymbolicLink() || !correctType) throw new Error(`Release ZIP source type changed after collection: ${target}`);
  if (stats.dev !== expected.dev || stats.ino !== expected.ino || stats.mode !== expected.mode || stats.size !== expected.size
    || stats.ctimeNs !== expected.ctimeNs || stats.mtimeNs !== expected.mtimeNs) {
    throw new Error(`Release ZIP source identity changed after collection: ${target}`);
  }
}

async function assertPathIdentity(record) {
  const stats = await lstat(record.absolute, { bigint: true });
  assertIdentity(stats, record.identity, record.absolute);
}

async function assertAncestorIdentities(entry) {
  for (const ancestor of entry.ancestors) await assertPathIdentity(ancestor);
}

async function collectArchiveEntries(sourceDirectory, archiveRoot) {
  const root = path.resolve(sourceDirectory);
  const rootStats = await lstat(root, { bigint: true });
  if (rootStats.isSymbolicLink() || !rootStats.isDirectory()) throw new Error(`Release ZIP source is not a real directory: ${root}`);
  const rootRecord = { absolute: root, identity: captureIdentity(rootStats, "directory") };
  const entries = [{ kind: "directory", ...rootRecord, ancestors: [], name: `${archiveRoot}/`, size: 0 }];

  async function walk(directory, relativeDirectory, ancestors) {
    const children = await readdir(directory, { withFileTypes: true });
    assertDistinctWindowsPathComponents(children.map((child) => child.name), `Release ZIP directory ${directory}`);
    children.sort((left, right) => Buffer.compare(Buffer.from(left.name.normalize("NFC"), "utf8"), Buffer.from(right.name.normalize("NFC"), "utf8")));
    for (const child of children) {
      const absolute = path.join(directory, child.name);
      const stats = await lstat(absolute, { bigint: true });
      if (stats.isSymbolicLink()) throw new Error(`Release ZIP refuses symbolic links and junctions: ${absolute}`);
      const relative = relativeDirectory.length === 0 ? child.name : `${relativeDirectory}/${child.name}`;
      const name = `${archiveRoot}/${relative}`;
      if (stats.isDirectory()) {
        const record = { absolute, identity: captureIdentity(stats, "directory") };
        entries.push({ kind: "directory", ...record, ancestors: [...ancestors], name: `${name}/`, size: 0 });
        await walk(absolute, relative, [...ancestors, record]);
      } else if (stats.isFile()) {
        if (stats.size > ZIP_MAX_32) throw new Error(`Release ZIP64 is intentionally unsupported; file is too large: ${absolute}`);
        entries.push({
          kind: "file",
          absolute,
          identity: captureIdentity(stats, "file"),
          ancestors: [...ancestors],
          name,
          size: Number(stats.size),
        });
      } else {
        throw new Error(`Release ZIP refuses special filesystem entries: ${absolute}`);
      }
    }
    await assertPathIdentity(ancestors.at(-1));
  }

  await walk(root, "", [rootRecord]);
  entries.sort(compareEntryNames);
  if (entries.length > ZIP_MAX_ENTRIES) throw new Error(`Release ZIP has too many entries for the reviewed non-ZIP64 format: ${entries.length}`);
  return entries;
}

function localHeader(name, timestamp, { method, descriptor }) {
  const encoded = Buffer.from(name, "utf8");
  if (encoded.length > 0xffff) throw new Error(`Release ZIP entry name is too long: ${name}`);
  const output = Buffer.alloc(30 + encoded.length);
  output.writeUInt32LE(ZIP_LOCAL_HEADER, 0);
  output.writeUInt16LE(ZIP_VERSION, 4);
  output.writeUInt16LE(ZIP_UTF8_FLAG | (descriptor ? ZIP_DATA_DESCRIPTOR_FLAG : 0), 6);
  output.writeUInt16LE(method, 8);
  output.writeUInt16LE(timestamp.time, 10);
  output.writeUInt16LE(timestamp.date, 12);
  output.writeUInt16LE(encoded.length, 26);
  encoded.copy(output, 30);
  return output;
}

function dataDescriptor(crc32, compressedSize, size) {
  const output = Buffer.alloc(16);
  output.writeUInt32LE(ZIP_DATA_DESCRIPTOR, 0);
  output.writeUInt32LE(crc32 >>> 0, 4);
  output.writeUInt32LE(compressedSize, 8);
  output.writeUInt32LE(size, 12);
  return output;
}

function centralHeader(entry, timestamp) {
  const encoded = Buffer.from(entry.name, "utf8");
  const output = Buffer.alloc(46 + encoded.length);
  output.writeUInt32LE(ZIP_CENTRAL_HEADER, 0);
  output.writeUInt16LE(ZIP_UNIX_VERSION, 4);
  output.writeUInt16LE(ZIP_VERSION, 6);
  output.writeUInt16LE(ZIP_UTF8_FLAG | (entry.descriptor ? ZIP_DATA_DESCRIPTOR_FLAG : 0), 8);
  output.writeUInt16LE(entry.method, 10);
  output.writeUInt16LE(timestamp.time, 12);
  output.writeUInt16LE(timestamp.date, 14);
  output.writeUInt32LE(entry.crc32 >>> 0, 16);
  output.writeUInt32LE(entry.compressedSize, 20);
  output.writeUInt32LE(entry.size, 24);
  output.writeUInt16LE(encoded.length, 28);
  const externalAttributes = entry.kind === "directory"
    ? ((ZIP_DIRECTORY_MODE << 16) | 0x10) >>> 0
    : (ZIP_FILE_MODE << 16) >>> 0;
  output.writeUInt32LE(externalAttributes, 38);
  output.writeUInt32LE(entry.offset, 42);
  encoded.copy(output, 46);
  return output;
}

function endRecord(entries, centralSize, centralOffset) {
  const output = Buffer.alloc(22);
  output.writeUInt32LE(ZIP_END_RECORD, 0);
  output.writeUInt16LE(entries, 8);
  output.writeUInt16LE(entries, 10);
  output.writeUInt32LE(centralSize, 12);
  output.writeUInt32LE(centralOffset, 16);
  return output;
}

async function closeSourceHandle(handle, primaryError) {
  if (handle == null) {
    if (primaryError != null) throw primaryError;
    return;
  }
  try {
    await handle.close();
  } catch (closeError) {
    if (primaryError != null) throw new AggregateError([primaryError, closeError], "Release ZIP source read and close both failed");
    throw closeError;
  }
  if (primaryError != null) throw primaryError;
}

async function readEntryIntoZip({ entry, checksum, compressor, destinationStream, openSourceFile, createSourceStream }) {
  let sourceHandle;
  let primaryError;
  try {
    await assertAncestorIdentities(entry);
    await assertPathIdentity(entry);
    const flags = fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0);
    sourceHandle = await openSourceFile(entry.absolute, flags);
    const openedStats = await sourceHandle.stat({ bigint: true });
    assertIdentity(openedStats, entry.identity, entry.absolute);
    await assertPathIdentity(entry);
    await assertAncestorIdentities(entry);
    const sourceStream = createSourceStream(sourceHandle, entry);
    if (sourceStream == null || typeof sourceStream.pipe !== "function") throw new TypeError("The ZIP source stream factory did not return a readable stream");
    await pipeline(sourceStream, checksum, compressor, destinationStream);
    const finalStats = await sourceHandle.stat({ bigint: true });
    assertIdentity(finalStats, entry.identity, entry.absolute);
    await assertPathIdentity(entry);
    await assertAncestorIdentities(entry);
  } catch (error) {
    primaryError = error;
  }
  await closeSourceHandle(sourceHandle, primaryError);
}

export async function createReproducibleZip({
  sourceDirectory,
  outputFile,
  archiveRootName,
  epochSeconds,
  openSourceFile = open,
  createSourceStream = (sourceHandle) => sourceHandle.createReadStream({ autoClose: false }),
}) {
  if (typeof sourceDirectory !== "string" || typeof outputFile !== "string") throw new TypeError("Explicit ZIP source and output paths are required");
  if (typeof openSourceFile !== "function") throw new TypeError("The ZIP source opener must be callable");
  if (typeof createSourceStream !== "function") throw new TypeError("The ZIP source stream factory must be callable");
  const root = safeArchiveRoot(path.resolve(sourceDirectory), archiveRootName);
  const entries = await collectArchiveEntries(sourceDirectory, root);
  const timestamp = zipTimestamp(epochSeconds);
  const destination = path.resolve(outputFile);
  await mkdir(path.dirname(destination), { recursive: true });
  const handle = await open(destination, "wx");
  let offset = 0;
  const records = [];
  const write = async (bytes) => {
    if (offset + bytes.length > ZIP_MAX_32) throw new Error("Release ZIP64 is intentionally unsupported; archive is too large");
    let written = 0;
    while (written < bytes.length) {
      const result = await handle.write(bytes, written, bytes.length - written, offset + written);
      if (result.bytesWritten <= 0) throw new Error("Release ZIP write made no progress");
      written += result.bytesWritten;
    }
    offset += bytes.length;
  };

  try {
    for (const entry of entries) {
      if (entry.kind === "directory") await assertPathIdentity(entry);
      const record = {
        ...entry,
        offset,
        method: entry.kind === "directory" ? ZIP_STORE : ZIP_DEFLATE,
        descriptor: entry.kind === "file",
        crc32: 0,
        compressedSize: 0,
      };
      await write(localHeader(entry.name, timestamp, record));
      if (entry.kind === "file") {
        let crc = 0xffff_ffff;
        let size = 0;
        const checksum = new Transform({
          transform(chunk, _encoding, callback) {
            crc = updateCrc32(crc, chunk);
            size += chunk.length;
            callback(null, chunk);
          },
        });
        const destinationStream = new Writable({
          write(chunk, _encoding, callback) {
            write(chunk).then(() => {
              record.compressedSize += chunk.length;
              callback();
            }, callback);
          },
        });
        await readEntryIntoZip({
          entry,
          checksum,
          compressor: createDeflateRaw({ level: 9 }),
          destinationStream,
          openSourceFile,
          createSourceStream,
        });
        if (size !== entry.size) throw new Error(`Release ZIP source changed while reading: ${entry.absolute}`);
        record.crc32 = (crc ^ 0xffff_ffff) >>> 0;
        if (record.compressedSize > ZIP_MAX_32) throw new Error(`Release ZIP64 is intentionally unsupported; compressed file is too large: ${entry.absolute}`);
        await write(dataDescriptor(record.crc32, record.compressedSize, record.size));
      }
      records.push(record);
    }

    for (const entry of entries) {
      if (entry.kind === "directory") await assertPathIdentity(entry);
    }

    const centralOffset = offset;
    for (const record of records) await write(centralHeader(record, timestamp));
    const centralSize = offset - centralOffset;
    await write(endRecord(records.length, centralSize, centralOffset));
    await handle.sync();
  } catch (error) {
    await handle.close().catch(() => undefined);
    await rm(destination, { force: true }).catch(() => undefined);
    throw error;
  }
  try {
    await handle.close();
  } catch (error) {
    await rm(destination, { force: true }).catch(() => undefined);
    throw error;
  }
  return Object.freeze({ path: destination, entries: records.length, bytes: offset, epochSeconds });
}

function sortJson(value) {
  if (Array.isArray(value)) return value.map(sortJson);
  if (value == null || typeof value !== "object") return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortJson(value[key])]));
}

function isPlainObject(value) {
  if (value == null || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function isCanonicalUtcIso(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/u.test(value)) return false;
  const milliseconds = Date.parse(value);
  return Number.isFinite(milliseconds) && new Date(milliseconds).toISOString() === value;
}

function assertCycloneDxEnvelope(value, { input }) {
  if (!isPlainObject(value) || value.bomFormat !== "CycloneDX" || value.specVersion !== CYCLONEDX_SPEC_VERSION) {
    throw new Error("npm produced an unsupported CycloneDX SBOM envelope");
  }
  if (Object.hasOwn(value, "$schema") && value.$schema !== CYCLONEDX_SCHEMA) throw new Error("npm produced a CycloneDX SBOM with an inconsistent schema");
  if (!Number.isInteger(value.version) || value.version < 1) throw new Error("npm produced a CycloneDX SBOM with an invalid BOM version");
  if (!isPlainObject(value.metadata)) throw new Error("npm produced a CycloneDX SBOM whose metadata is not a plain object");
  if (!isPlainObject(value.metadata.component)) throw new Error("npm produced a CycloneDX SBOM without a plain root component");
  if (!Array.isArray(value.components)) throw new Error("npm produced a CycloneDX SBOM without a component array");
  if (input) {
    if (!isCanonicalUtcIso(value.metadata.timestamp)) throw new Error("npm produced a CycloneDX SBOM with a non-canonical metadata timestamp");
  } else if (Object.hasOwn(value.metadata, "timestamp")) {
    throw new Error("Canonical CycloneDX SBOM metadata must omit its nondeterministic generation timestamp");
  }
}

function canonicalScopeProperties({ artifactFile, artifactSha256 }) {
  return [
    { name: "grok-bot:sbom:scope", value: "windows-portable-production-dependencies-and-electron-framework" },
    { name: "grok-bot:sbom:artifact-coverage", value: "not-a-complete-inventory-of-packaged-native-or-recovered-upstream-bytes" },
    { name: "grok-bot:distribution:identity", value: "unsigned-windows-x64-portable" },
    { name: "grok-bot:distribution:filename", value: artifactFile },
    { name: "grok-bot:distribution:sha256", value: artifactSha256 },
  ];
}

export function canonicalizeCycloneDx(raw, { commit, version, commitIso, artifactFile, artifactSha256 }) {
  const value = typeof raw === "string" ? JSON.parse(raw) : structuredClone(raw);
  assertCycloneDxEnvelope(value, { input: true });
  if (!/^[0-9a-f]{40}$/u.test(commit)
    || typeof version !== "string" || version.trim() !== version || version.length === 0
    || !isCanonicalUtcIso(commitIso)
    || artifactFile !== `Grok-Bot-${version}-windows-x64-portable-unsigned.zip`
    || !/^[0-9a-f]{64}$/u.test(artifactSha256)) {
    throw new Error("Canonical SBOM identity is invalid");
  }
  delete value.serialNumber;
  delete value.metadata.timestamp;
  value.metadata.component = {
    ...value.metadata.component,
    name: CYCLONEDX_COMPONENT_NAME,
    type: "application",
    version,
  };
  delete value.metadata.component.description;
  const electron = {
    type: "framework",
    name: "Electron",
    version: ELECTRON_VERSION,
    "bom-ref": ELECTRON_REFERENCE,
    purl: ELECTRON_REFERENCE,
  };
  value.components = [
    ...value.components.filter((component) => !isPlainObject(component)
      || (component.name?.toLowerCase() !== "electron" && component["bom-ref"] !== ELECTRON_REFERENCE && component.purl !== ELECTRON_REFERENCE)),
    electron,
  ];
  const rootReference = value.metadata.component["bom-ref"];
  if (typeof rootReference === "string" && rootReference.length > 0 && Array.isArray(value.dependencies)) {
    const rootDependency = value.dependencies.find((dependency) => isPlainObject(dependency) && dependency.ref === rootReference);
    if (rootDependency != null) {
      const dependsOn = Array.isArray(rootDependency.dependsOn) ? rootDependency.dependsOn.filter((reference) => typeof reference === "string") : [];
      rootDependency.dependsOn = [...new Set([...dependsOn, ELECTRON_REFERENCE])].sort();
    }
  }
  const expectedProperties = canonicalScopeProperties({ artifactFile, artifactSha256 });
  value.metadata.properties = expectedProperties;
  const canonical = `${JSON.stringify(sortJson(value), null, 2)}\n`;
  const verified = JSON.parse(canonical);
  assertCycloneDxEnvelope(verified, { input: false });
  if (Object.hasOwn(verified, "serialNumber")) throw new Error("Canonical dependency/build SBOM must omit a misleading per-generation serial number");
  if (verified.metadata.component.type !== "application" || verified.metadata.component.name !== CYCLONEDX_COMPONENT_NAME || verified.metadata.component.version !== version) {
    throw new Error("Canonical dependency/build SBOM root component validation failed");
  }
  if (JSON.stringify(verified.metadata.properties) !== JSON.stringify(expectedProperties)) {
    throw new Error("Canonical dependency/build SBOM scope validation failed");
  }
  const verifiedElectron = verified.components.filter((component) => component?.["bom-ref"] === ELECTRON_REFERENCE);
  if (verifiedElectron.length !== 1 || verifiedElectron[0].type !== "framework" || verifiedElectron[0].version !== ELECTRON_VERSION) {
    throw new Error("Canonical dependency/build SBOM Electron framework validation failed");
  }
  return canonical;
}

export function deterministicReleaseManifest(value) {
  return `${JSON.stringify(sortJson(value), null, 2)}\n`;
}
