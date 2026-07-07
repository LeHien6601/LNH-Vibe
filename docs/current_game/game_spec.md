# Bubble Tea Sort Game Specification

## 1. Game Identity

Working Title: **Bubble Tea Sort**  
Game ID: `bubble_tea_sort`  
Status: Draft for Human Review  
Version: 0.1  
Last Updated: 2026-07-07

One-Sentence Description:
A portrait mobile casual puzzle game where players move colorful tapioca pearls between cups, group matching sets of three, and clear all pearls from compact levels.

Short Pitch:
Bubble Tea Sort is a cozy sorting puzzle about organizing colorful boba pearls into transparent cups. The player moves one pearl at a time. When a cup contains three pearls of the same type, those pearls pop and clear with a satisfying drink-completion effect. The first prototype focuses only on clear rules, readable levels, and smooth interaction.

## 2. Product Goal

What should this game achieve?

Bubble Tea Sort should prove the first full Game Factory flow from idea to game specification, web prototype, review, Unity port planning, Unity implementation, and release preparation.

Factory goal this game helps prove:

* [x] Web prototype workflow
* [x] Unity port workflow
* [x] Reusable level system candidate
* [x] Reusable UI system candidate
* [x] Reusable save system candidate later
* [ ] Reusable economy system
* [ ] Reusable art workflow
* [ ] Release-ready pipeline

Notes:

The first prototype should prove the core loop, not monetization, final art, economy, or complex progression.

## 3. Target Platform

Primary Platform:

* [x] Android
* [ ] iOS
* [x] Web prototype
* [ ] PC
* [ ] Other:

Orientation:

* [x] Portrait
* [ ] Landscape
* [ ] Both

Final Engine:

* [x] Unity
* [ ] Web only
* [ ] Other:

Prototype Platform:

* [x] HTML/CSS/JS
* [ ] Canvas
* [x] SVG allowed
* [ ] Unity
* [ ] Other:

## 4. Target Audience

Primary audience:
Casual mobile puzzle players who enjoy sorting, matching, short levels, cute food/drink themes, and low-stress progression.

Player motivation:
Organize messy cups, trigger satisfying clears, complete short levels, and progress through increasingly clever layouts.

Session length:
30 seconds to 2 minutes per level for early levels.

Difficulty target:
Easy to understand within 10 seconds. Early prototype difficulty should be low to medium. The first version should avoid hard fail states.

## 5. Genre

Primary Genre: Casual Puzzle  
Secondary Genre: Sorting / Match-clear puzzle

Comparable Games:

* Ball sort puzzle games
* Water sort puzzle games
* Emoji Sort-style compact clear puzzles

What this game should feel like:

* calm
* readable
* satisfying
* snackable
* mobile-first
* cozy drink-shop themed

What this game should avoid:

* heavy strategy
* long levels
* confusing move rules
* expensive art requirements before gameplay is validated
* too many mechanics in the first prototype

## 6. Core Fantasy

What fantasy or satisfying feeling does the game deliver?

* organizing
* cleaning
* matching
* popping
* completing cute bubble tea cups

Core fantasy statement:
The player turns messy cups of colorful boba pearls into clean matching sets and watches them pop away like completed drink ingredients.

## 7. Core Loop

Repeated player loop:

```text
Observe cups and pearl positions
→ Select the top pearl from a source cup
→ Choose a valid target cup
→ Move the pearl
→ If target cup has 3 matching pearls, clear those pearls
→ Repeat until all pearls are cleared
→ Win level and continue
```

Core loop notes:

The first prototype should make this loop playable with placeholder visuals. The main test is whether the movement rule and clear rule feel understandable and satisfying.

## 8. Player Actions

