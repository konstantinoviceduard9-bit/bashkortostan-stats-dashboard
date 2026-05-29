# Деплой на VPS (Docker)

## Требования

- Ubuntu 22.04+ (или аналог)
- Docker Engine + Compose plugin
- Домен с DNS на IP сервера (опционально, для HTTPS)

## 1. Клонирование и конфигурация

```bash
git clone https://github.com/konstantinoviceduard9-bit/bashkortostan-stats-dashboard.git
cd bashkortostan-stats-dashboard
cp .env.example .env
```

В `.env` обязательно задайте:

```env
JWT_SECRET=<длинная случайная строка>
DATABASE_URL=postgresql+asyncpg://dashboard:<пароль>@postgres:5432/dashboard
CORS_ORIGINS=https://your-domain.example
NEXT_PUBLIC_API_URL=https://your-domain.example/api/v1
MAX_API_URL=...
MAX_BOT_TOKEN=...
```

Для PostgreSQL в `docker-compose.yml` смените `POSTGRES_PASSWORD` и тот же пароль в `DATABASE_URL`.

## 2. Запуск

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
docker compose exec backend alembic upgrade head
docker compose exec backend python scripts/seed_data.py
```

Загрузка БДМО (долго, ~10 мин):

```bash
docker compose exec backend python scripts/run_connectors.py --period 2023-01-01
```

## 3. Reverse proxy (Caddy пример)

```caddy
your-domain.example {
  reverse_proxy /api/* backend:8000
  reverse_proxy /* frontend:3000
}
```

API health: `GET /health`  
Swagger: `/docs`

## 4. Проверка ETL

```bash
docker compose exec backend python scripts/audit_opendata.py
docker compose logs celery_worker --tail 50
```

Статус коннекторов (JWT admin): `GET /api/v1/admin/connectors/status`

## 5. Обновление

```bash
git pull
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
docker compose exec backend alembic upgrade head
```
