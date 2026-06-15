# AGENTS.md — Yuphi Portfolio Site

## Project

Single-page portfolio/pricing site for a freelance video editor. Astro + Tailwind CSS v4 + TypeScript, package-managed with pnpm.

## Commands

- `pnpm install` — install dependencies
- `pnpm run dev` — start dev server
- `pnpm run build` — static production build
- `pnpm run preview` — preview production build
- `pnpm run astro check` — typecheck + diagnostics

## Structure & Conventions

- **Naming Style:** ALL files and directories must use `kebab-case` strictly (e.g., `order-flow.astro`, `pricing-tier.astro`). _Agent Note: When importing these kebab-case Astro components in the frontmatter, you must still alias or import them as PascalCase variables (e.g., `import OrderFlow from './order-flow.astro';`)._
- `src/pages/index.astro` — sole landing page with smooth-scroll sections
- `src/components/` — reusable UI components (`button.astro`, `badge.astro`, `card.astro`, etc.)
- `src/partials/` — page section / layout partials composed of smaller components (`navbar.astro`, `hero.astro`, `about.astro`, `order-flow.astro`, `pricing-tier.astro`, `contact-section.astro`, `footer.astro`, `parallax-background.astro`)
- `src/layouts/layout.astro` — base HTML shell, SEO metadata, global Tailwind v4 import
- `src/data/` — pricing tiers and portfolio links; keep content separate from UI (e.g., `content.ts`)
- `public/assets/` — static images, profile picture, portfolio thumbnails (manually exported from source PDF)

## Toolchain gotchas

- Tailwind v4 is Vite-first. Wire it via `@tailwindcss/vite` in `astro.config.mjs`, not the Astro Tailwind v3 integration pattern.
- Navbar uses anchor links (`#about`, `#how-to-order`, etc.); apply `scroll-behavior: smooth` to `html`.
- Copy is bilingual (Indonesian/English) with K-vibe/Japanese aesthetic. Standardize fonts (Inter or Plus Jakarta Sans) for readability.

## Content source

Full website copy, order flow, and pricing details should live in `src/data/` and be imported by partials or reusable components. Do not hardcode long copy blocks directly in `.astro` files.
