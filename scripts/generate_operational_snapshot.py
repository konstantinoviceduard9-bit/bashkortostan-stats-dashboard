import csv
import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src" / "data" / "operationalSnapshot.ts"
MUNICIPALITIES = ROOT / "src" / "data" / "bashkortostanMunicipalities.ts"
BASE_URL = "https://opendata.sf2.simai.ru"

HEALTH_DATASETS = {
    22: "Детские больницы",
    23: "Больницы",
    24: "Бюро судебно-медицинской экспертизы",
    25: "Госпитали",
    26: "Диспансеры",
    27: "Дома ребенка",
    28: "Поликлиники",
    29: "Медицинские информационно-аналитические центры",
    30: "Амбулатории",
    31: "Родильные дома",
    32: "Санатории",
    33: "Станции переливания крови",
    34: "Станции скорой помощи",
    35: "Стоматологические поликлиники",
}


def main() -> None:
    aliases = build_municipality_aliases()
    groups = [
        {
            "id": "opendata_health_2026",
            "name": "Оперативные данные 2026: здравоохранение",
            "description": "Официальные открытые данные Республики Башкортостан, опубликовано 28.01.2026",
        }
    ]
    indicators = []
    values = []

    for dataset_id, dataset_name in HEALTH_DATASETS.items():
        csv_url = find_csv_url(dataset_id)
        rows = load_csv(csv_url)
        counts = {municipality_id: 0 for municipality_id in aliases["__district_ids__"]}

        for row in rows:
            municipality = pick_municipality(row)
            district_id = aliases.get(municipality) or aliases.get(normalize_alias(municipality))
            if district_id:
                counts[district_id] += 1

        indicator_id = f"opendata_health_{dataset_id}_count"
        indicators.append(
            {
                "id": indicator_id,
                "groupId": "opendata_health_2026",
                "name": f"{dataset_name}: количество объектов",
                "unit": "ед.",
                "description": f"Открытые данные РБ, набор {dataset_id}, дата публикации 28.01.2026",
                "rankDirection": "desc",
                "sourceId": "bashkortostan_open_data",
                "sourceIndicatorId": str(dataset_id),
            }
        )

        for district_id, count in sorted(counts.items()):
            values.append(
                {
                    "districtId": district_id,
                    "indicatorId": indicator_id,
                    "year": 2026,
                    "value": count,
                    "sourceId": "bashkortostan_open_data",
                }
            )

        print(f"dataset {dataset_id}: {sum(counts.values())} matched objects", flush=True)

    write_snapshot(groups, indicators, values)
    print(f"wrote {OUTPUT}", flush=True)


def build_municipality_aliases() -> dict[str, str]:
    text = MUNICIPALITIES.read_text(encoding="utf-8")
    aliases: dict[str, str] = {"__district_ids__": []}  # type: ignore[assignment]
    pattern = re.compile(r'\{ id: "([^"]+)", name: "([^"]+)", type: "(district|city)" \}')

    for municipality_id, name, municipality_type in pattern.findall(text):
        aliases["__district_ids__"].append(municipality_id)  # type: ignore[index]
        names = {municipality_id, name}
        if municipality_type == "district":
            base = re.sub(r"\s+район$", "", name)
            names.update({f"{base} муниципальный район", f"муниципальный район {base}", base})
        else:
            names.update(
                {
                    f"город {name}",
                    f"Город {name}",
                    f"г.{name}",
                    f"г. {name}",
                    f"городской округ город {name}",
                    f"ЗАТО город {name}",
                }
            )

        for alias in names:
            aliases[alias] = municipality_id
            aliases[normalize_alias(alias)] = municipality_id

    return aliases


def find_csv_url(dataset_id: int) -> str:
    page = urllib.request.urlopen(f"{BASE_URL}/datasets/health/{dataset_id}/", timeout=30).read().decode("utf-8")
    match = re.search(r'href="([^"]*dowhload_file_utf8\.php\?file=[^"]*/data/[^"]+\.csv)"', page)
    if not match:
        raise RuntimeError(f"CSV link not found for dataset {dataset_id}")
    return BASE_URL + match.group(1)


def load_csv(url: str) -> list[dict[str, str]]:
    raw = urllib.request.urlopen(url, timeout=30).read()
    text = raw.decode("utf-8", errors="replace")
    rows = list(csv.DictReader(text.splitlines()))
    return [row for row in rows if is_data_row(row)]


def is_data_row(row: dict[str, str]) -> bool:
    first_value = next(iter(row.values()), "").strip()
    return bool(first_value) and first_value not in {"№", "п/п"}


def pick_municipality(row: dict[str, str]) -> str:
    for key in ["Municipality", "Муниципальное образование, на территории которого располагается объект"]:
        value = row.get(key)
        if value:
            return value.strip()
    return ""


def write_snapshot(groups: list[dict], indicators: list[dict], values: list[dict]) -> None:
    lines = [
        'import type { Indicator, IndicatorGroup, StatValue } from "../shared/types";',
        "",
        "export const operationalSnapshotGroups: IndicatorGroup[] = " + dump_ts(groups) + ";",
        "",
        "export const operationalSnapshotIndicators: Indicator[] = " + dump_ts(indicators) + ";",
        "",
        "export const operationalSnapshotValues: StatValue[] = " + dump_ts(values) + ";",
        "",
    ]
    OUTPUT.write_text("\n".join(lines), encoding="utf-8")


def normalize_alias(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("ё", "е").replace("Ё", "Е")).strip()


def dump_ts(value) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
