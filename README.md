# yacht-site

A yacht listings site (buy/charter) plus a private CRM to manage enquiries. Built with Claude under
a documented harness.

## Run it
Requires Node.js. From this folder:

```bash
npm start          # or: node server.js
```

Then open:
- **Site:** http://localhost:3000
- **CRM:** http://localhost:3000/crm/

Enquiries submitted on the site's Contact page are saved by the server (`data/enquiries.json`) and
appear live in the CRM.

## Docs
- **What it is / spec:** `BRIEF.md` (site), `BRIEF-CRM.md` (CRM)
- **Build instructions:** `BUILD.md`, `BUILD-CRM.md`
- **How we work (agreement):** `CLAUDE.md` · decisions in `DECISIONS.md`
- **Current state:** `PROJECT.md`

Site + CRM are plain HTML/CSS/JS; the backend is a single dependency-free Node server (`server.js`).
