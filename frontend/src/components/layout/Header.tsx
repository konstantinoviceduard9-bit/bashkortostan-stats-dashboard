"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { apiFetch, clearToken } from "@/lib/api";

const NAV = [
  { href: "/dashboard", label: "Главная" },
  { href: "/dashboard/indicators", label: "Показатели" },
  { href: "/dashboard/rating", label: "Рейтинг" },
  { href: "/dashboard/profile", label: "Профиль" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);

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
      ? "rounded-lg bg-bashkir-blue/10 px-3 py-2 font-medium text-bashkir-blue"
      : "rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100";
  }

  return (
    <header className="sticky top-0 z-40 border-b-4 border-bashkir-green bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Image src="/emblem-rb.svg" alt="Герб РБ" width={48} height={48} priority className="shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex h-2 w-28 overflow-hidden rounded-sm border border-slate-200">
            <span className="flex-1 bg-bashkir-blue" />
            <span className="flex-1 bg-white" />
            <span className="flex-1 bg-bashkir-green" />
          </div>
          <h1 className="truncate font-serif text-base font-bold text-bashkir-gold md:text-lg">
            Дашборд муниципальной статистики
          </h1>
        </div>
        <button
          type="button"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          Меню
        </button>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={navClass(item.href)}>
              {item.label}
            </Link>
          ))}
          {role === "admin" ? (
            <Link href="/dashboard/admin" className={navClass("/dashboard/admin")}>
              Админ
            </Link>
          ) : null}
          <button type="button" onClick={logout} className="ml-2 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100">
            Выход
          </button>
        </nav>
      </div>
      {open ? (
        <nav className="border-t border-slate-100 px-4 py-3 md:hidden">
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
                  Админ
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
