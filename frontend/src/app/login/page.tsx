"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { KeyRound, MapPin, ShieldCheck } from "lucide-react";
import { apiFetch, setToken } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { ErrorBanner, SourceBadge } from "@/components/ui/LoadingState";
import { getHeadPassword, loadMunicipalities, type MunicipalityOption } from "@/lib/staticDemo";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStatic = process.env.NEXT_PUBLIC_STATIC_DEMO === "true";

export default function LoginPage() {
  const router = useRouter();
  const [municipalities, setMunicipalities] = useState<MunicipalityOption[]>([]);
  const [selectedLogin, setSelectedLogin] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("district12345");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        const list = isStatic
          ? await loadMunicipalities()
          : await fetch(`${BASE}/demo-data/municipalities.json`).then((r) => r.json() as Promise<MunicipalityOption[]>);
        setMunicipalities(list);
        if (list.length > 0) {
          setSelectedLogin(list[0].login);
          setLogin(list[0].login);
        }
        if (isStatic) {
          setPassword(await getHeadPassword());
        }
      } catch {
        setMunicipalities([]);
      }
    }
    bootstrap();
  }, []);

  function onMunicipalityChange(value: string) {
    setSelectedLogin(value);
    setLogin(value);
  }

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

  const selectedName = municipalities.find((item) => item.login === selectedLogin)?.name;

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
                63 муниципальных образования
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
                Личный кабинет для глав районов и городских округов: показатели, рейтинг и сравнение с республикой.
              </p>
              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-bashkir-blue/15 bg-white/60 p-4 backdrop-blur">
                <Image src="/emblem-rb.svg" alt="Герб РБ" width={64} height={64} className="shrink-0" priority />
                <div>
                  <p className="font-semibold text-bashkir-ink">Правительство Республики Башкортостан</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-bashkir-muted">
                    <MapPin size={14} className="text-bashkir-blue" />
                    Отдельный доступ для каждого МО
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
              {!isStatic ? <SourceBadge mode="live" /> : null}
            </div>

            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-bashkir-blue/20 bg-bashkir-blue/5 px-4 py-3 text-sm text-bashkir-ink">
              <KeyRound size={18} className="shrink-0 text-bashkir-blue" />
              Выберите своё муниципальное образование из списка 63 районов и городов
            </div>

            <div className="mb-6 flex justify-center lg:hidden">
              <Image src="/emblem-rb.svg" alt="Герб РБ" width={72} height={72} priority />
            </div>

            <form className="space-y-5" onSubmit={onSubmit}>
              <label className="block text-sm font-semibold text-bashkir-ink">
                Муниципальное образование
                <select
                  className="input-bashkir"
                  value={selectedLogin}
                  onChange={(event) => onMunicipalityChange(event.target.value)}
                  required
                >
                  {municipalities.length === 0 ? (
                    <option value="">Загрузка списка…</option>
                  ) : (
                    municipalities.map((item) => (
                      <option key={item.login} value={item.login}>
                        {item.name}
                      </option>
                    ))
                  )}
                </select>
              </label>
              {selectedName ? (
                <p className="text-xs text-bashkir-muted">
                  Логин: <code className="rounded bg-bashkir-cream px-1.5 py-0.5">{login}</code>
                </p>
              ) : null}
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
              <Button type="submit" className="w-full py-3 text-base" disabled={loading || !login}>
                {loading ? "Вход…" : "Войти в личный кабинет"}
              </Button>
            </form>

            <p className="mt-6 text-center text-xs text-bashkir-muted">
              Администратор: <code className="rounded-lg bg-bashkir-cream px-2 py-0.5">admin</code> /{" "}
              <code className="rounded-lg bg-bashkir-cream px-2 py-0.5">admin12345</code>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
