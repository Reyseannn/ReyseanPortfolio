# Reysean Policarpio — Portfolio

A responsive one-page portfolio for Reysean Policarpio, a BS Computer Engineering student in Quezon City. The site presents three completed student projects, confirmed services and tools, education and awards, a downloadable résumé, and a working project-inquiry form.

## Highlights

- Editorial dark-gray and electric-blue design
- Responsive project galleries for FireFlies, Beyond the Lens, and eTickette
- Mobile eTickette gallery that keeps the kiosk setup photo uncropped
- Honest project roles and contribution details
- About section focused on demonstrated web, Android, and kiosk work
- Concise hero copy and a simplified footer
- Accessible focus states and reduced-motion support
- Skip-to-content navigation for keyboard users
- FormSubmit-powered contact form
- Downloadable one-page résumé
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

The test builds the Next.js app, then checks the shipped portfolio document's metadata, asset paths, skip link, and section navigation targets.

## Contact form

The form sends submissions through FormSubmit to `policarpioreysean3@gmail.com`. FormSubmit sends a one-time activation email after the first submission; the owner must approve it before later submissions can be delivered normally.

## Content notes

Project claims and roles are documented in [PRODUCT.md](PRODUCT.md). Visual rules are documented in [DESIGN.md](DESIGN.md).

## Recent updates

See [CHANGELOG.md](CHANGELOG.md) for dated maintenance notes. The live static portfolio is served from `public/portfolio`. Project screenshots load from `/images/` on the same site.
