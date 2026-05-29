"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState, ErrorBanner, SourceBadge, TableSkeleton } from "@/components/ui/LoadingState";

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

const SOURCE_LABELS: Record<string, string> = {
  demo: "Демо",
  bdmo_tochno: "БД ПМО",
  opendata_rb: "Opendata",
  manual_csv: "CSV",
  gas_manual: "ГАС",
  minfin_rb: "Минфин",
  emiss: "ЕМИСС",
};

function filterClass(active: boolean) {
  return active ? "btn-primary" : "btn-outline";
}

export default function IndicatorsPage() {
  const [rows, setRows] = useState<IndicatorRow[]>([]);
  const [category, setCategory] = useState<string>("");
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
  const mode = rows.some((row) => row.source !== "demo") ? "live" : "demo";

  return (
    <div className="space-y-6">
      <PageHeader
        title="Показатели"
        subtitle="Сравнение значений муниципалитета со средним уровнем по Республике Башкортостан."
        badge={mode}
      />

      <div className="card-bashkir">
        <div className="flex flex-wrap gap-2">
          <button type="button" className={filterClass(category === "")} onClick={() => setCategory("")}>
            Все категории
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

      {!loading && rows.length === 0 ? (
        <EmptyState
          title="Нет данных по выбранной категории"
          description="Смените фильтр или обновите данные из источников."
          icon="search"
          action={
            <button type="button" className="btn-secondary inline-flex items-center gap-2" onClick={() => setCategory("")}>
              <RefreshCw size={14} />
              Сбросить фильтр
            </button>
          }
        />
      ) : null}

      {!loading && rows.length > 0 ? (
        <div className="card-bashkir overflow-x-auto p-0">
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
              {rows.map((row) => (
                <tr key={row.code} className="border-t border-slate-100 hover:bg-slate-50/80">
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900">{row.name}</div>
                    <div className="text-xs text-slate-500">{row.category}</div>
                  </td>
                  <td className="px-4 py-3 font-medium">
                    {row.value ?? "—"} {row.unit}
                  </td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      row.change_percent === null
                        ? "text-slate-500"
                        : row.change_percent >= 0
                          ? "text-emerald-700"
                          : "text-red-700"
                    }`}
                  >
                    {row.change_percent === null ? "—" : `${row.change_percent > 0 ? "+" : ""}${row.change_percent.toFixed(1)}%`}
                  </td>
                  <td className="px-4 py-3">{row.republic_average?.toFixed(2) ?? "—"}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                        {SOURCE_LABELS[row.source] ?? row.source}
                      </span>
                      <SourceBadge mode={row.source === "demo" ? "demo" : "live"} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
