# Game Specification Template

## 1. Game Identity

Working Title:
Game ID:
Status: Draft / Approved / In Production / Done
Version:
Last Updated:

One-Sentence Description:

Short Pitch:

## 2. Product Goal

What should this game achieve?

Factory goal this game helps prove:

* [ ] Web prototype workflow
* [ ] Unity port workflow
* [ ] Reusable level system
* [ ] Reusable UI system
* [ ] Reusable save system
* [ ] Reusable economy system
* [ ] Reusable art workflow
* [ ] Release-ready pipeline

Notes:

## 3. Target Platform

Primary Platform:

* [ ] Android
* [ ] iOS
* [ ] Web
* [ ] PC
* [ ] Other:

Orientation:

* [ ] Portrait
* [ ] Landscape
* [ ] Both

Final Engine:

* [ ] Unity
* [ ] Web only
* [ ] Other:

Prototype Platform:

* [ ] HTML/CSS/JS
* [ ] Canvas
* [ ] SVG
* [ ] Unity
* [ ] Other:

## 4. Target Audience

Primary audience:

Player motivation:

Session length:

Difficulty target:

## 5. Genre

Primary Genre:

Secondary Genre:

Comparable Games:

What this game should feel like:

What this game should avoid:

## 6. Core Fantasy

What fantasy or satisfying feeling does the game deliver?

Examples:

* organizing
* cleaning
* merging
* discovering
* collecting
* relaxing
* solving
* building

Core fantasy statement:

## 7. Core Loop

Describe the repeated player loop:

```text
Step 1
→ Step 2
→ Step 3
→ Step 4
→ Reward / Progression
```

Core loop notes:

## 8. Player Actions

| Action             | Input | Target | Result                  | Invalid Behavior                 |
| ------------------ | ----- | ------ | ----------------------- | -------------------------------- |
| Example: Drag item | Drag  | Item   | Move item to valid slot | Return item to original position |

## 9. Game Objects

## Object: `<Object Name>`

Purpose:

Properties:

*

Behavior:

*

Visual Representation:

Data-Driven:

* [ ] Yes
* [ ] No

Unity Mapping:

Notes:

## 10. Rules

## Rule: `<Rule Name>`

Condition:

Result:

Exception:

Example:

Test Case:

## 11. Win Condition

How does the player win?

Can this be automatically checked?

* [ ] Yes
* [ ] No

Win condition details:

## 12. Lose Condition

Does the game have a lose condition?

* [ ] Yes
* [ ] No
* [ ] Not in prototype

Lose condition details:

No-lose design notes if applicable:

## 13. Progression

Progression type:

* [ ] Level-based
* [ ] Endless
* [ ] Mission-based
* [ ] Collection-based
* [ ] Other:

Difficulty curve:

Unlocks:

Tutorial progression:

Reward progression:

## 14. Level / Content Structure

Level format:

Content data format:

* [ ] JSON
* [ ] CSV
* [ ] ScriptableObject later in Unity
* [ ] Hardcoded for prototype only
* [ ] Other:

Example level:

```json
{
  "levelId": 1,
  "difficulty": "easy",
  "objectives": [],
  "items": []
}
```

Required fields:

*

## 15. UI Flow

Screens:

* [ ] Splash / Loading
* [ ] Main Menu
* [ ] Level Select
* [ ] Gameplay
* [ ] Pause
* [ ] Win Popup
* [ ] Lose Popup
* [ ] Shop
* [ ] Settings
* [ ] Other:

UI flow:

```text
Splash
→ Main Menu
→ Gameplay
→ Win Popup
→ Next Level
```

Screen details:

## Screen: `<Screen Name>`

Purpose:

Entry:

Exit:

Required UI Elements:

Notes:

## 16. Controls

Main input method:

* [ ] Tap
* [ ] Drag and drop
* [ ] Swipe
* [ ] Hold
* [ ] Multi-touch
* [ ] Keyboard / Mouse
* [ ] Other:

