import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { formatValueParts } from "@/lib/format";
import { formatSourceLabel } from "@/lib/dashboard-meta";
import { SourceBadge } from "@/components/ui/LoadingState";
import { cn } from "@/lib/utils";

export interface KpiCardData {
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

export function KpiCard({ kpi }: { kpi: KpiCardData }) {
  const { main } = formatValueParts(kpi.value);
  const hasValue = kpi.value !== null && kpi.value !== undefined;
  const live = kpi.is_live && hasValue;

  return (
    <article
      className={cn(
        "kpi-card group",
        live && "kpi-card--live",
        !hasValue && "kpi-card--empty"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="text-sm font-semibold leading-snug text-bashkir-ink">{kpi.name}</h4>
          {kpi.data_period ? (
            <p className="mt-0.5 text-[11px] text-bashkir-muted">Период {kpi.data_period.slice(0, 7)}</p>
          ) : null}
        </div>
        {live ? <SourceBadge mode="live" /> : !hasValue ? <SourceBadge mode="empty" /> : null}
      </div>

      <p className="kpi-card__value mt-3">
        {main}
        {hasValue && kpi.unit !== "—" && kpi.unit !== "%" ? (
          <span className="ml-1 text-base font-normal text-bashkir-muted">{kpi.unit}</span>
        ) : null}
      </p>

      {kpi.change_percent !== null ? (
        <p
          className={cn(
            "mt-1 inline-flex items-center gap-0.5 text-sm font-semibold",
            kpi.change_percent >= 0 ? "text-bashkir-green" : "text-red-600"
          )}
        >
          {kpi.change_percent >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {Math.abs(kpi.change_percent)}% к прошлому периоду
        </p>
      ) : (
        <p className="mt-1 text-xs text-bashkir-muted">
          {hasValue ? "Нет сравнения с прошлым периодом" : "Ожидается загрузка из источников"}
        </p>
      )}

      {kpi.source && hasValue && formatSourceLabel(kpi.source) ? (
        <p className="mt-2 text-[11px] font-medium text-bashkir-muted">
          Источник: {formatSourceLabel(kpi.source)}
        </p>
      ) : null}

      {kpi.sparkline.length > 1 ? (
        <div className="kpi-card__spark mt-3 h-12 opacity-80 transition group-hover:opacity-100">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={kpi.sparkline.map((value, index) => ({ index, value }))}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={live ? "var(--bashkir-green)" : "var(--bashkir-blue)"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : null}

      <Link
        href="/dashboard/indicators"
        className="mt-3 inline-flex items-center gap-0.5 text-xs font-semibold text-bashkir-blue opacity-0 transition group-hover:opacity-100"
      >
        Все показатели
        <ChevronRight size={14} />
      </Link>
    </article>
  );
}
