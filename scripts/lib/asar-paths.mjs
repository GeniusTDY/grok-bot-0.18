import path from "node:path";

import { extractFile, listPackage, statFile } from "@electron/asar";

export function canonicalAsarPath(value) {
  if (typeof value !== "string" || value.length === 0) throw new TypeError("ASAR path must be a non-empty string");
  return value.replace(/\\/g, "/").replace(/^\/+/, "");
}

export function nativeAsarPath(value) {
  return path.normalize(canonicalAsarPath(value));
}

export function extractAsarFile(archivePath, relativePath) {
  return extractFile(archivePath, nativeAsarPath(relativePath));
}

export function listAsarPackage(archivePath) {
  return listPackage(archivePath).map(canonicalAsarPath);
}

export function statAsarFile(archivePath, relativePath) {
  return statFile(archivePath, nativeAsarPath(relativePath));
}
