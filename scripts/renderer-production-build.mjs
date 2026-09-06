import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";

import { auditRendererClosure, rendererClosureSnapshot } from "./audit-renderer-closure.mjs";
import { auditUiProvenance } from "./audit-ui-provenance.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const rendererProductionEntrypoint = "frontend/src/main.tsx";
export const rendererProductionOutput = "dist/renderer";
export const rendererProductionProvenance = `${rendererProductionOutput}/renderer-source-provenance.json`;
const deterministicBanner = `"Deterministic clean-source renderer: ${rendererProductionEntrypoint}";`;

const KATEX_VERSION = "0.16.45";
const KATEX_CSS_FILES = Object.freeze([
  { file: "katex.css", sha256: "be62cce2bb080b2af5d86b115cc4fda61ead12d782e580046bcfe5598534820b" },
  { file: "katex.min.css", sha256: "23aefa0850248a16478b9f55d6b67028f74cc0b46b82b24dc22af068acaa4170" },
]);
const KATEX_FONT_HASHES = Object.freeze({
  "KaTeX_AMS-Regular.woff2": "0cdd387c9590a1a9f9794560022dbb59654a7d86f187aa0c81495ad42d3a7308",
  "KaTeX_Caligraphic-Bold.woff2": "de7701e42cf1f4cf0b766c03fb27977207eee2f4fd5d76fa82188406da43ea4c",
  "KaTeX_Caligraphic-Regular.woff2": "5d53e70ad607c2352162dec9e0923fb54ecdafaccbf604cd8dcf7d00facb989b",
  "KaTeX_Fraktur-Bold.woff2": "74444efd593c005e3f4573b44524704c0af0a937fe911cca9e94068d0d140d3f",
  "KaTeX_Fraktur-Regular.woff2": "51814d270d06ff0255dba0799994fa4d8c84d11f09951d47595f4abb1f3602dc",
  "KaTeX_Main-Bold.woff2": "0f60d1b897938ec918c8ce073092411baf9438f6739465693ff18b0f9d20b021",
  "KaTeX_Main-BoldItalic.woff2": "99cd42a3c072d918f2f44984a807cf7aa16e13545fd0875fc07c6c65f99e715b",
  "KaTeX_Main-Italic.woff2": "97479ca6cce906abc961ecac96faa5f9ca2e61b8e7670d475826bcdee9a7c267",
  "KaTeX_Main-Regular.woff2": "c2342cd8b869e01752a9321dc17213fc40d4d04c79688c1d43f2cf316abd7866",
  "KaTeX_Math-BoldItalic.woff2": "dc47344dbb6cb5b655c8460d561f4df5f501b90c804ad3c6cec65fe322351ab1",
  "KaTeX_Math-Italic.woff2": "7af58c5ec8f132a2ddde9027c6d7814decce4d3b822a11192a42a20e2e973264",
  "KaTeX_SansSerif-Bold.woff2": "e99ae51144bf1232efcc1bfe5add36262c6866b0faab24fa75740e1b98577a62",
  "KaTeX_SansSerif-Italic.woff2": "00b26ac825e2095056396e0553b8ac26d3f8ad158c3826e28b4c45b385c4714a",
  "KaTeX_SansSerif-Regular.woff2": "68e8c73ef42afd3ccec58bf0fba302cce448938e7fc020a5e31f8a952eee1342",
  "KaTeX_Script-Regular.woff2": "036d4e95149b69ff9bcc0cd55771efeb25ffa3947293e69acd78d5ac328c684b",
  "KaTeX_Size1-Regular.woff2": "6b47c40166b6dbe21a5dfca7718413f2147fd2399be1ba605d8ad39cedf25dfe",
  "KaTeX_Size2-Regular.woff2": "d04c54219f9eaec6d4d4fd42dfb28785975a4794d6b2fc71e566b9cd6db842dd",
  "KaTeX_Size3-Regular.woff2": "73d591271b1604960cb10bb90fee021670af7297017e0e98480b332d11f51995",
  "KaTeX_Size4-Regular.woff2": "a4af7d414440a1c1790825cfb700cf9cf43b0f2c4b04f0ebc523011ad9853ec0",
  "KaTeX_Typewriter-Regular.woff2": "71d517d67827787cfabdf186914cc3358eda539e37931941f2b2fd4a21f68c0b",
});
function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function validateRuntimeAssetBytes(asset, bytes) {
  const digest = sha256(bytes);
  if (digest !== asset.sha256) throw new Error(`Renderer runtime asset hash drifted: ${asset.file}`);
  if (asset.bytes != null && bytes.byteLength !== asset.bytes) {
    throw new Error(`Renderer runtime asset size drifted: ${asset.file}`);
  }
  return { ...asset, bytes: bytes.byteLength };
}

