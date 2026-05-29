# Run after reboot: verify WSL2/Docker and start project demo.
$ErrorActionPreference = "Stop"
$Root = "C:\Users\ufa-n\Projects\bashkortostan-stats-dashboard"
Set-Location $Root
$Log = Join-Path $Root "docker-finish.log"

function Log($msg) {
    $line = "$(Get-Date -Format o) $msg"
    Add-Content $Log $line
    Write-Host $msg
}

Log "=== Post-reboot Docker check ==="

$env:Path += ";C:\Program Files\Docker\Docker\resources\bin"

$wslOut = wsl --status 2>&1 | Out-String
Log $wslOut.Trim()

if ($wslOut -match "виртуализац|virtualization|Virtual Machine Platform") {
    Log "BLOCKER: enable Intel VT-x / AMD-V in BIOS, then reboot again."
    Log "See https://aka.ms/enablevirtualization"
    exit 2
}

if (-not (Test-Path ".env")) {
    Copy-Item ".env.demo.example" ".env"
    Log "Created .env from .env.demo.example"
}

$dockerExe = "${env:ProgramFiles}\Docker\Docker\Docker Desktop.exe"
if (Test-Path $dockerExe) {
    Start-Process $dockerExe -ErrorAction SilentlyContinue
    Log "Starting Docker Desktop..."
}

$ready = $false
for ($i = 0; $i -lt 36; $i++) {
    Start-Sleep 10
    try {
        docker info 2>$null | Out-Null
        if ($LASTEXITCODE -eq 0) { $ready = $true; break }
    } catch {}
}
if (-not $ready) {
    Log "Docker engine not ready yet. Open Docker Desktop manually and wait."
    exit 1
}

Log "Docker OK. Running start-demo.ps1..."
powershell -ExecutionPolicy Bypass -File (Join-Path $Root "scripts\start-demo.ps1")
Log "=== Done ==="
