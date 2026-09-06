import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  HEALTHY_COORDINATOR_UPTIME_MS,
  classifyCoordinatorExitCode,
} from "./coordinator-telemetry.js";
import {
  launchCoordinator,
  type CoordinatorLaunchHandle,
  type LaunchCoordinatorDependencies,
} from "./coordinator-launcher.js";

export function resolveCoordinatorArtifactPath(
  importMetaUrl = import.meta.url,
): string {
  const here = dirname(fileURLToPath(importMetaUrl));
  return join(here, "..", "node-agent-coordinator", "main.cjs");
}

export const COORDINATOR_PORT_REQUEST_CHANNEL = "sand:coordinator-port-request";
export const COORDINATOR_PORT_CHANNEL = "sand:coordinator-port";
export const COORDINATOR_RESTART_EXIT_GRACE_MS = 10_000;
export const COORDINATOR_RESTART_FORCE_EXIT_GRACE_MS = 2_000;

type GenerationPayload = { readonly generation: number };
type TransportDownPayload = GenerationPayload & {
  readonly reason: string;
  readonly cause?: string | null;
};
type CoordinatorEventConsumer = Record<string, (payload: any) => void> & {
  "transport-connected": (payload: GenerationPayload) => void;
  "transport-down": (payload: TransportDownPayload) => void;
};

export function fenceStaleGenerations<T extends CoordinatorEventConsumer>(
  consumer: T,
): T {
  let highestGeneration = 0;
  const passes = (generation: number): boolean => {
    if (generation < highestGeneration) return false;
    highestGeneration = generation;
    return true;
  };

  return {
    ...consumer,
    "transport-connected": (payload: GenerationPayload) => {
      if (!passes(payload.generation)) return;
      consumer["transport-connected"](payload);
    },
    "transport-down": (payload: TransportDownPayload) => {
      if (!passes(payload.generation)) return;
      consumer["transport-down"](payload);
    },
  } as T;
}

/** Drops every callback emitted by a child after a replacement launch starts. */
export function fenceStaleRuntimeLaunch<T extends Record<string, (payload: any) => void>>(
  consumer: T,
  isCurrent: () => boolean,
): T {
  return Object.fromEntries(
    Object.entries(consumer).map(([name, listener]) => [
      name,
      (payload: unknown) => {
        if (isCurrent()) listener(payload);
      },
    ]),
  ) as T;
}

export interface CoordinatorRelaunchDelay {
  readonly elapsed: Promise<void>;
  dispose(): void;
}

export interface CoordinatorRuntimeDependencies
  extends Omit<LaunchCoordinatorDependencies, "onEvent" | "reportFailure"> {
  readonly onEvent: CoordinatorEventConsumer;
  readonly monotonicNow: () => number;
  readonly onMainDataPort: (port: unknown) => void;
  readonly onLifecycle: (event: CoordinatorLifecycleEvent) => void;
  readonly relaunchBackoff: {
    schedule(attempt: number): CoordinatorRelaunchDelay;
  };
  readonly restartExitGraceMs?: number;
  readonly restartForceExitGraceMs?: number;
  readonly launch?: (
    dependencies: LaunchCoordinatorDependencies,
  ) => CoordinatorLaunchHandle;
}

export type CoordinatorLifecycleEvent =
  | {
      readonly outcome: "exited";
      readonly exitCodeClass: ReturnType<typeof classifyCoordinatorExitCode>;
      readonly uptimeMs: number;
      readonly relaunchSeq: number;
    }
  | {
      readonly outcome: "relaunched";
      readonly delayMs: number;
      readonly relaunchSeq: number;
    };

export interface CoordinatorRuntime {
  requestRendererPort(sink: (port: unknown) => void): void;
  revokeRendererPortRequest(): void;
  restart(): Promise<void>;
  dispose(): Promise<void>;
}

