# Portfolio design system

## Direction

The site presents Reysean as a working student developer through specific project evidence. It uses a compact editorial layout instead of a dashboard or template-card aesthetic. Freelance contact is the primary action; project proof and résumé access support employers and internship reviewers.

## Visual language

- Backgrounds: near-black `#08090c`, graphite `#1a1c23`, and warm off-white `#efefec`.
- Accent: electric blue `#4845f2`, with `#7775ff` for text and focus states on dark surfaces.
- Type: Nimbus Sans Narrow Bold for large display headings; Nimbus Sans for body text and controls.
- Shape: 16px project and media corners; pill shapes are reserved for navigation, tags, status, and primary controls.
- Photography: square or tightly cropped project evidence, arranged in asymmetrical editorial galleries.

## Layout and rhythm

- Content width is capped at 1180px with fluid 20px desktop and 14px mobile gutters.
- Major sections use generous vertical space, separated by borders or a full background change.
- The hero balances a three-line statement against Reysean's portrait.
- Project sections alternate composition and color while preserving the same copy hierarchy: status, title, role, contribution, tools.

## Interaction

- Electric blue is the consistent action and keyboard-focus color.
- Arrow movement is limited to hovered links and buttons.
- Hero entrance motion is brief and disabled when reduced motion is requested.
- The contact form reports submitting, success, and error states with an `aria-live` region.

## Responsive behavior

- At 900px, two-column sections stack and project copy comes before media where needed.
- At 680px, secondary navigation links collapse, headings scale down, galleries reflow, and all form fields use one column.
- Images declare intrinsic dimensions and crop only inside intentional project-gallery frames.

## Content rules

- State student work and personal contribution precisely.
- Never imply paid-client experience or full ownership of a group project.
- List confirmed tools without percentages or proficiency scores.
- Keep the phone number in the résumé only.
