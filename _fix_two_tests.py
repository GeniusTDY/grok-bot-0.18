import io

# --- Fix 1: main.ts conditional hardware acceleration ---
main_path = "/tmp/gbrw/source/electron-main/main.ts"
with io.open(main_path, "r", encoding="utf-8") as f:
    main = f.read()

old_main = (
    "  deps.app.disableHardwareAcceleration();\n"
    "  deps.app.commandLine.appendSwitch(\"no-sandbox\");\n"
    "  deps.app.commandLine.appendSwitch(\"disable-gpu\");\n"
)
new_main = (
    "  const disableHardwareAcceleration = env.SAND_DISABLE_HARDWARE_ACCELERATION === \"1\"\n"
    "    || (platform !== \"win32\" && env.SAND_ENABLE_HARDWARE_ACCELERATION !== \"1\");\n"
    "  if (disableHardwareAcceleration) {\n"
    "    deps.app.disableHardwareAcceleration();\n"
    "    deps.app.commandLine.appendSwitch(\"disable-gpu\");\n"
    "  }\n"
)
assert old_main in main, "main.ts anchor not found"
main = main.replace(old_main, new_main, 1)
with io.open(main_path, "w", encoding="utf-8") as f:
    f.write(main)

# --- Fix 2: local-docker CODEX_HOME-aware codex mount ---
docker_path = "/tmp/gbrw/source/electron-main/box/local-docker-host-connector.ts"
with io.open(docker_path, "r", encoding="utf-8") as f:
    docker = f.read()

old_fn = (
    "async function localAuthMountArguments(provider: LocalInferenceAuthProvider): Promise<string[]> {\n"
    "  const [sourceDirectory, destination] = provider === \"codex\"\n"
    "    ? [\".codex\", \"/root/.codex\"] as const\n"
    "    : [\".claude\", \"/root/.claude\"] as const;\n"
    "  const source = join(homedir(), sourceDirectory);\n"
    "  return await isDirectory(source)\n"
    "    ? [\"--mount\", `type=bind,src=${source},dst=${destination},readonly`]\n"
    "    : [];\n"
    "}\n"
)
new_fn = (
    "async function localAuthMountArguments(provider: LocalInferenceAuthProvider): Promise<string[]> {\n"
    "  const codexHome = process.env.CODEX_HOME?.trim() || join(homedir(), \".codex\");\n"
    "  const [source, destination] = provider === \"codex\"\n"
    "    ? [codexHome, \"/root/.codex\"] as const\n"
    "    : [join(homedir(), \".claude\"), \"/root/.claude\"] as const;\n"
    "  return await isDirectory(source)\n"
    "    ? [\"--mount\", `type=bind,src=${source},dst=${destination},readonly`]\n"
    "    : [];\n"
    "}\n"
)
assert old_fn in docker, "local-docker fn anchor not found"
docker = docker.replace(old_fn, new_fn, 1)
with io.open(docker_path, "w", encoding="utf-8") as f:
    f.write(docker)

print("OK: both files patched")