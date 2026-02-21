import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { rateItems } from "@/data/rates";
import type { Locale } from "@/lib/i18n";

type RateCardSectionProps = {
  locale: Locale;
};

export function RateCardSection({ locale }: RateCardSectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Rate Card",
          title: "Tarifas base para colaboraciones UGC",
          description: "Estructura premium flexible para campañas orgánicas y de performance.",
          footnote:
            "Uso extendido se cotiza aparte. Entrega 3–5 días. 1–2 revisiones incluidas."
        }
      : {
          badge: "Rate Card",
          title: "Base pricing for UGC collaborations",
          description: "Flexible premium structure for organic and performance campaigns.",
          footnote: "Extended usage is quoted separately. Delivery 3–5 days. 1–2 revisions included."
        };

  return (
    <section id="tarifas" className="bg-soft-radial py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
              {rateItems.map((item) => (
                <div key={item.service.es} className="flex items-center justify-between p-6 md:p-7">
                  <p className="text-sm font-medium text-foreground md:text-base">
                    {item.service[locale]}
                  </p>
                  <p className="font-display text-2xl font-semibold text-primary">{item.price}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.12} className="mt-5">
          <p className="text-sm text-muted-foreground">{copy.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
