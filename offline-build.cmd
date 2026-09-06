@echo off
setlocal enableextensions enabledelayedexpansion
rem ---------------------------------------------------------------------------
rem One-shot air-gapped Windows build for a CLEAN offline machine that has no
rem Node.js and no network. The only thing you do on the target is run this
rem script.
rem
rem One-time staging (on a networked prep machine):
rem     npm ci && npm run postinstall
rem     node scripts/offline/fetch-vendor.mjs stage
rem
rem Then copy the whole repository (including offline/ and the real
rem research-archives/) to the target. On the target, run this script.
rem ---------------------------------------------------------------------------
set "ROOT=%~dp0"

if not exist "%ROOT%offline\vendor\node\win32-x64\node.exe" (
  echo [offline-build] vendored Node missing.
  echo [offline-build] Stage it on a networked machine first:
  echo [offline-build]   node scripts/offline/fetch-vendor.mjs stage
  exit /b 1
)

if not exist "%ROOT%node_modules\esbuild" (
  echo [offline-build] node_modules not present - restoring from snapshot...
  call "%ROOT%offline.cmd" restore
  if errorlevel 1 (
    echo [offline-build] failed to restore node_modules - was offline\cache staged?
    exit /b 1
  )
)

echo [offline-build] step 1/3: bootstrap:windows (extract official Setup via vendored Node)
call "%ROOT%offline.cmd" run bootstrap:windows
if errorlevel 1 goto :fail

echo [offline-build] step 2/3: package:windows
call "%ROOT%offline.cmd" run package:windows
if errorlevel 1 goto :fail

echo [offline-build] step 3/3: verify:windows
call "%ROOT%offline.cmd" run verify:windows
if errorlevel 1 goto :fail

echo.
echo [offline-build] done. Output:
echo   "%ROOT%dist\Grok Bot 0.18 Reconstructed-win32-x64\"
exit /b 0

:fail
echo [offline-build] build failed at the last step.
exit /b 1