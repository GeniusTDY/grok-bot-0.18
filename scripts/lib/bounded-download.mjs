import { createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

/** Download one immutable artifact without ever retaining more than its pinned size. */
export async function downloadExactFile({ url, destination, expectedBytes, fetchImpl = fetch }) {
  if (!Number.isSafeInteger(expectedBytes) || expectedBytes < 1) throw new TypeError("expectedBytes must be a positive safe integer");
  await rm(destination, { force: true });
  const response = await fetchImpl(url, { redirect: "follow" });
  if (!response.ok || response.body == null) {
    try { await response.body?.cancel(); } catch {}
    throw new Error(`Artifact download failed: HTTP ${response.status}`);
  }
  const declared = response.headers.get("content-length");
  if (declared != null && (!/^\d+$/.test(declared) || Number(declared) !== expectedBytes)) {
    await response.body.cancel("declared artifact size differs from immutable pin");
    throw new Error(`Artifact content-length differs from the ${expectedBytes}-byte pin: ${declared}`);
  }
  let received = 0;
  const limiter = new Transform({
    transform(chunk, _encoding, callback) {
      received += chunk.byteLength;
      callback(received > expectedBytes ? new Error(`Artifact exceeded the ${expectedBytes}-byte pin while streaming`) : null, chunk);
    },
  });
  try {
    await pipeline(Readable.fromWeb(response.body), limiter, createWriteStream(destination, { mode: 0o600, flags: "wx" }));
    if (received !== expectedBytes) throw new Error(`Artifact download was truncated: expected ${expectedBytes}, received ${received}`);
  } catch (error) {
    await rm(destination, { force: true });
    try { await response.body.cancel(error); } catch { /* stream may already be closed */ }
    throw error;
  }
  return { path: destination, bytes: received };
}
