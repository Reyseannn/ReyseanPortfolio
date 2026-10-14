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
