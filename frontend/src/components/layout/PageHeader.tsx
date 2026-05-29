import { ReactNode } from "react";
import { SourceBadge } from "@/components/ui/LoadingState";

export function PageHeader({
  title,
  subtitle,
  badge,
  action,
}: {
  title: string;
  subtitle?: string;
  badge?: "live" | "demo";
  action?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="page-hero__inner">
        <div className="page-hero__text">
          <p className="page-hero__eyebrow">Республика Башкортостан</p>
          <h1 className="page-hero__title">{title}</h1>
          {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          {badge ? <SourceBadge mode={badge} /> : null}
          {action}
        </div>
      </div>
    </header>
  );
}
