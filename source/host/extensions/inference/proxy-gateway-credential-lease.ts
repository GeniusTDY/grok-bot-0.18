import {
  normalizeProxyGatewayTurnConfig,
  type ProxyGatewayTurnConfig,
} from "../../../shared/proxy-gateway.js";

export const PROXY_GATEWAY_CREDENTIAL_LEASE_TTL_MS = 30 * 60 * 1_000;

type InstalledLease = {
  readonly config: ProxyGatewayTurnConfig;
  readonly expiresAtMs: number;
};

let installedLease: InstalledLease | undefined;
let expiryTimer: ReturnType<typeof setTimeout> | undefined;

function clearExpiryTimer(): void {
  if (expiryTimer === undefined) return;
  clearTimeout(expiryTimer);
  expiryTimer = undefined;
}

function clearExpiredLease(nowMs: number): void {
  if (installedLease === undefined || installedLease.expiresAtMs > nowMs) return;
  installedLease = undefined;
  clearExpiryTimer();
}

/**
 * Installs a short-lived, memory-only credential supplied over the authenticated
 * desktop-to-host gateway. The API key is never persisted or exposed through a
 * getter on that gateway.
 */
export function installProxyGatewayCredentialLease(
  rawConfig: unknown,
  nowMs = Date.now(),
): { readonly expiresAtMs: number } {
  const config = Object.freeze({ ...normalizeProxyGatewayTurnConfig(rawConfig) });
  const expiresAtMs = nowMs + PROXY_GATEWAY_CREDENTIAL_LEASE_TTL_MS;
  installedLease = { config, expiresAtMs };
  clearExpiryTimer();
  expiryTimer = setTimeout(() => {
    if (installedLease?.expiresAtMs === expiresAtMs) installedLease = undefined;
    expiryTimer = undefined;
  }, PROXY_GATEWAY_CREDENTIAL_LEASE_TTL_MS);
  expiryTimer.unref?.();
  return { expiresAtMs };
}

export function hasProxyGatewayCredentialLease(nowMs = Date.now()): boolean {
  clearExpiredLease(nowMs);
  return installedLease !== undefined;
}

export function requireProxyGatewayCredentialLease(nowMs = Date.now()): ProxyGatewayTurnConfig {
  clearExpiredLease(nowMs);
  if (installedLease === undefined) {
    throw new Error("Proxy Gateway credential lease is unavailable. Reconnect it in Settings → Router.");
  }
  return installedLease.config;
}

/** Test/process-shutdown helper. It deliberately returns no prior credential. */
export function clearProxyGatewayCredentialLease(): void {
  installedLease = undefined;
  clearExpiryTimer();
}
