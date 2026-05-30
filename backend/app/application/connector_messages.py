"""Человекочитаемые сообщения о результатах ETL-коннекторов."""

from __future__ import annotations

SKIP_REASONS: dict[str, str] = {
    "MINFIN_REPORT_URL not set": "Не задан URL отчёта Минфина (MINFIN_REPORT_URL в .env)",
    "EMISS_SDMX_URL not set": "Не задан URL выгрузки ЕМИСС (EMISS_SDMX_URL в .env)",
    "ROSSTAT_BDPMO disabled": "Коннектор Росстат БД ПМО отключён (ROSSTAT_BDPMO_ENABLED=false)",
}


def format_connector_message(
    *,
    loaded: int,
    saved: int,
    skipped_municipality: int,
    stats: dict | None,
) -> tuple[str, str]:
    """Возвращает (status, message). status: success | skipped | empty | error."""

    if stats:
        if "skipped" in stats:
            reason = str(stats["skipped"])
            human = SKIP_REASONS.get(reason, reason)
            return "skipped", f"Пропущено: {human}"
        if "error" in stats:
            return "error", f"Ошибка разбора: {stats['error']}"

    parts = [
        f"Загружено {loaded} наблюдений",
        f"сохранено {saved}",
    ]
    if skipped_municipality:
        parts.append(f"без привязки к МО — {skipped_municipality}")

    if stats:
        extras: list[str] = []
        if unresolved := stats.get("skipped_unresolved_labels"):
            extras.append(f"не распознано названий — {unresolved}")
        if datasets := stats.get("datasets_processed"):
            extras.append(f"наборов данных — {datasets}")
        if indicators := stats.get("indicators_fetched"):
            extras.append(f"показателей Росстат — {indicators}")
        if numeric_cols := stats.get("numeric_columns"):
            extras.append(f"числовых колонок — {numeric_cols}")
        if extras:
            parts.append("; ".join(extras))

    message = ", ".join(parts)
    if loaded == 0 and saved == 0:
        return "empty", f"{message}. Данных за период нет"
    return "success", message
