# Demo without Docker: SQLite + uvicorn + Next.js + Caddy + public tunnel
$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $Root

$Tools = Join-Path $Root "tools"
New-Item -ItemType Directory -Force -Path $Tools | Out-Null

function Ensure-Tool($name, $url, $outPath) {
    if (Test-Path $outPath) { return }
    Write-Host "Download $name..."
    Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
}

$CaddyZip = Join-Path $env:TEMP "caddy.zip"
$CaddyExe = Join-Path $Tools "caddy.exe"
if (-not (Test-Path $CaddyExe)) {
    Ensure-Tool "caddy" "https://github.com/caddyserver/caddy/releases/download/v2.9.1/caddy_2.9.1_windows_amd64.zip" $CaddyZip
    $unzipDir = Join-Path $Tools "caddy_unzip"
    Expand-Archive -Path $CaddyZip -DestinationPath $unzipDir -Force
    $extracted = Get-ChildItem $unzipDir -Filter "caddy.exe" -Recurse | Select-Object -First 1
    if ($extracted) { Copy-Item $extracted.FullName $CaddyExe -Force }
}

$Cloudflared = Join-Path $Tools "cloudflared.exe"
Ensure-Tool "cloudflared" "https://github.com/cloudflare/cloudflared/releases/download/2025.4.0/cloudflared-windows-amd64.exe" $Cloudflared

if (-not (Test-Path (Join-Path $Root ".env"))) {
    Copy-Item (Join-Path $Root ".env.demo.example") (Join-Path $Root ".env")
}

$DbPath = Join-Path $Root "backend\data\native_demo.db"
$env:DATABASE_URL = "sqlite+aiosqlite:///$($DbPath.Replace('\','/'))"
$env:DEMO_MODE = "true"
$env:JWT_SECRET = "native-demo-secret"
$env:REDIS_URL = "redis://127.0.0.1:6379/0"

$Backend = Join-Path $Root "backend"
$Frontend = Join-Path $Root "frontend"

Write-Host "Backend deps and DB..."
Set-Location $Backend
python -m pip install -q -r requirements.txt
$env:PYTHONPATH = $Backend
python scripts/init_native_db.py

Write-Host "Frontend build..."
Set-Location $Frontend
if (-not (Test-Path "node_modules")) { npm ci }
$env:NEXT_PUBLIC_API_URL = "/api/v1"
npm run build --silent

Write-Host "Starting services..."
$env:PYTHONPATH = $Backend
Start-Process -WindowStyle Hidden -FilePath "python" -ArgumentList "-m","uvicorn","app.main:app","--host","127.0.0.1","--port","8000" -WorkingDirectory $Backend

Set-Location $Frontend
$env:PORT = "3000"
$env:HOSTNAME = "127.0.0.1"
$standalone = Join-Path $Frontend ".next\standalone\server.js"
if (Test-Path $standalone) {
    Start-Process -WindowStyle Hidden -FilePath "node" -ArgumentList $standalone -WorkingDirectory (Join-Path $Frontend ".next\standalone")
} else {
    Start-Process -WindowStyle Hidden -FilePath "npm" -ArgumentList "run","start" -WorkingDirectory $Frontend
}

Start-Sleep -Seconds 12

Set-Location $Root
$CaddyConfig = Join-Path $Root "docs\Caddyfile.native"
Start-Process -WindowStyle Hidden -FilePath $CaddyExe -ArgumentList "run","--config",$CaddyConfig -WorkingDirectory $Root

Start-Sleep -Seconds 3

$publicUrl = $null
$TunnelLog = Join-Path $Root "tunnel.err.log"
if (Test-Path $TunnelLog) { Remove-Item $TunnelLog }
Start-Process -WindowStyle Hidden -FilePath $Cloudflared -ArgumentList "tunnel","--url","http://127.0.0.1:8080" -RedirectStandardOutput (Join-Path $Root "tunnel.out.log") -RedirectStandardError $TunnelLog

Start-Sleep -Seconds 12
if (Test-Path $TunnelLog) {
    $match = Select-String -Path $TunnelLog -Pattern "https://[a-z0-9-]+\.trycloudflare\.com" | Select-Object -First 1
    if ($match) { $publicUrl = $match.Matches[0].Value }
}

if (-not $publicUrl) {
    Write-Host "cloudflared unavailable, trying localtunnel..."
    $ltLog = Join-Path $Root "localtunnel.log"
    if (Test-Path $ltLog) { Remove-Item $ltLog }
    Start-Process -WindowStyle Hidden -FilePath "npx" -ArgumentList "--yes","localtunnel","--port","8080" -RedirectStandardOutput $ltLog -RedirectStandardError $ltLog
    Start-Sleep -Seconds 8
    if (Test-Path $ltLog) {
        $ltMatch = Select-String -Path $ltLog -Pattern "https://[a-z0-9-]+\.loca\.lt" | Select-Object -First 1
        if ($ltMatch) { $publicUrl = $ltMatch.Matches[0].Value }
    }
}

Write-Host ""
Write-Host "Local:  http://localhost:8080"
if ($publicUrl) {
    Write-Host "Public: $publicUrl"
    Set-Content -Path (Join-Path $Root "DEMO_URL.txt") -Value $publicUrl -Encoding utf8
}
Write-Host "Login: glava_ufa / district12345"
