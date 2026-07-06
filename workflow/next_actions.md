# Next Actions

## Purpose

This file lists recommended next actions after the current task.

Next actions are suggestions. They are not automatic permission for Codex to continue into major work.

Codex should not start a next action until it becomes the approved `workflow/current_task.md`.

## Immediate Next Action

## Task 10: First Game Selection

Goal:

Choose the first small casual game to prove the Game Factory pipeline.

Expected output:

```text
docs/current_game/idea.md
workflow/current_task.md
workflow/handover.md
workflow/review_requests.md
docs/changelog.md
```

This is a Human + ChatGPT decision task. Codex should not choose the game independently.

## Recommended Upcoming Tasks

## Task 9: Repository Structure & Initial Codex Task

Purpose:

Prepare the repo so Codex can create files and maintain workflow state safely.

Owner:

Human + ChatGPT → define task
Codex → implement structure

Status:

Done.

## Task 10: First Game Selection

Purpose:

Choose the first small casual game to prove the Game Factory pipeline.

Owner:

Human + ChatGPT

Status:

Ready.

Suggested target:

```text
Small casual puzzle game
```

Selection criteria:

* small scope
* mobile-friendly
* easy to prototype
* easy to port to Unity
* clear core loop
* good for testing reusable level/UI/save workflow

## Task 11: First Game Specification

Purpose:

Create the first game spec using:

```text
templates/game_spec_template.md
```

Output:

```text
docs/current_game/idea.md
docs/current_game/game_spec.md
```

Status:

Blocked until Task 10 chooses the first game.

## Task 12: First Web Prototype Plan

Purpose:

Define the minimum playable prototype for the first game.

Output:

```text
docs/current_game/prototype_plan.md
workflow/current_task.md
```

Status:

Blocked until Task 11 is approved.

## Task 13: First Web Prototype Implementation

Purpose:

Codex implements the first playable web prototype.

Output:

```text
prototype_web/
prototype_web/README.md
workflow/handover.md
workflow/review_requests.md
```

Status:

Blocked until Task 12 is approved.

## Task 14: Prototype Review

Purpose:

Human + ChatGPT review gameplay feel, scope, UI clarity, and continuation decision.

Output:

```text
docs/current_game/prototype_review.md
workflow/next_actions.md
```

Status:

Blocked until Task 13 is complete.

## Optional Future Actions

These should not be started yet:

* create first reusable module
* create economy system
* create ads/IAP system
* create full Unity project
* create asset generation pipeline
* create release checklist system
* create analytics system

## Current Recommendation

Finish the factory setup first.

Then choose the first game.

Do not begin implementation before the first game specification and prototype plan are approved.