function normalize(value) {
  return value.split(path.sep).join("/");
}

async function walk(root, current = root) {
  const files = [];
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const target = path.join(current, entry.name);
    if (entry.isDirectory()) files.push(...await walk(root, target));
    else if (entry.isFile()) files.push(normalize(path.relative(root, target)));
  }
  return files.sort();
}

async function readJson(relative) {
  return JSON.parse(await readFile(path.join(repoRoot, relative), "utf8"));
}

function parseScriptTagAttributes(tag) {
  if (!/^<script(?=[\t\n\f\r />])/i.test(tag)) throw new Error("Renderer HTML has an invalid script tag");
  const attributes = new Map();
  const isWhitespace = value => value != null && /[\t\n\f\r ]/.test(value);
  let cursor = "<script".length;
  while (cursor < tag.length) {
    while (isWhitespace(tag[cursor])) cursor += 1;
    if (tag[cursor] === ">") return attributes;
    if (tag[cursor] === "/" && tag[cursor + 1] === ">") return attributes;
    const nameStart = cursor;
    while (
      cursor < tag.length
      && !isWhitespace(tag[cursor])
      && !new Set(["=", "/", ">"]).has(tag[cursor])
    ) cursor += 1;
    if (cursor === nameStart) throw new Error("Renderer HTML has an invalid script attribute");
    const name = tag.slice(nameStart, cursor).toLowerCase();
    while (isWhitespace(tag[cursor])) cursor += 1;
    let value = null;
    if (tag[cursor] === "=") {
      cursor += 1;
      while (isWhitespace(tag[cursor])) cursor += 1;
      const quote = tag[cursor];
      if (quote !== '"' && quote !== "'") throw new Error("Renderer HTML script attributes must be quoted");
      const valueEnd = tag.indexOf(quote, cursor + 1);
      if (valueEnd < 0) throw new Error("Renderer HTML has an unterminated script attribute");
      value = tag.slice(cursor + 1, valueEnd);
      cursor = valueEnd + 1;
    }
    const values = attributes.get(name) ?? [];
    values.push(value);
    attributes.set(name, values);
  }
  throw new Error("Renderer HTML has an unterminated script tag");
}

