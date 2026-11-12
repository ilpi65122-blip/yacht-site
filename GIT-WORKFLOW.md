# Git Workflow

How I separate work in this repo. Decided 2026-11-12. Tuned to my actual setup: solo,
one Claude session at a time, build with one big prompt then test by running.

## The rules

1. **Stay on `main` for small, safe changes.** Typos, colors, small tweaks — straight to `main`, no branch.

2. **Make a branch only for something big or risky.** A whole new component (e.g. the CRM), a
   redesign, anything I'd be sad to see break `main`. Build and test on the branch; `main` stays
   working. Good → merge. Mess → delete the branch and `main` never saw it.
   - Branch names: plain, like `feature/crm`, `redesign/homepage`.

3. **Check before merge = test by running.** Before merging a branch into `main`, Claude shows a
   short summary of what changed and I run/test it. That test is my sign-off (see `SIGNOFF.md`).
   Nothing reaches `main` until I've seen it work.

4. **No worktrees yet.** Worktrees (separate folders for running two Claude sessions at once) are
   deferred. Turn them on only when I actually want parallel sessions — not before.

## Why this shape

Branch-per-change, worktrees, and PR reviews are built for teams and parallel work. I'm one person
working in sequence, so this keeps the one real benefit — a safe place to try risky things — without
daily Git overhead. I can add more structure later if I start running parallel sessions.
