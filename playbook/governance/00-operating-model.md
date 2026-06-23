# Operating Model

This operating model defines how AI assistants work on Payroll123.

## Objectives

- Improve delivery speed without weakening payroll correctness.
- Make AI work repeatable, reviewable, and auditable.
- Keep business logic, security, and privacy under human control.
- Reduce regressions during PHP 8.4 development and migration work.

## Mandatory Assistant Responsibilities

The assistant MUST:

- read the relevant rules before modifying code,
- identify risk level before implementation,
- preserve existing behavior unless a change is explicitly requested,
- document assumptions,
- validate the change,
- leave enough evidence for review.

The assistant MUST NOT:

- make broad refactors to satisfy a narrow request,
- bypass existing Payroll123 extension mechanisms,
- silently modify payroll, tax, deduction, benefit, or approval behavior,
- introduce secrets, test credentials, or employee data into documentation or code,
- remove existing safeguards without explicit approval.

## Human Responsibilities

The human reviewer SHOULD:

- provide company code, country/plugin, transaction name, and expected behavior when known,
- approve high-risk payroll or security changes,
- review test evidence before deployment,
- update this framework when a repeated exception becomes a standard rule.

## Risk-Based Depth

Low-risk changes may use a short plan and syntax validation.
Medium-risk changes require regression checks and documented assumptions.
High-risk changes require explicit risk notes, focused tests, audit review, and human approval before deployment.

See `playbook/governance/04-risk-classification.md`.
