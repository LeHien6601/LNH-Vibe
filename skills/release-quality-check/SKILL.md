---

name: release-quality-check
description: Review a game for release readiness across gameplay, UI, performance, save/load, monetization, assets, QA, store materials, and documentation.
-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Release Quality Check Skill

## Purpose

Use this skill when reviewing whether a game is ready for release or close to release.

The goal is to identify release blockers, polish issues, missing store materials, technical risks, and quality gaps.

## When To Use

Use this skill for tasks involving:

* QA review
* polish review
* pre-release checklist
* store listing review
* build readiness
* monetization readiness
* final asset review
* Unity release preparation
* post-release improvement planning

## Required Input

Read relevant files:

```text
docs/current_game/game_spec.md
docs/current_game/qa_report.md
docs/current_game/polish_plan.md
docs/current_game/release_plan.md
docs/current_game/art_direction.md
docs/current_game/asset_list.md
docs/current_game/unity_port_plan.md
workflow/review_requests.md
workflow/handover.md
docs/release_checklist.md
```

Inspect release files if available:

```text
release/
assets/exported/
unity_project/
```

## Release Quality Areas

## 1. Gameplay

Check:

* core loop is understandable
* win/loss conditions work
* difficulty curve is acceptable
* levels/content are sufficient
* invalid actions behave correctly
* game does not softlock
* tutorial or onboarding is adequate
* restart and continue behavior work

## 2. UI/UX

Check:

* main menu is clear
* gameplay UI is readable
* buttons are tappable
* popups are understandable
* layout works on target aspect ratios
* text is not clipped
* navigation has no dead ends
* important feedback is visible

## 3. Visual Quality

Check:

* art style is consistent
* placeholders are removed or intentionally accepted
* icons are readable
* backgrounds do not hurt readability
* animations support clarity
* screenshots would look good enough for store listing

## 4. Audio

Check:

* core actions have sound if required
* success/failure feedback sounds are clear
* audio is not annoying
* mute/settings work if implemented
* missing audio is documented if postponed

## 5. Save/Load

Check:

* progress saves correctly
* restart does not corrupt data
* app close/reopen behavior is acceptable
* settings persist
* purchases or remove-ads state are handled if relevant
* save reset/testing behavior is documented

## 6. Performance

Check:

* target device performance is acceptable
* no obvious frame drops
* memory use is reasonable
* asset sizes are reasonable
* no excessive object creation in gameplay loops
* loading time is acceptable

## 7. Monetization

Only check if monetization is in scope.

Check:

* interstitial placement is not too aggressive
* rewarded ads are optional and clear
* remove-ads IAP is respected
* failed ad behavior is handled
* purchase restore behavior is considered where relevant
* monetization does not break game feel

## 8. Policy & Privacy

Check:

* privacy-related notes exist
* ads/IAP implications are documented
* data collection is documented if analytics are used
* store listing does not make misleading claims

## 9. Store Materials

Check:

* app name
* short description
* full description
* release notes
* screenshots plan
* feature graphic plan
* icon
* promotional text if needed

## 10. Documentation

Check:

* game spec matches implementation
* release scope is clear
* known issues are documented
* QA report exists
* changelog is updated
* handoff is updated

## Release Status Values

Use:

```text
Not Ready
Needs Fixes
Needs Polish
Release Candidate
Approved For Release
```

## Severity Levels

Use:

```text
Blocker
High
Medium
Low
Nice-To-Have
```

## Issue Format

Use:

```markdown
## Issue: <title>

Severity: Blocker / High / Medium / Low / Nice-To-Have  
Area: Gameplay / UI / Visual / Audio / Save / Performance / Monetization / Store / Docs  

### Problem

### Expected

### Suggested Fix

### Owner

Human / ChatGPT / Codex
```

## Output Format

Use:

```markdown
# Release Quality Review

## Overall Status

Not Ready / Needs Fixes / Needs Polish / Release Candidate / Approved For Release

## Summary

## Blockers

## High Priority Issues

## Medium Priority Issues

## Low Priority Issues

## Store Readiness

## Documentation Readiness

## Recommended Fix Order

## Approval Notes
```

## Approval Rule

Only the human developer can give final release approval.

ChatGPT may recommend `Release Candidate` or `Approved For Release`, but human approval is still required.

Codex must not approve final release by itself.

## Stop Conditions

Stop and request human or ChatGPT review if:

* gameplay quality cannot be judged automatically
* visual quality needs human approval
* monetization comfort requires human decision
* store materials require creative approval
* target device testing is required
* release policy risk is unclear

## Documentation Updates

After a release quality check, update:

```text
docs/current_game/qa_report.md
docs/current_game/polish_plan.md
docs/current_game/release_plan.md
workflow/review_requests.md
workflow/handover.md
docs/changelog.md
```

If final release is approved, record the decision in:

```text
docs/decisions.md
```

## Anti-Patterns

Avoid:

* approving release based only on code completion
* ignoring gameplay feel
* ignoring store materials
* treating prototype quality as release quality
* releasing with undocumented blockers
* adding new features during final QA unless required
* letting Codex decide final release readiness alone
