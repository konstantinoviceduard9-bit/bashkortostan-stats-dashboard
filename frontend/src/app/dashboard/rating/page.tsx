"use client";

import { useEffect, useState } from "react";
import { Medal, TrendingUp, TriangleAlert } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState, ErrorBanner, SourceBadge, TableSkeleton } from "@/components/ui/LoadingState";

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

export default function RatingPage() {
  const [view, setView] = useState<RatingView | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<RatingView>("/dashboard/rating")
      .then(setView)
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Ошибка загрузки рейтинга"));
  }, []);

  if (error) return <ErrorBanner message={error} />;
  if (!view) return <TableSkeleton rows={6} />;
  if (view.top.length === 0 && view.bottom.length === 0) {
    return (
      <EmptyState
        title="Рейтинг пока недоступен"
        description="После расчета сводного индекса по муниципалитетам таблица рейтинга появится здесь."
        icon="database"
      />
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Рейтинг муниципалитетов"
        subtitle="Сводный рейтинг на основе ключевых показателей эффективности."
        badge={process.env.NEXT_PUBLIC_STATIC_DEMO === "true" ? "demo" : "live"}
      />
      <div className="grid gap-4 md:grid-cols-3">
        <article className="stat-card md:col-span-2">
          <p className="stat-label">Ваше место</p>
          <p className="kpi-value text-bashkir-green">
            {view.self_rank ?? "—"} <span className="text-lg font-normal text-slate-500">из {view.self_total}</span>
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600">
            <TrendingUp size={15} /> Динамика рассчитывается после обновления данных.
          </p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Статус</p>
          <p className="kpi-value text-bashkir-blue">{view.self_rank !== null && view.self_rank <= 10 ? "Топ-10" : "Вне Топ-10"}</p>
        </article>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="card-bashkir border-bashkir-green/40">
          <h3 className="heading-section inline-flex items-center gap-2 text-bashkir-green">
            <Medal size={18} />
            Топ‑3
          </h3>
          <ul className="mt-3 space-y-2">
            {view.top.map((row) => (
              <li
                key={row.rank}
                className={
                  row.is_self
                    ? "rounded-lg border border-bashkir-blue/30 bg-bashkir-blue/10 px-3 py-2 font-bold text-bashkir-blue"
                    : "rounded-lg border border-slate-200 bg-white px-3 py-2"
                }
              >
                <span className="font-semibold text-slate-900">#{row.rank}</span> — {row.label}
              </li>
            ))}
          </ul>
        </section>
        <section className="card-bashkir border-red-200">
          <h3 className="heading-section inline-flex items-center gap-2 text-red-700">
            <TriangleAlert size={18} />
            Антитоп‑3
          </h3>
          <ul className="mt-3 space-y-2">
            {view.bottom.map((row) => (
              <li
                key={row.rank}
                className={
                  row.is_self
                    ? "rounded-lg border border-bashkir-blue/30 bg-bashkir-blue/10 px-3 py-2 font-bold text-bashkir-blue"
                    : "rounded-lg border border-slate-200 bg-white px-3 py-2"
                }
              >
                <span className="font-semibold text-slate-900">#{row.rank}</span> — {row.label}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
