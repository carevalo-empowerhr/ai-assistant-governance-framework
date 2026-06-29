# Architecture Standard

AI changes MUST fit the existing Payroll123 architecture.

## PHP Classes

- Classes extend `CORE`.
- Do not add namespaces.
- Use one class per file when following existing class patterns.
- Declare table names as class constants, for example:

```php
const TBL_NAME = 'DB_Table';
```

- Prefer existing base classes, helpers, and project idioms.
- Before creating a new function or method, search the codebase for existing ones that already provide the same or similar behavior. Reuse and extend what exists rather than duplicating functionality.

## Pages And Components

- Files under `pg/` and `pgx/` MUST start with:

```php
<?php if (! SYS) die;
```

- Do not change `processGrid()` arguments unless the requested behavior requires it and regression risk is reviewed.
- Preserve existing labels, visibility flags, alignment, and grid behavior unless explicitly requested.

## APIs

- Follow existing addon structure, commonly `def.php` plus `logic.php`.
- Keep request validation and response shape consistent with nearby endpoints.
- Do not expose extra employee, payroll, or company data.

## Core Files

Files under `krnl/` are high-impact.
Changing them requires explicit scope, regression notes, and strong validation.

## Extensions And Plugins

Use precedence:

1. `extensions/companies/{COMPANY}/` for company-specific behavior.
2. `plugins/{COUNTRY_CODE}/` for country-level behavior.
3. Base files only for global behavior.

See `playbook/standards/05-company-extension-rules.md`.

## Anti-Patterns

Do not:

- create parallel architecture for a narrow feature,
- add framework-style abstractions that are not used by the project,
- move logic across layers without a clear requirement,
- refactor old code while fixing a specific bug,
- introduce new dependencies without approval,
- create new functions or methods that duplicate behavior already available in existing code.
