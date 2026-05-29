"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { apiFetch, setToken } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { ErrorBanner } from "@/components/ui/LoadingState";

export default function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await apiFetch<{ access_token: string }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ login, password }),
      });
      setToken(result.access_token);
      router.push("/dashboard");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Ошибка входа");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page flex min-h-screen items-center justify-center p-4">
      <div className="card-bashkir w-full max-w-md border-bashkir-green/30 shadow-lg">
        <div className="mb-6 text-center">
          <Image src="/emblem-rb.svg" alt="Герб Республики Башкортостан" width={80} height={80} className="mx-auto mb-3" priority />
          <h1 className="heading-gold">Вход в дашборд</h1>
          <p className="mt-2 text-sm text-slate-600">Республика Башкортостан · 63 муниципалитета</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            Логин
            <input
              className="input-bashkir"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              autoComplete="username"
              placeholder="glava_ufa"
              required
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Пароль
            <input
              type="password"
              className="input-bashkir"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
          </label>
          {error ? <ErrorBanner message={error} /> : null}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Вход…" : "Войти"}
          </Button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-500">
          Демо: <code className="rounded bg-slate-100 px-1">glava_ufa</code> / <code className="rounded bg-slate-100 px-1">district12345</code>
        </p>
      </div>
    </main>
  );
}
