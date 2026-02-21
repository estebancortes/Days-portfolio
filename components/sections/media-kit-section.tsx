import { FileDown } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";

type MediaKitSectionProps = {
  locale: Locale;
};

export function MediaKitSection({ locale }: MediaKitSectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Media Kit",
          title: "Información clave para marcas y equipos creativos",
          description:
            "Perfil, audiencia, resultados y forma de trabajo para colaboraciones de alto rendimiento.",
          nicheTitle: "Nicho",
          nicheText: "Cabello, maquillaje, skincare, lifestyle femenino.",
          audienceTitle: "Audiencia",
          audienceText:
            "Mujeres 18–40 interesadas en belleza real, coloración en casa, soluciones accesibles.",
          resultsTitle: "Resultados",
          results: [
            "800k vistas (7 días)",
            "400k video top",
            "35k likes",
            "Crecimiento orgánico en 30 días"
          ],
          styleTitle: "Estilo de contenido",
          style: [
            "Hook en 2 segundos",
            "Ritmo dinámico",
            "Luz natural",
            "Subtítulos",
            "Resultado visible"
          ],
          formatsTitle: "Formatos",
          formats: [
            "UGC orgánico",
            "UGC para ads",
            "Before/After",
            "Comparativas",
            "Actualizaciones",
            "Paquetes mensuales"
          ],
          processTitle: "Proceso de trabajo",
          process: [
            "Brief",
            "Confirmación de claims",
            "Grabación (3–5 días)",
            "Entrega Drive",
            "1–2 revisiones"
          ],
          specsTitle: "Especificaciones técnicas",
          specs: "9:16 · 1080p/4K · 15–45 segundos · Subtítulos incluidos",
          rightsTitle: "Derechos de uso",
          rights: "Orgánico incluido. Ads se cotiza según duración.",
          download: "Descargar Media Kit (PDF)"
        }
      : {
          badge: "Media Kit",
          title: "Key information for brands and creative teams",
          description:
            "Profile, audience, results, and workflow for high-performance collaborations.",
          nicheTitle: "Niche",
          nicheText: "Hair, makeup, skincare, women's lifestyle.",
          audienceTitle: "Audience",
          audienceText:
            "Women 18–40 interested in real beauty, at-home color solutions, and accessible products.",
          resultsTitle: "Results",
          results: [
            "800k views (7 days)",
            "400k top video",
            "35k likes",
            "Organic growth in 30 days"
          ],
          styleTitle: "Content style",
          style: [
            "Hook in 2 seconds",
            "Dynamic pacing",
            "Natural light",
            "Subtitles",
            "Visible result"
          ],
          formatsTitle: "Formats",
          formats: [
            "Organic UGC",
            "UGC for ads",
            "Before/After",
            "Comparisons",
            "Updates",
            "Monthly packages"
          ],
          processTitle: "Workflow",
          process: [
            "Brief",
            "Claim confirmation",
            "Filming (3–5 days)",
            "Drive delivery",
            "1–2 revisions"
          ],
          specsTitle: "Technical specs",
          specs: "9:16 · 1080p/4K · 15–45 seconds · Subtitles included",
          rightsTitle: "Usage rights",
          rights: "Organic usage included. Ads usage is priced by duration.",
          download: "Download Media Kit (PDF)"
        };

  return (
    <section id="media-kit" className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-7 md:p-8">
              <div className="space-y-5 text-sm text-muted-foreground md:text-base">
                <div>
                  <h3 className="font-semibold text-foreground">{copy.nicheTitle}</h3>
                  <p>{copy.nicheText}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{copy.audienceTitle}</h3>
                  <p>{copy.audienceText}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{copy.resultsTitle}</h3>
                  <ul className="mt-2 space-y-1">
                    {copy.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{copy.styleTitle}</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {copy.style.map((item) => (
                      <li key={item} className="rounded-full bg-accent px-3 py-1 text-xs text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full p-7 md:p-8">
              <div className="space-y-5 text-sm text-muted-foreground md:text-base">
                <div>
                  <h3 className="font-semibold text-foreground">{copy.formatsTitle}</h3>
                  <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
                    {copy.formats.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{copy.processTitle}</h3>
                  <ol className="mt-2 space-y-1">
                    {copy.process.map((item, index) => (
                      <li key={item}>
                        {index + 1}. {item}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{copy.specsTitle}</h3>
                  <p className="mt-2">{copy.specs}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{copy.rightsTitle}</h3>
                  <p className="mt-2">{copy.rights}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-8">
          <Button asChild size="lg">
            <a href="/assets/media-kit/media-kit.pdf" download>
              {copy.download}
              <FileDown className="h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
