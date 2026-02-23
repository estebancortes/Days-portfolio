import type { Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy =
    locale === "es"
      ? {
          rights: "Todos los derechos reservados.",
          line: "Editorial UGC para marcas de belleza: credibilidad, retención y conversión."
        }
      : {
          rights: "All rights reserved.",
          line: "Editorial UGC for beauty brands: credibility, retention, and conversion."
        };

  return (
    <footer className="section-divider py-8">
      <div className="container flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Daypaez UGC. {copy.rights}
        </p>
        <p>{copy.line}</p>
      </div>
    </footer>
  );
}
