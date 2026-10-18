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
