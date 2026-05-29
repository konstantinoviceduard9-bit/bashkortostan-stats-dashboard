"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { LoadingState } from "@/components/ui/LoadingState";

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

  useEffect(() => {
    setLoading(true);
    const query = category ? `?category=${encodeURIComponent(category)}` : "";
    apiFetch<IndicatorRow[]>(`/dashboard/indicators${query}`)
      .then(setRows)
      .finally(() => setLoading(false));
  }, [category]);

  const categories = [...new Set(rows.map((row) => row.category))];

  return (
    <div className="space-y-6">
      <h2 className="heading-gold">Показатели</h2>
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
      {loading ? (
        <LoadingState />
      ) : (
        <div className="card-bashkir overflow-x-auto p-0">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-bashkir-blue/10 text-bashkir-blue">
              <tr>
                <th className="px-4 py-3">Показатель</th>
                <th className="px-4 py-3">Значение</th>
                <th className="px-4 py-3">Среднее по РБ</th>
                <th className="px-4 py-3">Источник</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.code} className="border-t border-slate-100 hover:bg-slate-50/80">
                  <td className="px-4 py-3">
                    <div className="font-medium">{row.name}</div>
                    <div className="text-xs text-slate-500">{row.category}</div>
                  </td>
                  <td className="px-4 py-3 font-medium">
                    {row.value ?? "—"} {row.unit}
                  </td>
                  <td className="px-4 py-3">{row.republic_average?.toFixed(2) ?? "—"}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                      {SOURCE_LABELS[row.source] ?? row.source}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