Control behavior:

Interaction feedback:

Cancel behavior:

## 17. Feedback

Visual feedback:

Animation feedback:

Sound feedback:

Haptic feedback:

Invalid action feedback:

Reward feedback:

## 18. Art Direction Summary

Full art direction file:

```text
docs/current_game/art_direction.md
```

Style keywords:

Color mood:

Shape language:

UI mood:

Asset complexity:

Reference notes:

## 19. Audio Direction Summary

Music mood:

Required sound effects:

*

Optional sound effects:

*

Audio priority:

* [ ] Required for prototype
* [ ] Required for release
* [ ] Postponed

## 20. Economy

Does the game use economy?

* [ ] Yes
* [ ] No
* [ ] Prototype only: No

Currencies:

Items:

Rewards:

Shop:

Unlocks:

## 21. Monetization

Monetization status:

* [ ] None
* [ ] Prototype: none
* [ ] Interstitial ads
* [ ] Rewarded ads
* [ ] Remove ads IAP
* [ ] Cosmetic IAP
* [ ] Other:

Monetization notes:

When monetization should be implemented:

## 22. Save / Load

Save required?

* [ ] Yes
* [ ] No
* [ ] Release only

Data to save:

* current level
* unlocked levels
* currency
* owned items
* selected skin
* settings
* tutorial state
* remove ads status
* other:

Save format:

* [ ] Local storage for web prototype
* [ ] JSON
* [ ] PlayerPrefs
* [ ] Encrypted JSON
* [ ] Unity cloud save later
* [ ] Other:

## 23. Analytics

Analytics required?

* [ ] Yes
* [ ] No
* [ ] Release only

Events:

* level_start
* level_complete
* level_fail
* booster_used
* ad_watched
* purchase_completed
* tutorial_step_complete
* other:

## 24. Technical Constraints

Constraints:

* [ ] Must be easy to port to Unity
* [ ] Logic separated from rendering
* [ ] Data-driven level/content format
* [ ] Mobile portrait first
* [ ] Avoid heavy dependencies
* [ ] Runs locally
* [ ] Other:

Detailed notes:

## 25. Prototype Scope

Must include:

*

Can use placeholder:

*

Must exclude:

*

Prototype success criteria:

* [ ] Core loop playable
* [ ] Main rule works
* [ ] Win condition works
* [ ] Basic UI exists
* [ ] Human can review gameplay feel

## 26. Release Scope

Required for release:

*

Target number of levels:

Required screens:

Required polish:

Required save features:

Required monetization features:

Required store materials:

## 27. Out of Scope

Do not build yet:

*

Postponed ideas:

*

## 28. Unity Porting Notes

Expected Unity scenes:

*

Expected prefabs:

*

Expected scripts:

*

Data mapping:

UI mapping:

Input mapping:

Asset import notes:

Risks for Unity port:

## 29. Risks

| Risk                                   | Impact | Mitigation                                      |
| -------------------------------------- | ------ | ----------------------------------------------- |
| Example: Core loop may feel repetitive | High   | Test with 10-level prototype before adding shop |

## 30. Open Questions

| Question                              | Owner | Needed Before            | Status |
| ------------------------------------- | ----- | ------------------------ | ------ |
| Example: Should game have move limit? | Human | Prototype implementation | Open   |

## 31. Approval Checklist

* [ ] Core loop is clear.
* [ ] Player actions are defined.
* [ ] Main rules are testable.
* [ ] Win condition is defined.
* [ ] Lose condition is defined or intentionally excluded.
* [ ] Prototype scope is small enough.
* [ ] Release scope is separate from prototype scope.
* [ ] Out-of-scope items are listed.
* [ ] Unity porting notes exist.
* [ ] Risks are listed.
* [ ] Open questions are tracked.
* [ ] Human developer approved the scope.
* [ ] Codex can implement the next task without guessing.

## Approval

Approved by:

Approval date:

Notes:
