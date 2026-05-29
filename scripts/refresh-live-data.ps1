# Refresh live data from BDMO + opendata, export static JSON, build for GitHub Pages.
$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
$DbPath = Join-Path $Root "backend\data\native_demo.db"

$env:DATABASE_URL = "sqlite+aiosqlite:///$($DbPath.Replace('\','/'))"
$env:DEMO_MODE = "true"
$env:JWT_SECRET = "native-demo-secret"
$env:PYTHONPATH = Join-Path $Root "backend"
$env:TEMP = "D:\bashkortostan-build\tmp"
$env:TMP = $env:TEMP
New-Item -ItemType Directory -Force -Path $env:TEMP | Out-Null

Set-Location (Join-Path $Root "backend")

Write-Host "=== Sync OKTMO from BDMO ===" -ForegroundColor Cyan
python scripts/sync_oktmo_from_bdmo.py

$year = (Get-Date).Year
$period = "$year-01-01"
Write-Host "=== ETL period $period (BDMO picks latest available year) ===" -ForegroundColor Cyan
python scripts/run_connectors.py --period $period

Write-Host "=== Export static demo JSON ===" -ForegroundColor Cyan
Set-Location $Root
python scripts/export_static_demo.py

Write-Host "=== Build GitHub Pages on D: ===" -ForegroundColor Cyan
powershell -ExecutionPolicy Bypass -File (Join-Path $Root "scripts\build-on-d.ps1") -Pages

Write-Host "=== Live data refresh complete ===" -ForegroundColor Green
