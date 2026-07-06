# Decisions

## Purpose

This document records important decisions for the Game Factory project.

A decision should be recorded when it affects future work, architecture, scope, workflow, production quality, monetization, platform direction, or module strategy.

The goal is to prevent repeated debate and give ChatGPT, Codex, and the human developer a clear history of why the project works the way it does.

## Decision Status Values

Use these status values:

```text
Proposed
Approved
Rejected
Superseded
Deprecated
```

## Decision Impact Levels

Use these impact levels:

```text
Low
Medium
High
Critical
```

## Decision Log

| ID     | Date       | Decision                                                             | Status   | Impact | Owner           | Related Files                            |
| ------ | ---------- | -------------------------------------------------------------------- | -------- | ------ | --------------- | ---------------------------------------- |
| D-0001 | YYYY-MM-DD | Use docs as the project source of truth.                             | Approved | High   | Human + ChatGPT | docs/documentation_rules.md              |
| D-0002 | YYYY-MM-DD | Build one complete game before extracting stable reusable modules.   | Approved | High   | Human + ChatGPT | docs/north_star.md, docs/module_rules.md |
| D-0003 | YYYY-MM-DD | Use web prototype first, then port to Unity for release-bound games. | Approved | High   | Human + ChatGPT | docs/pipeline.md, docs/architecture.md   |

## Decision Details

## D-0001: Use Docs As Project Source Of Truth

Status: Approved
Impact: High
Owner: Human + ChatGPT
Date: YYYY-MM-DD

### Context

The project will involve long-running collaboration between the human developer, ChatGPT, and Codex. Chat history is not reliable as the only memory source.

### Decision

The repository documentation should act as the project source of truth.

Important knowledge should be stored in:

```text
docs/
workflow/
templates/
skills/
AGENTS.md
```

### Reason

This allows ChatGPT, Codex, and future AI tools to understand the project without requiring the full chat history.

### Consequences

Positive:

* easier handoff
* better Codex task quality
* less repeated explanation
* better long-term maintainability

Negative:

* documentation must be updated consistently
* stale docs can mislead AI tools

### Related Files

```text
docs/documentation_rules.md
docs/ai_workflow.md
docs/codex_workflow.md
workflow/handover.md
```

---

## D-0002: Build Product First, Extract Modules Later

Status: Approved
Impact: High
Owner: Human + ChatGPT
Date: YYYY-MM-DD

### Context

The long-term goal is to build a system capable of creating many games. However, building a large generic framework too early can cause over-engineering.

### Decision

The project should first create a small complete release-ready game, then extract reusable modules from proven repeated needs.

### Reason

Real production work reveals which systems are actually reusable.

### Consequences

Positive:

* avoids over-engineering
* keeps first game shippable
* modules are based on real needs
* improves practical quality

Negative:

* some early code may be game-specific
* refactoring will be needed after reuse is proven

### Related Files

```text
docs/north_star.md
docs/module_rules.md
docs/module_index.md
```

---

## D-0003: Use Web Prototype Before Unity Port

Status: Approved
Impact: High
Owner: Human + ChatGPT
Date: YYYY-MM-DD

### Context

The system should support fast prototyping and later Unity release. Web prototypes are faster to iterate and easier for AI tools to generate quickly.

### Decision

For suitable casual games, create a web prototype first, then port the approved design to Unity.

### Reason

This allows fast validation of game rules, UI flow, and feel before investing in Unity-specific implementation.

### Consequences

Positive:

* faster iteration
* easier gameplay review
* clearer Unity port plan
* less wasted Unity implementation work

Negative:

* porting requires discipline
* web implementation should not become the final architecture by accident
* some Unity-specific feel must be reworked later

### Related Files

```text
docs/pipeline.md
docs/architecture.md
docs/game_spec_standard.md
```

## How To Add A New Decision

Use this format:

````markdown
## D-XXXX: Decision Title

Status: Proposed / Approved / Rejected / Superseded / Deprecated  
Impact: Low / Medium / High / Critical  
Owner: Human / ChatGPT / Codex / Human + ChatGPT  
Date: YYYY-MM-DD  

### Context

Why is this decision needed?

### Decision

What was decided?

### Reason

Why was this option chosen?

### Alternatives Considered

- Option A:
- Option B:
- Option C:

### Consequences

Positive:

- 

Negative:

- 

### Related Files

```text
path/to/file
````

```

## When To Record A Decision

Record decisions for:

- product direction
- target platform
- target genre
- major scope cuts
- architecture rules
- module promotion
- monetization strategy
- release approval
- AI workflow changes
- tool choices
- folder structure changes
- data format choices

Do not record every tiny implementation detail.

## Superseding A Decision

If a decision changes later, do not delete the old decision.

Instead:

1. mark the old decision as `Superseded`
2. add the new decision
3. link both decisions
4. explain why the change happened

## Decision Review Checklist

Before approving a decision, check:

- [ ] The context is clear.
- [ ] The decision is specific.
- [ ] The reason is documented.
- [ ] Alternatives were considered if relevant.
- [ ] Consequences are listed.
- [ ] Related files are listed.
- [ ] The decision does not conflict with approved docs.
- [ ] Human approval is included for major decisions.
```
