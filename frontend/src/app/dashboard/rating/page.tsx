"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { LoadingState } from "@/components/ui/LoadingState";

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

  if (!view) return <LoadingState label="Загрузка рейтинга…" />;

  return (
    <div className="space-y-6">
      <h2 className="heading-gold">Рейтинг</h2>
      <div className="card-bashkir border-bashkir-blue/40">
        <p className="text-lg text-slate-700">
          Ваше место: <strong className="text-2xl text-bashkir-green">{view.self_rank ?? "—"}</strong> из {view.self_total}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="card-bashkir border-bashkir-green/50">
          <h3 className="font-semibold text-bashkir-green">Топ‑3</h3>
          <ul className="mt-3 space-y-2">
            {view.top.map((row) => (
              <li key={row.rank} className={row.is_self ? "rounded-lg bg-bashkir-blue/10 px-2 py-1 font-bold text-bashkir-blue" : ""}>
                #{row.rank} — {row.label}
              </li>
            ))}
          </ul>
        </section>
        <section className="card-bashkir border-red-200">
          <h3 className="font-semibold text-red-700">Антитоп‑3</h3>
          <ul className="mt-3 space-y-2">
            {view.bottom.map((row) => (
              <li key={row.rank} className={row.is_self ? "rounded-lg bg-bashkir-blue/10 px-2 py-1 font-bold text-bashkir-blue" : ""}>
                #{row.rank} — {row.label}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
