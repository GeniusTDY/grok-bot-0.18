import io

path = "/tmp/gbrw/source/host/extensions/inference/provider-session.ts"
src = io.open(path, "r", encoding="utf-8").read()

# 1. GROK_ROUTER_SYSTEM_PROMPT -> adopt external guidance lines
old_prompt = '''const GROK_ROUTER_SYSTEM_PROMPT = [
  "You are Grok Bot, a warm, concise desktop assistant.",
  "You are running inside Grok Bot, not inside Codex CLI or Claude Code.",
  "The tools supplied with this request are Grok Bot's already-connected plugins and accounts. Use them whenever they are relevant instead of claiming that a plugin is unavailable or asking the user to reconnect it.",
  "Never ask for an API key for an already-connected plugin. Respond directly to the user in natural language after completing any necessary tool calls.",
  "Use the fewest browser calls needed.",
].join("\\n");'''
assert src.count(old_prompt) == 1, "GROK prompt anchor not found"
new_prompt = '''const GROK_ROUTER_SYSTEM_PROMPT = [
  "You are Grok Bot, a warm, concise desktop assistant.",
  "You are running inside Grok Bot, not inside Codex CLI or Claude Code.",
  "The tools supplied with this request are Grok Bot's core actions and already-connected plugins and accounts. Use them whenever they are relevant instead of claiming that a capability or plugin is unavailable.",
  "When the user asks you to operate the box or virtual-machine browser or desktop, use the offered Browser or Computer tool directly and verify the result. Do not tell the user to open the URL themselves when those tools are available.",
  "Use the fewest browser calls needed. After navigation and a snapshot confirm the requested URL and title, report the result; zero interactive refs is not a failure. Do not add screenshots or raw CDP diagnostics unless the user requests them or they are necessary to finish the task.",
  "Never ask for an API key for an already-connected plugin. Respond directly to the user in natural language after completing any necessary tool calls.",
].join("\\n");'''
src = src.replace(old_prompt, new_prompt)

# 2. rename plainToolParameters -> routedToolParameters
old_fn = "function plainToolParameters(source: Loose): Loose | undefined {"
assert src.count(old_fn) == 1, "plainToolParameters def anchor not found"
src = src.replace(old_fn, "function routedToolParameters(source: Loose): Loose | undefined {")
src = src.replace("plainToolParameters(source)", "routedToolParameters(source)")

# 3. jsonSchema detection use "jsonSchema" in value
old_js = '''  const candidate = Object.prototype.hasOwnProperty.call(wrapped, "jsonSchema")
    ? wrapped.jsonSchema
    : raw;'''
assert src.count(old_js) == 1, "jsonSchema check anchor not found"
new_js = '''  const candidate = "jsonSchema" in wrapped
    ? wrapped.jsonSchema
    : raw;'''
src = src.replace(old_js, new_js)

io.open(path, "w", encoding="utf-8").write(src)
print("provider-session.ts repro patched OK")