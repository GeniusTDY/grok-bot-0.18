import io

path = "/tmp/gbrw/source/host/extensions/inference/provider-session.ts"
src = io.open(path, "r", encoding="utf-8").read()

# Locate current routedToolParameters function body and replace it with external's
start_marker = "function routedToolParameters(source: Loose): Loose | undefined {"
assert src.count(start_marker) == 1, "routedToolParameters start not found"
start = src.index(start_marker)
end_marker = "}\n\nfunction codexTools"
assert end_marker in src, "routedToolParameters end not found"
end = src.index(end_marker) + 1  # include closing brace newline; end_marker starts at '\n'

replacement = '''function routedToolParameters(source: Loose): unknown {
  const value = source.inputSchema ?? source.parameters;
  if (typeof value === "object" && value != null && !Array.isArray(value) && "jsonSchema" in value) {
    return (value as Loose).jsonSchema;
  }
  return value;
}
'''
src = src[:start] + replacement + src[end:]

io.open(path, "w", encoding="utf-8").write(src)
print("routedToolParameters replaced OK")