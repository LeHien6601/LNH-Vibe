# Changelog

## Purpose

This document records meaningful changes to the Game Factory project.

## 2026-07-07

### Added

* Added the Bubble Tea Sort first web prototype plan.
* Added exact prototype scope, excluded scope, screen flow, controls, rules, level data plan, and manual test checklist.
* Prepared Task 13 as a Codex-owned web prototype implementation task.
* Added the first playable Bubble Tea Sort web prototype under `prototype_web/`.
* Added 5 JSON-compatible prototype levels and pearl display data.
* Added game state, movement rules, level loading, and level validation code.
* Added main menu, gameplay screen, cup views, board view, and win popup UI.
* Added a dependency-free local static server for prototype review.

### Changed

* Updated workflow state from Task 12 planning to Task 13 implementation preparation.
* Clarified owner, execution mode, next actor, and responsibilities for the next task.
* Updated workflow state from prototype implementation to prototype review.
* Replaced the placeholder `prototype_web/README.md` with run instructions, controls, scope notes, and Unity mapping notes.

### Files

* `docs/current_game/prototype_plan.md`
* `prototype_web/README.md`
* `prototype_web/index.html`
* `prototype_web/package.json`
* `prototype_web/server.js`
* `prototype_web/src/main.js`
* `prototype_web/src/game/state.js`
* `prototype_web/src/game/rules.js`
* `prototype_web/src/game/level_loader.js`
* `prototype_web/src/game/validation.js`
* `prototype_web/src/data/levels.js`
* `prototype_web/src/data/pearls.js`
* `prototype_web/src/ui/screens.js`
* `prototype_web/src/ui/board_view.js`
* `prototype_web/src/ui/cup_view.js`
* `prototype_web/src/ui/popup.js`
* `prototype_web/src/styles/main.css`
* `workflow/current_stage.md`
* `workflow/current_task.md`
* `workflow/next_actions.md`
* `workflow/handover.md`
* `workflow/done.md`
* `workflow/review_requests.md`
* `docs/changelog.md`

### Follow-Up

* Human + ChatGPT should perform Task 14 prototype gameplay review.
* Decide whether the next task should be prototype iteration, art direction, or Unity port planning.
