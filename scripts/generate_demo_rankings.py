"""Собирает рейтинги по показателям из demo-data/*/summary.json для GitHub Pages."""

import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEMO = ROOT / "frontend" / "public" / "demo-data"
OUT = DEMO / "rankings"

INDICATORS = [
    ("composite_index", "Сводный индекс эффективности", "балл", True, True),
    ("budget_security", "Бюджетная обеспеченность", "%", True, False),
    ("unemployment", "Безработица", "%", False, False),
    ("average_salary", "Средняя зарплата", "руб.", True, False),
    ("natural_growth", "Естественный прирост", "чел.", True, False),
    ("doctors_per_capita", "Обеспеченность врачами", "врач/10 тыс.", True, False),
    ("housing_commissioned", "Ввод жилья", "кв. м", True, False),
]


def main() -> None:
    summaries: list[tuple[str, dict]] = []
    for path in sorted(DEMO.glob("glava_*/summary.json")):
        login = path.parent.name
        summaries.append((login, json.loads(path.read_text(encoding="utf-8"))))

    OUT.mkdir(parents=True, exist_ok=True)
    manifest = []

    for code, name, unit, higher, from_summary_rank in INDICATORS:
        entries: list[tuple[str, float]] = []
        if from_summary_rank:
            for login, data in summaries:
                rank = data.get("rank")
                if rank is not None:
                    total = data.get("total") or 62
                    score = round((total - rank + 1) / total * 100, 2)
                    entries.append((login, score))
        else:
            for login, data in summaries:
                for kpi in data.get("kpis", []):
                    if kpi.get("code") == code and kpi.get("value") is not None:
                        entries.append((login, float(kpi["value"])))
                        break

        if len(entries) < 2:
            continue

        entries.sort(key=lambda item: item[1], reverse=higher)
        rows = [{"rank": i, "login": login, "value": value} for i, (login, value) in enumerate(entries, start=1)]
        payload = {"indicator_code": code, "indicator_name": name, "unit": unit, "rows": rows}
        (OUT / f"{code}.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
        manifest.append({"code": code, "name": name, "unit": unit})
        print(f"{code}: {len(rows)} municipalities")

    (OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Saved to {OUT}")


if __name__ == "__main__":
    main()
