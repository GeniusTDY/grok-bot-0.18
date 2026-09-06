import io

path = "/tmp/gbrw/source/host/host-runner-composition.ts"
src = io.open(path, "r", encoding="utf-8").read()

old = """        isSubagentRunner: identity.isSubagentRunner,
        isSharedRoomRunner: !identity.isSubagentRunner && isSharedRoomTurn,
        isBoxScopedSubagent:
          identity.isComputerUseSubagent || identity.isBrowserUseSubagent,
        isComputerUseSubagent: identity.isComputerUseSubagent,
        isBrowserUseSubagent: identity.isBrowserUseSubagent,"""

assert src.count(old) == 1, "lazyToolHost block not found exactly once"

new = """        isSubagentRunner: identity.isSubagentRunner,
        isSharedRoomRunner: !identity.isSubagentRunner && isSharedRoomTurn,
        isBoxScopedSubagent: true,
        // Direct-provider turns run in the host process, so their Task
        // subagents cannot inherit the Windows Codex transport safely. Offer
        // the same browser/desktop drivers directly on the owning turn.
        isComputerUseSubagent: true,
        isBrowserUseSubagent: true,"""

src = src.replace(old, new)
io.open(path, "w", encoding="utf-8").write(src)
print("host-runner-composition.ts patched OK")