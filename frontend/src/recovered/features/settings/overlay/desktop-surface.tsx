import { useCallback, useEffect, useRef, useState } from "react";
// @evidence src/app/dist/renderer/assets/index-BlqerJhg.js#byteOffset=36041 (released Settings Retry copy)
import type { ProductionCoordinatorClient } from "../../../../production/coordinator-client";
// @evidence src/app/dist/renderer/assets/index-BlqerJhg.js#L1
import type { DesktopBridge, DesktopLocalWorkspaceStatus, DesktopUpdateStatus, ThemePreference } from "../../../contracts/desktop-bridge";
import {
  accountStateFromCursorStatus,
  cursorAuthErrorMessage,
  installUpdate,
  loadSettingsDesktopSnapshot,
  loadUsageState,
  cancelUsageTrial,
  checkForUpdatesWithRecovery,
  runAccountAction,
  runUsageUpgradeAction,
  runUsageUpgradeActionAndRefresh,
  saveAutoReviewSettings,
  setLocalToolPermission,
  setSecurityKeyEnabled,
  setEgressTunnelEnabled,
  setThemePreference,
  setTimeZoneOverride,
  subscribeToSettingsDesktop,
  egressTunnelFeatureGateEnabled,
  normalizeEgressTunnelStatus,
  shouldShowUsageSettings,
  usagePageFeatureGateEnabled,
  usageMetersFromSummary,
  type SettingsDesktopSnapshot
} from "./desktop";
import { GeneralSettingsPanel, RouterSettingsPanel, UpdatesSettingsPanel, UsageSettingsPanel, type RouterBoxRuntimeMode, type RouterBoxRuntimeState } from "./panels";
import { SettingsModalShell, type SettingsSectionId } from "./view";
import { DEFAULT_ROUTER_PROVIDER, isRouterProviderId, type RouterProviderId } from "./router";
import type { ProxyGatewayStatus } from "../../../../../../source/shared/proxy-gateway";
import type { AutoReviewSettings } from "./auto-review";
import type { SettingsComputerMount } from "./computer";
import { SettingsNoticeView, settingsNoticeFromEvent, type SettingsNotice } from "./notice";
import { publishSurfaceNotice, type SettingsNoticeEvent } from "../../../contracts/surface-notice";
import { SandButton } from "../../../ui/sand-kit-primitives";
import {
  isLocalWorkspaceClaimReady,
  localWorkspaceConfigurationReady,
  readLocalWorkspaceReadiness,
  reconcileSettingsLocalWorkspaceClaim,
  type LocalWorkspaceReadiness
} from "../../../../production/local-workspace";

const SETTINGS_FALLBACK_LABELS = { retry: "Retry" };
const LOCAL_WORKSPACE_CHANGED_EVENT = "sand-local-workspace-changed";

function normalizeRouterBoxRuntimeState(value: unknown): RouterBoxRuntimeState {
  if (typeof value !== "object" || value == null || Array.isArray(value)) throw new Error("Docker runtime returned an invalid status.");
  const record = value as Record<string, unknown>;
  if (record.mode !== "remote" && record.mode !== "local-docker") throw new Error("Docker runtime returned an unknown mode.");
  const rawStatus = record.status;
  if (typeof rawStatus !== "object" || rawStatus == null || Array.isArray(rawStatus)) return { mode: record.mode, status: null };
  const status = rawStatus as Record<string, unknown>;
  if (typeof status.available !== "boolean" || typeof status.running !== "boolean" || typeof status.ready !== "boolean"
    || typeof status.containerName !== "string" || typeof status.image !== "string" || typeof status.detail !== "string") {
    return { mode: record.mode, status: null };
  }
  return {
    mode: record.mode,
    status: {
      available: status.available,
      running: status.running,
      ready: status.ready,
      containerName: status.containerName,
      image: status.image,
      detail: status.detail
    }
  };
}

