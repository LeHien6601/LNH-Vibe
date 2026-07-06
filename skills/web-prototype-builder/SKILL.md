---

name: web-prototype-builder
description: Build or update a fast playable web prototype for validating game rules, UI flow, and gameplay feel before Unity porting.
--------------------------------------------------------------------------------------------------------------------------------------

# Web Prototype Builder Skill

## Purpose

Use this skill when creating or modifying a web prototype.

The goal is to validate gameplay quickly while preserving a clean path to Unity porting.

The prototype does not need to be final production architecture, but it must be understandable and reviewable.

## When To Use

Use this skill for tasks involving:

* creating a web prototype
* implementing core loop
* implementing game rules
* implementing level loading
* creating simple UI flow
* testing gameplay feel
* preparing Unity mapping from prototype behavior

## Required Input

Read relevant files:

```text
workflow/current_task.md
workflow/handover.md
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
docs/architecture.md
docs/game_spec_standard.md
```

Read these if relevant:

```text
docs/current_game/art_direction.md
docs/current_game/asset_list.md
docs/current_game/unity_port_plan.md
```

## Recommended Folder Structure

Use or adapt this structure:

```text
prototype_web/
  README.md
  package.json
  src/
    main.*
    game/
      state.*
      rules.*
      level_loader.*
      types.*
    ui/
      screens.*
      components.*
      layout.*
    data/
      levels.*
      items.*
    assets/
```

The exact language or framework may vary, but keep separation between:

* game logic
* UI/presentation
* data/content
* assets

## Core Rules

## 1. Build Small

Implement only the approved prototype scope.

Do not add release systems unless requested.

Usually avoid early:

* shop
* ads
* IAP
* analytics
* cloud save
* achievements
* complex meta progression
* procedural generation

## 2. Keep Logic Separate

Game rules should live outside direct UI event handlers where practical.

Good:

```text
ui input → game action → rule evaluation → state update → render
```

Bad:

```text
button click directly modifies DOM, checks win state, saves progress, and triggers rewards
```

## 3. Use Clear State

State should be inspectable and understandable.

Prefer explicit objects and arrays over hidden global behavior.

## 4. Use Data-Driven Content Where Useful

Levels and item definitions should be structured when the game is level-based.

Start simple, but avoid burying level data inside UI code.

## 5. Prioritize Playability

The prototype must be playable enough for human review.

A simple playable prototype is better than a large incomplete system.

## 6. Preserve Unity Porting Path

Document how prototype systems map to Unity.

When adding gameplay behavior, consider:

* What becomes a Unity script?
* What becomes a prefab?
* What becomes data?
* What stays as pure logic?

## Implementation Checklist

Before marking complete:

* [ ] Core loop is playable.
* [ ] Main player actions work.
* [ ] Main rule is implemented.
* [ ] Win condition is implemented if in scope.
* [ ] Invalid actions have feedback.
* [ ] Basic UI is usable.
* [ ] Prototype can run locally.
* [ ] Relevant docs are updated.
* [ ] Handoff is updated.
* [ ] Review request is created if gameplay feel needs review.

## README Requirement

`prototype_web/README.md` should include:

* how to run
* what is implemented
* what is not implemented
* known issues
* controls
* files of interest
* Unity porting notes if useful

## Data Requirement

If levels exist, include a clear format.

Example:

```json
{
  "levelId": 1,
  "difficulty": "easy",
  "items": [],
  "objectives": []
}
```

## Visual Rule

Placeholder visuals are acceptable during prototype.

But placeholders should be obvious and documented.

Do not treat placeholder assets as final approved assets.

## Testing Rule

Run available commands.

Examples:

```text
npm test
npm run lint
npm run build
npm run dev
```

If no tests exist, document manual checks.

Manual check examples:

* opened prototype
* completed level 1
* invalid action returns item
* win popup appears
* restart works

## Stop Conditions

Stop and update `workflow/blockers.md` if:

* core rules are unclear
* level data format is missing
* required assets are missing
* UI flow is undefined
* prototype scope conflicts with game spec
* a major architecture decision is needed

Stop and update `workflow/review_requests.md` if:

* prototype is playable but needs gameplay feel review
* UI layout needs review
* art direction needs review
* difficulty needs review

## Documentation Updates

After meaningful prototype work, update:

```text
prototype_web/README.md
workflow/handover.md
workflow/done.md
workflow/next_actions.md
docs/changelog.md
```

If behavior changed, update:

```text
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
```

If Unity mapping became clearer, update:

```text
docs/current_game/unity_port_plan.md
```

## Output Summary Format

Use this summary format:

```markdown
# Web Prototype Task Result

## Completed

## Files Changed

## How To Run

## Tests Or Manual Checks

## Known Issues

## Review Needed

## Next Recommended Task
```

## Anti-Patterns

Avoid:

* implementing too many features before core loop is reviewed
* mixing all code into one giant file
* hardcoding level content inside UI rendering
* adding monetization before gameplay is proven
* making prototype architecture more complex than needed
* ignoring Unity mapping
* continuing after missing design decisions
