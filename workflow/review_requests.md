# Review Requests

## Current Review Status

Status:

```text
Task 13 web prototype implementation needs Human + ChatGPT gameplay review.
```

## Active Review Requests

## Review Request: Bubble Tea Sort Web Prototype

## Review Type

Human gameplay review + ChatGPT prototype review

## What Changed

Implemented the first playable local web prototype for Bubble Tea Sort.

The prototype includes:

* main menu
* gameplay screen
* win popup
* restart flow
* next-level flow
* 5 hand-authored levels
* tap-to-select and tap-to-place interaction
* invalid move feedback
* match clearing for 3 identical pearls
* win detection
* placeholder cup and pearl visuals
* local run instructions
* level validation script

## Files Or Areas To Review

```text
prototype_web/
prototype_web/README.md
prototype_web/src/data/levels.js
prototype_web/src/game/rules.js
prototype_web/src/ui/
prototype_web/src/styles/main.css
workflow/handover.md
workflow/done.md
```

## Questions

* Is the core loop understandable?
* Does tap-to-select / tap-to-place feel acceptable on mobile?
* Are the clears satisfying enough for the next iteration?
* Are the 5 levels readable and useful for first review?
* Should drag-and-drop remain postponed or become the next task?
* Should movement later require same-color target compatibility?
* Should the project continue to art direction or Unity port planning?

## Risk Level

Medium

## Recommended Next Step

Play the local prototype, record prototype review notes, and prepare the next scoped task.

## Status

Open

## Date Opened

2026-07-07

## Resolution

Leave empty until review is complete.
