"use client";

import { useEffect, useMemo, useState } from "react";
import { RefreshCw, Search } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState, ErrorBanner, SourceBadge, TableSkeleton } from "@/components/ui/LoadingState";
import { SOURCE_LABELS } from "@/lib/dashboard-meta";
import { formatValue } from "@/lib/format";

interface IndicatorRow {
  code: string;
  name: string;
  category: string;
  value: number | null;
  unit: string;
  change_percent: number | null;
  republic_average: number | null;
  source: string;
}

function filterClass(active: boolean) {
  return active ? "btn-primary" : "btn-outline";
}

export default function IndicatorsPage() {
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
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : "Ошибка загрузки показателей"))
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

  const mode = rows.some((row) => row.source !== "demo" && row.source !== "catalog") ? "live" : "demo";
  const withValues = filtered.filter((r) => r.value !== null).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Показатели"
        subtitle={`${withValues} показателей с данными · сравнение со средним по Республике Башкортостан.`}
        badge={mode}
      />

      <div className="card-bashkir space-y-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-bashkir-muted" />
          <input
            type="search"
            placeholder="Поиск по названию или категории…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-bashkir pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={filterClass(category === "")} onClick={() => setCategory("")}>
            Все
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
          title="Нет данных по фильтру"
          description="Смените категорию или сбросьте поиск."
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
              Сбросить
            </button>
          }
        />
      ) : null}

      {!loading && filtered.length > 0 ? (
        <div className="card-bashkir overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="data-table min-w-full text-left text-sm">
              <thead className="table-head">
                <tr>
                  <th className="px-4 py-3">Показатель</th>
                  <th className="px-4 py-3">Значение</th>
                  <th className="px-4 py-3">Изм. %</th>
                  <th className="px-4 py-3">Среднее по РБ</th>
                  <th className="px-4 py-3">Источник</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr key={row.code}>
                    <td className="px-4 py-3">
                      <div className="font-medium text-bashkir-ink">{row.name}</div>
                      <div className="text-xs text-bashkir-muted">{row.category}</div>
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
                        <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                          {SOURCE_LABELS[row.source] ?? row.source}
                        </span>
                        <SourceBadge mode={row.source === "demo" || row.source === "catalog" ? "demo" : "live"} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}
