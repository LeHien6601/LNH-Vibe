# Module Rules

## Purpose

This document defines when and how reusable modules should be created in the Game Factory system.

The goal is to avoid two common problems:

1. Over-engineering too early.
2. Duplicating the same systems across many games.

A module should make future games faster and better, not make the current game harder to finish.

## What Is a Module?

A module is a reusable system that solves a repeated production need.

A module may include:

* source code
* data schema
* documentation
* templates
* tests
* examples
* integration guide
* Unity porting notes
* Codex usage notes

A module is not just a folder.
A module must have a clear purpose, boundary, and reuse case.

## Module Examples

Possible modules:

* Save System
* Level System
* UI Flow System
* Economy System
* Ads/IAP System
* Audio Feedback System
* Input System
* Asset Pipeline
* Release Checklist System
* Analytics Event System

## Module Lifecycle

Recommended lifecycle:

```text
Game-Specific Code
→ Candidate Module
→ Reusable Module
→ Stable Module
```

## Stage 1: Game-Specific Code

This is code written for one game.

It is allowed to be simple.

It does not need to be reusable yet.

Use this stage when:

* the mechanic is unproven
* only one game needs it
* the design may change
* fast iteration matters more than abstraction

## Stage 2: Candidate Module

A candidate module is a system that may become reusable.

Create a candidate module when:

* a second game needs a similar system
* the same pattern appears repeatedly
* the system has a stable boundary
* reuse would reduce future work
* documentation can describe it clearly

Candidate modules should be marked clearly.

Example:

```text
modules/candidate_level_system/
```

## Stage 3: Reusable Module

A reusable module has been tested across more than one game.

Promote a candidate module when:

* it has been used in at least two games
* the public interface is understandable
* the module has documentation
* the module has examples or usage notes
* game-specific assumptions have been removed
* Codex can use it without guessing

## Stage 4: Stable Module

A stable module is trusted production infrastructure.

Promote to stable only when:

* it has been used successfully in multiple games
* it has clear docs
* it has known limitations
* it has minimal game-specific coupling
* it has a change policy
* it improves production speed

Stable modules should not be changed casually.

## Module Promotion Rule

Default rule:

A system should be used by at least two games before becoming a reusable module.

Stronger rule:

A system should be used by at least three games before becoming stable.

Exceptions are allowed for very basic infrastructure, such as:

* documentation templates
* task templates
* basic workflow files
* simple data validation tools

## Module Boundary Rules

A module should have a clear boundary.

Each module should define:

* responsibility
* inputs
* outputs
* dependencies
* what it owns
* what it does not own
* extension points
* Unity mapping if relevant

## Good Module Boundary Example

```text
Level System

Owns:
- loading level data
- validating level data
- exposing level configuration to game logic

Does not own:
- rendering level UI
- playing animations
- deciding store rewards
- showing ads
```

## Bad Module Boundary Example

```text
Game Manager

Owns:
- everything
```

Avoid god objects and vague managers.

## Module Documentation Requirements

Each module should include:

```text
modules/<module_name>/
  README.md
  module_spec.md
  usage.md
  integration.md
  changelog.md
  examples/
```

Minimum required documentation:

## `README.md`

Should explain:

* what the module does
* when to use it
* when not to use it
* current status
* basic example

## `module_spec.md`

Should explain:

* responsibilities
* inputs
* outputs
* data structures
* lifecycle
* dependencies
* limitations

## `usage.md`

Should explain:

* how Codex should use the module
* how a game should integrate it
* common mistakes
* stop conditions

## `integration.md`

Should explain:

* web prototype integration
* Unity integration
* required files
* optional files
* platform notes

## `changelog.md`

Should record meaningful module changes.

## Module Status Values

Use these status values:

```text
Game-Specific
Candidate
Reusable
Stable
Deprecated
Archived
```

## Module Index Rule

Every module or candidate module must be listed in:

```text
docs/module_index.md
```

The index should include:

* module name
* status
* purpose
* owner
* used by games
* stability
* documentation status
* next action

## Module Naming Rules

Use clear lowercase folder names with underscores:

Good:

```text
save_system
level_system
ui_flow_system
economy_system
ads_iap_system
```

Bad:

```text
ManagerStuff
Core2
NewSystemFinal
ReusableThings
```

## Module Dependency Rules

Modules should avoid unnecessary dependencies on each other.

Preferred:

```text
Level System → Game Logic
Save System → Data Snapshot
UI Flow System → Screen State
```

Avoid:

```text
Save System depends on UI buttons.
Level System directly shows popups.
Economy System directly controls gameplay scene objects.
```

## Engine Independence Rule

Where practical, reusable modules should separate:

```text
Core Logic
Platform Adapter
Unity Adapter
Web Adapter
```

Example:

```text
modules/save_system/
  core/
  adapters/
    web_local_storage/
    unity_player_prefs/
    unity_json_file/
```

Do not overbuild adapters before they are needed.
But keep the boundary clear enough to add them later.

## Data Schema Rule

If a module uses structured data, define the schema.

Examples:

* level schema
* save schema
* item schema
* shop schema
* analytics event schema

The schema can start simple.

It should become stricter when reused across games.

## Testing Rule

Modules should include tests or test notes when practical.

Minimum for early modules:

* manual test checklist
* example input
* expected output
* known edge cases

For stable modules, automated tests are preferred where possible.

## Codex Module Rule

Codex may create a module only when the current task explicitly asks for it.

If Codex sees repeated code and thinks it should be modularized, it should:

1. record the suggestion in `workflow/next_actions.md`
2. optionally create a review request
3. not perform broad refactor unless approved

## Refactor Rule

A refactor should have a clear reason.

Good reasons:

* second game needs the same system
* module boundary is now clear
* current implementation blocks Unity port
* duplicated code is causing bugs
* docs and implementation are out of sync

Bad reasons:

* “cleaner architecture” without product benefit
* premature abstraction
* creating a system for imagined future games
* making code more complex before release

## Game-Specific Override Rule

A game may override a module if needed.

However, overrides should be documented.

Record:

* what was changed
* why the base module was not enough
* whether the module should be improved later

## Deprecation Rule

A module should be deprecated when:

* it is no longer used
* a better module replaces it
* it became too complex
* it no longer matches the factory direction

Deprecated modules should be marked in:

```text
docs/module_index.md
modules/<module_name>/README.md
```

## Module Quality Checklist

Before promoting a module, check:

* [ ] It solves a repeated need.
* [ ] It has a clear boundary.
* [ ] It has documentation.
* [ ] It has example usage.
* [ ] It avoids game-specific assumptions.
* [ ] It supports Unity porting or explains why not.
* [ ] It has known limitations documented.
* [ ] It reduces future work.
* [ ] It does not make the current game harder to ship.

## Anti-Patterns

Avoid:

* creating modules before shipping a game
* making every system generic
* using “Manager” as a module boundary
* mixing UI, logic, save, and economy into one module
* promoting untested code to stable
* hiding module behavior in chat history
* letting Codex refactor across many modules without approval
* changing stable modules without updating docs
