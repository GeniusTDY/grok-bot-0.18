# Provenance

The reconstruction is based on the public macOS arm64 release artifact:

- Product: Grok Bot
- Version: 0.18.0
- Upstream bundle ID: `com.anysphere.sand`
- Electron framework: 42.1.0
- DMG URL: `https://downloads.cursor.com/grokbot/stable/darwin-arm64/0.18.0/Grok_Bot_0.18.0.dmg`
- DMG SHA-256: `a253ccd8aab01e083f9812a0264354c5034d8ba7f0610bbb557e82ae77d203eb`
- Original `app.asar` SHA-256: `6665408168466f9cacc6087e917890c17f59d2e2e9c2404a5c4a59ad79c1de58`

The repository preserves the original macOS artifact above and the matching
Windows x64 installer through Git LFS. The Windows artifact identity is:

- Installer URL: `https://downloads.cursor.com/grokbot/stable/win32-x64/0.18.0/Grok_Bot_0.18.0_Setup.exe`
- Installer bytes: `125825552`
- Installer SHA-256: `464079a15ef5fa8b61ccea8fffcc78f63cfcf6df65fb0ad5e725d8b95f7e437e`
- Windows `app.asar` SHA-256: `38e85c0e5042c0257db7925e1e55709d6d155d90d92fe26ad654127d509766e0`
- Extractor: `7zip-bin@5.2.0`, Windows x64 executable SHA-256 `b0cfdeaf429f5cc53f85123dd8f5a5feb92c19d31aa34df257edf9a26be05f95`
- Preservation manifest: `research-archives/original/0.18.0/artifacts.json`

Windows bootstrap validates the exact size/hash before extraction and never
executes the NSIS carrier. The extracted application identity, ASAR hash,
unpacked runtime manifest (`win32`/`x64`), Electron executable, WebAuthn signer,
and each `.node` module are verified before the runtime may be cached. The
resulting portable directory is an unsigned reconstruction, is not eligible for
automatic publication, and does not claim that a retained upstream executable
signature covers the replaced application resources.

The original application was Developer ID signed and notarized by Anysphere Incorporated. Reconstructed builds are intentionally given a different bundle ID and only ad-hoc signed; they do not retain or claim the upstream signature.

The shipped renderer contained optimized production bundles, not the authored
frontend source or source maps. The readable `frontend/` tree is therefore a
partial evidence-backed reconstruction, while packaged builds retain the pinned
renderer and apply only a narrow, hash-recorded settings transform.

No upstream source-code license is implied. Do not present reconstructed
material as original source or an official build, and complete an independent
rights review before public redistribution.

## Evidence-only reconstruction rule

The immutable release is the product specification. Recovered source may express
only behavior supported by at least one inspectable artifact anchor: emitted code
or source-path markers, extracted capsules/source maps, shipped strings/assets/CSS,
renderer DOM signatures, IPC/RPC contracts, or repeatable observation of the
shipped runtime.

This rule is especially strict for the renderer. Do not invent or redesign a
screen, route, control, label, selector, state, or interaction to fill an evidence
gap. A clean abstraction or test seam is acceptable only when it preserves
artifact-derived semantics and does not add product behavior. When evidence is
incomplete, record the uncertainty and leave the feature unmapped or
evidence-only instead of guessing.

Every UI-facing recovery must identify its artifact anchor in its evidence
catalog, focused test, or coverage note. Passing typecheck/build alone is not
proof of provenance; speculative behavior is a release-blocking defect.
