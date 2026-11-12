# Sign-off vs. Autonomy

For each artifact in my workflow, who decides it's done: me (sign off) or Claude (produce/decide).
Decided 2026-11-12. Only choices I actually made are recorded.

| Artifact | Who decides | Meaning |
|---|---|---|
| **Source prompt / brief** | **I sign off** | I write and approve it myself — it's my intent; everything flows from it. |
| **Living project file** (`PROJECT.md`) | **Claude updates** | Claude keeps it current (state, pending fixes, test findings) on its own. |
| **Built code** (website + CRM) | **Split** | Claude decides small/internal fixes are done; I sign off whole components and anything customer-facing (after testing it). |
| **Pushing to GitHub** | **Claude pushes** | Claude pushes to the repo on its own when work is ready; it doesn't ask first. |

## Notes

- The split on built code matches how I already work: my test-by-running is the sign-off for the
  big, visible stuff, while small fixes don't need a gate.
- "Claude pushes" is my standing choice; I can tighten it to sign-off later if I want more control.
