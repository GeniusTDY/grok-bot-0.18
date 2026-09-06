import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));

export const DEFAULT_LOCAL_DOCKER_IMAGE_SOURCE = path.resolve(
  scriptDirectory,
  "../source/electron-main/box/local-docker-host-connector.ts",
);
export const EXPECTED_REGISTRY = "public.ecr.aws";
export const EXPECTED_REPOSITORY = "k0i0n2g5/cursorenvironments/universal";
export const EXPECTED_BLOB_REDIRECT_HOST = "d5l0dvt14r5h8.cloudfront.net";
export const EXPECTED_PLATFORM = Object.freeze({ os: "linux", architecture: "amd64" });
export const EXPECTED_ENTRYPOINT = Object.freeze(["/usr/local/bin/start-sand-box"]);

const TOKEN_URL = new URL("https://public.ecr.aws/token/");
TOKEN_URL.searchParams.set("service", EXPECTED_REGISTRY);
TOKEN_URL.searchParams.set("scope", "aws");

const MANIFEST_MEDIA_TYPES = new Set([
  "application/vnd.docker.distribution.manifest.v2+json",
  "application/vnd.oci.image.manifest.v1+json",
]);
const CONFIG_MEDIA_TYPES = new Set([
  "application/vnd.docker.container.image.v1+json",
  "application/vnd.oci.image.config.v1+json",
]);
const SHA256_PATTERN = /^sha256:[a-f0-9]{64}$/;
const MAX_TOKEN_BYTES = 64 * 1024;
const MAX_MANIFEST_BYTES = 2 * 1024 * 1024;
const MAX_CONFIG_BYTES = 8 * 1024 * 1024;
const DEFAULT_REQUEST_TIMEOUT_MS = 30_000;

class SafeVerificationError extends Error {
  constructor(message) {
    super(message);
    this.name = "SafeVerificationError";
  }
}

function sha256Digest(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function mediaType(headers) {
  return String(headers?.get?.("content-type") ?? "")
    .split(";", 1)[0]
    .trim()
    .toLowerCase();
}

function assertResponseDigest(headers, expected, label) {
  const header = String(headers?.get?.("docker-content-digest") ?? "").trim().toLowerCase();
  if (header && header !== expected) {
    throw new SafeVerificationError(`${label} Docker-Content-Digest does not match the pinned descriptor.`);
  }
}

async function readBoundedBody(response, maximumBytes, label) {
  const advertised = Number(response.headers?.get?.("content-length"));
  if (Number.isFinite(advertised) && advertised > maximumBytes) {
    throw new SafeVerificationError(`${label} exceeds the ${maximumBytes}-byte verification limit.`);
  }

  if (response.body?.getReader == null) {
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length > maximumBytes) {
      throw new SafeVerificationError(`${label} exceeds the ${maximumBytes}-byte verification limit.`);
    }
    return bytes;
  }

  const reader = response.body.getReader();
  const chunks = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = Buffer.from(value);
      length += chunk.length;
      if (length > maximumBytes) {
        await reader.cancel().catch(() => {});
        throw new SafeVerificationError(`${label} exceeds the ${maximumBytes}-byte verification limit.`);
      }
      chunks.push(chunk);
    }
  } finally {
    reader.releaseLock?.();
  }
  return Buffer.concat(chunks, length);
}

async function fetchBoundedBytes(
  fetchImpl,
  url,
  init,
  { label, maximumBytes, timeoutMs, allowedStatuses = [200], redirectMode = "error" },
) {
  const controller = new AbortController();
  let timedOut = false;
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
      reject(new SafeVerificationError(`${label} timed out after ${timeoutMs} ms.`));
    }, timeoutMs);
  });

  const request = (async () => {
    const response = await fetchImpl(url, {
      ...init,
      cache: "no-store",
      redirect: redirectMode,
      signal: controller.signal,
    });
    if (response == null || typeof response.ok !== "boolean") {
      throw new SafeVerificationError(`${label} did not return an HTTP response.`);
    }
    if (!allowedStatuses.includes(response.status)) {
      throw new SafeVerificationError(`${label} returned HTTP ${response.status}.`);
    }
    return {
      response,
      bytes: response.status === 200
        ? await readBoundedBody(response, maximumBytes, label)
        : Buffer.alloc(0),
    };
  })();

  try {
    return await Promise.race([request, timeout]);
  } catch (error) {
    if (error instanceof SafeVerificationError) throw error;
    if (timedOut) throw new SafeVerificationError(`${label} timed out after ${timeoutMs} ms.`);
    // Do not relay fetch implementation errors: some clients include request headers.
    throw new SafeVerificationError(`${label} failed before provenance could be verified.`);
  } finally {
    clearTimeout(timer);
  }
}

