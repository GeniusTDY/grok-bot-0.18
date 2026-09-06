import {
  resolveSandDataRootOverride,
  resolveSandUserDataDir,
  SAND_DATA_ROOT_ENV,
  SAND_USER_DATA_DIR_ENV,
} from "../../host/host-paths.js";
import { applyStartupDataRootMigration, resolveExistingSandProductionRootDir, type DataRootSettlement } from "./startup-data-root-migration.js";
import { applyWindowsUserDataMigration, isWindowsUpdatedLaunch } from "./windows-user-data-migration.js";

export const STRANDED_USER_DATA_REASONS = new Set([
  "canonical-marked",
  "canonical-unsafe",
  "conflict-preserved",
  "legacy-unsafe",
  "migration-failed",
]);

export const STRANDED_DATA_ROOT_REASONS = new Set([
  "canonical-conflict",
  "canonical-marked",
  "legacy-unsafe",
  "live-legacy-host",
  "migration-failed",
  "unknown-legacy-writer",
]);

export interface DesktopBootstrapApp {
  readonly isPackaged: boolean;
  setPath(name: "userData" | "sessionData", path: string): void;
  getPath(name: "appData" | "userData"): string;
}

export interface DesktopUserDataBootstrapOptions {
  readonly isLabBuild: boolean;
  readonly app: DesktopBootstrapApp;
  readonly argv?: readonly string[];
  readonly env?: NodeJS.ProcessEnv;
  readonly platform?: NodeJS.Platform;
  readonly cwd?: string;
  reportFailureClass?(surface: "startup", operation: "user-data-settlement", reason: string): void;
}

export function bootstrapDesktopUserData(options: DesktopUserDataBootstrapOptions): string | null {
  const argv = options.argv ?? process.argv;
  const env = options.env ?? process.env;
  const platform = options.platform ?? process.platform;
  const isolatedUserDataDir = resolveSandUserDataDir(argv, env, options.cwd ?? process.cwd());
  if (isolatedUserDataDir != null) {
    env[SAND_USER_DATA_DIR_ENV] = isolatedUserDataDir;
    options.app.setPath("userData", isolatedUserDataDir);
    options.app.setPath("sessionData", isolatedUserDataDir);
    console.log(`[sand] using isolated user-data dir: ${isolatedUserDataDir}`);
    return isolatedUserDataDir;
  }
  const settlement = applyWindowsUserDataMigration({
    platform,
    isPackaged: options.app.isPackaged,
    isLabBuild: options.isLabBuild,
    hasIsolatedUserData: false,
    isUpdatedLaunch: isWindowsUpdatedLaunch(argv),
    appDataDir: options.app.getPath("appData"),
    canonicalUserDataDir: options.app.getPath("userData"),
    setPath: (name, path) => options.app.setPath(name, path),
  });
  if (STRANDED_USER_DATA_REASONS.has(settlement.reason)) {
    options.reportFailureClass?.("startup", "user-data-settlement", settlement.reason);
  }
  return null;
}

export interface DesktopDataRootBootstrapOptions {
  readonly isPrimaryInstance: boolean;
  readonly isLabBuild: boolean;
  readonly hasIsolatedUserData: boolean;
  readonly app: Pick<DesktopBootstrapApp, "isPackaged">;
  readonly env?: NodeJS.ProcessEnv;
  readonly homeDir?: string;
  reportFailureClass?(surface: "startup", operation: "data-root-settlement", reason: string): void;
}

export function bootstrapDesktopDataRoot(options: DesktopDataRootBootstrapOptions): DataRootSettlement | null {
  if (!options.isPrimaryInstance) return null;
  const env = options.env ?? process.env;
  if (!options.app.isPackaged && env.SAND_ATTACH_PROD_BOX === "1"
    && !options.hasIsolatedUserData && resolveSandDataRootOverride(env) == null) {
    env[SAND_DATA_ROOT_ENV] = resolveExistingSandProductionRootDir(options.homeDir);
    return null;
  }
  const settlement = applyStartupDataRootMigration({
    isPackaged: options.app.isPackaged,
    isLabBuild: options.isLabBuild,
    hasIsolatedUserData: options.hasIsolatedUserData,
    env,
    ...(options.homeDir === undefined ? {} : { homeDir: options.homeDir }),
  });
  if (STRANDED_DATA_ROOT_REASONS.has(settlement.reason)) {
    options.reportFailureClass?.("startup", "data-root-settlement", settlement.reason);
  }
  return settlement;
}