export function createCoordinatorRuntime(
  dependencies: CoordinatorRuntimeDependencies,
): CoordinatorRuntime {
  let disposed = false;
  let current: CoordinatorLaunchHandle;
  const launchedHandles = new Set<CoordinatorLaunchHandle>();
  let disposeCompletion: Promise<void> | undefined;
  let launchedAtMs = 0;
  let relaunchSeq = 0;
  let fastExitAttempt = 0;
  let nextLaunchEpoch = 0;
  let activeLaunchEpoch = 0;
  let pendingRelaunch: CoordinatorRelaunchDelay | undefined;
  const restartExitGraceMs = dependencies.restartExitGraceMs
    ?? COORDINATOR_RESTART_EXIT_GRACE_MS;
  const restartForceExitGraceMs = dependencies.restartForceExitGraceMs
    ?? COORDINATOR_RESTART_FORCE_EXIT_GRACE_MS;
  const retirements = new WeakMap<CoordinatorLaunchHandle, Promise<void>>();
  const finalRetirements = new WeakMap<CoordinatorLaunchHandle, Promise<void>>();

  const waitForExit = async (
    handle: CoordinatorLaunchHandle,
    timeoutMs: number,
  ): Promise<boolean> => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      return await Promise.race([
        handle.processExited.then(() => true, () => true),
        new Promise<false>((resolve) => {
          timeout = setTimeout(() => resolve(false), timeoutMs);
          timeout.unref?.();
        }),
      ]);
    } finally {
      if (timeout !== undefined) clearTimeout(timeout);
    }
  };

  const retireHandle = (handle: CoordinatorLaunchHandle): Promise<void> => {
    const existing = retirements.get(handle);
    if (existing !== undefined) return existing;
    const retirement = (async () => {
      handle.dispose();
      if (await waitForExit(handle, restartExitGraceMs)) return;
      dependencies.onProblem(
        `coordinator did not exit within ${restartExitGraceMs} ms; forcing termination`,
      );
      try { handle.forceDispose(); }
      catch (error) {
        dependencies.onProblem(`coordinator forced termination failed: ${String(error)}`);
      }
      if (await waitForExit(handle, restartForceExitGraceMs)) return;
      // The launch-epoch fence and forceDispose isolate the replacement, so a
      // restart may continue. Keep the unconfirmed handle tracked: final
      // application disposal must reissue termination and observe its real exit.
      dependencies.onProblem(
        `coordinator exit remained unconfirmed after forced termination; continuing with the isolated replacement`,
      );
    })();
    retirements.set(handle, retirement);
    return retirement;
  };

  const forceRetireHandle = (handle: CoordinatorLaunchHandle): Promise<void> => {
    const existing = finalRetirements.get(handle);
    if (existing !== undefined) return existing;
    const retirement = (async () => {
      const force = (): void => {
        try { handle.forceDispose(); }
        catch (error) {
          dependencies.onProblem(`coordinator forced termination failed: ${String(error)}`);
        }
      };
      force();
      if (await waitForExit(handle, restartForceExitGraceMs)) return;
      dependencies.onProblem(
        `coordinator exit remained unconfirmed after ${restartForceExitGraceMs} ms of final disposal; retrying termination and awaiting exit`,
      );
      force();
      await handle.processExited.then(() => undefined, () => undefined);
    })();
    finalRetirements.set(handle, retirement);
    return retirement;
  };

  const cancelPendingRelaunch = (): void => {
    pendingRelaunch?.dispose();
    pendingRelaunch = undefined;
  };

  let portTransferred = false;
  let requester: ((port: unknown) => void) | null = null;
  const serveRequester = (): void => {
    if (requester === null || portTransferred || disposed) return;
    portTransferred = true;
    try {
      requester(current.rendererDataPort);
    } catch (error) {
      dependencies.onProblem(`renderer port transfer failed: ${String(error)}`);
      requester = null;
    }
  };

  const launch = (): void => {
    const previousLaunchEpoch = activeLaunchEpoch;
    const launchEpoch = ++nextLaunchEpoch;
    activeLaunchEpoch = launchEpoch;
    const isCurrentLaunch = (): boolean => launchEpoch === activeLaunchEpoch;
    let handle: CoordinatorLaunchHandle;
    try {
      handle = (dependencies.launch ?? launchCoordinator)({
        fork: dependencies.fork,
        createChannel: dependencies.createChannel,
        executors: dependencies.executors,
        // Generations restart at one with each child. A replacement is launched
        // before the previous child exits, so fence both per-child generations
        // and every callback from the now-stale launch during that overlap.
        onEvent: fenceStaleGenerations(
          fenceStaleRuntimeLaunch(dependencies.onEvent, isCurrentLaunch),
        ),
        onProblem: (problem) => {
          if (isCurrentLaunch()) dependencies.onProblem(problem);
        },
        processConfig: dependencies.processConfig,
        artifactPath: dependencies.artifactPath,
      });
    } catch (error) {
      // A failed replacement never becomes active; keep the previous child's
      // callback fence live so its still-running transport remains observable.
      activeLaunchEpoch = previousLaunchEpoch;
      throw error;
    }
    current = handle;
    launchedHandles.add(handle);
    portTransferred = false;
    launchedAtMs = dependencies.monotonicNow();

    try {
      dependencies.onMainDataPort(handle.mainDataPort);
    } catch (error) {
      dependencies.onProblem(`main data port handoff failed: ${String(error)}`);
    }

    void handle.processExited.then(({ code }) => {
      launchedHandles.delete(handle);
      if (disposed || current !== handle) return;

      const uptimeMs = dependencies.monotonicNow() - launchedAtMs;
      relaunchSeq += 1;
      fastExitAttempt =
        uptimeMs < HEALTHY_COORDINATOR_UPTIME_MS ? fastExitAttempt + 1 : 1;
      dependencies.onLifecycle({
        outcome: "exited",
        exitCodeClass: classifyCoordinatorExitCode(code),
        uptimeMs,
        relaunchSeq,
      });
      dependencies.onProblem(
        `coordinator exited (code ${String(code)}); relaunching`,
      );

      const scheduledAtMs = dependencies.monotonicNow();
      const delay = dependencies.relaunchBackoff.schedule(fastExitAttempt);
      pendingRelaunch = delay;
      void delay.elapsed.then(
        () => {
          if (disposed || pendingRelaunch !== delay) return;
          pendingRelaunch = undefined;
          dependencies.onLifecycle({
            outcome: "relaunched",
            delayMs: dependencies.monotonicNow() - scheduledAtMs,
            relaunchSeq,
          });
          launch();
          serveRequester();
        },
        () => {},
      );
    });
  };

  launch();
  return {
    requestRendererPort(sink) {
      requester = sink;
      if (disposed) return;
      if (pendingRelaunch !== undefined) {
        cancelPendingRelaunch();
        launch();
        serveRequester();
        return;
      }
      if (!portTransferred) {
        serveRequester();
        return;
      }
      const previous = current;
      launch();
      void retireHandle(previous);
      serveRequester();
    },
    revokeRendererPortRequest() {
      requester = null;
    },
    restart() {
      if (disposed) return Promise.resolve();
      cancelPendingRelaunch();
      const previous = current;
      launch();
      serveRequester();
      return retireHandle(previous);
    },
    dispose() {
      if (disposeCompletion !== undefined) return disposeCompletion;
      disposed = true;
      activeLaunchEpoch = ++nextLaunchEpoch;
      cancelPendingRelaunch();
      disposeCompletion = Promise.all(
        [...launchedHandles].map((handle) => forceRetireHandle(handle)),
      ).then(() => undefined);
      return disposeCompletion;
    },
  };
}
