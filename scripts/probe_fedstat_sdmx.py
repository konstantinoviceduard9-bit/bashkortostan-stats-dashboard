"""
Probe Fedstat indicators for SDMX responses containing Bashkortostan data.
"""
from __future__ import annotations

import json
import re
import sys
import urllib.parse
import urllib.request
from http.cookiejar import CookieJar
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from discover_fedstat_indicator import (  # noqa: E402
    build_starter_spec,
    decode_js_string,
    extract_dimensions,
    extract_layout_ids,
    extract_page_title,
    fetch_indicator_html,
    pick_bashkortostan_value,
)

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)

BASH_PATTERNS = (
    "башкортостан",
    "Башкортостан",
    "\\u0411\\u0430\\u0448\\u043a\\u043e\\u0440\\u0442\\u043e\\u0441\\u0442\\u0430\\u043d",
)


def make_opener() -> urllib.request.OpenerDirector:
    jar = CookieJar()
    return urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))


def post_sdmx(opener: urllib.request.OpenerDirector, spec: dict) -> tuple[int, str, str]:
    body = urllib.parse.urlencode(
        [
            ("format", "sdmx"),
            ("id", spec["fedstatIndicatorId"]),
            ("indicator_title", spec["title"]),
            ("lineObjectIds", spec["filterObjectIds"]["lineObjectIds"]),
            ("columnObjectIds", spec["filterObjectIds"]["columnObjectIds"]),
            ("filterObjectIds", spec["filterObjectIds"]["filterObjectIds"]),
        ]
        + [("selectedFilterIds", sid) for sid in spec["selectedFilterIds"]],
        encoding="utf-8",
    ).encode("utf-8")

    req = urllib.request.Request(
        "https://www.fedstat.ru/indicator/data.do?format=sdmx",
        data=body,
        headers={
            "User-Agent": UA,
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/xml,text/xml,*/*",
            "Referer": f"https://www.fedstat.ru/indicator/{spec['fedstatIndicatorId']}",
            "Origin": "https://www.fedstat.ru",
        },
        method="POST",
    )
    with opener.open(req, timeout=120) as resp:
        text = resp.read().decode("utf-8", errors="replace")
        return resp.status, resp.headers.get("Content-Type", ""), text


def is_login_html(text: str) -> bool:
    lower = text[:8000].lower()
    if "left_columns" in text or "filterobjectids" in lower:
        return False
    markers = (
        "j_security_check",
        'name="password"',
        "form-login",
        "войти в систему",
        "авторизация пользователя",
    )
    return any(m in lower for m in markers)


def has_bashkortostan(text: str) -> bool:
    if any(p in text for p in BASH_PATTERNS):
        return True
    try:
        if "Башкортостан" in text.encode().decode("unicode_escape"):
            return True
    except Exception:
        pass
    return False


def extract_sdmx_dimensions(sdmx: str) -> list[dict]:
    """Extract dimension ids from first Series Value elements."""
    dims: list[str] = []
    for m in re.finditer(r'<[^:]*:?Value\s+id="([^"]+)"\s+value="([^"]*)"', sdmx):
        dim_id, val = m.group(1), m.group(2)
        if dim_id not in dims:
            dims.append(dim_id)
    return dims


def find_bashkortostan_series_sample(sdmx: str) -> dict | None:
    """Return dimension map for first series mentioning Bashkortostan."""
    series_blocks = re.split(r"<[^:]*:?Series\b", sdmx)
    for block in series_blocks[1:]:
        if not has_bashkortostan(block):
            continue
        dimensions: dict[str, str] = {}
        for m in re.finditer(r'<[^:]*:?Value\s+id="([^"]+)"\s+value="([^"]*)"', block):
            dimensions[m.group(1)] = decode_js_string(m.group(2))
        obs = re.search(r'<[^:]*:?ObsValue\s+value="([^"]*)"', block)
        return {
            "dimensions": dimensions,
            "obsValue": obs.group(1) if obs else None,
        }
    return None


def guess_year_dimension(dimensions: dict[str, str]) -> str | None:
    for dim_id, val in dimensions.items():
        if re.fullmatch(r"\d{4}", val.strip()):
            return dim_id
    for dim_id, val in dimensions.items():
        if re.search(r"\d{4}", val):
            return dim_id
    return None


def guess_municipality_dimension(dimensions: dict[str, str]) -> str | None:
    for dim_id, val in dimensions.items():
        if "башкортостан" in val.lower():
            return dim_id
    return None


def is_republic_level(dimensions: dict[str, str], html: str) -> bool:
    region_titles = []
    for dim in extract_dimensions(html):
        title = dim["title"].lower()
        if "субъект" in title or "регион" in title or "территор" in title:
            region_titles.append(dim["id"])
    for dim_id, val in dimensions.items():
        if dim_id in region_titles and "башкортостан" in val.lower():
            return True
    # fallback: if value looks like full region name
    for val in dimensions.values():
        if re.search(r"республика\s+башкортостан", val, re.I):
            return True
    return False


def enrich_spec_from_sdmx(spec: dict, sdmx: str, html: str) -> dict | None:
    sample = find_bashkortostan_series_sample(sdmx)
    if not sample:
        return None

    dims = sample["dimensions"]
    muni_dim = guess_municipality_dimension(dims)
    year_dim = guess_year_dimension(dims)
    if not muni_dim or not year_dim:
        return None

    bash_name = dims[muni_dim]
    out = {k: v for k, v in spec.items() if not k.startswith("_")}
    out["municipalityDimension"] = muni_dim
    out["yearDimension"] = year_dim
    out["districtAliases"] = {bash_name: "republic_bashkortostan"}
    out["_level"] = "republic" if is_republic_level(dims, html) else "unknown"
    out["_sample"] = sample
    return out


def probe_indicator(opener: urllib.request.OpenerDirector, indicator_id: str) -> dict:
    result = {"indicatorId": indicator_id, "ok": False}
    try:
        html = fetch_indicator_html(indicator_id)
    except Exception as e:
        result["error"] = f"fetch html: {e}"
        return result

    if is_login_html(html):
        result["error"] = "indicator page returned login HTML"
        return result

    layout = extract_layout_ids(html)
    dimensions = extract_dimensions(html)
    spec = build_starter_spec(indicator_id, html, layout, dimensions)
    spec.pop("_discovery", None)

    # Try with minimal filters first, then with bashkortostan filter if present
    variants = [spec["selectedFilterIds"]]
    bash = pick_bashkortostan_value(dimensions)
    if bash:
        extra = f"{bash['dimensionId']}_{bash['id']}"
        if extra not in variants[0]:
            variants.append([*variants[0], extra])

    for selected in variants:
        trial = {**spec, "selectedFilterIds": selected}
        try:
            status, ctype, text = post_sdmx(opener, trial)
        except Exception as e:
            result["lastError"] = f"post sdmx: {e}"
            continue

        result["httpStatus"] = status
        result["contentType"] = ctype
        result["responseLen"] = len(text)
        result["isLoginHtml"] = is_login_html(text)
        result["hasSeries"] = "<Series" in text or ":Series" in text
        result["hasBashkortostan"] = has_bashkortostan(text)

        if result["isLoginHtml"]:
            result["lastError"] = "SDMX endpoint returned login HTML"
            continue
        if not result["hasSeries"]:
            result["lastError"] = "no Series in response"
            continue
        if not result["hasBashkortostan"]:
            result["lastError"] = "no Bashkortostan in SDMX"
            continue

        enriched = enrich_spec_from_sdmx(trial, text, html)
        if enriched:
            result["ok"] = True
            result["spec"] = enriched
            result["selectedFilterIds"] = selected
            return result
        result["lastError"] = "could not infer municipality/year dimensions"

    return result


def main() -> None:
    candidates = sys.argv[1:] if len(sys.argv) > 1 else [
        "31074",
        "37426",
        "30611",
        "31038",
        "57831",
        "57936",
        "57940",
        "58012",
        "58118",
        "58474",
        "58526",
        "58636",
        "58742",
        "58848",
        "58954",
        "59060",
        "59166",
        "59272",
        "59378",
        "59484",
        "59590",
        "59696",
        "59802",
        "59908",
        "60014",
        "60120",
        "60226",
        "60332",
        "60438",
        "60544",
        "60650",
        "60756",
        "60862",
        "60968",
        "61074",
        "61180",
        "61286",
        "61392",
        "61498",
        "61604",
        "61710",
        "61816",
        "61922",
        "62028",
        "62134",
        "62240",
        "62346",
        "62452",
        "62558",
        "62664",
        "62770",
        "62876",
        "62982",
        "63088",
        "63194",
        "63300",
        "63406",
        "63512",
        "63618",
        "63724",
        "63830",
        "63936",
        "64042",
        "64148",
        "64254",
        "64360",
        "64466",
        "64572",
        "64678",
        "64784",
        "64890",
        "64996",
        "65102",
        "65208",
        "65314",
        "65420",
        "65526",
        "65632",
        "65738",
        "65844",
        "65950",
        "66056",
        "66162",
        "66268",
        "66374",
        "66480",
        "66586",
        "66692",
        "66798",
        "66904",
        "67010",
        "67116",
        "67222",
        "67328",
        "67434",
        "67540",
        "67646",
        "67752",
        "67858",
        "67964",
        "68070",
        "68176",
        "68282",
        "68388",
        "68494",
        "68600",
        "68706",
        "68812",
        "68918",
        "69024",
        "69130",
        "69236",
        "69342",
        "69448",
        "69554",
        "69660",
        "69766",
        "69872",
        "69978",
        "70084",
        "70190",
        "70296",
        "70402",
        "70508",
        "70614",
        "70720",
        "70826",
        "70932",
        "71038",
        "71144",
        "71250",
        "71356",
        "71462",
        "71568",
        "71674",
        "71780",
        "71886",
        "71992",
        "72098",
        "72204",
        "72310",
        "72416",
        "72522",
        "72628",
        "72734",
        "72840",
        "72946",
        "73052",
        "73158",
        "73264",
        "73370",
        "73476",
        "73582",
        "73688",
        "73794",
        "73900",
        "74006",
        "74112",
        "74218",
        "74324",
        "74430",
        "74536",
        "74642",
        "74748",
        "74854",
        "74960",
        "75066",
        "75172",
        "75278",
        "75384",
        "75490",
        "75596",
        "75702",
        "75808",
        "75914",
        "76020",
        "76126",
        "76232",
        "76338",
        "76444",
        "76550",
        "76656",
        "76762",
        "76868",
        "76974",
        "77080",
        "77186",
        "77292",
        "77398",
        "77504",
        "77610",
        "77716",
        "77822",
        "77928",
        "78034",
        "78140",
        "78246",
        "78352",
        "78458",
        "78564",
        "78670",
        "78776",
        "78882",
        "78988",
        "79094",
        "79200",
        "79306",
        "79412",
        "79518",
        "79624",
        "79730",
        "79836",
        "79942",
        "80048",
        "80154",
        "80260",
        "80366",
        "80472",
        "80578",
        "80684",
        "80790",
        "80896",
        "81002",
        "81108",
        "81214",
        "81320",
        "81426",
        "81532",
        "81638",
        "81744",
        "81850",
        "81956",
        "82062",
        "82168",
        "82274",
        "82380",
        "82486",
        "82592",
        "82698",
        "82804",
        "82910",
        "83016",
        "83122",
        "83228",
        "83334",
        "83440",
        "83546",
        "83652",
        "83758",
        "83864",
        "83970",
        "84076",
        "84182",
        "84288",
        "84394",
        "84500",
        "84606",
        "84712",
        "84818",
        "84924",
        "85030",
        "85136",
        "85242",
        "85348",
        "85454",
        "85560",
        "85666",
        "85772",
        "85878",
        "85984",
        "86090",
        "86196",
        "86302",
        "86408",
        "86514",
        "86620",
        "86726",
        "86832",
        "86938",
        "87044",
        "87150",
        "87256",
        "87362",
        "87468",
        "87574",
        "87680",
        "87786",
        "87892",
        "87998",
        "88104",
        "88210",
        "88316",
        "88422",
        "88528",
        "88634",
        "88740",
        "88846",
        "88952",
        "89058",
        "89164",
        "89270",
        "89376",
        "89482",
        "89588",
        "89694",
        "89800",
        "89906",
        "90012",
        "90118",
        "90224",
        "90330",
        "90436",
        "90542",
        "90648",
        "90754",
        "90860",
        "90966",
        "91072",
        "91178",
        "91284",
        "91390",
        "91496",
        "91602",
        "91708",
        "91814",
        "91920",
        "92026",
        "92132",
        "92238",
        "92344",
        "92450",
        "92556",
        "92662",
        "92768",
        "92874",
        "92980",
        "93086",
        "93192",
        "93298",
        "93404",
        "93510",
        "93616",
        "93722",
        "93828",
        "93934",
        "94040",
        "94146",
        "94252",
        "94358",
        "94464",
        "94570",
        "94676",
        "94782",
        "94888",
        "94994",
        "95100",
        "95206",
        "95312",
        "95418",
        "95524",
        "95630",
        "95736",
        "95842",
        "95948",
        "96054",
        "96160",
        "96266",
        "96372",
        "96478",
        "96584",
        "96690",
        "96796",
        "96902",
        "97008",
        "97114",
        "97220",
        "97326",
        "97432",
        "97538",
        "97644",
        "97750",
        "97856",
        "97962",
        "98068",
        "98174",
        "98280",
        "98386",
        "98492",
        "98598",
        "98704",
        "98810",
        "98916",
        "99022",
        "99128",
        "99234",
        "99340",
        "99446",
        "99552",
        "99658",
        "99764",
        "99870",
        "99976",
    ]

    # Use a focused list if no args - search common regional indicators
    if len(sys.argv) == 1:
        candidates = [
            "31074",
            "37426",
            "30611",
            "31038",
            "57831",
            "57936",
            "58012",
            "58474",
            "58636",
            "58848",
            "59060",
            "59272",
            "59484",
            "59696",
            "59908",
            "60120",
            "60332",
            "60544",
            "60756",
            "60968",
            "61180",
            "61392",
            "61604",
            "61816",
            "62028",
            "62240",
            "62452",
            "62664",
            "62876",
            "63088",
            "63200",
            "63406",
            "63618",
            "63830",
            "64042",
            "64254",
            "64466",
            "64678",
            "64890",
            "65102",
            "65314",
            "65526",
            "65738",
            "65950",
            "66162",
            "66374",
            "66586",
            "66798",
            "67010",
            "67222",
            "67434",
            "67646",
            "67858",
            "68070",
            "68282",
            "68494",
            "68706",
            "68918",
            "69130",
            "69342",
            "69554",
            "69766",
            "69978",
            "70190",
            "70402",
            "70614",
            "70826",
            "71038",
            "71250",
            "71462",
            "71674",
            "71886",
            "72098",
            "72310",
            "72522",
            "72734",
            "72946",
            "73158",
            "73370",
            "73582",
            "73794",
            "74006",
            "74218",
            "74430",
            "74642",
            "74854",
            "75066",
            "75278",
            "75490",
            "75702",
            "75914",
            "76126",
            "76338",
            "76550",
            "76762",
            "76974",
            "77186",
            "77398",
            "77610",
            "77822",
            "78034",
            "78246",
            "78458",
            "78670",
            "78882",
            "79094",
            "79306",
            "79518",
            "79730",
            "79942",
            "80154",
            "80366",
            "80578",
            "80790",
            "81002",
            "81214",
            "81426",
            "81638",
            "81850",
            "82062",
            "82274",
            "82486",
            "82698",
            "82910",
            "83122",
            "83334",
            "83546",
            "83758",
            "83970",
            "84182",
            "84394",
            "84606",
            "84818",
            "85030",
            "85242",
            "85454",
            "85666",
            "85878",
            "86090",
            "86302",
            "86514",
            "86726",
            "86938",
            "87150",
            "87362",
            "87574",
            "87786",
            "87998",
            "88210",
            "88422",
            "88634",
            "88846",
            "89058",
            "89270",
            "89482",
            "89694",
            "89906",
            "90118",
            "90330",
            "90542",
            "90754",
            "90966",
            "91178",
            "91390",
            "91602",
            "91814",
            "92026",
            "92238",
            "92450",
            "92662",
            "92874",
            "93086",
            "93298",
            "93510",
            "93722",
            "93934",
            "94146",
            "94358",
            "94570",
            "94782",
            "94994",
            "95206",
            "95418",
            "95630",
            "95842",
            "96054",
            "96266",
            "96478",
            "96690",
            "96902",
            "97114",
            "97326",
            "97538",
            "97750",
            "97962",
            "98174",
            "98386",
            "98598",
            "98810",
            "99022",
            "99234",
            "99446",
            "99658",
            "99870",
        ]

    opener = make_opener()
    # Warm up session with homepage
    try:
        req = urllib.request.Request("https://www.fedstat.ru/", headers={"User-Agent": UA})
        opener.open(req, timeout=30).read()
    except Exception:
        pass

    working = []
    for ind_id in candidates:
        print(f"Probing {ind_id}...", flush=True)
        r = probe_indicator(opener, ind_id)
        if r.get("ok"):
            print(f"  OK: {r['spec']['title'][:60]}", flush=True)
            working.append(r)
            if len(working) >= 5:
                break
        else:
            err = r.get("error") or r.get("lastError", "unknown")
            print(f"  skip: {err}", flush=True)

    # Output clean specs
    specs = []
    for r in working:
        s = r["spec"]
        s.pop("_sample", None)
        level = s.pop("_level", "unknown")
        s["_dataLevel"] = level
        specs.append(s)

    print("\n=== WORKING SPECS ===")
    print(json.dumps(specs, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
