# Minfin RB Source Agent

Специализация: **бюджетные Excel-отчёты** Минфина РБ.

## Коннектор

`MinfinRbConnector` — требует `MINFIN_REPORT_URL` в `.env`.

## Статус на дашборде

Если URL не задан → бейдж **«Не настроен»**, не Live.

## Формат Excel

Колонки: `oktmo` или `муниципалитет`, `value` или `значение`, опционально `code`.
