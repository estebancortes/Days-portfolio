"use client";

import { useState } from "react";

import { AboutSection } from "@/components/sections/about-section";
import { AnalyticsSection } from "@/components/sections/analytics-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MediaKitSection } from "@/components/sections/media-kit-section";
import { Navbar } from "@/components/sections/navbar";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { RateCardSection } from "@/components/sections/rate-card-section";
import { StorySection } from "@/components/sections/story-section";
import { defaultLocale, type Locale } from "@/lib/i18n";

export function HomePageClient() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar locale={locale} setLocale={setLocale} />
      <main>
        <HeroSection locale={locale} />
        <StorySection locale={locale} />
        <AnalyticsSection locale={locale} />
        <AboutSection locale={locale} />
        <PortfolioSection locale={locale} />
        <MediaKitSection locale={locale} />
        <RateCardSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
