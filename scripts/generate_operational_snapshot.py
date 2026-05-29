import argparse
import csv
import json
import re
import urllib.request
from dataclasses import dataclass
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src" / "data" / "operationalSnapshot.ts"
CATALOG_OUTPUT = ROOT / "src" / "data" / "opendataCatalog.json"
MUNICIPALITIES = ROOT / "src" / "data" / "bashkortostanMunicipalities.ts"
BASE_URL = "https://opendata.sf2.simai.ru"

CATEGORY_LABELS = {
    "bezopasnost": "Безопасность",
    "communication": "Связь",
    "ekologiya": "Экология",
    "ekonomika": "Экономика",
    "elektronika": "Электроника",
    "health": "Здравоохранение",
    "kartografiya": "Картография",
    "kultura": "Культура",
    "leisure-and-recreation": "Досуг и отдых",
    "meteodannye": "Метеоданные",
    "obrazovanie": "Образование",
    "public-services": "Государство",
    "roads-and-transport": "Дороги и транспорт",
    "sport": "Спорт",
    "torgovlya": "Торговля",
    "turizm": "Туризм",
}

MUNICIPALITY_HINTS = (
    "municipality",
    "муниципальн",
    "муниципал",
    "муниципальное образование",
)


@dataclass
class DatasetPassport:
    category: str
    dataset_id: str
    title: str
    csv_url: str | None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Bashkortostan operational open data snapshot")
    parser.add_argument("--year", type=int, default=date.today().year, help="Target year for operational indicators")
    parser.add_argument(
        "--categories",
        nargs="*",
        help="Optional category slugs to process (default: all discovered on the portal)",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    year = args.year
    fetched_on = date.today().isoformat()
    aliases = build_municipality_aliases()
    categories = args.categories or discover_categories()
    groups: dict[str, dict] = {}
    indicators: list[dict] = []
    values: list[dict] = []
    catalog: list[dict] = []

    for category in categories:
        group_id = f"opendata_{slugify(category)}_{year}"
        label = CATEGORY_LABELS.get(category, category.replace("-", " ").title())
        group_name = f"Оперативные данные {year}: {label}"

        for dataset_id in discover_dataset_ids(category):
            passport = fetch_passport(category, dataset_id)
            catalog.append(
                {
                    "category": category,
                    "datasetId": dataset_id,
                    "title": passport.title,
                    "csvUrl": passport.csv_url,
                    "groupId": group_id,
                }
            )

            if not passport.csv_url:
                print(f"skip {category}/{dataset_id}: no csv", flush=True)
                continue

            rows = load_csv(passport.csv_url)
            municipality_key = detect_municipality_key(rows)
            if not municipality_key:
                print(f"skip {category}/{dataset_id}: no municipality column", flush=True)
                continue

            counts = aggregate_by_municipality(rows, municipality_key, aliases)
            matched = sum(counts.values())
            if matched == 0:
                print(f"skip {category}/{dataset_id}: no matched municipalities", flush=True)
                continue

            if group_id not in groups:
                groups[group_id] = {
                    "id": group_id,
                    "name": group_name,
                    "description": (
                        f"Официальные открытые данные Республики Башкортостан ({label}). "
                        f"Снимок обновлён {fetched_on} с {BASE_URL}"
                    ),
                }

            indicator_id = f"opendata_{slugify(category)}_{dataset_id}_count"
            indicators.append(
                {
                    "id": indicator_id,
                    "groupId": group_id,
                    "name": f"{passport.title}: количество объектов",
                    "unit": "ед.",
                    "description": (
                        f"Открытые данные РБ, раздел {category}, набор {dataset_id}, снимок {fetched_on}"
                    ),
                    "rankDirection": "desc",
                    "sourceId": "bashkortostan_open_data",
                    "sourceIndicatorId": f"{category}:{dataset_id}",
                }
            )

            for district_id, count in sorted(counts.items()):
                values.append(
                    {
                        "districtId": district_id,
                        "indicatorId": indicator_id,
                        "year": year,
                        "value": count,
                        "sourceId": "bashkortostan_open_data",
                    }
                )

            print(f"{category}/{dataset_id}: {matched} matched objects", flush=True)

    write_snapshot(sorted(groups.values(), key=lambda item: item["name"]), indicators, values)
    CATALOG_OUTPUT.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"wrote {OUTPUT}", flush=True)
    print(f"wrote {CATALOG_OUTPUT}", flush=True)
    print(
        f"groups={len(groups)} indicators={len(indicators)} values={len(values)} datasets={len(catalog)}",
        flush=True,
    )


def discover_categories() -> list[str]:
    html = fetch_html(f"{BASE_URL}/datasets/")
    categories = sorted(
        {
            match
            for match in re.findall(r"/datasets/([a-z0-9-]+)/", html)
            if match not in {"datasets", "organizations", "news"}
        }
    )
    return categories or list(CATEGORY_LABELS.keys())


def discover_dataset_ids(category: str) -> list[str]:
    html = fetch_html(f"{BASE_URL}/datasets/{category}/")
    ids = sorted({match for match in re.findall(rf"/datasets/{re.escape(category)}/(\d+)/", html)}, key=int)
    return ids


def fetch_passport(category: str, dataset_id: str) -> DatasetPassport:
    html = fetch_html(f"{BASE_URL}/datasets/{category}/{dataset_id}/")
    title_match = re.search(r"<h1[^>]*>\s*([^<]+?)\s*</h1>", html, flags=re.IGNORECASE)
    title = normalize_text(title_match.group(1)) if title_match else f"Набор {dataset_id}"
    csv_match = re.search(r'href="([^"]*dowhload_file_utf8\.php\?file=[^"]*\.csv)"', html)
    csv_url = BASE_URL + csv_match.group(1) if csv_match else None
    return DatasetPassport(category=category, dataset_id=dataset_id, title=title, csv_url=csv_url)


def detect_municipality_key(rows: list[dict[str, str]]) -> str | None:
    if not rows:
        return None

    for key in rows[0].keys():
        normalized = normalize_text(key).lower()
        if any(hint in normalized for hint in MUNICIPALITY_HINTS):
            return key

    return None


def aggregate_by_municipality(
    rows: list[dict[str, str]], municipality_key: str, aliases: dict[str, str]
) -> dict[str, int]:
    counts = {municipality_id: 0 for municipality_id in aliases["__district_ids__"]}

    for row in rows:
        municipality = normalize_text(row.get(municipality_key, ""))
        if not municipality:
            continue
        district_id = aliases.get(municipality) or aliases.get(normalize_alias(municipality))
        if district_id:
            counts[district_id] += 1

    return counts


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


def load_csv(url: str) -> list[dict[str, str]]:
    raw = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "bashkortostan-stats-dashboard"}), timeout=60).read()
    text = raw.decode("utf-8", errors="replace")
    rows = list(csv.DictReader(text.splitlines()))
    return [row for row in rows if is_data_row(row)]


def is_data_row(row: dict[str, str]) -> bool:
    first_value = next(iter(row.values()), "").strip()
    return bool(first_value) and first_value not in {"№", "п/п"}


def fetch_html(url: str) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": "bashkortostan-stats-dashboard"})
    return urllib.request.urlopen(request, timeout=60).read().decode("utf-8", errors="replace")


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


def normalize_text(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("\xa0", " ")).strip()


def normalize_alias(value: str) -> str:
    return normalize_text(value.replace("ё", "е").replace("Ё", "Е"))


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", value.lower()).strip("_")


def dump_ts(value) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