export async function validateBootstrapEvidence({ root = repoRoot } = {}) {
  const catalog = JSON.parse(await readFile(path.join(root, "frontend/manifests/renderer-bootstrap.json"), "utf8"));
  if (!Array.isArray(catalog.artifactVariants) || catalog.artifactVariants.length === 0) {
    throw new Error("Renderer bootstrap catalog has no checksum-pinned artifact variants");
  }
  const variants = [];
  for (const variant of catalog.artifactVariants) {
    if (
      typeof variant?.platform !== "string"
      || typeof variant.path !== "string"
      || !/^src\/app\/dist\/renderer\/assets\/[A-Za-z0-9_.-]+\.js$/.test(variant.path)
      || !/^[0-9a-f]{64}$/.test(variant.sha256)
      || !Number.isSafeInteger(variant.htmlBytes)
      || variant.htmlBytes < 0
      || !/^[0-9a-f]{64}$/.test(variant.htmlSha256)
    ) {
      throw new Error("Renderer bootstrap catalog has an invalid artifact variant");
    }
    let artifact;
    try {
      artifact = await readFile(path.join(root, variant.path));
    } catch (error) {
      if (error?.code === "ENOENT") continue;
      throw error;
    }
    const digest = sha256(artifact);
    if (digest !== variant.sha256) {
      throw new Error(`Renderer bootstrap artifact hash drifted: ${variant.path}`);
    }
    variants.push({ artifact, variant });
  }
  if (variants.length !== 1) {
    throw new Error(`Expected exactly one checksum-pinned renderer bootstrap artifact, found ${variants.length}`);
  }
  const [{ artifact, variant }] = variants;
  const htmlPath = "src/app/dist/renderer/index.html";
  const htmlBytes = await readFile(path.join(root, htmlPath));
  if (htmlBytes.byteLength !== variant.htmlBytes || sha256(htmlBytes) !== variant.htmlSha256) {
    throw new Error(`Renderer bootstrap HTML hash drifted: ${htmlPath}`);
  }
  const html = htmlBytes.toString("utf8");
  if (!Buffer.from(html, "utf8").equals(htmlBytes)) {
    throw new Error(`Renderer bootstrap HTML is not valid UTF-8: ${htmlPath}`);
  }
  const moduleScripts = [];
  for (const [tag] of html.matchAll(/<script(?=[\t\n\f\r />])[^>]*>/gi)) {
    const attributes = parseScriptTagAttributes(tag);
    const types = attributes.get("type") ?? [];
    if (!types.some(type => typeof type === "string" && type.toLowerCase() === "module")) continue;
    const sources = attributes.get("src") ?? [];
    moduleScripts.push(types.length === 1 && sources.length === 1 ? sources[0] : null);
  }
  if (moduleScripts.length !== 1 || moduleScripts[0] == null) {
    throw new Error(`Expected exactly one renderer module entry script, found ${moduleScripts.length}`);
  }
  const expectedEntry = `./assets/${path.posix.basename(variant.path)}`;
  if (moduleScripts[0] !== expectedEntry) {
    throw new Error(`Renderer bootstrap artifact is not the HTML module entry: expected ${expectedEntry}, found ${moduleScripts[0]}`);
  }
  const anchors = [
    ...catalog.mount.anchors,
    catalog.runtimeAcquisition.desktop,
    catalog.runtimeAcquisition.coordinatorPort,
    ...catalog.providerOrder.map(({ anchor, byteOffset }) => ({ needle: anchor, byteOffset })),
  ];
  for (const anchor of anchors) {
    const actual = artifact.indexOf(Buffer.from(anchor.needle));
    const repeated = actual < 0 ? -1 : artifact.indexOf(Buffer.from(anchor.needle), actual + Buffer.byteLength(anchor.needle));
    if (actual !== anchor.byteOffset || repeated >= 0) {
      throw new Error(`Renderer bootstrap anchor drifted: ${anchor.needle} (expected ${anchor.byteOffset}, found ${actual})`);
    }
  }
  return {
    ...catalog,
    validatedArtifact: {
      platform: variant.platform,
      path: variant.path,
      bytes: artifact.byteLength,
      sha256: variant.sha256,
      indexHtml: {
        path: htmlPath,
        bytes: htmlBytes.byteLength,
        sha256: variant.htmlSha256,
      },
    },
  };
}

function validateAssetFileName(file, label) {
  if (typeof file !== "string" || file === "." || file === ".." || !/^[A-Za-z0-9_.-]+$/.test(file)) {
    throw new Error(`${label} has an invalid file name`);
  }
}

