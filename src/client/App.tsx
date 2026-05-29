import { useEffect, useMemo, useState } from "react";
import { ARCHIVE_YEARS, getArchiveBaseUrl, isArchiveYear, isHotYear, loadArchiveRanking } from "./archiveData";
import { staticData } from "./staticData";
import { getOperationalYearFromGroupId } from "../shared/opendata";
import type { DemoUser, District, ExecutiveSummary, Indicator, IndicatorGroup, RankingRow, Source } from "../shared/types";

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
  if (import.meta.env.PROD) {
    return readStaticJson<T>(url);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function readStaticJson<T>(url: string): Promise<T> {
  const [path, queryString = ""] = url.split("?");
  const query = new URLSearchParams(queryString);

  switch (path) {
    case "/api/districts":
      return staticData.districts as T;
    case "/api/indicator-groups":
      return staticData.getIndicatorGroups(query.get("year") ? Number(query.get("year")) : undefined) as T;
    case "/api/indicators":
      return staticData.getIndicators(
        String(query.get("groupId") ?? "") || undefined,
        query.get("year") ? Number(query.get("year")) : undefined
      ) as T;
    case "/api/sources":
      return staticData.sources as T;
    case "/api/years":
      return staticData.years as T;
    case "/api/available-indicators":
      return staticData.getAvailableIndicatorIds(Number(query.get("year"))) as T;
    case "/api/quality":
      return staticData.quality as T;
    case "/api/rankings":
      return staticData.getRanking(String(query.get("indicatorId")), Number(query.get("year"))) as T;
    case "/api/executive-summary":
      return staticData.getExecutiveSummary(Number(query.get("year"))) as T;
    default: {
      const profileMatch = path.match(/^\/api\/districts\/([^/]+)\/profile$/);
      if (profileMatch) {
        return staticData.getDistrictProfile(profileMatch[1], Number(query.get("year"))) as T;
      }
      throw new Error(`Статический режим не поддерживает ${url}`);
    }
  }
}

export function App() {
  const [currentUser, setCurrentUser] = useState<DemoUser | null>(null);
  const [loginDistrictId, setLoginDistrictId] = useState("ufa");
  const [districts, setDistricts] = useState<District[]>([]);
  const [groups, setGroups] = useState<IndicatorGroup[]>([]);
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [quality, setQuality] = useState<QualityResponse | null>(null);
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedDistrictId, setSelectedDistrictId] = useState("ufa");
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [selectedIndicatorId, setSelectedIndicatorId] = useState("");
  const [ranking, setRanking] = useState<RankingRow[]>([]);
  const [profile, setProfile] = useState<DistrictProfile | null>(null);
  const [executiveSummary, setExecutiveSummary] = useState<ExecutiveSummary | null>(null);
  const [layerStatus, setLayerStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetchJson<District[]>("/api/districts"),
      fetchJson<Source[]>("/api/sources"),
      fetchJson<number[]>("/api/years"),
      fetchJson<QualityResponse>("/api/quality")
    ])
      .then(([nextDistricts, nextSources, nextYears, nextQuality]) => {
        setDistricts(nextDistricts);
        setSources(nextSources);
        setYears(nextYears);
        setQuality(nextQuality);
        setSelectedYear(nextYears[0] ?? 2024);
        setLoginDistrictId(nextDistricts[0]?.id ?? "ufa");
      })
      .catch((loadError: Error) => setError(loadError.message));
  }, []);

  useEffect(() => {
    if (!selectedIndicatorId || !selectedYear) {
      return;
    }

    if (isArchiveYear(selectedYear)) {
      const archiveBaseUrl = getArchiveBaseUrl();

      if (!archiveBaseUrl) {
        setRanking([]);
        setLayerStatus(
          "Архивный год: задайте VITE_ARCHIVE_DATA_URL и выложите JSON по схеме <база>/<год>/<показатель>.json."
        );
        return;
      }

      setLayerStatus("Загружаем архив из облачного хранилища...");
      loadArchiveRanking({ baseUrl: archiveBaseUrl, indicatorId: selectedIndicatorId, year: selectedYear })
        .then((archiveRanking) => {
          setRanking(archiveRanking);
          setLayerStatus(`Архив ${selectedYear}: данные загружены из облака.`);
        })
        .catch((loadError: Error) => {
          setRanking([]);
          setLayerStatus(loadError.message);
        });
      return;
    }

    if (!isHotYear(selectedYear)) {
      return;
    }

    setLayerStatus(null);
    fetchJson<RankingRow[]>(`/api/rankings?indicatorId=${selectedIndicatorId}&year=${selectedYear}`)
      .then(setRanking)
      .catch((loadError: Error) => setError(loadError.message));
  }, [selectedIndicatorId, selectedYear]);

  useEffect(() => {
    if (!selectedDistrictId || !selectedYear) {
      return;
    }

    if (isArchiveYear(selectedYear)) {
      setProfile({
        district: districts.find((district) => district.id === selectedDistrictId) ?? {
          id: selectedDistrictId,
          name: selectedDistrictId,
          type: "district"
        },
        year: selectedYear,
        values: []
      });
      return;
    }

    fetchJson<DistrictProfile>(`/api/districts/${selectedDistrictId}/profile?year=${selectedYear}`)
      .then(setProfile)
      .catch((loadError: Error) => setError(loadError.message));
  }, [districts, selectedDistrictId, selectedYear]);

  useEffect(() => {
    if (!selectedYear || currentUser?.role !== "region_manager" || isArchiveYear(selectedYear)) {
      setExecutiveSummary(null);
      return;
    }

    fetchJson<ExecutiveSummary>(`/api/executive-summary?year=${selectedYear}`)
      .then(setExecutiveSummary)
      .catch((loadError: Error) => setError(loadError.message));
  }, [currentUser?.role, selectedYear]);

  useEffect(() => {
    if (!selectedYear) {
      return;
    }

    if (isArchiveYear(selectedYear)) {
      setLayerStatus(
        "Архивный год: выберите показатель. Данные подгрузятся из облака после настройки VITE_ARCHIVE_DATA_URL."
      );
      fetchJson<IndicatorGroup[]>("/api/indicator-groups")
        .then(setGroups)
        .catch((loadError: Error) => setError(loadError.message));
      return;
    }

    const latestHotYear = years[0] ?? selectedYear;
    setLayerStatus(
      `Актуальный слой (2024–${latestHotYear}): снимок БД ПМО и открытые данные РБ. Обновление при деплое и по расписанию CI.`
    );
    fetchJson<IndicatorGroup[]>(`/api/indicator-groups?year=${selectedYear}`)
      .then(setGroups)
      .catch((loadError: Error) => setError(loadError.message));
  }, [selectedYear, years]);

  useEffect(() => {
    if (!selectedYear || !selectedGroupId) {
      return;
    }

    const indicatorsUrl = isArchiveYear(selectedYear)
      ? `/api/indicators?groupId=${encodeURIComponent(selectedGroupId)}`
      : `/api/indicators?year=${selectedYear}&groupId=${encodeURIComponent(selectedGroupId)}`;

    fetchJson<Indicator[]>(indicatorsUrl)
      .then(setIndicators)
      .catch((loadError: Error) => setError(loadError.message));
  }, [selectedYear, selectedGroupId]);

  useEffect(() => {
    const groupYear = getOperationalYearFromGroupId(selectedGroupId);
    if (groupYear && !isArchiveYear(selectedYear) && groupYear !== selectedYear) {
      setSelectedYear(groupYear);
    }
  }, [selectedGroupId, selectedYear]);

  const filteredIndicators = useMemo(() => indicators, [indicators]);

  useEffect(() => {
    if (groups.length === 0) {
      return;
    }

    if (!groups.some((group) => group.id === selectedGroupId)) {
      const preferred = groups.find((group) => group.id.startsWith("bdmo_")) ?? groups[0];
      setSelectedGroupId(preferred.id);
    }
  }, [groups, selectedGroupId]);

  useEffect(() => {
    if (isArchiveYear(selectedYear) || groups.length === 0) {
      return;
    }

    const groupYear = getOperationalYearFromGroupId(selectedGroupId);
    if (groupYear && groupYear !== selectedYear) {
      const replacement = groups.find((group) => getOperationalYearFromGroupId(group.id) === selectedYear);
      setSelectedGroupId(replacement?.id ?? groups[0].id);
    }
  }, [groups, selectedGroupId, selectedYear]);

  useEffect(() => {
    if (filteredIndicators.length > 0 && !filteredIndicators.some((indicator) => indicator.id === selectedIndicatorId)) {
      setSelectedIndicatorId(filteredIndicators[0].id);
    }
  }, [filteredIndicators, selectedIndicatorId]);

  const selectedIndicator = indicators.find((indicator) => indicator.id === selectedIndicatorId);
  const selectedDistrict = districts.find((district) => district.id === selectedDistrictId);
  const selectedDistrictRank = ranking.find((row) => row.districtId === selectedDistrictId);
  const isDistrictUser = currentUser?.role === "district_manager";
  const dashboardYears = useMemo(
    () => [...new Set([...years, ...ARCHIVE_YEARS])].sort((a, b) => b - a),
    [years]
  );

  if (!currentUser) {
    return (
      <main className="login-shell">
        <section className="login-grid">
          <div className="login-card">
            <p className="eyebrow">Демо-вход</p>
            <h1>Единый дашборд статистики</h1>
            <p>
              Сейчас вход демонстрационный: он задает роль пользователя. Позже этот слой заменим на настоящие логины,
              пароли и доступы по районам.
            </p>
            <button
              className="primary-button"
              onClick={() =>
                setCurrentUser({
                  id: "region-manager-demo",
                  name: "Руководство региона",
                  role: "region_manager"
                })
              }
            >
              Войти как руководство региона
            </button>
          </div>
          <div className="login-card district-login-card">
            <p className="eyebrow">Для районов</p>
            <h2>Вход руководителя района</h2>
            <p>Выберите свой район, чтобы видеть его показатели и текущее место в рейтингах.</p>
            <label>
              Район
              <select value={loginDistrictId} onChange={(event) => setLoginDistrictId(event.target.value)}>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="primary-button"
              onClick={() => {
                const district = districts.find((item) => item.id === loginDistrictId);
                setSelectedDistrictId(loginDistrictId);
                setCurrentUser({
                  id: `district-manager-${loginDistrictId}`,
                  name: district ? `Руководитель: ${district.name}` : "Руководитель района",
                  role: "district_manager",
                  districtId: loginDistrictId
                });
              }}
            >
              Войти по выбранному району
            </button>
          </div>
        </section>
      </main>
    );
  }

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
          <span>{currentUser.name}</span>
          <strong>Единый вход</strong>
          <small>{isDistrictUser ? "Роль: руководитель района" : "Роль: руководство региона"}</small>
          <button className="ghost-button" onClick={() => setCurrentUser(null)}>
            Выйти
          </button>
        </div>
      </section>

      {error ? <div className="error">{error}</div> : null}
      {layerStatus ? <div className="archive-status">{layerStatus}</div> : null}

      <section className="filters">
        <label>
          Год
          <select value={selectedYear} onChange={(event) => setSelectedYear(Number(event.target.value))}>
            {dashboardYears.map((year) => (
              <option key={year} value={year}>
                {isArchiveYear(year) ? `${year} (архив)` : year}
              </option>
            ))}
          </select>
        </label>
        <label>
          Район
          <select
            value={selectedDistrictId}
            disabled={isDistrictUser}
            onChange={(event) => setSelectedDistrictId(event.target.value)}
          >
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

      {currentUser.role === "region_manager" ? (
        <section className="panel executive-panel">
          <div className="panel-header">
            <div>
              <h2>Сводка для руководства</h2>
              <p>Ключевые показатели, проблемные сигналы и районы в нижней части рейтинга.</p>
            </div>
            <span>{selectedYear}</span>
          </div>
          <div className="executive-grid">
            <div className="executive-cards">
              {executiveSummary?.cards.slice(0, 6).map((card) => (
                <div className="indicator-card" key={card.indicatorId}>
                  <span>{card.indicatorName}</span>
                  <strong>
                    {card.worstDistrictName}: {card.worstRank} из {card.total}
                  </strong>
                  <small>Худшая позиция среди районов · {card.unit}</small>
                </div>
              ))}
            </div>
            <div className="signal-list">
              {(executiveSummary?.problemSignals ?? []).slice(0, 6).map((signal) => (
                <button
                  className={`signal-card ${signal.severity}`}
                  key={`${signal.indicatorId}-${signal.districtId}`}
                  onClick={() => {
                    const signalIndicator = indicators.find((indicator) => indicator.id === signal.indicatorId);
                    setSelectedDistrictId(signal.districtId);
                    if (signalIndicator) {
                      setSelectedGroupId(signalIndicator.groupId);
                    }
                    setSelectedIndicatorId(signal.indicatorId);
                  }}
                >
                  <span>{signal.severity === "critical" ? "Критично" : "Внимание"}</span>
                  <strong>
                    {signal.districtName}: {signal.rank} из {signal.total}
                  </strong>
                  <small>
                    {signal.indicatorName} · {formatNumber(signal.value)} {signal.unit}
                  </small>
                  <em>{signal.reason}</em>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isDistrictUser ? (
        <section className="panel district-focus-panel">
          <div className="panel-header">
            <div>
              <h2>Ваш район в текущей статистике</h2>
              <p>
                {selectedDistrict?.name}: место, значение и изменение позиции по выбранному показателю. Сравнение идет
                со всеми районами в рейтинге.
              </p>
            </div>
            <span>{selectedYear}</span>
          </div>
          <div className="district-focus-grid">
            <div className="summary-card accent">
              <span>Текущее место</span>
              <strong>{selectedDistrictRank ? `${selectedDistrictRank.rank} из ${selectedDistrictRank.total}` : "-"}</strong>
              <small>{selectedIndicator?.name}</small>
            </div>
            <div className="summary-card">
              <span>Значение района</span>
              <strong>
                {selectedDistrictRank ? `${formatNumber(selectedDistrictRank.value)} ${selectedDistrictRank.unit}` : "-"}
              </strong>
              <small>{formatDelta(selectedDistrictRank?.rankDelta)}</small>
            </div>
          </div>
        </section>
      ) : null}

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
            {ranking.length === 0 ? (
              <p className="empty-state">
                {isArchiveYear(selectedYear)
                  ? "Для этого архивного года данные появятся после подключения облачного архива."
                  : filteredIndicators.length === 0
                    ? `За ${selectedYear} год в этой группе нет показателей с ненулевыми значениями. Для оперативных данных здравоохранения выберите 2026 год.`
                    : "По выбранному показателю нет значений за этот год. Выберите другой показатель или год."}
              </p>
            ) : null}
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
            {profile?.values.length === 0 ? (
              <p className="empty-state">
                {isArchiveYear(selectedYear)
                  ? "Карточка района по архивным годам будет загружаться из облачного архива по выбранному показателю."
                  : "Для района нет значений за выбранный год."}
              </p>
            ) : null}
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
            <h2>Источники и качество данных</h2>
            <p>
              Для каждого показателя сохраняется ссылка на официальный источник. Проверка качества:{" "}
              {quality ? `${quality.errors.length} ошибок, ${quality.warnings.length} предупреждений` : "загрузка"}.
            </p>
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
