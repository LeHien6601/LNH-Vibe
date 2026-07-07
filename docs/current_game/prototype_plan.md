# Bubble Tea Sort Prototype Plan

## Purpose

Define the smallest playable web prototype for **Bubble Tea Sort** so Codex can implement Task 13 without guessing.

## Task Metadata

Task: Task 12: First Web Prototype Plan  
Owner: Human + ChatGPT  
Execution Mode: Documentation / Planning Task  
Next Actor: Codex, after Human approval  
Status: Draft Ready For Human Approval  
Last Updated: 2026-07-07

## Source Documents

```text
docs/current_game/idea.md
docs/current_game/game_spec.md
docs/game_spec_standard.md
docs/architecture.md
docs/pipeline.md
workflow/current_task.md
workflow/handover.md
```

## Planning Decisions

| Decision | Choice | Reason |
|---|---|---|
| Prototype control style | Tap-to-select, tap-to-place only | Best for mobile, simplest for first implementation, easiest to port to Unity. |
| Drag-and-drop | Excluded from first prototype | It can be added after gameplay review if tap controls feel too slow. |
| Level count | 5 hand-authored levels | Enough to test the loop without overloading the first Codex task. |
| Cup capacity | 3 pearls | Keeps match clear simple and readable. |
| Move restriction | Only block same cup, empty source, and full target | Tests the match-clear loop before adding ball-sort-style color restrictions. |
| Lose condition | None | Player can restart manually. |
| Save/load | Excluded | First prototype should validate gameplay, not persistence. |
| Audio | Excluded | Visual feedback is enough for first review. |
| Final art | Excluded | Use placeholder cup outlines and colored circles. |

## Prototype Goal

Create a local web prototype that lets the human developer play 5 small levels of Bubble Tea Sort and judge whether the core loop is understandable and satisfying.

The prototype should prove:

* moving top pearls between cups
* clearing 3 matching pearls in one cup
* winning when all pearls are cleared
* basic level progression
* readable portrait mobile layout
* clean separation between game rules, level data, and UI rendering

## Success Criteria

The prototype is successful if:

* a user can start the game from a main menu
* a user can complete Level 1 without instructions outside the game
* all 5 levels can be completed manually
* invalid moves produce visible feedback
* match clears are obvious
* the win popup appears only after the board is empty
* core rules are not mixed directly into DOM/UI code
* level data is easy to inspect and edit
* the result is reviewable for gameplay feel before Unity planning

## Included Scope

Codex should implement:

* local web app under `prototype_web/`
* main menu screen
* gameplay screen
* win popup
* restart level button
* next level button
* level label
* move counter
* optional tutorial text per level
* 5 JSON-compatible levels
* cup capacity of 3
* tap-to-select source cup
* tap-to-place selected top pearl into target cup
* selected cup or pearl highlight
* invalid move feedback
* simple move feedback
* simple clear/pop feedback
* win detection
* clean source organization
* prototype README

## Excluded Scope

Codex must not implement:

* Unity files
* reusable factory modules
* drag-and-drop
* shop
* economy
* ads
* IAP
* boosters
* audio
* haptics
* analytics
* local save/load
* level select screen
* final art assets
* procedural level generation
* locked cups
* hidden pearls
* move limit
* undo
* settings screen
* release preparation

## Player Flow

```text
Open prototype
→ Main Menu
→ Tap Play
→ Gameplay Level 1
→ Move pearls until all cups clear
→ Win Popup
→ Tap Next
→ Gameplay Level 2
→ Continue through Level 5
→ Final completion message
```

## Screen Plan

## Screen: Main Menu

Purpose:
Start the prototype.

Required UI:

* game title: `Bubble Tea Sort`
* short subtitle
* Play button

Behavior:

* Play loads Level 1.

## Screen: Gameplay

Purpose:
Play the active level.

Required UI:

* level label
* move counter
* tutorial text area when level has tutorial text
* board area with cups
* restart button
* menu button optional

Behavior:

* shows cups in a portrait-friendly layout
* allows tap interaction
* updates move counter after valid moves
* evaluates clear and win after valid moves

## Screen: Win Popup

Purpose:
Show level completion and continue.

Required UI:

* success title
* completed level number
* move count
* Next Level button when another level exists
* Play Again or Restart button optional
* final message after Level 5

Behavior:

* appears after the board is empty
* blocks board input while open

## Controls

Primary input:

```text
Tap non-empty cup
→ select top pearl
→ tap target cup
→ if valid, move selected pearl
→ if invalid, show feedback and keep selection active
```

