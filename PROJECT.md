# Azure Yachts — living context

> The one file a fresh Claude session reads first (with CLAUDE.md). Keep it short and current.
> Detailed build prompt / spec: BRIEF.md.

## What this is
A listings site where yachts are published to buy or charter. Visitors browse and enquire.
First version is placeholder-only (no real data, no backend).

## Current state
First version **built, signed off, and merged to `main`** (2026-11-12). Verified in a browser:
- Four pages, linked: `index.html` (Home), `listings.html`, `yacht.html?id=N` (single), `contact.html`.
- 6 placeholder yachts in `data.js`; shared rendering/filtering in `app.js`; styling in `styles.css`.
- Listings filters work (buy/charter + price bucket); single-yacht pages render by `?id=`.
- Enquire button carries the yacht name into the contact form; form shows a placeholder confirmation.
- Images are placeholder navy blocks (no real photos yet).

Pending: owner to test and sign off, then merge to `main`.

## Key decisions
- Plain HTML/CSS/JS, no framework, no backend (BRIEF out-of-scope list).
- Placeholder yachts + local placeholder image blocks; sensible navy/white defaults; text logo.
- Build lives in its own repo (`yacht-site`); harness agreement copied in.

## Shared facts
- Palette: navy `#0b2545` / `#13315c`, white, light grey. Serif headings (Georgia), sans body.
- Yacht fields: name, type (buy/rent), price + unit, length (m), location, description.

## Pending fixes
- [ ] (none yet — awaiting owner's test feedback)

## Test findings
- Verified 2026-11-12 in a browser: home, listings+filter, single yacht, enquire flow all work.
  Only console message is a harmless favicon 404.

## Known for later (not now)
- `app.js` builds cards via `innerHTML` with developer-controlled placeholder data (safe today).
  When real, user-entered content arrives, switch to safe DOM methods / sanitize to avoid XSS.
- Real yacht data + photos, and a working contact backend, are future work.

## How to run
No install. Open `index.html` in a browser (or serve the folder statically and visit `/index.html`).
