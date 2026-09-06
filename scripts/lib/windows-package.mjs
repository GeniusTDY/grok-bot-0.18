import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { reconstructedUpdaterGuard } from "./build-asar.mjs";
import { extractAsarFile, listAsarPackage } from "./asar-paths.mjs";
import { reconstructedWindowsExecutableName, reconstructedWindowsName, reconstructedWindowsPackageName, repoRoot, upstreamWindowsAsarSha256, windowsInstallerSha256 } from "./config.mjs";
import { assertPeX64, pathExists, sha256File } from "./windows-runtime.mjs";

export const windowsPortableManifestName = "RECONSTRUCTED-PORTABLE.json";
const normalizedListing = archive => new Set(listAsarPackage(archive));
const asarJson = (archive, relative) => JSON.parse(Buffer.from(extractAsarFile(archive, relative)).toString("utf8"));
const hashBytes = bytes => createHash("sha256").update(bytes).digest("hex");
const windowsUpdaterArtifactPaths = Object.freeze([
  "resources/elevate.exe",
  "resources/app-update.yml",
  "resources/latest.yml",
  "Update.exe",
]);
const windowsUninstallerArtifactName = /^Uninstall .*\.exe$/i;

async function reconstructedPackageVersion() {
  const packageJson = JSON.parse(await readFile(path.join(repoRoot, "package.json"), "utf8"));
  if (typeof packageJson.version !== "string" || !/^0\.18\.0-reconstructed\.\d+$/.test(packageJson.version)) {
    throw new Error("Repository package version is not a reconstructed 0.18.0 release");
  }
  return packageJson.version;
}

async function removeUpdaterArtifacts(root) {
  for (const relative of windowsUpdaterArtifactPaths) await rm(path.join(root, ...relative.split("/")), { force: true });
  for (const entry of await readdir(root)) if (windowsUninstallerArtifactName.test(entry)) await rm(path.join(root, entry), { force: true });
}

export async function assertNoWindowsUpdaterArtifacts(root) {
  const outputRoot = path.resolve(root);
  for (const relative of windowsUpdaterArtifactPaths) {
    if (await pathExists(path.join(outputRoot, ...relative.split("/")))) {
      throw new Error(`Updater artifact remains: ${relative}`);
    }
  }
  for (const entry of await readdir(outputRoot)) {
    if (windowsUninstallerArtifactName.test(entry)) {
      throw new Error(`Updater artifact remains: ${entry}`);
    }
  }
}

export async function assembleWindowsPortable({ runtime, builtAsar, builtAsarUnpacked, outputRoot }) {
  const packageVersion = await reconstructedPackageVersion();
  await rm(outputRoot, { recursive: true, force: true }); await mkdir(path.dirname(outputRoot), { recursive: true });
  await cp(runtime.root, outputRoot, { recursive: true, dereference: false, preserveTimestamps: true });
  await removeUpdaterArtifacts(outputRoot);
  const originalExecutable = path.join(outputRoot, "Grok Bot.exe"), executable = path.join(outputRoot, reconstructedWindowsExecutableName);
  await rename(originalExecutable, executable);
  const resources = path.join(outputRoot, "resources"), packagedAsar = path.join(resources, "app.asar"), packagedUnpacked = `${packagedAsar}.unpacked`;
  await rm(packagedAsar, { force: true }); await rm(packagedUnpacked, { recursive: true, force: true });
  await cp(builtAsar, packagedAsar); await cp(builtAsarUnpacked, packagedUnpacked, { recursive: true, dereference: false, preserveTimestamps: true });
  const notice = [
    "UNOFFICIAL RECONSTRUCTED PORTABLE BUILD", "", "This directory is not an Anysphere/Cursor/xAI release.",
    "It is unsigned as a reconstructed distribution; the retained Electron shell may still carry its upstream file signature.",
    "No installer or auto-updater is included. Run the reconstructed executable directly.",
    "The official sand: callback is not registered, and data defaults to a separate reconstructed profile.", "",
  ].join("\r\n");
  await writeFile(path.join(outputRoot, "README-PORTABLE.txt"), notice);
  const manifest = {
    schemaVersion: 1, kind: "unofficial-reconstructed-windows-portable", platform: "win32", arch: "x64", productName: reconstructedWindowsName,
    executable: reconstructedWindowsExecutableName, upstreamVersion: "0.18.0", reconstructedVersion: packageVersion,
    trust: { distributionSigned: false, upstreamShellRetained: true, publicReleaseEligible: false },
    upstream: { installerSha256: windowsInstallerSha256, appAsarSha256: upstreamWindowsAsarSha256 },
    reconstructed: { appAsarSha256: await sha256File(packagedAsar), updates: "hard-disabled", updaterArtifacts: "removed", protocolRegistration: "disabled", profileName: reconstructedWindowsName },
  };
  await writeFile(path.join(outputRoot, windowsPortableManifestName), `${JSON.stringify(manifest, null, 2)}\n`);
  return { outputRoot, executable, packagedAsar, packagedUnpacked, manifest };
}

