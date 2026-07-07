# First Game Idea

## Purpose

This document records the selected first game for the Game Factory pipeline.

Status: Approved for Task 11 specification draft  
Owner: I + ChatGPT  
Last Updated: 2026-07-07

## Selected Game

Working Title: **Bubble Tea Sort**

Game ID: `bubble_tea_sort`

One-Sentence Description:
A portrait mobile casual puzzle game where players move colorful tapioca pearls between cups to group matching pearls and clear compact levels.

Short Pitch:
Bubble Tea Sort is a small sorting puzzle built around a cozy boba tea theme. The player taps or drags pearls between transparent cups. When a cup contains three matching pearls, those pearls pop into a satisfying drink-completion effect. The goal is to clear all pearls from the board.

## Decision Participants

* I / Human Developer: final product decision maker and approver.
* ChatGPT: game selection advisor, scope reducer, and documentation assistant.
* Codex: not involved in choosing the game; Codex should wait for the approved game specification before implementation.

## Why This Game Was Selected

Bubble Tea Sort is selected because it is a strong first proof game for the Game Factory pipeline:

* Small scope: the first prototype can focus on cups, pearls, movement rules, match clearing, and win detection.
* Mobile-friendly: portrait layout, tap/drag controls, short levels, readable board.
* Easy web prototype: can be built with simple HTML/CSS/JS or SVG without final art assets.
* Unity-friendly: cups map cleanly to prefabs, pearls map to item prefabs, levels map to JSON or ScriptableObjects.
* Good factory test: exercises level data, basic UI flow, win popup, save-ready progression, interaction feedback, and later Unity porting.
* Art can stay simple: placeholder circles and cups are enough for the prototype; final art direction can come later.

## Intended Player Experience

The player should feel:

* relaxed while organizing messy cups
* satisfied when matching pearls pop
* clear about every valid and invalid move
* motivated to finish short levels quickly
* comfortable playing one-handed on mobile

The first version should feel like a clean, snackable puzzle, not a complex strategy game.

## Core Fantasy

Organize colorful boba pearls into clean matching sets and complete cute bubble tea cups.

Fantasy keywords:

* organizing
* cleaning
* matching
* popping
* cozy drink shop
* light puzzle solving

## Rough Core Loop

```text
Observe cups and pearls
→ Select a pearl or cup
→ Move pearl to a valid cup
→ Complete a set of three matching pearls
→ Pop/clear the matched set
→ Clear all pearls
→ Win level and continue
```

## Initial Scope Boundaries

## In Scope For First Prototype

* 5 to 10 hand-authored levels.
* Portrait gameplay screen.
* Cups with limited capacity.
* Pearls with simple color/type IDs.
* Tap or drag movement.
* Rule: only valid moves are allowed.
* Rule: three matching pearls in a cup clear/pop.
* Win condition: all pearls cleared.
* Restart level button.
* Basic next-level flow.
* Placeholder visuals only.

## Out Of Scope For First Prototype

* Shop.
* Economy.
* Ads or IAP.
* Daily rewards.
* Complex boosters.
* Final art assets.
* Audio polish.
* Procedural level generation.
* Advanced obstacles.
* Unity project files.
* Reusable stable modules.

## Candidate Future Mechanics

These are not approved for the first prototype, but may be considered after the core loop is playable:

* Locked cup.
* Hidden top pearl.
* Ice cube blocker.
* Color-changing syrup pearl.
* Limited moves mode.
* Booster: undo, shuffle, clear one pearl.

## First Prototype Success Criteria

The idea is successful enough to continue if:

* the rule is understandable within 10 seconds
* the player can complete levels without explanation after the tutorial level
* moving pearls feels clear and low-friction
* match clearing is satisfying even with placeholder visuals
* level data can be represented cleanly
* the web prototype maps naturally to Unity prefabs and scripts

## Risks

| Risk | Impact | Mitigation |
|---|---:|---|
| Too similar to existing sorting puzzles | Medium | Use boba theme, satisfying cup-completion feedback, and later lightweight mechanics. |
| Levels may become repetitive | Medium | Test 10 levels before adding systems; add one mechanic only after core loop review. |
| Move rule may be unclear | Medium | Define exact move rules in Task 11 before Codex implementation. |
| Art could expand scope | Low | Use placeholder cups/pearls until art direction is approved. |

## Open Questions For Task 11

| Question | Owner | Needed Before | Status |
|---|---|---|---|
| Should the first prototype use tap-to-select or drag-and-drop as primary input? | I + ChatGPT | Prototype plan | Open |
| Should cups clear exactly 3 matching pearls or clear when full with same type? | I + ChatGPT | Game spec | Open |
| Should invalid moves be blocked silently or show feedback? | I + ChatGPT | Game spec | Open |
| Should the prototype include move limits? | I + ChatGPT | Game spec | Proposed: no |

## Approval

Approved by: I + ChatGPT  
Approval date: 2026-07-07  
Notes: Approved only as the first game idea. Full production is still blocked until Task 11 game specification is drafted and approved.
