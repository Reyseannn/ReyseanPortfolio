# Changelog

## 2026-10-11

- Improved mobile navigation keyboard support: pressing Escape closes the open menu and returns focus to its toggle button.
- Updated the root README to point to this dated maintenance log.

## 2026-10-12

- Switched the six project screenshots to same-site `/images/` paths instead of GitHub's raw content host. This keeps portfolio imagery on the site's own asset origin and removes the separate image-host dependency.

## 2026-10-13

- Added a keyboard-accessible skip link that appears on focus and moves directly to the main portfolio content, avoiding repeated sidebar navigation.

## 2026-10-14

- Replaced the obsolete rendered-HTML test, which expected a removed `dist/server/index.js` worker, with a test for the portfolio document that is actually served. The test now validates metadata, CSS and JavaScript asset paths, the keyboard skip link, and every main navigation target after a production build.

## 2026-10-15

- Adjusted the eTickette gallery on narrow screens to stack the photos and display the portrait kiosk setup image without cropping.
- Shortened the hero introduction to avoid repeating the name already shown in the headline, and removed the HTML/CSS/JavaScript label from the footer to reduce duplicate details.
- Refocused the About section on demonstrated work: building web pages and Java Android apps, leading student project development, and contributing to eTickette’s kiosk setup.

## 2026-10-16

- Removed a leftover 190px mobile height rule that overrode the eTickette landscape photo's natural proportions. The landscape image now keeps its full frame on phones; the portrait photo retains its 260px contained frame, and desktop gallery rules are unchanged.

## 2026-10-17

- Updated the contact résumé link to use the existing same-site PDF in `/downloads/` instead of GitHub's raw-file host. The link now opens the résumé shipped with the current deployment and removes the separate file-host dependency.

## 2026-10-18

- Added a compact highlights strip showing the three student projects and three eTickette team placements already documented on the portfolio. Purple counts and monospace labels follow the site's palette, with tighter spacing on phones.
- Corrected the README's palette and contact details to match the live site, removing an obsolete claim about a working contact form.
- Reset the mobile navigation when switching to the desktop layout so it stays closed when returning to a narrow screen. The expanded state, button label, and visible menu now reset together; Escape still returns focus to the toggle, and section links still close the menu. Added a navigation behavior test to the standard test command.

## 2026-10-19

- Added the GitHub calendar's verified 663 × 104 dimensions to its lazy-loaded image. The browser can now reserve its aspect ratio before the external SVG loads, reducing movement in the contact section below. Existing desktop and mobile scaling remains in place.

## 2026-10-20

- Increased the mobile menu toggle from 38 × 38 to 44 × 44 pixels and prevented it from shrinking in the header. Positioned the dropdown at the header's full height instead of a fixed 66px offset so it stays aligned with the larger control and with text resizing. Desktop navigation and existing menu behavior are unchanged.

## 2026-10-21

- Updated the contact email link to wrap safely on narrow screens without pushing its arrow outside the viewport. The desktop appearance, mail link, and contact navigation remain unchanged.

## 2026-10-22

- Added Open Graph, X/Twitter, canonical URL, and image metadata directly to the static homepage that serves the live site. Set the Next.js metadata base to the production URL so its fallback route resolves social images without a build warning, and added regression checks for the sharing tags.

## 2026-10-23

- Added section-aware navigation using `IntersectionObserver`. The visible section now receives an accessible `aria-current="location"` state and the existing yellow accent on both desktop and mobile, with automated coverage for the observer behavior.

## 2026-10-24

- Linked the existing SVG favicon from the live static homepage and updated its R mark from an unrelated blue treatment to the portfolio's dark purple, soft purple, and yellow palette. Added a regression check for the favicon link.

## 2026-10-25

- Converted the live hero portrait from a 311 KB PNG to a visually matched 19 KB WebP, reducing its primary transfer size by about 94%. Added a `<picture>` source while retaining the original PNG fallback, preserved the 529 × 615 dimensions and responsive rules, and added regression coverage for the optimized asset.

## 2026-10-26

- Increased all six mobile dropdown navigation links to a minimum 44-pixel touch target and vertically centered their labels. The desktop sidebar spacing, active-section state, menu toggle, and close behavior remain unchanged.
