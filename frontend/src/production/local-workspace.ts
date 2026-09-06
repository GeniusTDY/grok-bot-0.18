import type {
  CursorAuthStatus,
  DesktopBridge,
  DesktopLocalWorkspaceStatus
} from "../recovered/contracts/desktop-bridge";
import { appLanguage } from "../locale/locale";

export const LOCAL_PROXY_GATEWAY_WORKSPACE_ID = "local:proxy-gateway";
export const LOCAL_WORKSPACE_CHANGED_EVENT = "sand-local-workspace-changed";

export type LocalWorkspaceCheckId =
  | "provider"
  | "runtime"
  | "docker-ready"
  | "credential"
  | "model"
  | "protocol"
  | "workspace-claim"
  | "coordinator-connected";
export type LocalWorkspaceBlockerCode =
  | "provider-not-proxy-gateway"
  | "provider-status-unavailable"
  | "local-docker-not-selected"
  | "docker-status-unavailable"
  | "local-docker-not-ready"
  | "credential-missing"
  | "credential-status-unavailable"
  | "model-missing"
  | "protocol-unsupported"
  | "local-workspace-claim-not-ready"
  | "coordinator-not-connected";

export interface LocalWorkspaceCheck {
  readonly id: LocalWorkspaceCheckId;
  readonly label: string;
  readonly ready: boolean;
}

export interface LocalWorkspaceBlocker {
  readonly code: LocalWorkspaceBlockerCode;
  readonly checkId: LocalWorkspaceCheckId;
  readonly message: string;
  readonly detail?: string;
}

export type LocalWorkspaceReadiness =
  | { readonly kind: "checking" }
  | { readonly kind: "disabled"; readonly checks: readonly LocalWorkspaceCheck[]; readonly blockers: readonly LocalWorkspaceBlocker[] }
  | { readonly kind: "ready"; readonly workspaceId: typeof LOCAL_PROXY_GATEWAY_WORKSPACE_ID; readonly checks: readonly LocalWorkspaceCheck[] };

export type WorkspaceSession =
  | { readonly kind: "checking"; readonly accountSlot: null; readonly identity: null; readonly source: null }
  | { readonly kind: "unavailable"; readonly accountSlot: null; readonly identity: null; readonly source: null }
  | { readonly kind: "ready"; readonly accountSlot: string; readonly identity: string; readonly source: "cursor" | "local-proxy-gateway" };

interface BoxRuntimeReader {
  getBoxRuntime(): Promise<unknown>;
}

export interface LocalWorkspaceActivationState {
  readonly transportState: "connected" | "down";
  readonly claimStatus: DesktopLocalWorkspaceStatus | null;
}

export interface LocalWorkspaceActivationQueue {
  generation: number;
  pending: Promise<DesktopLocalWorkspaceStatus> | null;
  requiresFresh: boolean;
}

interface LocalWorkspaceClaimReference {
  current: DesktopLocalWorkspaceStatus;
}

export async function activateLocalWorkspaceThroughQueue({
  activate,
  claim,
  forceFresh = false,
  queue
}: {
  readonly activate: () => Promise<DesktopLocalWorkspaceStatus>;
  readonly claim: LocalWorkspaceClaimReference;
  readonly forceFresh?: boolean;
  readonly queue: LocalWorkspaceActivationQueue;
}): Promise<DesktopLocalWorkspaceStatus> {
  const existing = queue.pending;
  const startFresh = forceFresh || queue.requiresFresh;
  if (existing != null && !startFresh) return await existing;
  const generation = ++queue.generation;
  queue.requiresFresh = false;
  claim.current = { kind: "disabled" };
  const pending = (async (): Promise<DesktopLocalWorkspaceStatus> => {
    if (existing != null) {
      // A credential save supersedes the old lease, but its fresh activation
      // still has to wait for the serialized main-process restart to settle.
      try { await existing; }
      catch { /* The fresh activation below is the recovery path. */ }
    }
    if (generation !== queue.generation) return { kind: "disabled" };
    claim.current = { kind: "disabled" };
    const activated = await activate();
    if (generation !== queue.generation) return { kind: "disabled" };
    const normalized: DesktopLocalWorkspaceStatus = isLocalWorkspaceClaimReady(activated)
      ? activated
      : { kind: "disabled" };
    claim.current = normalized;
    return normalized;
  })();
  queue.pending = pending;
  try {
    return await pending;
  } finally {
    if (queue.pending === pending) queue.pending = null;
  }
}

export function invalidateLocalWorkspaceActivationQueue(
  queue: LocalWorkspaceActivationQueue,
  claim: LocalWorkspaceClaimReference
): void {
  queue.generation += 1;
  queue.requiresFresh = true;
  claim.current = { kind: "disabled" };
}

