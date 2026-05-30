from app.infrastructure.connectors.rosstat_bdpmo import extract_munr_codes, parse_out_table


SAMPLE_HTML = """
<html><body>
<script>p_munr[0]="80601000";p_munr[1]="80602000";</script>
<table class="OutTbl">
<tr><td>Абзелиловский район</td><td>1 234</td></tr>
<tr><td>Альшеевский район</td><td>5678,5</td></tr>
</table>
</body></html>
"""


def test_extract_munr_codes():
    codes = extract_munr_codes(SAMPLE_HTML)
    assert codes == ["80601000", "80602000"]


def test_parse_out_table():
    rows = parse_out_table(SAMPLE_HTML)
    assert rows == [("Абзелиловский район", 1234.0), ("Альшеевский район", 5678.5)]