function validateManifestDirectory(directory, label) {
  if (
    typeof directory !== "string"
    || directory.length === 0
    || directory.includes("\\")
    || path.posix.isAbsolute(directory)
    || path.posix.normalize(directory) !== directory
    || directory.split("/").some(part => part === "" || part === "..")
  ) {
    throw new Error(`${label} has an invalid relative directory`);
  }
}

function validateAssetDescriptor(asset, label) {
  validateAssetFileName(asset?.file, label);
  if (!/^[0-9a-f]{64}$/.test(asset?.sha256 ?? "")) {
    throw new Error(`${label} has an invalid SHA-256`);
  }
  if (asset.bytes != null && (!Number.isSafeInteger(asset.bytes) || asset.bytes < 0)) {
    throw new Error(`${label} has an invalid byte length`);
  }
}

export async function resolveRuntimeAssetSource(asset, { root = repoRoot, artifactRoot } = {}) {
  validateAssetDescriptor(asset, "Renderer runtime asset");
  validateManifestDirectory(artifactRoot, "Renderer runtime artifact root");
  if (asset.sources != null && !Array.isArray(asset.sources)) {
    throw new Error(`Renderer runtime asset sources must be an array: ${asset.file}`);
  }
  const candidates = [{
    platform: "canonical",
    file: asset.file,
    bytes: asset.bytes,
    sha256: asset.sha256,
    transform: "identity",
  }];
  const files = new Set([asset.file]);
  const platforms = new Set(["canonical"]);
  for (const source of asset.sources ?? []) {
    validateAssetDescriptor(source, `Renderer runtime asset source for ${asset.file}`);
    if (typeof source.platform !== "string" || !/^[A-Za-z0-9_.-]+$/.test(source.platform)) {
      throw new Error(`Renderer runtime asset source has an invalid platform: ${asset.file}`);
    }
    if (!new Set(["identity", "crlf-to-lf"]).has(source.transform)) {
      throw new Error(`Renderer runtime asset source has an invalid transform: ${asset.file}`);
    }
    if (files.has(source.file) || platforms.has(source.platform)) {
      throw new Error(`Renderer runtime asset has a duplicate source: ${asset.file}`);
    }
    files.add(source.file);
    platforms.add(source.platform);
    candidates.push(source);
  }
  const base = path.resolve(root, ...artifactRoot.split("/"));
  const relativeBase = path.relative(path.resolve(root), base);
  if (path.isAbsolute(relativeBase) || relativeBase === ".." || relativeBase.startsWith(`..${path.sep}`)) {
    throw new Error("Renderer runtime artifact root escapes the repository");
  }
  const present = [];
  for (const candidate of candidates) {
    let bytes;
    try {
      bytes = await readFile(path.join(base, candidate.file));
    } catch (error) {
      if (error?.code === "ENOENT") continue;
      throw error;
    }
    validateRuntimeAssetBytes(candidate, bytes);
    present.push({ bytes, source: candidate });
  }
  if (present.length !== 1) {
    throw new Error(`Expected exactly one checksum-pinned source for renderer runtime asset ${asset.file}, found ${present.length}`);
  }
  const [{ bytes: sourceBytes, source }] = present;
  let outputBytes = sourceBytes;
  if (source.transform === "crlf-to-lf") {
    if (!sourceBytes.includes(Buffer.from("\r\n"))) {
      throw new Error(`Renderer runtime asset source has no CRLF bytes to normalize: ${source.file}`);
    }
    const text = sourceBytes.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(sourceBytes)) {
      throw new Error(`Renderer runtime asset source is not valid UTF-8: ${source.file}`);
    }
    outputBytes = Buffer.from(text.replaceAll("\r\n", "\n"), "utf8");
    if (outputBytes.includes(Buffer.from("\r"))) {
      throw new Error(`Renderer runtime asset source contains unsupported carriage returns: ${source.file}`);
    }
  }
  const canonicalAsset = { file: asset.file, bytes: asset.bytes, sha256: asset.sha256 };
  const record = validateRuntimeAssetBytes(canonicalAsset, outputBytes);
  return {
    bytes: outputBytes,
    record: {
      ...record,
      source: {
        platform: source.platform,
        file: source.file,
        bytes: sourceBytes.byteLength,
        sha256: source.sha256,
        transform: source.transform,
      },
    },
  };
}

