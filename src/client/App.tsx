import { useEffect, useMemo, useState } from "react";
import type { District, Indicator, IndicatorGroup, RankingRow, Source } from "../shared/types";

interface QualityResponse {
  errors: Array<{ code: string; message: string }>;
  warnings: Array<{ code: string; message: string }>;
}

interface DistrictProfile {
  district: District;
  year: number;
  values: Array<{
    indicatorId: string;
    value: number;
    rank?: number;
    total?: number;
    rankDelta?: number;
    indicator?: Indicator;
    source?: Source;
  }>;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function App() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [groups, setGroups] = useState<IndicatorGroup[]>([]);
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [quality, setQuality] = useState<QualityResponse | null>(null);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedDistrictId, setSelectedDistrictId] = useState("ufa");
  const [selectedGroupId, setSelectedGroupId] = useState("population");
  const [selectedIndicatorId, setSelectedIndicatorId] = useState("population_total");
  const [ranking, setRanking] = useState<RankingRow[]>([]);
  const [profile, setProfile] = useState<DistrictProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetchJson<District[]>("/api/districts"),
      fetchJson<IndicatorGroup[]>("/api/indicator-groups"),
      fetchJson<Indicator[]>("/api/indicators"),
      fetchJson<Source[]>("/api/sources"),
      fetchJson<number[]>("/api/years"),
      fetchJson<QualityResponse>("/api/quality")
    ])
      .then(([nextDistricts, nextGroups, nextIndicators, nextSources, nextYears, nextQuality]) => {
        setDistricts(nextDistricts);
        setGroups(nextGroups);
        setIndicators(nextIndicators);
        setSources(nextSources);
        setYears(nextYears);
        setQuality(nextQuality);
        setSelectedYear(nextYears[0] ?? 2024);
      })
      .catch((loadError: Error) => setError(loadError.message));
  }, []);

  useEffect(() => {
    if (!selectedIndicatorId || !selectedYear) {
      return;
    }

    fetchJson<RankingRow[]>(`/api/rankings?indicatorId=${selectedIndicatorId}&year=${selectedYear}`)
      .then(setRanking)
      .catch((loadError: Error) => setError(loadError.message));
  }, [selectedIndicatorId, selectedYear]);

  useEffect(() => {
    if (!selectedDistrictId || !selectedYear) {
      return;
    }

    fetchJson<DistrictProfile>(`/api/districts/${selectedDistrictId}/profile?year=${selectedYear}`)
      .then(setProfile)
      .catch((loadError: Error) => setError(loadError.message));
  }, [selectedDistrictId, selectedYear]);

  const filteredIndicators = useMemo(
    () => indicators.filter((indicator) => indicator.groupId === selectedGroupId),
    [indicators, selectedGroupId]
  );

  useEffect(() => {
    if (filteredIndicators.length > 0 && !filteredIndicators.some((indicator) => indicator.id === selectedIndicatorId)) {
      setSelectedIndicatorId(filteredIndicators[0].id);
    }
  }, [filteredIndicators, selectedIndicatorId]);

  const selectedIndicator = indicators.find((indicator) => indicator.id === selectedIndicatorId);
  const selectedDistrict = districts.find((district) => district.id === selectedDistrictId);
  const selectedDistrictRank = ranking.find((row) => row.districtId === selectedDistrictId);

  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Республика Башкортостан</p>
          <h1>Дашборд муниципальной статистики</h1>
          <p>
            Смотрите показатели по районам и городским округам, сравнивайте места в рейтинге и проверяйте официальный
            источник каждого значения.
          </p>
        </div>
        <div className="quality-card">
          <span>Качество данных</span>
          <strong>{quality ? `${quality.errors.length} ошибок` : "Загрузка..."}</strong>
          <small>{quality ? `${quality.warnings.length} предупреждений` : "Проверяем справочники"}</small>
        </div>
      </section>

      {error ? <div className="error">{error}</div> : null}

      <section className="filters">
        <label>
          Год
          <select value={selectedYear} onChange={(event) => setSelectedYear(Number(event.target.value))}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label>
          Район
          <select value={selectedDistrictId} onChange={(event) => setSelectedDistrictId(event.target.value)}>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Группа
          <select value={selectedGroupId} onChange={(event) => setSelectedGroupId(event.target.value)}>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Показатель
          <select value={selectedIndicatorId} onChange={(event) => setSelectedIndicatorId(event.target.value)}>
            {filteredIndicators.map((indicator) => (
              <option key={indicator.id} value={indicator.id}>
                {indicator.name}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="summary-grid">
        <article className="summary-card accent">
          <span>Выбранный район</span>
          <strong>{selectedDistrict?.name ?? "Не выбран"}</strong>
          <small>{selectedDistrict?.type === "city" ? "Городской округ" : "Муниципальный район"}</small>
        </article>
        <article className="summary-card">
          <span>Место в рейтинге</span>
          <strong>{selectedDistrictRank ? `${selectedDistrictRank.rank} из ${selectedDistrictRank.total}` : "-"}</strong>
          <small>{selectedIndicator?.name}</small>
        </article>
        <article className="summary-card">
          <span>Значение</span>
          <strong>
            {selectedDistrictRank ? `${formatNumber(selectedDistrictRank.value)} ${selectedDistrictRank.unit}` : "-"}
          </strong>
          <small>{formatDelta(selectedDistrictRank?.rankDelta)}</small>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="panel-header">
            <div>
              <h2>Рейтинг районов</h2>
              <p>{selectedIndicator?.description}</p>
            </div>
            <span>{selectedYear}</span>
          </div>
          <div className="ranking-list">
            {ranking.map((row) => (
              <button
                className={row.districtId === selectedDistrictId ? "ranking-row active" : "ranking-row"}
                key={row.districtId}
                onClick={() => setSelectedDistrictId(row.districtId)}
              >
                <span className="rank">#{row.rank}</span>
                <span>{row.districtName}</span>
                <strong>
                  {formatNumber(row.value)} {row.unit}
                </strong>
              </button>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <h2>Карточка района</h2>
              <p>{profile?.district.name}</p>
            </div>
            <span>{profile?.year}</span>
          </div>
          <div className="indicator-cards">
            {profile?.values.map((value) => (
              <div className="indicator-card" key={`${value.indicatorId}-${value.source?.id}`}>
                <span>{value.indicator?.name ?? value.indicatorId}</span>
                <strong>
                  {formatNumber(value.value)} {value.indicator?.unit}
                </strong>
                <small>
                  {value.rank ? `${value.rank} место из ${value.total}` : "Без рейтинга"} · {value.source?.name}
                </small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Источники данных</h2>
            <p>Для каждого показателя сохраняется ссылка на официальный источник.</p>
          </div>
        </div>
        <div className="source-grid">
          {sources.map((source) => (
            <a className="source-card" href={source.url} key={source.id} target="_blank" rel="noreferrer">
              <strong>{source.name}</strong>
              <span>{source.publisher}</span>
              <small>
                {source.format.toUpperCase()} · {source.publishedAt ?? "дата не указана"}
              </small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 }).format(value);
}

function formatDelta(delta?: number) {
  if (delta === undefined) {
    return "Нет данных за прошлый год";
  }

  if (delta > 0) {
    return `Поднялся на ${delta}`;
  }

  if (delta < 0) {
    return `Опустился на ${Math.abs(delta)}`;
  }

  return "Позиция не изменилась";
}
