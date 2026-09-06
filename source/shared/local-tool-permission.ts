export const SAND_LOCAL_TOOL_PERMISSIONS = ["always", "ask", "never"] as const;
export type SandLocalToolPermission = (typeof SAND_LOCAL_TOOL_PERMISSIONS)[number];
export const SAND_DEFAULT_LOCAL_TOOL_PERMISSION: SandLocalToolPermission = "ask";
export const SAND_LOCAL_TOOL_ACTIONS = ["run-command", "send-input", "read-file", "list-directory", "write-file"] as const;
export type SandLocalToolAction = (typeof SAND_LOCAL_TOOL_ACTIONS)[number];

export function isSandLocalToolAction(value: unknown): value is SandLocalToolAction {
  return typeof value === "string" && (SAND_LOCAL_TOOL_ACTIONS as readonly string[]).includes(value);
}

export function isSandLocalToolPermission(value: unknown): value is SandLocalToolPermission {
  return typeof value === "string" && (SAND_LOCAL_TOOL_PERMISSIONS as readonly string[]).includes(value);
}

export function normalizeSandLocalToolPermission(value: unknown): SandLocalToolPermission {
  return isSandLocalToolPermission(value) ? value : SAND_DEFAULT_LOCAL_TOOL_PERMISSION;
}

export const SAND_LOCAL_TOOL_PERMISSION_RANK: Readonly<Record<SandLocalToolPermission, number>> = { never: 0, ask: 1, always: 2 };

export function resolveSandLocalToolPermission(choice: SandLocalToolPermission, adminCeiling?: SandLocalToolPermission): SandLocalToolPermission {
  if (adminCeiling === undefined) return choice;
  return SAND_LOCAL_TOOL_PERMISSION_RANK[choice] <= SAND_LOCAL_TOOL_PERMISSION_RANK[adminCeiling] ? choice : adminCeiling;
}
