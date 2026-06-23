# Definition Of Done

A Payroll123 AI-assisted change is done only when all applicable items are complete.

## Required For Every Change

- The request was understood and scoped.
- Relevant existing files and patterns were inspected.
- Changes are limited to the requested behavior.
- No unrelated formatting or refactoring was introduced.
- No secrets or private employee data were added.
- Validation was run or clearly documented as unavailable.
- The final response includes changed files, validation, assumptions, and risks.

## Required For PHP Changes

- Modified PHP files pass syntax validation where possible.
- PHP 8.4 compatibility was considered.
- `pg/` and `pgx/` files keep the `<?php if (! SYS) die;` guard.
- New or changed SQL uses PDO prepared statements.
- Multibyte string work uses `mb_*`.
- No `declare(strict_types=1)` was added.

## Required For Payroll Or HR Data Changes

- Payroll totals, deductions, taxes, benefits, loans, attendance, overtime, and approvals were treated as high-risk.
- Existing formulas and business rules were preserved unless explicitly changed.
- Before/after behavior is documented.
- Regression checks cover affected companies, countries, periods, and employee scenarios where practical.

## Required For Company-Specific Work

- `extensions/companies/{COMPANY}/` was checked first.
- The base file was changed only if the fix is global.
- The reason for extension, plugin, or base placement is documented.

