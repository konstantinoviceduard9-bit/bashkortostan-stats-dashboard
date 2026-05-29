# Build frontend using disk D: for temp and npm cache (low space on C:).
$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
$BuildRoot = "D:\bashkortostan-build"
$Tmp = Join-Path $BuildRoot "tmp"
$NpmCache = Join-Path $BuildRoot "npm-cache"
$NextDir = Join-Path $BuildRoot "next-cache"

foreach ($dir in @($BuildRoot, $Tmp, $NpmCache, $NextDir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

$env:TEMP = $Tmp
$env:TMP = $Tmp
$env:NPM_CONFIG_CACHE = $NpmCache
$env:NEXT_TELEMETRY_DISABLED = "1"

Set-Location (Join-Path $Root "frontend")

if ($args -contains "-Pages") {
    $env:STATIC_GITHUB_PAGES = "true"
    Remove-Item Env:NEXT_PUBLIC_API_URL -ErrorAction SilentlyContinue
} else {
    Remove-Item Env:STATIC_GITHUB_PAGES -ErrorAction SilentlyContinue
    $env:NEXT_PUBLIC_API_URL = "/api/v1"
}

if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue }
$env:NEXT_CACHE_DIR = $NextDir

Write-Host "Building on D: (cache=$NpmCache)..." -ForegroundColor Cyan
npm run build
Write-Host "Done." -ForegroundColor Green
