import { execFile } from "node:child_process";
import { lstat } from "node:fs/promises";
import { win32 as windowsPath } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export function windowsPowerShellEnvironment(source: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  return Object.fromEntries(Object.entries(source).filter(([key]) => key.toLowerCase() !== "psmodulepath"));
}

export const WINDOWS_PRIVATE_PATH_SIDS = Object.freeze([
  "CURRENT_USER",
  "S-1-5-18",
  "S-1-5-32-544",
] as const);

export interface WindowsPrivatePathAclResult {
  readonly target: string;
  readonly inherited: false;
  readonly accessRuleCount: 3;
  readonly principals: readonly string[];
}

export type WindowsPrivatePathPowerShellRunner = (
  executable: string,
  args: readonly string[],
) => Promise<{ readonly stdout: string; readonly stderr?: string }>;

const defaultPowerShellRunner: WindowsPrivatePathPowerShellRunner = async (executable, args) => {
  const result = await execFileAsync(executable, [...args], {
    encoding: "utf8",
    maxBuffer: 1024 * 1024,
    timeout: 15_000,
    windowsHide: true,
    env: windowsPowerShellEnvironment(),
  });
  return { stdout: result.stdout, stderr: result.stderr };
};

function encodedPowerShell(script: string): string {
  return Buffer.from(script, "utf16le").toString("base64");
}

function windowsPowerShellExecutable(): string {
  const systemRoot = process.env.SystemRoot ?? process.env.SYSTEMROOT ?? process.env.WINDIR ?? "C:\\Windows";
  return windowsPath.join(systemRoot, "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
}

function aclScript(target: string): string {
  const encodedTarget = Buffer.from(target, "utf16le").toString("base64");
  return String.raw`
$ErrorActionPreference = 'Stop'
$env:PSModulePath = [IO.Path]::Combine($PSHOME, 'Modules')
Import-Module Microsoft.PowerShell.Management, Microsoft.PowerShell.Security, Microsoft.PowerShell.Utility -ErrorAction Stop
$Target = [Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedTarget}'))
$Item = Get-Item -LiteralPath $Target -Force
if (($Item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0) { throw 'Refusing to secure a reparse point.' }
if (-not ($Item.PSIsContainer -or ($Item -is [IO.FileInfo]))) { throw 'Target must be a regular file or directory.' }
$Current = [Security.Principal.WindowsIdentity]::GetCurrent().User
$System = [Security.Principal.SecurityIdentifier]::new('S-1-5-18')
$Administrators = [Security.Principal.SecurityIdentifier]::new('S-1-5-32-544')
$Acl = Get-Acl -LiteralPath $Target
$Acl.SetAccessRuleProtection($true, $false)
foreach ($Rule in @($Acl.Access)) { [void]$Acl.RemoveAccessRuleSpecific($Rule) }
$Inheritance = if ($Item.PSIsContainer) { [Security.AccessControl.InheritanceFlags]'ContainerInherit, ObjectInherit' } else { [Security.AccessControl.InheritanceFlags]::None }
foreach ($Sid in @($Current, $System, $Administrators)) {
  $Rule = [Security.AccessControl.FileSystemAccessRule]::new($Sid, [Security.AccessControl.FileSystemRights]::FullControl, $Inheritance, [Security.AccessControl.PropagationFlags]::None, [Security.AccessControl.AccessControlType]::Allow)
  [void]$Acl.AddAccessRule($Rule)
}
Set-Acl -LiteralPath $Target -AclObject $Acl
$Verified = Get-Acl -LiteralPath $Target
$Rules = @($Verified.Access)
if (-not $Verified.AreAccessRulesProtected) { throw 'ACL inheritance is still enabled.' }
if ($Rules.Count -ne 3 -or @($Rules | Where-Object { $_.IsInherited -or $_.AccessControlType -ne [Security.AccessControl.AccessControlType]::Allow -or (($_.FileSystemRights -band [Security.AccessControl.FileSystemRights]::FullControl) -ne [Security.AccessControl.FileSystemRights]::FullControl) }).Count -ne 0) { throw 'ACL verification failed.' }
$Expected = @($Current.Value, $System.Value, $Administrators.Value) | Sort-Object
$Actual = @($Rules | ForEach-Object { $_.IdentityReference.Translate([Security.Principal.SecurityIdentifier]).Value }) | Sort-Object
if ((Compare-Object $Expected $Actual).Count -ne 0) { throw 'ACL principal verification failed.' }
@{ target = $Item.FullName; inherited = $false; accessRuleCount = 3; principals = $Actual } | ConvertTo-Json -Compress
`;
}

/**
 * Replace a Windows file/directory DACL with an explicit allow-list for the
 * current user, SYSTEM, and built-in Administrators. This is the Windows
 * security boundary for credential material; POSIX mode bits are not treated
 * as a Windows ACL guarantee.
 */
export async function hardenWindowsPrivatePath(
  target: string,
  options: {
    readonly platform?: NodeJS.Platform;
    readonly powershell?: WindowsPrivatePathPowerShellRunner;
  } = {},
): Promise<WindowsPrivatePathAclResult> {
  if ((options.platform ?? process.platform) !== "win32") throw new Error("Windows private-path ACLs require win32.");
  const state = await lstat(target);
  if (state.isSymbolicLink() || (!state.isFile() && !state.isDirectory())) throw new Error("Refusing to secure a link or special file.");
  const runner = options.powershell ?? defaultPowerShellRunner;
  const { stdout } = await runner(windowsPowerShellExecutable(), [
    "-NoLogo",
    "-NoProfile",
    "-NonInteractive",
    "-ExecutionPolicy",
    "Bypass",
    "-EncodedCommand",
    encodedPowerShell(aclScript(target)),
  ]);
  const parsed = JSON.parse(stdout.trim()) as Partial<WindowsPrivatePathAclResult>;
  if (parsed.inherited !== false || parsed.accessRuleCount !== 3 || !Array.isArray(parsed.principals) || parsed.principals.length !== 3) throw new Error("Windows private-path ACL verification returned an invalid result.");
  return parsed as WindowsPrivatePathAclResult;
}
