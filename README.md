# Reysean Policarpio — Portfolio

A responsive one-page portfolio for Reysean Policarpio, a BS Computer Engineering student in Quezon City. The site presents three completed student projects, confirmed services and tools, education and awards, a downloadable résumé, and a working project-inquiry form.

## Highlights

- Editorial dark-gray and electric-blue design
- Responsive project galleries for FireFlies, Beyond the Lens, and eTickette
- Honest project roles and contribution details
- Accessible focus states and reduced-motion support
- FormSubmit-powered contact form
- Downloadable one-page résumé
- Open Graph and social sharing image

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Run the static checks with:

```bash
npm run lint
```

## Contact form

The form sends submissions through FormSubmit to `policarpioreysean3@gmail.com`. FormSubmit sends a one-time activation email after the first submission; the owner must approve it before later submissions can be delivered normally.

## Content notes

Project claims and roles are documented in [PRODUCT.md](PRODUCT.md). Visual rules are documented in [DESIGN.md](DESIGN.md).

## Recent updates

See [CHANGELOG.md](CHANGELOG.md) for dated maintenance notes. The live static portfolio is served from `public/portfolio`.
