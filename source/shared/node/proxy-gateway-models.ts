import {
  PROXY_GATEWAY_MAX_JSON_BYTES,
  PROXY_GATEWAY_MAX_MODELS,
  proxyGatewayEndpoint,
  normalizeProxyGatewayApiKey,
  normalizeProxyGatewayPublicConfig,
  type ProxyGatewayPublicConfig,
} from "../proxy-gateway.js";

export interface ProxyGatewayModelsProbe {
  readonly outcome: "ok" | "empty";
  readonly models: readonly string[];
  readonly latencyMs: number;
  readonly message: string;
}

async function readBoundedJson(response: Response, limit: number, signal: AbortSignal): Promise<Uint8Array> {
  if (response.body == null) return new Uint8Array();
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      if (signal.aborted) throw new Error("Proxy Gateway model stream aborted.");
      const { done, value } = await new Promise<ReadableStreamReadResult<Uint8Array>>((resolve, reject) => {
        const onAbort = () => reject(new Error("Proxy Gateway model stream aborted."));
        signal.addEventListener("abort", onAbort, { once: true });
        void reader.read().then(resolve, reject).finally(() => signal.removeEventListener("abort", onAbort));
      });
      if (done) break;
      if (value == null) continue;
      total += value.byteLength;
      if (total > limit) { await reader.cancel().catch(() => undefined); throw new Error("Proxy Gateway model response exceeded the size limit."); }
      chunks.push(value);
    }
  } finally { try { await reader.cancel(); } catch {} try { reader.releaseLock(); } catch {} }
  const result = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { result.set(chunk, offset); offset += chunk.byteLength; }
  return result;
}

export async function fetchProxyGatewayModels(
  raw: ProxyGatewayPublicConfig & { readonly apiKey: string },
  options: { readonly fetch?: typeof fetch; readonly timeoutMs?: number; readonly signal?: AbortSignal; readonly now?: () => number } = {},
): Promise<ProxyGatewayModelsProbe> {
  const config = normalizeProxyGatewayPublicConfig(raw);
  const apiKey = normalizeProxyGatewayApiKey(raw.apiKey);
  const controller = new AbortController();
  const now = options.now ?? Date.now;
  const started = now();
  let timedOut = false, callerAborted = false;
  const onAbort = () => { callerAborted = true; controller.abort(); };
  if (options.signal?.aborted) throw new Error("Proxy Gateway model test was cancelled.");
  options.signal?.addEventListener("abort", onAbort, { once: true });
  const timer = setTimeout(() => { timedOut = true; controller.abort(); }, options.timeoutMs ?? 10_000);
  timer.unref?.();
  try {
    const response = await (options.fetch ?? fetch)(proxyGatewayEndpoint(config, "models"), {
      method: "GET",
      headers: { authorization: `Bearer ${apiKey}`, accept: "application/json", "user-agent": "grok-bot-proxy-gateway/1" },
      redirect: "error",
      signal: controller.signal,
    });
    if (response.status === 401 || response.status === 403) { try { await response.body?.cancel(); } catch {} throw new Error("Proxy Gateway rejected the proxy/client API key (HTTP 401/403). Do not use the management key."); }
    if (!response.ok) { try { await response.body?.cancel(); } catch {} throw new Error(`Proxy Gateway model test failed with HTTP ${response.status}.`); }
    const declared = Number(response.headers.get("content-length"));
    if (Number.isFinite(declared) && declared > PROXY_GATEWAY_MAX_JSON_BYTES) { try { await response.body?.cancel(); } catch {} throw new Error("Proxy Gateway model response exceeded the size limit."); }
    const bytes = await readBoundedJson(response, PROXY_GATEWAY_MAX_JSON_BYTES, controller.signal);
    let parsed: unknown;
    try { parsed = JSON.parse(new TextDecoder().decode(bytes)); }
    catch { throw new Error("Proxy Gateway returned invalid model JSON."); }
    const data = typeof parsed === "object" && parsed != null && !Array.isArray(parsed) && Array.isArray((parsed as { data?: unknown }).data) ? (parsed as { data: unknown[] }).data : [];
    const models: string[] = [];
    const seen = new Set<string>();
    for (const item of data) {
      const id = typeof item === "object" && item != null && !Array.isArray(item) && typeof (item as { id?: unknown }).id === "string" ? (item as { id: string }).id.trim() : "";
      if (id.length === 0 || id.length > 256 || /[\u0000-\u001f\u007f]/.test(id) || seen.has(id)) continue;
      seen.add(id); models.push(id);
      if (models.length >= PROXY_GATEWAY_MAX_MODELS) break;
    }
    const latencyMs = Math.max(0, Math.round(now() - started));
    return models.length === 0
      ? { outcome: "empty", models, latencyMs, message: "Connected, but /v1/models returned no usable IDs. Enter the model manually; Proxy Gateway can omit free/no-auth models." }
      : { outcome: "ok", models, latencyMs, message: `Connected and loaded ${models.length} model${models.length === 1 ? "" : "s"}.` };
  } catch (error) {
    if (callerAborted) throw new Error("Proxy Gateway model test was cancelled.");
    if (timedOut) throw new Error("Proxy Gateway model test timed out.");
    if (error instanceof Error && error.message.startsWith("Proxy Gateway ")) throw error;
    throw new Error("Proxy Gateway model test could not connect.");
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener("abort", onAbort);
  }
}
