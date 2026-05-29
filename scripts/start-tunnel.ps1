$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $Root

# Публичный HTTPS-URL к демо на этом ПК (Cloudflare Quick Tunnel)
# Требует: docker compose demo уже запущен, cloudflared установлен

$ErrorActionPreference = "Stop"

if (-not (Get-Command cloudflared -ErrorAction SilentlyContinue)) {
    Write-Host "Установите cloudflared:" -ForegroundColor Red
    Write-Host "  winget install Cloudflare.cloudflared"
    exit 1
}

Write-Host "Туннель на http://localhost:8080 ..." -ForegroundColor Cyan
Write-Host "Скопируйте URL вида https://xxxx.trycloudflare.com и:" -ForegroundColor Yellow
Write-Host "  1) Откройте в браузере — это ваша демо-ссылка"
Write-Host "  2) Вставьте в README репозитория на GitHub (раздел Демо)"
Write-Host "  3) В Settings → Pages можно указать ссылку на docs/index.html"
Write-Host ""
Write-Host "Остановка: Ctrl+C" -ForegroundColor Gray

cloudflared tunnel --url http://localhost:8080
