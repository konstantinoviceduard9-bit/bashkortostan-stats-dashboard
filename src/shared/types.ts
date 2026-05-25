export type DistrictType = "district" | "city";
export type RankDirection = "asc" | "desc" | "neutral";
export type ImportStatus = "success" | "warning" | "failed";

export interface District {
  id: string;
  name: string;
  type: DistrictType;
}

export interface IndicatorGroup {
  id: string;
  name: string;
  description: string;
}

export interface Indicator {
  id: string;
  groupId: string;
  name: string;
  unit: string;
  description: string;
  rankDirection: RankDirection;
  sourceId?: string;
  sourceIndicatorId?: string;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  publisher: string;
  format: "csv" | "json" | "xlsx" | "manual";
  publishedAt?: string;
}

export interface StatValue {
  districtId: string;
  indicatorId: string;
  year: number;
  value: number;
  sourceId: string;
  loadedAt?: string;
}

export interface ImportRun {
  id: string;
  sourceId: string;
  status: ImportStatus;
  startedAt: string;
  finishedAt: string;
  updatedRows: number;
  warnings: string[];
  errors: string[];
}

export interface RankingRow {
  districtId: string;
  districtName: string;
  rank: number;
  total: number;
  value: number;
  unit: string;
  previousRank?: number;
  rankDelta?: number;
  sourceId: string;
}

export interface DashboardSummary {
  selectedYear: number;
  selectedDistrictId: string;
  cards: Array<{
    indicatorId: string;
    indicatorName: string;
    value: number;
    unit: string;
    rank?: number;
    total?: number;
  }>;
}
