"use client";

import { CONNECTOR_LABELS, CONNECTOR_META, type SourceStatus } from "@/lib/dashboard-meta";
import { formatDateTime, formatPeriod, humanizeConnectorMessage } from "@/lib/format";
import { SourceBadge } from "@/components/ui/LoadingState";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/LocaleProvider";

export interface DataSourceInfo {
  connector_id: string;
  display_name: string;
  status: SourceStatus;
  last_success_at: string | null;
  last_run_at?: string | null;
  period: string | null;
  message: string | null;
}

export function SourceGrid({ sources }: { sources: DataSourceInfo[] }) {
  const { t, fmt } = useI18n();
  const liveCount = sources.filter((s) => s.status === "live").length;

  return (
    <section className="card-bashkir">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="section-title">{t.sources.title}</h3>
          <p className="mt-1 text-sm text-bashkir-muted">
            {fmt(t.sources.liveCount, { live: liveCount, total: sources.length })}
          </p>
        </div>
        <div className="coverage-pill">
          <span className="coverage-pill__value">{Math.round((liveCount / Math.max(sources.length, 1)) * 100)}%</span>
          <span className="coverage-pill__label">{t.common.coverage}</span>
        </div>
      </div>

      <ul className="mt-6 grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((source) => {
          const meta = CONNECTOR_META[source.connector_id];
          const Icon = meta?.icon;
          const lastAt = source.last_run_at ?? source.last_success_at;
          const title = CONNECTOR_LABELS[source.connector_id] ?? source.display_name;
          const message = source.message ? humanizeConnectorMessage(source.message) : null;

          return (
            <li
              key={source.connector_id}
              className={cn(
                "source-card h-full",
                source.status === "live" && "source-card--live",
                source.status === "skipped" && "source-card--muted"
              )}
            >
              <div className="source-card__layout">
                {Icon ? (
                  <span className={cn("source-card__icon bg-gradient-to-br", meta.color)}>
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                ) : (
                  <span className="source-card__icon source-card__icon--empty" aria-hidden />
                )}

                <div className="source-card__body">
                  <div className="source-card__head">
                    <p className="source-card__title">{title}</p>
                    <SourceBadge mode={source.status} />
                  </div>

                  <p className="source-card__desc">{meta?.description ?? t.sources.external}</p>

                  <dl className="source-card__meta">
                    <div className="source-card__meta-row">
                      <dt>{t.common.period}</dt>
                      <dd>{source.period ? formatPeriod(source.period) : t.common.noData}</dd>
                    </div>
                    <div className="source-card__meta-row">
                      <dt>{t.common.updated}</dt>
                      <dd>{lastAt ? formatDateTime(lastAt) : t.common.noData}</dd>
                    </div>
                  </dl>

                  <p className={cn("source-card__message", !message && "source-card__message--empty")}>
                    {message ?? t.sources.noMessage}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