export function localWorkspaceActivationStateEqual(
  left: LocalWorkspaceActivationState,
  right: LocalWorkspaceActivationState
): boolean {
  if (left.transportState !== right.transportState) return false;
  if (left.claimStatus?.kind !== right.claimStatus?.kind) return false;
  if (left.claimStatus?.kind !== "ready" || right.claimStatus?.kind !== "ready") return true;
  return left.claimStatus.workspaceId === right.claimStatus.workspaceId;
}

const LOCAL_WORKSPACE_CONFIGURATION_CHECKS: readonly LocalWorkspaceCheckId[] = [
  "provider",
  "runtime",
  "docker-ready",
  "credential",
  "model",
  "protocol"
];

function field(value: unknown, key: string): unknown {
  return typeof value === "object" && value != null && !Array.isArray(value) ? Reflect.get(value, key) : undefined;
}

function rejectedDetail(result: PromiseSettledResult<unknown>): string | undefined {
  if (result.status !== "rejected") return undefined;
  return result.reason instanceof Error ? result.reason.message : String(result.reason);
}

function check(id: LocalWorkspaceCheckId, label: string, ready: boolean): LocalWorkspaceCheck {
  return { id, label, ready };
}

export function localWorkspaceNextAction(readiness: LocalWorkspaceReadiness): string {
  const zh = appLanguage === "zh";
  if (readiness.kind === "checking") {
    return zh ? "正在检查本地 Proxy Gateway 工作区…" : "Checking your local Proxy Gateway workspace…";
  }
  if (readiness.kind === "ready") {
    return zh ? "本地 Proxy Gateway 已就绪，可以跳过登录继续使用。" : "Local Proxy Gateway is ready. Continue without signing in.";
  }
  return readiness.blockers[0]?.message
    ?? (zh
      ? "请先完成本地 Proxy Gateway 设置，再跳过登录继续使用。"
      : "Finish the Local Proxy Gateway setup to continue without signing in.");
}

export function localWorkspaceRemainingBlockerLabel(count: number): string {
  return appLanguage === "zh" ? `还有 ${count} 项设置待完成。` : `${count} setup items remain.`;
}

export function isLocalWorkspaceClaimReady(
  status: DesktopLocalWorkspaceStatus | null | undefined
): status is Extract<DesktopLocalWorkspaceStatus, { readonly kind: "ready" }> {
  return status?.kind === "ready" && status.workspaceId === LOCAL_PROXY_GATEWAY_WORKSPACE_ID;
}

export function localWorkspaceConfigurationReady(readiness: LocalWorkspaceReadiness): boolean {
  if (readiness.kind === "checking") return false;
  return LOCAL_WORKSPACE_CONFIGURATION_CHECKS.every((id) => readiness.checks.some((item) => item.id === id && item.ready));
}

export function reconcileSettingsLocalWorkspaceClaim(
  currentClaim: DesktopLocalWorkspaceStatus,
  initialLocalWorkspace: LocalWorkspaceReadiness | undefined,
  wasOpen: boolean,
  isOpen: boolean
): DesktopLocalWorkspaceStatus {
  if (!isOpen || wasOpen) return currentClaim;
  return initialLocalWorkspace?.kind === "ready"
    ? { kind: "ready", workspaceId: initialLocalWorkspace.workspaceId }
    : { kind: "disabled" };
}

/**
 * Reads the persisted settings surfaces concurrently and combines them with
 * the main-process claim plus the coordinator client's replayed transport
 * state. Missing activation evidence deliberately fails closed.
 */
