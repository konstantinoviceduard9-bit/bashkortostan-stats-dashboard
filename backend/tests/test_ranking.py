from app.application.ranking import percentile_score


def test_percentile_score_best_is_100():
    assert percentile_score(1, 63) == 100.0


def test_percentile_score_worst_is_low():
    assert percentile_score(63, 63) < 5
