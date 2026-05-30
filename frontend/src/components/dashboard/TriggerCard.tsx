"use client";

import { AlertTriangle, BellRing, CheckCircle2, HelpCircle } from "lucide-react";
import { formatValueParts } from "@/lib/format";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import type { TriggerItem, TriggerStatus } from "@/lib/triggers";
import { cn } from "@/lib/utils";

const STATUS_ICON: Record<TriggerStatus, typeof CheckCircle2> = {
  ok: CheckCircle2,
  watch: BellRing,
  triggered: AlertTriangle,
  unknown: HelpCircle,
};

export function TriggerCard({ trigger }: { trigger: TriggerItem }) {
  const { t, fmt } = useI18n();
  const { main } = formatValueParts(trigger.value);
  const hasValue = trigger.value !== null && trigger.value !== undefined;
  const Icon = STATUS_ICON[trigger.status];

  const thresholdText =
    trigger.direction === "above"
      ? fmt(t.triggers.thresholdAbove, { watch: trigger.watch_at, trigger: trigger.trigger_at, unit: trigger.unit })
      : fmt(t.triggers.thresholdBelow, { watch: trigger.watch_at, trigger: trigger.trigger_at, unit: trigger.unit });

  return (
    <article
      className={cn(
        "trigger-card",
        trigger.status === "triggered" && "trigger-card--triggered",
        trigger.status === "watch" && "trigger-card--watch",
        trigger.status === "ok" && "trigger-card--ok",
        trigger.status === "unknown" && "trigger-card--unknown",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="text-sm font-semibold leading-snug text-bashkir-ink">{trigger.name}</h4>
          <p className="mt-0.5 text-xs leading-relaxed text-bashkir-muted">{trigger.description}</p>
        </div>
        <span className={cn("trigger-badge", `trigger-badge--${trigger.status}`)}>
          <Icon size={12} strokeWidth={2.25} />
          {t.triggers.status[trigger.status]}
        </span>
      </div>

      <p className="trigger-card__value mt-3">
        {hasValue ? main : t.triggers.noValue}
        {hasValue && trigger.unit !== "—" && trigger.unit !== "%" ? (
          <span className="ml-1 text-base font-normal text-bashkir-muted">{trigger.unit}</span>
        ) : null}
      </p>

      <p className="mt-2 text-xs text-bashkir-muted">{thresholdText}</p>

      {trigger.is_live ? (
        <p className="mt-2 text-[11px] font-medium text-bashkir-green">{t.triggers.liveData}</p>
      ) : (
        <p className="mt-2 text-[11px] text-bashkir-muted">{t.triggers.awaitingData}</p>
      )}
    </article>
  );
}
