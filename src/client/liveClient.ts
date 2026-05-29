import { getLiveApiBaseUrl, isLiveDataEnabled } from "./dataMode";
import type { Indicator, IndicatorGroup, RankingRow } from "../shared/types";

export interface LiveCatalogResponse {
  enabled: boolean;
  groups: IndicatorGroup[];
  indicators: Indicator[];
}

export interface LiveRankingResponse {
  catalogId: string;
  indicatorId: string;
  indicatorName: string;
  year: number;
  unit: string;
  fetchedAt: string;
  sourceUrl: string;
  source: "fedstat" | "opendata";
  ranking: RankingRow[];
  warnings: string[];
}

export { isLiveDataEnabled };

export async function fetchLiveCatalog(): Promise<LiveCatalogResponse> {
  const response = await fetch(`${getLiveApiBaseUrl()}/live/catalog`);
  if (!response.ok) {
    throw new Error(`Live API: ${response.status}`);
  }

  return response.json() as Promise<LiveCatalogResponse>;
}

export async function fetchLiveRanking(params: {
  catalogId: string;
  year: number;
  refresh?: boolean;
}): Promise<LiveRankingResponse> {
  const query = new URLSearchParams({
    catalogId: params.catalogId,
    year: String(params.year)
  });

  if (params.refresh) {
    query.set("refresh", "true");
  }

  const response = await fetch(`${getLiveApiBaseUrl()}/live/ranking?${query.toString()}`);
  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(body?.error ?? `Live API: ${response.status}`);
  }

  return response.json() as Promise<LiveRankingResponse>;
}
