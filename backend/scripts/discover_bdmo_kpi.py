"""Сканирует БДМО tochno.st и пишет кандидатов KPI в data/bdmo_kpi_candidates.txt."""

import io
import zipfile
from pathlib import Path

import httpx
import pandas as pd

SECTIONS = (1, 2, 3, 5, 6, 7, 8, 9, 12, 13)
PHRASES = (
    "зарплат",
    "безработ",
    "бюджет",
    "врач",
    "жил",
    "прирост",
    "естествен",
    "обеспечен",
    "рождаем",
    "умер",
    "доход",
    "расход",
    "занятост",
)
BASE = "https://storage.yandexcloud.net/tochno-st-catalog/Rosstat/data_bdmo_118_v20250918/by_section"
OUT = Path(__file__).resolve().parents[1] / "data" / "bdmo_kpi_candidates.txt"


def main() -> None:
    seen: set[str] = set()
    lines: list[str] = []
    for section in SECTIONS:
        url = f"{BASE}/data_section{section}_112_v20250918_section_file.zip"
        response = httpx.get(url, timeout=120)
        if response.status_code != 200:
            continue
        archive = zipfile.ZipFile(io.BytesIO(response.content))
        csv_name = next(
            name for name in archive.namelist() if name.endswith(".csv") and not name.startswith("__MACOSX")
        )
        frame = pd.read_csv(
            archive.open(csv_name),
            sep=";",
            dtype=str,
            encoding="utf-8",
            usecols=["indicator_code", "indicator_name", "indicator_unit", "year", "region_id", "mun_level"],
        )
        top = frame[
            (frame.region_id == "80")
            & (frame.year == "2023")
            & (frame.mun_level == "Муниципальное образование верхнего уровня")
        ]
        unique = top[["indicator_code", "indicator_name", "indicator_unit"]].drop_duplicates()
        for _, row in unique.iterrows():
            name = str(row.indicator_name)
            if not any(phrase in name.lower() for phrase in PHRASES):
                continue
            code = str(row.indicator_code)
            if code in seen:
                continue
            seen.add(code)
            lines.append(f"{code}|{name}|{row.indicator_unit}|s{section}")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {len(lines)} candidates to {OUT}")


if __name__ == "__main__":
    main()
