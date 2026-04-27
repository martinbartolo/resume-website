# Fit rubric

Use to score a JD GREEN / YELLOW / RED. The verdict is a holistic call across five dimensions, not a strict point total. Default heuristic: any single RED dimension drops the overall to RED unless another dimension is exceptionally strong.

## Dimensions

### 1. Stack overlap

Martin's defensible stack: Next.js, React, React Native, TypeScript, Node.js, tRPC, Tailwind, Prisma, PostgreSQL, Supabase, Vercel, Inngest, Stripe, PayPal, Jest, REST/OpenAPI. Has touched but lighter: MongoDB, GraphQL, GitLab CI, Docker. Academic/light: Python, PyTorch, spaCy, Hugging Face, TensorFlow.

- **GREEN:** Core stack is Next.js or React + TypeScript + a SQL DB. Bonus for tRPC, Tailwind, Prisma, Vercel.
- **YELLOW:** Heavy Node backend with a different frontend framework, or a different fullstack JS/TS stack (Remix, Nuxt, SvelteKit). Or React with a non-TypeScript backend Martin can ramp into (Go, modern Java).
- **RED:** Rails, Django, .NET, Laravel, Vue, or anything where Martin would be ramping the entire stack. ML infra, data engineering, devops-heavy roles.

### 2. Seniority match

Martin: ~3 years professional + Senior Frontend Engineer title at Trovr. Solo end-to-end ownership of two RN apps and an admin dashboard. Solo-built Bopkit. CU Boulder MS.

- **GREEN:** "3-5 years", "senior", "mid-to-senior", scope is product feature ownership.
- **YELLOW:** "5+ years preferred". Staff/lead titles where the JD describes "lead by doing" rather than people management.
- **RED:** "7-10 years required", "Principal", VP/Head of, or roles that require running a team of N reports.

### 3. Geography / timezone

Martin: based in Malta, CET. Wants remote.

- **GREEN:** Remote EU, remote Europe, remote within CET ± 2-3 hours.
- **YELLOW:** Remote with overlap requirement Martin can meet (e.g. 4-hour overlap with US East). Hybrid in an EU country he is willing to relocate to (confirm with user).
- **RED:** US-only, on-site outside Malta, timezone overlap that cannot be sustained from CET (e.g. core hours US Pacific).

### 4. Language requirements

Martin: native-level English. No business proficiency in other languages.

- **GREEN:** English-only.
- **RED:** Any required fluency in another language (French, German, Dutch, Spanish, etc.). Not negotiable.

### 5. Team / role shape

Martin's preferences: small team, high autonomy, async, end-to-end ownership, product over infra.

- **GREEN:** Small startup (2-30 people), product engineering, end-to-end shipping, async culture explicitly stated.
- **YELLOW:** Larger company (30-150) with a product team that owns features end-to-end. Heavy meetings/process implied.
- **RED:** Pure backend infra, pure DevOps/SRE, ML infra, data platform. Or large enterprise with narrow scope. Or "we expect you in chat 9-6 your time" rigid sync culture.

## Verdict logic

- **GREEN overall:** at least 4 dimensions GREEN, none RED. Apply with confidence.
- **YELLOW overall:** mostly GREEN/YELLOW, no RED, or one RED that the user wants to override. Apply, but address the gap directly in the cover letter.
- **RED overall:** any dimension RED in language; or two or more dimensions RED elsewhere; or already-applied. Default is to pass.

## Already-applied / already-evaluated check

Before scoring, read `resume/applications/log.md`. If the company is already in the **Applied** table, do not draft new materials. If it is in the **Passed on** table, surface the prior reason and ask whether the situation has changed.

## Calibrating to recent decisions

Read the **Applied** and **Passed on** tables in `resume/applications/log.md` for current anchor points. As of the most recent migration (April 2026):

- **Featurebase, Event AI startup:** GREEN. Applied.
- **Better Stack:** YELLOW (Rails/Vue stack mismatch but strong culture/team fit). Applied with the gap addressed in the cover letter.
- **Fluxx:** RED on seniority (10+ years required).
- **lemlist:** RED on language (French fluency required).
- **Nooxit:** RED on stack/role shape (ML infra, DevOps heavy).

Use these as anchor points when scoring borderline cases. The log file in `resume/applications/log.md` is the live source.
