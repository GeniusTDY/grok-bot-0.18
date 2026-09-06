/** Shared contracts for the artifact-derived transcript extension graph. */
export const RUNNER_UNATTACHED_MESSAGE =
  "Sand agent runner factory is not attached.";

export interface TranscriptEntry {
  readonly id: string;
  readonly kind: string;
  readonly role?: string;
  readonly content?: string;
  readonly timestampMs?: number;
  readonly [key: string]: unknown;
}

export interface TranscriptSession {
  readonly id: string;
  readonly dbPath: string;
  readonly db?: {
    getTranscriptEntries(): TranscriptEntry[];
    appendTranscriptEntry?(entry: TranscriptEntry): void;
    updateTranscriptEntry?(
      id: string,
      update: (entry: TranscriptEntry) => TranscriptEntry,
    ): TranscriptEntry | null;
  };
  readonly [key: string]: unknown;
}

export interface Disposable {
  dispose(): void;
}
export interface Clock {
  now(): number;
  schedule(delayMs: number, callback: () => void): Disposable;
}
export const realClock: Clock = {
  now: Date.now,
  schedule(delayMs, callback) {
    const timer = setTimeout(callback, delayMs);
    return { dispose: () => clearTimeout(timer) };
  },
};

export type TranscriptManagerLike = Record<string, any>;
