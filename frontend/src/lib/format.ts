const numberFmt = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });
const compactFmt = new Intl.NumberFormat("ru-RU", { notation: "compact", maximumFractionDigits: 1 });
const dateFmt = new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short", year: "numeric" });
const dateTimeFmt = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatValue(value: number | null | undefined, unit?: string): string {
  if (value === null || value === undefined) return "—";
  const abs = Math.abs(value);
  const formatted = abs >= 1_000_000 ? compactFmt.format(value) : numberFmt.format(value);
  return unit ? `${formatted} ${unit}` : formatted;
}

export function formatValueParts(value: number | null | undefined): { main: string; unit?: string } {
  if (value === null || value === undefined) return { main: "—" };
  const abs = Math.abs(value);
  return { main: abs >= 1_000_000 ? compactFmt.format(value) : numberFmt.format(value) };
}

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  return dateFmt.format(new Date(iso));
}

export function formatPeriod(iso: string | null | undefined): string {
  if (!iso) return "—";
  return formatDate(iso);
}

function humanizeConnectorMessage(message: string): string {
  return message
    .replace(" (MINFIN_REPORT_URL в .env)", "")
    .replace(" (EMISS_SDMX_URL в .env)", "")
    .replace("Не задан URL отчёта Минфина", "Не задан адрес отчёта Минфина")
    .replace("Не задан URL выгрузки ЕМИСС", "Не задан адрес выгрузки ЕМИСС")
    .trim();
}

export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  return dateTimeFmt.format(new Date(iso));
}

export { humanizeConnectorMessage };

export function formatPercent(value: number | null | undefined): string {
  if (value === null || value === undefined) return "—";
  const sign = value > 0 ? "+" : "";
  return `${sign}${numberFmt.format(value)}%`;
}
