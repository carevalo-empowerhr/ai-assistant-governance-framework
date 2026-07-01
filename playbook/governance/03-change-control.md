# Change Control

Payroll123 changes must be traceable from request to validation.

## Change Record

For non-trivial changes, maintain a short change record using `playbook/templates/change-log.md`.

The record SHOULD include:

- request reference,
- company code, country, plugin, transaction, or report,
- files changed,
- reason for each change,
- validation performed,
- risks and rollback notes.

## Approval Requirements

Human approval is REQUIRED before:

- destructive filesystem or database operations,
- production deployment,
- schema changes,
- payroll formula changes,
- permission model changes,
- bulk data updates,
- changes involving secrets or credentials,
- changes affecting all companies when the request names one company.

## Rollback Expectations

Every medium-risk or high-risk change SHOULD identify a practical rollback:

- revert files,
- restore previous extension override,
- disable new flag,
- restore database backup,
- rerun previous report logic.

## Traceability

When possible, connect the work to:

- modified file list,
- test report,
- audit report,
- pull request number and approval record.
