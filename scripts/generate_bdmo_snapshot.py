import argparse
import csv
import json
import re
import sys
import urllib.request
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / ".cache" / "bdmo"
SNAPSHOT_CACHE = CACHE / "snapshots"
OUTPUT = ROOT / "src" / "data" / "bdmoSnapshot.ts"
MUNICIPALITIES = ROOT / "src" / "data" / "bashkortostanMunicipalities.ts"

BASE_URL = "https://storage.yandexcloud.net/tochno-st-catalog/Rosstat/data_bdmo_118_v20250918/by_section"
SECTION_CODES = [
    1,
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    12,
    13,
    16,
    18,
    19,
    20,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    46,
    50,
    60,
    70,
    80,
]
YEARS = {2023, 2024, 2025}

TRANSLIT = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "e",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "y",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "h",
    "ц": "c",
    "ч": "ch",
    "ш": "sh",
    "щ": "sch",
    "ы": "y",
    "э": "e",
    "ю": "yu",
    "я": "ya",
}


def main() -> None:
    CACHE.mkdir(parents=True, exist_ok=True)
    SNAPSHOT_CACHE.mkdir(parents=True, exist_ok=True)
    args = parse_args()
    aliases = build_municipality_aliases()
    section_codes = args.sections or SECTION_CODES

    if not args.combine_only:
        for code in section_codes:
            groups = {}
            indicators = {}
            values = {}
            zip_path = CACHE / f"data_section{code}_112_v20250918_section_file.zip"
            url = f"{BASE_URL}/data_section{code}_112_v20250918_section_file.zip"
            download(url, zip_path)
            section_values = process_zip(zip_path, aliases, groups, indicators, values)
            write_section_snapshot(code, groups, indicators, values)
            print(f"section {code}: {section_values} values", flush=True)

    groups, indicators, values = read_section_snapshots()
    write_snapshot(groups, indicators, values)
    print(f"wrote {OUTPUT}", flush=True)
    print(f"groups={len(groups)} indicators={len(indicators)} values={len(values)}", flush=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Bashkortostan BDMO static snapshot")
    parser.add_argument("--sections", nargs="*", type=int, help="BDMO section codes to process")
    parser.add_argument("--combine-only", action="store_true", help="Only combine already processed section snapshots")
    return parser.parse_args()


def write_section_snapshot(code: int, groups: dict, indicators: dict, values: dict) -> None:
    path = SNAPSHOT_CACHE / f"section_{code}.json"
    payload = {
        "groups": sorted(groups.values(), key=lambda item: item["name"]),
        "indicators": sorted(indicators.values(), key=lambda item: (item["groupId"], item["name"])),
        "values": sorted(values.values(), key=lambda item: (item["year"], item["indicatorId"], item["districtId"])),
    }
    path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")


def read_section_snapshots() -> tuple[dict, dict, dict]:
    groups = {}
    indicators = {}
    values = {}

    for path in sorted(SNAPSHOT_CACHE.glob("section_*.json")):
        payload = json.loads(path.read_text(encoding="utf-8"))
        for group in payload["groups"]:
            groups[group["id"]] = group
        for indicator in payload["indicators"]:
            indicators[indicator["id"]] = indicator
        for value in payload["values"]:
            values[(value["districtId"], value["indicatorId"], value["year"])] = value

    return groups, indicators, values

def build_municipality_aliases() -> dict[str, str]:
    text = MUNICIPALITIES.read_text(encoding="utf-8")
    aliases: dict[str, str] = {}
    pattern = re.compile(r'\{ id: "([^"]+)", name: "([^"]+)", type: "(district|city)" \}')

    for municipality_id, name, municipality_type in pattern.findall(text):
        names = {municipality_id, name}
        if municipality_type == "district":
            base = re.sub(r"\s+район$", "", name)
            names.add(f"{base} муниципальный район")
            names.add(f"муниципальный район {base}")
        else:
            names.add(f"город {name}")
            names.add(f"Город {name}")
            names.add(f"городской округ {name}")
            names.add(f"городской округ город {name}")
            names.add(f"Городской округ город {name}")
            names.add(f"городской округ ЗАТО город {name}")
            names.add(f"ЗАТО город {name}")

        for alias in names:
            aliases[alias] = municipality_id
            aliases[normalize_alias(alias)] = municipality_id

    return aliases


def download(url: str, path: Path) -> None:
    if path.exists() and path.stat().st_size > 0:
        print(f"cached {path.name}", flush=True)
        return

    print(f"downloading {url}", flush=True)
    with urllib.request.urlopen(url, timeout=120) as response:
        path.write_bytes(response.read())


def process_zip(zip_path: Path, aliases: dict[str, str], groups: dict, indicators: dict, values: dict) -> int:
    value_count = 0
    with zipfile.ZipFile(zip_path) as archive:
        csv_name = next(name for name in archive.namelist() if name.endswith(".csv"))
        with archive.open(csv_name) as raw:
            reader = csv.DictReader((line.decode("utf-8") for line in raw), delimiter=";")
            for row in reader:
                if row.get("region_id") != "80":
                    continue
                year = parse_year(row.get("year", ""))
                if year not in YEARS:
                    continue

                municipality = row.get("municipality", "").strip()
                district_id = aliases.get(municipality) or aliases.get(normalize_alias(municipality))
                if not district_id:
                    continue

                # Keep top-level rows only. In tochno.st data, top-level municipalities
                # repeat their own name in mun_district, while settlements point to a parent.
                parent = row.get("mun_district", "").strip()
                if parent and normalize_alias(parent) != normalize_alias(municipality):
                    continue

                value = parse_float(row.get("indicator_value", ""))
                if value is None:
                    continue

                section_code = row.get("indicator_section_code", "").strip()
                section_name = row.get("indicator_section", "").strip() or "БД ПМО"
                group_id = f"bdmo_{slugify(section_code + '_' + section_name)}"
                groups[group_id] = {
                    "id": group_id,
                    "name": f"{section_code}. {section_name}" if section_code else section_name,
                    "description": f"Официальный раздел БД ПМО Росстата: {section_name}",
                }

                indicator_code = row.get("indicator_code", "").strip()
                indicator_name = row.get("indicator_name", "").strip() or indicator_code
                pokdor = row.get("pokdor", "").strip()
                vidazc = row.get("vidazc", "").strip()
                suffix = "_".join(part for part in [pokdor, vidazc] if part and part != "CD")
                indicator_id = f"bdmo_{slugify('_'.join(part for part in [indicator_code, suffix] if part))}"
                display_name = indicator_name if not suffix else f"{indicator_name} ({suffix})"
                indicators[indicator_id] = {
                    "id": indicator_id,
                    "groupId": group_id,
                    "name": display_name,
                    "unit": row.get("indicator_unit", "").strip() or "значение",
                    "description": f"БД ПМО Росстата, обработка tochno.st, показатель {indicator_code}",
                    "rankDirection": "desc",
                    "sourceId": "bdmo_rosstat",
                    "sourceIndicatorId": indicator_code or display_name,
                }

                values[(district_id, indicator_id, year)] = {
                    "districtId": district_id,
                    "indicatorId": indicator_id,
                    "year": year,
                    "value": value,
                    "sourceId": "bdmo_rosstat",
                }
                value_count += 1

    return value_count


def write_snapshot(groups: dict, indicators: dict, values: dict) -> None:
    group_rows = sorted(groups.values(), key=lambda item: item["name"])
    indicator_rows = sorted(indicators.values(), key=lambda item: (item["groupId"], item["name"]))
    value_rows = sorted(values.values(), key=lambda item: (item["year"], item["indicatorId"], item["districtId"]))

    lines = [
        'import type { Indicator, IndicatorGroup, StatValue } from "../shared/types";',
        "",
        "export const bdmoSnapshotGroups: IndicatorGroup[] = " + dump_ts(group_rows) + ";",
        "",
        "export const bdmoSnapshotIndicators: Indicator[] = " + dump_ts(indicator_rows) + ";",
        "",
        "export const bdmoSnapshotValues: StatValue[] = " + dump_ts(value_rows) + ";",
        "",
    ]
    OUTPUT.write_text("\n".join(lines), encoding="utf-8")


def parse_year(value: str) -> int | None:
    try:
        return int(value)
    except ValueError:
        return None


def parse_float(value: str) -> float | None:
    try:
        return float(value.replace(",", "."))
    except ValueError:
        return None


def normalize_alias(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("ё", "е").replace("Ё", "Е")).strip()


def slugify(value: str) -> str:
    lowered = value.lower().replace("ъ", "").replace("ь", "")
    transliterated = "".join(TRANSLIT.get(char, char) for char in lowered)
    return re.sub(r"_+", "_", re.sub(r"[^a-z0-9]+", "_", transliterated)).strip("_")


def dump_ts(value) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(130)
