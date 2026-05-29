"""Build bdmo_kpi_map.json from bdmo_kpi_candidates.txt using KPI keyword rules."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CANDIDATES = ROOT / "data" / "bdmo_kpi_candidates.txt"
OUT = ROOT / "data" / "bdmo_kpi_map.json"

RULES: list[tuple[str, str, list[str]]] = [
    ("average_salary", "Средняя начисленная зарплата", [r"среднемесячн.*заработ", r"начисленная заработная плата"]),
    ("unemployment", "Уровень безработицы", [r"уровень безработицы", r"безработица"]),
    ("natural_growth", "Естественный прирост", [r"естественн.*прирост"]),
    ("doctors_per_capita", "Численность врачей", [r"численность врач", r"обеспеченность.*врач"]),
    ("housing_commissioned", "Общая площадь жилых помещений", [r"общая площадь жилых помещений"]),
    (
        "budget_security",
        "Инвестиции в основной капитал (местные бюджеты)",
        [r"инвестиции в основной капитал за счет средств местных бюджетов"],
    ),
]


def main() -> None:
    if not CANDIDATES.exists():
        raise SystemExit(f"Run discover_bdmo_kpi.py first: {CANDIDATES}")

    lines = [line.strip() for line in CANDIDATES.read_text(encoding="utf-8").splitlines() if line.strip()]
    mapped: dict[str, dict[str, str]] = {}
    used_kpis: set[str] = set()

    for line in lines:
        code, name, _unit, _section = line.split("|", 3)
        lowered = name.lower()
        for kpi, display, patterns in RULES:
            if kpi in used_kpis:
                continue
            if any(re.search(pattern, lowered) for pattern in patterns):
                mapped[code] = {"kpi": kpi, "name": display}
                used_kpis.add(kpi)
                break

    OUT.write_text(json.dumps(mapped, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Mapped {len(mapped)} BDMO codes -> {sorted(used_kpis)}")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
