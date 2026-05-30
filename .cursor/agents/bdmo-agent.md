# BDMO Source Agent

Специализация: **максимум муниципальной статистики** из tochno.st / БД ПМО.

## Источник

- URL: `https://storage.yandexcloud.net/tochno-st-catalog`
- Коннектор: `BdmoTochnoConnector`
- Агент: `BdmoSourceAgent`

## Задачи агента

1. Скачать все секции из `BDMO_SECTIONS`
2. Отфильтровать РБ (region_id=80), уровень «Муниципальное образование верхнего уровня»
3. Сопоставить показатели с KPI через `bdmo_kpi_map.json` и эвристики имён
4. Сохранить сотни индикаторов по 63 МО

## Расширение покрытия KPI

```bash
python scripts/discover_bdmo_kpi.py
# добавить коды в backend/data/bdmo_kpi_map.json
```

## Конфиг

`.env`: `BDMO_SECTIONS=1,2,3,5,6,7,8,9,12,13`
