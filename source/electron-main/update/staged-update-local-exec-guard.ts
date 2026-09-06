import { withDesktopQuitDeadline } from "../quit-deadline.js";

export interface StagedUpdateLocalExecShutdownOptions {
  readonly willRunStagedInstallerOnQuit: boolean;
  readonly killLocalExecDaemon?: () => Promise<unknown>;
  readonly reportFailure: (area: string, leg: string, error: unknown) => void;
  readonly deadline?: (step: string, pending: Promise<unknown>) => Promise<unknown>;
}

function reportStopFailure(
  reportFailure: StagedUpdateLocalExecShutdownOptions["reportFailure"],
  error: unknown,
): void {
  try { reportFailure("update", "local-exec-stop", error); }
  catch {}
}

export async function settleStagedUpdateLocalExecShutdown(
  options: StagedUpdateLocalExecShutdownOptions,
): Promise<boolean> {
  if (!options.willRunStagedInstallerOnQuit) return true;
  if (options.killLocalExecDaemon == null) {
    reportStopFailure(
      options.reportFailure,
      new Error("Staged update was not applied because local-exec shutdown is unavailable."),
    );
    return false;
  }
  const killLocalExecDaemon = options.killLocalExecDaemon;
  try {
    await (options.deadline ?? withDesktopQuitDeadline)(
      "local-exec shutdown",
      Promise.resolve().then(killLocalExecDaemon),
    );
    return true;
  } catch (error) {
    reportStopFailure(options.reportFailure, error);
    return false;
  }
}
