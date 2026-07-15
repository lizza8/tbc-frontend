# CS School — Figma Import Guide

This folder mirrors the live site design for **cs.school.ge** so you can rebuild or edit it in Figma.

## Quick import (recommended)

1. Install the Figma plugin **[html.to.design](https://www.figma.com/community/plugin/1159128469245899385/html-to-design)**.
2. Open `components.html` in Chrome (double-click the file or run a local server).
3. In Figma: **Plugins → html.to.design → Import URL** → paste the file path or `http://localhost:.../figma/components.html`.
4. The plugin creates frames with buttons, tags, cards, characters, and code windows.

## Design tokens

Import `design-tokens.json` using:

- **[Tokens Studio for Figma](https://tokens.studio/)** — Import JSON → sync to Variables
- Or manually create Figma Variables from the color/spacing values in the JSON

## Frame sizes to use

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Desktop    | 1440px | 2-column hero, 4-col crew |
| Tablet     | 768px  | 2-col grids, hamburger nav |
| Mobile     | 390px  | Single column |

## Component list

- **Header** — TBC logo + nav + CTA
- **Promo strip** — yellow announcement bar
- **Hero** — headline, buttons, code window, 4 characters
- **Stats bar** — dark strip, 4 metrics
- **Crew cards** — hover reveals XP + quote
- **Badge cards** — 6 achievement tiles
- **Path steps** — learning journey timeline
- **Code window** — dark editor chrome
- **Feature bento** — 6 panel grid
- **Task cards** — difficulty + embedded code
- **FAQ** — accordion items

## Live reference

https://lizza8.github.io/tbc-frontend/

## Author

ლიზა მამიტაშვილი — TBC school CS presentation
