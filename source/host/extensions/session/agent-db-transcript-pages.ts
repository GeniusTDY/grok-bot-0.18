import { parseTranscriptEntry } from "./agent-db-serde.js";

interface Row { seq?: number; entry?: string }
interface Statement { all(...parameters: unknown[]): Row[] }
export interface TranscriptPageStatements { listTranscriptPage: Statement; listTranscriptWindow: Statement; listTranscriptTail: Statement }
export interface TranscriptPageQuery { beforeSeq?: number; sinceMs?: number; untilMs: number; limit: number }
type TranscriptEntry = Record<string, unknown>;

function page(rows: Row[], limit: number): { entries: TranscriptEntry[]; nextBeforeSeq?: number } {
  const hasMore = rows.length > limit, selected = rows.slice(0, limit), entries: TranscriptEntry[] = [];
  for (const row of selected.toReversed()) if (typeof row.entry === "string") { const entry = parseTranscriptEntry(row.entry); if (entry != null) entries.push(entry); }
  const oldestSeq = selected.at(-1)?.seq; return { entries, ...(hasMore && typeof oldestSeq === "number" ? { nextBeforeSeq: oldestSeq } : {}) };
}
export function readTranscriptPage(statements: TranscriptPageStatements, query: TranscriptPageQuery): { entries: TranscriptEntry[]; nextBeforeSeq?: number } { const before = query.beforeSeq ?? null, since = query.sinceMs ?? null; return page(statements.listTranscriptPage.all(before, before, since, since, query.untilMs, query.limit + 1), query.limit); }
export function readTranscriptWindow(statements: TranscriptPageStatements, query: Pick<TranscriptPageQuery, "beforeSeq" | "limit">, threadCountsFor: (entries: readonly TranscriptEntry[]) => unknown): { entries: TranscriptEntry[]; nextBeforeSeq?: number; threadCounts: unknown } { const before = typeof query.beforeSeq === "number" && Number.isFinite(query.beforeSeq) ? query.beforeSeq : null, limit = Number.isInteger(query.limit) && query.limit > 0 ? Math.min(query.limit, 5_000) : 500; const result = page(statements.listTranscriptWindow.all(before, before, limit + 1), limit); return { ...result, threadCounts: threadCountsFor(result.entries) }; }
export function readTranscriptTail(statements: TranscriptPageStatements, query: Pick<TranscriptPageQuery, "beforeSeq" | "limit">): { entries: TranscriptEntry[]; nextBeforeSeq?: number } { const before = typeof query.beforeSeq === "number" && Number.isFinite(query.beforeSeq) ? query.beforeSeq : null, limit = Number.isInteger(query.limit) && query.limit > 0 ? Math.min(query.limit, 5_000) : 500; return page(statements.listTranscriptTail.all(before, before, limit + 1), limit); }
