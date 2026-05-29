# Install WSL2 + Docker Desktop on Windows.
# Requires: Administrator (UAC), ~4 GB free on C:, virtualization in BIOS for WSL2.
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File scripts\install-docker.ps1
#
# After install + reboot:
#   powershell -ExecutionPolicy Bypass -File scripts\finish-docker-setup.ps1
#   powershell -ExecutionPolicy Bypass -File scripts\start-demo.ps1

$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..")

function Test-Admin {
    $p = [Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()
    return $p.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

if (-not (Test-Admin)) {
    Write-Host "Elevating (approve UAC)..." -ForegroundColor Yellow
    Start-Process powershell.exe -Verb RunAs -ArgumentList @(
        "-ExecutionPolicy", "Bypass", "-File", "`"$PSCommandPath`""
    ) -Wait
    exit 0
}

& (Join-Path $Root "scripts\install-docker-admin.ps1")

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. REBOOT Windows (required for WSL)"
Write-Host "  2. If WSL still fails: enable VT-x/AMD-V in BIOS (https://aka.ms/enablevirtualization)"
Write-Host "  3. After reboot:"
Write-Host "       powershell -ExecutionPolicy Bypass -File scripts\finish-docker-setup.ps1"
Write-Host ""

$free = (Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='C:'").FreeSpace / 1GB
if ($free -lt 4) {
    Write-Host "Warning: only $([math]::Round($free,1)) GB free on C: — Docker needs ~4 GB." -ForegroundColor Red
}

$answer = Read-Host "Reboot now? (Y/N)"
if ($answer -match "^[Yy]$") {
    shutdown /r /t 60 /c "Reboot for WSL2 and Docker Desktop"
    Write-Host "Reboot in 60 s. Cancel: shutdown /a" -ForegroundColor Yellow
}
