import { CONNECTOR_META, type SourceStatus } from "@/lib/dashboard-meta";
import { formatDateTime } from "@/lib/format";
import { SourceBadge } from "@/components/ui/LoadingState";
import { cn } from "@/lib/utils";

export interface DataSourceInfo {
  connector_id: string;
  display_name: string;
  status: SourceStatus;
  last_success_at: string | null;
  last_run_at?: string | null;
  period: string | null;
  message: string | null;
}

function badgeMode(status: SourceStatus): SourceStatus {
  return status;
}

export function SourceGrid({ sources }: { sources: DataSourceInfo[] }) {
  const liveCount = sources.filter((s) => s.status === "live").length;

  return (
    <section className="card-bashkir">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="section-title">Источники данных</h3>
          <p className="mt-1 text-sm text-bashkir-muted">
            {liveCount} из {sources.length} источников отдают актуальные данные
          </p>
        </div>
        <div className="coverage-pill">
          <span className="coverage-pill__value">{Math.round((liveCount / Math.max(sources.length, 1)) * 100)}%</span>
          <span className="coverage-pill__label">покрытие</span>
        </div>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((source) => {
          const meta = CONNECTOR_META[source.connector_id];
          const Icon = meta?.icon;
          const lastAt = source.last_run_at ?? source.last_success_at;

          return (
            <li
              key={source.connector_id}
              className={cn(
                "source-card",
                source.status === "live" && "source-card--live",
                source.status === "skipped" && "source-card--muted"
              )}
            >
              <div className="flex items-start gap-3">
                {Icon ? (
                  <span
                    className={cn(
                      "source-card__icon bg-gradient-to-br",
                      meta.color
                    )}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                ) : null}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-bashkir-ink">{source.display_name}</p>
                    <SourceBadge mode={badgeMode(source.status)} />
                  </div>
                  {meta ? <p className="mt-0.5 text-xs text-bashkir-muted">{meta.description}</p> : null}
                  <p className="mt-2 text-[11px] text-bashkir-muted">
                    {source.period ? `Период ${source.period}` : "Период не указан"}
                    {lastAt ? ` · ${formatDateTime(lastAt)}` : ""}
                  </p>
                  {source.message ? (
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-bashkir-muted">{source.message}</p>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
