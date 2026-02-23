"use client";

import { Menu, X } from "lucide-react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/data/navigation";
import { localeLabel, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavbarProps = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
};

export function Navbar({ locale, setLocale }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const ui = useMemo(
    () => ({
      download: locale === "es" ? "Descargar Media Kit (PDF)" : "Download Media Kit (PDF)",
      openNav: locale === "es" ? "Abrir navegación" : "Open navigation"
    }),
    [locale]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/82 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#inicio" className="font-display text-xl font-semibold tracking-tight">
          Daypaez
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems[locale].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="inline-flex rounded-xl border border-border bg-card/80 p-1">
            {(["es", "en"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={cn(
                  "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                  locale === lang
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {localeLabel[lang]}
              </button>
            ))}
          </div>
          <ThemeToggle />
          <Button asChild>
            <a href="/media-kit.pdf" target="_blank" rel="noreferrer noopener">
              {ui.download}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="secondary"
            size="sm"
            aria-label={ui.openNav}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-3 py-4">
            <div className="inline-flex w-fit rounded-xl border border-border bg-card p-1">
              {(["es", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
                    locale === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {localeLabel[lang]}
                </button>
              ))}
            </div>

            {navigationItems[locale].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button asChild className="mt-1">
              <a href="/media-kit.pdf" target="_blank" rel="noreferrer noopener">
                {ui.download}
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
