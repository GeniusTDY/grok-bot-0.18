import io

# -------------------- Fix: sand-browser-tools.ts --------------------
tools_path = "/tmp/gbrw/source/host/runner/tools/sand-browser-tools.ts"
with io.open(tools_path, "r", encoding="utf-8") as f:
    tools = f.read()

# (1) add config object with literal `captureActionScreenshots: false`
anchor1 = "function validateArguments(\n  schema: BrowserToolSchema,\n"
insert1 = (
    "// GPU-accelerated Windows rendering makes a mid-action screenshot read as\n"
    "// a blank headless surface, so each action captures one only for the\n"
    "// explicit screenshot operation.\n"
    "const browserActionOptions = { captureActionScreenshots: false };\n"
    "\n"
) + anchor1
assert anchor1 in tools, "sand-browser-tools anchor1 not found"
tools = tools.replace(anchor1, insert1, 1)

# (2) make screenshot capture depend on captureActionScreenshots + op
old2 = (
    "          ...(spec.skipScreenshot === undefined\n"
    "            ? {}\n"
    "            : { skipScreenshot: spec.skipScreenshot }),\n"
)
new2 = (
    "          ...(browserActionOptions.captureActionScreenshots\n"
    "            ? (spec.skipScreenshot === undefined\n"
    "              ? {}\n"
    "              : { skipScreenshot: spec.skipScreenshot })\n"
    "            : { skipScreenshot: spec.op !== \"screenshot\" }),\n"
)
assert old2 in tools, "sand-browser-tools anchor2 not found"
tools = tools.replace(old2, new2, 1)

with io.open(tools_path, "w", encoding="utf-8") as f:
    f.write(tools)

# -------------------- Fix: provider-session.ts --------------------
session_path = "/tmp/gbrw/source/host/extensions/inference/provider-session.ts"
with io.open(session_path, "r", encoding="utf-8") as f:
    session = f.read()

old_prompt = (
    "  \"Never ask for an API key for an already-connected plugin. Respond directly to the user in natural language after completing any necessary tool calls.\",\n"
    "].join(\"\\n\");\n"
)
new_prompt = (
    "  \"Never ask for an API key for an already-connected plugin. Respond directly to the user in natural language after completing any necessary tool calls.\",\n"
    "  \"Use the fewest browser calls needed.\",\n"
    "].join(\"\\n\");\n"
)
assert old_prompt in session, "provider-session anchor not found"
session = session.replace(old_prompt, new_prompt, 1)

with io.open(session_path, "w", encoding="utf-8") as f:
    f.write(session)

print("OK: browser tools + provider session patched")