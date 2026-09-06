import type { CoordinatorRuntime } from "./coordinator-runtime.js";

export interface CoordinatorAuthStatus {
  readonly kind: string;
  readonly authId?: string;
  readonly email?: string;
  readonly [key: string]: unknown;
}

export interface CoordinatorAccountTransition {
  readonly isStartup: boolean;
  readonly previousSlot: string | null | undefined;
}

/** A real account or an explicitly local owner of one coordinator process. */
export interface CoordinatorRuntimeClaim {
  readonly kind: "account" | "local-workspace";
  readonly slot: string;
}

export interface CoordinatorRefusedAccountResult<Status extends CoordinatorAuthStatus> {
  readonly kind: string;
  readonly status: Status;
  readonly error?: unknown;
}

export interface CoordinatorAccountRuntimeDependencies<Status extends CoordinatorAuthStatus> {
  readonly createRuntime: (claim: CoordinatorRuntimeClaim) => CoordinatorRuntime;
  readonly authorizeAccount: (
    slot: string,
    context: CoordinatorAccountTransition,
  ) => Promise<boolean>;
  readonly revokeRefusedAccount: () => Promise<CoordinatorRefusedAccountResult<Status>>;
  readonly prepareAccountTransition: (transition: {
    readonly previousSlot: string;
    readonly nextSlot: string | null;
  }) => Promise<void>;
  readonly resetAccountState: () => void;
  readonly revokeMainDataPort: () => void;
  readonly deliverStatus: (status: Status) => void;
  readonly onProblem: (problem: string) => void;
  readonly onExitTimeout?: (timeoutMs: number) => void;
  readonly exitTimeoutMs?: number;
  readonly delay?: (ms: number, signal: AbortSignal) => Promise<void>;
}

export interface CoordinatorAccountRuntime<Status extends CoordinatorAuthStatus> {
  start(status: Status, claim?: CoordinatorRuntimeClaim | null): Promise<void>;
  observe(status: Status, claim?: CoordinatorRuntimeClaim | null): void;
  whenIdle(): Promise<Status>;
  requestRendererPort(sink: (port: unknown) => void): void;
  restart(): Promise<void>;
  dispose(): Promise<void>;
}

type RuntimeState =
  | { readonly kind: "unstarted" }
  | { readonly kind: "inactive" }
  | {
      readonly kind: "active";
      readonly claim: CoordinatorRuntimeClaim;
      readonly session: CoordinatorRuntime;
      readonly appliedVersion: number;
      readonly rendererRequestRevoked: boolean;
    }
  | {
      readonly kind: "blocked";
      readonly claim: CoordinatorRuntimeClaim | null;
      readonly previousClaim: CoordinatorRuntimeClaim | null | undefined;
    }
  | { readonly kind: "disposed" };

type StartOutcome<Status extends CoordinatorAuthStatus> =
  | { readonly kind: "accepted" }
  | { readonly kind: "disposed" }
  | { readonly kind: "launch-failed" }
  | { readonly kind: "superseded" }
  | { readonly kind: "refused"; readonly status: Status };

const DEFAULT_EXIT_TIMEOUT_MS = 10_000;

export class SandCoordinatorExitTimeoutError extends Error {}

function abortableDelay(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    if (signal.aborted) {
      resolve();
      return;
    }
    const timeout = setTimeout(resolve, ms);
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        resolve();
      },
      { once: true },
    );
  });
}

function cursorAccountClaim(status: CoordinatorAuthStatus): CoordinatorRuntimeClaim | null {
  if (status.kind !== "logged-in") return null;
  const slot = status.authId ?? status.email;
  return slot == null || slot.length === 0
    ? null
    : { kind: "account", slot };
}

function sameClaim(
  left: CoordinatorRuntimeClaim | null | undefined,
  right: CoordinatorRuntimeClaim | null | undefined,
): boolean {
  if (left == null || right == null) return left === right;
  return left.kind === right.kind && left.slot === right.slot;
}

/**
 * Owns the one coordinator process allowed for the currently settled account.
 * Observations are serialized and version-fenced so an older authorization or
 * shutdown cannot launch a coordinator after a newer auth status has arrived.
 */
