# Rosstat BD PMO Source Agent

Специализация: **официальные таблицы Росстат** DBInet.cgi по ОКТМО.

## Источник

- URL: `https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi`
- Коннектор: `RosstatBdPmoConnector`
- Показатели: `backend/data/rosstat_bdpmo_indicators.json`

## Задачи агента

1. Bootstrap: получить коды `p_munr` (63 МО)
2. Пакетный POST с `Qry` / `QryGm` для каждого показателя
3. Парсинг HTML-таблицы `OutTbl`
4. Сохранение по ОКТМО; KPI через поле `"kpi"` в JSON

## Конфиг

`.env`: `ROSSTAT_BDPMO_ENABLED=true`

## Добавление показателей

Отредактировать `rosstat_bdpmo_indicators.json` — коды из интерфейса БД ПМО (pl=...).

Пробные скрипты: `backend/scripts/probe_rosstat_*.py`
