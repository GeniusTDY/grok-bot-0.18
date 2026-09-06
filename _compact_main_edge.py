import io

path = "/tmp/gbrw/source/electron-main/main-edge.ts"
with io.open(path, "r", encoding="utf-8") as f:
    src = f.read()

old = (
    "      return {\n"
    "        provider,\n"
    "        usage: settings?.inferenceRouterUsage\n"
    "          ?? invoke(deps.settingsStore, \"getInferenceRouterUsage\")\n"
    "          ?? null,\n"
    "        local: getLocalInferenceCliStatus(),\n"
    "      };\n"
)
new = (
    "      return { provider, usage: settings?.inferenceRouterUsage ?? invoke(deps.settingsStore, \"getInferenceRouterUsage\") ?? null, local: getLocalInferenceCliStatus() };\n"
)
assert old in src, "main-edge return anchor not found"
src = src.replace(old, new, 1)
with io.open(path, "w", encoding="utf-8") as f:
    f.write(src)
print("OK: main-edge return compacted")