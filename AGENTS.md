# AGENTS.md — Yuphi Portfolio Site

## Project

Single-page portfolio/pricing site for a freelance video editor. Astro + Tailwind CSS v4 + TypeScript, package-managed with Bun.

## Commands

- `bun install` — install dependencies
- `bun run dev` — start dev server
- `bun run build` — static production build
- `bun run preview` — preview production build
- `bun run astro check` — typecheck + diagnostics

## Structure

- `src/pages/index.astro` — sole landing page with smooth-scroll sections
- `src/components/` — section components (Navbar, Hero, About, OrderFlow, PricingTier, PortfolioGallery, Footer)
- `src/layouts/Layout.astro` — base HTML shell, SEO metadata, global Tailwind v4 import
- `src/data/` — pricing tiers and portfolio links; keep content separate from UI
- `public/assets/` — static images, profile picture, portfolio thumbnails (manually exported from source PDF)

## Toolchain gotchas

- Tailwind v4 is Vite-first. Wire it via `@tailwindcss/vite` in `astro.config.mjs`, not the Astro Tailwind v3 integration pattern.
- Navbar uses anchor links (`#about`, `#how-to-order`, etc.); apply `scroll-behavior: smooth` to `html`.
- Copy is bilingual (Indonesian/English) with K-vibe/Japanese aesthetic. Standardize fonts (Inter or Plus Jakarta Sans) for readability.

## Content source

Full website copy, order flow, and pricing details should live in `src/data/` (e.g. `content.ts` / `data.json`) and be imported by components. Do not hardcode long copy blocks directly in `.astro` files.
