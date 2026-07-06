# Production Pipeline

## Purpose

This document defines the standard production pipeline for creating games with the Game Factory system.

The pipeline turns a game idea into a release-ready product through clear stages, review points, and handoff rules between the human developer, ChatGPT, and Codex.

The goal is not to automate every decision. The goal is to make the production process repeatable, reviewable, and scalable.

## Pipeline Overview

Standard flow:

Idea
→ Game Specification
→ Prototype Planning
→ Web Prototype
→ Game Review
→ Art Direction
→ Asset Production
→ Implementation
→ Unity Port Planning
→ Unity Port
→ QA & Polish
→ Release Preparation
→ Post-Release Review
→ Factory Improvement

## Core Rule

Every stage should produce a clear output.

No stage should depend only on chat memory.

All important outputs should be saved into the repository as Markdown documents, source files, assets, or structured data.

## Stage 1: Idea

### Goal

Define the game concept at a high level.

### Main Questions

* What is the core fantasy?
* What is the core loop?
* What genre is it?
* Why would players continue playing?
* Is it small enough for the first release?
* Can it be prototyped quickly?
* Can it be ported to Unity cleanly?

### Output

* `docs/current_game/idea.md`

### Human Role

Choose the idea and approve whether it is worth exploring.

### ChatGPT Role

Help refine the idea, identify risks, and reduce scope.

### Codex Role

No implementation yet.

## Stage 2: Game Specification

### Goal

Turn the idea into a structured game spec.

### Required Content

* core loop
* win condition
* lose condition if any
* player actions
* game objects
* level structure
* UI flow
* progression
* content data
* monetization plan if relevant
* Unity porting notes
* release scope

### Output

* `docs/current_game/game_spec.md`

### Human Role

Approve the game scope.

### ChatGPT Role

Write and refine the specification.

### Codex Role

Read the spec later before implementation.

## Stage 3: Prototype Planning

### Goal

Define the minimum playable version.

### Main Questions

* What is the smallest playable version?
* What must be interactive?
* What can be placeholder?
* What should be excluded from the first prototype?
* What files or systems are needed?

### Output

* `docs/current_game/prototype_plan.md`
* `workflow/current_task.md`

### Human Role

Approve the prototype scope.

### ChatGPT Role

Break the prototype into Codex-ready tasks.

### Codex Role

Prepare to implement only the approved scope.

## Stage 4: Web Prototype

### Goal

Create a fast playable prototype, usually with web technology such as HTML, CSS, SVG, Canvas, or JavaScript/TypeScript.

The prototype is used to validate gameplay, flow, UI layout, and basic feel before Unity porting.

### Output

* `prototype_web/`
* prototype README
* updated `workflow/done.md`
* updated `workflow/next_actions.md`

### Human Role

Play the prototype and judge feel.

### ChatGPT Role

Review the prototype behavior and suggest improvements.

### Codex Role

Implement the prototype, fix bugs, and update docs.

### Stop Conditions

Codex should stop and request review if:

* gameplay feel needs human judgment
* rules are unclear
* UI direction is missing
* asset requirements are not defined
* the prototype scope is exceeded

## Stage 5: Game Review

### Goal

Decide whether the prototype is worth continuing.

### Review Questions

* Is the core loop understandable?
* Is it fun enough to improve?
* Is the scope still small enough?
* What must be fixed before Unity porting?
* What should be cut?
* What should be postponed?

### Output

* `docs/current_game/prototype_review.md`
* updated `docs/current_game/game_spec.md`
* updated `workflow/next_actions.md`

### Human Role

Make the final continue, revise, or stop decision.

### ChatGPT Role

Help analyze gameplay, UX, scope, and production risks.

### Codex Role

Do not continue major implementation until review is complete.

## Stage 6: Art Direction

### Goal

Define the visual direction before producing final assets.

### Required Content

* target style
* color palette
* shape language
* UI mood
* icon style
* background style
* animation feel
* asset resolution targets
* Unity import considerations

### Output

* `docs/current_game/art_direction.md`
* `docs/current_game/asset_list.md`

### Human Role

Approve the visual direction.

### ChatGPT Role

Create art direction, prompts, SVG concepts, and asset requirements.

### Codex Role

Use the asset list and import rules later.

## Stage 7: Asset Production

### Goal

Create, collect, organize, and validate assets needed for the game.

### Output

* `assets/source/`
* `assets/exported/`
* updated `docs/current_game/asset_list.md`
* updated `workflow/review_requests.md` if assets need approval

### Human Role

Approve final asset quality.

### ChatGPT Role

Generate asset prompts, review visual consistency, or create simple SVG assets when suitable.

### Codex Role

Organize assets, validate filenames, update references, and integrate approved assets.

### Stop Conditions

Codex should stop if:

