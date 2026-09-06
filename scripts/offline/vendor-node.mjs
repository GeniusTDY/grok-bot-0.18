// Offline build-toolchain layout and vendor-Node resolution.
//
// The reconstructed build normally needs a Node.js 26.5.x toolchain plus a
// fully patched node_modules. On an air-gapped Windows machine neither may be
// available, so an authorized "preparation" machine can stage everything under
// `offline/`. Every build script already runs its children through
// `process.execPath` (see clean-build.mjs, build-asar.mjs, node-gyp entry
// points), so launching the top-level entry with the vendored Node causes the
// entire build graph to run on that same Node without any network access.
//
// These functions are intentionally pure so they can be unit-tested without a
// real Windows binary or a network connection.

export const NODE_ENGINES_RANGE = ">=26.5.0 <27";

// Pinned to the resolved minimum of the repository engines field so the staged
// toolchain is reproducible and does not float with `latest`. Override with the
// OFFLINE_NODE_VERSION environment variable when a different 26.5.x is wanted.
export const DEFAULT_VENDOR_NODE_VERSION = "26.5.0";

export const NODEJS_DIST = "https://nodejs.org/dist";

const NODE_ASSET_BASENAMES = Object.freeze({
  "win32": { "x64": (version) => `node-v${version}-win-x64` },
  "darwin": { "arm64": (version) => `node-v${version}-darwin-arm64`, "x64": (version) => `node-v${version}-darwin-x64` },
  "linux": { "x64": (version) => `node-v${version}-linux-x64` },
});

/** True when this platform/arch combination has a defined vendorable Node asset. */
export function hasVendorNodeAsset(platform, arch) {
  return NODE_ASSET_BASENAMES[platform]?.[arch] !== undefined;
}

/** Returns the archive basename (without extension) for a platform/arch, or null. */
export function nodeArchiveBasename(platform, arch, version = DEFAULT_VENDOR_NODE_VERSION) {
  return NODE_ASSET_BASENAMES[platform]?.[arch]?.(version) ?? null;
}

/**
 * Resolves the vendored Node executable path (and whether it already exists).
 * Layout under `offline/vendor/node/<platform>-<arch>/`.
 */
export function vendorNodeEntry(offlineRoot, platform, arch) {
  const dir = platform === "win32" ? `${platform}-${arch}` : `${platform}-${arch}`;
  const root = join(offlineRoot, "vendor", "node", dir);
  const commandName = platform === "win32" ? "node.exe" : "node";
  return {
    root,
    commandPath: join(root, commandName),
    npmCliPath: join(root, "node_modules", "npm", "bin", "npm-cli.js"),
  };
}

// Local import to keep this module dependency-light but still testable/reusable.
import { join } from "node:path";

/**
 * Returns the vendor Node executable to use, choosing the vendored copy first
 * and falling back to the running process only when no asset is vendored.
 * `fallback` is the running interpreter (normally `process.execPath`).
 */
export function resolveVendorNode(offlineRoot, platform, arch, fallback) {
  if (!hasVendorNodeAsset(platform, arch)) return { command: fallback, vendored: false, npmCli: null };
  const entry = vendorNodeEntry(offlineRoot, platform, arch);
  return { command: entry.commandPath, vendored: true, npmCli: entry.npmCliPath };
}

/** Extracts the hex sha256 for `assetName` from the nodejs.org SHASUMS256.txt text. */
export function nodeShasumFor(shasumsText, assetName) {
  const pattern = new RegExp(`^([0-9a-f]{64,})\\s+${escapeRegExp(assetName)}$`, "m");
  const match = shasumsText.match(pattern);
  return match ? match[1] : null;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Builds the Node version from an env override or the pinned default. */
export function vendorNodeVersion(env = process.env) {
  const override = env.OFFLINE_NODE_VERSION;
  if (override && /^26\.5\.\d+$/.test(override)) return override;
  return DEFAULT_VENDOR_NODE_VERSION;
}