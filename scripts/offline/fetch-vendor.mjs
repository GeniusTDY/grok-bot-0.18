// Staging CLI for the offline build toolchain.
//
// Run this ONCE on an authorized machine that has internet, then carry the whole
// `offline/` directory to the air-gapped Windows build target. The target never
// needs this command again. Nothing here ever runs during a build; it only
// prepares the toolchain.
//
//   node scripts/offline/fetch-vendor.mjs node     # vendor a Node for this platform/arch
//   node scripts/offline/fetch-vendor.mjs modules  # snapshot the already-patched node_modules
//   node scripts/offline/fetch-vendor.mjs stage    # both (recommended)
//
// Options:
//   --offline-root <path>   default: <repo>/offline
//   --node-version <v>      default: 26.5.0 (must satisfy engines)
//   --install               (with `modules`/`stage`) build node_modules via the
//                           vendored Node instead of requiring an existing one.
//                           The preparation machine then needs no system Node:
//                           `fetch-vendor.mjs node` first, then `modules --install`.

import { cp, mkdir, readFile, stat, writeFile, rm } from "node:fs/promises";
import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";
import path from "node:path";

import {
  NODEJS_DIST,
  hasVendorNodeAsset,
  nodeArchiveBasename,
  nodeShasumFor,
  resolveVendorNode,
  vendorNodeEntry,
  vendorNodeVersion,
} from "./vendor-node.mjs";

const repoRoot = path.resolve(import.meta.dirname, "..", "..");
const NODE_SHASUMS = "SHASUMS256.txt";

function parseFlags(argv) {
  const flags = { offlineRoot: path.join(repoRoot, "offline"), nodeVersion: vendorNodeVersion(), install: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--offline-root") flags.offlineRoot = path.resolve(argv[++i]);
    else if (argv[i] === "--node-version") flags.nodeVersion = argv[++i];
    else if (argv[i] === "--install") flags.install = true;
  }
  return flags;
}

async function downloadTo(url, destination) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} fetching ${url}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, buffer);
  return buffer;
}

function sha256hex(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function unzip(zipPath, destination) {
  await mkdir(destination, { recursive: true });
  if (process.platform === "win32") {
    await promisify(execFile)("powershell.exe", [
      "-NoProfile", "-NonInteractive", "-Command",
      `Expand-Archive -LiteralPath '${zipPath}' -DestinationPath '${destination}' -Force`,
    ], { windowsHide: true });
    return;
  }
  await promisify(execFile)("unzip", ["-q", "-o", zipPath, "-d", destination]);
}

async function stagedVendorNode({ offlineRoot, nodeVersion }) {
  const platform = process.platform, arch = process.arch;
  if (!hasVendorNodeAsset(platform, arch)) {
    throw new Error(`No vendorable Node asset definition for ${platform}/${arch}`);
  }
  const entry = vendorNodeEntry(offlineRoot, platform, arch);
  const stagingRoot = path.join(offlineRoot, ".stage");
  await rm(stagingRoot, { recursive: true, force: true });
  await mkdir(stagingRoot, { recursive: true });
  const basename = nodeArchiveBasename(platform, arch, nodeVersion);
  const zippedPath = path.join(stagingRoot, `${basename}.zip`);

  const distUrl = `${NODEJS_DIST}/v${nodeVersion}/${basename}.zip`;
  process.stderr.write(`downloading ${distUrl}\n`);
  const zipBytes = await downloadTo(distUrl, zippedPath);

  const shasumsPath = path.join(stagingRoot, NODE_SHASUMS);
  const shasumsBuffer = await downloadTo(`${NODEJS_DIST}/v${nodeVersion}/${NODE_SHASUMS}`, shasumsPath);
  const shasums = (await readFile(shasumsPath, "utf8"));
  const expected = nodeShasumFor(shasums, `${basename}.zip`);
  if (!expected) throw new Error(`No shasum entry for ${basename}.zip`);
  const actual = sha256hex(zipBytes);
  if (actual !== expected) throw new Error(`sha256 mismatch for ${basename}.zip\n  expected ${expected}\n  actual   ${actual}`);

  process.stderr.write("extracting vendored Node\n");
  await unzip(zippedPath, path.join(stagingRoot, basename));
  const extracted = await stat(entry.commandPath).catch(() => null);
  if (!extracted) throw new Error(`Vendor Node was not materialized at ${entry.commandPath}`);

  const versionProbe = String(execFileSync(entry.commandPath, ["--version"])).trim();
  if (versionProbe !== `v${nodeVersion}`) throw new Error(`Vendor Node reports ${versionProbe}, expected v${nodeVersion}`);

  await rm(path.join(stagingRoot, basename, `${basename}.zip`), { force: true });
  const source = path.join(stagingRoot, basename);
  const target = entry.root;
  await rm(target, { recursive: true, force: true });
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, { recursive: true });
  await rm(stagingRoot, { recursive: true, force: true });

  const manifest = {
    schemaVersion: 1,
    platform, arch,
    nodeVersion,
    nodeExecutable: path.basename(entry.commandPath),
    shasum: `${actual}`,
    stagedAt: new Date().toISOString(),
  };
  await writeFile(path.join(offlineRoot, "vendor", "node", `${platform}-${arch}`, "VENDOR.json"),
    `${JSON.stringify(manifest, null, 2)}\n`);
  process.stderr.write(`vendor Node ready: ${entry.commandPath}\n`);
}

