# Current Task

## Task Title

Task 10: First Game Selection

## Current Stage

Factory Setup

## Owner

Human + ChatGPT

## Goal

Choose the first small casual game that will be used to prove the Game Factory pipeline.

## Background

The repository structure and factory documentation are now prepared. The next step is a product/design decision, not an implementation task.

Codex should not choose the first game or begin gameplay implementation.

## Scope

Human + ChatGPT should choose one first game candidate that is:

* small in scope
* mobile-friendly
* easy to prototype on the web
* practical to port to Unity
* useful for testing the factory workflow

## Out of Scope

Do not:

* implement game code
* create a web prototype
* create Unity files
* create reusable modules
* create final art assets
* define monetization
* approve release readiness

## Input Files

Review:

```text
docs/vision.md
docs/north_star.md
docs/pipeline.md
docs/workflow_stages.md
docs/game_spec_standard.md
docs/architecture.md
docs/ai_workflow.md
docs/codex_workflow.md
workflow/handover.md
workflow/next_actions.md
```

## Expected Output

After selection, update or create:

```text
docs/current_game/idea.md
workflow/current_task.md
workflow/handover.md
workflow/review_requests.md
docs/changelog.md
```

The next `workflow/current_task.md` should prepare Task 11: First Game Specification.

## Files To Update

```text
docs/current_game/idea.md
workflow/current_task.md
workflow/handover.md
workflow/review_requests.md
docs/changelog.md
```

## Quality Requirements

The selected game should:

* fit the current Game Factory mission
* avoid broad scope
* have a clear core loop
* be easy to review as a web prototype
* leave room for Unity porting
* not require unapproved art direction

## Tests Or Checks

No automated tests are required.

Manual checks:

* confirm the selected game is clearly named
* confirm the reason for selection is documented
* confirm scope is intentionally small
* confirm Codex has not been asked to implement gameplay yet

## Stop Conditions

Codex must stop and update `workflow/blockers.md` if asked to:

* choose the game without human or ChatGPT direction
* implement gameplay before a game spec is approved
* create assets before art direction is approved
* create reusable modules before reuse is proven

## Review Needed

Review type:

* [x] Human review
* [x] ChatGPT review
* [ ] Code review
* [ ] Gameplay review
* [ ] Asset review
* [ ] Architecture review

Review questions:

* Which first game best proves the pipeline?
* Is the selected game small enough for a first prototype?
* Does the selected game support a clean web-to-Unity path?

## Commit Instructions

Commit after completing the selection task?

* [ ] No

## Notes For Codex

This is not an implementation task. Wait for the first game selection and an approved game specification task before creating prototype code.
