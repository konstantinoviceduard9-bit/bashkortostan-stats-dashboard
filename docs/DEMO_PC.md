# Демо: GitHub + этот компьютер как сервер

Полный стек (PostgreSQL, API, фронт) **не помещается на GitHub Pages** — Pages хостит только статику. Схема:

| Что | Где |
|-----|-----|
| Исходный код | [GitHub](https://github.com/konstantinoviceduard9-bit/bashkortostan-stats-dashboard) |
| Работающее демо | **GitHub Pages** — статическое демо без ПК и туннеля |
| Витрина-ссылка | GitHub Pages — полный дашборд (статика + JSON) |

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

## 3. GitHub Pages (демо без ПК)

**https://konstantinoviceduard9-bit.github.io/bashkortostan-stats-dashboard/**

При push в `main` workflow `.github/workflows/pages.yml` экспортирует демо-данные, собирает Next.js как статику и публикует на Pages. Туннель и локальный сервер не нужны.

Логины: `glava_ufa` / `district12345`, `admin` / `admin12345`.

Локальный пересбор для Pages:

```powershell
python scripts/export_static_demo.py
cd frontend
$env:STATIC_GITHUB_PAGES='true'; npm run build
```

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
