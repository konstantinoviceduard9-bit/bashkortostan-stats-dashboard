"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { KeyRound, MapPin, ShieldCheck } from "lucide-react";
import { apiFetch, setToken } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { ErrorBanner, SourceBadge } from "@/components/ui/LoadingState";

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
    <main className="login-page flex min-h-screen items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-2xl backdrop-blur-xl">
        <div className="h-1.5 w-full bg-tricolor" aria-hidden />
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <section className="relative hidden overflow-hidden p-10 lg:block">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "url('/ornament.svg') repeat", backgroundSize: "180px" }}
            />
            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-bashkir-gold/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-bashkir-green backdrop-blur">
                <ShieldCheck size={14} />
                Официальный портал
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.1] text-bashkir-ink">
                Муниципальная
                <br />
                <span className="bg-gradient-to-r from-bashkir-blue via-bashkir-gold to-bashkir-green bg-clip-text text-transparent">
                  статистика
                </span>
                <br />
                Башкортостана
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-bashkir-muted">
                Мониторинг ключевых показателей 63 муниципальных образований: экономика, социальная сфера, бюджет и
                рейтинг эффективности.
              </p>
              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-bashkir-blue/15 bg-white/60 p-4 backdrop-blur">
                <Image src="/emblem-rb.svg" alt="Герб РБ" width={64} height={64} className="shrink-0" priority />
                <div>
                  <p className="font-semibold text-bashkir-ink">Правительство Республики Башкортостан</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-bashkir-muted">
                    <MapPin size={14} className="text-bashkir-blue" />
                    Для глав муниципальных районов и городских округов
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-100 p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-bashkir-blue">Вход</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-bashkir-ink">Личный кабинет</h2>
              </div>
              <SourceBadge mode={process.env.NEXT_PUBLIC_STATIC_DEMO === "true" ? "demo" : "live"} />
            </div>

            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-bashkir-blue/20 bg-bashkir-blue/5 px-4 py-3 text-sm text-bashkir-ink">
              <KeyRound size={18} className="shrink-0 text-bashkir-blue" />
              Доступ только для зарегистрированных пользователей
            </div>

            <div className="mb-6 flex justify-center lg:hidden">
              <Image src="/emblem-rb.svg" alt="Герб РБ" width={72} height={72} priority />
            </div>

            <form className="space-y-5" onSubmit={onSubmit}>
              <label className="block text-sm font-semibold text-bashkir-ink">
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
              <label className="block text-sm font-semibold text-bashkir-ink">
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
              <Button type="submit" className="w-full py-3 text-base" disabled={loading}>
                {loading ? "Вход…" : "Войти в дашборд"}
              </Button>
            </form>

            <p className="mt-6 text-center text-xs text-bashkir-muted">
              Демо:{" "}
              <code className="rounded-lg bg-bashkir-cream px-2 py-0.5 font-medium text-bashkir-ink">glava_ufa</code> /{" "}
              <code className="rounded-lg bg-bashkir-cream px-2 py-0.5 font-medium text-bashkir-ink">district12345</code>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