| Action | Input | Target | Result | Invalid Behavior |
|---|---|---|---|---|
| Select source cup | Tap | Cup with at least one pearl | Selects the top pearl in that cup | Empty cup gives small invalid feedback |
| Move selected pearl | Tap | Valid target cup | Moves selected pearl to target cup | Invalid target gives feedback and keeps pearl selected |
| Cancel selection | Tap selected source again or tap empty background | Currently selected pearl | Clears selection | No penalty |
| Drag pearl | Optional pointer drag | Top pearl in cup | Moves pearl if dropped on valid cup | Returns pearl to source if invalid |
| Restart level | Tap button | Current level | Resets level to initial data | Confirmation not required in prototype |
| Next level | Tap button | Win popup | Loads next level | Disabled if no next level exists |

Primary input choice:

* Primary: tap-to-select, tap-to-place.
* Optional prototype enhancement: drag-and-drop can be supported if cheap, but Codex should not block on it.

Reason:
Tap-to-select is easier for mobile, web prototype, and accessibility. Drag may be added later for feel.

## 9. Game Objects

## Object: Cup

Purpose:
Holds pearls and defines movement/capacity constraints.

Properties:

* `cupId`
* `capacity`
* `pearls`
* `isLocked` later, not in first prototype

Behavior:

* exposes top pearl
* accepts pearl if capacity allows and move rule passes
* triggers clear check after receiving a pearl

Visual Representation:
Transparent cup outline with stacked pearl circles.

Data-Driven:

* [x] Yes
* [ ] No

Unity Mapping:
`CupView` prefab connected to `CupState` data. Later may use a `CupController` to bridge player input and core rules.

Notes:
No locked cups in first prototype.

## Object: Pearl

Purpose:
The movable item the player sorts and clears.

Properties:

* `pearlId`
* `type`
* `color`
* `displayName`

Behavior:

* can move only when it is the top pearl of a non-empty cup
* clears when part of a matching group of 3 in the same cup

Visual Representation:
Colored circular boba pearl.

Data-Driven:

* [x] Yes
* [ ] No

Unity Mapping:
`PearlView` prefab or pooled sprite object. Pearl type maps to sprite/color config.

Notes:
Prototype can use simple colors: brown, pink, green, blue, yellow, purple.

## Object: Level

Purpose:
Defines starting cup layout and completion requirements.

Properties:

* `levelId`
* `name`
* `difficulty`
* `cups`
* `pearlTypes`
* `tutorialText` optional

Behavior:

* loads initial game state
* defines win target: clear all pearls

Visual Representation:
Not visible directly; represented by board layout.

Data-Driven:

* [x] Yes
* [ ] No

Unity Mapping:
JSON level file in prototype, later ScriptableObject or JSON TextAsset in Unity.

## Object: Board

Purpose:
Owns active cups, selected pearl state, move count, and win state.

Properties:

* `cups`
* `selectedCupId`
* `moveCount`
* `levelStatus`

Behavior:

* validates moves
* applies moves
* evaluates clear rule
* evaluates win condition

Visual Representation:
Gameplay area containing cups.

Data-Driven:

* [ ] Yes
* [x] No, generated from level data

Unity Mapping:
`BoardController` or `GameplaySceneController`, but core rules should stay outside Unity-specific view code.

## 10. Rules

## Rule: Top Pearl Only

Condition:
The player selects a source cup.

Result:
Only the top pearl of that cup can be moved.

Exception:
Empty cups cannot be selected.

Example:
Cup A has `[brown, pink, green]` from bottom to top. Only `green` can move.

Test Case:
Selecting Cup A returns top pearl `green`.

## Rule: Cup Capacity

Condition:
The player attempts to move a pearl into a target cup.

Result:
Move is valid only if the target cup has fewer pearls than its capacity.

Exception:
No exception in prototype.

Example:
A cup with capacity 3 and 3 pearls cannot receive another pearl.

Test Case:
Move to full cup returns invalid.

## Rule: Prototype Move Compatibility

Condition:
The player moves the selected top pearl to a target cup.

Result:
For the first prototype, the move is valid if:

1. source cup is not the same as target cup
2. source cup has at least one pearl
3. target cup is not full

Exception:
No color matching is required for movement in the first prototype.

Example:
A pink pearl can move into a cup containing green pearls if capacity allows.

Test Case:
Move pink pearl from Cup A to non-full Cup B succeeds even if Cup B has a different top pearl.

