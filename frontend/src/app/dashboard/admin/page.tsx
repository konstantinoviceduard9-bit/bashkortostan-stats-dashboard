"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { apiUpload } from "@/lib/apiUpload";
import { Button } from "@/components/ui/Button";

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
      setLog(`ГАС: загружено ${result.rows} строк, changed=${result.changed}`);
    } catch (error) {
      setLog(error instanceof Error ? error.message : "Ошибка загрузки");
    } finally {
      setBusy(false);
    }
  };

  const runEtl = async () => {
    setBusy(true);
    setLog("Запуск ETL…");
    try {
      const result = await apiFetch<{ period: string; results: { connector: string; status: string; message: string }[] }>(
        "/admin/connectors/run",
        { method: "POST" }
      );
      setLog(
        result.results.map((row) => `${row.connector}: ${row.status} — ${row.message}`).join("\n") || "Готово"
      );
      load();
    } catch (error) {
      setLog(error instanceof Error ? error.message : "Ошибка ETL");
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
      <section>
        <h2 className="heading-gold">Администрирование ETL</h2>
        <p className="text-slate-600">Запуск коннекторов и статус последних загрузок</p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button onClick={runEtl} disabled={busy}>
          {busy ? "Выполняется…" : "Запустить все коннекторы"}
        </Button>
        <Button type="button" className="btn-secondary" onClick={load} disabled={busy}>
          Обновить статус
        </Button>
      </div>

      <section className="card-bashkir space-y-3">
        <h3 className="font-semibold text-bashkir-blue">Загрузка ГАС (CSV/Excel)</h3>
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
                <td className="py-2 pr-4 font-medium">{row.connector_id}</td>
                <td className="py-2 pr-4">{row.status}</td>
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
