import type { Locale } from "@/lib/i18n";

export const navigationItems: Record<
  Locale,
  ReadonlyArray<{ label: string; href: string }>
> = {
  es: [
    { label: "Inicio", href: "#inicio" },
    { label: "Historia", href: "#historia" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Media Kit", href: "#media-kit" },
    { label: "Tarifas", href: "#tarifas" },
    { label: "Contacto", href: "#contacto" }
  ],
  en: [
    { label: "Home", href: "#inicio" },
    { label: "Story", href: "#historia" },
    { label: "About", href: "#sobre-mi" },
    { label: "Portfolio", href: "#portafolio" },
    { label: "Media Kit", href: "#media-kit" },
    { label: "Rates", href: "#tarifas" },
    { label: "Contact", href: "#contacto" }
  ]
};
