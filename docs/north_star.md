# North Star

## One-Sentence Direction

Build a repeatable AI-assisted production pipeline that creates polished, release-ready casual games and can port them to Unity efficiently.

## Main Goal

The system should help produce complete games, not just prototypes.

Every workflow, module, document, and tool should move the project closer to this outcome:

A new game can be designed, prototyped, implemented, polished, ported to Unity, and prepared for release with less repeated work than the previous game.

## Guiding Principles

### 1. Ship First, Generalize Later

Do not build a large abstract framework before proving the workflow through real games.

Build the first complete game.
Extract reusable systems after they are proven useful.
Only promote a system into a module after it is needed by more than one game.

### 2. Product Quality Over Automation

Automation is useful only if it improves the final product.

The system should not generate low-quality games quickly. It should help create complete, polished, maintainable games faster.

### 3. Documentation Is the Source of Truth

Important knowledge should live in the repository, not only in chat history.

Every major decision, module, workflow, and limitation should be documented clearly.

### 4. AI Should Work From Clear Context

ChatGPT and Codex should not guess the project direction.

Before implementation, tasks should include:

* goal
* scope
* constraints
* affected files
* expected output
* quality requirements
* stop conditions

### 5. Codex Should Stop at Blockers

Codex should not continue blindly when a task needs human or ChatGPT input.

It should stop and create/update blocker or review documents when it needs:

* design approval
* asset generation
* gameplay feel review
* architecture decision
* unclear product direction
* release-quality judgment

### 6. Human Judgment Stays Central

The human developer decides what is fun, polished, valuable, and worth releasing.

AI can speed up work, but it should not replace creative and product judgment.

### 7. Keep Logic Portable

Game rules should be separated from rendering and platform-specific code as much as practical.

This makes it easier to prototype on web and port to Unity later.

### 8. Prefer Data-Driven Content

Levels, balance values, item definitions, economy settings, and similar content should be configurable where reasonable.

Avoid hardcoding content that will need frequent iteration.

### 9. Small Tasks Beat Large Tasks

Codex should receive small, bounded tasks.

Bad task:

Build the entire game factory.

Good task:

Create the initial folder structure and generate the Markdown files defined in the setup task. Do not implement gameplay yet.

### 10. Every Game Improves the Factory

Each new game should produce reusable knowledge.

After each game, review:

* what was reused
* what was duplicated
* what should become a module
* what should stay game-specific
* what slowed development
* what improved quality

## Current Strategic Focus

The current focus is not to build a system for thousands of games immediately.

The current focus is:

1. Define the production workflow.
2. Build one small release-ready game.
3. Port it cleanly to Unity.
4. Extract reusable modules.
5. Repeat with a second game.
6. Improve the factory based on real reuse.

## First Release Target

The first target game should be:

* small in scope
* casual
* mobile-friendly
* easy to prototype
* easy to test
* visually clear
* suitable for Unity porting
* capable of reaching release quality

Recommended first genre:

Casual puzzle.

## Decision Filter

Before adding any feature, module, tool, or workflow, ask:

Does this help create a better release-ready game faster?

If yes, consider it.

If no, postpone it.

## Anti-Goals

Avoid:

* building a generic engine too early
* designing for every possible genre
* adding systems before they are needed
* letting Codex make major product decisions alone
* treating prototypes as finished products
* ignoring documentation
* creating assets without art direction
* porting to Unity without clear mapping
* optimizing for speed while losing quality

## North Star Metric

The main metric is:

How much faster and more reliably can the next release-ready game be produced compared to the previous one?

Supporting metrics:

* time from idea to playable prototype
* time from prototype to Unity version
* percentage of reused modules
* number of manual fixes needed after Codex tasks
* number of blockers caused by unclear specs
* quality of final release checklist
* number of games completed using the pipeline
