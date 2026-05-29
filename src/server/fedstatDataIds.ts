/**
 * Port of fedstatAPIr filter discovery (fedstat_get_data_ids + fedstat_data_ids_filter).
 * Parses the indicator page JavaScript to build POST bodies for data.do?format=sdmx.
 */

export interface FedstatDataIdRow {
  filterFieldId: string;
  filterFieldTitle: string;
  filterValueId: string;
  filterValueTitle: string;
  filterFieldObjectIds: "lineObjectIds" | "columnObjectIds" | "filterObjectIds";
}

export interface FedstatDataIdsTable {
  rows: FedstatDataIdRow[];
  layout: {
    lineObjectIds: string;
    columnObjectIds: string;
    filterObjectIds: string;
    lineFields: string[];
    columnFields: string[];
    hiddenFields: string[];
  };
}

export function extractIndicatorScripts(html: string): string[] {
  const scripts: string[] = [];
  const pattern = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let match = pattern.exec(html);

  while (match) {
    scripts.push(match[1]);
    match = pattern.exec(html);
  }

  return scripts;
}

export function findGridScript(scripts: string[]): string {
  const script = scripts.find((item) => item.includes("filters: {") && item.includes("left_columns: ["));
  if (!script) {
    throw new Error("Не найден блок filters/left_columns на странице показателя Fedstat");
  }

  return script;
}

