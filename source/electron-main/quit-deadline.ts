export const DESKTOP_QUIT_COORDINATOR_TIMEOUT_MS = 10_000;

export class DesktopQuitDeadlineError extends Error {
  constructor(step: string, timeoutMs: number) {
    super(`${step} did not settle within ${timeoutMs} ms during quit.`);
    this.name = "DesktopQuitDeadlineError";
  }
}

/** Bounds coordinator work so Docker fail-closed shutdown always gets a turn. */
export async function withDesktopQuitDeadline<T>(
  step: string,
  pending: Promise<T>,
  timeoutMs = DESKTOP_QUIT_COORDINATOR_TIMEOUT_MS,
): Promise<T> {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    throw new TypeError("Desktop quit deadline must be a positive finite number.");
  }
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      pending,
      new Promise<never>((_resolve, reject) => {
        timeout = setTimeout(
          () => reject(new DesktopQuitDeadlineError(step, timeoutMs)),
          timeoutMs,
        );
        timeout.unref?.();
      }),
    ]);
  } finally {
    if (timeout !== undefined) clearTimeout(timeout);
  }
}

export interface PartialDesktopQuitSettlementOptions {
  readonly stopLocalDocker: () => Promise<void>;
  readonly stopSandboxComputer: () => Promise<void>;
  readonly disposeGraph: () => Promise<void>;
  readonly reportFailure: (area: string, leg: string, error: unknown) => void;
  readonly disposeTimeoutMs?: number;
}

/** Settles the settings-only quit path before the full service graph exists. */
export async function settlePartialDesktopQuit(
  options: PartialDesktopQuitSettlementOptions,
): Promise<void> {
  const reportFailure = (area: string, leg: string, error: unknown): void => {
    // Failure telemetry is best-effort during quit. A broken reporter must not
    // prevent the remaining fail-closed host and service-graph settlement.
    try { options.reportFailure(area, leg, error); } catch {}
  };
  try {
    await options.stopLocalDocker();
  } catch (error) {
    reportFailure("coordinator", "proxy-gateway-quit-revoke", error);
  }
  try {
    await options.stopSandboxComputer();
  } catch (error) {
    reportFailure("coordinator", "sandbox-computer-quit-tunnel", error);
  }
  try {
    await withDesktopQuitDeadline(
      "service graph disposal",
      options.disposeGraph(),
      options.disposeTimeoutMs ?? DESKTOP_QUIT_COORDINATOR_TIMEOUT_MS,
    );
  } catch (error) {
    reportFailure("main", "dispose-deadline", error);
  }
}
