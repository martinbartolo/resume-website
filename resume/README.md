# Resume

Canonical resume source lives in `resume.md`. Tailored per-application copies live in `applications/`.

## Build

```sh
pnpm install           # first time only
pnpm build             # resume.md -> resume.html
pnpm build:app applications/featurebase.md
```

Open the generated `.html` in a browser and print to PDF (Ctrl/Cmd+P → "Save as PDF"). Use "More settings → Margins: default" and enable "Background graphics: off" for a clean ATS-friendly output.

## Tailoring workflow

1. Copy `resume.md` to `applications/<company>.md`.
2. Rewrite the Summary to mirror the JD's language.
3. Reorder bullets within each role so the most JD-relevant ones appear first.
4. Mirror the JD's exact stack tokens in the Skills section (don't invent — only include what you can defend in an interview).
5. Rebuild and print to PDF.

## Why this setup

- Markdown is git-diff-friendly, so per-job changes are obvious.
- No LaTeX or Pandoc install required — just Node.
- Printing from the browser produces a real text-layer PDF that ATS systems parse cleanly.
