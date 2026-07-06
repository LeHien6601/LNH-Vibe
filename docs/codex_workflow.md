# Codex Workflow

## Purpose

This document defines how Codex should work inside the Game Factory repository.

Codex should behave like a careful implementation engineer. It should execute clear tasks, update project state, and stop when decisions or reviews are needed.

## Main Rule

Codex works from `workflow/current_task.md`.

If the task is missing, vague, too broad, or conflicts with documentation, Codex should not start major implementation.

## Required Context Before Work

Before starting a task, Codex should read:

```text
AGENTS.md
workflow/current_task.md
workflow/handover.md
workflow/blockers.md
workflow/review_requests.md
docs/architecture.md
docs/module_rules.md
docs/module_index.md
```

If the task is game-specific, also read:

```text
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
docs/current_game/art_direction.md
docs/current_game/unity_port_plan.md
```

when those files exist and are relevant.

## Standard Codex Task Lifecycle

```text
1. Read task
2. Confirm scope internally
3. Inspect relevant files
4. Implement only requested changes
5. Run checks/tests if available
6. Update documentation
7. Update workflow files
8. Summarize result
9. Commit/push if configured and requested
10. Stop or request review if needed
```

## Task Intake Checklist

Before implementing, verify:

* [ ] Goal is clear.
* [ ] Scope is limited.
* [ ] Out-of-scope is defined.
* [ ] Expected output is defined.
* [ ] Files to update are listed or obvious.
* [ ] Quality requirements are clear.
* [ ] Stop conditions are clear.
* [ ] No approval gate is currently blocking progress.

If any item is unclear, update `workflow/blockers.md` and stop.

## Scope Discipline

Codex should not expand the task.

Good behavior:

```text
Task asks for level loader.
Codex creates level loader, simple tests, and docs update.
```

Bad behavior:

```text
Task asks for level loader.
Codex also rewrites UI, adds economy, changes folder structure, and creates a shop.
```

## File Change Rules

Codex may change files directly related to the task.

Codex should avoid broad changes to:

* architecture docs
* module status
* folder structure
* game scope
* monetization
* release plan
* stable modules

unless the task explicitly allows it.

## Documentation Update Rule

Every meaningful implementation task should update at least one of:

```text
workflow/handover.md
workflow/done.md
workflow/next_actions.md
docs/changelog.md
```

If the task changes architecture, also update:

```text
docs/architecture.md
docs/decisions.md
docs/module_index.md
```

if relevant.

If the task changes game behavior, also update:

```text
docs/current_game/game_spec.md
```

if relevant.

## Blocker Rule

If Codex cannot continue safely, it should update:

```text
workflow/blockers.md
workflow/handover.md
```

and stop.

Common blockers:

* missing asset
* unclear rule
* unclear UI behavior
* design approval needed
* architecture decision needed
* missing dependency
* conflicting docs
* failing tests requiring product decision

## Review Request Rule

If work is complete but needs judgment, Codex should update:

```text
workflow/review_requests.md
workflow/handover.md
```

and stop.

Common review requests:

* gameplay feel review
* UI layout review
* asset quality review
* architecture review
* code review
* Unity port review
* release readiness review

## Stop Conditions

Codex must stop when:

* task requires new art not available
* task requires human approval
* task would change major architecture
* task would promote a module status
* task requires choosing monetization strategy
* task requires judging game fun
* task requires store release approval
* task conflicts with current docs
* task scope becomes too large

## Commit Rules

If Git workflow is enabled, Codex should commit only after:

* task is complete or clearly blocked
* docs/workflow files are updated
* tests/checks were run when available
* changes are summarized

Commit message style:

```text
type(scope): summary
```

Examples:

```text
docs(vision): add initial project north star
feat(prototype): add level loader
fix(ui): correct win popup layout
chore(workflow): update handoff after prototype task
```

## Branch Rules

For meaningful work, prefer task branches:

```text
task/<short-task-name>
docs/<doc-name>
fix/<issue-name>
prototype/<feature-name>
unity/<feature-name>
```

Examples:

```text
task/init-repo-structure
docs/ai-workflow
prototype/level-loader
unity/save-system
```

## Testing Rule

Codex should run available checks.

Examples:

* unit tests
* lint
* type check
* build
* local run
* asset validation script
* level validation script

If tests are unavailable, Codex should document manual checks in:

```text
workflow/done.md
```

## Generated Code Rule

Generated code should be understandable.

Avoid:

* overly clever abstractions
* giant files
* hidden global state
* unexplained magic numbers
* mixing UI and game rules
* premature framework creation

Prefer:

* small files
* clear names
* documented data shapes
* simple state flow
* testable rule functions
* separation between logic and presentation

## Module Rule

Codex should not create stable modules by itself.

If a reusable opportunity is found, Codex should write it in:

```text
workflow/next_actions.md
```

or request review in:

```text
workflow/review_requests.md
```

Possible wording:

```text
Candidate module identified: level_system.
Reason: level loading pattern may be reused in future puzzle games.
Recommendation: keep game-specific for now and revisit after second game.
```

## Asset Rule

Codex may organize and integrate assets, but should not approve visual quality.

If assets are missing or unapproved, Codex should stop and request review.

Asset-related blockers should include:

* asset name
* purpose
* required size/format
* style requirement
* where it will be used
* why it blocks progress

## Unity Rule

For Unity tasks, Codex should preserve the separation between:

```text
Core game logic
Unity adapter
Presentation/UI
Platform services
```

Codex should avoid putting all logic into one `GameManager`.

## Web Prototype Rule

For web prototype tasks, Codex should prioritize:

* fast iteration
* clear game logic
* readable state
* simple UI
* easy review
* easy Unity mapping

The prototype does not need production-quality architecture, but it should not be chaotic.

## Handoff Rule

After completing work, Codex should update `workflow/handover.md` with:

* what was done
* what changed
* tests/checks
* blockers
* next task
* notes for ChatGPT
* notes for Codex

## Done Rule

After completing work, Codex should append to `workflow/done.md`:

* task name
* date
* summary
* files changed
* tests/checks
* follow-up needed

## Changelog Rule

For meaningful changes, Codex should update:

```text
docs/changelog.md
```

Use this format:

```markdown
## YYYY-MM-DD

### Changed

- Summary of change.

### Files

- path/to/file

### Follow-Up

- Follow-up item if any.
```

## Quality Bar

Codex output should be:

* scoped
* documented
* readable
* easy to review
* consistent with architecture
* consistent with current game spec
* friendly to Unity porting
* not over-engineered

## Anti-Patterns

Avoid:

* continuing past blockers
* inventing product direction
* modifying large parts of the repo without approval
* creating stable modules too early
* ignoring docs
* skipping handoff updates
* adding features outside the task
* hiding important assumptions
* treating placeholder assets as final
* putting all logic into one manager
