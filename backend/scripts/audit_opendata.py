"""Audit municipality label coverage for opendata catalog CSVs (no DB)."""

from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

import httpx

BACKEND_ROOT = Path(__file__).resolve().parents[1]
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from app.application.municipality_resolver import MunicipalityResolver, normalize_label
from app.infrastructure.connectors.opendata import CATALOG_PATH, OpendataRbConnector
from app.infrastructure.connectors.opendata_csv import load_opendata_frame

MAX_DATASETS: int | None = None  # None = весь каталог
UNMATCHED_SAMPLE_LIMIT = 20


def catalog_matches(resolver: MunicipalityResolver, label: str) -> bool:
    key = normalize_label(label)
    return bool(key) and resolver.resolve(label) is not None


def collect_labels(frame, municipality_column: str) -> set[str]:
    labels: set[str] = set()
    for value in frame[municipality_column].dropna().astype(str):
        normalized = OpendataRbConnector._normalize_municipality_label(value)
        if OpendataRbConnector._is_data_label(normalized):
            labels.add(normalized)
    return labels


def audit_dataset(client: httpx.Client, dataset: dict, resolver: MunicipalityResolver) -> dict:
    csv_url = dataset.get("csvUrl", "")
    dataset_id = dataset.get("datasetId", "?")
    title = dataset.get("title", dataset_id)

    response = client.get(csv_url)
    response.raise_for_status()

    frame = load_opendata_frame(response.text)
    municipality_column = OpendataRbConnector._detect_municipality_column(frame)
    if not municipality_column:
        return {
            "datasetId": dataset_id,
            "title": title,
            "municipality_column": None,
            "unique_labels": 0,
            "matched": 0,
            "unmatched": 0,
            "unmatched_samples": [],
            "match_rate_pct": None,
            "labels": set(),
        }

    labels = collect_labels(frame, municipality_column)
    matched = sum(1 for label in labels if catalog_matches(resolver, label))
    unmatched_labels = sorted(label for label in labels if not catalog_matches(resolver, label))
    total = len(labels)
    match_rate = (matched / total * 100.0) if total else 100.0

    return {
        "datasetId": dataset_id,
        "title": title,
        "municipality_column": str(municipality_column),
        "unique_labels": total,
        "matched": matched,
        "unmatched": total - matched,
        "unmatched_samples": unmatched_labels[:UNMATCHED_SAMPLE_LIMIT],
        "match_rate_pct": round(match_rate, 2),
        "labels": labels,
    }


def main() -> int:
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    datasets = catalog if MAX_DATASETS is None else catalog[:MAX_DATASETS]
    resolver = MunicipalityResolver()

    grand_unique: set[str] = set()
    grand_matched: set[str] = set()
    grand_unmatched_counter: Counter[str] = Counter()

    print(f"Catalog: {CATALOG_PATH}")
    print(f"Auditing first {len(datasets)} dataset(s)\n")

    with httpx.Client(timeout=60.0, follow_redirects=True) as client:
        for dataset in datasets:
            dataset_id = dataset.get("datasetId", "?")
            title = dataset.get("title", dataset_id)
            print("=" * 72)
            print(f"Dataset {dataset_id}: {title}")
            try:
                report = audit_dataset(client, dataset, resolver)
            except Exception as exc:  # noqa: BLE001
                print(f"  ERROR: {exc}")
                continue

            if report["municipality_column"] is None:
                print("  No municipality column detected")
                continue

            print(f"  Column: {report['municipality_column']}")
            print(f"  Unique labels: {report['unique_labels']}")
            print(f"  Matched: {report['matched']}")
            print(f"  Unmatched: {report['unmatched']}")
            print(f"  Match rate: {report['match_rate_pct']}%")
            if report["unmatched_samples"]:
                print("  Unmatched samples:")
                for sample in report["unmatched_samples"]:
                    print(f"    - {sample}")

            for label in report["labels"]:
                grand_unique.add(label)
                if catalog_matches(resolver, label):
                    grand_matched.add(label)
                else:
                    grand_unmatched_counter[label] += 1

    print("\n" + "=" * 72)
    print(f"AGGREGATE ({len(datasets)} datasets)")
    total = len(grand_unique)
    matched = len(grand_matched)
    rate = (matched / total * 100.0) if total else 100.0
    print(f"  Unique labels: {total}")
    print(f"  Matched: {matched}")
    print(f"  Unmatched: {total - matched}")
    print(f"  Match rate: {rate:.2f}%")
    if grand_unmatched_counter:
        print("  Top unmatched samples:")
        for label in sorted(grand_unmatched_counter.keys())[:UNMATCHED_SAMPLE_LIMIT]:
            print(f"    - {label}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
