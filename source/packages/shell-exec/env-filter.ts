export const SOCKET_ENV_VARS_TO_SCRUB = ["SSH_AUTH_SOCK", "DBUS_SESSION_BUS_ADDRESS", "XDG_RUNTIME_DIR", "WAYLAND_DISPLAY"] as const;

/**
 * Host/control-plane credentials must never cross into a model-invoked child
 * process. The host itself needs these values, but shell and sandbox children
 * do not.
 */
export const HOST_CONTROL_ENV_VARS_TO_SCRUB = [
  "SAND_GATEWAY_TOKEN",
  "SAND_GATEWAY_TOKEN_FILE",
  "SAND_GATEWAY_TLS_KEY",
  "SAND_HOST_GATEWAY_TOKEN",
  "SAND_HOST_GATEWAY_NETWORK_TOKEN",
  "SAND_BOX_EXEC_DAEMON_AUTH_TOKEN",
  "SAND_INFERENCE_RENEWAL_CREDENTIAL",
  "SAND_DEV_INFERENCE_TOKEN_FILE",
  "SAND_PRODUCT_HTTP_TOKEN",
  "SAND_EGRESS_TUNNEL_NETWORK_TOKEN",
  "SAND_EGRESS_TUNNEL_BEARER",
  "SAND_LOCAL_EXEC_GENERATION_TOKEN",
] as const;

export function scrubHostControlEnvVars(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  const result = { ...env };
  for (const key of HOST_CONTROL_ENV_VARS_TO_SCRUB) delete result[key];
  return result;
}

export function filterElectronEnv(env?: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  const { ELECTRON_RUN_AS_NODE: _discarded, ...filteredEnv } = scrubHostControlEnvVars(env || process.env);
  return filteredEnv;
}
export function scrubSocketEnvVars(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  const result = { ...env };
  for (const key of SOCKET_ENV_VARS_TO_SCRUB) delete result[key];
  return result;
}
