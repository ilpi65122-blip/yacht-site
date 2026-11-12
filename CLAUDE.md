# CLAUDE.md — harness agreement

How we work in this repo. Read this first every session. Details are in the linked files.

## The project
A solo project built with Claude. The worked example is a yacht website + CRM.
Goal: run work through a real harness, not ad-hoc chat. Owner is a beginner — explain Git/plainly.

## Read before building
- `BRIEF.md` — what we're building (the owner writes and signs this off). Read it first.
- `PROJECT.md` — living state: what's built, pending fixes, test findings. (Claude keeps this current.)

## Pipeline (see `PIPELINE.md`)
Brief → Claude builds → owner tests by running → fix loop → repeat per component.

## Who decides "done" (see `SIGNOFF.md`)
- **Brief** — owner writes and signs off. Don't write it for them.
- **`PROJECT.md`** — Claude updates freely.
- **Built code** — Claude may decide small/internal fixes are done; owner signs off whole
  components and anything customer-facing, after testing it.
- **Pushing to GitHub** — Claude may push on its own when work is ready.

## Git (see `GIT-WORKFLOW.md`)
- Small, safe changes → straight to `main`.
- Big or risky changes → a branch (`feature/...`), tested there, merged only after the owner sees it work.
- Always show what changed before merging to `main`.
- No worktrees yet (only if we run parallel sessions).

## More detail
`SYSTEMS.md` (tools) · `HANDOFFS.md` (what passes between stages) · `DECISIONS.md` (why these choices).
