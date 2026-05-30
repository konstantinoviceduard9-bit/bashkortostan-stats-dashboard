"use client";

import { useEffect, useMemo, useState } from "react";
import { RefreshCw, Search } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState, ErrorBanner, SourceBadge, TableSkeleton } from "@/components/ui/LoadingState";
import { formatSourceLabel } from "@/lib/dashboard-meta";
import { formatDate, formatValue } from "@/lib/format";
import { useI18n } from "@/lib/i18n/LocaleProvider";

interface IndicatorRow {
  code: string;
  name: string;
  category: string;
  value: number | null;
  unit: string;
  change_percent: number | null;
  republic_average: number | null;
  source: string;
  received_at: string | null;
}

function filterClass(active: boolean) {
  return active ? "btn-primary" : "btn-outline";
}

export default function IndicatorsPage() {
  const { t, fmt } = useI18n();
  const [rows, setRows] = useState<IndicatorRow[]>([]);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const query = category ? `?category=${encodeURIComponent(category)}` : "";
    apiFetch<IndicatorRow[]>(`/dashboard/indicators${query}`)
      .then(setRows)
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : t.indicators.loadError))
      .finally(() => setLoading(false));
  }, [category]);

  const categories = [...new Set(rows.map((row) => row.category))];
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (row) => row.name.toLowerCase().includes(q) || row.category.toLowerCase().includes(q) || row.code.includes(q)
    );
  }, [rows, search]);

  const hasLiveData = rows.some((row) => row.source !== "demo" && row.source !== "catalog");
  const withValues = filtered.filter((r) => r.value !== null).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title={t.indicators.title}
        subtitle={fmt(t.indicators.subtitle, { count: withValues })}
        badge={hasLiveData ? "live" : undefined}
      />

      <div className="card-bashkir space-y-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-bashkir-muted" />
          <input
            type="search"
            placeholder={t.indicators.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-bashkir pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={filterClass(category === "")} onClick={() => setCategory("")}>
            {t.common.all}
          </button>
          {categories.map((item) => (
            <button key={item} type="button" className={filterClass(category === item)} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {error ? <ErrorBanner message={error} /> : null}
      {loading ? <TableSkeleton rows={9} /> : null}

      {!loading && filtered.length === 0 ? (
        <EmptyState
          title={t.indicators.noFilter}
          description={t.indicators.noFilterDesc}
          icon="search"
          action={
            <button
              type="button"
              className="btn-secondary inline-flex items-center gap-2"
              onClick={() => {
                setCategory("");
                setSearch("");
              }}
            >
              <RefreshCw size={14} />
              {t.common.reset}
            </button>
          }
        />
      ) : null}

      {!loading && filtered.length > 0 ? (
        <>
          <ul className="space-y-3 lg:hidden">
            {filtered.map((row) => {
              const sourceLabel = formatSourceLabel(row.source);
              const showLiveBadge = row.source !== "demo" && row.source !== "catalog";
              return (
                <li key={row.code} className="indicator-mobile-card">
                  <div className="indicator-mobile-card__head">
                    <div className="min-w-0">
                      <p className="font-semibold leading-snug text-bashkir-ink">{row.name}</p>
                      <p className="mt-0.5 text-xs text-bashkir-muted">{row.category}</p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      {sourceLabel ? (
                        <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                          {sourceLabel}
                        </span>
                      ) : null}
                      {showLiveBadge ? <SourceBadge mode="live" /> : null}
                    </div>
                  </div>
                  <div className="indicator-mobile-card__grid">
                    <div>
                      <p className="indicator-mobile-card__label">{t.common.value}</p>
                      <p className="indicator-mobile-card__value">
                        {formatValue(row.value, row.unit !== "—" ? row.unit : undefined)}
                      </p>
                    </div>
                    <div>
                      <p className="indicator-mobile-card__label">{t.indicators.receivedAt}</p>
                      <p className="indicator-mobile-card__value">{formatDate(row.received_at)}</p>
                    </div>
                    <div>
                      <p className="indicator-mobile-card__label">{t.indicators.change}</p>
                      <p
                        className={`indicator-mobile-card__value ${
                          row.change_percent === null
                            ? "text-bashkir-muted"
                            : row.change_percent >= 0
                              ? "text-bashkir-green"
                              : "text-red-600"
                        }`}
                      >
                        {row.change_percent === null
                          ? "—"
                          : `${row.change_percent > 0 ? "+" : ""}${row.change_percent.toFixed(1)}%`}
                      </p>
                    </div>
                    <div>
                      <p className="indicator-mobile-card__label">{t.indicators.republicAvg}</p>
                      <p className="indicator-mobile-card__value">
                        {row.republic_average !== null ? formatValue(row.republic_average) : "—"}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="card-bashkir hidden overflow-hidden p-0 lg:block">
            <div className="overflow-x-auto">
              <table className="data-table min-w-full text-left text-sm">
              <thead className="table-head">
                <tr>
                  <th className="px-4 py-3">{t.indicators.indicator}</th>
                  <th className="px-4 py-3">{t.indicators.receivedAt}</th>
                  <th className="px-4 py-3">{t.common.value}</th>
                  <th className="px-4 py-3">{t.indicators.change}</th>
                  <th className="px-4 py-3">{t.indicators.republicAvg}</th>
                  <th className="px-4 py-3">{t.common.source}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => {
                  const sourceLabel = formatSourceLabel(row.source);
                  const showLiveBadge = row.source !== "demo" && row.source !== "catalog";
                  return (
                  <tr key={row.code}>
                    <td className="px-4 py-3">
                      <div className="font-medium text-bashkir-ink">{row.name}</div>
                      <div className="text-xs text-bashkir-muted">{row.category}</div>
                    </td>
                    <td className="px-4 py-3 tabular-nums text-bashkir-muted">
                      {formatDate(row.received_at)}
                    </td>
                    <td className="px-4 py-3 font-semibold tabular-nums text-bashkir-ink">
                      {formatValue(row.value, row.unit !== "—" ? row.unit : undefined)}
                    </td>
                    <td
                      className={`px-4 py-3 font-medium tabular-nums ${
                        row.change_percent === null
                          ? "text-bashkir-muted"
                          : row.change_percent >= 0
                            ? "text-bashkir-green"
                            : "text-red-600"
                      }`}
                    >
                      {row.change_percent === null ? "—" : `${row.change_percent > 0 ? "+" : ""}${row.change_percent.toFixed(1)}%`}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-bashkir-muted">
                      {row.republic_average !== null ? formatValue(row.republic_average) : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {sourceLabel ? (
                          <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                            {sourceLabel}
                          </span>
                        ) : null}
                        {showLiveBadge ? <SourceBadge mode="live" /> : null}
                      </div>
                    </td>
                  </tr>
                );
                })}
              </tbody>
            </table>
          </div>
        </div>
        </>
      ) : null}
    </div>
  );
}
