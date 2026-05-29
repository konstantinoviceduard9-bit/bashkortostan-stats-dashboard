"""Probe Rosstat BD PMO CGI endpoints."""

import re
import warnings
from pathlib import Path

import httpx

warnings.filterwarnings("ignore", message="Unverified HTTPS request")

BASE = "https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi"
OUT = Path(__file__).resolve().parents[1] / "data" / "rosstat_probe"


def main() -> None:
    OUT.mkdir(exist_ok=True)
    with httpx.Client(timeout=60.0, follow_redirects=True, verify=False) as client:
        r = client.get(BASE)
        (OUT / "main.html").write_text(r.text, encoding="utf-8")
        print("GET", r.status_code, len(r.text))

        # find scripts and form actions
        for pattern in (r"action=\"([^\"]+)\"", r"function\s+(\w+)", r"DBTable\.cgi", r"GoToQuery", r"submit"):
            hits = re.findall(pattern, r.text, re.I)
            print(pattern, len(hits), hits[:5])

        # extract pl codes from select/option
        pl_codes = re.findall(r'value="(\d+)"[^>]*>([^<]{5,80})', r.text)
        print("pl options sample:", pl_codes[:10])

        params = {"pl": "1100", "period": "2023", "mun": "all"}
        resp = client.get(BASE, params=params)
        (OUT / "query_get.html").write_text(resp.text, encoding="utf-8")
        print("query GET saved", resp.status_code, len(resp.text))

        # try DBTable.cgi if referenced
        for match in set(re.findall(r"([A-Za-z]+\.cgi)", r.text)):
            url = f"https://rosstat.gov.ru/dbscripts/munst/munst80/{match}"
            try:
                probe = client.get(url)
                print("cgi", match, probe.status_code, len(probe.content))
            except Exception as exc:
                print("cgi", match, exc)


if __name__ == "__main__":
    main()
