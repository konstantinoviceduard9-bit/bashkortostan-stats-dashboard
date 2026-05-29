"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowDownRight, ArrowUpRight, Clock3, Database, Sparkles, Trophy } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardSkeleton, EmptyState, ErrorBanner, SourceBadge } from "@/components/ui/LoadingState";

interface KpiCard {
  code: string;
  name: string;
  value: number | null;
  unit: string;
  change_percent: number | null;
  sparkline: number[];
  source?: string | null;
  is_live?: boolean;
  data_period?: string | null;
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
  if (!summary) return <DashboardSkeleton />;

  const hasLiveData =
    summary.kpis.some((kpi) => kpi.is_live) || summary.data_sources.some((source) => source.last_success_at);
  const rankingSeries = summary.kpis.slice(0, 6).map((kpi) => ({
    name: kpi.code.replace(/_/g, " "),
    value: kpi.value ?? 0,
  }));

  return (
    <div className="space-y-8">
      <PageHeader
        title={summary.municipality_name}
        subtitle={`Период данных: ${summary.period}. Сводка ключевых показателей вашего муниципального образования.`}
        badge={hasLiveData ? "live" : "demo"}
      />

      {summary.source_notes.length > 0 ? (
        <ul className="space-y-2 rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50 to-orange-50/50 px-5 py-4 text-sm text-amber-950">
          {summary.source_notes.map((note) => (
            <li key={note} className="flex items-start gap-2">
              <Sparkles size={14} className="mt-0.5 shrink-0 text-amber-600" />
              {note}
            </li>
          ))}
        </ul>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="stat-card">
          <p className="stat-label">Место в рейтинге</p>
          <p className="kpi-value flex items-end gap-2 text-bashkir-green">
            {summary.rank ?? "—"}
            <span className="text-lg font-medium text-bashkir-muted">/ {summary.total}</span>
          </p>
          {summary.rank_delta !== null ? (
            <p className="mt-2 inline-flex items-center gap-1 text-sm font-medium">
              {summary.rank_delta > 0 ? (
                <>
                  <ArrowUpRight size={16} className="text-emerald-600" /> +{Math.abs(summary.rank_delta)} поз.
                </>
              ) : summary.rank_delta < 0 ? (
                <>
                  <ArrowDownRight size={16} className="text-red-600" /> −{Math.abs(summary.rank_delta)} поз.
                </>
              ) : (
                "Без изменений"
              )}
            </p>
          ) : null}
        </article>
        <article className="stat-card">
          <p className="stat-label">KPI на дашборде</p>
          <p className="kpi-value">{summary.kpis.length}</p>
          <p className="mt-2 text-sm text-bashkir-muted">Активных показателей</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Источники данных</p>
          <p className="kpi-value">{summary.data_sources.length}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-bashkir-muted">
            <Database size={15} /> Подключённые системы
          </p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Обновление</p>
          <p className={`kpi-value ${hasLiveData ? "text-bashkir-blue" : "text-bashkir-gold"}`}>
            {hasLiveData ? "Live" : "Demo"}
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-bashkir-muted">
            <Clock3 size={15} /> По расписанию ETL
          </p>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
        <div className="card-bashkir">
          <h3 className="font-display text-2xl font-bold text-bashkir-ink">Ключевые показатели</h3>
          <p className="mt-1 text-sm text-bashkir-muted">Динамика и изменение к прошлому периоду</p>
          {summary.kpis.length === 0 ? (
            <div className="mt-6">
              <EmptyState
                title="Нет показателей"
                description="Данные появятся после загрузки из БД ПМО и других источников."
                icon="database"
              />
            </div>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {summary.kpis.slice(0, 4).map((kpi) => (
                <article key={kpi.code} className="card-soft flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold leading-snug text-bashkir-blue">{kpi.name}</h4>
                    <SourceBadge mode={kpi.is_live ? "live" : "demo"} />
                  </div>
                  {kpi.data_period ? (
                    <p className="mt-1 text-xs text-bashkir-muted">Период: {kpi.data_period.slice(0, 7)}</p>
                  ) : null}
                  <p className="kpi-value mt-1">
                    {kpi.value ?? "—"}{" "}
                    <span className="text-base font-normal text-bashkir-muted">{kpi.unit}</span>
                  </p>
                  {kpi.change_percent !== null ? (
                    <p
                      className={`text-sm font-semibold ${kpi.change_percent >= 0 ? "text-bashkir-green" : "text-red-600"}`}
                    >
                      {kpi.change_percent >= 0 ? "▲" : "▼"} {Math.abs(kpi.change_percent)}% к прошлому месяцу
                    </p>
                  ) : (
                    <p className="text-sm text-bashkir-muted">Нет сравнения с прошлым периодом</p>
                  )}
                  {kpi.sparkline.length > 0 ? (
                    <div className="mt-3 h-14">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={kpi.sparkline.map((value, index) => ({ index, value }))}>
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="var(--bashkir-blue)"
                            strokeWidth={2.5}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="card-bashkir">
          <h3 className="inline-flex items-center gap-2 font-display text-2xl font-bold text-bashkir-ink">
            <Trophy size={22} className="text-bashkir-gold" />
            Сводный индекс
          </h3>
          {rankingSeries.length === 0 ? (
            <div className="mt-6">
              <EmptyState title="Индекс недоступен" description="Недостаточно данных для расчёта." icon="search" />
            </div>
          ) : (
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rankingSeries} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                  />
                  <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0077B6" />
                      <stop offset="100%" stopColor="#1B5E3B" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </section>

      <section className="card-bashkir">
        <h3 className="font-display text-xl font-bold text-bashkir-ink">Источники данных</h3>
        {summary.data_sources.length === 0 ? (
          <div className="mt-4">
            <EmptyState title="Источники не подключены" description="Настройте коннекторы ETL." icon="database" />
          </div>
        ) : (
          <ul className="mt-4 space-y-3">
            {summary.data_sources.map((source) => (
              <li
                key={source.connector_id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-bashkir-cream/40 px-4 py-3"
              >
                <div>
                  <p className="font-semibold text-bashkir-ink">{source.display_name}</p>
                  <p className="mt-0.5 text-xs text-bashkir-muted">
                    {source.period ? `Период: ${source.period}` : "Период не указан"}
                    {source.last_success_at ? ` · ${new Date(source.last_success_at).toLocaleString("ru-RU")}` : ""}
                  </p>
                  {source.message ? <p className="mt-1 text-xs text-bashkir-muted">{source.message}</p> : null}
                </div>
                <SourceBadge mode={source.last_success_at ? "live" : "demo"} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
