"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowDownRight, ArrowUpRight, BarChart3, Clock3, Database, MapPin, Sparkles } from "lucide-react";
import { CoverageRing } from "@/components/dashboard/CoverageRing";
import { KpiCard, type KpiCardData } from "@/components/dashboard/KpiCard";
import { SourceGrid, type DataSourceInfo } from "@/components/dashboard/SourceGrid";
import { PageHeader } from "@/components/layout/PageHeader";
import { DashboardSkeleton, EmptyState, ErrorBanner, SourceBadge } from "@/components/ui/LoadingState";
import { KPI_CHART_LABELS } from "@/lib/dashboard-meta";
import { formatDate } from "@/lib/format";
import { apiFetch } from "@/lib/api";

interface DashboardSummary {
  municipality_name: string;
  rank: number | null;
  total: number;
  rank_delta: number | null;
  period: string;
  kpis: KpiCardData[];
  data_sources: DataSourceInfo[];
  source_notes: string[];
}

const CHART_COLORS = ["#0077B6", "#1B5E3B", "#D4A017", "#6366f1", "#059669", "#dc2626"];

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

  const liveKpis = summary.kpis.filter((k) => k.is_live && k.value !== null).length;
  const liveSources = summary.data_sources.filter((s) => s.status === "live").length;
  const hasLiveData = liveKpis > 0 || liveSources > 0;
  const lastUpdate = summary.data_sources
    .map((s) => s.last_run_at ?? s.last_success_at)
    .filter(Boolean)
    .sort()
    .reverse()[0];

  const chartData = summary.kpis.map((kpi) => ({
    name: KPI_CHART_LABELS[kpi.code] ?? kpi.name.split(" ").slice(0, 2).join(" "),
    value: kpi.value ?? 0,
    live: kpi.is_live,
  }));

  return (
    <div className="dashboard-page space-y-8">
      <PageHeader
        title={summary.municipality_name}
        subtitle={`Период данных: ${formatDate(summary.period)}. Сводка ключевых показателей муниципального образования среди ${summary.total} МО Республики.`}
        badge={hasLiveData ? "live" : "demo"}
      />

      <section className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
            ) : (
              <p className="mt-2 text-sm text-bashkir-muted">Рейтинг после расчёта индекса</p>
            )}
          </article>

          <article className="stat-card">
            <p className="stat-label">KPI с данными</p>
            <p className="kpi-value text-bashkir-blue">
              {liveKpis}
              <span className="text-lg font-medium text-bashkir-muted"> / {summary.kpis.length}</span>
            </p>
            <p className="mt-2 text-sm text-bashkir-muted">Живые показатели на дашборде</p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Источники Live</p>
            <p className="kpi-value text-bashkir-green">
              {liveSources}
              <span className="text-lg font-medium text-bashkir-muted"> / {summary.data_sources.length}</span>
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-bashkir-muted">
              <Database size={15} /> Подключённые системы
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Обновление ETL</p>
            <p className={`text-lg font-bold ${hasLiveData ? "text-bashkir-blue" : "text-bashkir-gold"}`}>
              {lastUpdate ? formatDate(lastUpdate) : "—"}
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-bashkir-muted">
              <Clock3 size={15} /> Последний прогон
            </p>
          </article>
        </div>

        <div className="stat-card flex flex-col items-center justify-center gap-2 px-6 py-4 lg:min-w-[10rem]">
          <CoverageRing filled={liveKpis} total={summary.kpis.length} label="KPI" />
        </div>
      </section>

      {summary.source_notes.length > 0 ? (
        <ul className="insight-banner">
          {summary.source_notes.map((note) => (
            <li key={note} className="flex items-start gap-2">
              <Sparkles size={14} className="mt-0.5 shrink-0 text-bashkir-gold" />
              {note}
            </li>
          ))}
        </ul>
      ) : null}

      <section className="card-bashkir">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="section-title">Ключевые показатели</h3>
            <p className="mt-1 text-sm text-bashkir-muted">Все 6 KPI · динамика и источник данных</p>
          </div>
          <SourceBadge mode={hasLiveData ? "live" : "demo"} />
        </div>

        {summary.kpis.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="Нет показателей"
              description="Данные появятся после загрузки из БД ПМО и других источников."
              icon="database"
            />
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {summary.kpis.map((kpi) => (
              <KpiCard key={kpi.code} kpi={kpi} />
            ))}
          </div>
        )}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="card-bashkir">
          <h3 className="section-title inline-flex items-center gap-2">
            <BarChart3 size={22} className="text-bashkir-blue" />
            Сводный профиль KPI
          </h3>
          <p className="mt-1 text-sm text-bashkir-muted">Сравнение заполненных показателей муниципалитета</p>
          {chartData.every((d) => d.value === 0) ? (
            <div className="mt-6">
              <EmptyState title="Недостаточно данных" description="Заполните KPI из источников ETL." icon="search" />
            </div>
          ) : (
            <div className="mt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 8, right: 8, left: -8, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => (v >= 1e6 ? `${(v / 1e6).toFixed(1)}M` : v >= 1e3 ? `${(v / 1e3).toFixed(0)}k` : v)} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      fontSize: 13,
                    }}
                    formatter={(value: number) => [value.toLocaleString("ru-RU"), "Значение"]}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={entry.name} fill={entry.live ? CHART_COLORS[index % CHART_COLORS.length] : "#cbd5e1"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className="card-bashkir flex flex-col justify-center bg-gradient-to-br from-bashkir-blue/5 via-white to-bashkir-green/5">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-bashkir-gold/20">
              <MapPin size={24} className="text-bashkir-green" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-bashkir-ink">{summary.municipality_name}</h3>
              <p className="mt-1 text-sm text-bashkir-muted">
                Республика Башкортостан · {summary.total} муниципалитетов
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-bashkir-muted">Период</dt>
                  <dd className="font-semibold text-bashkir-ink">{formatDate(summary.period)}</dd>
                </div>
                <div>
                  <dt className="text-bashkir-muted">Live KPI</dt>
                  <dd className="font-semibold text-bashkir-green">{liveKpis} из {summary.kpis.length}</dd>
                </div>
                <div>
                  <dt className="text-bashkir-muted">Источники</dt>
                  <dd className="font-semibold text-bashkir-blue">{liveSources} активных</dd>
                </div>
                <div>
                  <dt className="text-bashkir-muted">Рейтинг</dt>
                  <dd className="font-semibold text-bashkir-ink">{summary.rank ? `#${summary.rank}` : "—"}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <SourceGrid sources={summary.data_sources} />
    </div>
  );
}
