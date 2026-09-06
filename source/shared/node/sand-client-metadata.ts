import { getSandVariant } from "./sand-variant.js";

export const SAND_CLIENT_TYPE = "sand";
export const SAND_CLIENT_FALLBACK_BASE_VERSION = "0.1.0";
export const SAND_CLIENT_VERSION_DEV_SUFFIX = "-dev";
export const SAND_CLIENT_VERSION_LAB_SUFFIX = "-lab";
export const SAND_BOX_NAMESPACE_HEADER = "x-sand-box-namespace";
const STAMPED_VERSION_BASE = /^(\d+\.\d+\.\d+)(?:-.+)?$/;

export type SandBoxNamespace = "dev" | "lab" | "prod";

export function getSandClientBaseVersion(env: NodeJS.ProcessEnv = process.env): string {
  const stamped = env.SAND_CLIENT_APP_VERSION?.trim() ?? "";
  return STAMPED_VERSION_BASE.exec(stamped)?.[1] ?? SAND_CLIENT_FALLBACK_BASE_VERSION;
}

export function getSandBoxNamespace(env: NodeJS.ProcessEnv = process.env): SandBoxNamespace {
  const ownerNamespace = env.SAND_BOX_OWNER_NAMESPACE?.trim();
  if (ownerNamespace === "dev" || ownerNamespace === "lab") return ownerNamespace;
  switch (getSandVariant()) {
    case "sand-dev": return "dev";
    case "sand-lab": return "lab";
    default: return "prod";
  }
}

export function getSandClientVersion(env: NodeJS.ProcessEnv = process.env): string {
  const baseVersion = getSandClientBaseVersion(env);
  switch (getSandBoxNamespace(env)) {
    case "dev": return `${baseVersion}${SAND_CLIENT_VERSION_DEV_SUFFIX}`;
    case "lab": return `${baseVersion}${SAND_CLIENT_VERSION_LAB_SUFFIX}`;
    case "prod": return baseVersion;
  }
}

export function getSandBackendClientHeaders(env: NodeJS.ProcessEnv = process.env): Record<string, string> {
  return {
    "x-cursor-client-type": SAND_CLIENT_TYPE,
    "x-cursor-client-version": getSandClientVersion(env),
    [SAND_BOX_NAMESPACE_HEADER]: getSandBoxNamespace(env)
  };
}