async function validateCleanGraph() {
  const result = await esbuild({
    absWorkingDir: repoRoot,
    bundle: true,
    entryPoints: [path.join(repoRoot, rendererProductionEntrypoint)],
    format: "esm",
    loader: { ".css": "empty", ".woff2": "dataurl" },
    logLevel: "silent",
    metafile: true,
    platform: "browser",
    write: false,
  });
  const inputs = Object.keys(result.metafile.inputs).map(input => normalize(path.relative(repoRoot, path.resolve(repoRoot, input)))).sort();
  const forbiddenInputs = inputs.filter(input => input === "src/app" || input.startsWith("src/app/") || input.startsWith("recovered/source-capsules/"));
  if (forbiddenInputs.length > 0) throw new Error(`Clean renderer graph reaches immutable evidence: ${forbiddenInputs.join(", ")}`);
  return { entrypoint: rendererProductionEntrypoint, inputs, forbiddenInputs };
}

async function validateEvidenceClosure() {
  if (!existsSync(path.join(repoRoot, "recovered", "frontend", "reports", "imports.tsv"))) {
    const closure = await readJson("manifests/reconstruction/renderer-closure.json");
    if (closure.schemaVersion !== 1 || closure.verdict?.canReplaceShippedBundleWithoutFeatureLoss !== true) {
      throw new Error("Checked renderer closure does not authorize the clean source renderer.");
    }
    if (closure.summary?.high !== 0 || closure.summary?.findings !== 0 || closure.summary?.composedFeatureSurfaces !== 5 || closure.summary?.shippedFeatureRoutes !== 11) {
      throw new Error("Checked renderer closure is incomplete.");
    }
    if (!Array.isArray(closure.routes) || closure.routes.length !== 11 || closure.routes.some((route) => route.reviewed !== true || route.cleanComposition !== "present")) {
      throw new Error("Checked renderer routes are incomplete.");
    }
    const uiCatalog = await readJson("frontend/manifests/ui-evidence-anchors.json");
    if (uiCatalog.schemaVersion !== 1 || !Array.isArray(uiCatalog.entries) || uiCatalog.entries.length === 0) {
      throw new Error("Checked renderer UI catalog is invalid.");
    }
    const cleanPaths = new Set();
    let anchorCount = 0;
    for (const entry of uiCatalog.entries) {
      if (typeof entry.cleanPath !== "string" || cleanPaths.has(entry.cleanPath) || !Array.isArray(entry.anchors) || entry.anchors.length === 0) {
        throw new Error("Checked renderer UI catalog has a missing, duplicate, or empty source entry.");
      }
      cleanPaths.add(entry.cleanPath);
      await readFile(path.join(repoRoot, entry.cleanPath));
      for (const anchor of entry.anchors) {
        if (typeof anchor.value !== "string" || anchor.value.length === 0 || typeof anchor.artifact !== "string") {
          throw new Error(`Checked renderer UI catalog has an invalid anchor: ${entry.cleanPath}`);
        }
        // Recovery registries are historical annotation sources and are
        // intentionally omitted from the clean publication tree. Checked-in
        // publication registries remain live build inputs and must exist.
        if (anchor.registry != null && !anchor.registry.startsWith("recovered/")) await readFile(path.join(repoRoot, anchor.registry));
        anchorCount += 1;
      }
    }
    if (anchorCount !== closure.summary.uiAnchors) throw new Error("Checked renderer UI anchor count differs from the closure report.");
    return { closure, ui: { summary: { catalogErrors: 0, findings: 0 }, source: "checked-publication-catalog" } };
  }
  const [closure, ui] = await Promise.all([auditRendererClosure(repoRoot), auditUiProvenance(repoRoot)]);
  if (!closure.verdict.canReplaceShippedBundleWithoutFeatureLoss || closure.summary.high !== 0 || closure.summary.findings !== 0) {
    throw new Error(`Renderer closure is not green: ${closure.summary.high} high / ${closure.summary.findings} findings`);
  }
  if (closure.summary.composedFeatureSurfaces !== 5 || closure.summary.shippedFeatureRoutes !== 11 || closure.summary.shippedRoutesAbsentFromCleanComposition !== 0) {
    throw new Error("Renderer closure no longer covers the exact 5 feature surfaces and 11 shipped routes");
  }
  if (ui.summary.catalogErrors !== 0 || ui.summary.findings !== 0) {
    throw new Error(`Renderer UI provenance is not green: ${ui.summary.catalogErrors} catalog errors / ${ui.summary.findings} findings`);
  }
  return { closure: rendererClosureSnapshot(closure), ui };
}

