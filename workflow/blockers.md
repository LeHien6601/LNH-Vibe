# Blockers

## Purpose

This file tracks anything that prevents safe progress.

Codex should update this file and stop when it cannot continue without human or ChatGPT input.

## Current Blocker Status

Status:

```text
No active blockers.
```

## Active Blockers

No active blockers.

## Blocker Template

Use this format when adding a blocker:

````markdown
# Blocker: <Short Title>

## Type

Missing Asset / Design Decision / Architecture Decision / Conflicting Docs / Technical Issue / Review Needed / Other

## Status

Open / Resolved / Cancelled

## Description

What is blocking progress?

## Why It Blocks Progress

Explain why Codex or ChatGPT should not continue without resolving this.

## Required Decision Or Asset

What is needed?

## Suggested Options

### Option A

### Option B

### Option C

## Owner

Human / ChatGPT / Codex / Human + ChatGPT

## Related Files

```text
path/to/file
path/to/file
````

## Date Opened

YYYY-MM-DD

## Resolution

Leave empty until resolved.

```

## Blocker Rules

Codex must create a blocker if:

- product direction is unclear
- task scope is too broad
- required assets are missing
- game rules conflict
- architecture decision is required
- implementation conflicts with docs
- Unity porting direction is unclear
- tests fail due to unclear expected behavior
- release readiness requires human judgment

## Resolution Rule

When resolving a blocker:

1. update the blocker status
2. document the resolution
3. update related docs if needed
4. update `workflow/handover.md`
5. update `workflow/next_actions.md` if the next task changes
6. record a decision in `docs/decisions.md` if the blocker caused a major decision
```
