# BDMO Real Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace user-facing demo statistics with official BDMO-based data for all top-level municipalities of Bashkortostan.

**Architecture:** Keep the existing in-memory/static-data architecture, but split real municipal reference data from statistic values. Static GitHub Pages must use a generated official snapshot, not calculated demo values.

**Tech Stack:** TypeScript, React, Vite, Express, Vitest, CSV import helpers.

---

### Task 1: Full Municipality Catalog

**Files:**
- Create: `src/data/bashkortostanMunicipalities.ts`
- Modify: `src/data/seed.ts`
- Modify: `src/shared/districts.ts`
- Test: `tests/districts.test.ts`

- [ ] Write a failing test that expects 63 municipalities: 54 districts and 9 city districts.
- [ ] Run `npm test tests/districts.test.ts` and confirm it fails before implementation.
- [ ] Add the full municipality catalog and aliases for BDMO names.
- [ ] Update seed exports to use the full catalog.
- [ ] Run the focused test and confirm it passes.

### Task 2: Remove Demo Statistic Values

**Files:**
- Modify: `src/data/seed.ts`
- Modify: `src/client/App.tsx`
- Test: `tests/dataStore.test.ts`

- [ ] Write a failing test that default seeded statistic values are empty unless an official snapshot is loaded.
- [ ] Run the focused test and confirm it fails.
- [ ] Remove formula-generated statistic values from the user-facing seed.
- [ ] Make empty rankings and profiles render as `Нет данных` instead of fake numbers.
- [ ] Run the focused test and confirm it passes.

### Task 3: BDMO Snapshot Input

**Files:**
- Create: `src/data/bdmoSnapshot.ts`
- Modify: `src/client/staticData.ts`
- Test: `tests/staticData.test.ts`

- [ ] Write a failing test that static data uses BDMO snapshot values when present.
- [ ] Run the focused test and confirm it fails.
- [ ] Add a snapshot module generated from tochno.st BDMO CSV.
- [ ] Wire `staticData` to use the official snapshot values.
- [ ] Run the focused test and confirm it passes.

### Task 4: Import Robustness

**Files:**
- Modify: `src/server/importer.ts`
- Test: `tests/importer.test.ts`

- [ ] Write failing tests for tochno.st-style BDMO columns and municipality aliases.
- [ ] Run the focused test and confirm it fails.
- [ ] Extend field aliases without breaking the existing flat CSV format.
- [ ] Run the focused test and confirm it passes.

### Task 5: Verification and Publish

**Files:**
- Modify: `README.md`
- Generated/update: official snapshot data file if needed.

- [ ] Update README: no demo statistics, source is Rosstat BDMO via tochno.st processing.
- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Commit changes.
- [ ] Push and wait for GitHub Pages workflow.
