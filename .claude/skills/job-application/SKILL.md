---
name: job-application
description: Use when Martin has a job description (URL, pasted text, or file) and wants to (a) decide whether to apply, (b) tailor his resume to it, and/or (c) draft a cover letter. Triggers on phrases like "should I apply to", "tailor my resume for", "write a cover letter for", "apply to <company>", "evaluate this JD". Also use when reviewing a JD and the goal is unstated but obvious.
---

# Job application skill

End-to-end workflow for evaluating a role, producing a tailored resume, and drafting a cover letter, calibrated to Martin's profile and to the kinds of companies he targets (small EU JS/TS startups, remote, senior fullstack, ~3 years of professional experience plus a senior promotion).

## What the skill assumes

- Canonical resume lives at `resume/resume.md`. Do not edit it. Tailored copies go in `resume/applications/<slug>.md`.
- Cover letters go in `resume/applications/<slug>-cover.md`.
- The `resume/applications/` directory is gitignored, so per-application files stay local.
- Memory at `~/.claude/projects/C--Users-marti-resume-website/memory/` already holds Martin's profile, applied-to list, and style rules. Read these at the start of the workflow.
- HTML/PDF generation: `node build.mjs applications/<slug>.md` produces the printable HTML. Print to PDF from the browser per `resume/README.md`.

## Workflow

Run these stages in order. Stop and ask the user only at the explicit decision points called out below.

### 1. Load context

Before anything else, read:

- `~/.claude/projects/C--Users-marti-resume-website/memory/user_profile.md` (Martin's profile)
- `~/.claude/projects/C--Users-marti-resume-website/memory/feedback_role_targeting.md` (targeting preferences)
- `~/.claude/projects/C--Users-marti-resume-website/memory/feedback_writing_style.md` (style rules)
- `resume/applications/log.md` (already-applied list, passed-on list)
- `resume/resume.md` (canonical content)

If the JD is a URL, fetch it. If pasted, use as-is. If it's behind auth, ask for the pasted text.

### 2. Extract structured facts from the JD

Pull out, in your own working notes:

- Company name + slug (lowercase, hyphenated, no punctuation)
- Role title (exact phrasing)
- Funding/stage (bootstrapped, seed, Series A+, public) — infer if not stated
- Team size — infer if not stated (look for "team of N", "we're N people")
- Tech stack tokens (exact spellings: "Postgres" vs "PostgreSQL", "Next.js" vs "NextJS")
- Seniority signal (years required, scope of ownership)
- Location/timezone requirement
- Language requirements beyond English
- 3-5 must-have responsibilities
- Any explicit "what stands out" signals (open source, side projects, writing, specific products)
- Application channel (email-to-founder vs Greenhouse/Ashby vs custom form) — affects how to deliver the cover letter

### 3. Score fit and decide

Apply the rubric in `references/fit-rubric.md`. Output a verdict in this exact shape to the user:

```
Fit: GREEN | YELLOW | RED

Stack overlap: <one line>
Seniority match: <one line>
Geography/timezone: <one line>
Language: <one line>
Team/role shape: <one line>
Already applied: yes | no

Recommendation: <apply | apply with caveats | pass>
Reason: <one paragraph>
```

If RED, stop and ask two things in this order: (1) whether to proceed with drafting anyway, and (2) whether to log this company to the **Passed on** table in `resume/applications/log.md`. Only write to the log if Martin confirms.

If GREEN or YELLOW, proceed to step 4 without asking. If the company is already in the **Applied** or **Passed on** table of `resume/applications/log.md`, surface that and stop.

### 4. Tailor the resume

Copy `resume/resume.md` to `resume/applications/<slug>.md`, then:

- **Summary:** rewrite to mirror the JD's role title and 2-3 highest-priority phrases. Keep concrete (3 years, sole frontend at Trovr, solo-built Bopkit) — do not water down to fit a more junior framing unless the role calls for it.
- **Experience bullets:** reorder so the most JD-relevant bullets appear first within each role. Rephrase to mirror the JD's exact vocabulary for tools and verbs Martin actually used. Do not invent.
- **Projects:** if the JD emphasizes a stack or capability that Bopkit demonstrates (multi-tenancy, payments, audio, durable workflows, programmatic SEO), promote that bullet to first.
- **Skills:** match the JD's exact stack token spellings. Add anything from the JD that Martin can defend in an interview (this is the bar — defendable, not aspirational). Remove or de-emphasize anything irrelevant. Do not pad.
- **Education:** untouched unless the JD explicitly values ML/NLP, in which case keep the Lockheed capstone bullet visible.

Do not alter dates, employers, titles, or quantitative claims.

After writing, run a final pass for the style rules in `feedback_writing_style.md` (em dashes, AI cliches). Replace as needed.

### 5. Draft the cover letter

Write to `resume/applications/<slug>-cover.md`. Follow `references/cover-letter-playbook.md` for structure and tone. Adapt to the company type detected in step 2 (bootstrapped vs VC-backed vs scaling startup). Aim for 280-360 words.

The letter must:

- Open with a concrete, quantified outcome from Martin's work that maps to one of their stated needs. Not "I am excited to apply".
- Include one paragraph that proves Martin researched the company specifically (a product, a blog post, a customer, a recent launch, a stack choice). Generic "I love your mission" does not count.
- Use one or two proof points that _add context the resume cannot_ (decisions, trade-offs, why he chose X over Y), rather than restating bullets.
- Close with a direct ask for a conversation. No "I hope to hear from you".
- Pass the style scan: no em dashes, no AI cliches.

### 6. Confirm and (optionally) build

Tell the user where the files were written and offer to:

- Run `node build.mjs applications/<slug>.md` from inside `resume/` to produce the HTML for printing.
- Add a row to the **Applied** table in `resume/applications/log.md` once the application has actually been sent. **Only write to the log after the user confirms the application went out.** Drafted is not the same as sent. When writing the row, include date (today, YYYY-MM-DD), company, role, a short stack-fit note, channel (founder email, Greenhouse, Ashby, careers form, etc.), and status `sent, awaiting response`.

## Slug rules

- Lowercase
- Hyphenated, no spaces
- Strip punctuation
- Drop "Inc", "Ltd", "GmbH", "Limited"
- Examples: "Featurebase" → `featurebase`, "Better Stack" → `better-stack`, "RoomPriceGenie GmbH" → `roompricegenie`

## Failure modes to avoid

- Do not invent skills, tools, or experience Martin does not actually have. If the JD requires something he lacks, surface that in the fit verdict and either pass or write the cover letter to address the gap honestly.
- Do not write a cover letter that paraphrases the resume. The cover letter must add information the resume omits.
- Do not produce em dashes or AI cliches in any output. See `feedback_writing_style.md` for the full list.
- Do not write to `resume/applications/log.md` until the user confirms (sent → Applied table; pass → Passed on table).
- Do not edit `resume/resume.md` itself.

## References

- `references/cover-letter-playbook.md` — structure, length, voice, examples by company type, anti-patterns
- `references/fit-rubric.md` — the GREEN/YELLOW/RED rubric with thresholds
