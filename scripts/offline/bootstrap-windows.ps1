<#
.SYNOPSIS
  Stage the offline Windows toolchain WITHOUT a system Node.js.

.DESCRIPTION
  Runs on a networked Windows prep machine that may have NO Node.js installed.
  It only needs the tools that ship with Windows (PowerShell, Invoke-WebRequest,
  Get-FileHash and either tar.exe or Expand-Archive).

  It does three things:
    1. Download and sha256-verify the pinned vendored Node from nodejs.org.
    2. Use that vendored Node to `npm ci` + `postinstall`, building node_modules
       in this repository, then snapshot it into offline/cache.
    3. Verify the official 0.18.0 Setup.exe is materialized in research-archives
       so bootstrap:windows never downloads on the air-gapped target.

  After this, copy the repository (including offline/ and research-archives/)
  to the offline machine and run offline-build.cmd there.

.PARAMETER NodeVersion
  Node version to vendor. Defaults to the pinned minimum (26.5.0). Override with
  -NodeVersion or the OFFLINE_NODE_VERSION environment variable.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/offline/bootstrap-windows.ps1
#>
[CmdletBinding()]
param(
    [string]$NodeVersion = ''
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version 3

if ([string]::IsNullOrWhiteSpace($NodeVersion)) {
    if ($env:OFFLINE_NODE_VERSION -match '^26\.5\.\d+$') { $NodeVersion = $env:OFFLINE_NODE_VERSION }
    else { $NodeVersion = '26.5.0' }
}

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$offlineRoot = Join-Path $repoRoot 'offline'
$nodeRoot = Join-Path $offlineRoot 'vendor\node\win32-x64'
$nodeExe = Join-Path $nodeRoot 'node.exe'
$nodeZip = Join-Path $offlineRoot 'vendor\.stage\node.zip'
$nodeExtract = Join-Path $offlineRoot 'vendor\.stage\extract'
$nodeNpmCli = Join-Path $nodeRoot 'node_modules\npm\bin\npm-cli.js'
$distBase = "https://nodejs.org/dist/v$NodeVersion"
$zipName = "node-v$NodeVersion-win-x64.zip"
$zipUrl = "$distBase/$zipName"
$shasumsUrl = "$distBase/SHASUMS256.txt"

function Write-Step([string]$Message) { Write-Host "[bootstrap-windows] $Message" }

# ---------------------------------------------------------------------------
# 1. Download + verify vendored Node (no Node required)
# ---------------------------------------------------------------------------
if (-not (Test-Path $nodeExe)) {
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $nodeZip) | Out-Null
    New-Item -ItemType Directory -Force -Path $nodeExtract | Out-Null

    Write-Step "downloading $zipUrl"
    Invoke-WebRequest -Uri $zipUrl -OutFile $nodeZip -UseBasicParsing

    Write-Step "downloading SHASUMS256.txt"
    $shasumsTxt = (Invoke-WebRequest -Uri $shasumsUrl -UseBasicParsing).Content

    $expected = ($shasumsTxt -split "`n") |
        Where-Object { $_ -match "  $([regex]::Escape($zipName))$" } |
        ForEach-Object { ($_ -split '\s+')[0] }
    if (-not $expected) { throw "No SHASUMS256 entry for $zipName" }

    $actual = (Get-FileHash -Path $nodeZip -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($actual -ne $expected.ToLowerInvariant()) {
        throw "sha256 mismatch for $zipName`nexpected $expected`nactual   $actual"
    }
    Write-Step "vendored Node sha256 verified"

    # Prefer bsdtar (fast, ships with Windows 10+); fall back to Expand-Archive.
    if (Get-Command tar.exe -ErrorAction SilentlyContinue) {
        tar -xf $nodeZip -C $nodeExtract
    }
    else {
        Expand-Archive -LiteralPath $nodeZip -DestinationPath $nodeExtract -Force
    }
    if ($LASTEXITCODE -ne 0) { throw "failed to extract $zipName" }

    $inner = Join-Path $nodeExtract "node-v$NodeVersion-win-x64"
    if (-not (Test-Path (Join-Path $inner 'node.exe'))) { throw "unexpected zip layout: $inner" }

    New-Item -ItemType Directory -Force -Path $nodeRoot | Out-Null
    Get-ChildItem -Path $inner | Move-Item -Destination $nodeRoot -Force
    Remove-Item -LiteralPath $nodeZip -Force
    Remove-Item -LiteralPath $nodeExtract -Recurse -Force

    Write-Step "vendored Node ready: $nodeExe"
}
else {
    Write-Step "vendored Node already present: $nodeExe"
}

if (-not (Test-Path $nodeNpmCli)) { throw "vendored npm-cli.js missing at $nodeNpmCli" }

# ---------------------------------------------------------------------------
# 2. Build + snapshot node_modules using the vendored Node
# ---------------------------------------------------------------------------
if (-not (Test-Path (Join-Path $repoRoot 'node_modules\esbuild'))) {
    Write-Step "installing node_modules via vendored Node (needs network)"
    & $nodeExe "$PSScriptRoot\fetch-vendor.mjs" modules --install --offline-root $offlineRoot
    if ($LASTEXITCODE -ne 0) { throw "npm ci + postinstall via vendored Node failed" }
    Write-Step "node_modules built and snapshotted"
}
else {
    Write-Step "node_modules already present; ensuring snapshot"
    & $nodeExe "$PSScriptRoot\fetch-vendor.mjs" modules --offline-root $offlineRoot
    if ($LASTEXITCODE -ne 0) { throw "snapshot failed" }
}

# ---------------------------------------------------------------------------
# 3. Verify the official Setup.exe is materialized for the air-gapped target
# ---------------------------------------------------------------------------
$archived = Join-Path $repoRoot 'research-archives\original\0.18.0\windows-x64\Grok_Bot_0.18.0_Setup.exe'
if (-not (Test-Path $archived)) {
    Write-Warning "Official Setup.exe not materialized at:`n  $archived`nRun 'git lfs pull' so bootstrap:windows never downloads on the offline target."
}
else {
    $bytes = (Get-Item $archived).Length
    Write-Step "official Setup.exe present: $($bytes) bytes"
}

Write-Step "prep complete. Copy the repository (including offline/ and research-archives/) to the offline machine, then run offline-build.cmd."