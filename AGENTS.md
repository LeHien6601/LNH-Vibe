# AGENTS.md

## Purpose

This file defines how Codex should work inside the Game Factory repository.

Codex should treat this file as the main operating guide before making changes.

## Project Mission

Game Factory is an AI-assisted production system for creating polished, release-ready casual games that can be prototyped quickly and ported to Unity efficiently.

The goal is not to build a giant engine first.

The goal is to ship complete games, learn from real production, and gradually extract reusable systems.

## Core Rule

Do not guess major product direction.

If a task requires human judgment, ChatGPT review, missing assets, or architecture approval, stop and update the appropriate workflow files.

## Source of Truth

Use this priority order:

```text
1. Human-approved decisions
2. docs/
3. workflow/
4. source code
5. chat history or task wording
```

If documentation and code conflict, do not silently choose one. Record the conflict in:

```text
workflow/blockers.md
workflow/review_requests.md
workflow/handover.md
```

## Required Files To Check Before Work

Before starting meaningful work, read:

```text
workflow/current_task.md
workflow/handover.md
workflow/blockers.md
workflow/review_requests.md
docs/architecture.md
docs/ai_workflow.md
docs/codex_workflow.md
docs/documentation_rules.md
```

If the task is game-specific, also read:

```text
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
docs/current_game/art_direction.md
docs/current_game/unity_port_plan.md
```

when those files exist and are relevant.

## Role

Codex is the implementation engineer.

Codex should:

* implement scoped tasks
* edit files
* refactor when explicitly requested
* run tests or checks when available
* update documentation after meaningful changes
* update workflow state
* prepare commits when configured

Codex should not:

* invent major game direction
* expand scope without approval
* create stable modules without approval
* approve art quality
* approve gameplay feel
* approve release readiness
* silently ignore blockers
* continue through unclear requirements

## Standard Work Lifecycle

```text
1. Read current task.
2. Read relevant docs.
3. Inspect relevant files.
4. Implement only the requested scope.
5. Run checks or tests if available.
6. Update docs and workflow files.
7. Record blockers or review requests if needed.
8. Summarize work.
9. Commit or push only if configured/requested.
```

## Scope Discipline

Stay inside the current task.

If the current task asks for a level loader, do not also add a shop, economy, new UI framework, and monetization.

If a useful improvement is discovered outside the task, write it in:

```text
workflow/next_actions.md
```

Do not implement it unless explicitly approved.

## Stop Conditions

Stop and update workflow files when:

* task scope is unclear
* rules conflict
* product direction is unclear
* gameplay feel needs human review
* visual quality needs approval
* required assets are missing
* major architecture change is needed
* module promotion is needed
* Unity porting direction is unclear
* implementation would require broad refactor
* tests fail due to unclear expected behavior
* release readiness must be judged

Use:

```text
workflow/blockers.md
```

for blocked progress.

Use:

```text
workflow/review_requests.md
```

for completed work that needs review.

Always update:

```text
workflow/handover.md
```

when stopping.

## Documentation Requirements

After meaningful work, update at least:

```text
workflow/handover.md
workflow/done.md
docs/changelog.md
```

If the task changes game behavior, update:

```text
docs/current_game/game_spec.md
```

if relevant.

If the task changes architecture, update:

```text
docs/architecture.md
docs/decisions.md
docs/module_index.md
```

if relevant.

If the task identifies future work, update:

```text
workflow/next_actions.md
```

## Commit Rules

If Git workflow is enabled and the task asks for commits, use clear commit messages:

```text
type(scope): summary
```

Examples:

```text
docs(factory): add initial workflow rules
feat(prototype): add level loader
fix(ui): correct gameplay layout
chore(workflow): update handoff
```

Do not commit incomplete work as complete.

If blocked, commit only if the task allows it and the blocker is documented.

## Branch Naming

Use clear branch names when creating branches:

```text
task/<short-task-name>
docs/<doc-name>
prototype/<feature-name>
unity/<feature-name>
fix/<issue-name>
```

Examples:

```text
task/init-repo-structure
docs/skill-library
prototype/core-loop
unity/level-loader
fix/save-load-bug
```

## Code Style

Prefer:

* simple readable code
* small files
* clear names
* pure game logic where practical
* data-driven content where practical
* separation between game logic and presentation
* separation between platform adapters and core rules
* comments only when they clarify intent

Avoid:

* giant manager classes
* hidden global state
* unnecessary frameworks
* clever abstractions
* mixing UI with gameplay rules
* hardcoding content that should be data-driven
* broad refactors without approval

## Web Prototype Rule

For web prototypes:

* prioritize fast playable validation
* keep game logic separate from UI where practical
* keep data in clear structures
* make behavior easy to review
* avoid unnecessary dependencies
* preserve a clear path to Unity porting

Recommended structure:

```text
prototype_web/
  README.md
  src/
    game/
    ui/
    data/
    assets/
```

## Unity Rule

For Unity work:

* avoid putting everything in one GameManager
* separate core logic from Unity presentation
* prefer data-driven configuration where practical
* keep scene/prefab logic understandable
* document Unity mapping
* update Unity porting docs

Recommended structure:

```text
unity_project/
  Assets/
    Game/
      Scripts/
        Core/
        Data/
        Gameplay/
        UI/
        Services/
        Platform/
      Prefabs/
      Scenes/
      Art/
      Audio/
```

## Module Rule

Do not create stable modules early.

Default lifecycle:

```text
Game-Specific
→ Candidate
→ Reusable
→ Stable
```

Only promote module status with human approval.

If repeated logic is found, record it in:

```text
workflow/next_actions.md
docs/module_index.md
```

only when appropriate.

## Asset Rule

Codex may organize and integrate assets.

Codex should not approve final asset quality.

If assets are missing, unclear, or visually unapproved, stop and request review.

Asset blockers should include:

* asset name
* purpose
* expected format
* expected size
* style requirement
* where it is used
* why it blocks progress

## Skills

Use skills when the task matches a reusable workflow.

Available initial skills:

```text
skills/game-design-review/SKILL.md
skills/web-prototype-builder/SKILL.md
skills/unity-porting/SKILL.md
skills/release-quality-check/SKILL.md
```

A skill does not override this file.

Priority:

```text
1. AGENTS.md
2. Human-approved docs
3. Relevant SKILL.md
4. Current task
```

If a skill conflicts with approved docs, stop and request clarification.

## Quality Bar

Every output should be:

* scoped
* reviewable
* documented
* consistent with current docs
* friendly to Unity porting
* not over-engineered
* useful for producing a release-ready game

## Final Reminder

The goal is not to generate as much code as possible.

The goal is to help produce complete, polished games through a repeatable and maintainable production pipeline.
