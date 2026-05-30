"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Building2, ChartNoAxesCombined, LayoutDashboard, LogOut, UserRound } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { apiFetch, clearToken } from "@/lib/api";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/assetPath";
import { useI18n } from "@/lib/i18n/LocaleProvider";

export function MobileTopBar() {
  const router = useRouter();
  const { t } = useI18n();

  function logout() {
    clearToken();
    router.push("/login");
  }

  return (
    <header className="mobile-topbar lg:hidden">
      <div className="mobile-topbar__inner">
        <Link href="/dashboard" className="mobile-topbar__brand">
          <Image src={assetPath("/emblem-rb.svg")} alt="Герб РБ" width={36} height={36} className="shrink-0 rounded-lg bg-white p-0.5" />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-bashkir-ink">{t.brand.title}</p>
            <p className="truncate text-[11px] text-bashkir-muted">{t.brand.region}</p>
          </div>
        </Link>
        <button type="button" className="mobile-topbar__logout" onClick={logout} aria-label={t.nav.logout}>
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [role, setRole] = useState<string | null>(null);

  const TABS = [
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

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const adminActive = pathname.startsWith("/dashboard/admin");

  return (
    <>
      <LanguageSwitcher className="lang-switcher--mobile" />
      <nav className="mobile-tabbar lg:hidden" aria-label={t.nav.menu}>
        <div className={cn("mobile-tabbar__inner", role === "admin" && "mobile-tabbar__inner--admin")}>
          {TABS.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("mobile-tabbar__item", active && "mobile-tabbar__item--active")}
              >
                <item.icon size={22} strokeWidth={active ? 2.25 : 1.75} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          {role === "admin" ? (
            <Link
              href="/dashboard/admin"
              className={cn("mobile-tabbar__item", adminActive && "mobile-tabbar__item--active")}
            >
              <Building2 size={22} strokeWidth={adminActive ? 2.25 : 1.75} />
              <span>{t.nav.adminShort}</span>
            </Link>
          ) : null}
        </div>
      </nav>
    </>
  );
}
