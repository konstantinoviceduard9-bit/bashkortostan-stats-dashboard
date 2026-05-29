import json
import ssl
import urllib.error
import urllib.request

SOURCES = [
    ("Башкортостанстат", "https://02.rosstat.gov.ru/"),
    ("ЕМИСС регион", "https://02.rosstat.gov.ru/emiss"),
    ("БД ПМО Росстат", "https://rosstat.gov.ru/free_doc/new_site/bd_munst/munst.htm"),
    ("Fedstat", "https://www.fedstat.ru/"),
    ("Портал открытых данных РБ", "https://opendata.sf2.simai.ru/"),
    ("data.bashkortostan.ru", "https://data.bashkortostan.ru/"),
    ("opendata.bashkortostan.ru", "https://opendata.bashkortostan.ru/"),
    ("data.gov.ru РБ поиск", "https://data.gov.ru/organization/respublika-bashkortostan"),
    ("tochno.st BDMO", "https://tochno.st/datasets/bdmo"),
    ("Открытая Республика", "https://www.openrepublic.ru/"),
    ("Правительство РБ", "https://www.bashkortostan.ru/"),
    ("statbase.ru", "https://statbase.ru/"),
    ("mojgorod.ru", "https://www.mojgorod.ru/"),
    ("iminfin.ru", "https://www.iminfin.ru/"),
    ("budget.gov.ru", "https://budget.gov.ru/"),
    ("bus.gov.ru", "https://www.bus.gov.ru/"),
    ("gasu.gov.ru", "https://gasu.gov.ru/"),
    ("RCSI BDMO", "https://data.rcsi.science/data-catalog/datasets/115/"),
    ("ГМЦ Росстата API", "https://www.gmcgks.ru/720"),
]

SSL_CONTEXT = ssl.create_default_context()
SSL_CONTEXT.check_hostname = False
SSL_CONTEXT.verify_mode = ssl.CERT_NONE


def probe(name: str, url: str) -> dict:
    try:
        request = urllib.request.Request(url, method="GET", headers={"User-Agent": "bashkortostan-stats-probe/1.0"})
        with urllib.request.urlopen(request, timeout=20, context=SSL_CONTEXT) as response:
            return {"name": name, "url": url, "status": response.status, "ok": True}
    except urllib.error.HTTPError as error:
        return {"name": name, "url": url, "status": error.code, "ok": error.code < 400}
    except Exception as error:
        return {"name": name, "url": url, "ok": False, "error": str(error)[:120]}


def main() -> None:
    print(json.dumps([probe(name, url) for name, url in SOURCES], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
