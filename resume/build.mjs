#!/usr/bin/env node
// Build a printable HTML from a resume Markdown file.
// Usage:
//   node build.mjs                       # builds resume.md -> resume.html
//   node build.mjs applications/foo.md   # builds applications/foo.md -> applications/foo.html

import { marked } from "marked";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = resolve(__dirname, process.argv[2] ?? "resume.md");
const output = input.replace(/\.md$/, ".html");

const md = await readFile(input, "utf8");

marked.use({ gfm: true, breaks: false });
const body = marked.parse(md);

const css = `
  @page { size: A4; margin: 10mm 13mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.3;
    color: #111;
    max-width: 780px;
    margin: 0 auto;
    padding: 24px;
  }
  @media print { body { padding: 0; max-width: none; } }

  h1 {
    font-size: 21pt;
    margin: 0 0 3px 0;
    text-align: center;
    letter-spacing: -0.01em;
  }
  /* Contact row: paragraph right after h1 */
  h1 + p {
    text-align: center;
    margin: 0 0 8px 0;
    font-size: 9pt;
    color: #333;
  }
  h1 + p a { color: #333; }

  h2 {
    font-size: 11pt;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid #111;
    padding-bottom: 2px;
    margin: 8px 0 3px 0;
  }

  h3 {
    font-size: 10.5pt;
    margin: 5px 0 2px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
  }
  h3 .date { font-weight: 600; font-size: 9.5pt; white-space: nowrap; }

  /* Italic subtitle line (org tagline) directly under an h3 */
  h3 + p {
    margin: 0 0 2px 0;
    font-size: 9.5pt;
    color: #333;
  }
  /* Role rows (bold role + italic date) that follow the tagline */
  h3 + p + p { margin-top: 2px; }

  p { margin: 2px 0; }

  ul {
    margin: 2px 0 4px 0;
    padding-left: 18px;
  }
  li { margin: 0; }

  a { color: #0b5fff; text-decoration: underline; text-underline-offset: 2px; }
  a:visited { color: #0b5fff; }

  strong { font-weight: 600; }
  em { color: #111; }

  /* Avoid awkward page breaks */
  h2, h3 { break-after: avoid; page-break-after: avoid; }
  ul, li, p { break-inside: avoid; page-break-inside: avoid; }
`;

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Martin Bartolo | Resume</title>
    <style>${css}</style>
  </head>
  <body>
${body}
  </body>
</html>
`;

await writeFile(output, html, "utf8");
console.log(`Wrote ${output}`);
