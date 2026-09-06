import io

path = "/tmp/gbrw/tests/publication-packaging.test.mjs"
with io.open(path, "r", encoding="utf-8") as f:
    src = f.read()

old72 = (
    "  assert.match(localDocker, /public\\.ecr\\.aws\\/k0i0n2g5\\/cursorenvironments\\/universal:sand-box-latest/);\n"
)
new72 = (
    "  assert.match(localDocker, /public\\.ecr\\.aws\\/k0i0n2g5\\/cursorenvironments\\/universal@sha256:[0-9a-f]{64}/);\n"
)
assert old72 in src, "line 72 anchor not found"
src = src.replace(old72, new72, 1)
with io.open(path, "w", encoding="utf-8") as f:
    f.write(src)
print("OK: line 72 updated")