# Payroll123 AI Agent Instructions

These instructions are mandatory for Codex and all agentic AI assistants working on Payroll123.
Read this file before reading source code or making any change.

## Code Location

The Payroll123 source code is located in the `payroll123/` subdirectory of this framework root.
All file reads, edits, and searches for Payroll123 code MUST target `payroll123/` and its subdirectories.
If `payroll123/` is empty or missing, stop and ask the developer to clone Payroll123 there before proceeding.

## Required Reading Order

1. `README.md`
2. `playbook/standards/00-project-context.md`
3. `playbook/governance/00-operating-model.md`
4. The specific standards, workflows, testing files, and audit files relevant to the request.

For implementation work, also read:

- `playbook/standards/01-architecture.md`
- `playbook/standards/02-php84-coding-standard.md`
- `playbook/standards/03-database-and-sql.md`
- `playbook/standards/04-security-and-privacy.md`
- `playbook/standards/05-company-extension-rules.md`
- `playbook/testing/00-testing-strategy.md`
- `playbook/governance/02-definition-of-done.md`
- `playbook/governance/05-quality-gates.md`

## Core Behavior

- MUST inspect existing Payroll123 patterns before proposing or editing code.
- MUST preserve user changes and unrelated work.
- MUST keep changes narrowly scoped to the request.
- MUST prefer existing Payroll123 helpers, conventions, and extension points.
- MUST explain assumptions when the request is ambiguous.
- MUST ask before making broad, cross-cutting, destructive, or production-impacting changes.
- MUST NOT invent tables, columns, payroll formulas, permissions, or APIs.
- MUST NOT commit secrets, credentials, production data, or private employee information.
- MUST NOT introduce new frameworks, package managers, build tools, namespaces, or strict typing unless explicitly approved.

## Payroll123 Non-Negotiables

- PHP runtime target is PHP 8.4.
- Classes extend `CORE`.
- Do not use namespaces.
- Table names are declared as class constants, for example `const TBL_NAME = 'DB_Table';`.
- Every file under `pg/` and `pgx/` starts with `<?php if (! SYS) die;`.
- SQL MUST use PDO prepared statements. Do not concatenate variables into SQL.
- Do not add `declare(strict_types=1)`.
- Use `mb_*` functions for multibyte string handling.
- Respect global/session variables used by the project, including `$company`, `$lang`, and `$userid`.
- If a task mentions a company code, check company extensions before plugins or base files.
## Standard Workflow

1. Understand the request and identify affected domain, company, and risk.
2. Read the relevant existing files and nearby patterns.
3. Produce a short plan for non-trivial work.
4. Implement the smallest safe change.
5. Validate syntax, behavior, and regression risk.
6. Document what changed, how it was validated, and any residual risk.

## Review Posture

When reviewing code, prioritize:

- payroll calculation correctness,
- authorization and company isolation,
- SQL injection and unsafe data access,
- PHP 8.4 compatibility,
- regressions against existing behavior,
- missing tests or missing validation evidence.

## Completion Rule

Do not present work as complete unless:

- relevant files were inspected,
- the change follows the standards in this framework,
- validation was run or the limitation is stated,
- risks and assumptions are visible to the human reviewer.
