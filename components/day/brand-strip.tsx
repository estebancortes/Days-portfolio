"use client";

import { moreBrands, partners } from "@/data/featured-brands";
import { copy, type Lang } from "@/data/copy";

export function BrandStrip({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang].brands;
  return (
    <section id="brands" className="brands" aria-labelledby="brands-heading">
      <div className="section-head" data-reveal>
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 id="brands-heading">{t.title}</h2>
      </div>
      <div className="marquee">
        {[0, 1].map(dup => (
          <ul key={dup} className="marquee-row" aria-hidden={dup === 1 || undefined}>
            {partners.map(([name, file, scale]) => (
              <li key={name} className="logo-tile">
                <span
                  role={dup ? undefined : "img"}
                  aria-label={dup ? undefined : name}
                  className="logo"
                  style={{ "--logo": `url("/assets/brands/${file}")`, "--logo-scale": scale } as React.CSSProperties}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="marquee marquee--names">
        {[0, 1].map(dup => (
          <ul key={dup} className="marquee-row" aria-label={dup ? undefined : t.more} aria-hidden={dup === 1 || undefined}>
            {moreBrands.map(([name, file, ratio]) => (
              <li key={name} className="logo-tile">
                {file ? (
                  <span
                    role={dup ? undefined : "img"}
                    aria-label={dup ? undefined : name}
                    className="logo-mark"
                    // Wide wordmarks get shorter, compact ones taller, so every logo carries similar visual weight.
                    style={{ "--logo": `url("/assets/brands/${file}")`, "--ratio": ratio, "--h": Math.sqrt(4 / ratio).toFixed(3) } as React.CSSProperties}
                  />
                ) : <span className="logo-text">{name}</span>}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="brands-note">{t.note}</p>
    </section>
  );
}
