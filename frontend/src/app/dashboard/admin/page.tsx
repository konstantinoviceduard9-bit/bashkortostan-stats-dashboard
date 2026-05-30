"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { apiUpload } from "@/lib/apiUpload";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { CONNECTOR_LABELS, RUN_STATUS_LABELS } from "@/lib/dashboard-meta";

interface ConnectorStatus {
  connector_id: string;
  period: string;
  status: string;
  message: string | null;
  consecutive_failures: number;
  started_at: string | null;
  finished_at: string | null;
}

interface Profile {
  role: string;
}

export default function AdminPage() {
  const [role, setRole] = useState<string | null>(null);
  const [status, setStatus] = useState<ConnectorStatus[]>([]);
  const [log, setLog] = useState<string>("");
  const [busy, setBusy] = useState(false);
  const [gasFile, setGasFile] = useState<File | null>(null);

  const load = () => {
    apiFetch<{ recent: ConnectorStatus[] }>("/admin/connectors/status")
      .then((data) => setStatus(data.recent))
      .catch((error) => setLog(error instanceof Error ? error.message : "Ошибка"));
  };

  useEffect(() => {
    apiFetch<Profile>("/dashboard/me")
      .then((profile) => {
        setRole(profile.role);
        if (profile.role === "admin") load();
      })
      .catch((error) => setLog(error instanceof Error ? error.message : "Ошибка"));
  }, []);

  const uploadGas = async () => {
    if (!gasFile) return;
    setBusy(true);
    setLog("Загрузка ГАС…");
    try {
      const form = new FormData();
      form.append("file", gasFile);
      const result = await apiUpload<{ rows: number; changed: boolean }>("/admin/gas/upload", form);
      setLog(`ГАС: загружено ${result.rows} строк, изменено=${result.changed}`);
    } catch (error) {
      setLog(error instanceof Error ? error.message : "Ошибка загрузки");
    } finally {
      setBusy(false);
    }
  };

  const runEtl = async () => {
    setBusy(true);
    setLog("Запуск загрузки данных…");
    try {
      const result = await apiFetch<{ period: string; results: { connector: string; status: string; message: string }[] }>(
        "/admin/connectors/run",
        { method: "POST" }
      );
      setLog(
        result.results
          .map(
            (row) =>
              `${CONNECTOR_LABELS[row.connector] ?? row.connector}: ${RUN_STATUS_LABELS[row.status] ?? row.status} — ${row.message}`
          )
          .join("\n") || "Готово"
      );
      load();
    } catch (error) {
      setLog(error instanceof Error ? error.message : "Ошибка загрузки данных");
    } finally {
      setBusy(false);
    }
  };

  if (role === null) return <p className="text-slate-600">Загрузка…</p>;
  if (role !== "admin") {
    return <p className="text-red-600">Доступ только для администратора.</p>;
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Загрузка данных" subtitle="Запуск коннекторов, загрузка ГАС и мониторинг статусов." />

      <div className="flex flex-wrap gap-3">
        <Button onClick={runEtl} disabled={busy}>
          {busy ? "Выполняется…" : "Запустить все коннекторы"}
        </Button>
        <Button type="button" className="btn-secondary" onClick={load} disabled={busy}>
          Обновить статус
        </Button>
      </div>

      <section className="card-bashkir space-y-3">
        <h3 className="font-semibold text-bashkir-blue">Загрузка ГАС (таблица)</h3>
        <p className="text-sm text-slate-600">
          Шаблон: <code className="text-xs">backend/data/gas_upload_template.csv</code>
        </p>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(event) => setGasFile(event.target.files?.[0] ?? null)}
          className="block text-sm"
        />
        <Button type="button" onClick={uploadGas} disabled={busy || !gasFile}>
          Загрузить файл
        </Button>
      </section>

      {log ? (
        <pre className="card-bashkir overflow-x-auto whitespace-pre-wrap text-sm text-slate-700">{log}</pre>
      ) : null}

      <section className="card-bashkir overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b text-bashkir-blue">
              <th className="py-2 pr-4">Коннектор</th>
              <th className="py-2 pr-4">Статус</th>
              <th className="py-2 pr-4">Период</th>
              <th className="py-2">Сообщение</th>
            </tr>
          </thead>
          <tbody>
            {status.map((row, index) => (
              <tr key={`${row.connector_id}-${index}`} className="border-b border-slate-100">
                <td className="py-2 pr-4 font-medium">{CONNECTOR_LABELS[row.connector_id] ?? row.connector_id}</td>
                <td className="py-2 pr-4">{RUN_STATUS_LABELS[row.status] ?? row.status}</td>
                <td className="py-2 pr-4">{row.period}</td>
                <td className="py-2 text-slate-600">{row.message ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
