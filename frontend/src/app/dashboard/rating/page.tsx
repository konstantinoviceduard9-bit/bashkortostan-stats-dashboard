"use client";

import { useEffect, useState } from "react";
import { Medal, TrendingUp, TriangleAlert } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { CoverageRing } from "@/components/dashboard/CoverageRing";
import { EmptyState, ErrorBanner, TableSkeleton } from "@/components/ui/LoadingState";
import { useI18n } from "@/lib/i18n/LocaleProvider";

interface RatingRow {
  rank: number;
  label: string;
  is_self: boolean;
}

interface RatingView {
  self_rank: number | null;
  self_total: number;
  top: RatingRow[];
  bottom: RatingRow[];
}

const PODIUM = ["🥇", "🥈", "🥉"];

export default function RatingPage() {
  const { t, fmt } = useI18n();
  const [view, setView] = useState<RatingView | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<RatingView>("/dashboard/rating")
      .then(setView)
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : t.rating.loadError));
  }, []);

  if (error) return <ErrorBanner message={error} />;
  if (!view) return <TableSkeleton rows={6} />;
  if (view.top.length === 0 && view.bottom.length === 0) {
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

      <div className="grid gap-4 md:grid-cols-2">
        <section className="card-bashkir border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/20">
          <h3 className="heading-section inline-flex items-center gap-2 text-bashkir-green">
            <Medal size={18} />
            {t.rating.top3}
          </h3>
          <ul className="mt-4 space-y-2">
            {view.top.map((row, i) => (
              <li
                key={row.rank}
                className={
                  row.is_self
                    ? "rating-row rating-row--self"
                    : "rating-row"
                }
              >
                <span className="text-lg">{PODIUM[i] ?? `#${row.rank}`}</span>
                <span className="flex-1 font-medium">{row.label}</span>
                <span className="text-sm font-bold text-bashkir-muted">#{row.rank}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card-bashkir border-red-200/50 bg-gradient-to-br from-white to-red-50/20">
          <h3 className="heading-section inline-flex items-center gap-2 text-red-700">
            <TriangleAlert size={18} />
            {t.rating.bottom3}
          </h3>
          <ul className="mt-4 space-y-2">
            {view.bottom.map((row) => (
              <li key={row.rank} className={row.is_self ? "rating-row rating-row--self" : "rating-row"}>
                <span className="font-bold text-red-600">#{row.rank}</span>
                <span className="flex-1 font-medium">{row.label}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
