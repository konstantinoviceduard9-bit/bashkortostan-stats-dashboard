# Install WSL2 + Docker Desktop (Administrator / SYSTEM).
$ErrorActionPreference = "Continue"
$Log = "C:\Users\ufa-n\Projects\bashkortostan-stats-dashboard\docker-install.log"
function Log($msg) { $line = "$(Get-Date -Format o) $msg"; Add-Content $Log $line; Write-Host $msg }

Log "=== Docker setup start ==="

try {
    Log "Enable VirtualMachinePlatform..."
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

    Log "Enable WSL..."
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

    Log "wsl --install --no-distribution..."
    wsl --install --no-distribution 2>&1 | ForEach-Object { Log $_ }

    Log "wsl --update..."
    wsl --update 2>&1 | ForEach-Object { Log $_ }

    Log "wsl --set-default-version 2..."
    wsl --set-default-version 2 2>&1 | ForEach-Object { Log $_ }
} catch {
    Log "WSL step error: $_"
}

$installer = "$env:TEMP\DockerDesktopInstaller.exe"
if (-not (Test-Path $installer)) {
    Log "Download Docker Desktop..."
    Invoke-WebRequest -Uri "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" -OutFile $installer -UseBasicParsing
}

$dockerExe = "${env:ProgramFiles}\Docker\Docker\Docker Desktop.exe"
if (-not (Test-Path $dockerExe)) {
    Log "Install Docker Desktop..."
    $p = Start-Process -FilePath $installer -ArgumentList "install","--quiet","--accept-license","--backend=wsl-2" -Wait -PassThru
    Log "Docker installer exit code: $($p.ExitCode)"
} else {
    Log "Docker Desktop already installed."
}

$dockerBin = "${env:ProgramFiles}\Docker\Docker\resources\bin"
$machinePath = [Environment]::GetEnvironmentVariable("Path", "Machine")
if ($machinePath -notlike "*$dockerBin*" -and (Test-Path $dockerBin)) {
    [Environment]::SetEnvironmentVariable("Path", "$machinePath;$dockerBin", "Machine")
    Log "Added Docker to PATH."
}

Log "=== Docker setup finished ==="
