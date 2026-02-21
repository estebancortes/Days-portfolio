import type { Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy =
    locale === "es"
      ? {
          rights: "Todos los derechos reservados.",
          line: "Contenido nativo, estratégico y optimizado para conversión."
        }
      : {
          rights: "All rights reserved.",
          line: "Native, strategic content optimized for conversion."
        };

  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} UGC Beauty Creator. {copy.rights}
        </p>
        <p>{copy.line}</p>
      </div>
    </footer>
  );
}
