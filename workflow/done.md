# Done

## Purpose

This file records completed tasks.

Codex and ChatGPT should update this file after meaningful work.

## Completed Tasks

## Task 1: Vision & North Star

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created the initial vision and north star documents for the Game Factory project.

### Files Changed

```text
docs/vision.md
docs/north_star.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Use the vision and north star to guide pipeline, architecture, and Codex workflow docs.

---

## Task 2: Production Pipeline

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created the production pipeline and workflow stages documents.

### Files Changed

```text
docs/pipeline.md
docs/workflow_stages.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Use the pipeline to define game specification and workflow state.

---

## Task 3: Game Specification Standard

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created the standard format for describing games and a reusable game specification template.

### Files Changed

```text
docs/game_spec_standard.md
templates/game_spec_template.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Use the template for the first game after game selection.

---

## Task 4: Architecture & Module Rules

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created architecture direction, module rules, and the module index.

### Files Changed

```text
docs/architecture.md
docs/module_rules.md
docs/module_index.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Use these rules to prevent over-engineering and guide future module extraction.

---

## Task 5: AI Workflow & Handoff Rules

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created AI collaboration rules, Codex workflow rules, Codex task template, and handover template.

### Files Changed

```text
docs/ai_workflow.md
docs/codex_workflow.md
templates/codex_task_template.md
templates/handover_template.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Use these rules to coordinate ChatGPT, Codex, and human review.

---

## Task 6: Documentation Rules & Decision Records

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created documentation rules, decision log, changelog structure, and decision record template.

### Files Changed

```text
docs/documentation_rules.md
docs/decisions.md
docs/changelog.md
templates/decision_record_template.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Keep docs and decisions updated as implementation begins.

---

## Task 7: Skill Library & AGENTS.md

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created AGENTS.md and initial Codex skill files for game design review, web prototype building, Unity porting, and release quality checking.

### Files Changed

```text
AGENTS.md
skills/game-design-review/SKILL.md
skills/web-prototype-builder/SKILL.md
skills/unity-porting/SKILL.md
skills/release-quality-check/SKILL.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Use AGENTS.md and skills to guide Codex work.

---

## Task 8: Workflow State Templates

Date: YYYY-MM-DD
Owner: Human + ChatGPT
Status: Draft Complete

### Summary

Created initial workflow state files for tracking current stage, current task, next actions, blockers, review requests, handoff, and completed work.

### Files Changed

```text
workflow/current_stage.md
workflow/current_task.md
workflow/next_actions.md
workflow/blockers.md
workflow/review_requests.md
workflow/handover.md
workflow/done.md
```

### Tests Or Checks

Manual review required.

### Follow-Up Needed

Prepare Task 9: Repository Structure & Initial Codex Task.

---

## Task 9: Repository Structure & Initial Codex Task

Date: 2026-07-06
Owner: Codex
Status: Complete

### Summary

Created the initial repository structure, added root and placeholder README files, and prepared `workflow/current_task.md` for the next Human + ChatGPT selection task.

### Files Changed

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
workflow/done.md
workflow/review_requests.md
workflow/current_stage.md
docs/changelog.md
```

### Tests Or Checks

Manual checks:

* Confirmed required workflow and documentation files exist.
* Confirmed initial top-level folder structure exists through placeholder README files.
* Confirmed no gameplay, Unity implementation, assets, or modules were created.

### Follow-Up Needed

Human + ChatGPT should choose the first game before Codex begins gameplay implementation.

---

## Task 13: First Web Prototype Implementation

Date: 2026-07-07
Owner: Codex
Status: Complete

### Summary

Implemented the first playable local web prototype for Bubble Tea Sort under `prototype_web/`.

The prototype includes main menu, gameplay, win popup, restart, next-level flow, 5 levels, tap-to-select controls, invalid feedback, match clearing, win detection, placeholder visuals, and local run instructions.

### Files Changed

```text
prototype_web/README.md
prototype_web/index.html
prototype_web/package.json
prototype_web/server.js
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
workflow/current_stage.md
workflow/current_task.md
workflow/next_actions.md
workflow/handover.md
workflow/done.md
workflow/review_requests.md
docs/changelog.md
```

### Tests Or Checks

Automated:

```text
npm run validate
```

Result:

```text
Validated 5 levels.
```

Manual/browser checks:

* Main menu loads.
* Play button starts Level 1.
* Tapping an empty cup as source gives invalid feedback.
* Tapping a non-empty cup selects its top pearl.
* Tapping the selected source again cancels selection.
* Moving to a non-full target succeeds.
* Moving to a full target fails visibly.
* Move counter increments only after valid moves.
* A cup with 3 matching pearls clears.
* A cup with mixed pearls does not clear.
* Win popup appears when all cups are empty.
* Restart restores the original level data.
* Next Level loads the next level.
* Levels 1 through 5 can be completed.
* Level 5 completion shows final completion state.
* Refreshing the page starts from the main menu and does not need to preserve progress.
* Layout remains usable around mobile portrait width.
* Browser console showed no errors or warnings during verification.

### Follow-Up Needed

Human + ChatGPT should play the prototype and complete Task 14: Prototype Review.
