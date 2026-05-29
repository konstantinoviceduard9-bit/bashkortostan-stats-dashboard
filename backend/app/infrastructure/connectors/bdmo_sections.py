"""Загрузка плоских выгрузок БД ПМО (tochno.st)."""

from __future__ import annotations

import io
import zipfile
from datetime import date

import httpx
import pandas as pd

from app.config import get_settings

TOP_LEVEL_LABEL = "Муниципальное образование верхнего уровня"
DEFAULT_SECTIONS = (1, 2, 3, 5, 6, 7, 8, 9, 12, 13)


def section_zip_url(section: int, *, version: str = "v20250918") -> str:
    settings = get_settings()
    return (
        f"{settings.bdmo_tochno_base_url}/Rosstat/data_bdmo_118_{version}/by_section/"
        f"data_section{section}_112_{version}_section_file.zip"
    )


def read_section_frame(content: bytes) -> pd.DataFrame:
    with zipfile.ZipFile(io.BytesIO(content)) as archive:
        csv_name = next(
            name
            for name in archive.namelist()
            if name.endswith(".csv") and not name.startswith("__MACOSX")
        )
        return pd.read_csv(archive.open(csv_name), sep=";", dtype=str, encoding="utf-8")


def filter_bashkortostan_top_level(frame: pd.DataFrame, *, year: str) -> pd.DataFrame:
    settings = get_settings()
    mask = (
        frame["region_id"].astype(str) == settings.bashkortostan_region_id
    ) & (frame["year"].astype(str) == year) & (frame["mun_level"].astype(str) == TOP_LEVEL_LABEL)
    return frame.loc[mask].copy()


def resolve_data_year(frame: pd.DataFrame, requested_year: int) -> str | None:
    years = sorted({str(value) for value in frame["year"].dropna().unique() if str(value).isdigit()})
    if not years:
        return None
    target = str(requested_year)
    if target in years:
        return target
    earlier = [year for year in years if year <= target]
    return earlier[-1] if earlier else years[-1]


async def fetch_sections(
    client: httpx.AsyncClient,
    sections: tuple[int, ...],
    period: date,
) -> tuple[pd.DataFrame, str | None]:
    frames: list[pd.DataFrame] = []
    for section in sections:
        url = section_zip_url(section)
        response = await client.get(url)
        if response.status_code == 404:
            continue
        response.raise_for_status()
        frames.append(read_section_frame(response.content))

    if not frames:
        return pd.DataFrame(), None

    combined = pd.concat(frames, ignore_index=True)
    data_year = resolve_data_year(combined, period.year)
    if data_year is None:
        return pd.DataFrame(), None
    return filter_bashkortostan_top_level(combined, year=data_year), data_year
