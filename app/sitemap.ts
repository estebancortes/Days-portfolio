import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: siteConfig.url, es: `${siteConfig.url}/es` } }
    },
    {
      url: `${siteConfig.url}/es`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: siteConfig.url, es: `${siteConfig.url}/es` } }
    }
  ];
}