export async function verifyWindowsPortable(root) {
  const packageVersion = await reconstructedPackageVersion();
  const outputRoot = path.resolve(root), manifest = JSON.parse(await readFile(path.join(outputRoot, windowsPortableManifestName), "utf8"));
  if (manifest?.schemaVersion !== 1 || manifest.kind !== "unofficial-reconstructed-windows-portable" || manifest.platform !== "win32" || manifest.arch !== "x64" || manifest.reconstructedVersion !== packageVersion || manifest.trust?.distributionSigned !== false || manifest.trust?.publicReleaseEligible !== false) throw new Error("Portable manifest identity is invalid");
  const executable = path.join(outputRoot, manifest.executable), asar = path.join(outputRoot, "resources", "app.asar"), unpacked = `${asar}.unpacked`;
  await assertPeX64(executable, manifest.executable);
  if (await pathExists(path.join(outputRoot, "Grok Bot.exe"))) throw new Error("Portable output inherited the official executable name");
  await assertNoWindowsUpdaterArtifacts(outputRoot);
  if (await sha256File(asar) !== manifest.reconstructed.appAsarSha256 || manifest.upstream.appAsarSha256 !== upstreamWindowsAsarSha256 || manifest.upstream.installerSha256 !== windowsInstallerSha256) throw new Error("Portable hash provenance is invalid");
  const listing = normalizedListing(asar);
  for (const required of ["package.json", "dist/electron-main/main.cjs", "dist/host/host-main.cjs", "dist/renderer/index.html", "dist/reconstruction-build.json", "dist/runtime-composition-audit.json"]) if (!listing.has(required)) throw new Error(`Reconstructed ASAR is missing ${required}`);
  const packageJson = asarJson(asar, "package.json");
  if (packageJson.name !== reconstructedWindowsPackageName || packageJson.productName !== reconstructedWindowsName || packageJson.sandTrack != null || packageJson.reconstructed?.updates !== "disabled" || packageJson.reconstructed?.protocolRegistration !== "disabled") throw new Error("Windows reconstructed package identity is invalid");
  const main = Buffer.from(extractAsarFile(asar, "dist/electron-main/main.cjs")).toString("utf8");
  for (const marker of ["process.env.SAND_DISABLE_UPDATES = \"1\";", "SAND_DISABLE_PROTOCOL_REGISTRATION = \"1\"", "Grok Bot 0.18 Reconstructed"]) if (!main.includes(marker)) throw new Error(`Electron main lacks Windows safety boundary: ${marker}`);
  for (const marker of ["sand:proxy-gateway-status", "proxy-gateway-provider.json", "getProxyGatewayTurnConfig", "hardenWindowsPrivatePath"]) if (!main.includes(marker)) throw new Error(`Electron main does not activate the Proxy Gateway security boundary: ${marker}`);
  if (!main.startsWith(reconstructedUpdaterGuard)) throw new Error("Electron main does not start at the reconstructed service boundary");
  const coordinator = Buffer.from(extractAsarFile(asar, "dist/node-agent-coordinator/main.cjs")).toString("utf8");
  for (const marker of ["getProxyGatewayTurnConfig", "SAND_PROXY_GATEWAY_ENABLE_UNREVIEWED_MCP_TOOLS", "chat/completions"]) if (!coordinator.includes(marker)) throw new Error(`Coordinator does not activate the Proxy Gateway route: ${marker}`);
  const preload = Buffer.from(extractAsarFile(asar, "dist/electron-preload/preload.cjs")).toString("utf8");
  if (!preload.includes("sand:proxy-gateway-status") || !preload.includes("sand:proxy-gateway-save") || !preload.includes("sand:proxy-gateway-delete")) throw new Error("Primary preload does not expose the bounded Proxy Gateway settings bridge");
  const native = asarJson(asar, "dist/deps/runtime-deps-manifest.json");
  if (native.platform !== "win32" || native.arch !== "x64" || !Array.isArray(native.nodeFiles) || native.nodeFiles.length < 1) throw new Error("Packaged native manifest is not Windows x64");
  for (const relative of native.nodeFiles) await assertPeX64(path.join(unpacked, "dist", "deps", ...relative.split("/")), relative);
  await assertPeX64(path.join(unpacked, "dist", "native", "sand-webauthn-signer.exe"), "sand-webauthn-signer.exe");
  const buildManifest = asarJson(asar, "dist/reconstruction-build.json");
  const composition = buildManifest.runtimeComposition;
  if (composition.find(value => value.runtime === "electron-main")?.mode !== "clean-source") throw new Error("Windows package did not activate the clean Electron main required by Proxy Gateway");
  if (composition.find(value => value.runtime === "electron-shell")?.path !== "Grok Bot.exe") throw new Error("Runtime composition does not declare the Windows carrier");
  const renderer = composition.find(value => value.runtime === "renderer");
  if (renderer?.mode !== "clean-source" || renderer.source !== "frontend/src/main.tsx" || typeof renderer.provenance !== "string" || !listing.has(renderer.provenance)) throw new Error("Windows package does not activate the clean-source renderer");
  const provenance = asarJson(asar, renderer.provenance);
  if (provenance.mode !== "clean-source" || provenance.entrypoint !== "frontend/src/main.tsx" || provenance.graph?.forbiddenInputs?.length !== 0 || !Array.isArray(provenance.outputs) || provenance.outputs.length < 1) throw new Error("Windows clean renderer provenance is invalid");
  for (const output of buildManifest.outputs ?? []) {
    if (typeof output.path !== "string" || typeof output.sha256 !== "string") throw new Error("Clean build output provenance is malformed");
    const bytes = Buffer.from(extractAsarFile(asar, output.path));
    if (bytes.byteLength !== output.bytes || hashBytes(bytes) !== output.sha256) throw new Error(`Clean build output differs from its manifest: ${output.path}`);
  }
  const rendererIndex = Buffer.from(extractAsarFile(asar, "dist/renderer/index.html")).toString("utf8");
  if (!/src="\.\/assets\//.test(rendererIndex)) throw new Error("Clean renderer index is not file-relative");
  return { outputRoot, executable, asar, unpacked, manifest, nativeModules: native.nodeFiles.length, rendererFiles: provenance.outputs.length };
}
