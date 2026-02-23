import type { Locale } from "@/lib/i18n";

export const navigationItems: Record<
  Locale,
  ReadonlyArray<{ label: string; href: string }>
> = {
  es: [
    { label: "Inicio", href: "#inicio" },
    { label: "Cómo empezó", href: "#historia" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Prueba", href: "#prueba" },
    { label: "Stats & Audiencia", href: "#audiencia" },
    { label: "Contacto", href: "#contacto" }
  ],
  en: [
    { label: "Home", href: "#inicio" },
    { label: "Story", href: "#historia" },
    { label: "About", href: "#sobre-mi" },
    { label: "Portfolio", href: "#portafolio" },
    { label: "Proof", href: "#prueba" },
    { label: "Stats & Audience", href: "#audiencia" },
    { label: "Contact", href: "#contacto" }
  ]
};
