export type DisabledToolsByServer = Readonly<Record<string, readonly string[]>>;

export interface CoordinatorResyncSummary {
  readonly failedSteps: readonly string[];
  readonly durationMs: number;
}

export class CoordinatorResyncFailedError extends Error {
  readonly failedSteps: readonly string[];

  constructor(failedSteps: readonly string[]) {
    super(`Coordinator resync failed at: ${failedSteps.join(", ")}`);
    this.name = "CoordinatorResyncFailedError";
    this.failedSteps = [...failedSteps];
  }
}

export function unionDisabledTools(
  a: DisabledToolsByServer,
  b: DisabledToolsByServer,
): Record<string, string[]> {
  const merged: Record<string, string[]> = Object.fromEntries(
    Object.entries(a).map(([key, value]) => [key, [...value]]),
  );
  for (const [serverId, names] of Object.entries(b)) {
    merged[serverId] = [...new Set([...(merged[serverId] ?? []), ...names])];
  }
  return merged;
}

export function createCoordinatorResyncChain(deps: {
  readonly legs: {
    getHostSettings(): Promise<any>;
    setHostSettings(update: any): Promise<any>;
  };
  readonly getMcpCustomInstructionsAccountScope: () => string | null | undefined;
  readonly getMcpCustomInstructionsByServerId: () => Record<string, string>;
  readonly getMcpDisabledToolsByServerId: () => DisabledToolsByServer;
  readonly setMcpCustomInstructionsByServerId: (value: Record<string, string>) => void;
  readonly setMcpDisabledToolsByServerId: (value: DisabledToolsByServer) => void;
  readonly detectTimeZone: () => string | null | undefined;
  readonly getUserTimeZoneOverride: () => string | null | undefined;
  readonly getInferenceProvider: () => unknown;
  readonly getLocalWorkspaceBrowserUseCapability: () => boolean;
  readonly getComputerUseModel: () => unknown;
  readonly getAutoReviewInstructions: () => unknown;
  readonly getLocalToolPermission: () => unknown;
  readonly getWebauthnProxyEnabled: () => unknown;
  readonly getFeatureFlagOverrides: () => unknown;
  readonly pushBoxSecrets: () => Promise<unknown>;
  readonly syncWindowFocused: () => Promise<unknown>;
  readonly monotonicNow?: () => number;
  readonly onCompleted?: (summary: CoordinatorResyncSummary) => void;
  readonly reportFailure?: (step: string, error: unknown) => void;
}) {
  const now = deps.monotonicNow ?? (() => performance.now());
  const pushCurrent = async (): Promise<void> => {
    const scope = deps.getMcpCustomInstructionsAccountScope();
    await deps.legs.setHostSettings({
      mcpCustomInstructionsAccountScope: scope ?? null,
      mcpCustomInstructions: {},
      mcpCustomInstructionsByServerId:
        scope == null ? {} : deps.getMcpCustomInstructionsByServerId(),
      mcpDisabledToolsByServerId:
        scope == null ? {} : deps.getMcpDisabledToolsByServerId(),
    });
  };
  const reconcileMcp = async (): Promise<void> => {
    const host = await deps.legs.getHostSettings();
    const scope = deps.getMcpCustomInstructionsAccountScope();
    if (scope == null) return;
    const desktopInstructions = deps.getMcpCustomInstructionsByServerId();
    const desktopDisabled = deps.getMcpDisabledToolsByServerId();
    if (deps.getMcpCustomInstructionsAccountScope() !== scope) return;
    if (host.mcpCustomInstructionsAccountScope == null) {
      await deps.legs.setHostSettings({
        mcpCustomInstructionsAccountScope: scope,
        mcpCustomInstructions: {},
        mcpCustomInstructionsByServerId: desktopInstructions,
        mcpDisabledToolsByServerId: desktopDisabled,
      });
      if (deps.getMcpCustomInstructionsAccountScope() !== scope) await pushCurrent();
      return;
    }
    if (host.mcpCustomInstructionsAccountScope !== scope) return;
    const merged = {
      ...desktopInstructions,
      ...(host.mcpCustomInstructionsByServerId ?? {}),
    };
    const disabled = unionDisabledTools(
      desktopDisabled,
      host.mcpDisabledToolsByServerId ?? {},
    );
    await deps.legs.setHostSettings({
      mcpCustomInstructionsAccountScope: scope,
      mcpCustomInstructionsByServerId: merged,
      mcpDisabledToolsByServerId: disabled,
    });
    if (deps.getMcpCustomInstructionsAccountScope() !== scope) {
      await pushCurrent();
      return;
    }
    deps.setMcpCustomInstructionsByServerId(merged);
    deps.setMcpDisabledToolsByServerId(disabled);
  };
  const runOnce = async (): Promise<CoordinatorResyncSummary> => {
    const started = now();
    const failedSteps: string[] = [];
    const step = async (
      name: string,
      work: () => unknown | Promise<unknown>,
    ): Promise<void> => {
      try {
        await work();
      } catch (error) {
        failedSteps.push(name);
        deps.reportFailure?.(name, error);
      }
    };
    await step("notifications", () =>
      deps.legs.setHostSettings({ notifications: { isEnabled: false } }));
    await step("timezone", () => {
      const zone = deps.detectTimeZone();
      return deps.legs.setHostSettings({
        ...(zone == null ? {} : { userTimeZone: zone }),
        userTimeZoneOverride: deps.getUserTimeZoneOverride() ?? "",
      });
    });
    await step("inference_provider", () =>
      deps.legs.setHostSettings({ inferenceProvider: deps.getInferenceProvider() }));
    await step("local_workspace_capabilities", () =>
      deps.legs.setHostSettings({
        localWorkspaceBrowserUse: deps.getLocalWorkspaceBrowserUseCapability(),
      }));
    await step("computer_use_model", () =>
      deps.legs.setHostSettings({ computerUseModel: deps.getComputerUseModel() ?? null }));
    await step("auto_review", () =>
      deps.legs.setHostSettings({ autoReviewInstructions: deps.getAutoReviewInstructions() }));
    await step("local_tool_permission", () =>
      deps.legs.setHostSettings({ localToolPermission: deps.getLocalToolPermission() }));
    await step("webauthn_proxy", () =>
      deps.legs.setHostSettings({ webauthnProxyEnabled: deps.getWebauthnProxyEnabled() }));
    await step("feature_flags", () =>
      deps.legs.setHostSettings({ featureFlagOverrides: deps.getFeatureFlagOverrides() }));
    await step("mcp_merge", reconcileMcp);
    await step("box_secrets", deps.pushBoxSecrets);
    await step("window_focus", deps.syncWindowFocused);
    const summary = {
      failedSteps,
      durationMs: Math.max(0, Math.round(now() - started)),
    };
    deps.onCompleted?.(summary);
    return summary;
  };

  let chain: Promise<void> = Promise.resolve();
  const serialize = <T>(work: () => Promise<T>): Promise<T> => {
    const scheduled = chain.then(work, work);
    chain = scheduled.then(() => undefined, () => undefined);
    return scheduled;
  };
  const hostUpdate = (update: any): Promise<any> =>
    deps.legs.setHostSettings(
      update.localToolPermission !== undefined
        ? { ...update, localToolPermission: deps.getLocalToolPermission() }
        : update,
    );

  return {
    onTransportConnected(): Promise<CoordinatorResyncSummary> {
      return serialize(runOnce);
    },
    pushHostSettings(update: any): Promise<any | null> {
      return serialize(() => hostUpdate(update)).catch(() => null);
    },
    pushHostSettingsStrict(update: any): Promise<any> {
      return serialize(() => hostUpdate(update));
    },
    withSuccessfulResync<T>(work: () => Promise<T>): Promise<T> {
      return serialize(async () => {
        const summary = await runOnce();
        if (summary.failedSteps.length > 0) {
          throw new CoordinatorResyncFailedError(summary.failedSteps);
        }
        return await work();
      });
    },
  };
}
