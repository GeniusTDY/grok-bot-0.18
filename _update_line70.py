import io

path = "/tmp/gbrw/tests/publication-packaging.test.mjs"
with io.open(path, "r", encoding="utf-8") as f:
    src = f.read()

old70 = (
    "  assert.match(mainEdge, /mode === \"local-docker\"\\) await startLocalDockerBox\\(settingsPath\\); else await stopLocalDockerBox\\(\\)/);\n"
)
new70 = (
    "  assert.match(mainEdge, /mode === \"local-docker\"\\s*\\)\\s*\\{[\\s\\S]*?startLocalDockerBox[\\s\\S]*?settingsPath[\\s\\S]*?\\}\\s*else \\{\\s*await stopOwnedLocalDocker\\(\\)/);\n"
)
assert old70 in src, "line 70 anchor not found"
src = src.replace(old70, new70, 1)
with io.open(path, "w", encoding="utf-8") as f:
    f.write(src)
print("OK: line 70 updated")