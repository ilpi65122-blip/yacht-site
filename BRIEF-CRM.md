# Brief — CRM

> Written by the owner, signed off by the owner (SIGNOFF.md). OneNote is scratch; this is settled.

## What this is
A private admin tool, just for me (not site visitors), to manage enquiries that come from the yacht
site — track who asked about which yacht and move each lead through my pipeline.

## Scope — pages / sections / features
- **Enquiry list** — all enquiries, each showing the yacht, the person, and status.
- **Enquiry detail** — full contact info + the message for one enquiry.
- **Update status** — move a lead through New → Contacted → Closed.
- **Add a note** — my private notes on a lead.

## Look and feel
Clean and functional — a dashboard, not a marketing page. **Same navy & white as the site**, with a
clear table/list of enquiries readable at a glance.

## Must-haves
Each enquiry record stores:
- **Yacht** (which one they asked about)
- **Name**
- **Email**
- **Message**
- **Status** (New / Contacted / Closed)
- **Date received**
- **Notes** (my private notes)

## How it connects to what already exists
The enquiry fields mirror the site's contact form — **yacht, name, email, message** — which is where
real enquiries will eventually come from. See the site spec in [`BRIEF.md`](BRIEF.md) and the actual
fields in `contact.html` / `data.js`. For v1 the enquiries are **placeholder** (not wired to the live
form yet); the status and notes fields are added by the CRM for tracking.

## Technical constraints
- **Plain HTML / CSS / JS, no backend** for v1 — same as the site.
- **8 placeholder enquiries** hard-coded (a mix of yachts and statuses) so it looks real.
- Status and notes changes work in the browser during a session (may use the browser's local storage
  so they persist on my machine). No server, no database in v1.

## Out of scope (for now)
- Live wiring: real contact form -> CRM (that's the backend step).
- Login / password protection.
- Sending email / replying from the CRM.
- Deleting enquiries, reporting / analytics.

v1 just **shows the 8 sample enquiries and lets me change status and add notes**, in the browser.

---
*Owner sign-off:* 2026-11-12 — signed off.
