import { Router } from "express";
import { districtAliases } from "../shared/districts";
import { createFedstatSdmxAdapter, type FedstatImportSpec } from "./fedstat";
import { createCsvUrlAdapter, runImport } from "./importer";
import { createConfiguredOfficialAdapter, listOfficialImportSources } from "./officialSources";
import { store } from "./dataStore";

export const api = Router();

api.get("/health", (_request, response) => {
  response.json({ ok: true, service: "bashkortostan-stats-dashboard" });
});

api.get("/districts", (_request, response) => {
  response.json(store.listDistricts());
});

api.get("/indicator-groups", (_request, response) => {
  response.json(store.listIndicatorGroups());
});

api.get("/indicators", (request, response) => {
  response.json(store.listIndicators(String(request.query.groupId ?? "") || undefined));
});

api.get("/sources", (_request, response) => {
  response.json(store.listSources());
});

api.get("/years", (_request, response) => {
  response.json(store.listYears());
});

api.get("/values", (request, response) => {
  response.json(
    store.listValues({
      districtId: String(request.query.districtId ?? "") || undefined,
      indicatorId: String(request.query.indicatorId ?? "") || undefined,
      year: request.query.year ? Number(request.query.year) : undefined
    })
  );
});

api.get("/rankings", (request, response) => {
  try {
    const indicatorId = String(request.query.indicatorId ?? "");
    const year = Number(request.query.year);
    response.json(store.getRanking(indicatorId, year));
  } catch (error) {
    response.status(404).json({ error: error instanceof Error ? error.message : "Ошибка рейтинга" });
  }
});

api.get("/districts/:districtId/profile", (request, response) => {
  try {
    response.json(store.getDistrictProfile(request.params.districtId, Number(request.query.year)));
  } catch (error) {
    response.status(404).json({ error: error instanceof Error ? error.message : "Ошибка профиля района" });
  }
});

api.get("/dashboard", (request, response) => {
  try {
    response.json(store.getDashboardSummary(String(request.query.districtId), Number(request.query.year)));
  } catch (error) {
    response.status(404).json({ error: error instanceof Error ? error.message : "Ошибка дашборда" });
  }
});

api.get("/quality", (_request, response) => {
  response.json(store.getQualityReport());
});

api.get("/import-runs", (_request, response) => {
  response.json(store.listImportRuns());
});

api.get("/import-sources", (_request, response) => {
  response.json(listOfficialImportSources());
});

api.post("/imports/official/:sourceId", async (request, response) => {
  try {
    const result = await runImport(createConfiguredOfficialAdapter(request.params.sourceId));
    store.addImportedValues(result.values, result.run);
    response.status(result.run.status === "failed" ? 422 : 201).json(result);
  } catch (error) {
    response.status(400).json({ error: error instanceof Error ? error.message : "Ошибка настройки импорта" });
  }
});

api.post("/imports/csv-url", async (request, response) => {
  const { sourceId, url } = request.body as { sourceId?: string; url?: string };

  if (!sourceId || !url) {
    response.status(400).json({ error: "Нужно передать sourceId и url" });
    return;
  }

  const result = await runImport(createCsvUrlAdapter(sourceId, url, districtAliases));
  store.addImportedValues(result.values, result.run);
  response.status(result.run.status === "failed" ? 422 : 201).json(result);
});

api.post("/imports/fedstat", async (request, response) => {
  const spec = request.body as Partial<FedstatImportSpec>;

  if (!isFedstatImportSpec(spec)) {
    response.status(400).json({
      error:
        "Нужно передать точную Fedstat-спецификацию: fedstatIndicatorId, title, selectedFilterIds, filterObjectIds, localIndicatorId, municipalityDimension, yearDimension"
    });
    return;
  }

  const result = await runImport(createFedstatSdmxAdapter(spec));
  store.addImportedValues(result.values, result.run);
  response.status(result.run.status === "failed" ? 422 : 201).json(result);
});

function isFedstatImportSpec(spec: Partial<FedstatImportSpec>): spec is FedstatImportSpec {
  return (
    spec.format === "sdmx" &&
    typeof spec.fedstatIndicatorId === "string" &&
    typeof spec.title === "string" &&
    Array.isArray(spec.selectedFilterIds) &&
    spec.selectedFilterIds.every((item) => typeof item === "string") &&
    typeof spec.filterObjectIds?.lineObjectIds === "string" &&
    typeof spec.filterObjectIds?.columnObjectIds === "string" &&
    typeof spec.filterObjectIds?.filterObjectIds === "string" &&
    typeof spec.sourceId === "string" &&
    typeof spec.localIndicatorId === "string" &&
    typeof spec.municipalityDimension === "string" &&
    typeof spec.yearDimension === "string" &&
    typeof spec.districtAliases === "object" &&
    spec.districtAliases !== null
  );
}
