# Game Factory

## Purpose

Game Factory is an AI-assisted production system for creating polished, release-ready casual games that can be prototyped quickly and ported to Unity efficiently.

The repository is organized so the human developer, ChatGPT, and Codex can share durable project context through documentation, workflow state, templates, skills, and implementation folders.

## Current Status

Status: Factory Setup
Owner: Human + ChatGPT + Codex

No game has been selected yet.
No gameplay code has been implemented yet.
No reusable modules have been promoted yet.

## Repository Structure

```text
docs/           Long-term project knowledge, decisions, architecture, and game specs.
workflow/       Current task state, blockers, review requests, handoff, and done log.
templates/      Reusable document and task templates.
skills/         Codex skill instructions for repeatable workflows.
modules/        Future reusable production modules.
examples/       Completed or sample games used to prove the factory.
tools/          Helper scripts and utilities for repeated production work.
prototype_web/  Active web prototype for the current game, when approved.
unity_project/  Unity project or Unity-facing implementation notes, when approved.
assets/         Source, exported, reference, prompt, and review assets.
release/        Release preparation materials and checklists.
```

## Operating Rules

Codex should start with:

```text
AGENTS.md
workflow/current_task.md
workflow/handover.md
workflow/blockers.md
workflow/review_requests.md
docs/architecture.md
docs/ai_workflow.md
docs/codex_workflow.md
docs/documentation_rules.md
```

If a task is game-specific, Codex should also read the relevant files under:

```text
docs/current_game/
```

## Next Step

The next project step is to select the first small casual game through Human + ChatGPT review before Codex begins gameplay implementation.
