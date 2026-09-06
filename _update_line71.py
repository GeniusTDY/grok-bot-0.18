import io

path = "/tmp/gbrw/tests/publication-packaging.test.mjs"
with io.open(path, "r", encoding="utf-8") as f:
    src = f.read()

old71 = (
    "  assert.match(mainEdge, /setBoxRuntime\", mode === \"local-docker\" \\? \"remote\" : \"local-docker\"/);\n"
)
new71 = (
    "  assert.match(mainEdge, /invoke\\(deps\\.settingsStore, \"setBoxRuntime\", mode\\)/);\n"
)
assert old71 in src, "line 71 anchor not found"
src = src.replace(old71, new71, 1)
with io.open(path, "w", encoding="utf-8") as f:
    f.write(src)
print("OK: line 71 updated")