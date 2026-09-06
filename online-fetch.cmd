@echo off
setlocal enableextensions enabledelayedexpansion
rem ---------------------------------------------------------------------------
rem THE ONLY ONLINE STEP in the air-gapped pipeline.
rem
rem Runs ONCE on a networked Windows x64 machine to produce the Windows
rem node_modules snapshot. Everything else in the project is already offline:
rem   - vendored Windows Node  -> offline/vendor/node/win32-x64/
rem   - official Setup.exe     -> research-archives/original/0.18.0/windows-x64/
rem
rem It uses the already-bundled vendored Node (no system Node or npm needed),
rem so this machine only needs PowerShell-certified Node + an internet
rem connection to the package registry.
rem
rem After this completes, carry the whole repository (including offline/ and
rem research-archives/) to the air-gapped machine and run offline-build.cmd.
rem ---------------------------------------------------------------------------
set "ROOT=%~dp0"
set "NODE_DIR=%ROOT%offline\vendor\node\win32-x64"
set "VENDOR_NODE=%NODE_DIR%\node.exe"
set "VENDOR_NPM=%NODE_DIR%\node_modules\npm\bin\npm-cli.js"

if not exist "%VENDOR_NODE%" (
  echo [online-fetch] vendored Node missing at %VENDOR_NODE%
  echo [online-fetch] Run scripts\offline\bootstrap-windows.ps1 first to fetch it.
  exit /b 1
)
if not exist "%VENDOR_NPM%" (
  echo [online-fetch] vendored npm-cli missing at %VENDOR_NPM%
  exit /b 1
)

rem Put the vendored Node on PATH so npm's child scripts resolve the offline copy.
set "PATH=%NODE_DIR%;%PATH%"
pushd "%ROOT%"

echo [online-fetch] step 1/4: npm ci ^(downloads Windows deps - the ONLY online step^)
"%VENDOR_NODE%" "%VENDOR_NPM%" ci
if errorlevel 1 goto :fail

echo [online-fetch] step 2/4: postinstall ^(patches native deps^)
"%VENDOR_NODE%" "%VENDOR_NPM%" run postinstall
if errorlevel 1 goto :fail

echo [online-fetch] step 3/4: snapshot node_modules into offline\cache
"%VENDOR_NODE%" "%ROOT%scripts\offline\fetch-vendor.mjs" modules --offline-root "%ROOT%offline"
if errorlevel 1 goto :fail

echo [online-fetch] step 4/4: precompile native tree-sitter and snapshot its cache
"%VENDOR_NODE%" "%ROOT%scripts\build-tree-sitter-node.mjs"
if errorlevel 1 goto :fail
"%VENDOR_NODE%" "%ROOT%scripts\offline\fetch-vendor.mjs" nodedeps --offline-root "%ROOT%offline"
if errorlevel 1 goto :fail

popd
echo.
echo [online-fetch] done. Both offline snapshots are ready under offline\cache:
echo   offline\cache\node_modules-snapshot.tar.gz
echo   offline\cache\tree-sitter-node-cache.tar.gz
echo.
echo The native tree-sitter cache means air-gapped targets SKIP native
echo compilation - no MSVC toolchain and no network needed there.
echo Keep offline\cache in the project, then air-gapped machines run:
echo   offline-build.cmd
exit /b 0

:fail
popd
echo [online-fetch] failed.
exit /b 1