# Module Index

## Purpose

This document tracks all modules and candidate modules in the Game Factory system.

A module should not be considered part of the factory unless it is listed here.

## Module Status Values

```text
Game-Specific
Candidate
Reusable
Stable
Deprecated
Archived
```

## Stability Levels

```text
Experimental
Low
Medium
High
Production
```

## Module Table

| Module   | Status | Stability | Purpose                           | Used By | Docs Status | Next Action                                 |
| -------- | ------ | --------- | --------------------------------- | ------- | ----------- | ------------------------------------------- |
| None yet | -      | -         | No modules have been created yet. | -       | -           | Build first game before extracting modules. |

## Candidate Modules To Watch

These are possible future modules, but they should not be created as stable modules yet.

| Candidate              | Why It May Be Needed                                                   | Create When                                                                              |
| ---------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Level System           | Most casual games need structured levels or content data.              | The first game has a working level format and a second game needs similar level loading. |
| Save System            | Release-ready games need persistent progress and settings.             | The first game needs save/load and the structure can be reused.                          |
| UI Flow System         | Mobile casual games often reuse screen and popup flow.                 | Two games share similar menu, gameplay, win, pause, and settings flows.                  |
| Economy System         | Many games may use soft currency, rewards, boosters, or shop items.    | At least two games require similar reward or currency logic.                             |
| Ads/IAP System         | Mobile games may use ads and remove-ads IAP.                           | A release-bound game requires monetization integration.                                  |
| Asset Pipeline         | All games need organized asset generation, review, export, and import. | The first game produces enough assets to reveal repeated workflow needs.                 |
| Audio Feedback System  | Games need consistent UI, success, fail, and reward sounds.            | Two games use similar feedback categories.                                               |
| Analytics Event System | Release games may need consistent event tracking.                      | A game reaches release preparation and analytics events are defined.                     |
| Unity Port System      | Web-to-Unity porting is central to the factory.                        | The first web prototype begins Unity port planning.                                      |
| QA Checklist System    | Every release needs consistent quality gates.                          | The first game reaches QA and polish.                                                    |

## Current Policy

No stable gameplay module should be created before the first complete game proves the workflow.

Initial work should focus on:

1. documentation
2. workflow structure
3. templates
4. first game specification
5. first playable prototype

## Module Creation Template

When creating a module, add an entry like this:

| Module      | Status    | Stability | Purpose                                         | Used By | Docs Status          | Next Action         |
| ----------- | --------- | --------- | ----------------------------------------------- | ------- | -------------------- | ------------------- |
| save_system | Candidate | Low       | Handles local save/load and progress snapshots. | Game 1  | README + spec needed | Test in first game. |

## Module Detail Format

For each real module, add a detail section.

## `<module_name>`

### Status

Candidate / Reusable / Stable / Deprecated / Archived

### Stability

Experimental / Low / Medium / High / Production

### Purpose

Describe what the module does.

### Owns

*

### Does Not Own

*

### Used By

*

### Dependencies

*

### Documentation

* [ ] README.md
* [ ] module_spec.md
* [ ] usage.md
* [ ] integration.md
* [ ] changelog.md
* [ ] examples

### Known Limitations

*

### Next Action

*

## Promotion Log

Record module promotions here.

| Date | Module | From | To | Reason |
|---|---|---|---|
| - | - | - | - | - |

## Deprecation Log

Record deprecated modules here.

| Date | Module | Reason | Replacement |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

## Module Review Questions

Before changing the module index, ask:

* Is this system actually reused?
* Is the boundary clear?
* Is this still game-specific?
* Does this reduce future work?
* Does this make the current game harder to ship?
* Is documentation updated?
* Does Codex know how to use it safely?

## Codex Rule

Codex should update this file only when:

* a task explicitly asks to create/update a module
* a system is promoted, deprecated, or archived
* a candidate module is identified after implementation
* documentation status changes

Codex should not promote modules to stable without human approval.
