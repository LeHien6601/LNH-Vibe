# Architecture

## Purpose

This document defines the architecture direction for the Game Factory system.

The goal is to support fast production of release-ready casual games while keeping the system understandable, reusable, and easy to port to Unity.

This document is not a fixed engine design. It is a set of architecture principles and boundaries that guide implementation.

## Core Architecture Goal

Build a production pipeline and reusable code structure that allows games to be:

* designed clearly
* prototyped quickly
* reviewed easily
* implemented safely
* ported to Unity efficiently
* improved through reusable modules
* released with consistent quality

## Architecture Philosophy

The system should grow from real products.

Do not build a large generic framework before completing real games.

Start with one complete game.
Extract reusable systems only after they are proven useful.
Keep game-specific code separate from reusable factory code.

## High-Level Structure

Recommended repository structure:

```text
game-factory/
  docs/
  workflow/
  templates/
  skills/
  modules/
  examples/
  tools/
  prototype_web/
  unity_project/
  assets/
  release/
```

## Folder Roles

## `docs/`

Stores project knowledge and decisions.

This is the main source of truth for ChatGPT, Codex, and future AI tools.

Should contain:

* vision
* north star
* pipeline
* architecture
* game specification standard
* module rules
* current game docs
* decisions
* changelog
* release checklist

## `workflow/`

Stores current working state.

Should contain:

* current stage
* current task
* blockers
* review requests
* handover
* next actions
* done log

Codex should use this folder to understand the active task.

ChatGPT should use this folder to continue work without requiring full repo context.

## `templates/`

Stores reusable templates.

Examples:

* game spec template
* art direction template
* Codex task template
* review request template
* release checklist template
* Unity port plan template

Templates should be generic but practical.

## `skills/`

Stores reusable AI workflow skills.

Each skill should describe a repeatable workflow, such as:

* web prototype building
* Unity porting
* code review
* asset generation
* release quality check
* module refactor

A skill should not be a vague prompt.
It should define clear steps, rules, expected outputs, and stop conditions.

## `modules/`

Stores reusable production modules.

A module may be code, documentation, data schema, or workflow.

Examples:

* save system
* level system
* UI flow system
* economy system
* ads/IAP system
* audio feedback system
* asset pipeline system

Modules should not be created too early.
A module should usually be extracted after at least two games show the same need.

## `examples/`

Stores completed or sample games.

Examples are used to prove the factory.

Each example should include:

* game spec
* prototype
* implementation notes
* Unity port notes
* post-release review if available

## `tools/`

Stores helper scripts and utilities.

Examples:

* level validator
* asset name validator
* config generator
* sprite export helper
* build checklist helper

Tools should solve repeated production problems.

Do not create tools for one-time problems unless the cost is very low.

## `prototype_web/`

Stores the active web prototype.

The web prototype should prioritize speed, clarity, and easy review.

It may use:

* HTML
* CSS
* JavaScript
* TypeScript
* SVG
* Canvas

The prototype should validate gameplay and UI flow before Unity porting.

## `unity_project/`

Stores the Unity version when porting begins.

Unity-specific code should handle:

* rendering
* Unity lifecycle
* scene management
* prefabs
* input bridge
* platform services
* ads/IAP integration
* build settings

Where practical, game rules should remain separate from Unity-specific rendering and lifecycle code.

## `assets/`

Stores source and exported assets.

Recommended structure:

```text
assets/
  source/
  exported/
  references/
  prompts/
  reviews/
```

Assets should follow naming rules and be connected to the asset list.

## `release/`

Stores release-related outputs.

Examples:

* store listing
* screenshots plan
* feature graphic plan
* release notes
* build notes
* final checklist

## Architecture Layers

The system should separate work into these conceptual layers:

```text
Product Layer
↓
Game Design Layer
↓
Game Logic Layer
↓
Presentation Layer
↓
Platform Layer
↓
Release Layer
```

## Product Layer

Defines why the game exists and what it must achieve.

Includes:

* product goal
* target audience
* monetization direction
* release scope
* quality bar

Stored mainly in:

```text
docs/current_game/game_spec.md
docs/current_game/release_plan.md
```

## Game Design Layer

Defines how the game works from the player’s perspective.

Includes:

* core loop
* mechanics
* rules
* level progression
* UI flow
* feedback