async function stagedNodeModules({ offlineRoot, install }) {
  const source = path.join(repoRoot, "node_modules");

  // `--install` builds node_modules from scratch on the vendored Node, so the
  // preparation machine does not need a matching system Node for the dependency
  // work. Production-of the snapshot is pinned to the vendored toolchain, which
  // makes the staged node_modules reproducible.
  if (install) {
    const { command: nodeBin, vendored, npmCli } =
      resolveVendorNode(offlineRoot, process.platform, process.arch, process.execPath);
    if (!vendored) {
      throw new Error("No vendored Node for this platform/arch; run `fetch-vendor.mjs node` first");
    }
    await stat(nodeBin).catch(() => {
      throw new Error(`Vendored Node missing at ${nodeBin}; run ` + "`fetch-vendor.mjs node` first");
    });
    process.stderr.write(`installing node_modules with vendored Node ${nodeBin}\n`);
    execFileSync(nodeBin, [npmCli, "ci"], { cwd: repoRoot, stdio: "inherit" });
    execFileSync(nodeBin, [npmCli, "run", "postinstall"], { cwd: repoRoot, stdio: "inherit" });
  }

  await stat(source).catch(() => { throw new Error("node_modules is not present; run `fetch-vendor.mjs modules --install` to build it via the vendored Node, or `npm ci` + `npm run postinstall` first"); });
  const targetDir = path.join(offlineRoot, "cache");
  await mkdir(targetDir, { recursive: true });
  const snapshot = path.join(targetDir, "node_modules-snapshot.tar.gz");

  // Tar the already-patched node_modules so it can be restored verbatim offline.
  execFileSync("tar", ["-czf", snapshot, "-C", repoRoot, "node_modules"], { stdio: "inherit" });

  await writeFile(path.join(targetDir, "node_modules-snapshot.json"), `${JSON.stringify({
    schemaVersion: 1,
    tarball: path.basename(snapshot),
    engineRequired: ">=26.5.0 <27",
    sha256: sha256hex(await readFile(snapshot)),
    bytes: (await stat(snapshot)).size,
    stagedAt: new Date().toISOString(),
  }, null, 2)}\n`);
  process.stderr.write(`node_modules snapshot ready: ${snapshot}\n`);
}

async function stagedNativeTreeSitter({ offlineRoot }) {
  // The clean-build toolchain short-circuits node-gyp when
  // `.cache/tree-sitter-node/{abi}/{platform}-{arch}` already contains compiled
  // bindings (see scripts/lib/clean-build.mjs and build-tree-sitter-node.mjs).
  // Snapshotting that cache means an air-gapped machine can skip native
  // compilation entirely -- no MSVC toolchain and no network are needed there.
  const source = path.join(repoRoot, ".cache", "tree-sitter-node");
  await stat(source).catch(() => {
    throw new Error(
      `.cache/tree-sitter-node is not present; build it first on a networked Windows x64 machine running ` +
      "`node scripts/build-tree-sitter-node.mjs` with the vendored Node",
    );
  });
  const targetDir = path.join(offlineRoot, "cache");
  await mkdir(targetDir, { recursive: true });
  const snapshot = path.join(targetDir, "tree-sitter-node-cache.tar.gz");

  execFileSync("tar", ["-czf", snapshot, "-C", repoRoot, ".cache/tree-sitter-node"], { stdio: "inherit" });

  await writeFile(path.join(targetDir, "tree-sitter-node-cache.json"), `${JSON.stringify({
    schemaVersion: 1,
    tarball: path.basename(snapshot),
    abi: process.versions.modules,
    platformArch: `${process.platform}-${process.arch}`,
    sha256: sha256hex(await readFile(snapshot)),
    bytes: (await stat(snapshot)).size,
    stagedAt: new Date().toISOString(),
  }, null, 2)}\n`);
  process.stderr.write(`native tree-sitter cache snapshot ready: ${snapshot}\n`);
}

const COMMANDS = { node: stagedVendorNode, modules: stagedNodeModules, nodedeps: stagedNativeTreeSitter };

async function main() {
  const [command, ...rest] = process.argv.slice(2);
  if (command === "--help" || command === "-h" || (command !== "node" && command !== "modules" && command !== "nodedeps" && command !== "stage")) {
    process.stderr.write("usage: node scripts/offline/fetch-vendor.mjs <node|modules|nodedeps|stage> [--offline-root <path>] [--node-version <v>] [--install]\n");
    process.exitCode = 0;
    return;
  }
  const flags = parseFlags(rest);
  if (command === "stage") {
    await stagedVendorNode(flags);
    await stagedNodeModules(flags);
    await stagedNativeTreeSitter(flags);
    return;
  }
  await COMMANDS[command](flags);
}

main().catch((error) => { process.stderr.write(`fetch-vendor failed: ${error?.message ?? error}\n`); process.exitCode = 1; });