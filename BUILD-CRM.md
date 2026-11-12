# Build Instructions — CRM, first version

> Reader: Claude, with this repo open. Point to the brief; don't restate it.

## Goal
A working first version of the CRM — a private admin dashboard — that I can open in a browser and
use to view the sample enquiries, change their status, and add notes.

## Read first
See **[`BRIEF-CRM.md`](BRIEF-CRM.md)** for the spec. Build to it; don't restate it. Rules: `CLAUDE.md`.

## How to build
- **Plain HTML, CSS, JS. No backend.** Opens by double-clicking the CRM's `index.html`.
- Put the CRM in its own **`crm/`** subfolder to keep it separate from the public site.
- **8 placeholder enquiries** hard-coded (mix of yachts and statuses).
- Status and notes changes **persist in the browser's localStorage** so they survive a reload on my
  machine (no server/database).

## How it connects
Enquiry records mirror the site's contact-form fields — **yacht, name, email, message** — see
[`BRIEF-CRM.md`](BRIEF-CRM.md) "How it connects" and the real fields in
[`contact.html`](contact.html) and [`data.js`](data.js). The CRM adds **status, date received, notes**
for tracking. v1 uses placeholder enquiries (not wired to the live form).

## Done when
- A dashboard **lists all 8 enquiries** (yacht, name, status at a glance).
- Clicking an enquiry shows its **detail** (full contact info + message).
- I can **change status** (New / Contacted / Closed) and **add a note**, and both **persist** across a reload.
- Look matches the site: navy & white, clean/utilitarian dashboard.
- Opens and works in a browser with no errors.

## How to run / test
Open `crm/index.html` in a browser. Click an enquiry, change its status, add a note, reload — the
changes should stick. That test is my sign-off (`SIGNOFF.md`).

## Not in this build
See `BRIEF-CRM.md` "Out of scope": no live form wiring/backend, no login, no email, no delete, no reporting.
