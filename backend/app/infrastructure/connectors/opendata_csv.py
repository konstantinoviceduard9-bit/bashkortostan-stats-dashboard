"""Надёжная загрузка CSV с портала opendata (битая кавычка в старых выгрузках)."""

from __future__ import annotations

import csv
import io
import re

import pandas as pd


def _cyrillic_score(text: str) -> int:
    return sum(1 for char in text if "\u0400" <= char <= "\u04FF")


def _decode_text(raw: str | bytes) -> str:
    if isinstance(raw, str):
        return raw
    candidates: list[tuple[int, str]] = []
    for encoding in ("utf-8-sig", "cp1251", "utf-8", "latin-1"):
        try:
            decoded = raw.decode(encoding)
        except UnicodeDecodeError:
            continue
        candidates.append((_cyrillic_score(decoded), decoded))
    if candidates:
        return max(candidates, key=lambda item: item[0])[1]
    return raw.decode("utf-8", errors="ignore")


def load_opendata_frame(csv_text: str | bytes) -> pd.DataFrame:
    decoded = _decode_text(csv_text)
    attempts: list[dict] = [
        {"sep": None, "engine": "python", "dtype": str},
        {"sep": None, "engine": "python", "dtype": str, "skiprows": [1]},
    ]
    for options in attempts:
        try:
            frame = pd.read_csv(io.StringIO(decoded), **options)
            if len(frame.columns) > 1:
                return frame
        except pd.errors.ParserError:
            continue

    lines = [line for line in decoded.splitlines() if line.strip()]
    if len(lines) < 2:
        return pd.DataFrame()

    header = next(csv.reader([lines[0]]))
    rows: list[list[str]] = []
    for line in lines[2:]:
        try:
            parsed = next(csv.reader([line]))
        except csv.Error:
            match = re.search(r',"(г\.[^"]+)",', line)
            if match:
                rows.append(["", "", match.group(1)])
            continue
        if parsed:
            rows.append(parsed)

    if not rows:
        return pd.DataFrame()

    width = max(len(header), max(len(row) for row in rows))
    header = header + [f"col_{index}" for index in range(len(header), width)]
    normalized_rows = [row + [""] * (width - len(row)) for row in rows]
    return pd.DataFrame(normalized_rows, columns=header[:width])
