import type {
  CoordinatorAuthStatus,
  CoordinatorRuntimeClaim,
} from "./coordinator-account-runtime.js";

export const LOCAL_PROXY_GATEWAY_WORKSPACE_ID = "local:proxy-gateway" as const;

export type LocalWorkspaceStatus =
  | { readonly kind: "disabled" }
  | {
      readonly kind: "ready";
      readonly workspaceId: typeof LOCAL_PROXY_GATEWAY_WORKSPACE_ID;
    };

export interface ProductionLocalWorkspaceControl {
  getStatus(): LocalWorkspaceStatus;
  refresh(): Promise<LocalWorkspaceStatus>;
  onStatusChanged(listener: (status: LocalWorkspaceStatus) => void): () => void;
}

export async function resolveLocalProxyGatewayWorkspaceClaim(args: {
  readonly status: CoordinatorAuthStatus;
  readonly settings: {
    getBoxRuntime(): unknown;
    getInferenceProvider(): unknown;
  };
  readonly proxyGatewayStatus: () => Promise<{
    readonly configured?: unknown;
    readonly model?: unknown;
    readonly protocol?: unknown;
  }>;
}): Promise<CoordinatorRuntimeClaim | null> {
  if (args.status.kind !== "logged-out") return null;
  if (args.settings.getBoxRuntime() !== "local-docker") return null;
  if (args.settings.getInferenceProvider() !== "proxy-gateway") return null;
  const status = await args.proxyGatewayStatus();
  return status.configured === true
    && typeof status.model === "string"
    && status.model.trim().length > 0
    && (status.protocol === "chat-completions" || status.protocol === "auto")
    ? { kind: "local-workspace", slot: LOCAL_PROXY_GATEWAY_WORKSPACE_ID }
    : null;
}