export function createCoordinatorAccountRuntime<Status extends CoordinatorAuthStatus>(
  dependencies: CoordinatorAccountRuntimeDependencies<Status>,
): CoordinatorAccountRuntime<Status> {
  const exitTimeoutMs = dependencies.exitTimeoutMs ?? DEFAULT_EXIT_TIMEOUT_MS;
  const delay = dependencies.delay ?? abortableDelay;
  const loggedOut = { kind: "logged-out" } as Status;

  let state: RuntimeState = { kind: "unstarted" };
  let requester: ((port: unknown) => void) | null = null;
  let settledStatus = loggedOut;
  let settledClaim: CoordinatorRuntimeClaim | null = null;
  let observedVersion = 0;
  let chain: Promise<void> = Promise.resolve();
  let startWork: Promise<void> = Promise.resolve();
  let releaseStart: () => void = () => {};
  const startArrived = new Promise<void>((resolve) => {
    releaseStart = resolve;
  });

  const isDisposed = (): boolean => state.kind === "disposed";

  const runtimeClaim = (): CoordinatorRuntimeClaim | null | undefined => {
    switch (state.kind) {
      case "unstarted":
      case "disposed":
        return undefined;
      case "inactive":
        return null;
      case "active":
      case "blocked":
        return state.claim;
    }
  };

  const revokeActiveRendererPortRequest = (): void => {
    if (state.kind !== "active" || state.rendererRequestRevoked) return;
    state.session.revokeRendererPortRequest();
    state = { ...state, rendererRequestRevoked: true };
  };

  const detachActive = (): CoordinatorRuntime | undefined => {
    if (state.kind !== "active") return undefined;
    const previous = state.session;
    dependencies.revokeMainDataPort();
    state = { kind: "inactive" };
    return previous;
  };

  const activateSession = (args: {
    readonly claim: CoordinatorRuntimeClaim;
    readonly session: CoordinatorRuntime;
    readonly version: number;
  }): void => {
    state = {
      kind: "active",
      claim: args.claim,
      session: args.session,
      appliedVersion: args.version,
      rendererRequestRevoked: false,
    };
    if (requester !== null) args.session.requestRendererPort(requester);
  };

  const stop = async (
    previous: CoordinatorRuntime | undefined,
    onEventualExit?: () => void,
  ): Promise<boolean> => {
    if (previous === undefined) return true;
    const deadlineController = new AbortController();
    const exit = previous.dispose();
    let timedOut = false;
    try {
      await Promise.race([
        exit,
        delay(exitTimeoutMs, deadlineController.signal).then(() => {
          if (deadlineController.signal.aborted) return;
          timedOut = true;
          throw new SandCoordinatorExitTimeoutError(
            `coordinator exit timed out after ${exitTimeoutMs}ms`,
          );
        }),
      ]);
      return true;
    } catch (error) {
      dependencies.onProblem(
        `coordinator exit could not be confirmed: ${String(error)}`,
      );
      if (timedOut) dependencies.onExitTimeout?.(exitTimeoutMs);
      if (timedOut && onEventualExit !== undefined) {
        void exit.then(onEventualExit, (eventualError) => {
          dependencies.onProblem(
            `coordinator exit remained unconfirmed: ${String(eventualError)}`,
          );
        });
      }
      return false;
    } finally {
      deadlineController.abort();
    }
  };

  const startForClaim = async (
    claim: CoordinatorRuntimeClaim,
    context: CoordinatorAccountTransition,
    version: number,
  ): Promise<StartOutcome<Status>> => {
    let authorized = claim.kind === "local-workspace";
    if (claim.kind === "account") {
      try {
        authorized = await dependencies.authorizeAccount(claim.slot, context);
      } catch (error) {
        dependencies.onProblem(
          `account authorization for coordinator failed: ${String(error)}`,
        );
      }
    }
    if (version !== observedVersion) return { kind: "superseded" };
    if (!authorized) {
      dependencies.onProblem(
        "coordinator kept unavailable because the host is not bound to this account",
      );
      let status = loggedOut;
      try {
        const revocation = await dependencies.revokeRefusedAccount();
        if (revocation.kind === "failed") {
          dependencies.onProblem(
            `refused account credentials could not be removed: ${String(revocation.error)}`,
          );
        }
        status = revocation.status;
      } catch (error) {
        dependencies.onProblem(
          `refused account credentials could not be removed: ${String(error)}`,
        );
      }
      if (version !== observedVersion) return { kind: "superseded" };
      return { kind: "refused", status };
    }
    if (isDisposed()) return { kind: "disposed" };
    let session: CoordinatorRuntime;
    try {
      session = dependencies.createRuntime(claim);
    } catch (error) {
      dependencies.onProblem(`coordinator launch failed: ${String(error)}`);
      return { kind: "launch-failed" };
    }
    activateSession({ claim, session, version });
    return { kind: "accepted" };
  };

  const deliver = (status: Status): void => {
    try {
      dependencies.deliverStatus(status);
    } catch (error) {
      dependencies.onProblem(`auth status delivery failed: ${String(error)}`);
    }
  };

  const settleObservedStatus = (
    status: Status,
    claim: CoordinatorRuntimeClaim | null,
  ): void => {
    settledStatus = status;
    settledClaim = claim;
    deliver(status);
  };

  function enqueueReplacementRecovery(): void {
    chain = chain.then(async () => {
      if (state.kind !== "blocked") return;
      const blocked = state;
      const version = observedVersion;
      const nextClaim = settledClaim;
      if (nextClaim === null || !sameClaim(nextClaim, blocked.claim)) {
        state = { kind: "inactive" };
        return;
      }
      const outcome = await startForClaim(
        nextClaim,
        {
          isStartup: false,
          previousSlot: blocked.previousClaim?.kind === "account"
            ? blocked.previousClaim.slot
            : blocked.previousClaim === undefined ? undefined : null,
        },
        version,
      );
      if (isDisposed() || outcome.kind === "disposed") return;
      if (outcome.kind === "accepted") return;
      state = { kind: "inactive" };
      if (outcome.kind === "refused") settleObservedStatus(outcome.status, null);
    });
  }

  const applyClaim = async (
    nextClaim: CoordinatorRuntimeClaim | null,
    status: Status,
    isStartup: boolean,
    version: number,
    settle: (status: Status, claim: CoordinatorRuntimeClaim | null) => void,
  ): Promise<void> => {
    if (isDisposed()) return;
    const previousClaim = runtimeClaim();
    if (state.kind === "blocked") {
      state = { ...state, claim: nextClaim };
      settle(status, nextClaim);
      return;
    }
    if (sameClaim(nextClaim, previousClaim)) {
      if (state.kind === "active") state = { ...state, appliedVersion: version };
      settle(status, nextClaim);
      return;
    }
    revokeActiveRendererPortRequest();
    if (previousClaim?.kind === "account") {
      try {
        await dependencies.prepareAccountTransition({
          previousSlot: previousClaim.slot,
          nextSlot: nextClaim?.kind === "account" ? nextClaim.slot : null,
        });
      } catch (error) {
        dependencies.onProblem(
          `account transition preparation failed: ${String(error)}`,
        );
      }
    }
    if (isDisposed()) return;
    const stopping = stop(detachActive(), enqueueReplacementRecovery);
    if (previousClaim !== undefined) {
      try {
        dependencies.resetAccountState();
      } catch (error) {
        dependencies.onProblem(`account state reset failed: ${String(error)}`);
      }
    }
    if (nextClaim === null) {
      state = { kind: "inactive" };
      settle(status, null);
      if (!(await stopping) && !isDisposed()) {
        state = { kind: "blocked", claim: null, previousClaim };
      }
      return;
    }
    if (!(await stopping)) {
      if (!isDisposed()) {
        state = { kind: "blocked", claim: nextClaim, previousClaim };
        settle(status, nextClaim);
      }
      return;
    }
    const outcome = await startForClaim(
      nextClaim,
      {
        isStartup,
        previousSlot: previousClaim?.kind === "account"
          ? previousClaim.slot
          : previousClaim === undefined ? undefined : null,
      },
      version,
    );
    if (isDisposed() || outcome.kind === "disposed") return;
    if (outcome.kind === "accepted") {
      settle(status, nextClaim);
      return;
    }
    state = { kind: "inactive" };
    if (outcome.kind === "superseded") return;
    settle(outcome.kind === "refused" ? outcome.status : status, null);
  };

  const waitForIdle = async (): Promise<Status> => {
    await startWork;
    while (true) {
      const pending = chain;
      await pending;
      if (pending === chain) return settledStatus;
    }
  };

  return {
    async start(status, suppliedClaim) {
      if (state.kind !== "unstarted") return;
      const claim = suppliedClaim === undefined
        ? cursorAccountClaim(status)
        : suppliedClaim;
      startWork = (async () => {
        try {
          await applyClaim(claim, status, true, 0, (settled, settledRuntimeClaim) => {
            settledStatus = settled;
            settledClaim = settledRuntimeClaim;
          });
        } finally {
          releaseStart();
        }
      })();
      await startWork;
    },
    observe(status, suppliedClaim) {
      if (isDisposed()) return;
      const version = ++observedVersion;
      const nextClaim = suppliedClaim === undefined
        ? cursorAccountClaim(status)
        : suppliedClaim;
      if (!sameClaim(nextClaim, runtimeClaim())) revokeActiveRendererPortRequest();
      chain = chain.then(async () => {
        await startArrived;
        if (isDisposed()) return;
        await applyClaim(nextClaim, status, false, version, settleObservedStatus);
      });
    },
    whenIdle: waitForIdle,
    requestRendererPort(sink) {
      requester = sink;
      if (state.kind === "active" && state.appliedVersion === observedVersion) {
        state.session.requestRendererPort(sink);
        state = { ...state, rendererRequestRevoked: false };
      }
    },
    restart() {
      return state.kind === "active" && state.appliedVersion === observedVersion
        ? state.session.restart()
        : Promise.resolve();
    },
    dispose() {
      if (isDisposed()) return Promise.resolve();
      releaseStart();
      const stopping = stop(detachActive());
      state = { kind: "disposed" };
      return Promise.all([
        stopping,
        startWork.catch((error) => {
          dependencies.onProblem(
            `coordinator startup failed during disposal: ${String(error)}`,
          );
        }),
        chain.catch((error) => {
          dependencies.onProblem(
            `coordinator transition failed during disposal: ${String(error)}`,
          );
        }),
      ]).then(() => undefined);
    },
  };
}
