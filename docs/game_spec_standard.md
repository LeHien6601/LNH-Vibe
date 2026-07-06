# Game Specification Standard

## Purpose

This document defines the standard format for describing any game created with the Game Factory system.

A game specification is the bridge between idea, prototype, implementation, Unity porting, QA, and release.

The goal is to make every game clear enough that:

* ChatGPT can review and improve the design.
* Codex can implement bounded tasks without guessing.
* The human developer can judge scope and product quality.
* Unity porting can be planned from the beginning.
* Future games can reuse the same structure.

## Core Rule

Every game must have a written specification before major implementation begins.

The spec does not need to be perfect at the start, but it must be clear enough to define:

* what the game is
* how the player interacts
* what the win/loss conditions are
* what content is required
* what is in scope
* what is out of scope
* what Codex should implement
* what needs human review

## Specification Location

Each active game should have its own folder:

```text
docs/current_game/
  idea.md
  game_spec.md
  prototype_plan.md
  art_direction.md
  asset_list.md
  unity_port_plan.md
  qa_report.md
  polish_plan.md
  release_plan.md
```

For archived or completed games:

```text
docs/games/<game_id>/
  game_spec.md
  prototype_review.md
  post_release_review.md
```

## Required Sections

A complete game specification should include the following sections:

1. Game Identity
2. Product Goal
3. Target Platform
4. Target Audience
5. Genre
6. Core Fantasy
7. Core Loop
8. Player Actions
9. Game Objects
10. Rules
11. Win Condition
12. Lose Condition
13. Progression
14. Level/Content Structure
15. UI Flow
16. Controls
17. Feedback
18. Art Direction Summary
19. Audio Direction Summary
20. Economy
21. Monetization
22. Save/Load
23. Analytics
24. Technical Constraints
25. Prototype Scope
26. Release Scope
27. Out of Scope
28. Unity Porting Notes
29. Risks
30. Open Questions
31. Approval Checklist

## Section Details

## 1. Game Identity

Defines the basic identity of the game.

Should include:

* working title
* short pitch
* one-sentence description
* current status
* version

Example:

```markdown
# Game Identity

Working Title: Bubble Merge Puzzle  
Status: Design Draft  
Version: 0.1  

One-Sentence Description:
A casual puzzle game where players merge matching bubbles to clear compact levels.
```

## 2. Product Goal

Defines what this game is meant to prove or achieve.

For early Game Factory projects, each game should also prove something about the factory.

Examples:

* Prove the web prototype → Unity port workflow.
* Prove the reusable level system.
* Prove the casual puzzle UI template.
* Prove the asset direction workflow.
* Prove the save/load module.

## 3. Target Platform

Defines the intended platform.

Default target:

* Android mobile
* Portrait orientation
* Unity final version
* Web prototype first

Optional future targets:

* iOS
* Web playable demo
* Steam
* HTML5 portal

## 4. Target Audience

Defines who the game is for.

For casual mobile games, this may include:

* casual puzzle players
* short-session mobile players
* players who like clean UI and simple rules
* players who enjoy progression and collection

Avoid making the audience too broad.

## 5. Genre

Defines the primary genre and secondary genre.

Example:

```markdown
Primary Genre: Casual Puzzle  
Secondary Genre: Sorting / Merge  
Session Length: 1–3 minutes per level
```

## 6. Core Fantasy

Defines the emotional or imaginative appeal of the game.

Examples:

* cleaning messy objects
* organizing cute items
* discovering new combinations
* growing a cozy collection
* solving satisfying compact puzzles

Core fantasy should be simple and easy to communicate visually.

## 7. Core Loop

Defines what the player repeatedly does.

A good core loop should be short and clear.

Example:

```text
Observe board
→ Choose move
→ Apply move
→ See reaction
→ Clear objective
→ Earn reward
→ Unlock next level
```

The core loop is one of the most important sections. Codex should not implement gameplay until this section is clear.

## 8. Player Actions

Defines everything the player can actively do.

Examples:

* tap
* drag
* drop
* swap
* merge
* select item
* use booster
* restart level
* claim reward
* open shop

Each action should include:

* input method
* target object
* expected result
* invalid action behavior

## 9. Game Objects

Defines the objects that exist in the game.

Each object should include:

* name
* purpose
* properties
* visual representation
* behavior
* whether it is data-driven
* Unity mapping if known

Example:

```markdown
## Bubble Slot

Purpose:
Holds emoji items.

Properties:
- capacity
- current items
- locked state
- visual skin

Behavior:
- accepts item if rules allow
- pops when match condition is met

Unity Mapping:
BubbleSlot MonoBehaviour + BubbleSlotData
```

## 10. Rules

Defines the formal game rules.

Rules should be written clearly enough that Codex can implement them.

For each rule, include:

* rule name
* condition
* result
* exception
* example

Example:

```markdown
Rule: Match Clear

Condition:
A slot contains 3 identical items.

Result:
Those 3 items are removed and the slot plays a clear animation.

Exception:
Locked slots do not evaluate match clear until unlocked.
```

## 11. Win Condition

Defines how the player wins.

Examples:

* clear all items
* reach target score
* survive until timer ends
* complete all required recipes
* remove all obstacles

The win condition should be testable.

## 12. Lose Condition

Defines how the player loses.

Some casual games may not need a hard lose condition.

Examples:

* no valid moves left
* timer reaches zero
* move limit reaches zero
* board is full

If there is no lose condition, write:

```markdown
Lose Condition:
None for initial release. Player can restart manually.
```

## 13. Progression

Defines how the player moves forward.

Should include:

* level progression
* unlocks
* difficulty curve
* rewards
* new mechanics
* tutorial sequence

For first release, keep progression simple.

