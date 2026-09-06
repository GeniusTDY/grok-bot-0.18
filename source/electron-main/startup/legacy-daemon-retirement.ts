import type { DataRootSettlement } from "./startup-data-root-migration.js";

function attempt<T>(work: () => T): { ok: true; value: T } | { ok: false } { try { return { ok: true, value: work() }; } catch { return { ok: false }; } }
export async function retireIdleLegacyDaemon(options: { readonly settlement?: DataRootSettlement | null; readonly hasPendingActivation: () => boolean; readonly readDiscovery: () => Promise<{ readonly pid: number; readonly entryRealpath?: string; readonly generationToken?: string; readonly inflightCount?: number } | null>; readonly isDaemonProcess: (pid: number, discovery: { readonly entryRealpath?: string; readonly generationToken?: string }) => boolean; readonly terminate: (
    pid: number,
    discovery: { readonly entryRealpath?: string; readonly generationToken?: string },
  ) => Promise<void>; readonly isProcessAlive: (pid: number) => boolean; readonly relaunch: () => void; readonly exit: () => void }): Promise<"continue-bootstrap" | "stop-bootstrap"> {
  const settlement = options.settlement;
  if (settlement == null || settlement.route !== "legacy" || settlement.reason !== "idle-legacy-writer" || options.hasPendingActivation()) return "continue-bootstrap";
  const pid = settlement.pid;
  if (pid == null) return "continue-bootstrap";
  const discovery = await options.readDiscovery().then((value) => ({ ok: true as const, value }), () => ({ ok: false as const }));
  if (!discovery.ok || discovery.value == null || discovery.value.pid !== pid || (discovery.value.inflightCount ?? 0) > 0 || options.hasPendingActivation()) return "continue-bootstrap";
  const identified = attempt(() => options.isDaemonProcess(pid, discovery.value!));
  if (!identified.ok || !identified.value) return "continue-bootstrap";
  // inflightCount is published asynchronously, so a sampled zero cannot prove
  // an atomic idle window. Automatic startup migration must never signal a
  // verified live daemon; explicit staged-update shutdown owns that boundary.
  return "continue-bootstrap";
}
