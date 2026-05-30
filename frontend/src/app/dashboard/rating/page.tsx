"use client";

import { useCallback, useEffect, useState } from "react";
import { BarChart3, TrendingUp } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { CoverageRing } from "@/components/dashboard/CoverageRing";
import { EmptyState, ErrorBanner, TableSkeleton } from "@/components/ui/LoadingState";
import { formatValue } from "@/lib/format";
import { useI18n } from "@/lib/i18n/LocaleProvider";

interface RatingRow {
  rank: number;
  label: string;
  value: number | null;
  is_self: boolean;
}

interface RatingIndicatorOption {
  code: string;
  name: string;
  unit: string;
}

interface RatingView {
  self_rank: number | null;
  self_total: number;
  indicator_code: string;
  indicator_name: string;
  unit: string;
  rows: RatingRow[];
  available_indicators: RatingIndicatorOption[];
}

export default function RatingPage() {
  const { t, fmt } = useI18n();
  const [view, setView] = useState<RatingView | null>(null);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRating = useCallback(
    (indicator?: string) => {
      setLoading(true);
      setError(null);
      const query = indicator ? `?indicator=${encodeURIComponent(indicator)}` : "";
      apiFetch<RatingView>(`/dashboard/rating${query}`)
        .then((data) => {
          setView(data);
          setSelected(data.indicator_code);
        })
        .catch((loadError) => setError(loadError instanceof Error ? loadError.message : t.rating.loadError))
        .finally(() => setLoading(false));
    },
    [t.rating.loadError],
  );

  useEffect(() => {
    loadRating();
  }, [loadRating]);

  if (error) return <ErrorBanner message={error} />;
  if (!view && loading) return <TableSkeleton rows={8} />;
  if (!view || view.rows.length === 0) {
    return (
      <EmptyState
        title={t.rating.unavailable}
        description={t.rating.unavailableDesc}
        icon="database"
      />
    );
  }

  const rankPct = view.self_rank && view.self_total ? Math.round((1 - (view.self_rank - 1) / view.self_total) * 100) : 0;

  return (
    <div className="space-y-6">
      <PageHeader
        title={t.rating.title}
        subtitle={t.rating.subtitle}
        badge={process.env.NEXT_PUBLIC_STATIC_DEMO !== "true" ? "live" : undefined}
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <article className="stat-card">
          <p className="stat-label">{t.rating.yourPlace}</p>
          <p className="text-sm font-medium text-bashkir-muted">{view.indicator_name}</p>
          <p className="kpi-value text-bashkir-green">
            {view.self_rank ?? t.common.noData}{" "}
            <span className="text-lg font-normal text-bashkir-muted">
              {t.common.of} {view.self_total}
            </span>
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-bashkir-blue to-bashkir-green transition-all duration-700"
              style={{ width: `${view.self_rank ? rankPct : 0}%` }}
            />
          </div>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-bashkir-muted">
            <TrendingUp size={15} /> {fmt(t.rating.betterThan, { pct: rankPct })}
          </p>
        </article>
        <div className="stat-card flex items-center justify-center">
          <CoverageRing
            filled={view.self_rank ? view.self_total - view.self_rank + 1 : 0}
            total={view.self_total}
            label={t.rating.placeLabel}
          />
        </div>
      </div>

      <section className="card-bashkir space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="heading-section inline-flex items-center gap-2">
              <BarChart3 size={18} className="text-bashkir-blue" />
              {t.rating.byIndicator}
            </h3>
            <p className="mt-1 text-sm text-bashkir-muted">{t.rating.byIndicatorHint}</p>
          </div>
          <label className="block min-w-[14rem] flex-1 text-sm font-semibold text-bashkir-ink sm:max-w-xs">
            {t.rating.selectIndicator}
            <select
              className="input-bashkir mt-1"
              value={selected}
              onChange={(e) => loadRating(e.target.value)}
              disabled={loading}
            >
              {view.available_indicators.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        {loading ? (
          <TableSkeleton rows={8} />
        ) : (
          <>
            <ul className="space-y-2 lg:hidden">
              {view.rows.map((row) => (
                <li key={row.rank} className={row.is_self ? "rating-row rating-row--self" : "rating-row"}>
                  <span className="font-bold text-bashkir-muted">#{row.rank}</span>
                  <span className="shrink-0 tabular-nums text-sm font-semibold text-bashkir-ink">
                    {formatValue(row.value, view.unit !== "—" && view.unit !== "%" ? view.unit : undefined)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="hidden overflow-x-auto lg:block">
              <table className="data-table min-w-full text-left text-sm">
                <thead className="table-head">
                  <tr>
                    <th className="px-4 py-3">{t.rating.colPlace}</th>
                    <th className="px-4 py-3">{t.common.value}</th>
                  </tr>
                </thead>
                <tbody>
                  {view.rows.map((row) => (
                    <tr key={row.rank} className={row.is_self ? "bg-bashkir-blue/5" : undefined}>
                      <td className="px-4 py-3 font-bold tabular-nums text-bashkir-muted">#{row.rank}</td>
                      <td className="px-4 py-3 font-semibold tabular-nums text-bashkir-ink">
                        {formatValue(row.value, view.unit !== "—" && view.unit !== "%" ? view.unit : undefined)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