const FILTER_HEADER = /(\d+):\s*\{\s*title:\s*'((?:\\'|[^'])*)',\s*all:\s*(?:true|false),\s*values:\s*\{/g;
const VALUE_ENTRY = /['"]?([^'":]+)['"]?:\s*\{\s*title:\s*'((?:\\'|[^'])*)'/g;

function extractBalancedBlock(source: string, openBraceIndex: number): string {
  let depth = 0;

  for (let index = openBraceIndex; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(openBraceIndex + 1, index);
      }
    }
  }

  throw new Error("Fedstat: не удалось прочитать вложенный блок values");
}

function decodeJsString(value: string): string {
  if (!value.includes("\\u")) {
    return value.replace(/\\'/g, "'");
  }

  try {
    return JSON.parse(`"${value.replace(/"/g, '\\"')}"`);
  } catch {
    return value;
  }
}

function parseFiltersBlock(script: string): Record<string, { title: string; values: Record<string, { title: string }> }> {
  const filters: Record<string, { title: string; values: Record<string, { title: string }> }> = {};
  const start = script.indexOf("filters: {");
  const end = script.indexOf("left_columns: [");

  if (start < 0 || end < 0) {
    throw new Error("Не удалось выделить блок filters в скрипте Fedstat");
  }

  const block = script.slice(start, end);
  FILTER_HEADER.lastIndex = 0;
  let match = FILTER_HEADER.exec(block);

  while (match) {
    const valuesStart = match.index + match[0].length - 1;
    const valuesBody = extractBalancedBlock(block, valuesStart);
    const values: Record<string, { title: string }> = {};
    VALUE_ENTRY.lastIndex = 0;
    let valueMatch = VALUE_ENTRY.exec(valuesBody);

    while (valueMatch) {
      values[valueMatch[1]] = { title: decodeJsString(valueMatch[2]) };
      valueMatch = VALUE_ENTRY.exec(valuesBody);
    }

    filters[match[1]] = {
      title: decodeJsString(match[2]),
      values
    };
    match = FILTER_HEADER.exec(block);
  }

  if (Object.keys(filters).length === 0) {
    throw new Error("Fedstat: не распознаны фильтры на странице показателя");
  }

  return filters;
}

function parseIdList(raw: string | undefined): string[] {
  if (!raw) {
    return [];
  }

  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseLayoutBlock(script: string): FedstatDataIdsTable["layout"] {
  const lineMatch = script.match(/left_columns:\s*\[([^\]]*)\]/);
  const columnMatch = script.match(/top_columns:\s*\[([^\]]*)\]/);
  const filterMatch = script.match(/filterObjectIds:\s*\[([^\]]*)\]/);
  const lineFields = parseIdList(lineMatch?.[1]);
  const columnFields = parseIdList(columnMatch?.[1]);
  const hiddenFields = parseIdList(filterMatch?.[1]);

  return {
    lineObjectIds: lineFields[0] || "1",
    columnObjectIds: columnFields[0] || "2",
    filterObjectIds: hiddenFields[0] || "0",
    lineFields,
    columnFields,
    hiddenFields
  };
}

function resolveObjectIds(layout: FedstatDataIdsTable["layout"], filterFieldId: string): FedstatDataIdRow["filterFieldObjectIds"] {
  if (layout.hiddenFields.includes(filterFieldId)) {
    return "filterObjectIds";
  }

  if (layout.columnFields.includes(filterFieldId)) {
    return "columnObjectIds";
  }

  return "lineObjectIds";
}

export function parseFedstatDataIdsFromHtml(html: string): FedstatDataIdsTable {
  const script = findGridScript(extractIndicatorScripts(html));
  const filters = parseFiltersBlock(script);
  const layout = parseLayoutBlock(script);
  const rows: FedstatDataIdRow[] = [];

  Object.entries(filters).forEach(([filterFieldId, filterField]) => {
    const values = filterField.values ?? {};
    const objectIds = resolveObjectIds(layout, filterFieldId);

    Object.entries(values).forEach(([filterValueId, filterValue]) => {
      rows.push({
        filterFieldId,
        filterFieldTitle: filterField.title,
        filterValueId,
        filterValueTitle: filterValue.title.replace(/&quot;/g, '"'),
        filterFieldObjectIds: objectIds
      });
    });
  });

  return { rows, layout };
}

export function buildDefaultFedstatSelection(
  table: FedstatDataIdsTable,
  overrides: Record<string, string | string[]> = {}
): FedstatDataIdRow[] {
  const normalizedOverrides = Object.fromEntries(
    Object.entries(overrides).map(([key, value]) => [key.trim().toLowerCase(), value])
  );
  const indicatorRows = table.rows.filter((row) => row.filterFieldId === "0");
  const selected: FedstatDataIdRow[] = [...indicatorRows];
  const fieldTitles = [...new Set(table.rows.map((row) => row.filterFieldTitle).filter((title) => title !== "Показатель"))];

  for (const fieldTitle of fieldTitles) {
    const key = fieldTitle.trim().toLowerCase();
    const override = normalizedOverrides[key];

    if (override) {
      selected.push(
        ...filterFedstatDataIds(table, { [fieldTitle]: override }).filter((row) => row.filterFieldId !== "0")
      );
      continue;
    }

    const first = table.rows.find((row) => row.filterFieldTitle === fieldTitle);
    if (first) {
      selected.push(first);
    }
  }

  return selected;
}

export function filterFedstatDataIds(
  table: FedstatDataIdsTable,
  filters: Record<string, string | string[]>
): FedstatDataIdRow[] {
  const normalizedFilters = Object.fromEntries(
    Object.entries(filters).map(([key, value]) => [key.trim().toLowerCase(), value])
  );

  const indicatorRows = table.rows.filter((row) => row.filterFieldId === "0");
  const selected: FedstatDataIdRow[] = [...indicatorRows];

  const fieldTitles = [...new Set(table.rows.map((row) => row.filterFieldTitle))];

  for (const fieldTitle of fieldTitles) {
    const key = fieldTitle.trim().toLowerCase();
    const requested = normalizedFilters[key];
    if (!requested) {
      continue;
    }

    const requestedValues = Array.isArray(requested) ? requested : [requested];
    const fieldRows = table.rows.filter((row) => row.filterFieldTitle === fieldTitle);

    if (requestedValues.includes("*")) {
      selected.push(...fieldRows);
      continue;
    }

    for (const requestedValue of requestedValues) {
      const needle = requestedValue.trim().toLowerCase();
      const matches = fieldRows.filter((row) => {
        const title = row.filterValueTitle.toLowerCase();
        const id = row.filterValueId.toLowerCase();
        return title === needle || title.includes(needle) || id === needle;
      });

      if (matches.length === 0) {
        throw new Error(`Fedstat: не найдено значение фильтра «${fieldTitle}» = «${requestedValue}»`);
      }

      selected.push(...matches);
    }
  }

  return selected;
}

export function buildFedstatPostBodyFromDataIds(
  table: FedstatDataIdsTable,
  selectedRows: FedstatDataIdRow[],
  indicatorTitle: string
): URLSearchParams {
  const indicator = selectedRows.find((row) => row.filterFieldId === "0");
  if (!indicator) {
    throw new Error("Fedstat: в выборке нет строки показателя (filter_field_id = 0)");
  }

  const body = new URLSearchParams();
  body.set("format", "sdmx");
  body.set("id", indicator.filterValueId);
  body.set("indicator_title", indicatorTitle);

  const layoutByField = new Map<string, FedstatDataIdRow["filterFieldObjectIds"]>();
  for (const row of table.rows) {
    if (!layoutByField.has(row.filterFieldId)) {
      layoutByField.set(row.filterFieldId, row.filterFieldObjectIds);
    }
  }

  const objectIdsUsed = new Set<"lineObjectIds" | "columnObjectIds" | "filterObjectIds">();
  for (const row of selectedRows) {
    objectIdsUsed.add(row.filterFieldObjectIds);
  }

  if (objectIdsUsed.has("lineObjectIds")) {
    body.set("lineObjectIds", table.layout.lineObjectIds);
  }
  if (objectIdsUsed.has("columnObjectIds")) {
    body.set("columnObjectIds", table.layout.columnObjectIds);
  }
  if (objectIdsUsed.has("filterObjectIds")) {
    body.set("filterObjectIds", table.layout.filterObjectIds);
  }

  const uniqueRows = new Map(
    selectedRows
      .filter((row) => row.filterFieldId !== "0")
      .map((row) => [`${row.filterFieldId}_${row.filterValueId}`, row])
  );

  for (const row of uniqueRows.values()) {
    body.append("selectedFilterIds", `${row.filterFieldId}_${row.filterValueId}`);
  }

  return body;
}
