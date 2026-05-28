import type { RankingRow } from "../shared/types";

export const HOT_DATA_START_YEAR = 2024;
export const ARCHIVE_YEARS = Array.from({ length: HOT_DATA_START_YEAR - 2003 }, (_, index) => 2003 + index).sort(
  (a, b) => b - a
);

interface ArchiveDataRequest {
  baseUrl: string;
  indicatorId: string;
  year: number;
}

interface LoadArchiveRankingRequest extends ArchiveDataRequest {
  fetcher?: typeof fetch;
}

export function isArchiveYear(year: number): boolean {
  return year < HOT_DATA_START_YEAR;
}

export function buildArchiveDataUrl({ baseUrl, indicatorId, year }: ArchiveDataRequest): string {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");
  return `${normalizedBaseUrl}/${year}/${encodeURIComponent(indicatorId)}.json`;
}

export async function loadArchiveRanking({
  fetcher = fetch,
  baseUrl,
  indicatorId,
  year
}: LoadArchiveRankingRequest): Promise<RankingRow[]> {
  const url = buildArchiveDataUrl({ baseUrl, indicatorId, year });
  const response = await fetcher(url);

  if (!response.ok) {
    throw new Error(`Архивные данные недоступны: ${response.status}`);
  }

  return response.json() as Promise<RankingRow[]>;
}

export function getArchiveBaseUrl(): string | null {
  return import.meta.env.VITE_ARCHIVE_DATA_URL || null;
}
