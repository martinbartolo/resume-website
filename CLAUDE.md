# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website built with Next.js 16, React 19, and TypeScript. Deployed on Vercel.

## Commands

- **Dev server:** `pnpm dev` (uses Turbopack)
- **Build:** `pnpm build`
- **Lint + typecheck:** `pnpm check`
- **Lint only:** `pnpm lint` (fix: `pnpm lint:fix`)
- **Typecheck only:** `pnpm typecheck`
- **Format:** `pnpm format:write` (check: `pnpm format:check`)
- **Preview prod build:** `pnpm preview`

## Architecture

**App Router** with two routes:
- `/` — Home page with tabbed Experience/Projects sections
- `/projects/bopkit` — Long-form case study page (~2,800 lines)

**Content** is managed via JSON files in `src/content/` (work-experience, side-projects, links). The Bopkit case study content is inline JSX.

**Key path alias:** `~/*` maps to `src/*` (e.g., `~/components/tabs`).

## Styling

Tailwind CSS v4 with CSS variables for light/dark theming via `next-themes`. Component variants use `class-variance-authority`. The `cn()` utility in `src/lib/utils.ts` merges Tailwind classes.

shadcn/ui is configured (new-york style, zinc base color, lucide icons). Add components via `npx shadcn@latest add <component>`.

## Key Conventions

- ESLint with jsx-a11y, unused-imports detection, and Prettier integration
- Strict TypeScript (`strict: true`, `noUncheckedIndexedAccess: true`)
- Package manager is **pnpm**
