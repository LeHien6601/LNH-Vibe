---

name: game-design-review
description: Review a game idea, game specification, prototype plan, or gameplay change for clarity, scope, fun potential, release readiness, and implementation risk.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Game Design Review Skill

## Purpose

Use this skill when reviewing game design documents, gameplay ideas, prototype plans, mechanics, progression, UI flow, or player experience.

The goal is to improve the game before implementation expands.

## When To Use

Use this skill for tasks involving:

* game idea review
* game spec review
* core loop review
* mechanic review
* level/progression review
* prototype scope review
* gameplay feel feedback
* UI flow review
* release scope review

## Required Input

Read relevant files:

```text
docs/current_game/idea.md
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
docs/current_game/prototype_review.md
workflow/review_requests.md
workflow/handover.md
```

Read these if relevant:

```text
docs/game_spec_standard.md
docs/pipeline.md
docs/north_star.md
```

## Review Goals

Check whether the design is:

* clear
* small enough for current stage
* fun enough to prototype
* easy to understand
* suitable for mobile
* suitable for Unity porting
* not over-scoped
* testable by Codex
* aligned with Game Factory goals

## Review Checklist

## 1. Core Loop

Check:

* Is the core loop short and understandable?
* Can it be explained in one sentence?
* Does the player repeat meaningful actions?
* Is there a satisfying result after each action?
* Is the loop suitable for short mobile sessions?

If unclear, request revision before implementation.

## 2. Player Actions

Check:

* Are player actions listed?
* Is each input clear?
* Is invalid behavior defined?
* Is feedback defined?
* Can Codex implement the action without guessing?

## 3. Rules

Check:

* Are game rules testable?
* Are edge cases defined?
* Are exceptions listed?
* Are win/loss conditions clear?
* Can rules be implemented separately from UI?

## 4. Scope

Check:

* Is prototype scope separate from release scope?
* Are out-of-scope items listed?
* Is the first version small enough?
* Are future ideas postponed instead of added now?

Default recommendation:

Ship a small playable prototype before adding economy, shop, complex progression, or advanced polish.

## 5. Progression

Check:

* Is progression simple enough for first release?
* Is difficulty curve described?
* Are new mechanics introduced gradually?
* Are levels/content data-driven where useful?

## 6. UI Flow

Check:

* Are required screens listed?
* Is navigation clear?
* Are popups defined?
* Does gameplay screen have all necessary information?
* Is mobile portrait layout considered?

## 7. Feedback

Check:

* Does every major player action have feedback?
* Are success, failure, invalid action, reward, and completion feedback defined?
* Are visual, audio, and haptic feedback considered?

## 8. Unity Porting

Check:

* Are Unity porting notes included?
* Is core logic separated from presentation?
* Are data structures Unity-friendly?
* Are likely scenes, prefabs, and scripts identified?

## 9. Release Readiness

Check whether release scope includes:

* sufficient levels/content
* save/load
* settings
* QA checklist
* store listing
* screenshots plan
* monetization plan if needed

Do not require release features during the early prototype unless the task explicitly targets release planning.

## 10. Risks

Check:

* Is the main risk listed?
* Is there a mitigation?
* Are open questions documented?
* Does any open question block implementation?

## Output Format

When writing review output, use:

```markdown
# Game Design Review

## Summary

## Strengths

## Issues

## Required Changes Before Codex

## Optional Improvements

## Risks

## Recommended Next Task

## Approval Status
Approved / Needs Revision / Blocked
```

## Approval Rules

Use `Approved` only if Codex can safely implement the next task without guessing.

Use `Needs Revision` if the spec is mostly clear but needs improvement.

Use `Blocked` if a major decision is missing.

## Stop Conditions

Stop and request human or ChatGPT input if:

* core loop is unclear
* prototype scope is too broad
* major mechanics conflict
* win/loss condition is undefined
* art direction is required before progress
* gameplay feel must be judged by human
* monetization affects game design but is undecided

## Documentation Updates

If review changes direction, update:

```text
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
workflow/review_requests.md
workflow/handover.md
docs/changelog.md
```

If a major decision is made, update:

```text
docs/decisions.md
```

## Anti-Patterns

Avoid:

* adding features just because they are interesting
* approving vague ideas for implementation
* mixing prototype and release scope
* ignoring mobile controls
* ignoring Unity porting
* treating AI-generated design as final without human approval
* over-designing before a playable prototype exists
