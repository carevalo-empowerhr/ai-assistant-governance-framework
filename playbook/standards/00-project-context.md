# Payroll123 Project Context

Payroll123 is an enterprise HRMS and payroll platform.
AI work on this project must preserve payroll correctness, company isolation, and production compatibility.

## Runtime

- Target PHP version: PHP 8.4.
- Local development commonly uses Docker with PHP-FPM and Nginx.
- Production PHP behavior should be treated as aligned with local Docker PHP 8.4 behavior.
- Local application URL is commonly `http://localhost/dev/`.

## Code Location

The Payroll123 source code lives in the `payroll123/` subdirectory of this governance framework root.
When this framework is opened as the workspace root in Claude Code or Codex, the assistant must
look for all Payroll123 source files under `payroll123/`.

If `payroll123/` does not contain source files, the developer must clone Payroll123 there first:

```bash
git clone <payroll123-repo-url> payroll123
```

## Typical Source Layout

```text
payroll123/               ← all Payroll123 code lives here
|-- api/       REST endpoints and addon logic
|-- classes/   OOP classes, one file per class
|-- cli/       command-line scripts
|-- cron/      scheduled jobs
|-- krnl/      core config, functions, and bootstrap
|-- pg/        UI pages based on processGrid()
|-- pgx/       extended pages, reports, and components
|-- plugins/   country and feature plugins
|-- extensions/
|   └── companies/   company-specific overrides
```

## Common Development Signals

The assistant SHOULD detect and record:

- company code,
- country code,
- transaction name,
- report name,
- plugin or extension path,
- whether the request is global or company-specific.

## Payroll Domain Sensitivity

Treat these domains as high-risk:

- payroll runs,
- salary and wage types,
- deductions,
- benefits,
- taxes,
- loans and balances,
- attendance and time events,
- overtime,
- accounting integration,
- employee identity and banking data,
- approvals and workflow.

## Assistant Assumption Rule

If the assistant is unsure whether a change affects payroll, privacy, authorization, or company isolation, it MUST classify the work as high-risk and say so.
