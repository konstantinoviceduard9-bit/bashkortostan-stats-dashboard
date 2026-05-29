"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch, setToken } from "@/lib/api";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState("glava_ufa");
  const [password, setPassword] = useState("district12345");
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
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="card-bashkir w-full max-w-md border-bashkir-green/40">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 border-bashkir-gold bg-white text-2xl font-bold text-bashkir-green">
            РБ
          </div>
          <h1 className="heading-gold">Вход в дашборд</h1>
          <p className="mt-2 text-sm text-slate-600">Республика Башкортостан</p>
        </div>
        <form className="space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium">
            Логин
            <input
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              autoComplete="username"
            />
          </label>
          <label className="block text-sm font-medium">
            Пароль
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />
          </label>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Вход…" : "Войти"}
          </Button>
        </form>
      </div>
    </main>
  );
}
