# Changelog

## Purpose

This document records meaningful changes to the Game Factory project.

The changelog helps the human developer, ChatGPT, Codex, and future AI tools understand what changed over time.

## Changelog Rule

Record meaningful changes, not every tiny edit.

A change should be recorded when it affects:

* documentation
* workflow
* architecture
* game design
* source code behavior
* module status
* assets
* Unity porting
* release preparation
* blockers or review state

## Entry Format

Use this format:

```markdown
## YYYY-MM-DD

### Added

- 

### Changed

- 

### Fixed

- 

### Removed

- 

### Files

- 

### Follow-Up

- 
```

Sections with no content may be omitted.

## Initial Changelog

## YYYY-MM-DD

### Added

* Added initial documentation foundation for the Game Factory project.
* Added vision and north star documents.
* Added production pipeline and workflow stages.
* Added game specification standard and game spec template.
* Added architecture and module rules.
* Added AI workflow and Codex workflow rules.
* Added documentation rules, decision log, and changelog structure.

### Files

* `docs/vision.md`
* `docs/north_star.md`
* `docs/pipeline.md`
* `docs/workflow_stages.md`
* `docs/game_spec_standard.md`
* `docs/architecture.md`
* `docs/module_rules.md`
* `docs/module_index.md`
* `docs/ai_workflow.md`
* `docs/codex_workflow.md`
* `docs/documentation_rules.md`
* `docs/decisions.md`
* `docs/changelog.md`
* `templates/game_spec_template.md`
* `templates/codex_task_template.md`
* `templates/handover_template.md`
* `templates/decision_record_template.md`

### Follow-Up

* Create AGENTS.md.
* Create initial workflow files.
* Create first Codex task.
* Define the first game idea and game specification.

## Change Categories

Use these categories when useful:

## Added

New files, sections, modules, workflows, systems, or assets.

## Changed

Updates to existing behavior, rules, docs, workflows, or architecture.

## Fixed

Corrections to bugs, mistakes, broken docs, bad references, or invalid assumptions.

## Removed

Deleted files, removed features, retired docs, or cut scope.

## Deprecated

Features, modules, workflows, or docs that should no longer be used.

## Security

Security-related changes.

## Release

Release preparation or publishing-related changes.

## Codex Changelog Rule

After a meaningful Codex task, Codex should update the changelog with:

* what changed
* affected files
* follow-up if any

If the task is blocked, Codex may record the blocker instead of a normal changelog entry.

## ChatGPT Changelog Rule

When ChatGPT helps produce new docs, templates, or major decisions, the changelog should be updated.

## Human Changelog Rule

When the human developer approves a major direction or release decision, it should be recorded here or in `docs/decisions.md`.

## Changelog Quality Checklist

A changelog entry should answer:

* What changed?
* Why does it matter?
* Which files were affected?
* What should happen next?

## Anti-Patterns

Avoid:

* logging every typo
* omitting major architecture changes
* hiding changes only in Git commits
* writing vague entries like “updated stuff”
* failing to include follow-up work

## 2026-07-06

### Added

* Added root project README.
* Added placeholder README files for the initial repository structure.
* Added empty production folders for future modules, examples, tools, web prototype, Unity work, assets, and release materials.

### Changed

* Updated workflow state for Task 9 completion.
* Prepared `workflow/current_task.md` for Task 10: First Game Selection.

### Files

* `README.md`
* `docs/README.md`
* `workflow/README.md`
* `templates/README.md`
* `skills/README.md`
* `modules/README.md`
* `examples/README.md`
* `tools/README.md`
* `prototype_web/README.md`
* `unity_project/README.md`
* `assets/README.md`
* `release/README.md`
* `workflow/current_task.md`
* `workflow/next_actions.md`
* `workflow/handover.md`
* `workflow/done.md`
* `workflow/review_requests.md`
* `workflow/current_stage.md`
* `docs/changelog.md`

### Follow-Up

* Human + ChatGPT should complete Task 10: First Game Selection.
* Codex should not begin gameplay implementation until the first game spec is approved.

## YYYY-MM-DD

### Added

* Added workflow state templates for tracking current stage, current task, next actions, blockers, review requests, handoff, and completed work.

### Files

* `workflow/current_stage.md`
* `workflow/current_task.md`
* `workflow/next_actions.md`
* `workflow/blockers.md`
* `workflow/review_requests.md`
* `workflow/handover.md`
* `workflow/done.md`

### Follow-Up

* Prepare Task 9: Repository Structure & Initial Codex Task.
* Review whether the workflow files are lightweight enough for the first implementation phase.
