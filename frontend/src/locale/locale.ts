/**
 * Simplified Chinese localization support.
 *
 * Language detection follows the Electron system language. Electron derives the
 * renderer's `navigator.language` from the main-process `app.getLocale()` when a
 * BrowserWindow is created, so reading `navigator.language` in the renderer is the
 * correct renderer-accessible view of the Electron system language.
 *
 * Rule: use Simplified Chinese only when the system language is Simplified Chinese;
 * everything else (incl. Traditional Chinese) defaults to English.
 */

export type AppLanguage = "en" | "zh";

/**
 * Matches Simplified Chinese locales. Traditional zh (e.g. zh-TW / zh-HK / zh-Hant)
 * and every non-Chinese locale fall through to English.
 *
 * The set approach (exact language tags) avoids treating "zh-TW"/"zh-Hant" as
 * Simplified, which a naive "starts with zh" prefix would do.
 */
const SIMPLIFIED_CHINESE_PATTERN = /^(zh|zh-cn|zh-sg|zh-hans)$/i;

export function isSimplifiedChinese(raw: unknown): boolean {
  if (typeof raw !== "string") return false;
  return SIMPLIFIED_CHINESE_PATTERN.test(raw.trim());
}

export interface LanguageSource {
  readonly navigator?: { readonly language?: string; readonly languages?: readonly string[] };
  readonly document?: { readonly documentElement?: { readonly lang?: string } };
}

/**
 * Resolves the app language from the Electron system locale.
 *
 * Electron note: when running as a desktop renderer, `navigator.language` is
 * populated from `app.getLocale()` (OS locale) at window creation time. The extra
 * sources are fallbacks so the same code degrades gracefully outside Electron.
 */
export function detectAppLanguage(source: LanguageSource = globalThis): AppLanguage {
  const candidates: string[] = [];
  const nav = source?.navigator;
  if (nav != null) {
    if (typeof nav.language === "string" && nav.language.length > 0) candidates.push(nav.language);
    if (Array.isArray(nav.languages)) {
      for (const entry of nav.languages) {
        if (typeof entry === "string" && entry.length > 0) candidates.push(entry);
      }
    }
  }
  const rootLang = source?.document?.documentElement?.lang;
  if (typeof rootLang === "string" && rootLang.length > 0) candidates.push(rootLang);
  for (const candidate of candidates) {
    if (isSimplifiedChinese(candidate)) return "zh";
  }
  return "en";
}

/** The resolved language for the current session, computed once at startup. */
export const appLanguage: AppLanguage = detectAppLanguage();

export const HTML_LANG: Record<AppLanguage, string> = {
  en: "en",
  zh: "zh-CN",
};