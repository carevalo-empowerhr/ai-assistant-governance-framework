# Release Workflow

Use this workflow before deployment or handoff.

## Release Readiness

Before release, confirm:

- change scope is clear,
- tests or validation are documented,
- audit is complete for high-risk work,
- rollback path is known,
- no secrets or private employee data are included.

## Deployment Caution

AI assistants MUST NOT deploy to production without explicit human approval.

## Release Notes

Release notes SHOULD include:

- request reference,
- affected modules,
- user-visible behavior change,
- validation evidence,
- known limitations,
- rollback notes.

## Post-Release Monitoring

For medium-risk and high-risk changes, recommend monitoring:

- PHP error logs,
- application logs,
- report totals,
- user permissions,
- payroll run results,
- failed exports or API calls.
