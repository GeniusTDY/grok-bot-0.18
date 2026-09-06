import type { CoordinatorPortBridge, TransferredCoordinatorPort } from "../recovered/contracts/desktop-bridge";
import {
  validateCoordinatorReply,
  type CoordinatorAgentThreadRequest,
  type CoordinatorAgentThreadResponse,
  type CoordinatorTranscriptWindowRequest,
  type CoordinatorTranscriptWindowResponse
} from "../../../source/shared/rpc/coordinator";

export const COORDINATOR_PROTOCOL_VERSION = 1;
export const COORDINATOR_TRANSPORT_STATE_FAMILY = "coordinator-transport-state";

type EventListener = (payload: unknown) => void;
export type CoordinatorTransportState = "connected" | "down";
type TransportListener = (state: CoordinatorTransportState) => void;

interface PendingCall {
  method: string;
  resolve(value: unknown): void;
  reject(error: unknown): void;
}

export class CoordinatorCallError extends Error {
  constructor(readonly code: string, message: string, readonly transportKind?: string) {
    super(`${code}: ${message}`);
    this.name = "CoordinatorCallError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validateReply(method: string, value: unknown): unknown {
  if (method === "getAgentTranscriptWindow" || method === "getAgentThread") return validateCoordinatorReply(method, value);
  if (["listAgents", "searchAgents", "getTrays", "listAllAutomations"].includes(method)) {
    if (!Array.isArray(value)) throw new Error(`${method} returned a malformed array reply`);
  }
  if (["openAgentTail", "getAgentTranscriptTail"].includes(method)) {
    if (!isRecord(value) || !Array.isArray(value.entries) || (value.nextBeforeSeq != null && typeof value.nextBeforeSeq !== "number")) {
      throw new Error(`${method} returned a malformed transcript page`);
    }
  }
  if (["getForeverBoxStatus", "ensureForeverBox"].includes(method) && value !== null) {
    if (!isRecord(value) || typeof value.agentId !== "string" || typeof value.state !== "string") {
      throw new Error(`${method} returned a malformed box status`);
    }
  }
  return value;
}

export interface ProductionCoordinatorClient {
  readonly ready: Promise<void>;
  call(method: string, args?: unknown): Promise<unknown>;
  getAgentTranscriptWindow(args: CoordinatorTranscriptWindowRequest): Promise<CoordinatorTranscriptWindowResponse>;
  getAgentThread(args: CoordinatorAgentThreadRequest): Promise<CoordinatorAgentThreadResponse>;
  isEgressTunnelAvailable(): Promise<boolean>;
  subscribe(family: string, listener: EventListener): () => void;
  subscribeTransport(listener: TransportListener): () => void;
  getTransportState(): CoordinatorTransportState;
  getPortGeneration(): number;
  waitForTransportConnected(timeoutMs?: number): Promise<void>;
  waitForTransportConnectedAfterPortGeneration(portGeneration: number, timeoutMs?: number): Promise<void>;
  dispose(): void;
}

export function createCoordinatorClient(portBridge: CoordinatorPortBridge): ProductionCoordinatorClient | null {
  const eventListeners = new Map<string, Set<EventListener>>();
  const transportListeners = new Set<TransportListener>();
  const portGenerationListeners = new Set<() => void>();
  const pending = new Map<string, PendingCall>();
  let port: TransferredCoordinatorPort | null = null;
  let nextRequestId = 0;
  let disposed = false;
  let serving = false;
  let transportState: CoordinatorTransportState = "down";
  let portGeneration = 0;
  let resolveReady = () => {};
  let rejectReady = (_reason: unknown) => {};
  const makeReady = () => new Promise<void>((resolve, reject) => {
    resolveReady = resolve;
    rejectReady = reject;
  });
  let currentReady = makeReady();
  currentReady.catch(() => {});
  const waitForCurrentReady = async (): Promise<void> => {
    while (true) {
      if (disposed) throw new Error("Coordinator client is disposed.");
      const candidate = currentReady;
      try {
        await candidate;
      } catch (error) {
        if (disposed) throw error;
        if (candidate !== currentReady) continue;
        throw error;
      }
      if (disposed) throw new Error("Coordinator client is disposed.");
      if (candidate === currentReady && port != null && serving) return;
    }
  };

  const publishTransport = (state: CoordinatorTransportState): void => {
    if (transportState === state) return;
    transportState = state;
    for (const listener of transportListeners) listener(state);
  };

  const rejectCalls = (reason: string) => {
    rejectReady(new Error(reason));
    for (const waiting of pending.values()) waiting.reject(new Error(`${waiting.method} failed: ${reason}`));
    pending.clear();
  };
  let claim: ReturnType<CoordinatorPortBridge["claim"]> = null;
  const disconnect = (expectedPort: TransferredCoordinatorPort, reason: string) => {
    if (disposed || port !== expectedPort) return;
    port = null;
    serving = false;
    rejectCalls(reason);
    publishTransport("down");
    currentReady = makeReady();
    currentReady.catch(() => {});
    claim?.request();
  };

  const handleMessage = (expectedPort: TransferredCoordinatorPort, value: unknown) => {
    if (port !== expectedPort || disposed) return;
    if (!isRecord(value) || typeof value.kind !== "string") {
      expectedPort.postMessage({ kind: "lifecycle", phase: "shutdown", reason: "protocol-error", detail: "coordinator posted a malformed frame" });
      return disconnect(expectedPort, "coordinator posted a malformed frame");
    }
    if (value.kind === "lifecycle" && value.phase === "ready") {
      if (value.protocolVersion !== COORDINATOR_PROTOCOL_VERSION) return disconnect(expectedPort, "coordinator protocol version mismatch");
      serving = true;
      resolveReady();
      return;
    }
    if (value.kind === "lifecycle" && value.phase === "shutdown") return disconnect(expectedPort, "coordinator requested shutdown");
    if (value.kind === "reply" && typeof value.requestId === "string" && isRecord(value.outcome)) {
      const waiting = pending.get(value.requestId);
      if (waiting == null) return;
      pending.delete(value.requestId);
      if (value.outcome.status === "ok") {
        try { waiting.resolve(validateReply(waiting.method, value.outcome.value)); }
        catch (error) { waiting.reject(error); }
      } else if (value.outcome.status === "failed" && isRecord(value.outcome.failure)) {
        waiting.reject(new CoordinatorCallError(
          typeof value.outcome.failure.code === "string" ? value.outcome.failure.code : "failed",
          typeof value.outcome.failure.message === "string" ? value.outcome.failure.message : "Coordinator request failed",
          typeof value.outcome.failure.transportKind === "string" ? value.outcome.failure.transportKind : undefined
        ));
      }
      return;
    }
    if (value.kind === "event" && typeof value.family === "string") {
      if (value.family === COORDINATOR_TRANSPORT_STATE_FAMILY && isRecord(value.payload) && (value.payload.state === "connected" || value.payload.state === "down")) {
        publishTransport(value.payload.state);
      }
      for (const listener of eventListeners.get(value.family) ?? []) listener(value.payload);
    }
  };

  claim = portBridge.claim({
    onPort(nextPort) {
      if (disposed) return nextPort.close();
      const replacesLivePort = port != null;
      if (replacesLivePort) rejectCalls("coordinator session replaced");
      const previousPort = port;
      port = nextPort;
      previousPort?.close();
      serving = false;
      portGeneration += 1;
      publishTransport("down");
      for (const listener of portGenerationListeners) listener();
      if (replacesLivePort) {
        currentReady = makeReady();
        currentReady.catch(() => {});
      }
      nextPort.addEventListener("message", (event) => handleMessage(nextPort, event.data));
      nextPort.addEventListener("close", () => disconnect(nextPort, "coordinator port closed"));
      nextPort.start();
      nextPort.postMessage({ kind: "lifecycle", phase: "hello", protocolVersion: COORDINATOR_PROTOCOL_VERSION });
    }
  });
  if (claim == null) return null;
  claim.request();

  const call = async (method: string, args: unknown = {}) => {
    await currentReady;
    if (disposed || port == null || !serving) throw new Error(`coordinator is unavailable for ${method}`);
    const requestId = `r-${++nextRequestId}`;
    const response = new Promise<unknown>((resolve, reject) => pending.set(requestId, { method, resolve, reject }));
    port.postMessage({ kind: "request", requestId, method, args });
    return await response;
  };

  return {
    get ready() { return waitForCurrentReady(); },
    call,
    getAgentTranscriptWindow: async (args) => await call("getAgentTranscriptWindow", args) as CoordinatorTranscriptWindowResponse,
    getAgentThread: async (args) => await call("getAgentThread", args) as CoordinatorAgentThreadResponse,
    isEgressTunnelAvailable: async () => await call("isEgressTunnelAvailable") === true,
    subscribe(family, listener) {
      const listeners = eventListeners.get(family) ?? new Set<EventListener>();
      listeners.add(listener);
      eventListeners.set(family, listeners);
      return () => listeners.delete(listener);
    },
    subscribeTransport(listener) {
      transportListeners.add(listener);
      listener(transportState);
      return () => transportListeners.delete(listener);
    },
    getTransportState: () => transportState,
    getPortGeneration: () => portGeneration,
    waitForTransportConnected(timeoutMs = 20_000) {
      if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return Promise.reject(new Error("Coordinator connection timeout must be positive."));
      if (disposed) return Promise.reject(new Error("Coordinator client is disposed."));
      if (transportState === "connected") return Promise.resolve();
      return new Promise<void>((resolve, reject) => {
        let settled = false;
        const finish = (error?: Error) => {
          if (settled) return;
          settled = true;
          globalThis.clearTimeout(timeout);
          transportListeners.delete(onTransport);
          if (error == null) resolve();
          else reject(error);
        };
        const onTransport: TransportListener = (state) => {
          if (state === "connected") finish();
        };
        const timeout = globalThis.setTimeout(() => finish(new Error("Timed out waiting for the Local Proxy Gateway coordinator to connect.")), timeoutMs);
        transportListeners.add(onTransport);
        if (transportState === "connected") finish();
      });
    },
    waitForTransportConnectedAfterPortGeneration(baselineGeneration, timeoutMs = 20_000) {
      if (!Number.isSafeInteger(baselineGeneration) || baselineGeneration < 0) {
        return Promise.reject(new Error("Coordinator port generation must be a non-negative safe integer."));
      }
      if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
        return Promise.reject(new Error("Coordinator connection timeout must be positive."));
      }
      if (disposed) return Promise.reject(new Error("Coordinator client is disposed."));
      return new Promise<void>((resolve, reject) => {
        let settled = false;
        const finish = (error?: Error) => {
          if (settled) return;
          settled = true;
          globalThis.clearTimeout(timeout);
          transportListeners.delete(onTransport);
          portGenerationListeners.delete(check);
          if (error == null) resolve();
          else reject(error);
        };
        const check = () => {
          if (disposed) {
            finish(new Error("Coordinator client is disposed."));
            return;
          }
          if (portGeneration > baselineGeneration && transportState === "connected") finish();
        };
        const onTransport: TransportListener = () => check();
        const timeout = globalThis.setTimeout(
          () => finish(new Error("Timed out waiting for the replacement Local Proxy Gateway coordinator to connect.")),
          timeoutMs
        );
        transportListeners.add(onTransport);
        portGenerationListeners.add(check);
        check();
      });
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      for (const listener of portGenerationListeners) listener();
      const activePort = port;
      try {
        activePort?.postMessage({ kind: "lifecycle", phase: "shutdown", reason: "requested", detail: null });
      } catch {
        // A closed port must not prevent release or reject pending readiness.
      }
      try {
        claim.release();
      } finally {
        rejectCalls("coordinator source disposed");
        try { activePort?.close(); }
        catch { /* The source is already disposed and detached. */ }
        port = null;
        serving = false;
      }
    }
  };
}
