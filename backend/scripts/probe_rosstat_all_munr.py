"""Test fetching all municipalities in one Rosstat query."""

import re
import warnings
from pathlib import Path

import httpx
from bs4 import BeautifulSoup

warnings.filterwarnings("ignore", message="Unverified HTTPS request")

BASE = "https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi"


def extract_codes(html: str, prefix: str) -> list[str]:
    pattern = rf'{prefix}\[(\d+)\]="(\d+)"'
    pairs = [(int(idx), val) for idx, val in re.findall(pattern, html)]
    pairs.sort(key=lambda item: item[0])
    return [val for _, val in pairs]


def parse_table(html: str) -> list[tuple[str, float]]:
    soup = BeautifulSoup(html, "html.parser")
    table = soup.find("table", class_="OutTbl")
    if table is None:
        return []
    rows: list[tuple[str, float]] = []
    for tr in table.find_all("tr"):
        cells = tr.find_all("td")
        if len(cells) < 2:
            continue
        label = cells[0].get_text(" ", strip=True)
        value_text = cells[-1].get_text(" ", strip=True).replace(" ", "").replace(",", ".")
        if not value_text or not re.fullmatch(r"-?\d+(?:\.\d+)?", value_text):
            continue
        rows.append((label, float(value_text)))
    return rows


def fetch(client: httpx.Client, munr_codes: list[str], year: str) -> tuple[int, list[tuple[str, float]]]:
    qry = (
        f"Pokazateli:8006001;munr:{','.join(munr_codes)};tippos:10;oktmo:{','.join(munr_codes)};"
        f"god:{year};period:17;"
    )
    qry_gm = "Pokazateli_z:1;munr_b:1;tippos_b:1;oktmo_b:1;god_s:1;period_s:1;"
    resp = client.post(
        BASE,
        data={
            "Qry": qry,
            "QryGm": qry_gm,
            "QryFootNotes": ";",
            "YearsList": "2006;2007;2008;2009;2010;2011;2012;2013;2014;2015;2016;2017;2018;2019;2020;2021;2022;2023;2024;",
            "rdLayoutType": "Au",
            "tbl": "x",
        },
    )
    return len(resp.text), parse_table(resp.text)


def main() -> None:
    with httpx.Client(timeout=180.0, follow_redirects=True, verify=False) as client:
        bootstrap = client.post(BASE, data={"pl": "8006001"}).text
        munr = extract_codes(bootstrap, "p_munr")
        size, rows = fetch(client, munr, "2023")
        out = Path(__file__).resolve().parents[1] / "data" / "rosstat_probe" / "all_munr.html"
        # re-fetch to save
        qry = (
            f"Pokazateli:8006001;munr:{','.join(munr)};tippos:10;oktmo:{','.join(munr)};"
            f"god:2023;period:17;"
        )
        resp = client.post(
            BASE,
            data={
                "Qry": qry,
                "QryGm": "Pokazateli_z:1;munr_b:1;tippos_b:1;oktmo_b:1;god_s:1;period_s:1;",
                "QryFootNotes": ";",
                "YearsList": "2006;2024",
                "rdLayoutType": "Au",
                "tbl": "x",
            },
        )
        out.write_text(resp.text, encoding="utf-8")
        print("all munr", size, "rows", len(rows))
        for code, (label, value) in zip(munr, rows):
            print(code, value)


if __name__ == "__main__":
    main()