Reason:
This keeps the first prototype closer to a compact match-clear puzzle and avoids the confusion of ball-sort restrictions before the core clear rule is tested.

## Rule: Match Clear

Condition:
After a move, any cup contains exactly 3 pearls of the same type.

Result:
Those 3 pearls are removed from the cup.

Exception:
If the cup capacity later becomes greater than 3, clear should happen when any top contiguous group of 3 matching pearls exists. This is not needed in the first prototype because prototype cup capacity should be 3.

Example:
Cup B receives a brown pearl and becomes `[brown, brown, brown]`. The cup clears.

Test Case:
After moving brown into `[brown, brown]`, the cup becomes empty.

## Rule: Empty Cup Allowed

Condition:
Target cup is empty and not full.

Result:
Any selected pearl can move into the empty cup.

Exception:
No exception in prototype.

Example:
Move green pearl from Cup A into empty Cup C succeeds.

Test Case:
Target empty cup receives one pearl.

## Rule: Clear Check Timing

Condition:
A valid move completes.

Result:
Clear check happens immediately after the pearl arrives.

Exception:
No delayed chain reactions in first prototype.

Example:
Move pearl, animate arrival, then remove matching set.

Test Case:
Move count increments before or at move completion; clear result is visible before win popup.

## Rule: Win Check

Condition:
After clear check completes.

Result:
If all cups contain zero pearls, the level is complete and win popup appears.

Exception:
No exception in prototype.

Example:
The last matching set clears, all cups are empty, win popup appears.

Test Case:
All cup pearl arrays empty returns `levelStatus = won`.

## Rule: No Lose In Prototype

Condition:
Player makes many moves or reaches a messy state.

Result:
No automatic loss. Player may restart manually.

Exception:
None.

Example:
Player can continue moving until solved or restart.

Test Case:
No move limit is checked.

## 11. Win Condition

How does the player win?

The player wins when every cup is empty after match clears.

Can this be automatically checked?

* [x] Yes
* [ ] No

Win condition details:

```text
For every cup in board.cups:
  cup.pearls.length === 0
```

The win popup should appear after any clear animation or placeholder delay finishes.

## 12. Lose Condition

Does the game have a lose condition?

* [ ] Yes
* [x] No
* [ ] Not in prototype

Lose condition details:

No lose condition in the first prototype. The player can restart manually.

No-lose design notes:

This keeps the first prototype low-stress and avoids implementing no-valid-move detection before the basic puzzle feel is validated.

## 13. Progression

Progression type:

* [x] Level-based
* [ ] Endless
* [ ] Mission-based
* [ ] Collection-based
* [ ] Other:

Difficulty curve:

* Levels 1-2: tutorial/simple matching with 2 to 3 cups.
* Levels 3-5: more mixed cups and more pearl types.
* Levels 6-10: more cups and order planning.

Unlocks:

No unlocks in first prototype.

Tutorial progression:

* Level 1: teach selecting source and target.
* Level 2: teach empty cup as temporary space.
* Level 3: remove tutorial text unless needed.

Reward progression:

Prototype: win popup and next level only.

## 14. Level / Content Structure

Level format:
JSON-compatible object.

Content data format:

* [x] JSON
* [ ] CSV
* [x] ScriptableObject later in Unity
* [ ] Hardcoded for prototype only
* [ ] Other:

Example level:

```json
{
  "levelId": 1,
  "name": "First Cup",
  "difficulty": "tutorial",
  "cupCapacity": 3,
  "tutorialText": "Tap a cup, then tap another cup to move the top pearl.",
  "cups": [
    { "cupId": "c1", "pearls": ["brown", "brown"] },
    { "cupId": "c2", "pearls": ["brown"] },
    { "cupId": "c3", "pearls": [] }
  ]
}
```

Required fields:

* `levelId`: number
* `difficulty`: string
* `cupCapacity`: number, prototype default `3`
* `cups`: array of cup objects
* each cup requires `cupId` and `pearls`
* each pearl type must be a known ID

Suggested first prototype levels:

