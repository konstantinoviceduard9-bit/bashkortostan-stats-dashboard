"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

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

  useEffect(() => {
    apiFetch<RatingView>("/dashboard/rating").then(setView);
  }, []);

  if (!view) return <p>Загрузка…</p>;

  return (
    <div className="space-y-6">
      <h2 className="heading-gold">Рейтинг</h2>
      <div className="card-bashkir">
        <p className="text-lg">
          Ваше место: <strong>{view.self_rank ?? "—"}</strong> из {view.self_total}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="card-bashkir border-bashkir-green">
          <h3 className="font-semibold text-bashkir-green">Топ‑3</h3>
          <ul className="mt-3 space-y-2">
            {view.top.map((row) => (
              <li key={row.rank} className={row.is_self ? "font-bold text-bashkir-blue" : ""}>
                #{row.rank} — {row.label}
              </li>
            ))}
          </ul>
        </section>
        <section className="card-bashkir border-red-300">
          <h3 className="font-semibold text-red-700">Антитоп‑3</h3>
          <ul className="mt-3 space-y-2">
            {view.bottom.map((row) => (
              <li key={row.rank} className={row.is_self ? "font-bold text-bashkir-blue" : ""}>
                #{row.rank} — {row.label}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
