"use client";

import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { apiFetch } from "@/lib/api";

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

  if (error) return <p className="text-red-600">{error}</p>;
  if (!summary) return <p className="text-slate-600">Загрузка…</p>;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="heading-gold">Добро пожаловать, {summary.municipality_name}</h2>
        <p className="text-slate-600">
          Период данных: <strong>{summary.period}</strong>
        </p>
        {summary.source_notes.length > 0 ? (
          <ul className="mt-2 list-inside list-disc text-sm text-amber-800">
            {summary.source_notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </section>

      {summary.data_sources.some((s) => s.last_success_at) ? (
        <section className="card-bashkir text-sm">
          <h3 className="font-semibold text-bashkir-blue">Источники данных</h3>
          <ul className="mt-2 space-y-1 text-slate-600">
            {summary.data_sources
              .filter((s) => s.last_success_at)
              .map((s) => (
                <li key={s.connector_id}>
                  {s.display_name}
                  {s.period ? ` · период ${s.period}` : ""}
                  {s.last_success_at ? ` · обновлено ${new Date(s.last_success_at).toLocaleString("ru-RU")}` : ""}
                </li>
              ))}
          </ul>
        </section>
      ) : null}

      <section className="card-bashkir border-bashkir-gold/50">
        <h3 className="text-lg font-semibold text-bashkir-blue">Место в рейтинге</h3>
        <p className="mt-2 text-4xl font-bold text-bashkir-green">
          {summary.rank ?? "—"} <span className="text-lg font-normal text-slate-500">из {summary.total}</span>
        </p>
        {summary.rank_delta !== null ? (
          <p className="mt-1 text-sm text-slate-600">
            Изменение позиции: {summary.rank_delta > 0 ? "▲" : summary.rank_delta < 0 ? "▼" : "—"}{" "}
            {Math.abs(summary.rank_delta)}
          </p>
        ) : null}
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summary.kpis.map((kpi) => (
          <article key={kpi.code} className="card-bashkir">
            <h4 className="font-medium text-bashkir-blue">{kpi.name}</h4>
            <p className="mt-2 text-2xl font-bold">
              {kpi.value ?? "—"} <span className="text-sm font-normal">{kpi.unit}</span>
            </p>
            {kpi.change_percent !== null ? (
              <p className={`text-sm ${kpi.change_percent >= 0 ? "text-bashkir-green" : "text-red-600"}`}>
                {kpi.change_percent >= 0 ? "▲" : "▼"} {Math.abs(kpi.change_percent)}% к прошлому месяцу
              </p>
            ) : null}
            {kpi.sparkline.length > 0 ? (
              <div className="mt-4 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={kpi.sparkline.map((value, index) => ({ index, value }))}>
                    <Line type="monotone" dataKey="value" stroke="#0080C6" strokeWidth={2} dot={false} />
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
