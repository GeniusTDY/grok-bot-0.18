const windowsLtoOverrides = Object.freeze({
  npm_config_enable_lto: "false",
  npm_config_enable_thin_lto: "false",
  npm_package_config_node_gyp_enable_lto: "false",
  npm_package_config_node_gyp_enable_thin_lto: "false",
});
const windowsLtoKeys = new Set(Object.keys(windowsLtoOverrides));

export function withWindowsMsvcNodeGypSettings(environment, platform = process.platform) {
  const result = { ...environment };
  if (platform === "win32") {
    for (const key of Object.keys(result)) {
      if (windowsLtoKeys.has(key.toLowerCase())) delete result[key];
    }
    Object.assign(result, windowsLtoOverrides);
  }
  return result;
}
