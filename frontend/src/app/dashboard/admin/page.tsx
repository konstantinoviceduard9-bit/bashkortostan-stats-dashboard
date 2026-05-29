"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
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
        <Button type="button" className="bg-slate-200 text-bashkir-blue hover:bg-slate-300" onClick={load} disabled={busy}>
          Обновить статус
        </Button>
      </div>

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
