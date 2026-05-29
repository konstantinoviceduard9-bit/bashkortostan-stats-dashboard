"""Minimal Rosstat query tests."""

import re
import warnings
from pathlib import Path

import httpx

warnings.filterwarnings("ignore", message="Unverified HTTPS request")

BASE = "https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi"
OUT = Path(__file__).resolve().parents[1] / "data" / "rosstat_probe"


def ok(html: str) -> bool:
    return "Ошибка формирования" not in html and "ошибка формирования" not in html.lower()


def main() -> None:
    queries = [
        "Pokazateli:8006001;munr:80601000;tippos:10;oktmo:80601000;god:2023;period:17;",
        "Pokazateli:8006001;munr:80601000;tippos:10,7,1,4;oktmo:80601000;god:2023;period:17;",
        "Pokazateli:8006001;munr:80601000,80602000;tippos:10;oktmo:80601000,80602000;god:2023;period:17;",
    ]
    layouts = [
        "Pokazateli_z:1;munr_b:1;tippos_b:1;oktmo_b:1;god_s:1;period_s:1;",
        "Pokazateli_z:1;god_s:1;munr_b:1;tippos_b:1;oktmo_b:1;period_s:1;",
    ]
    with httpx.Client(timeout=180.0, follow_redirects=True, verify=False) as client:
        client.post(BASE, data={"pl": "8006001"})
        for q in queries:
            for gm in layouts:
                payload = {
                    "Qry": q,
                    "QryGm": gm,
                    "QryFootNotes": ";",
                    "YearsList": "2006;2007;2008;2009;2010;2011;2012;2013;2014;2015;2016;2017;2018;2019;2020;2021;2022;2023;2024;",
                    "rdLayoutType": "Au",
                    "tbl": "x",
                }
                resp = client.post(BASE, data=payload)
                if ok(resp.text):
                    print("OK", len(resp.text), q[:60], gm[:40])
                    (OUT / "table_min_ok.html").write_text(resp.text, encoding="utf-8")
                    # try CSV
                    csv_payload = {
                        "Format": "CSV",
                        "YearFrom": "2023",
                        "YearTo": "2023",
                        "DiagSz": "800x600",
                        "Qry": q,
                        "QryGm": gm,
                        "QryFootNotes": ";",
                        "tbl": "x",
                    }
                    csv_resp = client.post(BASE, data=csv_payload)
                    ct = csv_resp.headers.get("content-type", "")
                    print("CSV", csv_resp.status_code, ct, len(csv_resp.content))
                    (OUT / "export.csv").write_bytes(csv_resp.content)
                    return
                print("fail", len(resp.text), q[:50])


if __name__ == "__main__":
    main()
