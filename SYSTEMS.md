# Systems & Artifact Inventory

Inventory of the systems and artifacts for the **yacht project**. Updated 2026-11-12.
This repo (`yacht-site`) is the **authoritative** home for the project's code and harness agreement.

## Where work happens
- **Claude (Claude Code)** — where the building happens.
- **Browser** — where I test the site and read the course.

## Artifact inventory — authoritative location, updater, next reader

| Artifact | Authoritative location | Who updates it | Who reads it next |
|---|---|---|---|
| Harness agreement (`CLAUDE.md`, `SIGNOFF`, `GIT-WORKFLOW`, `PIPELINE`, `HANDOFFS`, `DECISIONS`) | **`yacht-site`** repo | Owner decides; Claude records | Any fresh Claude session |
| Brief (`BRIEF.md`) | **`yacht-site`** repo | Owner writes + signs off | Claude (to build) |
| Build instructions (`BUILD.md`) | **`yacht-site`** repo | Claude drafts, owner reviews | Claude (to build) |
| Living state (`PROJECT.md`) | **`yacht-site`** repo | Claude (freely) | Any fresh session |
| Templates (`templates/`) | **`yacht-site`** repo | Claude, from handoff lessons | Owner/Claude starting a new component |
| Site code (html/css/js, `data.js`) | **`yacht-site`** repo | Claude | Claude / the browser |
| Prompt scratch | **OneNote** | Owner | Owner only — see note below |

## Flags — duplicates & inaccessible sources

- 🚩 **Duplicate (resolved by this decision):** the harness docs also exist in the
  `likeahuman-playground` repo, where they were first created for the course exercises. Those copies
  are now **frozen as a course archive** and are NOT maintained. **`yacht-site` is authoritative** —
  update here, not there. Do not treat `likeahuman-playground` as current project state.
- 🔒 **Inaccessible to Claude — OneNote:** the prompt scratch. Claude cannot read it. Anything that
  must survive a handoff has to be copied into the repo (the settled brief already is, in `BRIEF.md`).
- 🔒 **Inaccessible — original pre-harness yacht build:** an earlier local-folder version exists only
  on the owner's machine, in no repo. Treat `yacht-site` as the real project; that folder is superseded.

## In one line
Work happens in Claude + the browser; the authoritative records live in the **`yacht-site`** GitHub
repo. `likeahuman-playground` is a frozen course archive; OneNote is owner-only scratch Claude can't read.
