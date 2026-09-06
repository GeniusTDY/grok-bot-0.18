import { createHash } from "node:crypto";
import { constants, createReadStream } from "node:fs";
import { createRequire } from "node:module";
import { access, chmod, cp, lstat, mkdir, open, readFile, readdir, realpath, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { extractAsarFile, listAsarPackage } from "./asar-paths.mjs";
import { cachedWindowsRuntimeDescriptor, cachedWindowsRuntimeRoot, upstreamVersion, upstreamWindowsAsarSha256, windowsInstallerBytes, windowsInstallerSha256 } from "./config.mjs";
import { getRuntimePlatformSpec, resolveRuntimeLayout } from "./platform-runtime.mjs";
import { run } from "./process.mjs";

const require = createRequire(import.meta.url);
const sevenZipBinarySha256 = Object.freeze({
  "linux-x64": "afc9448bd0cc2eeda131cce313ef4994f9656417e0a15c8465fcda9ca859b280",
  "win32-x64": "b0cfdeaf429f5cc53f85123dd8f5a5feb92c19d31aa34df257edf9a26be05f95",
});

export async function pathExists(target) { try { await access(target); return true; } catch { return false; } }
export async function sha256File(target) { const hash = createHash("sha256"); for await (const chunk of createReadStream(target)) hash.update(chunk); return hash.digest("hex"); }
async function regular(target, label) { const s = await lstat(target); if (s.isSymbolicLink() || !s.isFile()) throw new Error(`${label} is not a regular file: ${target}`); return s; }
async function directory(target, label) { const s = await lstat(target); if (s.isSymbolicLink() || !s.isDirectory()) throw new Error(`${label} is not a real directory: ${target}`); return s; }

export async function assertPeX64(target, label = "Windows binary") {
  const handle = await open(target, "r");
  try {
    const dos = Buffer.alloc(64); if ((await handle.read(dos, 0, dos.length, 0)).bytesRead !== dos.length || dos.toString("ascii", 0, 2) !== "MZ") throw new Error(`${label} has no DOS/PE header`);
    const peOffset = dos.readUInt32LE(0x3c); if (peOffset < 64 || peOffset > 16 * 1024 * 1024) throw new Error(`${label} has an invalid PE offset`);
    const pe = Buffer.alloc(6); if ((await handle.read(pe, 0, pe.length, peOffset)).bytesRead !== pe.length || pe.toString("ascii", 0, 4) !== "PE\0\0" || pe.readUInt16LE(4) !== 0x8664) throw new Error(`${label} is not PE32+ x86-64`);
  } finally { await handle.close(); }
}

export async function assertSafeExtractedTree(root, maxEntries = 100_000) {
  const base = await realpath(root); let count = 0;
  async function walk(current) { for (const entry of await readdir(current, { withFileTypes: true })) { if (++count > maxEntries) throw new Error("Extracted runtime has too many entries"); const target = path.join(current, entry.name), s = await lstat(target), rel = path.relative(base, path.resolve(target)); if (s.isSymbolicLink()) throw new Error(`Extracted runtime contains a link: ${target}`); if (rel === ".." || rel.startsWith(`..${path.sep}`) || path.isAbsolute(rel)) throw new Error(`Extracted runtime escaped its root: ${target}`); if (s.isDirectory()) await walk(target); else if (!s.isFile()) throw new Error(`Extracted runtime contains a special file: ${target}`); } }
  await walk(base); return { root: base, entries: count };
}

async function child(directoryPath, name) { const found = (await readdir(directoryPath)).find(value => value.toLowerCase() === name.toLowerCase()); return found == null ? null : path.join(directoryPath, found); }
export async function resolveWindowsRuntimeRoot(input) {
  const resolved = path.resolve(input), s = await stat(resolved);
  if (s.isFile()) { const name = path.basename(resolved).toLowerCase(); if (name === "app.asar") return path.dirname(path.dirname(resolved)); if (name.endsWith(".exe")) return path.dirname(resolved); throw new Error(`Unsupported Windows runtime input: ${resolved}`); }
  if (!s.isDirectory()) throw new Error(`Windows runtime is not a directory: ${resolved}`);
  const resources = await child(resolved, "resources"), executable = await child(resolved, "Grok Bot.exe");
  if (resources != null && executable != null && await pathExists(path.join(resources, "app.asar"))) return resolved;
  throw new Error(`No Grok Bot Windows application at ${resolved}`);
}

export async function findWindowsRuntimeRoots(root) {
  const matches = []; let count = 0;
  async function walk(current) { const entries = await readdir(current, { withFileTypes: true }); if ((count += entries.length) > 100_000) throw new Error("Installer extraction has too many entries"); const resources = entries.find(e => e.isDirectory() && e.name.toLowerCase() === "resources"), executable = entries.find(e => e.isFile() && e.name.toLowerCase() === "grok bot.exe"); if (resources && executable && await pathExists(path.join(current, resources.name, "app.asar"))) { matches.push(current); return; } for (const entry of entries) { if (entry.isSymbolicLink()) throw new Error(`Installer extraction contains a link: ${entry.name}`); if (entry.isDirectory()) await walk(path.join(current, entry.name)); } }
  await walk(path.resolve(root)); return matches.sort();
}

const asarJson = (archive, relative) => JSON.parse(Buffer.from(extractAsarFile(archive, relative)).toString("utf8"));
export async function validateWindowsRuntime(input, { origin = "unknown", expectedAsarSha256 = upstreamWindowsAsarSha256 } = {}) {
  const spec = await getRuntimePlatformSpec("win32", "x64"), root = await resolveWindowsRuntimeRoot(input), layout = resolveRuntimeLayout(root, spec);
  await Promise.all([regular(layout.executablePath, "Electron executable"), directory(layout.resourcesPath, "resources"), regular(layout.appAsarPath, "app.asar"), directory(layout.appAsarUnpackedPath, "app.asar.unpacked")]);
  await assertPeX64(layout.executablePath, "Grok Bot.exe");
  const appAsarSha256 = await sha256File(layout.appAsarPath); if (appAsarSha256 !== expectedAsarSha256) throw new Error(`Windows app.asar checksum mismatch: expected ${expectedAsarSha256}, got ${appAsarSha256}`);
  const app = asarJson(layout.appAsarPath, "package.json"), native = asarJson(layout.appAsarPath, "dist/deps/runtime-deps-manifest.json");
  if (app.version !== upstreamVersion || app.productName !== "Grok Bot" || app.main !== "dist/electron-main/main.cjs") throw new Error("Unexpected Windows application identity");
  if (native.platform !== "win32" || native.arch !== "x64" || !Array.isArray(native.nodeFiles) || native.nodeFiles.length < 1) throw new Error("Unexpected Windows native dependency manifest");
  const listing = new Set(listAsarPackage(layout.appAsarPath));
  for (const required of ["dist/electron-main/main.cjs", "dist/host/host-main.cjs", "dist/renderer/index.html", "dist/native/sand-webauthn-signer.exe"]) if (!listing.has(required)) throw new Error(`Windows app.asar is missing ${required}`);
  for (const relative of native.nodeFiles) { const target = path.join(layout.appAsarUnpackedPath, "dist", "deps", ...relative.split("/")); await regular(target, relative); await assertPeX64(target, relative); }
  const signer = path.join(layout.appAsarUnpackedPath, "dist", "native", "sand-webauthn-signer.exe"); await regular(signer, "sand-webauthn-signer.exe"); await assertPeX64(signer, "sand-webauthn-signer.exe");
  await assertSafeExtractedTree(root);
  return Object.freeze({ schemaVersion: 1, platform: "win32", arch: "x64", upstreamVersion, origin, appAsarSha256, nativeRuntime: { platform: native.platform, arch: native.arch, nodeFiles: [...native.nodeFiles] }, ...layout });
}

export async function verifyPinnedWindowsInstaller(installer) { const s = await regular(installer, "Windows installer"); if (s.size !== windowsInstallerBytes) throw new Error(`Windows installer size mismatch; run targeted git lfs pull (${s.size})`); const sha256 = await sha256File(installer); if (sha256 !== windowsInstallerSha256) throw new Error(`Windows installer checksum mismatch: ${sha256}`); return { path: path.resolve(installer), bytes: s.size, sha256 }; }
export async function findSevenZipExecutable(env = process.env) {
  const platformKey = `${process.platform}-${process.arch}`;
  const expectedSha256 = sevenZipBinarySha256[platformKey];
  if (expectedSha256 == null) throw new Error(`The pinned 7zip-bin extractor does not support ${platformKey}`);
  const packageJson = require("7zip-bin/package.json");
  if (packageJson.version !== "5.2.0") throw new Error(`Expected 7zip-bin 5.2.0, got ${packageJson.version}`);
  const configured = env.GROK_BOT_7ZIP?.trim();
  const executable = path.resolve(configured || require("7zip-bin").path7za);
  await regular(executable, "Pinned 7-Zip extractor");
  const actualSha256 = await sha256File(executable);
  if (actualSha256 !== expectedSha256) throw new Error(`Pinned 7-Zip extractor checksum mismatch: expected ${expectedSha256}, got ${actualSha256}`);
  if (process.platform !== "win32") {
    try { await access(executable, constants.X_OK); }
    catch {
      if (configured) throw new Error("Configured pinned 7-Zip extractor is not executable");
      // Some npm/filesystem combinations unpack 7zip-bin without its execute
      // bit. Only repair the locked package copy after its bytes match the
      // immutable SHA-256 policy above.
      await chmod(executable, 0o500);
      await access(executable, constants.X_OK);
    }
  }
  return executable;
}
export async function extractPinnedWindowsInstaller({ installer, destination, sevenZip }) { const artifact = await verifyPinnedWindowsInstaller(installer); await rm(destination, { recursive: true, force: true }); await mkdir(destination, { recursive: true }); await run(sevenZip, ["x", artifact.path, `-o${path.resolve(destination)}`, "-y", "-bd", "-bb0"]); await assertSafeExtractedTree(destination); const roots = await findWindowsRuntimeRoots(destination); if (roots.length !== 1) throw new Error(`Pinned installer yielded ${roots.length} application roots`); return { artifact, runtime: await validateWindowsRuntime(roots[0], { origin: "pinned-installer" }) }; }

export function windowsInstalledRuntimeCandidates(env = process.env) { const result = []; if (env.LOCALAPPDATA) result.push(path.join(env.LOCALAPPDATA, "Programs", "grok-bot"), path.join(env.LOCALAPPDATA, "Programs", "Grok Bot")); for (const root of [env.ProgramFiles, env["ProgramFiles(x86)"]].filter(Boolean)) result.push(path.join(root, "Grok Bot")); return [...new Set(result.map(candidate => path.resolve(candidate)))]; }
export async function discoverInstalledWindowsRuntime(env = process.env) { const explicit = env.GROK_BOT_018_WINDOWS_APP?.trim(), candidates = explicit ? [path.resolve(explicit)] : windowsInstalledRuntimeCandidates(env); const found = []; for (const candidate of candidates) { if (!await pathExists(candidate)) continue; try { found.push(await validateWindowsRuntime(candidate, { origin: explicit ? "configured-installed-copy" : "discovered-installed-copy" })); } catch (error) { if (explicit) throw error; } } if (found.length > 1) throw new Error(`Multiple exact Windows runtimes found: ${found.map(value => value.root).join(", ")}`); return found[0] ?? null; }

export async function cacheWindowsRuntime(runtime, sourceArtifact = null) { await rm(cachedWindowsRuntimeRoot, { recursive: true, force: true }); await mkdir(path.dirname(cachedWindowsRuntimeRoot), { recursive: true }); await cp(runtime.root, cachedWindowsRuntimeRoot, { recursive: true, dereference: false, preserveTimestamps: true }); const cached = await validateWindowsRuntime(cachedWindowsRuntimeRoot, { origin: runtime.origin }); const descriptor = { schemaVersion: 1, platform: "win32", arch: "x64", upstreamVersion, origin: cached.origin, appAsarSha256: cached.appAsarSha256, sourceArtifact, layout: { executable: "Grok Bot.exe", resources: "resources", appAsar: "resources/app.asar", appAsarUnpacked: "resources/app.asar.unpacked" }, nativeRuntime: cached.nativeRuntime }; await writeFile(cachedWindowsRuntimeDescriptor, `${JSON.stringify(descriptor, null, 2)}\n`); return Object.freeze({ ...cached, descriptor }); }
export async function resolveCachedWindowsRuntime() { const descriptor = JSON.parse(await readFile(cachedWindowsRuntimeDescriptor, "utf8")); if (descriptor?.schemaVersion !== 1 || descriptor.platform !== "win32" || descriptor.arch !== "x64" || descriptor.upstreamVersion !== upstreamVersion || descriptor.appAsarSha256 !== upstreamWindowsAsarSha256) throw new Error(`Invalid cached Windows runtime descriptor: ${cachedWindowsRuntimeDescriptor}`); return Object.freeze({ ...await validateWindowsRuntime(cachedWindowsRuntimeRoot, { origin: descriptor.origin }), descriptor }); }
