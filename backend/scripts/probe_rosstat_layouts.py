"""Try Rosstat QryGm layout variants."""

import re
import warnings
from pathlib import Path

import httpx
from bs4 import BeautifulSoup

warnings.filterwarnings("ignore", message="Unverified HTTPS request")

BASE = "https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi"
OUT = Path(__file__).resolve().parents[1] / "data" / "rosstat_probe"


def extract_codes(html: str, prefix: str) -> list[str]:
    pattern = rf'{prefix}\[(\d+)\]="(\d+)"'
    pairs = [(int(idx), val) for idx, val in re.findall(pattern, html)]
    pairs.sort(key=lambda item: item[0])
    return [val for _, val in pairs]


def has_data_table(html: str) -> bool:
    if "Ошибка формирования" in html or "ошибка формирования" in html.lower():
        return False
    soup = BeautifulSoup(html, "html.parser")
    for table in soup.find_all("table"):
        text = table.get_text(" ", strip=True)
        if re.search(r"\d{3,}", text) and ("8060" in text or "8070" in text or "район" in text.lower()):
            return True
    return len(html) > 20000


def main() -> None:
    layouts = [
        "Pokazateli_z:1;god_s:1;munr_b:1;period_s:1;",
        "Pokazateli_s:1;god_s:1;munr_b:1;period_s:1;",
        "Pokazateli_z:1;munr_b:1;god_s:1;period_s:1;",
        "Pokazateli_z:1;munr_b:1;god_b:1;period_b:1;",
        "Pokazateli_z:1;munr_b:1;god_s:1;",
        "munr_b:1;god_s:1;Pokazateli_z:1;period_s:1;",
    ]
    with httpx.Client(timeout=180.0, follow_redirects=True, verify=False) as client:
        html = client.post(BASE, data={"pl": "8006001"}).text
        munr = extract_codes(html, "p_munr")
        qry = (
            f"Pokazateli:8006001;munr:{','.join(munr)};tippos:;oktmo:;god:2023;period:17;"
        )
        for idx, qry_gm in enumerate(layouts):
            payload = {
                "Qry": qry,
                "QryGm": qry_gm,
                "QryFootNotes": ";",
                "YearsList": "2006;2007;2008;2009;2010;2011;2012;2013;2014;2015;2016;2017;2018;2019;2020;2021;2022;2023;2024;",
                "rdLayoutType": "Au",
                "tbl": "x",
            }
            resp = client.post(BASE, data=payload)
            ok = has_data_table(resp.text)
            print(idx, ok, len(resp.text), qry_gm)
            if ok:
                (OUT / f"table_ok_{idx}.html").write_text(resp.text, encoding="utf-8")


if __name__ == "__main__":
    main()
