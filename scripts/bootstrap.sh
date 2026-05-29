#!/usr/bin/env sh
# Первичный запуск на сервере: ./scripts/bootstrap.sh
set -e

cd "$(dirname "$0")/.."

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Создан .env — отредактируйте JWT_SECRET, пароли и MAX_* перед продакшеном."
fi

docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
docker compose exec -T backend alembic upgrade head
docker compose exec -T backend python scripts/seed_data.py

echo ""
echo "Готово. Frontend: http://localhost:3000  API: http://localhost:8000/health"
echo "ETL (долго): docker compose exec backend python scripts/run_connectors.py --period 2023-01-01"
