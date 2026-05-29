"""
Discover Fedstat/EMISS filter metadata for a single indicator page.

Usage:
  python scripts/discover_fedstat_indicator.py 31074
  python scripts/discover_fedstat_indicator.py https://www.fedstat.ru/indicator/31074

The script downloads the indicator HTML (same source fedstatAPIr uses) and extracts:
  - lineObjectIds / columnObjectIds / filterObjectIds
  - dimension ids with human-readable titles

Then it prints a starter JSON spec compatible with POST /api/imports/fedstat.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "src" / "data" / "fedstat-specs"

DIMENSION_BLOCK = re.compile(
    r"(?P<id>\d+):\s*\{\s*title:\s*'(?P<title>[^']*)',\s*all:\s*(?:true|false),\s*values:\s*\{(?P<values>.*?)\}\s*,\s*indicator:",
    re.DOTALL,
)
VALUE_ENTRY = re.compile(r"(?P<value_id>\d+):\s*\{\s*title:\s*'(?P<title>[^']*)'")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Discover Fedstat filter ids for one indicator")
    parser.add_argument("indicator", help="Indicator id or full fedstat.ru URL")
    parser.add_argument("--save", action="store_true", help="Write starter spec to src/data/fedstat-specs/")
    return parser.parse_args()


def normalize_indicator_id(raw: str) -> str:
    match = re.search(r"(?:/indicator/|^)(\d+)", raw.strip())
    if not match:
        raise ValueError(f"Cannot parse indicator id from: {raw}")
    return match.group(1)


def fetch_indicator_html(indicator_id: str) -> str:
    url = f"https://www.fedstat.ru/indicator/{indicator_id}"
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml",
            "Accept-Language": "ru-RU,ru;q=0.9",
        },
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        return response.read().decode("utf-8", errors="replace")


def decode_js_string(value: str) -> str:
    if "\\u" not in value and "\\" not in value:
        return value
    try:
        return value.encode("utf-8").decode("unicode_escape")
    except UnicodeDecodeError:
        return value


def extract_layout_ids(html: str) -> dict[str, list[str]]:
    def find_list(name: str) -> list[str]:
        match = re.search(rf"{name}:\s*\[([^\]]*)\]", html)
        if not match:
            return []
        return [item.strip() for item in match.group(1).split(",") if item.strip()]

    return {
        "lineObjectIds": find_list("left_columns"),
        "columnObjectIds": find_list("top_columns"),
        "filterObjectIds": find_list("filterObjectIds"),
    }


def extract_dimensions(html: str) -> list[dict]:
    dimensions: list[dict] = []
    for block in DIMENSION_BLOCK.finditer(html):
        values = [
            {
                "id": value_match.group("value_id"),
                "title": decode_js_string(value_match.group("title")),
            }
            for value_match in VALUE_ENTRY.finditer(block.group("values"))
        ]
        dimensions.append(
            {
                "id": block.group("id"),
                "title": decode_js_string(block.group("title")),
                "values": values[:20],
                "valuesTruncated": len(values) > 20,
                "valuesTotal": len(values),
            }
        )
    return dimensions


def pick_bashkortostan_value(dimensions: list[dict]) -> dict | None:
    for dimension in dimensions:
        for value in dimension["values"]:
            title = value["title"].lower()
            if "башкортостан" in title and "город" not in title:
                return {"dimensionId": dimension["id"], **value}
    return None


def extract_page_title(html: str) -> str:
    match = re.search(r"<title>\s*([^<]+?)\s*</title>", html, re.IGNORECASE)
    if not match:
        return "Замените на название с страницы показателя"
    return re.sub(r"\s+", " ", match.group(1)).strip()


def build_starter_spec(indicator_id: str, html: str, layout: dict[str, list[str]], dimensions: list[dict]) -> dict:
    bashkortostan = pick_bashkortostan_value(dimensions)
    selected_filter_ids = [f"0_{indicator_id}"]

    if bashkortostan:
        selected_filter_ids.append(f"{bashkortostan['dimensionId']}_{bashkortostan['id']}")

    line_ids = layout["lineObjectIds"]
    column_ids = layout["columnObjectIds"]
    filter_ids = layout["filterObjectIds"]

    return {
        "format": "sdmx",
        "sourceId": "fedstat",
        "fedstatIndicatorId": indicator_id,
        "title": extract_page_title(html),
        "localIndicatorId": f"fedstat_{indicator_id}",
        "municipalityDimension": "REPLACE_WITH_SDMX_DIMENSION_ID",
        "yearDimension": "REPLACE_WITH_SDMX_DIMENSION_ID",
        "selectedFilterIds": selected_filter_ids,
        "filterObjectIds": {
            "lineObjectIds": line_ids[0] if line_ids else "1",
            "columnObjectIds": column_ids[0] if column_ids else "2",
            "filterObjectIds": filter_ids[0] if filter_ids else "0",
        },
        "districtAliases": {
            "Республика Башкортостан": "republic_bashkortostan",
            "Уфа": "ufa",
        },
        "_discovery": {
            "layout": layout,
            "dimensionsPreview": dimensions,
            "notes": [
                "Добавьте в selectedFilterIds все нужные годы/периоды (формат: <dimensionId>_<valueId>).",
                "municipalityDimension и yearDimension берутся из SDMX после первой успешной выгрузки.",
                "Если в таблице только субъекты РФ — это уровень республики, не 63 МО; для районов используйте BDMO.",
            ],
        },
    }


def main() -> None:
    args = parse_args()
    indicator_id = normalize_indicator_id(args.indicator)
    print(f"Fetching https://www.fedstat.ru/indicator/{indicator_id} ...", flush=True)

    html = fetch_indicator_html(indicator_id)
    layout = extract_layout_ids(html)
    dimensions = extract_dimensions(html)
    spec = build_starter_spec(indicator_id, html, layout, dimensions)

    print(json.dumps(spec, ensure_ascii=False, indent=2))

    if args.save:
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        output_path = OUTPUT_DIR / f"{indicator_id}.json"
        output_path.write_text(json.dumps(spec, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"\nSaved starter spec to {output_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
