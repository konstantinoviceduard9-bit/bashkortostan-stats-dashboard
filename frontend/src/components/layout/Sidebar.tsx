"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Building2,
  ChartNoAxesCombined,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Settings2,
  UserRound,
} from "lucide-react";
import { apiFetch, clearToken } from "@/lib/api";
import { SourceBadge } from "@/components/ui/LoadingState";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Обзор", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/indicators", label: "Показатели", icon: ChartNoAxesCombined },
  { href: "/dashboard/rating", label: "Рейтинг", icon: Building2 },
  { href: "/dashboard/profile", label: "Профиль", icon: UserRound },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
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

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <aside className={cn("sidebar", collapsed && "sidebar--collapsed")}>
      <div className="sidebar__tricolor" aria-hidden />
      <div className="sidebar__brand">
        <Image src="/emblem-rb.svg" alt="" width={44} height={44} className="sidebar__emblem" priority />
        {!collapsed ? (
          <div className="min-w-0">
            <p className="sidebar__brand-title">Муниципальная статистика</p>
            <p className="sidebar__brand-sub">Башкортостан · 63 МО</p>
          </div>
        ) : null}
      </div>

      {!collapsed && !isStaticDemo ? (
        <div className="px-4 pb-2">
          <SourceBadge mode="live" />
        </div>
      ) : null}

      <nav className="sidebar__nav">
        {NAV.map((item) => {
          const active = isActive(item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn("sidebar__link", active && "sidebar__link--active")}
              title={collapsed ? item.label : undefined}
            >
              <item.icon size={20} strokeWidth={active ? 2.25 : 1.75} />
              {!collapsed ? <span>{item.label}</span> : null}
            </Link>
          );
        })}
        {role === "admin" ? (
          <Link
            href="/dashboard/admin"
            className={cn("sidebar__link", isActive("/dashboard/admin") && "sidebar__link--active")}
            title={collapsed ? "Администрирование" : undefined}
          >
            <Settings2 size={20} />
            {!collapsed ? <span>Администрирование</span> : null}
          </Link>
        ) : null}
      </nav>

      <div className="sidebar__footer">
        <button type="button" className="sidebar__collapse" onClick={() => setCollapsed((v) => !v)} aria-label="Свернуть меню">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed ? <span>Свернуть</span> : null}
        </button>
        <button type="button" className="sidebar__logout" onClick={logout} title="Выход">
          <LogOut size={18} />
          {!collapsed ? <span>Выход</span> : null}
        </button>
      </div>
    </aside>
  );
}
