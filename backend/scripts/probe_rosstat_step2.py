"""Probe Rosstat query flow after indicator selection."""

import re
import warnings
from pathlib import Path

import httpx

warnings.filterwarnings("ignore", message="Unverified HTTPS request")

BASE = "https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi"
OUT = Path(__file__).resolve().parents[1] / "data" / "rosstat_probe"


def save(name: str, text: str) -> None:
    OUT.mkdir(exist_ok=True)
    (OUT / name).write_text(text, encoding="utf-8")
    print("saved", name, len(text))


def main() -> None:
    with httpx.Client(timeout=120.0, follow_redirects=True, verify=False) as client:
        # Step 1: select indicator via POST pl=
        resp = client.post(BASE, data={"pl": "8006001"})
        save("step1_post_pl.html", resp.text)
        inputs = sorted(set(re.findall(r'name="([^"]+)"', resp.text)))
        print("inputs:", inputs)

        # find forms and actions
        forms = re.findall(r"<FORM[^>]*action=\"?([^\" >]+)\"?[^>]*>", resp.text, re.I)
        print("forms:", forms)

        for kw in ("period", "mun", "OKTMO", "октмо", "csv", "DBTable", "year", "Год"):
            print(kw, resp.text.lower().count(kw.lower()))

        # try submitting with common field names from step1 page
        candidates = [
            {"pl": "8006001", "period": "2023", "mun": "all"},
            {"pl": "8006001", "year": "2023", "mun": "all"},
            {"pl": "8006001", "1": "2023"},
        ]
        for idx, data in enumerate(candidates):
            r = client.post(BASE, data=data)
            save(f"step2_try{idx}.html", r.text)
            if "<table" in r.text.lower() and len(r.text) > 10000:
                print("candidate", idx, "has big table", len(r.text))


if __name__ == "__main__":
    main()