function validatedBlobRedirect(location) {
  const approvedPrefix = `https://${EXPECTED_BLOB_REDIRECT_HOST}/`;
  if (typeof location !== "string") {
    throw new SafeVerificationError("Pinned image config redirect is not an absolute URL.");
  }
  let redirect;
  try {
    redirect = new URL(location);
  } catch {
    throw new SafeVerificationError("Pinned image config redirect is not an absolute URL.");
  }
  if (!location.startsWith(approvedPrefix)
    || redirect.protocol !== "https:"
    || redirect.hostname !== EXPECTED_BLOB_REDIRECT_HOST
    || redirect.port !== ""
    || redirect.username !== ""
    || redirect.password !== ""
    || redirect.hash !== "") {
    throw new SafeVerificationError("Pinned image config redirect is outside the approved HTTPS CloudFront host.");
  }
  return redirect.href;
}

function parseJson(bytes, label) {
  try {
    const value = JSON.parse(bytes.toString("utf8"));
    if (value == null || typeof value !== "object" || Array.isArray(value)) throw new Error("not an object");
    return value;
  } catch {
    throw new SafeVerificationError(`${label} is not a JSON object.`);
  }
}

export function parsePinnedImageReference(reference) {
  const match = /^public\.ecr\.aws\/(k0i0n2g5\/cursorenvironments\/universal)@(sha256:[a-f0-9]{64})$/.exec(reference);
  if (match == null) {
    throw new SafeVerificationError(
      `LOCAL_DOCKER_BOX_IMAGE must pin ${EXPECTED_REGISTRY}/${EXPECTED_REPOSITORY} by a lowercase sha256 digest.`,
    );
  }
  return {
    reference,
    registry: EXPECTED_REGISTRY,
    repository: match[1],
    manifestDigest: match[2],
  };
}

export async function readPinnedImageReference(sourcePath = DEFAULT_LOCAL_DOCKER_IMAGE_SOURCE) {
  const source = await readFile(sourcePath, "utf8");
  const matches = [...source.matchAll(
    /^\s*export const LOCAL_DOCKER_BOX_IMAGE\s*=\s*["']([^"']+)["'];?\s*$/gm,
  )];
  if (matches.length !== 1) {
    throw new SafeVerificationError("Expected exactly one exported LOCAL_DOCKER_BOX_IMAGE string literal.");
  }
  return parsePinnedImageReference(matches[0][1]);
}

