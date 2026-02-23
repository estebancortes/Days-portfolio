import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import {
  analyticsCards,
  audienceAgeBars,
  audienceCountries,
  audienceGenderBars,
  contentMix,
  performanceStats
} from "@/data/stats";
import { blurDataURL } from "@/lib/blur";
import type { Locale } from "@/lib/i18n";

type AnalyticsSectionProps = {
  locale: Locale;
};

function AudienceBar({ label, percentage, valueLabel }: { label: string; percentage: number; valueLabel: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm text-muted-foreground">
        <span>{label}</span>
        <span className="font-semibold text-foreground">{valueLabel}</span>
      </div>
      <div className="h-2.5 rounded-full bg-muted">
        <div className="h-2.5 rounded-full bg-primary/80" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export function AnalyticsSection({ locale }: AnalyticsSectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Stats & Audiencia",
          title: "Analítica real de alcance, afinidad y potencial de conversión.",
          description:
            "Performance en ventana corta (7 días) + señales demográficas para decisiones de marca.",
          metricsTitle: "KPIs clave",
          audienceTitle: "Perfil de audiencia",
          countries: "Top países",
          gender: "Distribución por género",
          ages: "Distribución por edad",
          mixTitle: "Mix de contenido"
        }
      : {
          badge: "Stats & Audience",
          title: "Real analytics of reach, audience fit, and conversion potential.",
          description:
            "Short-window performance (7 days) plus demographic signals for brand decisions.",
          metricsTitle: "Key KPIs",
          audienceTitle: "Audience profile",
          countries: "Top countries",
          gender: "Gender split",
          ages: "Age split",
          mixTitle: "Content mix"
        };

  return (
    <section id="audiencia" className="section-divider py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Card className="h-full border-border/75 bg-card/88 p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold">{copy.metricsTitle}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {performanceStats.map((item) => (
                  <div key={item.label.es} className="rounded-xl border border-border/70 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">
                      {item.label[locale]}
                    </p>
                    <p className="mt-1 font-display text-2xl font-semibold text-foreground">{item.value}</p>
                    {item.helper ? (
                      <p className="mt-1 text-xs text-muted-foreground">{item.helper[locale]}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.06}>
            <Card className="h-full border-border/75 bg-card/88 p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold">{copy.audienceTitle}</h3>

              <div className="mt-5 space-y-6">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    {copy.countries}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {audienceCountries[locale].map((country) => (
                      <span
                        key={country}
                        className="rounded-full border border-border bg-background/80 px-3 py-1 text-sm text-foreground"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    {copy.gender}
                  </p>
                  <div className="space-y-3">
                    {audienceGenderBars.map((item) => (
                      <AudienceBar
                        key={item.label.es}
                        label={item.label[locale]}
                        percentage={item.percentage}
                        valueLabel={item.valueLabel}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    {copy.ages}
                  </p>
                  <div className="space-y-3">
                    {audienceAgeBars.map((item) => (
                      <AudienceBar
                        key={item.label.es}
                        label={item.label[locale]}
                        percentage={item.percentage}
                        valueLabel={item.valueLabel}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    {copy.mixTitle}
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {contentMix[locale].map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {analyticsCards[locale].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card className="overflow-hidden border-border/75 bg-card/88 p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                  <span className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                    {item.metric}
                  </span>
                </div>
                <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-xl border border-border/70 bg-muted/35 p-2 shadow-sm">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
