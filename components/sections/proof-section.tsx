import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { proofCards } from "@/data/stats";
import { blurDataURL } from "@/lib/blur";
import type { Locale } from "@/lib/i18n";

type ProofSectionProps = {
  locale: Locale;
};

export function ProofSection({ locale }: ProofSectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Prueba de conversión",
          title: "Comentarios que muestran intención de compra real.",
          description:
            "No solo hay alcance: hay preguntas de producto, decisiones de compra y solicitudes de tutorial detallado."
        }
      : {
          badge: "Conversion proof",
          title: "Comments that show real purchase intent.",
          description:
            "It is not only reach: it is product questions, buying intent, and requests for detailed tutorials."
        };

  return (
    <section id="prueba" className="section-divider py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {proofCards.map((item, index) => (
            <Reveal key={item.image} delay={index * 0.06}>
              <Card className="overflow-hidden border-border/75 bg-card/90 p-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border/60 bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt[locale]}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-foreground md:text-base">
                  {item.caption[locale]}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
