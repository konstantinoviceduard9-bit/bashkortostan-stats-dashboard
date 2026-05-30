"use client";

import { useI18n } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/messages";
import { cn } from "@/lib/utils";

const LOCALES: Locale[] = ["ru", "en", "ba"];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className={cn("lang-switcher", className)} role="group" aria-label={t.lang.label}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={cn("lang-switcher__btn", locale === code && "lang-switcher__btn--active")}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {t.lang[code]}
        </button>
      ))}
    </div>
  );
}
