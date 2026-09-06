import { readFile } from "node:fs/promises";
import path from "node:path";
import { repoRoot } from "./config.mjs";

export const runtimePlatformsManifest = path.join(repoRoot, "manifests", "runtime", "platforms.json");

function relativePath(value, label) {
  if (typeof value !== "string" || value.length === 0 || path.isAbsolute(value) || value.replaceAll("\\", "/").split("/").includes("..")) throw new Error(`Invalid runtime ${label}`);
  return value.replaceAll("\\", "/");
}

export function assertRuntimePlatformSpec(value, expectedId) {
  if (value == null || typeof value !== "object" || Array.isArray(value)) throw new Error("Runtime platform descriptor must be an object");
  const id = `${value.platform}-${value.architecture}`;
  if (id !== expectedId || id !== "win32-x64") throw new Error(`Unsupported runtime platform descriptor: ${id}`);
  if (!/^[0-9a-f]{64}$/.test(value.archiveSha256) || !/^[0-9a-f]{64}$/.test(value.appAsarSha256)) throw new Error("Invalid runtime SHA-256 pin");
  if (!Number.isSafeInteger(value.archiveBytes) || value.archiveBytes <= 0) throw new Error("Invalid runtime archive byte count");
  for (const field of ["archivePath", "executable", "resources", "appAsar", "appAsarUnpacked"]) relativePath(value[field], field);
  return Object.freeze({ ...value, id });
}

export async function loadRuntimePlatformsManifest(file = runtimePlatformsManifest) {
  const manifest = JSON.parse(await readFile(file, "utf8"));
  if (manifest?.schemaVersion !== 1 || manifest.product !== "Grok Bot" || manifest.upstreamVersion !== "0.18.0") throw new Error("Unsupported runtime platforms manifest");
  const entries = Object.fromEntries(Object.entries(manifest.platforms ?? {}).map(([id, value]) => [id, assertRuntimePlatformSpec(value, id)]));
  if (Object.keys(entries).sort().join(",") !== "win32-x64") throw new Error("Runtime manifest must pin exactly Windows x64");
  return Object.freeze({ ...manifest, platforms: Object.freeze(entries) });
}

export async function getRuntimePlatformSpec(platform = process.platform, architecture = process.arch) {
  const id = `${platform}-${architecture}`;
  const spec = (await loadRuntimePlatformsManifest()).platforms[id];
  if (spec == null) throw new Error(`No pinned Grok Bot 0.18 runtime for ${id}`);
  return spec;
}

export function resolveRuntimeLayout(root, spec) {
  const resolvedRoot = path.resolve(root), at = relative => path.join(resolvedRoot, ...relative.split("/"));
  return Object.freeze({ root: resolvedRoot, executablePath: at(spec.executable), resourcesPath: at(spec.resources), appAsarPath: at(spec.appAsar), appAsarUnpackedPath: at(spec.appAsarUnpacked) });
}
