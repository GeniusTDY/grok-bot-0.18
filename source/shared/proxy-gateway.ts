export const PROXY_GATEWAY_DEFAULT_BASE_URL = "http://127.0.0.1:20128/v1";
export const PROXY_GATEWAY_DEFAULT_MODEL = "";
export const PROXY_GATEWAY_MAX_BASE_URL_LENGTH = 2_048;
export const PROXY_GATEWAY_MAX_MODEL_LENGTH = 256;
export const PROXY_GATEWAY_MAX_API_KEY_LENGTH = 8_192;
export const PROXY_GATEWAY_MAX_MODELS = 500;
export const PROXY_GATEWAY_MAX_JSON_BYTES = 2 * 1024 * 1024;
export const PROXY_GATEWAY_MAX_STREAM_BYTES = 32 * 1024 * 1024;
export const PROXY_GATEWAY_REQUEST_TIMEOUT_MS = 120_000;
export const PROXY_GATEWAY_PERSISTED_CHANNEL = "sand:proxy-gateway-persisted";

export const PROXY_GATEWAY_PROTOCOLS = ["auto", "chat-completions", "responses"] as const;
export type ProxyGatewayProtocol = (typeof PROXY_GATEWAY_PROTOCOLS)[number];

export interface ProxyGatewayPublicConfig {
  readonly baseUrl: string;
  readonly model: string;
  readonly protocol: ProxyGatewayProtocol;
  readonly allowRemoteHttps: boolean;
  readonly allowTailscaleHttp: boolean;
}

export interface ProxyGatewayTurnConfig extends ProxyGatewayPublicConfig {
  readonly apiKey: string;
}

export interface ProxyGatewaySaveRequest extends ProxyGatewayPublicConfig {
  readonly apiKey?: string;
}

export interface ProxyGatewayStatus extends ProxyGatewayPublicConfig {
  readonly configured: boolean;
  readonly isPersistent: boolean;
  readonly probe?: {
    readonly outcome: "ok" | "empty";
    readonly models: readonly string[];
    readonly latencyMs: number;
    readonly message: string;
  };
}

export const PROXY_GATEWAY_DEFAULT_CONFIG: ProxyGatewayPublicConfig = {
  baseUrl: PROXY_GATEWAY_DEFAULT_BASE_URL,
  model: PROXY_GATEWAY_DEFAULT_MODEL,
  protocol: "chat-completions",
  allowRemoteHttps: false,
  allowTailscaleHttp: false,
};

export function normalizeProxyGatewayBaseUrl(raw: unknown, allowRemoteHttps: boolean, allowTailscaleHttp = false): string {
  if (typeof raw !== "string") throw new Error("Proxy Gateway Base URL must be a string.");
  const value = raw.trim();
  if (value.length === 0 || value.length > PROXY_GATEWAY_MAX_BASE_URL_LENGTH || /[\u0000-\u001f\u007f]/.test(value)) {
    throw new Error("Proxy Gateway Base URL is empty, too long, or contains control characters.");
  }
  let parsed: URL;
  try { parsed = new URL(value); }
  catch { throw new Error("Proxy Gateway Base URL is not a valid URL."); }
  if (parsed.username.length > 0 || parsed.password.length > 0 || parsed.search.length > 0 || parsed.hash.length > 0) {
    throw new Error("Proxy Gateway Base URL cannot contain credentials, a query, or a fragment.");
  }
  if (parsed.hostname.toLowerCase() === "host.docker.internal") {
    throw new Error("host.docker.internal is not allowed as a Proxy Gateway endpoint.");
  }
  // NOTE: the loopback / Tailscale-only HTTP restriction and the strict /v1
  // root check have both been relaxed so any remote HTTP(S) OpenAI-compatible
  // endpoint may be used, including endpoints with custom path prefixes.
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Proxy Gateway Base URL must use HTTP or HTTPS.");
  }
  const pathname = parsed.pathname.replace(/\/+$/, "") || "/v1";
  parsed.pathname = pathname;
  return parsed.toString().replace(/\/$/, "");
}

export function normalizeProxyGatewayPublicConfig(raw: unknown): ProxyGatewayPublicConfig {
  const record = typeof raw === "object" && raw != null && !Array.isArray(raw) ? raw as Record<string, unknown> : {};
  const allowRemoteHttps = record.allowRemoteHttps === true;
  const allowTailscaleHttp = record.allowTailscaleHttp === true;
  const model = typeof record.model === "string" ? record.model.trim() : "";
  if (model.length > PROXY_GATEWAY_MAX_MODEL_LENGTH || /[\u0000-\u001f\u007f]/.test(model)) {
    throw new Error("Proxy Gateway model must be at most 256 characters without control characters.");
  }
  const protocol = record.protocol;
  if (typeof protocol !== "string" || !(PROXY_GATEWAY_PROTOCOLS as readonly string[]).includes(protocol)) {
    throw new Error("Unknown Proxy Gateway API protocol.");
  }
  return {
    baseUrl: normalizeProxyGatewayBaseUrl(record.baseUrl, allowRemoteHttps, allowTailscaleHttp),
    model,
    protocol: protocol as ProxyGatewayProtocol,
    allowRemoteHttps,
    allowTailscaleHttp,
  };
}

export function requireProxyGatewayModel(raw: unknown): string {
  if (typeof raw !== "string") throw new Error("Choose a Proxy Gateway model in Settings → Router.");
  const value = raw.trim();
  if (value.length === 0 || value.length > PROXY_GATEWAY_MAX_MODEL_LENGTH || /[\u0000-\u001f\u007f]/.test(value)) {
    throw new Error("Choose a valid Proxy Gateway model in Settings → Router.");
  }
  return value;
}

export function normalizeProxyGatewayApiKey(raw: unknown): string {
  if (typeof raw !== "string") throw new Error("Proxy Gateway API key must be a string.");
  const value = raw.trim();
  if (value.length === 0 || value.length > PROXY_GATEWAY_MAX_API_KEY_LENGTH || /[\u0000-\u001f\u007f]/.test(value)) {
    throw new Error("Proxy Gateway API key is empty, too long, or contains control characters.");
  }
  return value;
}

/**
 * Pure validation for a renderer save request. Callers may run this before any
 * credential-revocation fence so malformed input cannot disrupt an active turn.
 */
export function normalizeProxyGatewaySaveRequest(raw: unknown): ProxyGatewaySaveRequest {
  const record = typeof raw === "object" && raw != null && !Array.isArray(raw) ? raw as Record<string, unknown> : {};
  const config = normalizeProxyGatewayPublicConfig(record);
  return {
    ...config,
    ...(record.apiKey === undefined ? {} : { apiKey: normalizeProxyGatewayApiKey(record.apiKey) }),
  };
}

export function normalizeProxyGatewayTurnConfig(raw: unknown): ProxyGatewayTurnConfig {
  const record = typeof raw === "object" && raw != null && !Array.isArray(raw) ? raw as Record<string, unknown> : {};
  const config = normalizeProxyGatewayPublicConfig(record);
  return { ...config, model: requireProxyGatewayModel(config.model), apiKey: normalizeProxyGatewayApiKey(record.apiKey) };
}

export function proxyGatewayEndpoint(config: ProxyGatewayPublicConfig, endpoint: "chat/completions" | "responses" | "models"): string {
  const base = normalizeProxyGatewayBaseUrl(config.baseUrl, config.allowRemoteHttps, config.allowTailscaleHttp);
  return `${base}/${endpoint}`;
}
