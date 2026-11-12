# Templates — maintained home

This folder is the **one maintained home** for the project's templates. Edit them here; do not copy
them elsewhere (duplicated docs drift — see `../SYSTEMS.md` flags). Completed, filled-in artifacts live
**outside** this folder so a blank template is never mistaken for real content.

## The templates and where their output goes

| Template (here) | Create or update? | Completed artifact → home |
|---|---|---|
| `brief-template.md` | **Create** one per component | `BRIEF-<name>.md` in the repo root (owner writes + signs off) |
| `build-template.md` | **Create** one per component | `BUILD-<name>.md` in the repo root |
| `project-template.md` | **Update** — seeds the *single* living file | `PROJECT.md` in the repo root (one file, edited in place — never duplicated per component) |

Component **code** produced by a build is not from a template; it lands in the component's own folder
(e.g. `crm/`), or the repo root for the site.

## Which phase uses which

- **Write a brief** → creates `BRIEF-<name>.md` from `brief-template.md`.
- **Build a component** (`.claude/skills/build-component/`) → creates `BUILD-<name>.md` from
  `build-template.md`, builds the code, and **updates** `PROJECT.md` (does not touch the templates).

## Rule of thumb
- **Templates** = blank, reusable patterns. They live *here* and get better over time.
- **Completed artifacts** = filled, real content. They live at the repo root / component folders.
- `PROJECT.md` is a **living instance**, updated in place — there is only ever one.
