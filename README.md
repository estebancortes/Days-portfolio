# UGC Beauty Portfolio (Next.js 14)

Portafolio premium en español para creadora UGC de belleza, construido con:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- next/image
- lucide-react
- next-themes

## Requisitos

- Node.js 18+
- pnpm

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
pnpm build
pnpm start
```

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Crear un nuevo proyecto en Vercel y conectar el repositorio.
3. Framework: Next.js (autodetectado).
4. Build command: `pnpm build`.
5. Output: `.next` (por defecto).
6. Deploy.

## Estructura de imágenes

Ubicaciones esperadas dentro de `public/assets`:

```text
/assets
  /headshot
    headshot-main.jpg
  /analytics
    analytics-video-top.jpg
    analytics-7days.jpg
    analytics-likes.jpg
    analytics-followers.jpg
  /portfolio
    portfolio-transformacion-01.jpg
    portfolio-transformacion-02.jpg
    portfolio-review-01.jpg
    portfolio-update-01.jpg
    portfolio-makeup-01.jpg
    portfolio-skincare-01.jpg
    portfolio-educativo-01.jpg
    portfolio-lifestyle-01.jpg
  /hero
    hero-01.jpg
    hero-02.jpg
    hero-03.jpg
    hero-04.jpg
  /media-kit
    media-kit.pdf
  cover-main.jpg
```

## Dónde reemplazar screenshots y contenido

- Hero rotatorio: `/public/assets/hero/*`
- Fondo principal: `/public/assets/cover-main.jpg`
- Headshot: `/public/assets/headshot/headshot-main.jpg`
- Analíticas: `/public/assets/analytics/*`
- Portafolio: `/public/assets/portfolio/*`
- PDF media kit: `/public/assets/media-kit/media-kit.pdf`

## Datos editables

- Navegación: `/data/navigation.ts`
- Métricas hero: `/data/stats.ts`
- Portafolio (cards + modal): `/data/portfolio.ts`
- Tarifas: `/data/rates.ts`
- Configuración general (email/url): `/lib/site.ts`
