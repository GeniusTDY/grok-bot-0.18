import path from "node:path";
import { outputWindowsPortable } from "./lib/config.mjs";
import { verifyWindowsPortable } from "./lib/windows-package.mjs";

const index = process.argv.indexOf("--app");
const root = index === -1 ? outputWindowsPortable : path.resolve(process.argv[index + 1] ?? "");
if (index !== -1 && (index !== process.argv.length - 2 || !process.argv[index + 1])) throw new Error("Usage: node scripts/verify-windows.mjs [--app portable-directory]");
const result = await verifyWindowsPortable(root);
console.log(`PASS Windows portable verification: ${result.outputRoot}`);