Cancel behavior:

* tap selected source cup again to cancel
* tapping background may cancel if simple to implement

Invalid behavior:

* empty source selection should show invalid feedback
* moving to same cup should cancel or show invalid feedback
* moving to full cup should show invalid feedback

Decision:
For consistency, same-cup tap should cancel selection. Other invalid target taps should keep selection active.

## Core Rules For Implementation

## Rule: Top Pearl Only

Only the top pearl of a source cup can be moved.

Prototype data convention:

```text
pearls array order = bottom to top
top pearl = pearls[pearls.length - 1]
```

## Rule: Valid Source

A source cup is valid when:

* it exists
* it contains at least one pearl

## Rule: Valid Target

A target cup is valid when:

* it exists
* it is not the selected source cup
* it has fewer pearls than `cupCapacity`

No color matching restriction is used in the first prototype.

## Rule: Move

When a move is valid:

1. remove top pearl from source cup
2. add pearl to target cup
3. increment move count
4. clear selection
5. check target cup for match clear
6. check win condition

## Rule: Match Clear

After a valid move, if the target cup contains exactly 3 pearls and all 3 pearls have the same type, clear that cup.

Prototype capacity is always 3, so no partial contiguous matching logic is required.

## Rule: Win

The player wins when every cup has `pearls.length === 0`.

## Level Data Plan

File:

```text
prototype_web/src/data/levels.js
```

Data shape:

```js
export const levels = [
  {
    levelId: 1,
    name: "First Sip",
    difficulty: "tutorial",
    cupCapacity: 3,
    tutorialText: "Tap a cup, then tap another cup to move the top pearl.",
    cups: [
      { cupId: "c1", pearls: ["brown", "brown"] },
      { cupId: "c2", pearls: ["brown"] },
      { cupId: "c3", pearls: [] }
    ]
  }
];
```

Pearl type IDs:

```text
brown
pink
green
blue
yellow
purple
```

Pearl display config:

```text
prototype_web/src/data/pearls.js
```

Should map pearl type IDs to display labels and placeholder colors.

## Required Levels

Codex should include exactly 5 levels in Task 13.

## Level 1: First Sip

Goal:
Teach one clear.

```js
{
  levelId: 1,
  name: "First Sip",
  difficulty: "tutorial",
  cupCapacity: 3,
  tutorialText: "Tap a cup, then tap another cup to move the top pearl.",
  cups: [
    { cupId: "c1", pearls: ["brown", "brown"] },
    { cupId: "c2", pearls: ["brown"] },
    { cupId: "c3", pearls: [] }
  ]
}
```

Expected solution idea:
Move brown from `c2` to `c1`.

## Level 2: Pink Mix

Goal:
Teach using an empty cup.

```js
{
  levelId: 2,
  name: "Pink Mix",
  difficulty: "easy",
  cupCapacity: 3,
  tutorialText: "Use an empty cup as temporary space.",
  cups: [
    { cupId: "c1", pearls: ["brown", "pink"] },
    { cupId: "c2", pearls: ["pink", "brown"] },
    { cupId: "c3", pearls: ["pink", "brown"] },
    { cupId: "c4", pearls: [] }
  ]
}
```

## Level 3: Green Tea

Goal:
Introduce 3 pearl types.

```js
{
  levelId: 3,
  name: "Green Tea",
  difficulty: "easy",
  cupCapacity: 3,
  cups: [
    { cupId: "c1", pearls: ["brown", "green", "pink"] },
    { cupId: "c2", pearls: ["pink", "brown", "green"] },
    { cupId: "c3", pearls: ["green", "pink", "brown"] },
    { cupId: "c4", pearls: [] },
    { cupId: "c5", pearls: [] }
  ]
}
```

## Level 4: Blueberry Boba

Goal:
Increase cup count and planning.

```js
{
  levelId: 4,
  name: "Blueberry Boba",
  difficulty: "medium",
  cupCapacity: 3,
  cups: [
    { cupId: "c1", pearls: ["blue", "pink", "brown"] },
    { cupId: "c2", pearls: ["brown", "blue", "green"] },
    { cupId: "c3", pearls: ["green", "brown", "pink"] },
    { cupId: "c4", pearls: ["pink", "green", "blue"] },
    { cupId: "c5", pearls: [] },
    { cupId: "c6", pearls: [] }
  ]
}
```

## Level 5: Cafe Rush

Goal:
Review whether the mechanic stays readable with 5 types.

