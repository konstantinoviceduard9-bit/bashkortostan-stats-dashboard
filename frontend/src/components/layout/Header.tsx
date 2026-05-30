"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Building2, ChartNoAxesCombined, LayoutDashboard, Menu, UserRound, X } from "lucide-react";
import { apiFetch, clearToken } from "@/lib/api";
import { assetPath } from "@/lib/assetPath";
import { SourceBadge } from "@/components/ui/LoadingState";

const NAV = [
  { href: "/dashboard", label: "Главная", icon: LayoutDashboard },
  { href: "/dashboard/indicators", label: "Показатели", icon: ChartNoAxesCombined },
  { href: "/dashboard/rating", label: "Рейтинг", icon: Building2 },
  { href: "/dashboard/profile", label: "Профиль", icon: UserRound },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const isStaticDemo = process.env.NEXT_PUBLIC_STATIC_DEMO === "true";

  useEffect(() => {
    apiFetch<{ role: string }>("/dashboard/me")
      .then((profile) => setRole(profile.role))
      .catch(() => setRole(null));
  }, []);

  function logout() {
    clearToken();
    router.push("/login");
  }

  function navClass(href: string) {
    const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
    return active
      ? "rounded-lg bg-bashkir-blue/10 px-3 py-2 font-medium text-bashkir-blue shadow-sm"
      : "rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100";
  }

  return (
    <header className="sticky top-0 z-40 border-b border-bashkir-blue/15 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
        <Link href="/dashboard" className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-1 py-1">
          <Image src={assetPath("/emblem-rb.svg")} alt="Герб РБ" width={48} height={48} priority className="shrink-0" />
          <div className="min-w-0">
            <div className="mb-1 flex h-2 w-28 overflow-hidden rounded-sm border border-slate-200">
              <span className="flex-1 bg-bashkir-blue" />
              <span className="flex-1 bg-white" />
              <span className="flex-1 bg-bashkir-green" />
            </div>
            <h1 className="truncate font-serif text-sm font-bold text-bashkir-gold md:text-base">
              Муниципальная статистика РБ
            </h1>
          </div>
        </Link>
        <div className="hidden lg:block">
          {!isStaticDemo ? <SourceBadge mode="live" /> : null}
        </div>
        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Переключить меню"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={`${navClass(item.href)} inline-flex items-center gap-2`}>
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
          {role === "admin" ? (
            <Link href="/dashboard/admin" className={`${navClass("/dashboard/admin")} inline-flex items-center gap-2`}>
              <Building2 size={16} />
              Администрирование
            </Link>
          ) : null}
          <button type="button" onClick={logout} className="ml-2 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100">
            Выход
          </button>
        </nav>
      </div>
      {open ? (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {!isStaticDemo ? (
            <div className="mb-3">
              <SourceBadge mode="live" />
            </div>
          ) : null}
          <ul className="space-y-1 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`block ${navClass(item.href)}`} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            {role === "admin" ? (
              <li>
                <Link href="/dashboard/admin" className={`block ${navClass("/dashboard/admin")}`} onClick={() => setOpen(false)}>
                  Администрирование
                </Link>
              </li>
            ) : null}
            <li>
              <button type="button" className="block w-full rounded-lg px-3 py-2 text-left text-slate-600" onClick={logout}>
                Выход
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
