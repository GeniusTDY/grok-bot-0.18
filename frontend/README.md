# Renderer source

This directory contains the editable React/TypeScript renderer reconstruction.
It is built with Vite and selected by the default macOS package. The explicit
fidelity diagnostic path retains the checksum-pinned shipped renderer hydrated
by `npm run bootstrap` for comparison.

The small files under `manifests/` identify assets and reviewed semantic
boundaries. The upstream renderer itself is not tracked: `npm run bootstrap`
hydrates its checksum-pinned payload under ignored `src/app/dist`, and
`npm run frontend:recover` can create an ignored formatted copy for inspection.

Run the editable renderer checks from the repository root:

```sh
npm run typecheck
npm run frontend:build
```

Comments beginning with `@evidence` point to byte or symbol boundaries in the
bootstrapped 0.18.0 renderer. They are provenance annotations, not imports.
