/**
 * Deep translation engine for the reconstructed renderer.
 *
 * React renders the vast majority of the UI, and several byte-injected surfaces
 * (think the Router settings panel) are not directly localizable in source. Rather
 * than editing every surface, this module translates the live DOM: every visible
 * text node (and select presentational attributes) whose content exactly matches a
 * canonical English phrase is replaced with its Simplified Chinese equivalent.
 *
 * Guardrails:
 *   - Only runs when the Electron system language is Simplified Chinese.
 *   - Only exact dictionary matches are rewritten, which keeps user-authored
 *     transcript content untouched.
 *   - Nodes inside editable regions and code blocks are skipped.
 *   - A MutationObserver keeps dynamically mounted surfaces in sync.
 *   - Translation is idempotent (Simplified Chinese never matches the English
 *     dictionary), so re-running on mutations is safe and stable.
 */
import { appLanguage } from "./locale";
import { ZH_TRANSLATIONS } from "./dictionary";

const TEXT_ATTRIBUTES = ["aria-label", "placeholder", "title"] as const;

function withinSkippedRegion(el: Element | null): boolean {
  let current: Element | null = el;
  while (current != null) {
    if (current instanceof HTMLElement) {
      if (current.isContentEditable) return true;
      const tag = current.tagName;
      if (tag === "CODE" || tag === "PRE" || tag === "KBD" || tag === "SAMP") return true;
      if (tag === "INPUT" || tag === "TEXTAREA") return true;
    }
    current = current.parentElement;
  }
  return false;
}

function translateTextNode(node: Text): void {
  const parent = node.parentElement;
  if (parent == null || withinSkippedRegion(parent)) return;
  const translated = ZH_TRANSLATIONS[node.data];
  if (translated == null || translated === node.data) return;
  node.data = translated;
}

function translateAttributes(element: Element): void {
  if (withinSkippedRegion(element)) return;
  for (const attribute of TEXT_ATTRIBUTES) {
    const value = element.getAttribute(attribute);
    if (value == null || value.length === 0) continue;
    const translated = ZH_TRANSLATIONS[value];
    if (translated != null && translated !== value) {
      element.setAttribute(attribute, translated);
    }
  }
}

export function translateSubtree(root: Node): void {
  if (appLanguage !== "zh") return;
  if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root as Element);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let cursor: Node | null = walker.nextNode();
  while (cursor != null) {
    textNodes.push(cursor as Text);
    cursor = walker.nextNode();
  }
  for (const textNode of textNodes) translateTextNode(textNode);
  if (root.nodeType === Node.ELEMENT_NODE) {
    for (const child of Array.from((root as Element).querySelectorAll("*"))) {
      translateAttributes(child as Element);
    }
  }
}

export interface DeepTranslationController {
  readonly language: "en" | "zh";
  readonly active: boolean;
  readonly disposal: () => void;
}

/**
 * Starts deep translation on `root`, re-translating as the renderer mounts new
 * surfaces. No-op (aside from setting the document language) when the Electron
 * system language is not Simplified Chinese.
 */
export function startDeepTranslation(root: HTMLElement): DeepTranslationController {
  const enabled = appLanguage === "zh";
  if (!enabled) {
    return { language: appLanguage, active: false, disposal: () => {} };
  }

  let debounceHandle = 0;
  const flush = (): void => {
    debounceHandle = 0;
    translateSubtree(root);
  };
  const schedule = (): void => {
    if (debounceHandle !== 0) window.clearTimeout(debounceHandle);
    debounceHandle = window.setTimeout(flush, 60);
  };

  flush();

  const observer = typeof MutationObserver === "function" ? new MutationObserver(schedule) : null;
  if (observer != null) {
    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: Array.from(TEXT_ATTRIBUTES),
    });
  }

  return {
    language: appLanguage,
    active: true,
    disposal: () => {
      if (debounceHandle !== 0) window.clearTimeout(debounceHandle);
      observer?.disconnect();
    },
  };
}