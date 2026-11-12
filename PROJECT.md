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

**Next up:** the **CRM** component. Brief is written and signed off: [`BRIEF-CRM.md`](BRIEF-CRM.md)
(private admin tool, 8 placeholder enquiries, navy/white dashboard, no backend in v1). Next activity:
a `BUILD-CRM.md` from `templates/build-template.md`, then Claude builds on a branch (GIT-WORKFLOW),
owner tests, merge.

## Reference links to wire when the CRM is built (agreed 2026-11-12)
Following the work through the pipeline, these cross-links let each next reader continue with context:
1. `BRIEF-CRM.md` "How it connects" → `BRIEF.md` (the site's enquiry fields).
2. `BUILD-CRM.md` "Read first" → `BRIEF-CRM.md` (the spec).
3. `BUILD-CRM.md` "How it connects" → `contact.html` / `data.js` (the exact fields to mirror).
4. `PROJECT.md` test findings → `BUILD-CRM.md` (what "done" meant).
5. `PROJECT.md` pending / next-up → `BRIEF-CRM.md` (the governing brief).
Links 1-3 are now encoded in `templates/`; links 4-5 get added to this file as the CRM is tested.

## This repo and records
`yacht-site` (this repo) is the home for the yacht project's code and records. `SYSTEMS.md` describes
the owner's *overall* course setup and names `likeahuman-playground` (the harness-documentation repo);
that reference is about the course, not this project — the live code and records for the yacht site
live here.

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

## Template reuse — tested, it worked (2026-11-12)
`templates/brief-template.md` was reused to write `BRIEF-CRM.md`. The test: did it prevent the
missing-context questions from the first handoff? **Yes.** The handoff had flagged two gaps — "does
'no backend' still hold?" and "how do enquiries feed the CRM?" — and the template's **Technical
constraints** and **How it connects** sections forced both to be answered in the brief up front. No
template corrections were needed this round.

## Known for later (not now)
- `app.js` builds cards via `innerHTML` with developer-controlled placeholder data (safe today).
  When real, user-entered content arrives, switch to safe DOM methods / sanitize to avoid XSS.
- Real yacht data + photos, and a working contact backend, are future work.

## How to run
No install. Open `index.html` in a browser (or serve the folder statically and visit `/index.html`).
