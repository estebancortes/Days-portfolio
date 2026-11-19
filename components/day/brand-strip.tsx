"use client";

import { moreBrands, partners } from "@/data/featured-brands";

export function BrandStrip() {
  return (
    <section id="brands" className="brands" aria-labelledby="brands-heading">
      <div className="section-head" data-reveal>
        <p className="eyebrow">Selected collaborations</p>
        <h2 id="brands-heading">Brands I’ve worked with</h2>
      </div>
      <div className="marquee">
        {[0, 1].map(copy => (
          <ul key={copy} className="marquee-row" aria-hidden={copy === 1 || undefined}>
            {partners.map(([name, file, scale]) => (
              <li key={name} className="logo-tile">
                <span
                  role={copy ? undefined : "img"}
                  aria-label={copy ? undefined : name}
                  className="logo"
                  style={{ "--logo": `url("/assets/brands/${file}")`, "--logo-scale": scale } as React.CSSProperties}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="marquee marquee--names">
        {[0, 1].map(copy => (
          <ul key={copy} className="marquee-row" aria-label={copy ? undefined : "More brands I’ve created videos for"} aria-hidden={copy === 1 || undefined}>
            {moreBrands.map(([name, file, ratio]) => (
              <li key={name} className="logo-tile">
                {file ? (
                  <span
                    role={copy ? undefined : "img"}
                    aria-label={copy ? undefined : name}
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
      <p className="brands-note">Logos belong to their owners and identify past collaborations.</p>
    </section>
  );
}
