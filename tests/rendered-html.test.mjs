import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const portfolioDocument = new URL(
  "../public/portfolio/index.html",
  import.meta.url,
);

test("ships the portfolio document with metadata and navigation targets", async () => {
  const html = await readFile(portfolioDocument, "utf8");

  assert.match(html, /<meta\s+name="viewport"[^>]*>/i);
  assert.match(html, /<meta\s+name="description"[^>]*>/i);
  assert.match(html, /<meta\s+property="og:image"\s+content="https:\/\/reysean\.vercel\.app\/og\.png">/i);
  assert.match(html, /<meta\s+name="twitter:card"\s+content="summary_large_image">/i);
  assert.match(html, /<link\s+rel="canonical"\s+href="https:\/\/reysean\.vercel\.app\/">/i);
  assert.match(html, /<link\s+rel="stylesheet"\s+href="\/portfolio\/style\.css">/i);
  assert.match(html, /<script\s+src="\/portfolio\/script\.js"\s+defer><\/script>/i);
  assert.match(html, /href="#main-content"/i);
  assert.match(html, /<main\s+id="main-content"[^>]*>/i);

  for (const section of [
    "about",
    "projects",
    "education",
    "skills",
    "github",
    "contact",
  ]) {
    assert.match(html, new RegExp(`href=["']#${section}["']`, "i"));
    assert.match(html, new RegExp(`id=["']${section}["']`, "i"));
  }
});

test("portfolio highlights match the projects and team placements shown", async () => {
  const html = await readFile(portfolioDocument, "utf8");
  const highlights = html.match(
    /<dl class="portfolio-stats"[^>]*>([\s\S]*?)<\/dl>/i,
  )?.[1];
  const entries = [...(highlights ?? "").matchAll(
    /<dt>([^<]+)<\/dt>\s*<dd>(\d+)<\/dd>/g,
  )].map(([, label, count]) => [count, label]);
  const projectCount = [...html.matchAll(/<article class="project(?: [^"]*)?"/g)].length;
  const placementCount = [...html.matchAll(/<li>[^<]*Runner-Up<\/li>/g)].length;

  assert.deepEqual(entries, [
    [String(projectCount), "Student projects"],
    [String(placementCount), "eTickette team placements"],
  ]);
});
