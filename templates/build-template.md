# Build Instructions — <component name>, first version

> Reusable template for build instructions (reader: Claude). Copy to `BUILD-<name>.md`, fill the
> prompts, delete this quote block. Point to the brief; don't restate it.

## Goal
<One line: the outcome a first version should reach, testable in a browser/run.>

## Read first
See **`BRIEF-<name>.md`** for the spec. Build to it; don't restate it. Rules: `CLAUDE.md`.

## How to build
<Stack and setup — e.g. plain HTML/CSS/JS, no backend, opens by double-click. If this component
stores data, say what persistence to use (decided in the brief's Technical constraints).>
<Placeholder vs real content: what to fake for now and what must be real.>

## How it connects
<Any data read from / written to another component. Mirror the brief's "How it connects" section so
the builder wires it, not guesses.>

## Done when
<A checklist of concrete, checkable conditions. The owner's test-by-running checks these.>

## How to run / test
<How the owner opens and exercises it. That test is the sign-off (SIGNOFF.md).>

## Not in this build
<Point to the brief's "Out of scope" so the builder knows where to stop.>