* required asset is missing
* asset quality needs human review
* asset format is incorrect
* art direction conflicts with implementation needs

## Stage 8: Implementation

### Goal

Build the game according to the approved spec and prototype.

Implementation may happen in web, Unity, or both depending on the stage.

### Output

* source code
* updated module docs
* updated changelog
* updated workflow files
* tests or test notes when possible

### Human Role

Review gameplay feel and product direction.

### ChatGPT Role

Review architecture, code design, UX, and task breakdown.

### Codex Role

Implement bounded tasks, run checks, update docs, and commit changes.

### Implementation Rule

Codex should not perform broad uncontrolled changes.

Each task must define:

* goal
* scope
* files allowed or expected
* constraints
* expected output
* docs to update
* stop conditions

## Stage 9: Unity Port Planning

### Goal

Map the prototype and game systems into Unity architecture before porting.

### Required Content

* scene structure
* prefab mapping
* script mapping
* data mapping
* UI mapping
* input mapping
* asset import plan
* save system mapping
* monetization mapping if needed

### Output

* `docs/current_game/unity_port_plan.md`

### Human Role

Approve the Unity production direction.

### ChatGPT Role

Create the Unity port architecture and identify risks.

### Codex Role

Use this plan when implementing Unity code.

## Stage 10: Unity Port

### Goal

Implement the game in Unity while preserving the approved gameplay rules and product feel.

### Output

* `unity_project/`
* Unity scripts
* Unity scenes/prefabs when applicable
* updated `docs/current_game/unity_port_plan.md`
* updated changelog

### Human Role

Test on target device when possible.

### ChatGPT Role

Review Unity architecture and help solve technical issues.

### Codex Role

Implement Unity tasks, refactor, and update docs.

### Porting Rule

Game logic should remain as portable and data-driven as practical.

Unity-specific code should handle rendering, input, lifecycle, and platform integration.

## Stage 11: QA & Polish

### Goal

Improve the game until it meets release quality.

### QA Areas

* gameplay correctness
* UI clarity
* performance
* save/load behavior
* level progression
* ads/IAP behavior if used
* audio feedback
* visual polish
* device compatibility
* edge cases
* store policy readiness

### Output

* `docs/current_game/qa_report.md`
* `docs/current_game/polish_plan.md`
* updated `docs/release_checklist.md`

### Human Role

Final quality judgment.

### ChatGPT Role

Review QA results and suggest polish priorities.

### Codex Role

Fix bugs and implement approved polish tasks.

## Stage 12: Release Preparation

### Goal

Prepare the game for publishing.

### Required Content

* app name
* short description
* full description
* release notes
* screenshots plan
* feature graphic plan
* privacy-related notes
* monetization notes
* build checklist

### Output

* `release/store_listing/`
* `release/build_notes.md`
* `release/final_checklist.md`

### Human Role

Approve final store materials and publish.

### ChatGPT Role

Write and polish store text, screenshot copy, and release notes.

### Codex Role

Prepare files, organize outputs, and update release docs.

## Stage 13: Post-Release Review

### Goal

Learn from the completed game and improve the factory.

### Review Questions

* What was reusable?
* What was duplicated?
* What should become a module?
* What should stay game-specific?
* Which Codex tasks worked well?
* Which tasks caused blockers?
* Which docs were missing or unclear?
* What slowed release?

### Output

* `docs/current_game/post_release_review.md`
* updated `docs/module_index.md`
* updated `docs/decisions.md`
* updated `docs/roadmap.md`

### Human Role

Decide what to improve next.

### ChatGPT Role

Analyze lessons and propose improvements.

### Codex Role

Apply approved structural improvements.

## Stage 14: Factory Improvement

### Goal

Improve the reusable system based on real production experience.

### Possible Improvements

* extract reusable modules
* improve templates
* add skills
* refine AGENTS.md
* improve folder structure
* improve QA checklist
* improve Unity porting process
* improve asset workflow

### Output

* updated factory docs
* updated skills
* updated templates
* updated modules
* changelog entry

### Rule

Do not promote a system into a reusable module too early.

A system should usually be used by at least two games before becoming a stable factory module.

## Standard Handoff Format

Every handoff between ChatGPT, Codex, and the human developer should include:

* current stage
* completed work
* next recommended task
* blockers
* files changed
* review needed
* decision needed if any

## Standard Codex Stop Conditions

Codex should stop and request input when:

* product direction is unclear
* task scope is too broad
* required assets are missing
* gameplay feel needs review
* visual quality needs approval
* architecture decision is required
* implementation conflicts with documentation
* release quality cannot be judged automatically

## Pipeline Success Criteria

The pipeline is working if:

* each stage produces clear artifacts
* Codex can continue work without guessing
* ChatGPT can understand project state from docs
* the human developer can make decisions at review points
* each game improves the next game’s production speed and quality
