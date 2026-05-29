from app.infrastructure.connectors.opendata_csv import load_opendata_frame


def test_load_opendata_frame_decodes_cp1251_payload() -> None:
    csv_bytes = "Муниципальное образование;Значение\nг. Уфа;1\n".encode("cp1251")
    frame = load_opendata_frame(csv_bytes)
    assert list(frame.columns) == ["Муниципальное образование", "Значение"]
    assert frame.iloc[0, 0] == "г. Уфа"
