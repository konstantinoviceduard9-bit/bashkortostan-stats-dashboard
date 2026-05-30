"""Write municipalities.json for login page from catalog (without full export)."""

import json
from pathlib import Path

from app.domain.municipalities_catalog import MUNICIPALITIES_CATALOG
from scripts.seed_data import head_login

OUT = Path(__file__).resolve().parents[2] / "frontend" / "public" / "demo-data" / "municipalities.json"


def main() -> None:
    manifest = [
        {
            "login": head_login(item["slug"]),
            "slug": item["slug"],
            "name": item["name"],
            "type": item["type"],
            "oktmo": item["oktmo"],
        }
        for item in sorted(MUNICIPALITIES_CATALOG, key=lambda row: row["name"])
    ]
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(manifest)} municipalities to {OUT}")


if __name__ == "__main__":
    main()
