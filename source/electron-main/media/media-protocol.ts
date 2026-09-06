import { createReadStream, promises as fs } from "node:fs";
import { Readable } from "node:stream";
import { reanchorSandPath } from "../../host/host-paths.js";
import { audioMimeFromPath, videoMimeFromPath } from "../../shared/media/image-mime.js";

export const SAND_MEDIA_SCHEME = "sand-media";
export const MEDIA_HOST = "attachment";
export const REMOTE_MEDIA_CHUNK_BYTES = 4 * 1024 * 1024;

export interface SandMediaRemoteReader { readChunk(path: string, offset: number, length: number, videoPlayback: boolean): Promise<{ data: Uint8Array; totalSize: number; mime?: string | null } | null> }
interface SandMediaProtocol {
  registerSchemesAsPrivileged(schemes: unknown[]): void;
  handle(scheme: string, handler: (request: Request) => Promise<Response>): void;
}
let remoteReader: SandMediaRemoteReader | null = null;
const remoteMetaCache = new Map<string, { size: number; mime: string }>();
export function setSandMediaRemoteReader(reader: SandMediaRemoteReader | null): void { remoteReader = reader; }

export function buildSandMediaUrl(filePath: string): string { return `${SAND_MEDIA_SCHEME}://${MEDIA_HOST}/${encodeURIComponent(filePath)}`; }
export function parseSandMediaUrl(rawUrl: string): string | null {
  let url: URL; try { url = new URL(rawUrl); } catch { return null; }
  if (url.protocol !== `${SAND_MEDIA_SCHEME}:`) return null;
  const segment = url.pathname.replace(/^\/+/, ""); if (segment.length === 0) return null;
  try { return decodeURIComponent(segment); } catch { return null; }
}
export function parseRangeHeader(header: string | null, size: number): { start: number; end: number } | null {
  if (header == null) return null;
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim()); if (match == null) return null;
  const startRaw = match[1] ?? ""; const endRaw = match[2] ?? ""; if (startRaw.length === 0 && endRaw.length === 0) return null;
  let start: number; let end: number;
  if (startRaw.length === 0) { const suffix = Number.parseInt(endRaw, 10); if (!Number.isFinite(suffix) || suffix <= 0) return null; start = Math.max(0, size - suffix); end = size - 1; }
  else { start = Number.parseInt(startRaw, 10); end = endRaw.length > 0 ? Number.parseInt(endRaw, 10) : size - 1; }
  if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start < 0 || start >= size) return null;
  return { start, end: Math.min(end, size - 1) };
}
const notFound = (): Response => new Response(null, { status: 404 });

async function resolveRemoteMeta(reader: SandMediaRemoteReader, rawPath: string, videoPlayback: boolean) {
  const cached = videoPlayback ? undefined : remoteMetaCache.get(rawPath); if (cached != null) return cached;
  const probe = await reader.readChunk(rawPath, 0, 0, videoPlayback); if (probe?.mime == null || probe.totalSize <= 0) return null;
  const meta = { size: probe.totalSize, mime: probe.mime }; if (!videoPlayback) remoteMetaCache.set(rawPath, meta); return meta;
}
export async function handleRemoteMediaRequest(reader: SandMediaRemoteReader, rawPath: string, request: Request): Promise<Response> {
  const videoPlayback = videoMimeFromPath(rawPath) != null;
  const meta = await resolveRemoteMeta(reader, rawPath, videoPlayback); if (meta == null) return notFound();
  const range = parseRangeHeader(request.headers.get("range"), meta.size); const start = range?.start ?? 0; const requestedEnd = range?.end ?? meta.size - 1;
  const chunk = await reader.readChunk(rawPath, start, Math.min(requestedEnd - start + 1, REMOTE_MEDIA_CHUNK_BYTES), videoPlayback); if (chunk == null) return notFound();
  if (chunk.totalSize <= 0 || start >= chunk.totalSize || chunk.data.length === 0) return new Response(null, { status: 416, headers: { "accept-ranges": "bytes", "content-range": `bytes */${Math.max(0, chunk.totalSize)}` } });
  const end = start + chunk.data.length - 1; const partial = range != null || end < chunk.totalSize - 1 || start > 0;
  const headers = new Headers({ "content-type": chunk.mime ?? meta.mime, "content-length": String(chunk.data.length), "accept-ranges": "bytes", "cache-control": "no-cache" });
  if (partial) headers.set("content-range", `bytes ${start}-${end}/${chunk.totalSize}`);
  return new Response(new Uint8Array(chunk.data), { status: partial ? 206 : 200, headers });
}
export async function serveLocalMedia(rawPath: string, request: Request, reanchor: (path: string) => string = reanchorSandPath): Promise<Response | null> {
  const filePath = reanchor(rawPath); const mime = videoMimeFromPath(filePath) ?? audioMimeFromPath(filePath); if (mime == null) return null;
  let size: number; try { const stat = await fs.stat(filePath); if (!stat.isFile()) return null; size = stat.size; } catch { return null; }
  const range = parseRangeHeader(request.headers.get("range"), size); const start = range?.start ?? 0; const end = range?.end ?? size - 1;
  const headers = new Headers({ "content-type": mime, "content-length": String(end - start + 1), "accept-ranges": "bytes", "cache-control": "no-cache" });
  if (range != null) headers.set("content-range", `bytes ${start}-${end}/${size}`);
  return new Response(Readable.toWeb(createReadStream(filePath, { start, end })) as ReadableStream, { status: range != null ? 206 : 200, headers });
}
export async function handleSandMediaRequest(request: Request): Promise<Response> {
  const rawPath = parseSandMediaUrl(request.url); if (rawPath == null) return new Response(null, { status: 400 });
  const local = await serveLocalMedia(rawPath, request); if (local != null) return local;
  return remoteReader == null ? notFound() : await handleRemoteMediaRequest(remoteReader, rawPath, request);
}
function electronMediaProtocol(): SandMediaProtocol {
  return (require("electron") as { readonly protocol: SandMediaProtocol }).protocol;
}
export function registerSandMediaScheme(protocol: SandMediaProtocol = electronMediaProtocol()): void { protocol.registerSchemesAsPrivileged([{ scheme: SAND_MEDIA_SCHEME, privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }]); }
export function registerSandMediaProtocol(protocol: SandMediaProtocol = electronMediaProtocol()): void { protocol.handle(SAND_MEDIA_SCHEME, handleSandMediaRequest); }