## 14. Level/Content Structure

Defines how content is represented.

Should include:

* level format
* level fields
* content IDs
* difficulty tags
* tutorial flags
* target data format

Example:

```json
{
  "levelId": 1,
  "difficulty": "easy",
  "items": ["fire", "fire", "water"],
  "objectives": ["clear_all"],
  "availableBoosters": []
}
```

Levels should be data-driven where practical.

## 15. UI Flow

Defines screens and navigation.

Common screens:

* splash/loading
* main menu
* level select
* gameplay
* pause popup
* win popup
* lose popup
* shop
* settings

Should include:

* screen name
* purpose
* entry point
* exit actions
* required UI elements

## 16. Controls

Defines input behavior.

For mobile casual games, controls should prioritize:

* tap
* drag/drop
* swipe
* simple gestures

Each control should define:

* start condition
* feedback while interacting
* completion behavior
* cancellation behavior

## 17. Feedback

Defines how the game communicates results to the player.

Types of feedback:

* visual feedback
* animation
* sound effects
* haptic feedback
* particles
* UI text
* error feedback

Every important player action should produce feedback.

## 18. Art Direction Summary

This is a short summary only.

The full art direction should live in:

```text
docs/current_game/art_direction.md
```

The game spec should include enough visual direction to avoid placeholder confusion.

## 19. Audio Direction Summary

Defines the intended sound and music direction.

Should include:

* UI click sound
* success sound
* fail/invalid sound
* combo sound
* background music mood
* whether audio is required for first release

## 20. Economy

Defines currencies, rewards, shop items, and unlocks.

If the game has no economy, write:

```markdown
Economy:
No economy in initial prototype.
```

For casual mobile release, possible economy elements:

* soft currency
* boosters
* skins
* level rewards
* daily rewards

## 21. Monetization

Defines how the game may earn revenue.

Possible monetization:

* interstitial ads
* rewarded ads
* remove ads IAP
* cosmetic purchases
* level packs
* no monetization for prototype

Monetization should not be implemented until the gameplay loop is stable.

## 22. Save/Load

Defines what must persist.

Common saved data:

* current level
* unlocked levels
* currency
* owned items
* selected skin
* remove ads status
* settings
* tutorial completion

Save data should be defined before implementation.

## 23. Analytics

Defines events worth tracking.

For early versions, analytics can be simple or postponed.

Possible events:

* level_start
* level_complete
* level_fail
* booster_used
* ad_watched
* purchase_started
* purchase_completed
* tutorial_step_complete

If analytics are out of scope, state it clearly.

## 24. Technical Constraints

Defines important implementation constraints.

Examples:

* must be easy to port to Unity
* game logic should be separated from rendering
* level data should be JSON-compatible
* prototype should run locally
* avoid heavy dependencies
* support portrait layout
* support common mobile aspect ratios

## 25. Prototype Scope

Defines the minimum prototype.

Should include:

* must-have mechanics
* must-have screens
* placeholder assets allowed
* excluded features
* success criteria

This is the scope Codex should implement first.

## 26. Release Scope

Defines what must exist before release.

Should include:

* number of levels
* required screens
* polish requirements
* save support
* monetization requirements
* store assets
* QA requirements

Release scope should be stricter than prototype scope.

## 27. Out of Scope

Defines what should not be built yet.

This section is extremely important for preventing scope creep.

Examples:

* multiplayer
* cloud save
* achievements
* seasonal events
* complex shop
* advanced animation system
* procedural level generation

## 28. Unity Porting Notes

Defines early Unity mapping.

Should include:

* likely scenes
* likely prefabs
* likely scripts
* data files
* UI canvas structure
* asset import requirements
* platform-specific concerns

This section does not need full implementation detail yet.

## 29. Risks

Defines known risks.

Common risks:

* gameplay may not be fun enough
* level design may be hard to scale
* art style may be too slow to produce
* Unity port may require reworking input
* monetization may hurt game feel
* scope may expand too early

Each risk should include a mitigation.

## 30. Open Questions

Tracks unresolved decisions.

Codex should not guess answers to major open questions.

Examples:

* Should the game use move limit or no lose condition?
* Should boosters exist in first release?
* Should levels be hand-authored or generated?
* Should the prototype use SVG or Canvas?

## 31. Approval Checklist

Defines whether the spec is ready.

Checklist:

* [ ] Core loop is clear.
* [ ] Player actions are defined.
* [ ] Main rules are testable.
* [ ] Prototype scope is small enough.
* [ ] Out-of-scope items are listed.
* [ ] Unity porting concerns are noted.
* [ ] Human developer approved the scope.
* [ ] Codex can implement the next task without guessing.

## Spec Quality Requirements

A good game spec should be:

* specific
* bounded
* implementation-friendly
* reviewable
* easy to update
* not overdesigned

A bad game spec is:

* only a vague idea
* too broad
* missing rules
* missing scope
* missing out-of-scope section
* full of features not needed for first release
* unclear about what Codex should do next

## Spec Update Rule

The game spec is a living document.

It should be updated when:

* core mechanics change
* scope changes
* rules change
* UI flow changes
* Unity porting plan changes
* release target changes
* major decisions are made

All major changes should also be recorded in:

```text
docs/decisions.md
docs/changelog.md
```

## Codex Usage Rule

Codex should read the game spec before implementing gameplay.

Codex should stop and request clarification if:

* rules conflict
* scope is unclear
* required data format is missing
* UI behavior is undefined
* assets are required but not listed
* Unity mapping is required but absent
* open questions block implementation

## Human Approval Rule

A game spec should be approved by the human developer before major production begins.

ChatGPT may draft and refine the spec.
Codex may update the spec after implementation.
The human developer decides whether the game direction is accepted.
