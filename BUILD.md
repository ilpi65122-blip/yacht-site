# Build Instructions — first version

> Reader: Claude, with this repo open. Keep it short; the spec lives in `BRIEF.md`.

## Goal
Produce a **working first version** of the yacht site I can open in a browser and test.

## Read first
See **`BRIEF.md`** for the pages, look and feel, and the fields each yacht shows. Build to it; don't
restate it. Agreement and sign-off rules: `CLAUDE.md`.

## How to build
- **Plain HTML, CSS, and JavaScript.** No framework, no backend, no build step. Opens by
  double-clicking `index.html` in a browser — nothing to install.
- **6 placeholder yachts**, hard-coded — varied: some buy, some rent, a range of prices.
- **Images:** local **placeholder blocks** (navy/grey boxes showing the yacht name) — no internet
  needed, obviously temporary, easy to swap for real photos later.
- **Branding:** sensible defaults — clean **navy and white**, an elegant standard font, a
  **text-based logo** (the site name). All placeholder, to be replaced later.

## Done when
- All four pages exist and link together: Home, Listings, Single yacht page, Contact.
- Look matches `BRIEF.md`: clean/elegant/premium, navy and white, photo-led.
- Listings page **filters** work: by buy/rent and by price.
- Each yacht shows its fields (per `BRIEF.md`) and has an **enquire** button.
- Opens and works in a browser with no errors.

## How to run / test
Tell me which file to open (e.g. `index.html`). I open it, click through all four pages and the
filters. That test is my sign-off on the build (`SIGNOFF.md`).

## Not in this build (see `BRIEF.md` "out of scope")
No payments, no login, no booking calendar, no CRM. Real yacht data and photos come later.