export interface SettingsDesktopSurfaceProps {
  bridge: DesktopBridge;
  coordinatorClient?: ProductionCoordinatorClient | null;
  initialLocalWorkspace?: LocalWorkspaceReadiness;
  initialSection?: SettingsSectionId;
  isOpen: boolean;
  onActivateLocalWorkspace(): Promise<DesktopLocalWorkspaceStatus>;
  onClose(): void;
  onInvalidateLocalWorkspace(): void;
  onLocalWorkspaceReady?(readiness: Extract<LocalWorkspaceReadiness, { kind: "ready" }>): void;
  onNotice?(event: SettingsNoticeEvent): void;
  onStatus?(status: string): void;
  /** Root-owned computer rebuild state/actions; omitted until the root owner mounts the handoff. */
  computer?: SettingsComputerMount;
}

export function SettingsDesktopSurface({ bridge, coordinatorClient = null, initialLocalWorkspace, initialSection = "general", isOpen, onActivateLocalWorkspace, onClose, onInvalidateLocalWorkspace, onLocalWorkspaceReady, onNotice, onStatus, computer }: SettingsDesktopSurfaceProps) {
  const [snapshot, setSnapshot] = useState<SettingsDesktopSnapshot | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0);
  const [surfaceNotice, setSurfaceNotice] = useState<SettingsNotice | null>(null);
  const [cancelTrialDialogOpen, setCancelTrialDialogOpen] = useState(false);
  const [routerProvider, setRouterProvider] = useState<RouterProviderId>(DEFAULT_ROUTER_PROVIDER);
  const [routerPending, setRouterPending] = useState(false);
  const [boxRuntime, setBoxRuntime] = useState<RouterBoxRuntimeState | null>(null);
  const [boxRuntimePending, setBoxRuntimePending] = useState(false);
  const [boxRuntimeError, setBoxRuntimeError] = useState<string | null>(null);
  const [proxyGatewayStatus, setProxyGatewayStatus] = useState<ProxyGatewayStatus | null>(null);
  const [proxyGatewayPending, setProxyGatewayPending] = useState(false);
  const [localWorkspaceReadiness, setLocalWorkspaceReadiness] = useState<LocalWorkspaceReadiness>({ kind: "checking" });
  const [localWorkspaceError, setLocalWorkspaceError] = useState<string | null>(null);
  const localWorkspaceClaimRef = useRef<DesktopLocalWorkspaceStatus>(initialLocalWorkspace?.kind === "ready"
    ? { kind: "ready", workspaceId: initialLocalWorkspace.workspaceId }
    : { kind: "disabled" });
  const settingsWasOpenRef = useRef(false);
  const onNoticeRef = useRef(onNotice);
  onNoticeRef.current = onNotice;
  const handleCancelTrialDialogOpen = useCallback((open: boolean) => setCancelTrialDialogOpen(open), []);
  const handleNotice = useCallback((event: SettingsNoticeEvent) => {
    setSurfaceNotice(settingsNoticeFromEvent(event));
    onNoticeRef.current?.(event);
  }, []);
  useEffect(() => {
    const wasOpen = settingsWasOpenRef.current;
    settingsWasOpenRef.current = isOpen;
    localWorkspaceClaimRef.current = reconcileSettingsLocalWorkspaceClaim(
      localWorkspaceClaimRef.current,
      initialLocalWorkspace,
      wasOpen,
      isOpen
    );
  }, [initialLocalWorkspace, isOpen]);
  const refreshLocalWorkspace = useCallback(async (
    notifyRenderer = true,
    claimStatus: DesktopLocalWorkspaceStatus = localWorkspaceClaimRef.current
  ) => {
    const readiness = await readLocalWorkspaceReadiness(bridge, {
      transportState: coordinatorClient?.getTransportState() ?? "down",
      claimStatus
    });
    setLocalWorkspaceReadiness(readiness);
    setLocalWorkspaceError(null);
    if (notifyRenderer) window.dispatchEvent(new Event(LOCAL_WORKSPACE_CHANGED_EVENT));
    return readiness;
  }, [bridge, coordinatorClient]);

  useEffect(() => {
    if (!isOpen) return;
    let active = true;
    setLocalWorkspaceReadiness({ kind: "checking" });
    setLocalWorkspaceError(null);
    setBoxRuntimeError(null);
    let unsubscribe = () => {};
    setSnapshot(null);
    setError(null);
    const refreshEgressAvailability = () => {
      if (coordinatorClient == null) return;
      void coordinatorClient.isEgressTunnelAvailable().then((available) => {
        if (!active) return;
        setSnapshot((current) => current == null ? current : { ...current, egressTunnel: { ...current.egressTunnel, available } });
      }).catch(() => {
        // The shipped capability store keeps the last value on a failed reread.
      });
    };
    void loadSettingsDesktopSnapshot(bridge, coordinatorClient ?? undefined).then((value) => {
      if (!active) return;
      setSnapshot(value);
      unsubscribe = subscribeToSettingsDesktop(bridge, {
        account: (status) => {
          setSnapshot((current) => current == null ? current : {
            ...current,
            account: accountStateFromCursorStatus(
              status,
              current.account.kind === "logged-in" ? current.account.avatarDataUrl : undefined
            ),
            accountPending: current.accountPending,
            accountError: status.kind === "logged-out" ? status.errorMessage ?? null : null
          });
          refreshEgressAvailability();
        },
        theme: (state) => setSnapshot((current) => current == null ? current : { ...current, theme: state.preference }),
        update: (update) => setSnapshot((current) => current == null ? current : { ...current, update }),
        securityKey: updateSecurityKey,
        experiments: (experimentSnapshot) => setSnapshot((current) => current == null ? current : {
          ...current,
          usagePageFeatureGateEnabled: usagePageFeatureGateEnabled(experimentSnapshot),
          egressTunnel: { ...current.egressTunnel, featureGateEnabled: egressTunnelFeatureGateEnabled(experimentSnapshot) }
        }),
        egressTunnel: (enabled) => setSnapshot((current) => current == null ? current : {
          ...current,
          egressTunnel: { ...current.egressTunnel, enabled }
        }),
        egressTunnelStatus: (status) => setSnapshot((current) => current == null ? current : {
          ...current,
          egressTunnel: { ...current.egressTunnel, status: normalizeEgressTunnelStatus(status) }
        })
      });
      const unsubscribeCoordinator = coordinatorClient?.subscribeTransport((state) => {
        if (state === "connected") refreshEgressAvailability();
      });
      const previousUnsubscribe = unsubscribe;
      unsubscribe = () => {
        previousUnsubscribe();
        unsubscribeCoordinator?.();
      };
    }).catch((reason: unknown) => {
      if (!active) return;
      const message = reason instanceof Error ? reason.message : String(reason);
      setError(message);
      publishSurfaceNotice({ kind: "error", operation: "settings-load", message }, handleNotice, onStatus);
    });
    return () => {
      active = false;
      unsubscribe();
    };
  }, [bridge, coordinatorClient, handleNotice, isOpen, onStatus, reload]);

  useEffect(() => {
    if (!isOpen) return;
    let active = true;
    let dockerRetryTimer: number | null = null;
    void bridge.agent.getInferenceRouter().then((value) => {
      const provider = typeof value === "object" && value != null && "provider" in value ? value.provider : null;
      if (active) setRouterProvider(isRouterProviderId(provider) ? provider : DEFAULT_ROUTER_PROVIDER);
    }).catch(() => {
      if (active) setRouterProvider(DEFAULT_ROUTER_PROVIDER);
    });
    void bridge.proxyGateway.status().then((status) => { if (active) setProxyGatewayStatus(status); }).catch(() => { if (active) setProxyGatewayStatus(null); });
    const refreshBoxRuntime = () => {
      void bridge.agent.getBoxRuntime().then((status) => {
        if (!active) return;
        const normalized = normalizeRouterBoxRuntimeState(status);
        setBoxRuntime(normalized);
        if (normalized.mode === "local-docker" && normalized.status?.ready !== true) {
          dockerRetryTimer = window.setTimeout(refreshBoxRuntime, 1_000);
        } else {
          void refreshLocalWorkspace(false).then((readiness) => {
            if (active) setLocalWorkspaceReadiness(readiness);
          });
        }
      }).catch((reason: unknown) => {
        if (!active) return;
        setBoxRuntime(null);
        setBoxRuntimeError(reason instanceof Error ? reason.message : String(reason));
        dockerRetryTimer = window.setTimeout(refreshBoxRuntime, 1_000);
      });
    };
    refreshBoxRuntime();
    void refreshLocalWorkspace(false).then((readiness) => {
      if (active) setLocalWorkspaceReadiness(readiness);
    }).catch((reason: unknown) => {
      if (!active) return;
      setLocalWorkspaceError(reason instanceof Error ? reason.message : String(reason));
    });
    const unsubscribeCoordinator = coordinatorClient?.subscribeTransport((state) => {
      if (!active) return;
      if (state === "down") localWorkspaceClaimRef.current = { kind: "disabled" };
      void refreshLocalWorkspace(false).catch((reason: unknown) => {
        if (active) setLocalWorkspaceError(reason instanceof Error ? reason.message : String(reason));
      });
    });
    return () => {
      active = false;
      if (dockerRetryTimer != null) window.clearTimeout(dockerRetryTimer);
      unsubscribeCoordinator?.();
    };
  }, [bridge, coordinatorClient, isOpen, refreshLocalWorkspace]);

  const mutate = async <Value,>(action: () => Promise<Value>, operation: SettingsNoticeEvent["operation"], apply: (value: Value) => void): Promise<Value> => {
    try {
      const value = await action();
      apply(value);
      return value;
    } catch (reason) {
      const message = reason instanceof Error ? reason.message : String(reason);
      publishSurfaceNotice({ kind: "error", operation, message }, handleNotice, onStatus);
      throw reason;
    }
  };

  const updateSnapshot = (update: DesktopUpdateStatus) => setSnapshot((current) => current == null ? current : { ...current, update });
  const updateTheme = (theme: ThemePreference) => setSnapshot((current) => current == null ? current : { ...current, theme });
  const updateTimeZone = (timeZone: SettingsDesktopSnapshot["timeZone"]) => setSnapshot((current) => current == null ? current : { ...current, timeZone });
  const updateLocalToolPermission = (permission: SettingsDesktopSnapshot["localToolPermission"]["permission"]) => setSnapshot((current) => current == null ? current : {
    ...current,
    localToolPermission: { ...current.localToolPermission, permission }
  });
  const updateSecurityKey = (securityKeyEnabled: boolean) => setSnapshot((current) => current == null ? current : { ...current, securityKeyEnabled });
  const updateAutoReview = (autoReview: AutoReviewSettings) => setSnapshot((current) => current == null ? current : { ...current, autoReview });
  const refreshUsage = async () => {
    const previous = snapshot?.usage;
    setSnapshot((current) => current == null ? current : {
      ...current,
      usage: { status: "loading", summary: current.usage.summary },
      usageSummary: current.usage.summary
    });
    const usage = await loadUsageState(bridge, previous);
    setSnapshot((current) => current == null ? current : { ...current, usage, usageSummary: usage.summary });
  };

  return (
    <>
      <SettingsNoticeView notice={surfaceNotice} onDismiss={() => setSurfaceNotice(null)} />
      <SettingsModalShell
      initialSection={initialSection}
      isOpen={isOpen}
      onClose={onClose}
      renderSection={(section: SettingsSectionId) => {
        // Router configuration is intentionally independent from the signed-in
        // settings snapshot so a fresh profile can configure Proxy Gateway first.
        if (section === "router") return (
          <RouterSettingsPanel
            boxRuntime={{
              state: boxRuntime,
              pending: boxRuntimePending,
              error: boxRuntimeError,
              onChange: async (mode) => {
                if (boxRuntimePending) return;
                if (boxRuntime?.mode === mode
                  && (mode !== "local-docker" || boxRuntime.status?.ready === true)) return;
                onInvalidateLocalWorkspace();
                setBoxRuntimePending(true);
                setBoxRuntimeError(null);
                localWorkspaceClaimRef.current = { kind: "disabled" };
                try {
                  const result = normalizeRouterBoxRuntimeState(await bridge.agent.setBoxRuntime(mode));
                  setBoxRuntime(result);
                  await refreshLocalWorkspace();
                } catch (reason) {
                  const message = reason instanceof Error ? reason.message : String(reason);
                  setBoxRuntimeError(message);
                  publishSurfaceNotice({ kind: "error", operation: "settings-router-provider", message }, handleNotice, onStatus);
                } finally {
                  setBoxRuntimePending(false);
                }
              }
            }}
            proxyGateway={{
              status: proxyGatewayStatus,
              pending: proxyGatewayPending,
              onSave: async (config, onCredentialPersisted) => {
                onInvalidateLocalWorkspace();
                setProxyGatewayPending(true);
                localWorkspaceClaimRef.current = { kind: "disabled" };
                try {
                  setProxyGatewayStatus(await bridge.proxyGateway.save(config, onCredentialPersisted));
                  await refreshLocalWorkspace();
                }
                catch (reason) {
                  const message = reason instanceof Error ? reason.message : String(reason);
                  publishSurfaceNotice({ kind: "error", operation: "settings-router-provider", message }, handleNotice, onStatus);
                  throw reason;
                } finally { setProxyGatewayPending(false); }
              },
              onDelete: async () => {
                onInvalidateLocalWorkspace();
                setProxyGatewayPending(true);
                localWorkspaceClaimRef.current = { kind: "disabled" };
                try {
                  setProxyGatewayStatus(await bridge.proxyGateway.remove());
                  await refreshLocalWorkspace();
                }
                catch (reason) {
                  const message = reason instanceof Error ? reason.message : String(reason);
                  publishSurfaceNotice({ kind: "error", operation: "settings-router-provider", message }, handleNotice, onStatus);
                  throw reason;
                } finally { setProxyGatewayPending(false); }
              },
              onTest: async () => {
                setProxyGatewayPending(true);
                try { setProxyGatewayStatus(await bridge.proxyGateway.status({ testConnection: true })); }
                catch (reason) {
                  const message = reason instanceof Error ? reason.message : String(reason);
                  publishSurfaceNotice({ kind: "error", operation: "settings-router-provider", message }, handleNotice, onStatus);
                  throw reason;
                } finally { setProxyGatewayPending(false); }
              }
            }}
            localWorkspace={{
              readiness: localWorkspaceReadiness,
              error: localWorkspaceError,
              onContinue: async (config, onCredentialPersisted) => {
                if (proxyGatewayPending || routerPending || boxRuntimePending) return;
                onInvalidateLocalWorkspace();
                setProxyGatewayPending(true);
                setLocalWorkspaceError(null);
                localWorkspaceClaimRef.current = { kind: "disabled" };
                try {
                  const saved = await bridge.proxyGateway.save(config, onCredentialPersisted);
                  setProxyGatewayStatus(saved);
                  const configuredReadiness = await refreshLocalWorkspace(false);
                  if (!localWorkspaceConfigurationReady(configuredReadiness)) {
                    throw new Error(configuredReadiness.kind === "disabled"
                      ? configuredReadiness.blockers[0]?.message ?? "Local Proxy Gateway setup is incomplete."
                      : "Local Proxy Gateway status is still being checked.");
                  }
                  const claimed = await onActivateLocalWorkspace();
                  localWorkspaceClaimRef.current = isLocalWorkspaceClaimReady(claimed) ? claimed : { kind: "disabled" };
                  if (!isLocalWorkspaceClaimReady(claimed)) {
                    const failedReadiness = await refreshLocalWorkspace(false);
                    throw new Error(failedReadiness.kind === "disabled"
                      ? failedReadiness.blockers.find((blocker) => blocker.code === "local-workspace-claim-not-ready")?.message
                        ?? "Local workspace startup was not confirmed."
                      : "Local workspace startup was not confirmed.");
                  }
                  if (coordinatorClient == null) {
                    const failedReadiness = await refreshLocalWorkspace(false, claimed);
                    throw new Error(failedReadiness.kind === "disabled"
                      ? failedReadiness.blockers.find((blocker) => blocker.code === "coordinator-not-connected")?.message
                        ?? "The Local Proxy Gateway coordinator is unavailable."
                      : "The Local Proxy Gateway coordinator is unavailable.");
                  }
                  await coordinatorClient.waitForTransportConnected(20_000);
                  const connectedReadiness = await refreshLocalWorkspace(false, claimed);
                  if (connectedReadiness.kind !== "ready"
                    || coordinatorClient.getTransportState() !== "connected"
                    || !isLocalWorkspaceClaimReady(localWorkspaceClaimRef.current)) {
                    const latestReadiness = await refreshLocalWorkspace(false);
                    throw new Error(latestReadiness.kind === "disabled"
                      ? latestReadiness.blockers[0]?.message ?? "Local Proxy Gateway did not become ready."
                      : "Local Proxy Gateway status is still being checked.");
                  }
                  onLocalWorkspaceReady?.(connectedReadiness);
                } catch (reason) {
                  await refreshLocalWorkspace(false);
                  const message = reason instanceof Error ? reason.message : String(reason);
                  setLocalWorkspaceError(message);
                  publishSurfaceNotice({ kind: "error", operation: "settings-router-provider", message }, handleNotice, onStatus);
                  throw reason;
                } finally {
                  setProxyGatewayPending(false);
                }
              }
            }}
            onChange={async (provider) => {
              if (routerPending || provider === routerProvider) return;
              onInvalidateLocalWorkspace();
              const previous = routerProvider;
              setRouterProvider(provider);
              setRouterPending(true);
              localWorkspaceClaimRef.current = { kind: "disabled" };
              try {
                const result = await bridge.agent.setInferenceRouter(provider);
                const applied = typeof result === "object" && result != null && "provider" in result ? result.provider : provider;
                if (!isRouterProviderId(applied)) throw new Error("Router returned an unknown provider.");
                setRouterProvider(applied);
                await refreshLocalWorkspace();
              } catch (reason) {
                setRouterProvider(previous);
                const message = reason instanceof Error ? reason.message : String(reason);
                publishSurfaceNotice({ kind: "error", operation: "settings-router-provider", message }, handleNotice, onStatus);
              } finally {
                setRouterPending(false);
              }
            }}
            pending={routerPending}
            provider={routerProvider}
          />
        );
        if (snapshot == null) return (
          <div aria-live="polite" role={error == null ? "status" : "alert"}>
            {error == null ? null : <>
              <span>{error}</span>
              <SandButton aria-label="Retry" onClick={() => setReload((value) => value + 1)} size="sm" variant="secondary">{SETTINGS_FALLBACK_LABELS.retry}</SandButton>
            </>}
          </div>
        );
        if (section === "general") return (
          <GeneralSettingsPanel
            account={snapshot.account}
            autoReview={{
              settings: snapshot.autoReview,
              onChange: (settings) => mutate(() => saveAutoReviewSettings(bridge, settings), "settings-auto-review", updateAutoReview)
            }}
            accountError={snapshot.accountError}
            accountPending={snapshot.accountPending}
            platform={bridge.platform === "win32" ? "windows" : "mac"}
            onAccountAction={() => {
              setSnapshot((current) => current == null ? current : { ...current, accountPending: true, accountError: null });
              void mutate(() => runAccountAction(bridge, snapshot.account), "settings-account", (status) => {
                setSnapshot((current) => current == null ? current : {
                  ...current,
                  account: accountStateFromCursorStatus(status, current.account.kind === "logged-in" ? current.account.avatarDataUrl : undefined),
                  accountPending: false,
                  accountError: status.kind === "logged-out" ? status.errorMessage ?? null : null
                });
              }).catch((reason: unknown) => {
                setSnapshot((current) => current == null ? current : {
                  ...current,
                  accountPending: false,
                  accountError: cursorAuthErrorMessage(reason)
                });
              });
            }}
            onThemeChange={(theme) => mutate(() => setThemePreference(bridge, theme), "settings-theme", (state) => updateTheme(state.preference))}
            localToolPermission={{
              state: snapshot.localToolPermission,
              onChange: (permission) => mutate(() => setLocalToolPermission(bridge, permission), "settings-local-tool-permission", updateLocalToolPermission)
            }}
            securityKey={{
              enabled: snapshot.securityKeyEnabled,
              onChange: (enabled) => mutate(() => setSecurityKeyEnabled(bridge, enabled), "settings-security-key", updateSecurityKey),
              platform: bridge.platform
            }}
            timeZone={{
              state: snapshot.timeZone,
              onChange: (timeZone) => mutate(() => setTimeZoneOverride(bridge, timeZone), "settings-time-zone", updateTimeZone)
            }}
            theme={snapshot.theme}
          />
        );
        if (section === "usage") return (
          <UsageSettingsPanel
            meters={usageMetersFromSummary(snapshot.usageSummary)}
            onCancelDialogOpen={handleCancelTrialDialogOpen}
            onCancelTrial={() => mutate(() => cancelUsageTrial(bridge), "settings-usage-cancel-trial", (usage) => {
              if (usage.ok) refreshUsage();
            })}
            onRetry={refreshUsage}
            onUpgrade={(action) => runUsageUpgradeActionAndRefresh(bridge, action, refreshUsage)}
            state={snapshot.usage}
            provider={routerProvider}
          />
        );
        return (
          <UpdatesSettingsPanel
            autoUpdateWhenIdle={snapshot.update?.autoUpdateWhenIdleOptIn ?? false}
            availableTracks={snapshot.update?.availableTracks ?? []}
            onCheck={() => checkForUpdatesWithRecovery(bridge, updateSnapshot).catch((reason: unknown) => {
              const message = reason instanceof Error ? reason.message : String(reason);
              publishSurfaceNotice({ kind: "error", operation: "settings-update-check", message }, handleNotice, onStatus);
              throw reason;
            })}
            onInstall={() => mutate(() => installUpdate(bridge), "settings-update-install", () => {})}
            onSetAutoUpdateWhenIdle={(enabled) => mutate(() => bridge.update.setAutoUpdateWhenIdleOptIn(enabled), "settings-update-auto-update-when-idle", updateSnapshot)}
            onSetTrack={(track) => mutate(() => bridge.update.setTrack(track), "settings-update-track", updateSnapshot)}
            egressTunnel={{
              available: snapshot.egressTunnel.available,
              enabled: snapshot.egressTunnel.enabled,
              featureGateEnabled: snapshot.egressTunnel.featureGateEnabled,
              onChange: (enabled) => setEgressTunnelEnabled(bridge, enabled).then((nextEnabled) => {
                setSnapshot((current) => current == null ? current : {
                  ...current,
                  egressTunnel: { ...current.egressTunnel, enabled: nextEnabled }
                });
                return nextEnabled;
              }),
              status: snapshot.egressTunnel.status
            }}
            computer={computer}
            status={snapshot.update}
          />
        );
      }}
      showUsage={snapshot != null && (routerProvider !== "cursor" || shouldShowUsageSettings(snapshot.usagePageFeatureGateEnabled, snapshot.usage))}
      iconPlatform={bridge.platform === "win32" ? "windows" : "mac"}
      closeOnBackdrop={!cancelTrialDialogOpen}
      closeOnEscape={!cancelTrialDialogOpen}
      trapFocus={!cancelTrialDialogOpen}
      />
    </>
  );
}
