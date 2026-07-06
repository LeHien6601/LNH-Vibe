# Workflow Stages

## Purpose

This document defines the active workflow stages used by the Game Factory system.

The pipeline describes the full production process.
The workflow stages describe how work should be tracked inside the repository.

## Workflow Folder

The repository should contain a `workflow/` folder.

Recommended structure:

```text
workflow/
  current_stage.md
  current_task.md
  next_actions.md
  blockers.md
  review_requests.md
  handover.md
  done.md
```

These files help ChatGPT, Codex, and the human developer stay synchronized.

## `workflow/current_stage.md`

### Purpose

Shows the current production stage.

### Should Include

* current stage name
* current game name
* current milestone
* active owner
* status
* last updated date

### Example

```markdown
# Current Stage

Game: First Puzzle Game
Stage: Web Prototype
Milestone: Minimum Playable Prototype
Owner: Codex
Status: In Progress
```

## `workflow/current_task.md`

### Purpose

Defines the active task Codex or ChatGPT should work on.

### Required Fields

```markdown
# Current Task

## Goal

## Scope

## Out of Scope

## Input Files

## Expected Output

## Files To Update

## Quality Requirements

## Stop Conditions
```

### Rule

Codex should not start implementation if `current_task.md` is too vague.

## `workflow/next_actions.md`

### Purpose

Lists the next recommended actions after the current task.

### Should Include

* immediate next step
* likely follow-up tasks
* optional improvements
* postponed ideas

### Rule

Next actions are suggestions, not automatic permission.

Codex should not continue into major new work without an approved current task.

## `workflow/blockers.md`

### Purpose

Tracks anything preventing progress.

### Common Blockers

* missing asset
* unclear design decision
* gameplay review needed
* architecture conflict
* missing dependency
* unclear Unity mapping
* release policy concern

### Required Format

```markdown
# Blocker

## Type

## Description

## Why It Blocks Progress

## Required Decision Or Asset

## Suggested Options

## Owner
```

### Rule

When Codex hits a blocker, it should update this file and stop instead of guessing.

## `workflow/review_requests.md`

### Purpose

Stores requests for human or ChatGPT review.

### Review Types

* gameplay review
* code review
* asset review
* UX review
* architecture review
* release readiness review

### Required Format

```markdown
# Review Request

## Review Type

## What Changed

## Files Or Screens To Review

## Questions

## Risk Level

## Recommended Next Step
```

## `workflow/handover.md`

### Purpose

Summarizes the current project state when switching between ChatGPT, Codex, and the human developer.

### Required Format

```markdown
# Handover

## Current State

## Completed Work

## Files Changed

## Important Decisions

## Known Issues

## Blockers

## Next Recommended Task

## Notes For ChatGPT

## Notes For Codex
```

### Rule

Codex should update this file after completing meaningful work.

ChatGPT can use this file to understand the project without reading the full repository.

## `workflow/done.md`

### Purpose

Logs completed tasks.

### Required Format

```markdown
# Done

## Completed Task

## Date

## Summary

## Files Changed

## Tests Or Checks

## Follow-Up Needed
```

## Stage Status Values

Use these status values:

```text
Not Started
Ready
In Progress
Blocked
Needs Review
Approved
Done
Postponed
Cancelled
```

## Ownership Values

Use these owner values:

```text
Human
ChatGPT
Codex
Human + ChatGPT
ChatGPT + Codex
Human + Codex
```

## Review Gates

The workflow should include review gates at important points.

Required review gates:

1. Idea approval
2. Game spec approval
3. Prototype approval
4. Art direction approval
5. Asset approval
6. Unity port plan approval
7. QA approval
8. Release approval
9. Post-release review

## Codex Work Rule

Codex should work from `workflow/current_task.md`.

A good Codex task must include:

* clear goal
* limited scope
* explicit out-of-scope section
* expected files
* docs to update
* quality requirements
* stop conditions

## ChatGPT Work Rule

ChatGPT should work from:

* `docs/`
* `workflow/handover.md`
* `workflow/blockers.md`
* `workflow/review_requests.md`
* user feedback

ChatGPT should produce:

* decisions
* specs
* review notes
* updated task definitions
* prompts
* architecture guidance

## Human Work Rule

The human developer is responsible for:

* approving direction
* judging gameplay feel
* approving visual quality
* testing on real devices
* deciding release readiness
* publishing the product

## Standard Task Lifecycle

```text
Draft Task
→ Approve Task
→ Codex Implements
→ Codex Updates Docs
→ Codex Requests Review Or Marks Done
→ Human/ChatGPT Reviews
→ Fix Or Continue
```

## Blocker Lifecycle

```text
Blocker Found
→ Codex Stops
→ Codex Updates blockers.md
→ Human/ChatGPT Resolves
→ current_task.md Updated
→ Codex Continues
```

## Review Lifecycle

```text
Review Requested
→ Human/ChatGPT Reviews
→ Decision Recorded
→ Fix Task Created If Needed
→ Work Continues
```

## Decision Recording

Major decisions should be recorded in:

```text
docs/decisions.md
```

Examples:

* choosing a genre
* choosing web prototype technology
* choosing Unity architecture direction
* changing monetization strategy
* promoting a system into a module
* cutting a feature from release scope

## Changelog Rule

Meaningful changes should be recorded in:

```text
docs/changelog.md
```

The changelog should include:

* date
* task
* summary
* files changed
* impact
* follow-up if any

## Minimum Workflow For First Game

For the first game, the workflow can be simplified to:

```text
Idea
→ Game Spec
→ Web Prototype
→ Review
→ Art Direction
→ Unity Port Plan
→ Unity Port
→ QA
→ Release Kit
```

Avoid adding unnecessary process before the first game is proven.

## Workflow Success Criteria

The workflow is working if:

* current project status is clear
* next task is clear
* blockers are visible
* review needs are visible
* ChatGPT can continue from docs
* Codex can continue from tasks
* the human developer can make decisions without digging through chat history
