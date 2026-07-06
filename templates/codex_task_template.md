# Codex Task Template

## Task Title

`<short clear task name>`

## Current Stage

`<stage name from workflow_stages.md>`

## Owner

Codex

## Goal

Describe the exact outcome this task should achieve.

Example:

Create the initial repository folder structure and placeholder documentation files for the Game Factory project.

## Background

Provide only the context needed for this task.

Include links or paths to relevant docs.

Example:

Relevant documents:

```text
docs/vision.md
docs/north_star.md
docs/pipeline.md
docs/architecture.md
```

## Scope

Codex should do:

*
*
*

## Out of Scope

Codex should not do:

*
*
*

## Input Files

Codex should read:

```text
AGENTS.md
workflow/current_task.md
docs/architecture.md
```

Add more as needed.

## Expected Output

Codex should produce:

*
*
*

## Files To Create Or Update

```text
path/to/file.md
path/to/file.ext
```

## Implementation Requirements

Requirements:

*
*
*

## Documentation Requirements

Update:

```text
workflow/handover.md
workflow/done.md
workflow/next_actions.md
docs/changelog.md
```

Add other docs if needed.

## Quality Requirements

The result should be:

* scoped to this task
* easy to review
* consistent with current docs
* not over-engineered
* ready for the next task

## Tests Or Checks

Run if available:

```text
<test command>
<lint command>
<build command>
```

If no automated checks exist, document manual checks in `workflow/done.md`.

## Stop Conditions

Codex must stop and update `workflow/blockers.md` or `workflow/review_requests.md` if:

*
*
*

## Review Needed

Review type:

* [ ] Human review
* [ ] ChatGPT review
* [ ] Code review
* [ ] Gameplay review
* [ ] Asset review
* [ ] Architecture review
* [ ] No review needed

Review questions:

*
*

## Commit Instructions

Commit after completing the task?

* [ ] Yes
* [ ] No

Suggested branch:

```text
task/<short-task-name>
```

Suggested commit message:

```text
type(scope): summary
```

## Notes For Codex

*
*
