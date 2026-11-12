---
name: build-component
description: Build a new component of this project from a signed-off brief — branch, build to the brief, verify in a browser, and hand over for sign-off. Use when a BRIEF-<name>.md is signed off and the component needs building. Follows this repo's harness (CLAUDE.md, SIGNOFF.md, GIT-WORKFLOW.md).
---

# Build a component

Runs the **Build** phase of this project's pipeline (see `PIPELINE.md`) the same way every time.
This is a skeleton — refine the steps as the project teaches you more.

## Starting conditions (do not start until all are true)
- A **signed-off brief** exists: `BRIEF-<name>.md`, with an owner sign-off line (`SIGNOFF.md` says the
  owner writes and signs the brief — never write or self-approve it).
- Build instructions exist, or are written first from `templates/build-template.md` → `BUILD-<name>.md`
  (carries the "Read first" and "How it connects" links automatically).
- `CLAUDE.md` is present and has been read.

If any is missing, stop and ask for it — do not invent a brief or guess the spec.

## Steps
1. Read `BRIEF-<name>.md`, `BUILD-<name>.md`, `CLAUDE.md`, and any component it connects to.
2. Create a branch: `feature/<name>` (GIT-WORKFLOW: big/new work goes on a branch, not `main`).
3. Build to the brief — plain HTML/CSS/JS unless the brief's Technical constraints say otherwise.
   Use placeholder data where the brief says so.
4. **Verify in a real browser** — drive the actual flows (serve the folder, click through, check the
   brief's "Done when" list). Do not assume; observe. Capture what you checked.
5. Update `PROJECT.md` (current state + test findings; link findings to `BUILD-<name>.md`).
6. Commit on the branch and push it. Leave `main` untouched.

## Intended result
A working component built to the brief, on `feature/<name>`, verified in a browser, with `PROJECT.md`
updated and the branch pushed — presented to the owner with what was tested.

## Stopping point
- **Stop at the owner's sign-off gate.** Present the result and the verification; do NOT auto-merge.
- Only after the owner says "sign off": merge `feature/<name>` into `main` (`--no-ff`), push, delete the
  branch, and update `PROJECT.md` to "shipped".
- If the owner says "change this and that": run the fix loop on the branch, re-verify, present again.

## Templates this phase touches (home: `templates/`, see `templates/README.md`)
- **Creates** `BUILD-<name>.md` from `templates/build-template.md` → lands at repo root.
- **Updates** the single living `PROJECT.md` (seeded once from `templates/project-template.md`) — edit
  in place, never make a per-component copy.
- Does **not** use `brief-template.md` (that's the Write-a-brief phase).

## Notes
- Sign-off rules: small internal fixes Claude may finish; whole/customer-facing components need the
  owner's test-and-sign-off (`SIGNOFF.md`).
- If a build reverses a prior decision (e.g. adds a backend), record it in `DECISIONS.md` first.
