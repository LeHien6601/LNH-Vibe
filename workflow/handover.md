# Handover

## Purpose

This file summarizes the current project state when switching between ChatGPT, Codex, and the human developer.

It should be updated after every meaningful work session.

## Current State

The Game Factory project is in the Factory Setup stage.

The repository documentation foundation, workflow state, skills, templates, and initial folder structure are now prepared.

No game has been selected yet.
No game code has been implemented yet.
No reusable modules have been created yet.

## Current Stage

Stage:

```text
Factory Setup
```

Milestone:

```text
Documentation Foundation
```

Owner:

```text
Human + ChatGPT
```

Status:

```text
Needs Review
```

## Completed Work

* Created Vision & North Star draft.
* Created Production Pipeline draft.
* Created Workflow Stages draft.
* Created Game Specification Standard draft.
* Created Game Spec Template draft.
* Created Architecture draft.
* Created Module Rules draft.
* Created Module Index draft.
* Created AI Workflow draft.
* Created Codex Workflow draft.
* Created Codex Task Template draft.
* Created Handover Template draft.
* Created Documentation Rules draft.
* Created Decision Log draft.
* Created Changelog draft.
* Created Decision Record Template draft.
* Created AGENTS.md draft.
* Created initial Skill Library draft.
* Created Workflow State Templates draft.
* Created Repository Structure draft.
* Prepared `workflow/current_task.md` for first game selection.

## Files Changed

```text
AGENTS.md
docs/vision.md
docs/north_star.md
docs/pipeline.md
docs/workflow_stages.md
docs/game_spec_standard.md
docs/architecture.md
docs/module_rules.md
docs/module_index.md
docs/ai_workflow.md
docs/codex_workflow.md
docs/documentation_rules.md
docs/decisions.md
docs/changelog.md
templates/game_spec_template.md
templates/codex_task_template.md
templates/handover_template.md
templates/decision_record_template.md
skills/game-design-review/SKILL.md
skills/web-prototype-builder/SKILL.md
skills/unity-porting/SKILL.md
skills/release-quality-check/SKILL.md
workflow/current_stage.md
workflow/current_task.md
workflow/next_actions.md
workflow/blockers.md
workflow/review_requests.md
workflow/handover.md
workflow/done.md
workflow/current_stage.md
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
```

## Tests Or Checks Performed

No automated tests were available.

Manual review needed:

* Check whether docs are too heavy for the first game.
* Check whether Codex stop conditions are clear.
* Check whether workflow files are enough for handoff.
* Check whether the initial repository structure is sufficient.
* Check whether `workflow/current_task.md` correctly pauses Codex until the first game is selected.

## Important Decisions

Initial decisions drafted:

* Use docs as the project source of truth.
* Build one complete game before extracting stable modules.
* Use web prototype first, then port to Unity for suitable casual games.
* Codex must stop at blockers instead of guessing.
* Human developer keeps final product, gameplay, art, and release approval.

## Known Issues

* Dates are placeholders and should be replaced when files are committed.
* First game has not been selected yet.
* No actual implementation has started yet.
* The documentation foundation may need simplification after first real use.

## Blockers

No active blockers.

## Review Needed

Review type:

* [x] Human review
* [x] ChatGPT review
* [ ] Code review
* [ ] Gameplay review
* [ ] Asset review
* [ ] Architecture review
* [ ] Release review

Review questions:

* Is the foundation clear enough to start Codex implementation?
* Are there too many docs for the first phase?
* Which docs should be considered required versus optional?
* Is the repository structure ready?
* Which first game should prove the pipeline?

## Next Recommended Task

Task 10: First Game Selection

Goal:

Choose the first small casual game to prove the Game Factory pipeline.

## Notes For ChatGPT

ChatGPT should continue by selecting or guiding selection of the first game.

Task 10 should include:

* first game candidate name
* reason for selection
* intended player experience
* rough scope boundaries
* why the game is practical for web prototype and Unity porting

## Notes For Codex

Codex should not implement gameplay yet.

Codex should wait for first game selection and an approved game specification task before creating prototype code.
