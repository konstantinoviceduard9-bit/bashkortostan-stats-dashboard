import { ReactNode } from "react";
import { AlertCircle, DatabaseZap, FolderSearch, RefreshCcw } from "lucide-react";

export function LoadingState({ label = "Загрузка…" }: { label?: string }) {
  return (
    <div className="card-bashkir flex items-center justify-center gap-3 py-16 text-bashkir-muted">
      <span className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-bashkir-blue border-t-transparent" />
      {label}
    </div>
  );
}

export function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-gradient-to-r from-slate-200/80 to-slate-100/80 ${className}`} />;
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <SkeletonBlock className="h-36 w-full rounded-2xl" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonBlock key={index} className="h-32 rounded-2xl" />
        ))}
      </div>
      <SkeletonBlock className="h-72 w-full rounded-2xl" />
    </div>
  );
}

export function TableSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <div className="card-bashkir space-y-3 p-4">
      <SkeletonBlock className="h-11 w-full" />
      {Array.from({ length: rows }).map((_, index) => (
        <SkeletonBlock key={index} className="h-14 w-full" />
      ))}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  icon = "search",
  action,
}: {
  title: string;
  description: string;
  icon?: "search" | "database";
  action?: ReactNode;
}) {
  const Icon = icon === "database" ? DatabaseZap : FolderSearch;

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-bashkir-gold/30 bg-bashkir-cream/50 py-16 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-bashkir-blue/15 to-bashkir-green/15 text-bashkir-blue shadow-glow">
        <Icon size={28} />
      </span>
      <h3 className="font-display text-xl font-bold text-bashkir-ink">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed text-bashkir-muted">{description}</p>
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}

export function SourceBadge({ mode }: { mode: "live" | "demo" }) {
  const isLive = mode === "live";
  return (
    <span
      className={
        isLive
          ? "inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800"
          : "inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800"
      }
    >
      {isLive ? <RefreshCcw size={12} /> : <AlertCircle size={12} />}
      {isLive ? "Live" : "Demo"}
    </span>
  );
}

export function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
      {message}
    </div>
  );
}