export async function copyRuntimeAssets(rendererRoot) {
  const manifest = await readJson("frontend/manifests/renderer-runtime-assets.json");
  const frontendRoot = path.join(repoRoot, "frontend", "src");
  const usedAssets = new Set();
  for (const relative of await walk(frontendRoot)) {
    if (!/\.[cm]?tsx?$/.test(relative)) continue;
    const source = await readFile(path.join(frontendRoot, relative), "utf8");
    for (const match of source.matchAll(/rendererRuntimeAssetUrl\("([A-Za-z0-9_.-]+)"\)/g)) usedAssets.add(match[1]);
  }
  const declaredAssets = new Set(manifest.assets.map(asset => asset.file));
  const undeclared = [...usedAssets].filter(file => !declaredAssets.has(file));
  const unused = [...declaredAssets].filter(file => !usedAssets.has(file));
  if (undeclared.length > 0 || unused.length > 0) {
    throw new Error(`Renderer runtime asset manifest mismatch; undeclared=${undeclared.join(",") || "none"}, unused=${unused.join(",") || "none"}`);
  }
  const outputAssets = path.join(rendererRoot, "assets");
  await mkdir(outputAssets, { recursive: true });
  const copied = [];
  for (const asset of [...manifest.assets, ...(manifest.immutableAssets ?? [])]) {
    const { bytes, record } = await resolveRuntimeAssetSource(asset, { artifactRoot: manifest.artifactRoot });
    await writeFile(path.join(outputAssets, asset.file), bytes);
    copied.push(record);
  }
  return copied;
}

export async function copyKatexRuntimeAssets(rendererRoot) {
  const packageRoot = path.join(repoRoot, "node_modules", "katex");
  const packageManifest = JSON.parse(await readFile(path.join(packageRoot, "package.json"), "utf8"));
  if (packageManifest.version !== KATEX_VERSION) {
    throw new Error(`KaTeX package drifted: expected ${KATEX_VERSION}, found ${packageManifest.version}`);
  }
  const outputRoot = path.join(rendererRoot, "assets", "katex");
  const outputFonts = path.join(outputRoot, "fonts");
  await mkdir(outputFonts, { recursive: true });
  const copied = [];
  for (const css of KATEX_CSS_FILES) {
    const bytes = await readFile(path.join(packageRoot, "dist", css.file));
    const record = validateRuntimeAssetBytes({ ...css, file: `katex/${css.file}` }, bytes);
    await writeFile(path.join(outputRoot, css.file), bytes);
    copied.push(record);
  }
  for (const [file, expectedHash] of Object.entries(KATEX_FONT_HASHES)) {
    const bytes = await readFile(path.join(packageRoot, "dist", "fonts", file));
    const record = validateRuntimeAssetBytes({ file: `katex/fonts/${file}`, sha256: expectedHash }, bytes);
    await writeFile(path.join(outputFonts, file), bytes);
    copied.push(record);
  }
  const stylesheet = path.join(rendererRoot, "index.html");
  let html = await readFile(stylesheet, "utf8");
  const link = '<link rel="stylesheet" href="./assets/katex/katex.css" />';
  if (!html.includes(link)) {
    if (!html.includes("</head>")) throw new Error("Renderer HTML has no head boundary for KaTeX stylesheet");
    html = html.replace("</head>", `    ${link}\n  </head>`);
    await writeFile(stylesheet, html);
  }
  return { version: KATEX_VERSION, assets: copied, stylesheet: "assets/katex/katex.css" };
}

