/** Общие типы появятся при новой реализации дашборда. */

export interface District {
  id: string;
  name: string;
  type: "district" | "city";
}
