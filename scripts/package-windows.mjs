import { buildReconstructedAsar } from "./clean-build.mjs";
import { outputWindowsPortable } from "./lib/config.mjs";
import { assembleWindowsPortable, verifyWindowsPortable } from "./lib/windows-package.mjs";

if (process.platform !== "win32" || process.arch !== "x64") throw new Error("Windows portable packaging requires Windows x64");
const built = await buildReconstructedAsar();
const packaged = await assembleWindowsPortable({ runtime: built.runtime, builtAsar: built.builtAsar, builtAsarUnpacked: built.builtAsarUnpacked, outputRoot: outputWindowsPortable });
const verified = await verifyWindowsPortable(packaged.outputRoot);
console.log(`Windows portable package: ${verified.outputRoot}`);
console.log(`Verified ${verified.nativeModules} Windows native modules and the clean-source renderer.`);
