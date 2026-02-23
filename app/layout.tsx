import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/lib/site";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"]
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "UGC belleza",
    "UGC creator latina",
    "TikTok UGC",
    "before after beauty",
    "hair transformation",
    "Daypaez"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/assets/cover-main.jpg",
        width: 1200,
        height: 630,
        alt: "Portafolio UGC editorial de Daypaez"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/cover-main.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
