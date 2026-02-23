# Daypaez UGC Portfolio (Next.js 14)

Portafolio one-page de estilo editorial luxury para creadora UGC de belleza.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- next/image
- lucide-react
- next-themes
- React PDF (`@react-pdf/renderer`)

## Requisitos

- Node.js 18+
- pnpm

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build y lint

```bash
pnpm lint
pnpm build
```

## Generar Media Kit PDF

```bash
pnpm generate:media-kit
```

Este comando genera:

- `/public/media-kit.pdf` (ruta principal para CTA)
- `/public/assets/media-kit/media-kit.pdf` (compatibilidad)

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Crear un proyecto en Vercel y conectar el repo.
3. Framework: `Next.js`.
4. Install command: `pnpm install`.
5. Build command: `pnpm build`.
6. Output directory: `.next`.

## Arquitectura de secciones

- Hero
- Story (Cómo empezó)
- About
- Portfolio
- Proof of Conversion
- Stats & Audience
- Contact
- Footer

## Estructura de imágenes esperada

```text
/public/assets
  /headshot
    headshot-main.png
  /analytics
    analytics-7days.jpg
    analytics-followers.jpg
    analytics-total-likes.jpg
    analytics-profile.jpg
  /proof
    proof.jpg
    proof2.jpg
    proof3.jpg
    proof4.jpg
  /hero
    hero-01.jpg
    hero-02.jpg
    hero-03.jpg
    hero-04.jpg
  /portfolio
    portfolio-transformacion-01.jpg
    portfolio-transformacion-02.jpg
    portfolio-review-01.jpg
    portfolio-update-01.jpg
    portfolio-makeup-01.jpg
    portfolio-skincare-01.jpg
    portfolio-educativo-01.jpg
    portfolio-lifestyle-01.jpg
  cover-main.jpg

/public/media-kit.pdf
```

## Dónde reemplazar screenshots

- Capturas de prueba de conversión: `/public/assets/proof/proof.jpg`, `proof2.jpg`, `proof3.jpg`, `proof4.jpg`
- Analíticas: `/public/assets/analytics/*`
- Hero rotatorio: `/public/assets/hero/*`
- Headshot: `/public/assets/headshot/headshot-main.png`

## Datos editables

- Navegación: `/data/navigation.ts`
- Stats, audiencia, proof y analytics cards: `/data/stats.ts`
- Portfolio (cards + modal + links): `/data/portfolio.ts`
- Configuración general (email/url): `/lib/site.ts`
- PDF Media Kit: `/media-kit/MediaKitDocument.tsx`
- Script de generación PDF: `/scripts/generate-media-kit.ts`
