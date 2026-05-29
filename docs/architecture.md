# Архитектура

## Слои

1. **Connectors** — загрузка из БД ПМО (10 секций tochno.st, 63 МО верхнего уровня), opendata, Минфин, ЕМИСС, ручной ГАС.
2. **PostgreSQL** — сырой кеш + витрина (`indicator_values`, `ranking_snapshots`).
3. **Redis** — очередь `new_data_detected`, Celery broker.
4. **FastAPI** — JWT, RLS по `municipality_id`.
5. **Next.js** — дашборд в национальном стиле РБ.

## Поток данных

```
Источники → Connector.fetch() → persist → ranking rebuild
         → hash changed? → Redis event → Celery → Max API
```

## Роли

- **user** — один район, обезличенный рейтинг.
- **admin** — все районы, ETL, загрузка ГАС, рассылки.
