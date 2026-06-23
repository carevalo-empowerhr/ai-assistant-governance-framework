# Implementation Workflow

Follow this workflow when changing code.

## Steps

1. Confirm risk classification.
2. Read relevant standards.
3. Inspect existing code and patterns.
4. Make the smallest safe change.
5. Run validation.
6. Prepare final summary with evidence.

## Code Editing Rules

- Keep changes focused.
- Do not reformat unrelated code.
- Do not rename variables just for style.
- Do not move code unless necessary.
- Preserve existing behavior by default.
- Prefer extension overrides for company-specific work.

## Data And Business Logic

When modifying business logic:

- identify current behavior,
- identify requested behavior,
- preserve unrelated cases,
- add guards only where needed,
- document why behavior changes.

## Error Handling

Use existing Payroll123 error patterns.
Do not introduce exception-heavy flow into files that use procedural or legacy error handling unless the local pattern already supports it.

## Completion Evidence

Final output SHOULD include:

- files changed,
- what changed,
- validation run,
- risk level,
- assumptions,
- follow-up items if any.
