# Дашборд муниципальной статистики Республики Башкортостан

Платформа для глав муниципальных районов: личный кабинет по своему МО, обезличенный рейтинг, автоматический сбор официальных данных, уведомления в мессенджере «Макс».

## Стек

| Слой | Технологии |
|------|------------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, Recharts |
| Backend | FastAPI, SQLAlchemy 2 (async), Alembic, JWT, bcrypt |
| Очереди | Celery + Redis |
| БД | PostgreSQL 15 |

## Быстрый старт (Docker)

```bash
cp .env.example .env
docker compose up --build
```

- Frontend: http://localhost:3000  
- API: http://localhost:8000/health  
- Swagger: http://localhost:8000/docs  

### Миграции и демо-данные

```bash
docker compose exec backend alembic upgrade head
docker compose exec backend python scripts/seed_data.py
```

### Загрузка реальных данных (ETL)

```bash
# Период запроса (год); если в БДМО нет 2025/2026 — подставится последний доступный (2023)
docker compose exec backend python scripts/run_connectors.py --period 2023-01-01
```

Статус коннекторов (admin JWT): `GET /api/v1/admin/connectors/status`

Аудит сопоставления opendata → 63 МО: `python scripts/audit_opendata.py`

Деплой на VPS: [docs/deploy.md](docs/deploy.md)

### Демо-учётные записи

| Логин | Пароль | Роль |
|-------|--------|------|
| `admin` | `admin12345` | Администратор |
| `glava_ufa` | `district12345` | Глава района (г. Уфа) |
| `glava_beloretsk` | `district12345` | Глава района (Белорецкий) |

Сид загружает **63 муниципалитета** РБ, 6 KPI за 12 месяцев 2024 года и пересчитывает рейтинг по средней зарплате.

## Структура репозитория

```
backend/
  app/
    domain/           # сущности
    application/      # use-cases (ingestion, ranking, auth)
    infrastructure/   # БД, коннекторы, уведомления
    api/routes/       # REST API
    workers/          # Celery + Redis events
  alembic/            # миграции
  scripts/seed_data.py
frontend/
  src/app/            # Next.js App Router
docker-compose.yml
```

## Коннекторы данных

| ID | Источник | Режим |
|----|----------|--------|
| `bdmo_tochno` | БД ПМО / tochno.st (10 секций, 63 МО верхнего уровня) | Авто (Celery) |
| `opendata_rb` | opendata.sf2.simai.ru | Авто (ежедневно) |
| `minfin_rb` | Минфин РБ | Excel по `MINFIN_REPORT_URL` (колонки oktmo, value) |
| `emiss` | Башкортостанстат / ЕМИСС | SDMX/XML по `EMISS_SDMX_URL` |
| `gas_manual` | ГАС «Управление» | Ручная загрузка CSV/Excel (`POST /admin/gas/upload`) |

Единый контракт: `fetch(period, municipality_code) -> ConnectorResult`.

## Мессенджер «Макс»

В `.env`:

```env
MAX_API_URL=https://your-max-gateway.example/send
MAX_BOT_TOKEN=your-service-token
```

Формат POST (настраивается в `MaxNotificationAdapter`):

```json
{"userId": "...", "message": "...", "token": "..."}
```

События `new_data_detected` попадают в Redis; Celery раз в 5 минут рассылает уведомления.

## Локальная разработка без Docker

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
alembic upgrade head
python scripts/seed_data.py
uvicorn app.main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
set NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
npm run dev
```

### Celery

```bash
celery -A app.workers.celery_app.celery_app worker --loglevel=info
celery -A app.workers.celery_app.celery_app beat --loglevel=info
```

## API (основное)

| Метод | Путь | Описание |
|-------|------|----------|
| POST | `/api/v1/auth/login` | JWT |
| GET | `/api/v1/dashboard/summary` | KPI + место в рейтинге |
| GET | `/api/v1/dashboard/indicators` | Показатели района |
| GET | `/api/v1/dashboard/rating` | Топ‑3 / антитоп‑3 |
| PATCH | `/api/v1/profile` | Макс ID, пароль |
| POST | `/api/v1/admin/connectors/run` | Запуск ETL (admin) |
| POST | `/api/v1/admin/gas/upload` | ГАС CSV/Excel |
| POST | `/api/v1/admin/notify` | Массовое уведомление |

## Безопасность

- Пароли: bcrypt  
- API: JWT Bearer  
- Row-level: пользователь `user` видит только свой `municipality_id`  
- Рейтинг: обезличенные подписи «Район #N» для чужих МО  

## CI

GitHub Actions: `.github/workflows/ci.yml` — lint/build backend и frontend.

## Дальнейшие шаги

- [x] Healthcheck Docker, `scripts/bootstrap.sh`, расширенный `/health`
- [x] Источники данных на дашборде, админ-страница ETL
- [x] Аудит opendata на весь каталог, шаблон ГАС, EMISS по URL
- [ ] Синхронизация ОКТМО: `python scripts/sync_oktmo_from_bdmo.py` после seed
- [ ] Прогон ETL на сервере (`run_connectors.py --period 2023-01-01`)
- [ ] KPI зарплаты/безработицы из ЕМИСС или ручного маппинга БДМО
- [ ] Materialized views для рейтингов
- [ ] Официальный SVG герба РБ (заменить заглушку «РБ»)
