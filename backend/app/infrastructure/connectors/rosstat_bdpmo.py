"""Официальная БД ПМО Росстата (DBInet.cgi) для Республики Башкортостан."""

from __future__ import annotations

import json
import re
import ssl
from datetime import date, datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

import httpx

from app.config import get_settings
from app.domain.entities import ConnectorResult, UnifiedObservation
from app.infrastructure.connectors.base import BaseConnector

BASE_URL = "https://rosstat.gov.ru/dbscripts/munst/munst80/DBInet.cgi"
INDICATORS_PATH = Path(__file__).resolve().parents[3] / "data" / "rosstat_bdpmo_indicators.json"
YEARS_LIST = (
    "2006;2007;2008;2009;2010;2011;2012;2013;2014;2015;"
    "2016;2017;2018;2019;2020;2021;2022;2023;2024;"
)


class _OutTableParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self._in_out_tbl = False
        self._in_row = False
        self._in_cell = False
        self._cell_text: list[str] = []
        self._current_row: list[str] = []
        self.rows: list[tuple[str, float]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_map = dict(attrs)
        if tag == "table" and attrs_map.get("class") == "OutTbl":
            self._in_out_tbl = True
        if not self._in_out_tbl:
            return
        if tag == "tr":
            self._in_row = True
            self._current_row = []
        elif tag == "td" and self._in_row:
            self._in_cell = True
            self._cell_text = []

    def handle_endtag(self, tag: str) -> None:
        if tag == "table" and self._in_out_tbl:
            self._in_out_tbl = False
        if not self._in_out_tbl:
            return
        if tag == "td" and self._in_cell:
            self._in_cell = False
            self._current_row.append(" ".join(self._cell_text).strip())
        elif tag == "tr" and self._in_row:
            self._in_row = False
            if len(self._current_row) >= 2:
                label = self._current_row[0]
                value_text = self._current_row[-1].replace(" ", "").replace(",", ".")
                if re.fullmatch(r"-?\d+(?:\.\d+)?", value_text):
                    self.rows.append((label, float(value_text)))

    def handle_data(self, data: str) -> None:
        if self._in_cell:
            self._cell_text.append(data.strip())


def extract_munr_codes(html: str) -> list[str]:
    pattern = r'p_munr\[(\d+)\]="(\d+)"'
    pairs = [(int(idx), val) for idx, val in re.findall(pattern, html)]
    pairs.sort(key=lambda item: item[0])
    return [val for _, val in pairs]


def parse_out_table(html: str) -> list[tuple[str, float]]:
    parser = _OutTableParser()
    parser.feed(html)
    return parser.rows


def _load_config() -> dict:
    if not INDICATORS_PATH.exists():
        return {"indicators": [], "layout": "", "period_code": "17"}
    return json.loads(INDICATORS_PATH.read_text(encoding="utf-8"))


class RosstatBdPmoConnector(BaseConnector):
    connector_id = "rosstat_bdpmo"
    display_name = "Росстат БД ПМО"

    async def fetch(self, period: date, municipality_code: str | None = None) -> ConnectorResult:
        settings = get_settings()
        observations: list[UnifiedObservation] = []
        config = _load_config()
        indicators = config.get("indicators", [])
        layout = config.get("layout", "Pokazateli_z:1;munr_b:1;tippos_b:1;oktmo_b:1;god_s:1;period_s:1;")
        period_code = str(config.get("period_code", "17"))
        year = str(period.year)

        if not settings.rosstat_bdpmo_enabled:
            return ConnectorResult(
                connector_id=self.connector_id,
                period=period,
                oktmo=municipality_code,
                observations=[],
                raw_payload_hash=self.hash_observations([]),
                fetched_at=datetime.now(timezone.utc),
                stats={"skipped": "ROSSTAT_BDPMO disabled"},
            )

        if not indicators:
            return ConnectorResult(
                connector_id=self.connector_id,
                period=period,
                oktmo=municipality_code,
                observations=[],
                raw_payload_hash=self.hash_observations([]),
                fetched_at=datetime.now(timezone.utc),
                stats={"error": "rosstat_bdpmo_indicators.json пуст"},
            )

        ssl_context = ssl.create_default_context()
        ssl_context.check_hostname = False
        ssl_context.verify_mode = ssl.CERT_NONE

        fetched_indicators = 0
        async with httpx.AsyncClient(
            timeout=180.0,
            follow_redirects=True,
            verify=ssl_context,
        ) as client:
            bootstrap = await client.post(BASE_URL, data={"pl": indicators[0]["code"]})
            bootstrap.raise_for_status()
            munr_codes = extract_munr_codes(bootstrap.text)
            if municipality_code:
                munr_codes = [code for code in munr_codes if code.startswith(municipality_code[:8])]
            if not munr_codes:
                return ConnectorResult(
                    connector_id=self.connector_id,
                    period=period,
                    oktmo=municipality_code,
                    observations=[],
                    raw_payload_hash=self.hash_observations([]),
                    fetched_at=datetime.now(timezone.utc),
                    stats={"error": "не найдены коды munr в ответе Росстат"},
                )

            munr_joined = ",".join(munr_codes)
            for item in indicators:
                indicator_code = str(item["code"])
                qry = (
                    f"Pokazateli:{indicator_code};munr:{munr_joined};tippos:10;"
                    f"oktmo:{munr_joined};god:{year};period:{period_code};"
                )
                try:
                    response = await client.post(
                        BASE_URL,
                        data={
                            "Qry": qry,
                            "QryGm": layout,
                            "QryFootNotes": ";",
                            "YearsList": YEARS_LIST,
                            "rdLayoutType": "Au",
                            "tbl": "x",
                        },
                    )
                    response.raise_for_status()
                except httpx.HTTPStatusError:
                    continue
                if "Ошибка формирования" in response.text:
                    continue

                rows = parse_out_table(response.text)
                if not rows:
                    continue
                fetched_indicators += 1

                kpi_code = item.get("kpi") or f"rosstat_{indicator_code}"
                for index, (label, value) in enumerate(rows):
                    oktmo = munr_codes[index] if index < len(munr_codes) else label
                    observations.append(
                        UnifiedObservation(
                            indicator_code=str(kpi_code),
                            indicator_name=str(item.get("name", indicator_code)),
                            value=value,
                            unit=str(item.get("unit", "ед.")),
                            period=period,
                            oktmo=oktmo,
                            source=self.connector_id,
                            category=str(item.get("category", "Росстат")),
                            metadata={"rosstat_code": indicator_code, "row_label": label},
                        )
                    )

        if municipality_code:
            prefix = municipality_code[:8]
            observations = [row for row in observations if str(row.oktmo).startswith(prefix)]

        return ConnectorResult(
            connector_id=self.connector_id,
            period=period,
            oktmo=municipality_code,
            observations=observations,
            raw_payload_hash=self.hash_observations(observations),
            fetched_at=datetime.now(timezone.utc),
            stats={"indicators_fetched": fetched_indicators, "munr_count": len(munr_codes)},
        )
