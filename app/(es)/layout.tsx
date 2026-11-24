import type { Metadata } from "next";
import "../globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/lib/site";

import { fontBody, fontDisplay } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";

// Spanish version of the site, served at /es. Its own root layout so the page is <html lang="es">.
const title = "DAYPAEZ | Creadora de contenido para marcas de belleza y negocios locales";
const description = "Dayana (DAYPAEZ) es creadora de contenido UGC latina en Salt Lake City: videos de belleza, cabello cobrizo y negocios locales para TikTok e Instagram, en español e inglés.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], shortcut: ["/icon.svg"] },
  title,
  description,
  alternates: { canonical: "/es", languages: { en: "/", es: "/es" } },
  keywords: ["creadora UGC", "creadora de contenido latina", "UGC en español", "creadora de contenido Salt Lake City", "cabello cobrizo", "Daypaez"],
  openGraph: {
    title, description, url: `${siteConfig.url}/es`, siteName: siteConfig.name, locale: "es_US", type: "website",
    images: [{ url: "/assets/cover-main.jpg", width: 1200, height: 630, alt: "Daypaez, creadora de contenido de belleza y negocios locales" }]
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/cover-main.jpg"] }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${fontDisplay.variable} ${fontBody.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
