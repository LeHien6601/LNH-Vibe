# Documentation Rules

## Purpose

This document defines how documentation should be written, updated, and maintained in the Game Factory repository.

Documentation is not optional. It is the shared memory between the human developer, ChatGPT, Codex, and future AI tools.

The goal is to make the project understandable without relying on chat history.

## Core Rule

If a decision, rule, workflow, module, or product direction matters for future work, it must be documented in the repository.

Chat history is temporary.
Repository documentation is persistent.

## Documentation Source of Truth

Use this priority order:

```text
1. Approved human decisions
2. docs/ files
3. workflow/ files
4. source code
5. chat history
```

If two sources conflict, record the conflict in:

```text
workflow/blockers.md
workflow/review_requests.md
```

and resolve it before continuing major work.

## Documentation Folder Structure

Recommended structure:

```text
docs/
  vision.md
  north_star.md
  pipeline.md
  workflow_stages.md
  game_spec_standard.md
  architecture.md
  module_rules.md
  module_index.md
  ai_workflow.md
  codex_workflow.md
  documentation_rules.md
  decisions.md
  changelog.md
  roadmap.md
  release_checklist.md

  current_game/
    idea.md
    game_spec.md
    prototype_plan.md
    art_direction.md
    asset_list.md
    unity_port_plan.md
    qa_report.md
    polish_plan.md
    release_plan.md
    post_release_review.md
```

## Workflow Folder Structure

Recommended structure:

```text
workflow/
  current_stage.md
  current_task.md
  next_actions.md
  blockers.md
  review_requests.md
  handover.md
  done.md
```

The `workflow/` folder is for current project state.
The `docs/` folder is for longer-term project knowledge.

## Template Folder Structure

Recommended structure:

```text
templates/
  game_spec_template.md
  codex_task_template.md
  handover_template.md
  decision_record_template.md
  art_direction_template.md
  unity_port_plan_template.md
  release_checklist_template.md
```

## Documentation Types

## 1. Vision Documents

Examples:

```text
docs/vision.md
docs/north_star.md
```

Purpose:

* define long-term direction
* define project principles
* guide strategic decisions

Update when:

* project direction changes
* target product type changes
* major long-term goals change

Do not update frequently for small implementation details.

## 2. Pipeline Documents

Examples:

```text
docs/pipeline.md
docs/workflow_stages.md
```

Purpose:

* define production stages
* define review gates
* define handoff process
* define stop conditions

Update when:

* workflow changes
* a new production stage is added
* review gates change
* handoff rules change

## 3. Architecture Documents

Examples:

```text
docs/architecture.md
docs/module_rules.md
docs/module_index.md
```

Purpose:

* define architecture direction
* define module lifecycle
* track reusable systems
* prevent over-engineering

Update when:

* folder structure changes
* module status changes
* architecture rules change
* reuse policy changes

## 4. Game-Specific Documents

Examples:

```text
docs/current_game/game_spec.md
docs/current_game/prototype_plan.md
docs/current_game/art_direction.md
docs/current_game/unity_port_plan.md
```

Purpose:

* define the active game
* track scope
* guide implementation
* support review
* support Unity porting

Update when:

* game rules change
* scope changes
* assets change
* UI flow changes
* Unity mapping changes

## 5. Workflow Documents

Examples:

```text
workflow/current_task.md
workflow/handover.md
workflow/blockers.md
workflow/review_requests.md
workflow/done.md
```

Purpose:

* track current work
* help Codex continue safely
* help ChatGPT review efficiently
* expose blockers and review needs

Update after every meaningful work session.

## 6. Decision Records

Examples:

```text
docs/decisions.md
```

Purpose:

* record important decisions
* explain why decisions were made
* prevent repeated debate
* give AI tools historical context

Update when a major decision is made.

## 7. Changelog

Examples:

```text
docs/changelog.md
```

Purpose:

* track meaningful project changes
* summarize what changed
* record files affected
* identify follow-up work

Update after meaningful documentation, workflow, code, asset, or architecture changes.

## Writing Style

Documentation should be:

* clear
* direct
* specific
* practical
* easy for AI tools to parse
* easy for a human developer to scan

Avoid:

* vague statements
* hidden assumptions
* long philosophical explanations
* outdated promises
* undocumented exceptions
* chat-like wording inside core docs

## Good Documentation Example

Good:

```markdown
## Rule: Codex Stop Condition

Codex must stop if implementation requires missing art assets or human gameplay judgment.
When blocked, Codex should update `workflow/blockers.md` and `workflow/handover.md`.
```

Bad:

```markdown
Codex should probably be careful and maybe ask if something looks wrong.
```

## Document Header Rule

