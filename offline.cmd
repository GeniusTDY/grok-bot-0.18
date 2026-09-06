@echo off
setlocal enableextensions
rem ---------------------------------------------------------------------------
rem Air-gapped build entry point. Runs the reconstructed build entirely on a
rem vendored Node without needing Node.js, npm, or any network access on this
rem machine. Requires that `offline/` was staged first by
rem   node scripts/offline/fetch-vendor.mjs stage
rem on a networked preparation machine (see README "Offline build" section).
rem ---------------------------------------------------------------------------
set "OFFLINE_ROOT=%~dp0offline"
set "NODE_DIR=%OFFLINE_ROOT%\vendor\node\win32-x64"
set "VENDOR_NODE=%NODE_DIR%\node.exe"
set "VENDOR_NPM=%NODE_DIR%\node_modules\npm\bin\npm-cli.js"

if not exist "%VENDOR_NODE%" (
  echo [offline] vendored Node missing at %VENDOR_NODE%
  echo [offline] Stage the toolchain on a networked machine first:
  echo [offline]   node scripts/offline/fetch-vendor.mjs stage
  exit /b 1
)
if not exist "%VENDOR_NPM%" (
  echo [offline] vendored npm-cli missing at %VENDOR_NPM%
  exit /b 1
)

rem Put the vendored Node first on PATH so nested `npm run ...`, `npx`, and any
rem `node` shell invocation inside the build all resolve to the offline copy.
set "PATH=%NODE_DIR%;%PATH%"

if /i "%~1"=="restore" goto :restore
"%VENDOR_NODE%" "%VENDOR_NPM%" %*
exit /b %errorlevel%

:restore
if not exist "%OFFLINE_ROOT%\cache\node_modules-snapshot.tar.gz" (
  echo [offline] node_modules snapshot missing under %OFFLINE_ROOT%\cache
  exit /b 1
)
tar -xzf "%OFFLINE_ROOT%\cache\node_modules-snapshot.tar.gz" -C "%~dp0."
echo [offline] restored node_modules into %~dp0node_modules
if exist "%OFFLINE_ROOT%\cache\tree-sitter-node-cache.tar.gz" (
  tar -xzf "%OFFLINE_ROOT%\cache\tree-sitter-node-cache.tar.gz" -C "%~dp0."
  echo [offline] restored native tree-sitter cache into %~dp0.cache\tree-sitter-node
) else (
  echo [offline] WARNING: tree-sitter-node-cache.tar.gz missing - native build may need MSVC toolchain
)
exit /b 0