```json
[
  {
    "levelId": 1,
    "difficulty": "tutorial",
    "cupCapacity": 3,
    "cups": [
      { "cupId": "c1", "pearls": ["brown", "brown"] },
      { "cupId": "c2", "pearls": ["brown"] },
      { "cupId": "c3", "pearls": [] }
    ]
  },
  {
    "levelId": 2,
    "difficulty": "easy",
    "cupCapacity": 3,
    "cups": [
      { "cupId": "c1", "pearls": ["brown", "pink"] },
      { "cupId": "c2", "pearls": ["pink", "brown"] },
      { "cupId": "c3", "pearls": ["pink", "brown"] },
      { "cupId": "c4", "pearls": [] }
    ]
  }
]
```

Validation notes:

* Each pearl type count should be divisible by 3.
* Cup capacity should be 3 in the first prototype.
* At least one empty cup is recommended for levels after tutorial.
* Level should be manually solvable before being added.

## 15. UI Flow

Screens:

* [ ] Splash / Loading
* [x] Main Menu
* [ ] Level Select
* [x] Gameplay
* [x] Pause or simple restart access
* [x] Win Popup
* [ ] Lose Popup
* [ ] Shop
* [ ] Settings
* [ ] Other:

UI flow:

```text
Main Menu
→ Gameplay Level 1
→ Win Popup
→ Next Level
→ Gameplay Level N
```

Screen details:

## Screen: Main Menu

Purpose:
Start the prototype.

Entry:
Page load.

Exit:
Tap Play.

Required UI Elements:

* game title
* Play button

Notes:
Can be minimal.

## Screen: Gameplay

Purpose:
Play the active level.

Entry:
Start or next level.

Exit:
Win popup or back to menu if provided.

Required UI Elements:

* level label
* board with cups
* move count
* restart button
* optional tutorial text

Notes:
Portrait layout should be readable on mobile.

## Screen: Win Popup

Purpose:
Confirm level completion and continue.

Entry:
All pearls cleared.

Exit:
Tap Next Level.

Required UI Elements:

* success title
* move count
* Next button
* Restart or Menu optional

Notes:
No rewards required in prototype.

## 16. Controls

Main input method:

* [x] Tap
* [ ] Drag and drop as required
* [ ] Swipe
* [ ] Hold
* [ ] Multi-touch
* [ ] Keyboard / Mouse
* [ ] Other:

Control behavior:

1. Tap non-empty source cup to select its top pearl.
2. Tap valid target cup to move the selected pearl.
3. Tap same source cup again to cancel selection.
4. Tap invalid target to show invalid feedback and keep selection active.

Interaction feedback:

* selected cup/pearl should highlight
* valid target may subtly highlight if easy to implement
* moving pearl should animate or snap clearly
* matching set should pop or fade

Cancel behavior:

Tap selected cup again or tap background.

## 17. Feedback

Visual feedback:

* selected pearl/cup highlight
* invalid shake or red flash
* clear pop/fade
* win popup

Animation feedback:

* simple move transition
* simple pop scale/fade for clear
* win popup scale/fade

Sound feedback:

Prototype optional. Release should include:

* tap/select sound
* move sound
* invalid sound
* clear/pop sound
* win sound

Haptic feedback:

Prototype excluded. Mobile release optional for clear and win.

Invalid action feedback:

Target cup shakes or selected pearl bounces back. Do not silently fail if easy to show feedback.

Reward feedback:

Win popup and level advance.

## 18. Art Direction Summary

Full art direction file:

```text
docs/current_game/art_direction.md
```

Status:
Not created yet. Art direction is out of scope for Task 11.

Style keywords:

* cozy
* clean
* cute
* soft drink-shop theme
* readable transparent cups
* colorful round pearls

Color mood:
Warm pastel cafe colors with high readability.

Shape language:
Rounded cups, round pearls, soft UI buttons.

UI mood:
Simple, cheerful, mobile casual.

Asset complexity:
Prototype should use placeholder circles and cup outlines. Final assets should wait until art direction approval.

Reference notes:
No final visual reference approved yet.