```js
{
  levelId: 5,
  name: "Cafe Rush",
  difficulty: "medium",
  cupCapacity: 3,
  cups: [
    { cupId: "c1", pearls: ["brown", "pink", "green"] },
    { cupId: "c2", pearls: ["blue", "yellow", "brown"] },
    { cupId: "c3", pearls: ["green", "blue", "pink"] },
    { cupId: "c4", pearls: ["yellow", "brown", "blue"] },
    { cupId: "c5", pearls: ["pink", "green", "yellow"] },
    { cupId: "c6", pearls: [] },
    { cupId: "c7", pearls: [] }
  ]
}
```

## Level Validation Requirements

Codex should ensure:

* every level has `levelId`, `name`, `difficulty`, `cupCapacity`, and `cups`
* every cup has `cupId` and `pearls`
* every pearl type exists in the pearl config
* each pearl type count is divisible by 3
* no cup starts over capacity
* every prototype level is manually solvable

If Codex discovers a listed level is not solvable, Codex should either make the smallest level-data correction and document it, or stop and record a blocker if the correction changes design intent.

## Recommended File Structure

```text
prototype_web/
  README.md
  index.html
  package.json
  src/
    main.js
    game/
      state.js
      rules.js
      level_loader.js
      validation.js
    ui/
      screens.js
      board_view.js
      cup_view.js
      popup.js
    data/
      levels.js
      pearls.js
    styles/
      main.css
```

Codex may simplify file count if the result stays readable, but it should keep the separation between:

* `game/` for rules and state
* `ui/` for display and interaction
* `data/` for levels and pearl definitions
* `styles/` for visual layout

## Technical Requirements

* Use plain HTML/CSS/JavaScript unless Codex finds an existing package setup in the repo.
* Do not add heavy dependencies.
* Prototype should run locally in a browser.
* Keep game rules as pure functions where practical.
* Keep level data JSON-compatible.
* UI should call rules, not contain the rule logic itself.
* Avoid global hidden state except a small app controller in `main.js`.
* Keep placeholder art simple and readable.
* Portrait layout should fit common mobile widths.

## Visual Placeholder Requirements

Allowed placeholders:

* cup outline using CSS border or SVG-like simple shapes
* pearls as colored circles
* pastel background
* simple buttons
* simple text labels

Not required:

* final boba cup illustration
* cafe background art
* particles
* sound
* advanced animation

## Feedback Requirements

Minimum feedback:

* selected cup/pearl highlight
* invalid target shake or flash
* clear animation or visible fade/remove
* win popup

Optional if cheap:

* short pearl movement transition
* subtle board bounce on win

## Manual Test Checklist

Codex should perform or document these checks after implementation:

* Main menu loads.
* Play button starts Level 1.
* Tapping an empty cup as source gives invalid feedback.
* Tapping a non-empty cup selects its top pearl.
* Tapping the selected source again cancels selection.
* Moving to a non-full target succeeds.
* Moving to a full target fails visibly.
* Move counter increments only after valid moves.
* A cup with 3 matching pearls clears.
* A cup with mixed pearls does not clear.
* Win popup appears when all cups are empty.
* Restart restores the original level data.
* Next Level loads the next level.
* Level 5 completion shows final completion state.
* Refreshing the page does not need to preserve progress.
* Layout remains usable around mobile portrait width.

## Prototype Review Criteria

Human + ChatGPT should review:

* Is the core rule understandable?
* Does tap-to-select feel acceptable on mobile?
* Is clearing 3 pearls satisfying enough to continue?
* Are the levels too easy, too hard, or too similar?
* Should drag-and-drop be added?
* Should movement later require same-color target compatibility?
* Should the game continue to art direction and Unity port planning?

## Codex Stop Conditions

Codex must stop and update `workflow/blockers.md` and `workflow/handover.md` if:

* the game spec conflicts with this prototype plan
* level data appears unsolvable and cannot be minimally corrected
* implementation requires final art direction
* implementation requires Unity-specific decisions
* implementation would require a broad framework or reusable module
* scope expands beyond the included prototype features
* a major gameplay decision is needed

## Expected Task 13 Output

Task 13 should create or update:

```text
prototype_web/
prototype_web/README.md
workflow/handover.md
workflow/review_requests.md
workflow/done.md
docs/changelog.md
```

Task 13 should not update `docs/current_game/game_spec.md` unless implementation reveals a real spec conflict.

## Approval

Approved by: Pending Human Approval  
Approval date: Pending  
Notes: User moving from Task 11 to Task 12 is treated as approval to draft this plan. Codex should start only after the human developer accepts this plan or provides corrections.
