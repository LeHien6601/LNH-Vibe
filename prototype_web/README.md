# Bubble Tea Sort Web Prototype

## Purpose

This is the first playable local web prototype for **Bubble Tea Sort**.

It validates the core loop:

```text
select top pearl -> move to valid cup -> clear 3 matching pearls -> clear all cups -> win level
```

## How To Run

From this folder:

```bash
npm run dev
```

Then open the local URL printed by the command.

You can also serve the folder with any static web server. Opening `index.html` directly may be blocked by browser module-loading rules.

## Checks

Run level validation:

```bash
npm run validate
```

## Implemented

* Main menu
* Gameplay screen
* Win popup
* Restart current level
* Next level flow through 5 levels
* Final completion state after Level 5
* Tap-to-select source cup
* Tap-to-place selected top pearl
* Same-cup tap cancels selection
* Invalid feedback for empty source and full target
* Move counter
* Optional tutorial text
* Cup capacity of 3
* Clear rule for 3 matching pearls
* Win detection when all cups are empty
* Placeholder cup and pearl visuals

## Not Implemented

* Drag-and-drop
* Unity files
* Save/load
* Audio
* Haptics
* Shop, economy, ads, IAP, boosters
* Level select
* Final art assets
* Procedural levels

## Controls

* Tap a non-empty cup to select its top pearl.
* Tap another non-full cup to move the selected pearl.
* Tap the selected source cup again to cancel.
* Tap the background to cancel.
* Tap Restart to reset the current level.

## Files Of Interest

```text
src/data/levels.js
src/data/pearls.js
src/game/rules.js
src/game/state.js
src/game/level_loader.js
src/game/validation.js
src/ui/screens.js
src/ui/board_view.js
src/ui/cup_view.js
src/ui/popup.js
src/main.js
src/styles/main.css
```

## Unity Porting Notes

The prototype keeps level data and pearl definitions separate from UI rendering.

Suggested Unity mapping:

* `src/data/levels.js` -> JSON TextAsset or ScriptableObject level definitions
* `src/data/pearls.js` -> pearl definition assets or config records
* `src/game/rules.js` -> core gameplay rule methods
* `src/game/state.js` -> game state / board state model
* `src/ui/*` -> Unity scene controllers, cup views, pearl views, and popup views

## Known Issues

* Visuals are placeholders and are not approved final art.
* Gameplay feel, level difficulty, and tap-only controls need Human + ChatGPT review.
