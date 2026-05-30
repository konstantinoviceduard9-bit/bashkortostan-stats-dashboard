# Dashboard Orchestrator Agent

Главный агент обновления дашборда.

## Роль

Запускает всех агентов-источников по очереди, пересчитывает рейтинг и готовит данные к экспорту на GitHub Pages.

## Запуск

```powershell
cd backend
$env:PYTHONPATH = "."
python scripts/run_dashboard_agents.py --period 2023-01-01
```

Или полный цикл с экспортом:

```powershell
.\scripts\refresh-live-data.ps1
```

## Код

- `backend/app/application/agents/dashboard_orchestrator.py`
- Admin API: `POST /api/v1/admin/connectors/run`

## Агенты в пайплайне

1. bdmo-agent — БД ПМО / tochno.st
2. opendata-agent — портал открытых данных РБ
3. rosstat-agent — Росстат БД ПМО
4. minfin-agent — Минфин РБ
5. emiss-agent — ЕМИСС

ГАС «Управление» — только ручная загрузка CSV админом.
