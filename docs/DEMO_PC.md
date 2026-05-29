# Демо: GitHub + этот компьютер как сервер

Полный стек (PostgreSQL, API, фронт) **не помещается на GitHub Pages** — Pages хостит только статику. Схема:

| Что | Где |
|-----|-----|
| Исходный код | [GitHub](https://github.com/konstantinoviceduard9-bit/bashkortostan-stats-dashboard) |
| Работающее демо | **Этот ПК** (Docker) + опционально публичный URL через туннель |
| Витрина-ссылка | GitHub Pages (`docs/index.html`) |

## 1. Запуск на этом ПК (Windows)

### Установка Docker (один раз)

```powershell
powershell -ExecutionPolicy Bypass -File scripts\install-docker.ps1
```

Скрипт включает WSL2, ставит Docker Desktop и предложит перезагрузку. На диске **C:** нужно ≥4 GB свободного места.

Если после перезагрузки WSL пишет про **виртуализацию** — включите **Intel VT-x** / **AMD-V** в BIOS ([инструкция](https://aka.ms/enablevirtualization)), сохраните и перезагрузитесь снова.

После перезагрузки (автозапуск через RunOnce или вручную):

```powershell
powershell -ExecutionPolicy Bypass -File scripts\finish-docker-setup.ps1
```

### Запуск демо

```powershell
powershell -ExecutionPolicy Bypass -File scripts\start-demo.ps1
```

Учётные записи: `admin` / `admin12345`, `glava_ufa` / `district12345`.

## 2. Публичная ссылка для заказчика (интернет)

```powershell
winget install Cloudflare.cloudflared
powershell -ExecutionPolicy Bypass -File scripts\start-tunnel.ps1
```

В консоли появится URL вида `https://….trycloudflare.com` — это адрес демо.  
Пока окно туннеля открыто и Docker запущен, ссылка работает.

Добавьте URL в README репозитория (блок «Демо») или в **About → Website** на GitHub.

## 3. GitHub Pages (витрина)

В репозитории: **Settings → Pages → Build from branch → main → /docs**.

Откроется страница `https://<user>.github.io/bashkortostan-stats-dashboard/` со ссылкой на живое демо (URL туннеля пропишите в `docs/index.html`).

Workflow `.github/workflows/pages.yml` публикует `docs/` автоматически при push в `main`.

## 4. ETL (опционально, долго)

```powershell
docker compose exec backend python scripts/run_connectors.py --period 2023-01-01
```

## 5. Остановка

```powershell
docker compose -f docker-compose.yml -f docker-compose.demo.yml down
```

## Требования к ПК

- RAM 8 GB+
- Порты **8080** (демо) свободны; Docker использует 5432, 6379, 8000, 3000 внутри сети контейнеров
- ПК не должен уходить в сон, пока демо должно быть доступно
