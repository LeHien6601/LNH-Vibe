# Current Task

## Task Title

Task 14: Prototype Review

## Current Stage

Prototype Review

## Owner

Human + ChatGPT

## Execution Mode

Review Task

## Next Actor

Human + ChatGPT

## Goal

Review the first playable local web prototype for **Bubble Tea Sort** and decide the next production step.

## Background

Task 13 created the first playable web prototype under:

```text
prototype_web/
```

The prototype validates:

```text
select top pearl
-> move to valid cup
-> clear 3 matching pearls
-> clear all cups
-> win level
```

User instruction `next task` on 2026-07-07 was treated as Human approval to start Task 13 from the prepared prototype plan.

## Review Scope

Human + ChatGPT should review:

* whether the core loop is understandable
* whether tap-to-select and tap-to-place feel acceptable
* whether clear feedback is satisfying enough for a first prototype
* whether the 5 levels are readable and solvable
* whether levels feel too easy, too hard, or too similar
* whether invalid move feedback is clear
* whether the mobile portrait layout is usable
* whether the project should continue to iteration, art direction, or Unity port planning

## Out of Scope

Do not ask Codex to implement during this review task unless a new scoped implementation task is created.

Do not approve:

* final art quality
* release readiness
* monetization
* Unity implementation
* reusable module extraction

## Prototype Location

```text
prototype_web/
```

## How To Run

```bash
cd prototype_web
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Files To Review

```text
prototype_web/README.md
prototype_web/index.html
prototype_web/src/main.js
prototype_web/src/game/state.js
prototype_web/src/game/rules.js
prototype_web/src/game/level_loader.js
prototype_web/src/game/validation.js
prototype_web/src/data/levels.js
prototype_web/src/data/pearls.js
prototype_web/src/ui/screens.js
prototype_web/src/ui/board_view.js
prototype_web/src/ui/cup_view.js
prototype_web/src/ui/popup.js
prototype_web/src/styles/main.css
workflow/handover.md
workflow/done.md
workflow/review_requests.md
docs/changelog.md
```

## Review Questions

* Is the core loop understandable without outside explanation?
* Does tap-only input feel good enough for the next iteration?
* Should drag-and-drop be added next?
* Should movement later require same-color target compatibility?
* Are the placeholder visuals readable enough for continued gameplay testing?
* Should clear feedback be improved before Unity planning?
* Should the next task be prototype fixes, art direction, or Unity port planning?

## Expected Output

After review, Human + ChatGPT should create or update:

```text
docs/current_game/prototype_review.md
workflow/current_task.md
workflow/next_actions.md
workflow/handover.md
workflow/review_requests.md
docs/changelog.md
```

## Stop Conditions

Codex should not continue implementation until the review produces a new approved implementation task.

If review finds major design uncertainty, record it in:

```text
workflow/blockers.md
workflow/handover.md
```

## Notes For Codex

Do not continue into Task 15 without explicit Human or ChatGPT direction.

If asked to commit or push this prototype, use:

```text
feat(prototype): add bubble tea sort web prototype
```
