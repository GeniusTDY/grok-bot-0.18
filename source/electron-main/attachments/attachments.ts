import { open, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

import { posixPathFromFileUrl } from "../../shared/node/paths.js";

export const GATEWAY_READ_CHUNK_BYTES = 4 * 1024 * 1024;
export const LINK_PREVIEW_PHOTO_MAX_DIMENSION = 1280;
export const LINK_PREVIEW_ICON_MAX_DIMENSION = 128;

export interface AttachmentChunk { readonly totalSize: number; readonly bytesBase64: string }
export interface AttachmentLegs {
  readAttachmentImage(request: { path: string }): Promise<ImageAttachment | null>;
  readAttachmentText(request: { path: string }): Promise<string | null>;
  readAttachmentChunk(request: { path: string; offset: number; length: number }): Promise<AttachmentChunk | null>;
  uploadAttachment(request: { filename: string; bytesBase64: string }): Promise<{ path: string }>;
}
export interface ImageAttachment { readonly dataUrl: string; readonly width: number | null; readonly height: number | null }
export interface PreviewImagePort {
  createFromDataURL(dataUrl: string): { isEmpty(): boolean; resize(target: ({ width: number } | { height: number }) & { quality: "good" }): { isEmpty(): boolean; toJPEG(quality: number): Buffer; toPNG(): Buffer } };
}
export interface AttachmentEdgeDeps {
  readonly legs: AttachmentLegs;
  readonly getMainWindow: () => unknown | null;
  readonly onEdgeFailure: (failure: { leg: string; errorClass: string }) => void;
  readonly videoMimeFromPath: (path: string) => string | null;
  readonly audioMimeFromPath: (path: string) => string | null;
  readonly displayableImageMimeFromPath: (path: string) => string | null;
  readonly buildMediaUrl: (path: string) => string;
  readonly resolveImage: (path: string, readRemote: (path: string) => Promise<ImageAttachment | null>) => Promise<ImageAttachment | null>;
  readonly fetchLinkMetadata: (request: { cacheDir: string; url: string }) => Promise<Record<string, unknown> & { imageDataUrl?: string | null; faviconDataUrl?: string | null } | null>;
  readonly boundPreviewImage: (dataUrl: string | null | undefined, target: { maxDimension: number; encoding: "jpeg" | "png" }, resize: (dataUrl: string, target: { width: number } | { height: number }, encoding: "jpeg" | "png") => string | null) => string | null;
  readonly nativeImage: PreviewImagePort;
  readonly getUserDataDir: () => string;
  readonly downloadsDir: string;
  readonly previewKindNeedsBytes: (kind: unknown) => boolean;
  readonly getFilePreviewKind: (path: string) => unknown;
  readonly previewByteCap: number;
  readonly byteLimitForName: (filename: string) => number;
  readonly getStagingDir: () => string;
  readonly isWithinStagingDir: (path: string) => boolean;
  readonly resolveSuggestedDownloadName: (request: { suggestedName: unknown; sourcePath: string }) => string;
  readonly resolveDefaultDownloadPath: (request: { fileName: string; configuredDir: null; osDownloadsDir: string }) => string;
  readonly showSaveDialog: (window: unknown | null, options: { defaultPath: string }) => Promise<{ canceled: boolean; filePath?: string }>;
  readonly createHiddenWindow: (options: { readonly show: false }) => unknown;
  readonly showErrorMessage: (window: unknown | null, options: { type: "error"; title: string; message: string }) => Promise<void>;
  readonly now?: () => number;
  readonly randomUUID?: () => string;
}

export function errorClassOf(error: unknown): string { return error instanceof Error ? error.name || "Error" : typeof error; }
export function isSafeFilename(value: unknown): value is string { return typeof value === "string" && value.length > 0 && value.length <= 255 && !value.includes("/") && !value.includes("\\") && !value.includes("\0"); }
export function normalizeAttachmentSource(source: unknown): string | null {
  if (typeof source !== "string" || source.length === 0) return null;
  try { const url = new URL(source); return url.protocol === "file:" ? posixPathFromFileUrl(source) : null; } catch { return source; }
}
export function resizePreviewImage(dataUrl: string, target: { width: number } | { height: number }, encoding: "jpeg" | "png", nativeImage: PreviewImagePort): string | null {
  const source = nativeImage.createFromDataURL(dataUrl); if (source.isEmpty()) return null;
  const scaled = source.resize({ ...target, quality: "good" }); if (scaled.isEmpty()) return null;
  const encoded = encoding === "jpeg" ? scaled.toJPEG(82) : scaled.toPNG();
  return `data:image/${encoding};base64,${encoded.toString("base64")}`;
}

export function createAttachmentEdgePort(deps: AttachmentEdgeDeps) {
  const report = (leg: string, error: unknown): void => deps.onEdgeFailure({ leg, errorClass: errorClassOf(error) });
  const readBoxBytes = async (filePath: string, maxBytes: number): Promise<{ kind: "too-large"; size: number } | { kind: "bytes"; bytes: Uint8Array } | null> => {
    let totalSize: number;
    try { const probe = await deps.legs.readAttachmentChunk({ path: filePath, offset: 0, length: 0 }); if (probe == null) return null; totalSize = probe.totalSize; } catch (error) { report("read-bytes", error); return null; }
    if (totalSize > maxBytes) return { kind: "too-large", size: totalSize };
    const buffer = Buffer.alloc(totalSize); let offset = 0;
    try {
      while (offset < totalSize) { const chunk = await deps.legs.readAttachmentChunk({ path: filePath, offset, length: GATEWAY_READ_CHUNK_BYTES }); if (chunk == null) return null; const bytes = Buffer.from(chunk.bytesBase64, "base64"); if (bytes.length === 0) break; bytes.copy(buffer, offset); offset += bytes.length; }
    } catch (error) { report("read-bytes", error); return null; }
    return offset < totalSize ? null : { kind: "bytes", bytes: new Uint8Array(buffer) };
  };
  const failDownload = async (reason: string): Promise<false> => { deps.onEdgeFailure({ leg: "download", errorClass: reason }); try { await deps.showErrorMessage(deps.getMainWindow(), { type: "error", title: "Save File", message: "Couldn't save this file" }); } catch (error) { report("download", error); } return false; };

  return {
    async resolveMedia(source: unknown) {
      const path = normalizeAttachmentSource(source); if (path == null) return null;
      if (deps.videoMimeFromPath(path) != null) return { kind: "video" as const, src: deps.buildMediaUrl(path), width: null, height: null };
      if (deps.audioMimeFromPath(path) != null) return { kind: "audio" as const, src: deps.buildMediaUrl(path) };
      if (deps.displayableImageMimeFromPath(path) == null) return null;
      try { const image = await deps.resolveImage(path, (remotePath) => deps.legs.readAttachmentImage({ path: remotePath })); return image == null ? null : { kind: "image" as const, ...image }; } catch (error) { report("resolve-media", error); return null; }
    },
    async readText(source: unknown): Promise<string | null> { const path = normalizeAttachmentSource(source); if (path == null) return null; try { return await deps.legs.readAttachmentText({ path }); } catch (error) { report("read-text", error); return null; } },
    async readBytes(source: unknown, maxBytes?: unknown) { const path = normalizeAttachmentSource(source); if (path == null || !deps.previewKindNeedsBytes(deps.getFilePreviewKind(path))) return null; const cap = typeof maxBytes === "number" && Number.isFinite(maxBytes) && maxBytes > 0 ? Math.min(Math.floor(maxBytes), deps.previewByteCap) : deps.previewByteCap; return await readBoxBytes(path, cap); },
    async stageBytes(filename: unknown, bytes: unknown) {
      if (!isSafeFilename(filename) || !(bytes instanceof Uint8Array)) return { ok: false as const, reason: "failed" as const };
      if (bytes.byteLength === 0) return { ok: false as const, reason: "empty" as const };
      if (bytes.byteLength > deps.byteLimitForName(filename)) return { ok: false as const, reason: "too-large" as const };
      try { const dir = deps.getStagingDir(); await mkdir(dir, { recursive: true }); const path = join(dir, `${(deps.now ?? Date.now)()}-${(deps.randomUUID ?? crypto.randomUUID)()}${extname(filename)}`); await writeFile(path, bytes); return { ok: true as const, path }; } catch (error) { report("stage", error); return { ok: false as const, reason: "failed" as const }; }
    },
    async commitStaged(rawPaths: unknown, rawFilenames: unknown): Promise<string[] | null> {
      const paths = Array.isArray(rawPaths) ? rawPaths : []; const filenames = Array.isArray(rawFilenames) ? rawFilenames : []; const committed: string[] = [];
      for (let index = 0; index < paths.length; index += 1) { const stagedPath = paths[index]; const filename = filenames[index]; if (typeof stagedPath !== "string" || stagedPath.length === 0 || !isSafeFilename(filename) || !deps.isWithinStagingDir(stagedPath)) return null; let bytes: Buffer; try { bytes = await readFile(stagedPath); } catch (error) { report("commit", error); return null; } if (bytes.byteLength === 0) return null; try { committed.push((await deps.legs.uploadAttachment({ filename, bytesBase64: bytes.toString("base64") })).path); } catch (error) { report("commit", error); return null; } }
      return committed;
    },
    async discardStaged(stagedPath: unknown): Promise<void> { if (typeof stagedPath !== "string" || stagedPath.length === 0 || !deps.isWithinStagingDir(stagedPath)) return; await rm(stagedPath, { force: true }).catch((error: unknown) => report("discard", error)); },
    async getLinkMetadata(url: unknown) { if (typeof url !== "string") return null; const metadata = await deps.fetchLinkMetadata({ cacheDir: join(deps.getUserDataDir(), "link-preview-cache"), url }); if (metadata == null) return null; return { ...metadata, imageDataUrl: deps.boundPreviewImage(metadata.imageDataUrl, { maxDimension: LINK_PREVIEW_PHOTO_MAX_DIMENSION, encoding: "jpeg" }, (value, target, encoding) => resizePreviewImage(value, target, encoding, deps.nativeImage)), faviconDataUrl: deps.boundPreviewImage(metadata.faviconDataUrl, { maxDimension: LINK_PREVIEW_ICON_MAX_DIMENSION, encoding: "png" }, (value, target, encoding) => resizePreviewImage(value, target, encoding, deps.nativeImage)) }; },
    async download(source: unknown, suggestedName: unknown): Promise<boolean> {
      const path = normalizeAttachmentSource(source); if (path == null) return await failDownload("invalid-source");
      let probe: AttachmentChunk | null; try { probe = await deps.legs.readAttachmentChunk({ path, offset: 0, length: 0 }); } catch (error) { return await failDownload(errorClassOf(error)); } if (probe == null) return await failDownload("unavailable");
      try {
        const defaultPath = deps.resolveDefaultDownloadPath({ fileName: deps.resolveSuggestedDownloadName({ suggestedName, sourcePath: path }), configuredDir: null, osDownloadsDir: deps.downloadsDir }); const prompt = await deps.showSaveDialog(deps.getMainWindow() ?? deps.createHiddenWindow({ show: false }), { defaultPath }); if (prompt.canceled || prompt.filePath == null || prompt.filePath.length === 0) return false;
        let handle; try { handle = await open(prompt.filePath, "w"); } catch (error) { return await failDownload(errorClassOf(error)); }
        let offset = 0; let failure = "transfer-failed"; try { while (offset < probe.totalSize) { const chunk = await deps.legs.readAttachmentChunk({ path, offset, length: GATEWAY_READ_CHUNK_BYTES }); if (chunk == null) break; const bytes = Buffer.from(chunk.bytesBase64, "base64"); if (bytes.length === 0) break; await handle.write(bytes, 0, bytes.length, offset); offset += bytes.length; } } catch (error) { failure = errorClassOf(error); } finally { await handle.close(); }
        if (offset >= probe.totalSize) return true; try { await rm(prompt.filePath, { force: true }); } catch (error) { if (failure === "transfer-failed") failure = errorClassOf(error); } return await failDownload(failure);
      } catch (error) { return await failDownload(errorClassOf(error)); }
    },
  };
}
