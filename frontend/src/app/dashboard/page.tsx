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

interface DashboardSummary {
  municipality_name: string;
  rank: number | null;
  total: number;
  rank_delta: number | null;
  period: string;
  kpis: KpiCard[];
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
        <p className="text-slate-600">Официальная статистика по вашему муниципальному образованию</p>
      </section>

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
