# TailorPro — Landing Page

Premium, animated landing page for the TailorPro mobile app, built with
Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Stack

- **Next.js 14 (App Router)** + TypeScript
- **Tailwind CSS** — theme tokens (colors, fonts) in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, page/menu transitions, FAQ accordion
- **GSAP** — 3D pointer-tilt on the hero phone mockup
- **lucide-react** — icons

## What to customize before launch

1. **Play Store link** — set `playStoreUrl` in `lib/site.ts` to your real
   listing URL (currently a placeholder `#`).
2. **Site URL, email, phone, address, socials** — all in `lib/site.ts`,
   used across the page and for SEO metadata / JSON-LD.
3. **Logo / icon** — replace `public/logo-wide.png` and `public/app-icon.png`
   with your final exported assets if you update the brand mark.
4. **Contact form** — `components/ContactForm.tsx` currently only
   *simulates* a submit on the client (see the comment at the top of the
   file). Wire the `onSubmit` handler to a real endpoint — e.g. a Next.js
   API route that calls Resend/SendGrid, or a hosted form service like
   Formspree — before going live.
5. **Copy** — all page copy lives in `lib/content.ts` (features, workflow
   steps, testimonials, FAQs) so it's easy to edit without touching
   components.
6. **Legal pages** — `app/privacy-policy/page.tsx` and `app/terms/page.tsx`
   contain a reasonable starting draft. Have them reviewed before
   publishing, especially the data-handling claims in the Privacy Policy.

## Pages

- `/` — the main landing page (hero, features, workflow, why us,
  testimonials, FAQ, download CTA)
- `/contact` — contact page with info + a form
- `/privacy-policy` — privacy policy
- `/terms` — terms of service
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` — generated
  automatically for SEO / PWA metadata

## Notes on performance & accessibility

- Fonts load via `next/font/google` (self-hosted at build time, no
  render-blocking font requests).
- `prefers-reduced-motion` is respected globally in `app/globals.css`.
- Focus states are visible on all interactive elements.
- Images use `next/image` for automatic optimization.
