# Opendata RB Source Agent

Специализация: **реестры и CSV** с портала открытых данных РБ.

## Источник

- Портал: `https://opendata.sf2.simai.ru`
- Каталог: `backend/data/opendata_catalog.json`
- Агент: `OpendataSourceAgent`

## Задачи агента

1. Обойти все наборы в каталоге
2. Найти колонку муниципалитета
3. Извлечь **количество объектов** по МО
4. Извлечь **числовые колонки** (суммы по МО)
5. Сопоставить названия через `MunicipalityResolver`

## Расширение

Добавить URL в `opendata_catalog.json`, проверить покрытие:

```bash
python scripts/audit_opendata.py
```
