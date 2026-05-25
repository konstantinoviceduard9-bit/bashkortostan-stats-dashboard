CREATE TABLE districts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('district', 'city'))
);

CREATE TABLE indicator_groups (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE indicators (
  id TEXT PRIMARY KEY,
  group_id TEXT NOT NULL REFERENCES indicator_groups(id),
  name TEXT NOT NULL,
  unit TEXT NOT NULL,
  description TEXT NOT NULL,
  rank_direction TEXT NOT NULL CHECK (rank_direction IN ('asc', 'desc', 'neutral'))
);

CREATE TABLE sources (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  publisher TEXT NOT NULL,
  url TEXT NOT NULL,
  format TEXT NOT NULL,
  published_at TEXT
);

CREATE TABLE stat_values (
  district_id TEXT NOT NULL REFERENCES districts(id),
  indicator_id TEXT NOT NULL REFERENCES indicators(id),
  year INTEGER NOT NULL,
  value REAL NOT NULL,
  source_id TEXT NOT NULL REFERENCES sources(id),
  loaded_at TEXT,
  PRIMARY KEY (district_id, indicator_id, year, source_id)
);

CREATE TABLE import_runs (
  id TEXT PRIMARY KEY,
  source_id TEXT NOT NULL REFERENCES sources(id),
  status TEXT NOT NULL CHECK (status IN ('success', 'warning', 'failed')),
  started_at TEXT NOT NULL,
  finished_at TEXT NOT NULL,
  updated_rows INTEGER NOT NULL,
  warnings_json TEXT NOT NULL DEFAULT '[]',
  errors_json TEXT NOT NULL DEFAULT '[]'
);