export async function rewritePdfAssetReferences(rendererRoot) {
  const moduleReference = "/upstream/assets/pdf-WLgSwHwh.js";
  const workerReference = "/upstream/assets/pdf.worker.min-qwK7q_zL.mjs";
  const counts = { [moduleReference]: 0, [workerReference]: 0 };
  for (const relative of await walk(rendererRoot)) {
    if (!relative.endsWith(".js")) continue;
    const target = path.join(rendererRoot, relative);
    const original = await readFile(target, "utf8");
    let rewritten = original;
    const moduleOccurrences = rewritten.split(moduleReference).length - 1;
    if (moduleOccurrences > 0) {
      counts[moduleReference] += moduleOccurrences;
      rewritten = rewritten.split(moduleReference).join("./pdf-WLgSwHwh.js");
    }
    const workerBinding = rewritten.match(/(?:^|[,;])\s*([A-Za-z_$][\w$]*)=["']pdf\.worker\.min-qwK7q_zL\.mjs["']/);
    if (workerBinding != null) {
      const workerVariable = workerBinding[1];
      const workerPattern = new RegExp("`/upstream/assets/\\$\\{" + workerVariable + "\\}`", "g");
      const workerOccurrences = rewritten.match(workerPattern)?.length ?? 0;
      if (workerOccurrences > 0) {
        counts[workerReference] += workerOccurrences;
        rewritten = rewritten.replace(workerPattern, "`./${" + workerVariable + "}`");
      }
    }
    if (counts[workerReference] === 0) {
      if (rewritten.includes("pdf.worker.min-qwK7q_zL.mjs")) counts[workerReference] += 1;
    }
    if (rewritten !== original) await writeFile(target, rewritten);
  }
  for (const [from, count] of Object.entries(counts)) {
    if (count === 0) throw new Error(`Renderer PDF reference was not emitted: ${from}`);
  }
  return {
    replacements: {
      [moduleReference]: { to: "./pdf-WLgSwHwh.js", count: counts[moduleReference] },
      [workerReference]: { to: "./pdf.worker.min-qwK7q_zL.mjs", count: counts[workerReference] },
    },
  };
}

/**
 * Vite can describe the HTML entry as its own dynamic import when manifest
 * generation sees the HTML shell. It is not a JavaScript lazy boundary and
 * must not be exposed as one in the authoritative renderer manifest.
 */
export function normalizeRendererManifestDynamicImports(manifest) {
  const entry = manifest?.["index.html"];
  if (entry != null && Array.isArray(entry.dynamicImports)) {
    entry.dynamicImports = entry.dynamicImports.filter((candidate) => candidate !== "index.html");
  }
  return manifest;
}

async function emittedRecords(rendererRoot, exemptBannerPaths = new Set()) {
  const records = [];
  for (const relative of await walk(rendererRoot)) {
    if (relative === "renderer-source-provenance.json") continue;
    const bytes = await readFile(path.join(rendererRoot, relative));
    if (/\.(?:html|js|css|json)$/.test(relative)) {
      const text = bytes.toString("utf8");
      if (relative.endsWith(".js") && !text.includes(deterministicBanner) && !exemptBannerPaths.has(relative)) {
        throw new Error(`Emitted renderer chunk lacks the clean-source banner: ${relative}`);
      }
    }
    records.push({ path: `${rendererProductionOutput}/${relative}`, bytes: bytes.byteLength, sha256: sha256(bytes) });
  }
  return records;
}

export async function buildProductionRenderer({ outputRoot }) {
  if (typeof outputRoot !== "string" || outputRoot.length === 0) throw new TypeError("buildProductionRenderer requires outputRoot");
  const rendererRoot = path.join(outputRoot, rendererProductionOutput);
  const [bootstrap, graph, evidence] = await Promise.all([
    validateBootstrapEvidence(),
    validateCleanGraph(),
    validateEvidenceClosure(),
  ]);
  await rm(rendererRoot, { recursive: true, force: true });
  await viteBuild({
    base: "./",
    configFile: false,
    root: path.join(repoRoot, "frontend"),
    publicDir: false,
    plugins: [react(), {
      name: "renderer-clean-source-banner",
      enforce: "post",
      renderChunk(code) {
        return { code: `${deterministicBanner}\n${code}`, map: null };
      },
    }],
    build: {
      assetsDir: "assets",
      emptyOutDir: true,
      manifest: true,
      minify: "esbuild",
      outDir: rendererRoot,
      reportCompressedSize: false,
      sourcemap: false,
    },
    logLevel: "silent",
  });
  const assets = await copyRuntimeAssets(rendererRoot);
  const katex = await copyKatexRuntimeAssets(rendererRoot);
  const pdfAssetRewrite = await rewritePdfAssetReferences(rendererRoot);
  const viteManifest = normalizeRendererManifestDynamicImports(JSON.parse(await readFile(path.join(rendererRoot, ".vite", "manifest.json"), "utf8")));
  await writeFile(path.join(rendererRoot, ".vite", "manifest.json"), `${JSON.stringify(viteManifest, null, 2)}\n`);
  const emittedLazyEntries = [...(viteManifest["index.html"]?.dynamicImports ?? [])].sort();
  const expectedLazyEntries = bootstrap.lazyBoundaries.map(boundary => boundary.cleanDynamicEntry).sort();
  if (JSON.stringify(emittedLazyEntries) !== JSON.stringify(expectedLazyEntries)) {
    throw new Error(`Renderer lazy boundaries drifted; expected ${expectedLazyEntries.join(",")}, emitted ${emittedLazyEntries.join(",")}`);
  }
  for (const entry of emittedLazyEntries) {
    if (viteManifest[entry]?.isDynamicEntry !== true) throw new Error(`Renderer lazy boundary is not independently emitted: ${entry}`);
  }
  const outputs = await emittedRecords(rendererRoot, new Set(assets.map(({ file }) => `assets/${file}`)));
  const provenance = {
    schemaVersion: 1,
    runtime: "renderer",
    mode: "clean-source",
    entrypoint: rendererProductionEntrypoint,
    graph,
    evidence: {
      closureSha256: sha256(Buffer.from(JSON.stringify(evidence.closure))),
      closureSummary: evidence.closure.summary,
      routeContracts: evidence.closure.routes.map(({ route, family, kind, reviewed, cleanComposition }) => ({ route, family, kind, reviewed, cleanComposition })),
      uiSummary: evidence.ui.summary,
      bootstrap,
      emittedLazyEntries,
      pdfAssetRewrite,
    },
    assets,
    katex,
    outputs,
  };
  const provenancePath = path.join(outputRoot, rendererProductionProvenance);
  await writeFile(provenancePath, `${JSON.stringify(provenance, null, 2)}\n`);
  const provenanceBytes = await readFile(provenancePath);
  return {
    outputRoot,
    rendererRoot,
    provenance,
    provenancePath,
    outputs: [...outputs, { path: rendererProductionProvenance, bytes: provenanceBytes.byteLength, sha256: sha256(provenanceBytes) }].sort((left, right) => left.path.localeCompare(right.path)),
  };
}
