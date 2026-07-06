---

name: unity-porting
description: Convert an approved prototype or game specification into a Unity-ready implementation plan or Unity project structure.
-----------------------------------------------------------------------------------------------------------------------------------

# Unity Porting Skill

## Purpose

Use this skill when planning or implementing a Unity version of a game.

The goal is to port approved gameplay, rules, UI flow, data, and assets into Unity without blindly copying prototype architecture.

## When To Use

Use this skill for tasks involving:

* Unity port planning
* Unity project structure
* mapping prototype behavior to Unity
* creating Unity scripts
* creating Unity scenes or prefabs
* defining ScriptableObject or JSON data usage
* implementing Unity input/UI
* integrating save, ads, IAP, analytics, or platform services

## Required Input

Read relevant files:

```text
workflow/current_task.md
workflow/handover.md
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
docs/current_game/prototype_review.md
docs/current_game/art_direction.md
docs/current_game/asset_list.md
docs/current_game/unity_port_plan.md
docs/architecture.md
docs/module_rules.md
```

If available, inspect:

```text
prototype_web/
assets/exported/
```

## Core Porting Principle

Do not blindly recreate the web prototype.

Port the product intent:

* rules
* game state
* player actions
* screen flow
* feedback
* level data
* asset intent
* gameplay feel

Adapt the implementation to Unity:

* scene lifecycle
* prefabs
* MonoBehaviours
* Canvas UI
* animation
* input system
* asset import
* mobile build settings

## Recommended Unity Structure

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
      Resources/
```

If the project uses Addressables later, document that decision before changing structure.

## Layer Responsibilities

## Core

Contains engine-independent or mostly engine-independent logic.

Examples:

* game state
* rule evaluation
* win/loss checks
* level validation
* data models

## Data

Contains data structures and loading logic.

Examples:

* level definitions
* item definitions
* booster definitions
* economy definitions
* ScriptableObject definitions
* JSON import models

## Gameplay

Contains Unity-facing gameplay controllers.

Examples:

* board controller
* item controller
* level controller
* interaction controller

## UI

Contains screens, popups, and UI flow.

Examples:

* main menu
* gameplay HUD
* win popup
* pause popup
* settings
* shop

## Services

Contains reusable game services.

Examples:

* save service
* audio service
* analytics service
* ad service
* IAP service

## Platform

Contains platform-specific integrations.

Examples:

* Android service
* iOS service
* Unity Ads
* Google Play services
* App Store services

## Unity Mapping Checklist

Before implementation, define:

* [ ] scenes
* [ ] prefabs
* [ ] scripts
* [ ] data format
* [ ] UI screens
* [ ] input behavior
* [ ] save behavior
* [ ] asset import rules
* [ ] audio mapping
* [ ] platform services
* [ ] test plan

## Scene Rule

Keep the first Unity port simple.

Typical early scenes:

```text
Boot
MainMenu
Gameplay
```

For very small games, a single scene may be acceptable, but document why.

## Prefab Rule

Use prefabs for repeated visual/gameplay objects.

Examples:

* item
* slot
* tile
* card
* bubble
* popup
* button style

Avoid creating prefabs before object behavior is clear.

## Script Rule

Avoid one giant `GameManager`.

Prefer smaller responsibilities:

```text
GameController
LevelLoader
BoardController
InputController
WinConditionChecker
SaveService
UIFlowController
AudioFeedbackService
```

Not every game needs all of these. Start small and grow as needed.

## Data Rule

Prefer data-driven content for:

* levels
* items
* boosters
* rewards
* shop entries
* tutorial steps

Choose JSON or ScriptableObjects based on project needs.

Default early approach:

* JSON for prototype-friendly data
* ScriptableObjects for Unity editor-friendly content later if needed

Record the choice in:

```text
docs/current_game/unity_port_plan.md
docs/decisions.md
```

if it affects future work.

## Input Rule

Mobile-first controls should be explicit.

Define:

* tap
* drag
* drop
* swipe
* hold
* cancellation behavior
* invalid action feedback

Input should call gameplay actions rather than directly changing state randomly.

## UI Rule

Unity UI should follow the approved UI flow.

Document screen mapping:

```text
Game Spec Screen → Unity Canvas/Panel/Controller
```

Example:

```text
Win Popup → WinPopupView + WinPopupController
```

## Asset Rule

Only integrate approved assets as final.

If assets are placeholder, label them clearly.

If assets are missing, create a blocker instead of inventing final visuals.

## Save Rule

Save implementation should be based on the game spec.

Do not save random runtime state unless it is defined.

Common saved data:

* current level
* unlocked levels
* currency
* owned items
* selected skin
* settings
* remove ads status

## Monetization Rule

Do not add ads or IAP unless the game spec or current task explicitly requests it.

Monetization should not be added before the core game is stable unless the task is specifically about monetization setup.

## Testing Rule

For Unity tasks, run available checks if possible.

Examples:

* compile check
* edit mode tests
* play mode tests
* build check
* manual scene run

If not available, document manual checks.

## Stop Conditions

Stop and update `workflow/blockers.md` if:

* Unity port plan is missing
* prototype review is not approved
* required assets are missing
* game rules are unclear
* data mapping is unclear
* major architecture choice is required
* monetization direction is unclear but needed
* task would require broad refactor

Stop and update `workflow/review_requests.md` if:

* Unity scene is implemented and needs gameplay feel review
* UI needs visual review
* asset integration needs approval
* architecture needs review
* device testing is needed

## Documentation Updates

After meaningful Unity work, update:

```text
docs/current_game/unity_port_plan.md
workflow/handover.md
workflow/done.md
workflow/next_actions.md
docs/changelog.md
```

If behavior changes, update:

```text
docs/current_game/game_spec.md
```

If a reusable system emerges, update:

```text
docs/module_index.md
```

as a candidate only, unless approved otherwise.

## Output Summary Format

Use:

```markdown
# Unity Porting Task Result

## Completed

## Files Changed

## Unity Mapping

## Tests Or Manual Checks

## Known Issues

## Review Needed

## Next Recommended Task
```

## Anti-Patterns

Avoid:

* putting all behavior into one GameManager
* porting DOM structure directly into Unity
* mixing save, UI, gameplay, and ads in one class
* adding monetization before gameplay is approved
* integrating unapproved assets as final
* ignoring mobile aspect ratios
* hardcoding level content inside MonoBehaviours
* changing core rules during port without updating game spec