Stored mainly in:

```text
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
```

## Game Logic Layer

Contains engine-independent rules when practical.

Includes:

* game state
* rule evaluation
* win/loss checking
* level parsing
* progression logic
* economy calculations

This layer should avoid depending directly on rendering, DOM, or Unity lifecycle.

## Presentation Layer

Handles how the game looks and feels.

Includes:

* UI
* animation
* visual effects
* audio feedback
* layout
* interaction feedback

This layer can differ between web prototype and Unity version.

## Platform Layer

Handles platform-specific services.

Includes:

* Unity lifecycle
* Web browser APIs
* local storage
* mobile input
* ads
* IAP
* analytics
* build tools

Platform code should not contain core gameplay rules unless unavoidable.

## Release Layer

Handles publishing preparation.

Includes:

* QA checklist
* store listing
* screenshots
* feature graphics
* release notes
* privacy/policy notes
* build validation

## Portability Rule

Game logic should be portable where practical.

Good:

```text
Game rule: If 3 matching items are in a slot, clear them.
```

Bad:

```text
Inside Unity Button OnClick, directly destroy matching items and update level progress.
```

The first can be reused across web and Unity.
The second is harder to test, port, and refactor.

## Data-Driven Rule

Content should be data-driven where iteration is expected.

Good candidates for data-driven design:

* levels
* item definitions
* booster definitions
* reward values
* difficulty settings
* shop items
* skins
* tutorial steps

Do not overcomplicate early prototypes.
Hardcoding is acceptable for throwaway experiments, but release-bound systems should move toward structured data.

## Dependency Direction

Preferred dependency direction:

```text
Product Docs
→ Game Spec
→ Game Logic
→ Presentation
→ Platform
```

Avoid making game logic depend on presentation or platform code.

## Web Prototype Architecture

The web prototype should normally use this structure:

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

The exact technology may change, but the separation should remain:

* `game/` for rules and state
* `ui/` for display and interaction
* `data/` for levels and content
* `assets/` for visual/audio files

## Unity Architecture Direction

The Unity version should normally separate:

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
      Resources or Addressables/
```

Recommended conceptual mapping:

```text
Game Logic      → Core / Gameplay scripts
Level Data      → JSON or ScriptableObjects
UI Flow         → Canvas screens and popup controllers
Assets          → Prefabs, sprites, audio clips
Platform        → Ads, IAP, analytics, save services
```

## Unity Porting Rule

Do not blindly recreate the web prototype in Unity.

Port:

* rules
* data
* screen flow
* interaction design
* asset intent
* gameplay feel

Adapt:

* rendering
* animation
* input handling
* layout system
* platform services

## Module Extraction Rule

A system should not become a stable module immediately.

Recommended path:

```text
Game-specific implementation
→ reused in second game
→ refactored into candidate module
→ reused in third game
→ promoted to stable module
```

Exceptions are allowed for obvious infrastructure such as:

* documentation templates
* workflow files
* basic save interface
* basic level data schema

## Documentation Rule

Every meaningful architecture change should update documentation.

Update at least one of:

```text
docs/architecture.md
docs/module_rules.md
docs/module_index.md
docs/decisions.md
docs/changelog.md
workflow/handover.md
```

## Codex Architecture Rule

Codex should not make major architecture changes without a task that explicitly allows it.

Major architecture changes include:

* moving folders
* creating new modules
* changing data format
* changing dependency direction
* replacing framework/library
* changing Unity port strategy
* changing save/economy architecture

If Codex detects that a major architecture decision is needed, it should update:

```text
workflow/blockers.md
workflow/review_requests.md
```

and stop.

## Architecture Quality Criteria

A good architecture for this project should be:

* easy to understand
* easy to document
* easy to prototype
* easy to port to Unity
* easy to test where practical
* not over-engineered
* not dependent on chat memory
* clear about what is reusable and what is game-specific

## Anti-Patterns

Avoid:

* building a giant engine before shipping a game
* mixing gameplay rules directly into UI code
* making Unity code the only source of game rules
* creating modules before reuse is proven
* allowing Codex to perform broad refactors without approval
* leaving documentation outdated
* treating generated assets as approved assets without review
* hiding important decisions only in chat history
* implementing release features before prototype validation