## 19. Audio Direction Summary

Music mood:
Light cozy cafe background music for release. Not required in prototype.

Required sound effects for release:

* select
* move
* invalid
* clear/pop
* win

Optional sound effects:

* button click
* popup open
* level start

Audio priority:

* [ ] Required for prototype
* [x] Required for release
* [ ] Postponed entirely

## 20. Economy

Does the game use economy?

* [ ] Yes
* [x] No
* [x] Prototype only: No

Currencies:
None in first prototype.

Items:
None in first prototype.

Rewards:
Win popup only.

Shop:
Out of scope.

Unlocks:
Out of scope.

## 21. Monetization

Monetization status:

* [x] None
* [x] Prototype: none
* [ ] Interstitial ads
* [ ] Rewarded ads
* [ ] Remove ads IAP
* [ ] Cosmetic IAP
* [ ] Other:

Monetization notes:

Do not implement monetization until the core gameplay loop is validated.

When monetization should be implemented:

Only after web prototype review, Unity port planning, and a release scope decision.

## 22. Save / Load

Save required?

* [ ] Yes
* [ ] No
* [x] Release only

Data to save later:

* current level
* unlocked levels
* settings
* tutorial state
* other: total completed levels

Save format:

* [x] Local storage for web prototype later if needed
* [x] JSON
* [ ] PlayerPrefs
* [ ] Encrypted JSON
* [ ] Unity cloud save later
* [ ] Other:

Prototype note:
First prototype may start at level 1 on refresh. Save/load can be added later if Task 12 approves it.

## 23. Analytics

Analytics required?

* [ ] Yes
* [ ] No
* [x] Release only

Potential future events:

* `level_start`
* `level_complete`
* `level_restart`
* `move_made`
* `invalid_move`
* `tutorial_step_complete`

Prototype note:
No analytics implementation in first prototype.

## 24. Technical Constraints

Constraints:

* [x] Must be easy to port to Unity
* [x] Logic separated from rendering
* [x] Data-driven level/content format
* [x] Mobile portrait first
* [x] Avoid heavy dependencies
* [x] Runs locally
* [ ] Other:

Detailed notes:

* Core rules should be written as pure functions where practical.
* Level data should be JSON-compatible.
* UI should not own game rule logic.
* Prototype should not require final art assets.
* No reusable module should be extracted yet.

## 25. Prototype Scope

Must include:

* Main menu
* Gameplay screen
* 5 to 10 hand-authored levels
* Cup capacity of 3
* Pearl movement using tap-to-select and tap-to-place
* Valid/invalid move handling
* Match clear for 3 identical pearls in one cup
* Win detection when all pearls are cleared
* Win popup and next level flow
* Restart level button
* Placeholder visuals

Can use placeholder:

* pearl graphics
* cup graphics
* background
* buttons
* animations
* sound omitted

Must exclude:

* shop
* economy
* ads
* IAP
* boosters
* final art
* audio polish
* locked cups
* hidden pearls
* move limits
* procedural levels
* save/load unless explicitly approved in prototype plan
* Unity files
* reusable stable modules

Prototype success criteria:

* [x] Core loop playable
* [x] Main rule works
* [x] Win condition works
* [x] Basic UI exists
* [x] Human can review gameplay feel

## 26. Release Scope

Required for release later:

* polished Unity version
* final art direction and assets
* 50+ levels minimum if game continues
* save/load progression
* main menu
* level select or simple level progression
* settings
* audio feedback
* QA on Android device
* store listing materials

Target number of levels:

* Prototype: 5 to 10
* First release candidate: 50 to 100, only if prototype proves fun

Required screens:

* main menu
* gameplay
* pause/restart
* win popup
* settings
* level select optional

Required polish:

* readable mobile layout
* smooth pearl movement
* satisfying clear animation
* clear invalid feedback
* balanced level difficulty

Required save features:

* current level
* unlocked levels
* settings
* tutorial completion

Required monetization features:

None approved yet.

Required store materials:

Postponed until release preparation.

## 27. Out of Scope

Do not build yet:

