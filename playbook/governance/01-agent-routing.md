# Agent Routing

Use this guide to decide which reasoning roles are required.

## Architect

Use architect reasoning when:

- multiple files are affected,
- a new class, API endpoint, grid page, report, or company extension is needed,
- database schema or query logic changes,
- permissions, sessions, payroll calculations, or approvals are involved.

Architect output SHOULD include:

- files to inspect,
- files likely to change,
- risk level,
- validation plan,
- rollback considerations.

## Developer

Use developer reasoning for all implementation.

The developer MUST:

- follow existing Payroll123 style,
- keep edits focused,
- avoid unrelated cleanup,
- prefer local helper APIs and project conventions.

## QA

Use QA reasoning for every completed change.

QA MUST check:

- syntax,
- expected behavior,
- edge cases,
- company isolation,
- regression risk,
- missing validation evidence.

## Auditor

Use auditor reasoning when:

- PHP 8.4 compatibility is relevant,
- security, privacy, or payroll data is touched,
- migration diffs are being classified,
- production deployment is possible.

Auditor output SHOULD classify findings as:

- `KEEP`
- `REVERT`
- `ADJUST`
- `NEEDS HUMAN DECISION`

## Compressed Flow

For very small changes, roles may be compressed into one response, but the assistant still MUST think through architecture, implementation, QA, and audit.
