# Current Task

## Task Title

Task 13: First Web Prototype Implementation

## Current Stage

Web Prototype

## Owner

Codex

## Execution Mode

Implementation Task

## Next Actor

Codex, after Human approval of Task 12 prototype plan

## Human Responsibilities

* Review `docs/current_game/prototype_plan.md`.
* Approve the prototype scope or request changes.
* After Codex implements the prototype, play it and judge gameplay feel.

## ChatGPT Responsibilities

* Help the human review the prototype plan if needed.
* Review Codex output after implementation.
* Help define follow-up fixes after prototype review.

## Codex Responsibilities

* Implement only the approved web prototype scope.
* Keep game rules separate from UI/presentation.
* Use the level data and rules from `docs/current_game/prototype_plan.md`.
* Run or document manual checks.
* Update workflow and documentation after implementation.
* Stop at blockers instead of expanding scope.

## Goal

Create the first playable local web prototype for **Bubble Tea Sort**.

The prototype should validate the core loop:

```text
select top pearl
→ move to valid cup
→ clear 3 matching pearls
→ clear all cups
→ win level
```

## Background

Task 12 produced the approved prototype plan:

```text
docs/current_game/prototype_plan.md
```

The game specification is located at:

```text
docs/current_game/game_spec.md
```

Codex should implement the first prototype using the approved plan. This is the first gameplay implementation task.

## Scope

Codex should implement:

* `prototype_web/` local web app
* main menu
* gameplay screen
* win popup
* restart level button
* next level flow
* level label
* move counter
* optional tutorial text per level
* 5 hand-authored levels from the prototype plan
* cup capacity of 3
* tap-to-select source cup
* tap-to-place target cup
* same-cup tap cancels selection
* invalid feedback for empty source and full target
* match clear when a cup has 3 identical pearls
* win detection when all cups are empty
* simple placeholder cup and pearl visuals
* simple clear/win feedback
* prototype README with run instructions

## Out of Scope

Do not implement:

* Unity files
* reusable factory modules
* drag-and-drop
* shop
* economy
* ads
* IAP
* boosters
* audio
* haptics
* analytics
* save/load
* level select screen
* final art assets
* procedural level generation
* locked cups
* hidden pearls
* move limits
* undo
* settings screen
* release preparation

## Input Files

Codex should read:

```text
AGENTS.md
workflow/current_task.md
workflow/handover.md
workflow/blockers.md
workflow/review_requests.md
docs/current_game/prototype_plan.md
docs/current_game/game_spec.md
docs/architecture.md
docs/ai_workflow.md
docs/codex_workflow.md
docs/documentation_rules.md
```

## Expected Output

Codex should create or update:

```text
prototype_web/
prototype_web/README.md
workflow/handover.md
workflow/review_requests.md
workflow/done.md
docs/changelog.md
```

## Files To Create Or Update

Expected prototype files:

```text
prototype_web/README.md
prototype_web/index.html
prototype_web/package.json
prototype_web/src/main.js
prototype_web/src/game/state.js
prototype_web/src/game/rules.js
prototype_web/src/game/level_loader.js
prototype_web/src/game/validation.js
prototype_web/src/ui/screens.js
prototype_web/src/ui/board_view.js
prototype_web/src/ui/cup_view.js
prototype_web/src/ui/popup.js
prototype_web/src/data/levels.js
prototype_web/src/data/pearls.js
prototype_web/src/styles/main.css
```

Codex may simplify file count if it preserves clear separation between game rules, UI, and data.

## Implementation Requirements

* Use plain HTML/CSS/JavaScript unless an existing package setup requires otherwise.
* Avoid heavy dependencies.
* Run locally in a browser.
* Keep game rules in `src/game/`.
* Keep level and pearl data in `src/data/`.
* Keep UI rendering and input in `src/ui/`.
* Keep level data JSON-compatible.
* Use the exact 5 levels from `docs/current_game/prototype_plan.md`, unless a minimal solvability correction is required.
* Document any level-data correction in `workflow/handover.md`.
* Do not create reusable modules.
* Do not create Unity files.

## Documentation Requirements

After implementation, update:

```text
workflow/handover.md
workflow/done.md
workflow/review_requests.md
docs/changelog.md
```

If implementation reveals a real spec conflict, update or request review for:

```text
docs/current_game/game_spec.md
workflow/blockers.md
```

## Quality Requirements

The prototype should be:

* small
* playable
* readable on mobile portrait layout
* easy to inspect
* easy to modify
* aligned with prototype plan
* friendly to Unity porting
* not over-engineered

## Tests Or Checks

No automated test framework is required.

Codex should run available checks if a package script exists.

Manual checks to document in `workflow/done.md`:

* Main menu loads.
* Play button starts Level 1.
* Empty source tap gives invalid feedback.
* Non-empty source tap selects top pearl.
* Same source tap cancels selection.
* Valid move works.
* Full target move fails visibly.
* Move counter increments only after valid moves.
* 3 matching pearls clear.
* Mixed pearls do not clear.
* Win popup appears when all cups are empty.
* Restart resets the current level.
* Next Level loads the next level.
* Level 5 completion shows final completion state.
* Page refresh does not need to preserve progress.
* Layout is usable at mobile portrait width.

## Stop Conditions

Codex must stop and update `workflow/blockers.md` and `workflow/handover.md` if:

* task scope conflicts with `docs/current_game/prototype_plan.md`
* level data appears unsolvable and cannot be minimally corrected
* implementation requires final art direction
* implementation requires Unity-specific decisions
* implementation would require a broad framework or reusable module
* scope expands beyond this task
* a major gameplay decision is needed
* required files are missing or contradictory

## Review Needed

Review type:

* [x] Human review
* [x] ChatGPT review
* [ ] Code review
* [x] Gameplay review
* [ ] Asset review
* [ ] Architecture review

Review questions after Codex implementation:

* Is the core loop understandable?
* Does tap-to-select feel acceptable?
* Are clears satisfying enough?
* Are 5 levels enough for first review?
* Should drag-and-drop be added next?
* Should movement restrictions be added next?
* Should the project continue to art direction and Unity port planning?

## Commit Instructions

Commit after completing the task?

* [ ] No

Suggested branch if the human later enables Git workflow:

```text
prototype/bubble-tea-sort-web
```

Suggested commit message if commits are requested later:

```text
feat(prototype): add bubble tea sort web prototype
```

## Notes For Codex

This is the first gameplay implementation task.

Stay small. Do not build a general puzzle engine. Do not create modules. Do not add features outside the prototype plan.