* monetization
* shop
* economy
* boosters
* daily rewards
* complex obstacles
* procedural level generator
* final assets
* Unity implementation
* stable reusable modules
* analytics
* cloud save
* localization
* social features
* multiplayer

Postponed ideas:

* locked cups
* hidden pearls
* ice blockers
* syrup pearls
* move limits
* undo booster
* shuffle booster
* themes and cup skins

## 28. Unity Porting Notes

Expected Unity scenes:

* `MainMenuScene`
* `GameplayScene`

Expected prefabs:

* `CupPrefab`
* `PearlPrefab`
* `GameplayBoardPrefab`
* `WinPopupPrefab`
* `ButtonPrefab` or UI Toolkit/UGUI equivalent

Expected scripts:

* `GameState`
* `CupState`
* `PearlDefinition`
* `LevelDefinition`
* `LevelLoader`
* `MoveValidator`
* `MatchClearRule`
* `WinConditionChecker`
* `BoardController`
* `CupView`
* `PearlView`
* `GameplayUIController`

Data mapping:

* Web JSON level data maps to Unity JSON TextAsset or ScriptableObject.
* Pearl type IDs map to `PearlDefinition` assets or config records.
* Cup capacity maps to level field.

UI mapping:

* Web main menu maps to Unity main menu canvas.
* Gameplay board maps to Unity UI Canvas or world-space 2D layout.
* Win popup maps to Unity popup canvas panel.

Input mapping:

* Web pointer/tap maps to Unity touch/mouse input.
* Core move validation should not depend on the input implementation.

Asset import notes:

* Cups should be scalable sprites or vector-like UI assets.
* Pearls should be simple circular sprites with readable colors.
* Final art should be approved before Unity asset integration.

Risks for Unity port:

* Web layout may not match Unity UI scaling exactly.
* Drag-and-drop, if added later, may need separate Unity input handling.
* Animations should be treated as presentation, not core rule logic.

## 29. Risks

| Risk | Impact | Mitigation |
|---|---:|---|
| Core loop may feel too similar to existing sort puzzles | Medium | Use boba theme and clear/pop completion feedback; test before expanding. |
| Rules may be too easy without color-matching move restriction | Medium | Prototype simple rule first; add restrictions only after review if needed. |
| Levels may be hard to design manually | Medium | Start with 5 to 10 small levels; add validation notes before scaling. |
| Art scope may grow too early | Low | Use placeholders until art direction task. |
| Unity port may become a direct copy of web UI | Medium | Keep rules/data portable and adapt presentation in Unity. |

## 30. Open Questions

| Question | Owner | Needed Before | Status |
|---|---|---|---|
| Should drag-and-drop be included in the first prototype or postponed? | Human + ChatGPT | Task 12 Prototype Plan | Proposed: postpone unless cheap |
| Should movement later require same color on target top pearl? | Human + ChatGPT | Prototype Review | Proposed: not in first prototype |
| Should the first prototype include local progress save? | Human + ChatGPT | Task 12 Prototype Plan | Proposed: no |
| Should cup capacity always be 3 or later increase? | Human + ChatGPT | Prototype Review | Proposed: capacity 3 for prototype |
| How many levels should Codex implement first? | Human + ChatGPT | Task 12 Prototype Plan | Proposed: 5 minimum, 10 if easy |

## 31. Approval Checklist

* [x] Core loop is clear.
* [x] Player actions are defined.
* [x] Main rules are testable.
* [x] Win condition is defined.
* [x] Lose condition is defined or intentionally excluded.
* [x] Prototype scope is small enough.
* [x] Release scope is separate from prototype scope.
* [x] Out-of-scope items are listed.
* [x] Unity porting notes exist.
* [x] Risks are listed.
* [x] Open questions are tracked.
* [ ] Human developer approved the scope.
* [ ] Codex can implement the next task without guessing.

## Approval

Approved by: Pending Human Approval  
Approval date: Pending  
Notes: This specification is a ChatGPT draft for Task 11. Human approval is required before Task 12 prototype planning and before any Codex implementation task.
