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

**CRM: built, signed off, and merged to `main`** (2026-11-12). Built from [`BRIEF-CRM.md`](BRIEF-CRM.md)
and [`BUILD-CRM.md`](BUILD-CRM.md). Private admin dashboard in `crm/` — list + detail, status
(New/Contacted/Closed) + notes, navy/white.

**Site ↔ CRM wired for real — signed off and merged to `main`** (2026-11-12, `DECISIONS.md` #6).
Small dependency-free Node backend (`server.js`) + JSON storage (`data/enquiries.json`). The contact
form POSTs enquiries to the server; the CRM reads/updates them (status/notes shared, not per-browser).
**Run with `npm start`, open http://localhost:3000** (no longer double-click). Localhost-bound and
hardened after a security review; **login is required before any deploy** (see Known risks).

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
- Site, verified 2026-11-12 in a browser: home, listings+filter, single yacht, enquire flow all work.
  Only console message is a harmless favicon 404.
- CRM, verified 2026-11-12 against [`BUILD-CRM.md`](BUILD-CRM.md) "Done when": lists enquiries,
  detail opens, status + notes edit and persist, navy/white. No errors.
- Site↔CRM wiring, verified 2026-11-12 on the Node server: API GET/POST work; an enquiry submitted
  through the site's Contact form appeared live in the CRM (8 → 10 after test submissions).

## Template reuse — tested, it worked (2026-11-12)
`templates/brief-template.md` was reused to write `BRIEF-CRM.md`. The test: did it prevent the
missing-context questions from the first handoff? **Yes.** The handoff had flagged two gaps — "does
'no backend' still hold?" and "how do enquiries feed the CRM?" — and the template's **Technical
constraints** and **How it connects** sections forced both to be answered in the brief up front. No
template corrections were needed this round.

## Known for later (not now)
- Real, user-entered enquiries now flow in. The **CRM renders them with `textContent`** (safe from
  XSS). The site's `app.js` still uses `innerHTML` but only over developer-controlled yacht data.
- **No auth on the CRM or the API** — anyone who can reach the server can read/modify enquiries
  (names, emails, messages). Mitigation in place: the server **binds to `127.0.0.1` (localhost only)**,
  so it is not reachable from the LAN. **Before deploying or binding to any other host, add a login**
  (e.g. a session cookie, or a `CRM_TOKEN` checked on every `/api/*` and `/crm/*` request). This is
  the main open risk — flagged by an automated security review 2026-11-12.
- Hardened 2026-11-12 (security review): request bodies capped at 64 KB; stored fields length-capped;
  static server only serves .html/.css/.js and blocks dotfiles, `server.js`, `data/`, and `.md` docs;
  `../` traversal blocked. Still no rate-limiting/spam protection — add before public exposure.
- Real yacht data + photos, and deployment/hosting, are future work.

## How to run
No install. Open `index.html` in a browser (or serve the folder statically and visit `/index.html`).
