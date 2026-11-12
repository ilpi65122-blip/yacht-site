# Simplification Decisions

Decisions I made about simplifying my workflow (see `PIPELINE.md`, `HANDOFFS.md`).
Only decisions I actually chose are recorded here.

## Decision 1 — Adopt a living project file (2026-11-12)

**Decided:** keep one living project file in the repo that a fresh Claude session reads at
the start, holding: what the project is, key decisions, current state, pending fixes, and
test findings.

**Fixes:** re-explaining context after a reset; the CRM (and future components) starting from
scratch; gives fix feedback and test findings a durable home instead of chat/head.

**Preserve (do not lose):**
- The detailed big prompt stays in **OneNote** — this file is a living summary, not a replacement.
- The **test-by-running** habit is unchanged; findings just get written down.
- The **one-big-prompt-then-iterate** rhythm is unchanged.

**Cost to accept:** the file has to be kept updated (a few lines per session); if it goes stale it misleads.

A starter template lives in `PROJECT.template.md`.

## Decision 2 — Keep the source prompt in the repo (2026-11-12)

**Decided:** the authoritative build prompt lives **in the repo**, where Claude can read it,
instead of only in OneNote.

**Fixes:** removes the copy-paste-the-prompt step every session; removes the "is the latest in
OneNote or in chat?" split.

**Preserve (do not lose):**
- OneNote stays fine as a **drafting / scratch space** — not abandoned.
- The habit of writing one big detailed prompt is unchanged; it just gets a home in the repo.

**Cost to accept:** discipline to treat the repo copy as the source of truth once settled, not OneNote.

## Decision 3 — Push the project to GitHub, not machine-only (2026-11-12)

**Decided:** push the actual project (website + CRM) to a GitHub repo instead of leaving it only
in a local folder.

**Fixes:** machine-only fragility (no backup); lets a fresh Claude session read the true current
code instead of me describing it; closes the gap `SYSTEMS.md` flagged (records belong in GitHub).

**Preserve (do not lose):**
- The local folder stays my **working copy** — I still build and test there.
- GitHub is the backup / source of truth, not a new place to work; build-and-test rhythm unchanged.

**Cost to accept:** remembering to push (one command; Claude can do it).

## Decision 4 — The brief lives in `BRIEF.md` (2026-11-12)

**Decided:** the source prompt / brief lives in a repo file named **`BRIEF.md`**. This closes the
gap in Decision 2 ("the prompt lives in the repo" — but it never said *where*).

**First activity this unblocks:** for "make the site," the first activity is *write the brief* — I
write and sign it off (`SIGNOFF.md`), and it now has a home (`BRIEF.md`) so a fresh Claude session can read it.

## Decision 5 — Add `CLAUDE.md` as the auto-read agreement (2026-11-12)

**Decided:** add a `CLAUDE.md` — a short digest of the whole agreement that a fresh Claude session
reads automatically at startup, pointing to the detailed files (`BRIEF`, `PROJECT`, `SIGNOFF`,
`PIPELINE`, `GIT-WORKFLOW`, etc.).

**Closes:** the gap flagged in Decision 4 — a fresh session now self-loads the agreement + knows to
read the brief, instead of relying on someone opening the right file.
