# Brief — <component name>

> Reusable template for a build brief. Copy this to `BRIEF-<name>.md`, fill the angle-bracket
> prompts, delete this quote block, then sign off (SIGNOFF.md: the owner writes and signs the brief).
> Keep completed briefs as their own files — don't overwrite this template.

## What this is
<One paragraph: what this component is, and who uses it.>

## Scope — pages / sections / features
<List the pages, screens, or features this component needs. Keep the first build focused.>

## Look and feel
<Style, mood, colours, fonts, reference examples. Omit if this component has no UI.>

## Must-haves
<The things it must do or show. For list/record views, name the fields each item shows and any
filters or search.>

## How it connects to what already exists
<Does this read from or write to another component (e.g. the site's enquiries)? Name the data that
passes between them and in which direction. — This section exists because the first handoff flagged
"previous component -> this one" as the missing link; don't leave it blank.>

## Technical constraints
<Stack and limits: framework or plain HTML/CSS/JS? Does the "no backend" rule still hold, or does
this component need to store data / needs persistence? — The first handoff showed a records-storing
component (a CRM) can't assume the website's "no backend" rule; decide it here, up front.>

## Out of scope (for now)
<What this build is NOT doing yet — keeps it focused and tells the builder where to stop.>

---
*Owner sign-off:* <date + "signed off" once settled>
