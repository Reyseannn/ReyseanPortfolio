# Reysean Policarpio — Portfolio

A responsive one-page portfolio for Reysean Policarpio, a BS Computer Engineering student in Quezon City. The site presents three completed student projects, confirmed services and tools, education and awards, and a downloadable résumé.

## Highlights

- Dark background with purple and yellow accents
- Portfolio highlights for three student projects and three eTickette team placements
- Responsive project galleries for FireFlies, Beyond the Lens, and eTickette
- Mobile eTickette gallery with a naturally sized landscape photo and an uncropped kiosk setup photo
- Honest project roles and contribution details
- About section focused on demonstrated web, Android, and kiosk work
- Concise hero copy and a simplified footer
- Accessible focus states and reduced-motion support
- Skip-to-content navigation for keyboard users
- Direct email and profile links in the contact section
- One-page résumé served from the site's `/downloads/` assets
- Open Graph and social sharing image

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Run the code-quality check and the production-build test with:

```bash
npm run lint
npm test
```

The tests build the Next.js app, then check the shipped portfolio document's metadata, asset paths, skip link, section navigation targets, and highlight counts. A navigation behavior test also checks menu state across layout changes, Escape, and section selection.

## Content notes

Project claims and roles are documented in [PRODUCT.md](PRODUCT.md). Visual rules are documented in [DESIGN.md](DESIGN.md).

## Recent updates

2026-10-25: Added a 19 KB WebP version of the live hero portrait with the original PNG retained as a fallback, reducing its primary download size by about 94%.

2026-10-24: Connected the favicon to the live static homepage and restyled its existing R mark with the portfolio's dark purple and yellow palette.

2026-10-23: Added an accessible active state to the sidebar navigation so the section currently in view is highlighted on desktop and mobile.

2026-10-22: Added complete social sharing metadata to the live static homepage and set the production metadata base URL for the Next.js fallback.

2026-10-21: Made the contact email wrap safely on narrow screens while keeping its arrow aligned and easy to recognize.

2026-10-20: Enlarged the mobile menu button to 44 × 44 pixels for easier tapping. The dropdown now follows the header's actual height rather than a fixed pixel offset.

2026-10-19: The GitHub contribution calendar reserves its image space before loading to reduce layout shifts. Its verified 663 × 104 aspect ratio scales with the existing responsive styles.

2026-10-18: Mobile navigation now resets when switching to the desktop layout, preventing the menu from staying open when returning to a phone-sized view. Automated behavior checks cover resizing, Escape, and section selection.

See [CHANGELOG.md](CHANGELOG.md) for dated maintenance notes. The live static portfolio is served from `public/portfolio`. Project screenshots load from `/images/` on the same site.
