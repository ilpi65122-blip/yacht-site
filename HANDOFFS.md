# Handoff Artifacts

What travels between stages of my current pipeline (see `PIPELINE.md`), traced on 2026-11-12
from the yachts website + CRM. Informal handoffs (chat / in my head) are included on purpose,
so I can see how context actually travels today.

## By handoff

| Handoff | What's passed | Tells the next stage | Where it lives | Type |
|---|---|---|---|---|
| **Idea → Prompt** | Idea + references | what to build, look/feel | Partly in the prompt, partly in my head | mixed |
| **Prompt → Claude** | The big prompt | full description of what I want | OneNote (saved) + Claude chat | formal |
| **Claude → Build** | Website code | the working site | Local folder | formal |
| **Test → Fix (loop)** | "change this and that" feedback | what to fix this round | Claude chat only (gone on reset) | informal |
| **Testing** | What's wrong | what to change next | In my head | informal |
| **Website → CRM** | *nothing* | CRM started fresh | — | missing |
| **Build → Final** | Finished code | the product | Local folder, machine only (no README, no backup) | formal, fragile |

## Which copy to use

- **The prompt** — the canonical version lives in **OneNote**.
- **The code** — the **local folder** is the only copy (not pushed, not backed up).

## Informal handoffs (the ones that only live in chat or my head)

- **References** — some pasted into the prompt, some only described from memory.
- **Fix feedback** ("change this and that") — typed into the Claude chat and then gone.
- **Test findings** — what's wrong is held in my head while I click around.
- **Website → CRM** — no artifact carried over; the CRM began from a fresh prompt.

## What this shows

The durable artifacts are the OneNote prompt and the local code. Everything that makes the
work *improve* — the fixes, the test findings, the reasons behind changes — lives in chat or
in my head, so a fresh Claude session can't pick it up. That's the gap to close when turning
this into a harness.
