import { run } from "./process.mjs";

export const AD_HOC_CODESIGN_IDENTITY = "-";
export const NONINTERACTIVE_CODESIGN_STDIO = Object.freeze([
  "ignore",
  "inherit",
  "inherit",
]);

export function adHocCodesignArguments(target) {
  if (typeof target !== "string" || target.length === 0) {
    throw new TypeError("An explicit application bundle path is required for ad-hoc signing.");
  }
  return [
    "--force",
    "--deep",
    "--timestamp=none",
    "--sign",
    AD_HOC_CODESIGN_IDENTITY,
    target,
  ];
}

export async function signAppBundleAdHoc(target, runCommand = run) {
  await runCommand("/usr/bin/codesign", adHocCodesignArguments(target), {
    stdio: NONINTERACTIVE_CODESIGN_STDIO,
  });
}
