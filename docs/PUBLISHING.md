# Publishing checklist

The `codex/clean` branch removes generated recovery material from its tree, but
its parent commit still contains that material. Do not push the branch and
assume the deleted files are absent from Git history.

Create a new repository from an archive of the clean commit:

```sh
git archive --format=tar codex/clean | tar -xf - -C /path/to/empty-export
cd /path/to/empty-export
git init
git add .
git commit -m "Initial reconstructed source import"
```

The preserved installers use Git LFS. Install LFS before the initial `git add`,
then push the objects after adding the remote:

```sh
git lfs install
git add .
git commit -m "Initial reconstructed source import"
git push -u origin main
git lfs push --all origin
```

If the hosting service offers downloadable source archives, enable its option
to include Git LFS objects in those archives; otherwise generated ZIP/tarball
downloads may contain only LFS pointer files.

Before adding a public remote:

1. Run `npm run publication:check` on the committed clean branch. It performs
   the archive/init/add flow above and requires the new index to have the exact
   same Git tree. Run `npm run docker:image:verify` to authenticate anonymously
   to public ECR and prove the pinned manifest, config blob, linux/amd64
   platform, and sandbox entrypoint before creating a release.
2. Run `npm ci`, `npm run bootstrap`, `npm run check`, `npm run package`, and
   `npm run verify` from a fresh clone/export.
3. Confirm `git status --ignored` shows no generated payload selected for Git.
4. Run `git lfs ls-files` and verify both preserved 0.18.0 installers appear.
5. Scan the exported tree and full new history for credentials and absolute
   machine paths.
6. Review `NOTICE.md` and obtain an independent rights review. No upstream
   license is supplied by this repository.
7. Decide on a license only for material you have authority to license; do not
   imply that license covers the upstream application or trademarks.
8. Give every Windows binary a new reconstructed package version. GitHub exposes
   an unpublished draft only to users with push access, and the draft itself is
   not immutable. The workflow enforces an append-only exact-resume policy: a
   rerun may resume only the exact unpublished draft for the same commit,
   byte-check existing assets, and upload missing assets, but never replace an asset.
   The validated files upload directly from the Windows runner, without an
   Actions artifact handoff. The commit-derived ZIP and manifest, deterministic
   SBOM, and checksum must reproduce byte-for-byte across two clean bundle
   attempts. The SBOM omits its optional generation serial and timestamp,
   records the ZIP SHA-256, production npm dependencies, and Electron framework,
   and does not claim complete native or recovered-upstream byte coverage.
   Source commit time belongs only in the manifest.
   Never publish a partial draft; a rerun preflights every existing asset before
   adding a missing one. It may retire only GitHub's empty zero-byte upload
   starter after that preflight, and fails closed without deleting or
   overwriting any nonempty asset if existing bytes differ.
9. Confirm the package version, portable manifest `reconstructedVersion`,
   workflow `RELEASE_VERSION`, ZIP filename, and release tag all agree before
   distributing the push-access-visible draft.
