# Запуск демо на этом ПК (Windows). Правый клик → "Выполнить с PowerShell" или:
#   powershell -ExecutionPolicy Bypass -File scripts\start-demo.ps1

$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $Root

Write-Host "=== Дашборд РБ — демо-сервер на этом ПК ===" -ForegroundColor Cyan

if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "Установите Docker Desktop: https://www.docker.com/products/docker-desktop/" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path ".env")) {
    Copy-Item ".env.demo.example" ".env"
    Write-Host "Создан .env из .env.demo.example" -ForegroundColor Yellow
}

Write-Host "Сборка и запуск контейнеров (первый раз может занять несколько минут)..." -ForegroundColor Gray
docker compose -f docker-compose.yml -f docker-compose.demo.yml up -d --build

Write-Host "Миграции и демо-данные..." -ForegroundColor Gray
docker compose exec -T backend alembic upgrade head
docker compose exec -T backend python scripts/seed_data.py
docker compose exec -T backend python scripts/sync_oktmo_from_bdmo.py 2>$null

$lanIp = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notmatch "Loopback" -and $_.IPAddress -notmatch "^169" } | Select-Object -First 1).IPAddress

Write-Host ""
Write-Host "Локально:" -ForegroundColor Green
Write-Host "  http://localhost:8080          — дашборд (через Caddy)"
Write-Host "  http://localhost:8080/docs     — API Swagger"
if ($lanIp) {
    Write-Host "  http://${lanIp}:8080           — в локальной сети (Wi‑Fi)"
}
Write-Host ""
Write-Host "Логины: admin / admin12345  |  glava_ufa / district12345" -ForegroundColor Cyan
Write-Host ""
Write-Host "Публичная ссылка (интернет) — установите cloudflared и запустите:" -ForegroundColor Yellow
Write-Host "  winget install Cloudflare.cloudflared"
Write-Host "  powershell -ExecutionPolicy Bypass -File scripts\start-tunnel.ps1"
Write-Host ""
Write-Host "Код на GitHub: https://github.com/konstantinoviceduard9-bit/bashkortostan-stats-dashboard" -ForegroundColor Gray
Write-Host "Страница-витрина (Pages): см. docs/DEMO_PC.md" -ForegroundColor Gray
