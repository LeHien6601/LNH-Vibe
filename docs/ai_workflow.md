# AI Workflow

## Purpose

This document defines how the human developer, ChatGPT, and Codex work together inside the Game Factory system.

The goal is to make AI-assisted development structured, safe, repeatable, and release-focused.

## Core Principle

AI should not work from vague memory.

All important context should be stored in the repository through documentation, workflow files, templates, tasks, and handoff notes.

## Roles

## Human Developer

The human developer is the final decision maker.

Responsibilities:

* choose product direction
* approve game ideas
* approve gameplay feel
* approve art direction
* approve release quality
* test on real devices when possible
* publish the final product
* decide whether to continue, cut, postpone, or refactor

The human developer should not need to manually explain the whole project every time. The repository should contain enough context for AI tools to continue work.

## ChatGPT

ChatGPT acts as:

* product strategist
* game designer
* creative director
* system architect
* reviewer
* documentation assistant
* task planner
* prompt designer

ChatGPT should be used for:

* discussing vision
* defining scope
* writing and refining specs
* designing pipeline rules
* creating Codex-ready tasks
* reviewing architecture
* reviewing gameplay direction
* reviewing assets
* writing store listing content
* resolving blockers
* updating documentation drafts

ChatGPT should not be treated as the direct code executor unless code is being drafted for Codex or manual use.

## Codex

Codex acts as:

* implementation engineer
* refactor assistant
* file editor
* test/build runner
* documentation updater
* Git workflow assistant

Codex should be used for:

* creating files
* editing code
* implementing scoped tasks
* running tests/checks
* updating documentation after implementation
* preparing commits
* pushing code or opening pull requests when configured

Codex should not decide major product direction by itself.

## Standard Collaboration Flow

```text
Human + ChatGPT
→ define vision, scope, spec, architecture, task

Codex
→ implements scoped task, updates docs, reports result

Human + ChatGPT
→ reviews result, resolves blockers, approves next task

Codex
→ continues with the next approved task
```

## Repository As Shared Context

The repository is the shared memory between all participants.

Important context should live in:

```text
docs/
workflow/
templates/
skills/
AGENTS.md
```

Chat history is temporary.
Repository documentation is persistent.

## Source of Truth Priority

Use this priority order:

```text
1. Human decision
2. Approved docs
3. Current workflow files
4. Source code
5. Chat discussion
```

If source code conflicts with approved documentation, the conflict should be surfaced in `workflow/blockers.md` or `workflow/review_requests.md`.

## ChatGPT Input Context

When asking ChatGPT to continue project work, provide or summarize:

* relevant docs
* `workflow/handover.md`
* `workflow/current_task.md`
* `workflow/blockers.md`
* `workflow/review_requests.md`
* user feedback
* Codex result summary

ChatGPT should not require the full codebase for every decision.

## Codex Input Context

Codex should mainly work from:

* `AGENTS.md`
* `docs/`
* `workflow/current_task.md`
* `workflow/handover.md`
* relevant source files
* relevant skill files

Codex should not start broad work without a clear task.

## Work Types

## Strategy Work

Owner:

```text
Human + ChatGPT
```

Examples:

* choose game direction
* define target genre
* define release goal
* decide first game scope
* decide monetization strategy

Codex should not perform strategy work.

## Design Work

Owner:

```text
Human + ChatGPT
```

Examples:

* game mechanics
* UI flow
* art direction
* progression
* level design direction
* player feedback design

Codex may help implement design, but should not invent major design changes.

## Implementation Work

Owner:

```text
Codex
```

Examples:

* create project structure
* write code
* refactor files
* implement prototype
* create validators
* update docs after changes
* run tests

ChatGPT may prepare or review implementation tasks.

## Review Work

Owner:

```text
Human + ChatGPT
```

Examples:

* code review
* architecture review
* asset review
* gameplay review
* QA review
* release review

Codex may prepare review summaries, but final judgment belongs to the human developer and ChatGPT.

## Asset Work

Owner:

```text
Human + ChatGPT + Codex
```

Suggested flow:

```text
ChatGPT creates art direction and asset prompts
→ Human approves style
→ Assets are generated or created
→ Codex organizes and integrates approved assets
→ Human/ChatGPT reviews in context
```

Codex should not assume unapproved generated assets are final.

## Handoff Work

Owner:

```text
Codex + ChatGPT
```

Every meaningful work session should update:

```text
workflow/handover.md
workflow/done.md
workflow/next_actions.md
```

If blocked, update:

```text
workflow/blockers.md
```

If review is needed, update:

```text
workflow/review_requests.md
```

## Standard Review Gates

The project should use these review gates:

1. Vision approval
2. Pipeline approval
3. Game spec approval
4. Prototype scope approval
5. Prototype gameplay review
6. Art direction approval
7. Asset approval
8. Unity port plan approval
9. Unity implementation review
10. QA approval
11. Release approval
12. Post-release review

Codex should not pass major gates by itself.

## When Codex Should Continue

Codex can continue when:

* the current task is clear
* scope is limited
* required files are available
* no approval gate is blocking progress
* no required asset is missing
* no major product decision is needed
* expected output is defined

## When Codex Should Stop

Codex should stop when:

* task scope is unclear
* product direction is unclear
* implementation requires missing assets
* gameplay feel needs human judgment
* art quality needs approval
* a major architecture decision is required
* the task would change large parts of the repo
* documentation conflicts with code
* tests fail in a way that requires design decision
* release quality cannot be judged automatically

When stopping, Codex should update:

```text
workflow/blockers.md
workflow/handover.md
```

or:

```text
workflow/review_requests.md
workflow/handover.md
```

## Standard Handoff Summary

Every handoff should include:

* current stage
* task completed
* files changed
* tests/checks performed
* important decisions
* blockers
* review needed
* next recommended task
* notes for ChatGPT
* notes for Codex

## ChatGPT Review Rules

When reviewing Codex output, ChatGPT should check:

* Does it match the task?
* Did it stay within scope?
* Did it update required docs?
* Did it introduce unnecessary architecture?
* Does it support Unity porting?
* Are stop conditions respected?
* Are blockers clearly documented?
* Is the next task clear?

## Human Review Rules

The human developer should focus on:

* fun
* clarity
* visual quality
* product direction
* release readiness
* mobile feel
* monetization comfort
* final approval

AI can assist with analysis, but the human developer owns final taste and judgment.

## AI Decision Policy

AI may suggest decisions.

AI may not silently finalize major decisions.

Major decisions include:

* changing the game genre
* expanding release scope
* changing monetization
* changing architecture direction
* changing target platform
* promoting a module to stable
* replacing core technology
* cutting major features
* approving final release

These should be recorded in:

```text
docs/decisions.md
```

## Minimum AI Workflow For First Game

For the first game, keep the workflow simple:

```text
ChatGPT: spec and task
→ Codex: prototype implementation
→ Human: gameplay review
→ ChatGPT: improvement plan
→ Codex: fixes
→ Human: approval
```

Avoid building a heavy process before the first game proves the factory.

## Success Criteria

The AI workflow is working if:

* ChatGPT can continue from docs and workflow files
* Codex can implement without guessing
* blockers are visible
* reviews are requested at the right time
* docs stay updated
* the human developer makes final decisions
* each AI tool is used for its strongest role
