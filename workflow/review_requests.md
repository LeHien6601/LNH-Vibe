# Review Requests

## Purpose

This file tracks work that needs review from the human developer or ChatGPT.

Codex should update this file when work is complete but requires judgment before continuing.

## Current Review Status

Status:

```text
Factory documentation foundation and repository structure need review.
```

## Active Review Requests

## Review Request: Factory Documentation Foundation

## Review Type

Human review + ChatGPT review

## What Changed

Initial Game Factory documentation foundation has been drafted across:

```text
docs/
templates/
skills/
workflow/
AGENTS.md
```

## Files Or Areas To Review

```text
docs/vision.md
docs/north_star.md
docs/pipeline.md
docs/workflow_stages.md
docs/game_spec_standard.md
docs/architecture.md
docs/module_rules.md
docs/ai_workflow.md
docs/codex_workflow.md
docs/documentation_rules.md
AGENTS.md
skills/
workflow/
```

## Questions

* Is the Game Factory direction correct?
* Are Codex stop conditions strict enough?
* Are workflow files enough for handoff?
* Is the system too heavy for the first game?
* What should be simplified before implementation?

## Risk Level

Medium

## Recommended Next Step

Approve the foundation and repository structure, then complete Task 10: First Game Selection.

## Review Request Template

Use this format for future review requests:

````markdown
# Review Request: <Short Title>

## Review Type

Gameplay / Code / Architecture / Asset / UX / Release / Human Review / ChatGPT Review

## What Changed

## Files Or Screens To Review

```text
path/to/file
path/to/file
````

## Questions

*
*

## Risk Level

Low / Medium / High / Critical

## Recommended Next Step

## Status

Open / Approved / Needs Changes / Cancelled

## Date Opened

YYYY-MM-DD

## Resolution

Leave empty until resolved.

```

## Review Rules

Codex should request review when:

- gameplay feel needs judgment
- visual quality needs approval
- UI layout needs approval
- code architecture needs review
- assets are integrated
- Unity scene is ready for testing
- QA is complete
- release materials are ready

## Approval Rule

Codex should not approve final gameplay feel, art quality, or release readiness by itself.
```

---

## Review Request: Repository Structure

## Review Type

Human review + ChatGPT review

## What Changed

Created the initial repository structure and placeholder README files for the Game Factory workspace.

## Files Or Areas To Review

```text
README.md
docs/README.md
workflow/README.md
templates/README.md
skills/README.md
modules/README.md
examples/README.md
tools/README.md
prototype_web/README.md
unity_project/README.md
assets/README.md
release/README.md
workflow/current_task.md
workflow/next_actions.md
workflow/handover.md
docs/changelog.md
```

## Questions

* Is the folder structure sufficient for the first game?
* Are the placeholder READMEs clear enough for Codex handoff?
* Is `workflow/current_task.md` correctly positioned as a Human + ChatGPT game selection task?

## Risk Level

Low

## Recommended Next Step

Approve the repository structure, then complete Task 10: First Game Selection.

## Status

Open

## Date Opened

2026-07-06

## Resolution

Leave empty until resolved.