export async function readLocalWorkspaceReadiness(
  bridge: Pick<DesktopBridge, "agent" | "proxyGateway">,
  activation: LocalWorkspaceActivationState = { transportState: "down", claimStatus: null }
): Promise<LocalWorkspaceReadiness> {
  const agent = bridge.agent as typeof bridge.agent & BoxRuntimeReader;
  const routerPromise = Promise.resolve().then(() => agent.getInferenceRouter());
  const runtimePromise = typeof agent.getBoxRuntime === "function"
    ? Promise.resolve().then(() => agent.getBoxRuntime())
    : Promise.reject(new Error("This build does not expose the Local Docker runtime."));
  const [routerResult, runtimeResult, credentialResult] = await Promise.allSettled([
    routerPromise,
    runtimePromise,
    Promise.resolve().then(() => bridge.proxyGateway.status())
  ]);
  const router = routerResult.status === "fulfilled" ? routerResult.value : null;
  const runtime = runtimeResult.status === "fulfilled" ? runtimeResult.value : null;
  const credential = credentialResult.status === "fulfilled" ? credentialResult.value : null;
  const providerReady = routerResult.status === "fulfilled" && field(router, "provider") === "proxy-gateway";
  const runtimeSelected = runtimeResult.status === "fulfilled" && field(runtime, "mode") === "local-docker";
  const dockerReady = runtimeSelected && field(field(runtime, "status"), "ready") === true;
  const credentialReady = credentialResult.status === "fulfilled" && field(credential, "configured") === true;
  const model = field(credential, "model");
  const modelReady = credentialResult.status === "fulfilled" && typeof model === "string" && model.trim().length > 0;
  const protocol = field(credential, "protocol");
  const protocolReady = credentialResult.status === "fulfilled" && (protocol === "auto" || protocol === "chat-completions");
  const workspaceClaimReady = isLocalWorkspaceClaimReady(activation.claimStatus);
  const coordinatorConnected = activation.transportState === "connected";
  const checks = [
    check("provider", "OpenAI-compatible / Proxy Gateway selected", providerReady),
    check("runtime", "Local Docker VM selected", runtimeSelected),
    check("docker-ready", "Local Docker VM ready", dockerReady),
    check("credential", "Proxy/client API key saved", credentialReady),
    check("model", "Model selected and saved", modelReady),
    check("protocol", "Native tool protocol selected", protocolReady),
    check("workspace-claim", "Local workspace claim ready", workspaceClaimReady),
    check("coordinator-connected", "Coordinator connected", coordinatorConnected)
  ];
  const blockers: LocalWorkspaceBlocker[] = [];
  if (routerResult.status === "rejected") blockers.push({ code: "provider-status-unavailable", checkId: "provider", message: "Could not read the routing provider. Reopen Router settings and retry.", detail: rejectedDetail(routerResult) });
  else if (!providerReady) blockers.push({ code: "provider-not-proxy-gateway", checkId: "provider", message: "Select OpenAI-compatible / Proxy Gateway as the provider." });
  if (runtimeResult.status === "rejected") blockers.push({ code: "docker-status-unavailable", checkId: "runtime", message: "Could not read Docker status. Start Docker Desktop and retry.", detail: rejectedDetail(runtimeResult) });
  else if (!runtimeSelected) blockers.push({ code: "local-docker-not-selected", checkId: "runtime", message: "Turn on Use local Docker VM." });
  else if (!dockerReady) blockers.push({ code: "local-docker-not-ready", checkId: "docker-ready", message: "Local Docker is not ready. Start Docker Desktop, then choose Repair Local Docker VM." });
  if (credentialResult.status === "rejected") blockers.push({ code: "credential-status-unavailable", checkId: "credential", message: "Could not read the saved Proxy Gateway credential. Reopen Router settings and retry.", detail: rejectedDetail(credentialResult) });
  else {
    if (!credentialReady) blockers.push({ code: "credential-missing", checkId: "credential", message: "Enter and save the Proxy Gateway proxy/client API key." });
    if (!modelReady) blockers.push({ code: "model-missing", checkId: "model", message: "Choose a model and save Proxy Gateway again." });
    if (!protocolReady) blockers.push({ code: "protocol-unsupported", checkId: "protocol", message: "Choose Chat Completions or Auto for native agent tools." });
  }
  if (!workspaceClaimReady) blockers.push({
    code: "local-workspace-claim-not-ready",
    checkId: "workspace-claim",
    message: "Local workspace startup is not confirmed. Choose Save & continue without signing in to retry."
  });
  if (!coordinatorConnected) blockers.push({
    code: "coordinator-not-connected",
    checkId: "coordinator-connected",
    message: "The Local Proxy Gateway coordinator is not connected. Retry Save & continue without signing in."
  });
  return blockers.length === 0
    ? { kind: "ready", workspaceId: LOCAL_PROXY_GATEWAY_WORKSPACE_ID, checks }
    : { kind: "disabled", checks, blockers };
}

export function projectWorkspaceSession(
  account: CursorAuthStatus | null,
  localWorkspace: LocalWorkspaceReadiness
): WorkspaceSession {
  if (account?.kind === "logged-in") {
    const accountSlot = account.authId ?? account.email ?? "account";
    return {
      kind: "ready",
      accountSlot,
      identity: `cursor:${accountSlot}`,
      source: "cursor"
    };
  }
  if (account == null || localWorkspace.kind === "checking") {
    return { kind: "checking", accountSlot: null, identity: null, source: null };
  }
  if (account.kind === "logging-in") {
    return { kind: "unavailable", accountSlot: null, identity: null, source: null };
  }
  if (localWorkspace.kind === "ready") {
    return {
      kind: "ready",
      accountSlot: localWorkspace.workspaceId,
      identity: localWorkspace.workspaceId,
      source: "local-proxy-gateway"
    };
  }
  return { kind: "unavailable", accountSlot: null, identity: null, source: null };
}
