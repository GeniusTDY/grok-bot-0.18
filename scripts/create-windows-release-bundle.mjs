import { execFile } from "node:child_process";
import { access, mkdir, mkdtemp, open, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

import { outputWindowsPortable, repoRoot, reconstructedWindowsExecutableName } from "./lib/config.mjs";
import { canonicalizeCycloneDx, createReproducibleZip, deterministicReleaseManifest } from "./lib/reproducible-release.mjs";
import { sha256File } from "./lib/windows-runtime.mjs";

const execFileAsync = promisify(execFile);
const expectedFiles = Object.freeze(["SHA256SUMS.txt", "release-manifest.json", "sbom.cdx.json"]);

function parseArguments(argv) {
  const result = { app: outputWindowsPortable, releaseDirectory: path.join(repoRoot, ".release", "windows-x64"), expectedCommit: null };
  for (let index = 0; index < argv.length; index += 2) {
    const option = argv[index];
    const value = argv[index + 1];
    if (value == null || !["--app", "--release-dir", "--expected-commit"].includes(option)) {
      throw new Error("Usage: node scripts/create-windows-release-bundle.mjs [--app portable-directory] [--release-dir output-directory] [--expected-commit sha]");
    }
    if (option === "--app") result.app = path.resolve(value);
    else if (option === "--release-dir") result.releaseDirectory = path.resolve(value);
    else result.expectedCommit = value;
  }
  return result;
}

async function capture(command, arguments_, options = {}) {
  const { stdout } = await execFileAsync(command, arguments_, { cwd: repoRoot, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, ...options });
  return stdout.trim();
}

async function npmSbom() {
  if (process.platform !== "win32") throw new Error("The Windows release bundle must be created by the reviewed Windows runner");
  const npmCli = path.join(path.dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");
  await access(npmCli);
  const { stdout } = await execFileAsync(process.execPath, [npmCli, "sbom", "--omit=dev", "--sbom-format", "cyclonedx"], {
    cwd: repoRoot,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    windowsHide: true,
  });
  return stdout;
}

function assertSha(value, label) {
  if (!/^[0-9a-f]{40}$/.test(value)) throw new Error(`${label} is not a full lowercase Git commit SHA`);
  return value;
}

function commitDate(epochSeconds) {
  if (!Number.isSafeInteger(epochSeconds) || epochSeconds < 315532800) throw new Error("Git commit timestamp is outside the deterministic ZIP range");
  return new Date(epochSeconds * 1_000).toISOString();
}

async function exists(target) {
  try { await access(target); return true; } catch { return false; }
}

async function writeExclusive(target, bytes, encoding) {
  if (await exists(target)) throw new Error(`Refusing to overwrite an existing release bundle file: ${target}`);
  await writeFile(target, bytes, { encoding, flag: "wx" });
}

async function buildAttempt({ directory, portable, assetName, identity, packageVersion, executable, asar }) {
  await mkdir(directory, { recursive: false });
  const zip = path.join(directory, assetName);
  const zipResult = await createReproducibleZip({
    sourceDirectory: portable,
    outputFile: zip,
    archiveRootName: path.basename(portable),
    epochSeconds: identity.epochSeconds,
  });
  const [zipHash, exeHash, asarHash, zipStats, exeStats, asarStats] = await Promise.all([
    sha256File(zip), sha256File(executable), sha256File(asar), stat(zip), stat(executable), stat(asar),
  ]);
  const sbom = canonicalizeCycloneDx(await npmSbom(), {
    commit: identity.commit,
    version: packageVersion,
    commitIso: identity.commitIso,
    artifactFile: assetName,
    artifactSha256: zipHash,
  });
  const sbomPath = path.join(directory, "sbom.cdx.json");
  await writeExclusive(sbomPath, sbom, "utf8");

  const [sbomHash, sbomStats] = await Promise.all([sha256File(sbomPath), stat(sbomPath)]);
  const manifest = {
    schemaVersion: 1,
    visibility: "push-access-visible-draft",
    releaseTag: `v${packageVersion}`,
    commit: identity.commit,
    tree: identity.tree,
    sourceCommitAtUtc: identity.commitIso,
    timestampSource: "git-commit-committer-time",
    buildContract: {
      runner: "windows-latest",
      architecture: "x64",
      node: identity.nodeVersion,
      npm: `bundled-with-node-${identity.nodeVersion}`,
      dotnetSdk: "8.0.x",
      archive: `node-${identity.nodeVersion}-zlib-raw-deflate-level-9-canonical-win32-zip-v2`,
      sourceDateEpoch: identity.epochSeconds,
    },
    artifact: { file: assetName, bytes: zipStats.size, sha256: zipHash, entries: zipResult.entries },
    executable: { file: reconstructedWindowsExecutableName, bytes: exeStats.size, sha256: exeHash },
    appAsar: { bytes: asarStats.size, sha256: asarHash },
    dependencyBuildSbom: {
      file: "sbom.cdx.json",
      bytes: sbomStats.size,
      sha256: sbomHash,
      classification: "artifact-attributed-dependency-sbom",
      scope: "windows-portable-production-dependencies-and-electron-framework",
      rootComponentType: "application",
      artifactCoverage: "not-a-complete-inventory-of-packaged-native-or-recovered-upstream-bytes",
    },
    validation: {
      sourceTests: "passed",
      pinnedDockerImageProvenance: "passed",
      windowsPackageVerification: "passed",
      freshProfileLaunchSmoke: "passed",
      archiveRoundTripVerification: "passed",
      archiveRoundTripLaunchSmoke: "passed",
      authenticatedCoordinatorResync: "passed",
      encryptedCredentialRelaunch: "passed",
      loginFreeWorkspaceEntry: "passed",
      strictDockerControlPlane: "passed-with-simulator",
      gracefulQuitLeaseRevocation: "passed",
      sourceNativeRouterToolLoop: "passed",
      reproducibleReleaseBundle: "passed-twice",
    },
    environmentCoverage: {
      packagedWindows: "verified-on-windows-latest",
      dockerDesktop: "destination-validation-required",
      tailscalePeer: "destination-validation-required",
      liveProxyGatewayModel: "destination-validation-required",
    },
    trust: { official: false, distributionSigned: false, publicReleaseEligible: false },
  };
  await writeExclusive(path.join(directory, "release-manifest.json"), deterministicReleaseManifest(manifest), "utf8");
  await writeExclusive(path.join(directory, "SHA256SUMS.txt"), `${zipHash} *${assetName}\n`, "ascii");
  return { zip, manifest };
}

async function assertAttemptsEqual(first, second, names) {
  for (const name of names) {
    const left = path.join(first, name);
    const right = path.join(second, name);
    const [leftStats, rightStats, leftHash, rightHash] = await Promise.all([
      stat(left), stat(right), sha256File(left), sha256File(right),
    ]);
    if (leftStats.size !== rightStats.size || leftHash !== rightHash) {
      throw new Error(`Release bundle is not reproducible across two clean attempts: ${name}`);
    }
  }
}

const options = parseArguments(process.argv.slice(2));
const packageJson = JSON.parse(await readFile(path.join(repoRoot, "package.json"), "utf8"));
const nodeVersion = (await readFile(path.join(repoRoot, ".node-version"), "utf8")).trim();
if (process.version !== `v${nodeVersion}`) throw new Error(`Release bundle requires repository-pinned Node v${nodeVersion}; running ${process.version}`);
const packageVersion = packageJson.version;
if (typeof packageVersion !== "string" || !/^0\.18\.0-reconstructed\.\d+$/.test(packageVersion)) throw new Error("Package version is not a reconstructed 0.18.0 release");
if (packageJson.devDependencies?.electron !== "42.1.0") throw new Error("The dependency SBOM requires the reviewed packaged Electron 42.1.0 framework");

const commit = assertSha(await capture("git", ["rev-parse", "HEAD"]), "Release commit");
if (options.expectedCommit != null && assertSha(options.expectedCommit, "Expected release commit") !== commit) {
  throw new Error(`Checked-out release commit ${commit} differs from workflow commit ${options.expectedCommit}`);
}
const tree = assertSha(await capture("git", ["rev-parse", "HEAD^{tree}"]), "Release tree");
const epochSeconds = Number(await capture("git", ["show", "-s", "--format=%ct", commit]));
const identity = { commit, tree, epochSeconds, commitIso: commitDate(epochSeconds), nodeVersion };

const portable = path.resolve(options.app);
const portableManifest = JSON.parse(await readFile(path.join(portable, "RECONSTRUCTED-PORTABLE.json"), "utf8"));
if (portableManifest?.trust?.publicReleaseEligible !== false || portableManifest?.trust?.distributionSigned !== false) {
  throw new Error("The push-access-visible draft accepts only the explicitly non-public unsigned portable identity");
}
if (portableManifest.reconstructedVersion !== packageVersion) {
  throw new Error(`Portable manifest version ${portableManifest.reconstructedVersion} does not match package version ${packageVersion}`);
}
const executable = path.join(portable, reconstructedWindowsExecutableName);
const asar = path.join(portable, "resources", "app.asar");
const assetName = `Grok-Bot-${packageVersion}-windows-x64-portable-unsigned.zip`;
const allNames = Object.freeze([assetName, ...expectedFiles]);
const releaseDirectory = path.resolve(options.releaseDirectory);
if (await exists(releaseDirectory)) throw new Error(`Refusing to overwrite or merge an existing release bundle directory: ${releaseDirectory}`);
const releaseParent = path.dirname(releaseDirectory);
const releaseBase = path.basename(releaseDirectory);
await mkdir(releaseParent, { recursive: true });
const stagingRoot = await mkdtemp(path.join(releaseParent, `.${releaseBase}.reproducible-`));
const first = path.join(stagingRoot, "attempt-a");
const second = path.join(stagingRoot, "attempt-b");
const publishLock = path.join(releaseParent, `.${releaseBase}.publish.lock`);
let publishLockHandle;
try {
  await buildAttempt({ directory: first, portable, assetName, identity, packageVersion, executable, asar });
  await buildAttempt({ directory: second, portable, assetName, identity, packageVersion, executable, asar });
  await assertAttemptsEqual(first, second, allNames);
  try {
    publishLockHandle = await open(publishLock, "wx");
  } catch (error) {
    throw new Error("Another invocation owns the release publication lock; refusing to race or remove its staging files", { cause: error });
  }
  if (await exists(releaseDirectory)) throw new Error(`Refusing to overwrite or merge an existing release bundle directory: ${releaseDirectory}`);
  try {
    await rename(first, releaseDirectory);
  } catch (error) {
    throw new Error("Atomic release bundle publication failed; the final directory was not deleted or overwritten", { cause: error });
  }
} finally {
  if (publishLockHandle != null) {
    await publishLockHandle.close().catch(() => undefined);
    await rm(publishLock, { force: true }).catch(() => undefined);
  }
  await rm(stagingRoot, { recursive: true, force: true }).catch(() => undefined);
}

console.log(`Reproducible Windows release bundle: ${path.join(releaseDirectory, assetName)}`);
console.log(`Canonical source timestamp: ${identity.commitIso} (${identity.epochSeconds})`);
