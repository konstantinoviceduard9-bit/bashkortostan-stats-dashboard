"""Probe Fedstat indicators for working SDMX with Bashkortostan."""

from __future__ import annotations

import http.cookiejar
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from discover_fedstat_indicator import (  # noqa: E402
    build_starter_spec,
    extract_dimensions,
    extract_layout_ids,
    fetch_indicator_html,
    pick_bashkortostan_value,
)

CANDIDATES = [
    "58612",
    "38015",
    "37426",
    "57832",
    "57936",
    "59265",
    "31066",
    "31211",
    "57610",
    "58496",
]


def post_sdmx(indicator_id: str, body: str) -> tuple[int, str, bool]:
    jar = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    opener.open(
        urllib.request.Request(
            f"https://www.fedstat.ru/indicator/{indicator_id}",
            headers={"User-Agent": "Mozilla/5.0"},
        ),
        timeout=60,
    )
    request = urllib.request.Request(
        "https://www.fedstat.ru/indicator/data.do?format=sdmx",
        data=body.encode("utf-8"),
        headers={
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0",
            "Referer": f"https://www.fedstat.ru/indicator/{indicator_id}",
        },
        method="POST",
    )
    response = opener.open(request, timeout=120)
    text = response.read().decode("utf-8", errors="replace")
    is_xml = "GenericData" in text or "Series" in text
    return response.status, text[:200], is_xml


def main() -> None:
    for indicator_id in CANDIDATES:
        try:
            html = fetch_indicator_html(indicator_id)
            layout = extract_layout_ids(html)
            dimensions = extract_dimensions(html)
            bashkortostan = pick_bashkortostan_value(dimensions)
            spec = build_starter_spec(indicator_id, html, layout, dimensions)
            line = spec["filterObjectIds"]["lineObjectIds"]
            column = spec["filterObjectIds"]["columnObjectIds"]
            filt = spec["filterObjectIds"]["filterObjectIds"]
            parts = [
                "format=sdmx",
                f"id={indicator_id}",
                "indicator_title=probe",
                f"lineObjectIds={line}",
                f"columnObjectIds={column}",
                f"filterObjectIds={filt}",
                f"selectedFilterIds=0_{indicator_id}",
            ]
            if bashkortostan:
                parts.append(f"selectedFilterIds={bashkortostan['dimensionId']}_{bashkortostan['id']}")
            body = "&".join(parts)
            status, preview, is_xml = post_sdmx(indicator_id, body)
            mark = "OK" if is_xml else "FAIL"
            print(f"{mark} {indicator_id} http={status} bashkortostan={bool(bashkortostan)} preview={preview!r}")
            if is_xml and bashkortostan:
                print(f"  -> selectedFilterIds includes Bashkortostan")
        except Exception as error:  # noqa: BLE001
            print(f"ERR {indicator_id}: {error}")


if __name__ == "__main__":
    main()
