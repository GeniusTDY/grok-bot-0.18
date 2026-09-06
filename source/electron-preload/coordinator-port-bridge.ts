import {
  parseCoordinatorRendererPortDeliveryPayload,
  type CoordinatorRendererPortRequestPayload,
} from "../shared/rpc/coordinator-port.js";

export type {
  CoordinatorAgentThreadRequest,
  CoordinatorAgentThreadResponse,
  CoordinatorTranscriptEntry,
  CoordinatorTranscriptWindowRequest,
  CoordinatorTranscriptWindowResponse,
} from "../shared/rpc/coordinator.js";

/** Typed renderer-facing calls carried by the transferred coordinator port. */
export interface CoordinatorTranscriptPortContract {
  getAgentTranscriptWindow(args: import("../shared/rpc/coordinator.js").CoordinatorTranscriptWindowRequest): Promise<import("../shared/rpc/coordinator.js").CoordinatorTranscriptWindowResponse>;
  getAgentThread(args: import("../shared/rpc/coordinator.js").CoordinatorAgentThreadRequest): Promise<import("../shared/rpc/coordinator.js").CoordinatorAgentThreadResponse>;
}

export interface CoordinatorPortConsumer<TPort> {
  onPort(port: TPort): void;
}

export interface CoordinatorPortClaim {
  request(): void;
  release(): void;
}

export function createCoordinatorPortBroker<TPort extends { close(): void }>(options: {
  readonly invokeRequest: (payload: CoordinatorRendererPortRequestPayload) => void;
}): {
  readonly bridge: { claim(consumer: CoordinatorPortConsumer<TPort>): CoordinatorPortClaim | null };
  readonly deliver: (port: TPort, payload: unknown) => void;
} {
  let owner: CoordinatorPortConsumer<TPort> | null = null;
  let deliveredGeneration = 0;
  return {
    bridge: {
      claim(consumer) {
        if (owner != null) return null;
        owner = consumer;
        return {
          request: () => {
            if (owner !== consumer) return;
            options.invokeRequest({ knownGeneration: deliveredGeneration });
          },
          release: () => {
            if (owner !== consumer) return;
            owner = null;
          },
        };
      },
    },
    deliver(port, payload) {
      const delivery = parseCoordinatorRendererPortDeliveryPayload(payload);
      if (delivery == null || delivery.generation <= deliveredGeneration) {
        port.close();
        return;
      }
      deliveredGeneration = delivery.generation;
      if (owner == null) {
        port.close();
        return;
      }
      owner.onPort(port);
    },
  };
}

export interface TransferredMessageEvent<T> { readonly data: T }
export interface TransferredCloseEvent {}
export type TransferredPortEventListener<T> = (event: TransferredMessageEvent<T> | TransferredCloseEvent) => void;

export function wrapTransferredCoordinatorPort<TMessage>(port: {
  postMessage(message: TMessage): void;
  close(): void;
  start(): void;
  addEventListener(type: "message", listener: (event: { readonly data: TMessage }) => void): void;
  addEventListener(type: "close", listener: () => void): void;
}): {
  postMessage(message: TMessage): void;
  close(): void;
  start(): void;
  addEventListener(type: "message" | "close", listener: TransferredPortEventListener<TMessage>): void;
} {
  return {
    postMessage: (message) => port.postMessage(message),
    close: () => port.close(),
    start: () => port.start(),
    addEventListener: (type, listener) => {
      if (type === "message") {
        port.addEventListener("message", (event) => listener({ data: event.data }));
        return;
      }
      port.addEventListener("close", () => listener({}));
    },
  };
}
