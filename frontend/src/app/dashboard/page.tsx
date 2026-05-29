"use client";

import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { apiFetch } from "@/lib/api";
import { ErrorBanner, LoadingState } from "@/components/ui/LoadingState";

interface KpiCard {
  code: string;
  name: string;
  value: number | null;
  unit: string;
  change_percent: number | null;
  sparkline: number[];
}

interface DataSourceInfo {
  connector_id: string;
  display_name: string;
  last_success_at: string | null;
  period: string | null;
  message: string | null;
}

interface DashboardSummary {
  municipality_name: string;
  rank: number | null;
  total: number;
  rank_delta: number | null;
  period: string;
  kpis: KpiCard[];
  data_sources: DataSourceInfo[];
  source_notes: string[];
}

export default function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<DashboardSummary>("/dashboard/summary")
      .then(setSummary)
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Ошибка загрузки"));
  }, []);

  if (error) return <ErrorBanner message={error} />;
  if (!summary) return <LoadingState label="Загрузка дашборда…" />;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="heading-gold">Добро пожаловать, {summary.municipality_name}</h2>
        <p className="page-intro mt-1">
          Период данных: <strong className="text-slate-800">{summary.period}</strong>
        </p>
        {summary.source_notes.length > 0 ? (
          <ul className="mt-3 space-y-1 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {summary.source_notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </section>

      {summary.data_sources.some((s) => s.last_success_at) ? (
        <section className="card-bashkir text-sm">
          <h3 className="font-semibold text-bashkir-blue">Источники данных (live)</h3>
          <ul className="mt-2 space-y-2 text-slate-600">
            {summary.data_sources
              .filter((s) => s.last_success_at)
              .map((s) => (
                <li key={s.connector_id} className="flex flex-wrap gap-x-2">
                  <span className="font-medium text-slate-800">{s.display_name}</span>
                  {s.period ? <span>· период {s.period}</span> : null}
                  {s.last_success_at ? <span>· {new Date(s.last_success_at).toLocaleString("ru-RU")}</span> : null}
                </li>
              ))}
          </ul>
        </section>
      ) : null}

      <section className="card-bashkir border-bashkir-gold/40 bg-gradient-to-br from-white to-bashkir-green/5">
        <h3 className="text-lg font-semibold text-bashkir-blue">Место в рейтинге</h3>
        <p className="kpi-value text-bashkir-green">
          {summary.rank ?? "—"} <span className="text-lg font-normal text-slate-500">из {summary.total}</span>
        </p>
        {summary.rank_delta !== null ? (
          <p className="mt-1 text-sm text-slate-600">
            Изменение: {summary.rank_delta > 0 ? "▲" : summary.rank_delta < 0 ? "▼" : "—"} {Math.abs(summary.rank_delta)}
          </p>
        ) : null}
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summary.kpis.map((kpi) => (
          <article key={kpi.code} className="card-bashkir flex flex-col">
            <h4 className="font-medium text-bashkir-blue">{kpi.name}</h4>
            <p className="kpi-value">
              {kpi.value ?? "—"} <span className="text-base font-normal text-slate-500">{kpi.unit}</span>
            </p>
            {kpi.change_percent !== null ? (
              <p className={`text-sm font-medium ${kpi.change_percent >= 0 ? "text-bashkir-green" : "text-red-600"}`}>
                {kpi.change_percent >= 0 ? "▲" : "▼"} {Math.abs(kpi.change_percent)}% к прошлому месяцу
              </p>
            ) : null}
            {kpi.sparkline.length > 0 ? (
              <div className="mt-auto pt-4 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={kpi.sparkline.map((value, index) => ({ index, value }))}>
                    <Line type="monotone" dataKey="value" stroke="var(--bashkir-blue)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