Every important document should start with:

```markdown
# Document Title

## Purpose

Explain why this document exists.
```

Optional metadata:

```markdown
Status: Draft / Approved / Active / Deprecated  
Owner: Human / ChatGPT / Codex  
Last Updated: YYYY-MM-DD
```

## Status Values

Use these status values:

```text
Draft
Review Needed
Approved
Active
Deprecated
Archived
```

## Ownership Values

Use these owner values:

```text
Human
ChatGPT
Codex
Human + ChatGPT
Human + Codex
ChatGPT + Codex
Human + ChatGPT + Codex
```

## Update Rules

## Codex Must Update Docs When

Codex changes:

* source code behavior
* folder structure
* data format
* module status
* workflow state
* current task state
* known blockers
* review requests
* implementation assumptions

Minimum update after meaningful Codex work:

```text
workflow/handover.md
workflow/done.md
docs/changelog.md
```

## ChatGPT Should Update Docs When

ChatGPT helps define or change:

* vision
* game design
* product scope
* architecture
* pipeline
* task plan
* review decision
* asset direction
* Unity porting plan
* release plan

## Human Should Approve Docs When

A document affects:

* product direction
* release scope
* monetization
* architecture strategy
* module promotion
* art direction
* final release decision

## Decision Recording Rule

Record a decision if it affects future work.

Examples:

* choosing the first target genre
* choosing web prototype technology
* choosing Unity as final engine
* choosing portrait mobile as the first target
* deciding not to build a feature yet
* deciding when to promote a module
* deciding monetization direction

Use:

```text
docs/decisions.md
```

For large decisions, use the decision record template.

## Changelog Rule

Record a changelog entry when:

* new docs are created
* major docs are updated
* folder structure changes
* prototype behavior changes
* Unity porting direction changes
* modules are created, promoted, deprecated, or changed
* release materials are created or updated
* major blockers are resolved

Small typo fixes do not require changelog entries unless they affect meaning.

## Blocker Documentation Rule

A blocker must include:

* type
* description
* why it blocks progress
* required decision or asset
* suggested options
* owner

Blockers live in:

```text
workflow/blockers.md
```

## Review Request Documentation Rule

A review request must include:

* review type
* what changed
* files or screens to review
* questions
* risk level
* recommended next step

Review requests live in:

```text
workflow/review_requests.md
```

## Handoff Documentation Rule

A handoff must include:

* current state
* completed work
* files changed
* tests/checks performed
* important decisions
* known issues
* blockers
* review needed
* next recommended task
* notes for ChatGPT
* notes for Codex

Handoffs live in:

```text
workflow/handover.md
```

## File Naming Rules

Use lowercase file names with underscores.

Good:

```text
game_spec.md
unity_port_plan.md
release_checklist.md
asset_list.md
```

Bad:

```text
GameSpecFinal.md
UnityPlanNEW.md
release checklist.md
asset-list-v2-final.md
```

## Folder Naming Rules

Use lowercase folder names with underscores.

Good:

```text
current_game
save_system
unity_porting
release_quality_check
```

Bad:

```text
CurrentGame
SaveSystemFinal
UnityPortingStuff
Release-Check
```

## Markdown Formatting Rules

Use:

* `#` for document title
* `##` for major sections
* `###` for subsections
* bullet lists for short lists
* tables only when comparison is useful
* code blocks for file paths, commands, examples, schemas, and workflows

Avoid deeply nested headings unless necessary.

## AI-Friendly Rules

To make docs easier for AI tools:

* keep sections explicit
* avoid ambiguous pronouns
* include file paths
* write stop conditions clearly
* write out-of-scope clearly
* keep decisions separate from speculation
* use templates for repeated structures

## Outdated Documentation Rule

If a document is outdated, do not silently ignore it.

Do one of:

1. update the document
2. mark the section as deprecated
3. create a blocker if the correct direction is unclear
4. record the new decision in `docs/decisions.md`

## Documentation Review Checklist

Before considering docs ready, check:

* [ ] Purpose is clear.
* [ ] Scope is clear.
* [ ] Important decisions are recorded.
* [ ] Stop conditions are explicit if relevant.
* [ ] File paths are correct.
* [ ] Status is clear.
* [ ] The document can be understood without chat history.
* [ ] Codex can use it without guessing.
* [ ] ChatGPT can review from it.
* [ ] Human developer can make decisions from it.

## Anti-Patterns

Avoid:

* relying on chat history
* updating code but not docs
* hiding decisions in commit messages only
* writing vague instructions
* creating docs no one uses
* duplicating conflicting rules across files
* letting Codex rewrite strategic docs without approval
* treating documentation as lower priority than code