export async function verifyPinnedLocalDockerImage({
  fetchImpl = globalThis.fetch,
  sourcePath = DEFAULT_LOCAL_DOCKER_IMAGE_SOURCE,
  timeoutMs = DEFAULT_REQUEST_TIMEOUT_MS,
} = {}) {
  if (typeof fetchImpl !== "function") throw new SafeVerificationError("A Fetch-compatible client is required.");
  if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 60_000) {
    throw new SafeVerificationError("timeoutMs must be an integer from 1 through 60000.");
  }

  const pinned = await readPinnedImageReference(sourcePath);
  const tokenResult = await fetchBoundedBytes(fetchImpl, TOKEN_URL.href, {
    headers: { Accept: "application/json" },
  }, { label: "Public ECR token request", maximumBytes: MAX_TOKEN_BYTES, timeoutMs });
  const tokenDocument = parseJson(tokenResult.bytes, "Public ECR token response");
  let token = tokenDocument.token;
  if (typeof token !== "string" || token.length === 0 || /[\u0000-\u0020\u007f]/.test(token)) {
    throw new SafeVerificationError("Public ECR token response does not contain a usable bearer token.");
  }

  try {
    const base = `https://${pinned.registry}/v2/${pinned.repository}`;
    const manifestUrl = `${base}/manifests/${pinned.manifestDigest}`;
    const manifestResult = await fetchBoundedBytes(fetchImpl, manifestUrl, {
      headers: {
        Accept: [...MANIFEST_MEDIA_TYPES].join(", "),
        Authorization: `Bearer ${token}`,
      },
    }, { label: "Pinned image manifest", maximumBytes: MAX_MANIFEST_BYTES, timeoutMs });
    const responseManifestMediaType = mediaType(manifestResult.response.headers);
    if (!MANIFEST_MEDIA_TYPES.has(responseManifestMediaType)) {
      throw new SafeVerificationError("Pinned image manifest returned an unsupported media type.");
    }
    assertResponseDigest(manifestResult.response.headers, pinned.manifestDigest, "Pinned image manifest");
    const actualManifestDigest = sha256Digest(manifestResult.bytes);
    if (actualManifestDigest !== pinned.manifestDigest) {
      throw new SafeVerificationError("Pinned image manifest bytes do not match LOCAL_DOCKER_BOX_IMAGE.");
    }

    const manifest = parseJson(manifestResult.bytes, "Pinned image manifest");
    if (manifest.schemaVersion !== 2 || !MANIFEST_MEDIA_TYPES.has(manifest.mediaType)) {
      throw new SafeVerificationError("Pinned image is not a supported Docker/OCI schema-2 image manifest.");
    }
    const descriptor = manifest.config;
    if (descriptor == null || typeof descriptor !== "object" || Array.isArray(descriptor)
      || !CONFIG_MEDIA_TYPES.has(descriptor.mediaType)
      || !SHA256_PATTERN.test(descriptor.digest)
      || !Number.isSafeInteger(descriptor.size)
      || descriptor.size < 1) {
      throw new SafeVerificationError("Pinned image manifest has an invalid config descriptor.");
    }

    const configUrl = `${base}/blobs/${descriptor.digest}`;
    const initialConfigResult = await fetchBoundedBytes(fetchImpl, configUrl, {
      headers: { Authorization: `Bearer ${token}` },
    }, {
      label: "Pinned image config blob",
      maximumBytes: MAX_CONFIG_BYTES,
      timeoutMs,
      allowedStatuses: [200, 301, 302, 303, 307, 308],
      redirectMode: "manual",
    });
    assertResponseDigest(initialConfigResult.response.headers, descriptor.digest, "Pinned image config blob");
    let configResult = initialConfigResult;
    if (initialConfigResult.response.status !== 200) {
      const redirectUrl = validatedBlobRedirect(initialConfigResult.response.headers.get("location"));
      configResult = await fetchBoundedBytes(fetchImpl, redirectUrl, {
        credentials: "omit",
        headers: { Accept: "application/octet-stream" },
      }, { label: "Pinned image config redirect", maximumBytes: MAX_CONFIG_BYTES, timeoutMs });
    }
    assertResponseDigest(configResult.response.headers, descriptor.digest, "Pinned image config blob");
    if (configResult.bytes.length !== descriptor.size) {
      throw new SafeVerificationError("Pinned image config blob size does not match its manifest descriptor.");
    }
    const actualConfigDigest = sha256Digest(configResult.bytes);
    if (actualConfigDigest !== descriptor.digest) {
      throw new SafeVerificationError("Pinned image config blob bytes do not match its manifest descriptor.");
    }

    const config = parseJson(configResult.bytes, "Pinned image config blob");
    if (config.os !== EXPECTED_PLATFORM.os || config.architecture !== EXPECTED_PLATFORM.architecture) {
      throw new SafeVerificationError(
        `Pinned image platform must be ${EXPECTED_PLATFORM.os}/${EXPECTED_PLATFORM.architecture}.`,
      );
    }
    const entrypoint = config.config?.Entrypoint;
    if (!Array.isArray(entrypoint)
      || entrypoint.length !== EXPECTED_ENTRYPOINT.length
      || entrypoint.some((part, index) => part !== EXPECTED_ENTRYPOINT[index])) {
      throw new SafeVerificationError(`Pinned image entrypoint must be ${EXPECTED_ENTRYPOINT[0]}.`);
    }

    return Object.freeze({
      image: pinned.reference,
      manifestDigest: pinned.manifestDigest,
      configDigest: descriptor.digest,
      platform: `${config.os}/${config.architecture}`,
      entrypoint: [...entrypoint],
      created: typeof config.created === "string" ? config.created : null,
    });
  } finally {
    token = undefined;
  }
}

async function main() {
  const result = await verifyPinnedLocalDockerImage();
  process.stdout.write([
    `Verified ${result.image}`,
    `manifest ${result.manifestDigest}`,
    `config ${result.configDigest}`,
    `platform ${result.platform}`,
    `entrypoint ${result.entrypoint.join(" ")}`,
    result.created == null ? null : `created ${result.created}`,
  ].filter(Boolean).join("\n") + "\n");
}

const invokedPath = process.argv[1] == null ? null : pathToFileURL(path.resolve(process.argv[1])).href;
if (invokedPath === import.meta.url) {
  main().catch((error) => {
    const message = error instanceof SafeVerificationError
      ? error.message
      : "Pinned Docker image provenance verification failed.";
    process.stderr.write(`${message}\n`);
    process.exitCode = 1;
  });
}
