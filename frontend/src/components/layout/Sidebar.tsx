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
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { apiFetch, clearToken } from "@/lib/api";
import { assetPath } from "@/lib/assetPath";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { SourceBadge } from "@/components/ui/LoadingState";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useI18n();
  const [role, setRole] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const isStaticDemo = process.env.NEXT_PUBLIC_STATIC_DEMO === "true";

  const NAV = [
    { href: "/dashboard", label: t.nav.overview, icon: LayoutDashboard, exact: true },
    { href: "/dashboard/indicators", label: t.nav.indicators, icon: ChartNoAxesCombined },
    { href: "/dashboard/rating", label: t.nav.rating, icon: Building2 },
    { href: "/dashboard/profile", label: t.nav.profile, icon: UserRound },
  ];

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
        <Image src={assetPath("/emblem-rb.svg")} alt="Герб РБ" width={44} height={44} className="sidebar__emblem" priority />
        {!collapsed ? (
          <div className="min-w-0">
            <p className="sidebar__brand-title">{t.brand.title}</p>
            <p className="sidebar__brand-sub">{t.brand.subtitle}</p>
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
            title={collapsed ? t.nav.admin : undefined}
          >
            <Settings2 size={20} />
            {!collapsed ? <span>{t.nav.admin}</span> : null}
          </Link>
        ) : null}
      </nav>

      <div className="sidebar__footer">
        <LanguageSwitcher className={cn("sidebar__lang", collapsed && "sidebar__lang--collapsed")} />
        <button type="button" className="sidebar__collapse" onClick={() => setCollapsed((v) => !v)} aria-label={t.nav.collapse}>
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed ? <span>{t.nav.collapse}</span> : null}
        </button>
        <button type="button" className="sidebar__logout" onClick={logout} title={t.nav.logout}>
          <LogOut size={18} />
          {!collapsed ? <span>{t.nav.logout}</span> : null}
        </button>
      </div>
    </aside>
  );
}
