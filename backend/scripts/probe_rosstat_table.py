"""Submit Rosstat table query and inspect response."""

import re
import warnings
from pathlib import Path

import httpx

warnings.filterwarnings("ignore", message="Unverified HTTPS request")

BASE = "https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi"
OUT = Path(__file__).resolve().parents[1] / "data" / "rosstat_probe"


def extract_codes(html: str, prefix: str) -> list[str]:
    pattern = rf'{prefix}\[(\d+)\]="(\d+)"'
    pairs = [(int(idx), val) for idx, val in re.findall(pattern, html)]
    pairs.sort(key=lambda item: item[0])
    return [val for _, val in pairs]


def build_qry(indicator: str, munr_codes: list[str], year: str, period_code: str = "17") -> str:
    munr = ",".join(munr_codes)
    return f"Pokazateli:{indicator};munr:{munr};tippos:;oktmo:;god:{year};period:{period_code};"


def main() -> None:
    OUT.mkdir(exist_ok=True)
    with httpx.Client(timeout=180.0, follow_redirects=True, verify=False) as client:
        step1 = client.post(BASE, data={"pl": "8006001"})
        html = step1.text
        munr_codes = extract_codes(html, "p_munr")
        print("munr count", len(munr_codes))

        qry = build_qry("8006001", munr_codes, "2023")
        qry_gm = "Pokazateli_s:1;munr_b:1;god_s:1;period_s:1;"
        payload = {
            "Qry": qry,
            "QryGm": qry_gm,
            "QryFootNotes": ";",
            "YearsList": "2006;2007;2008;2009;2010;2011;2012;2013;2014;2015;2016;2017;2018;2019;2020;2021;2022;2023;2024;",
            "rdLayoutType": "Au",
            "tbl": "Показать таблицу",
            "NVal": "55",
            "NTbl": "1",
            "NCol": "1",
            "NRow": "55",
        }
        resp = client.post(BASE, data=payload)
        (OUT / "table_result.html").write_text(resp.text, encoding="utf-8")
        print("table response", resp.status_code, len(resp.text))
        tables = re.findall(r"<table[^>]*>", resp.text, re.I)
        print("tables found", len(tables))
        rows = re.findall(r"<tr[^>]*>", resp.text, re.I)
        print("rows found", len(rows))
        # sample numeric cells
        tds = re.findall(r"<td[^>]*>([^<]{1,40})</td>", resp.text)
        print("sample cells", tds[:15])


if __name__ == "__main__":
    main()
