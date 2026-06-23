# Request Intake Workflow

Use this workflow before implementation.

## Required Intake Questions

The assistant SHOULD infer these from the user request and repository context:

- What is the requested outcome?
- Is a company code mentioned?
- Is a country, plugin, transaction, report, API, or page mentioned?
- Is the change bug fix, enhancement, migration, audit, or review?
- Does it touch payroll, security, privacy, permissions, or database writes?
- What validation is possible in the current environment?

Ask the human only when the missing answer would make implementation risky.

## Required Context Gathering

Before editing, inspect:

- the target file,
- nearby files with similar behavior,
- company extension path if company-specific,
- plugin path if country-specific,
- base file if extension/plugin behavior depends on it,
- existing tests when relevant.

## Intake Output For Non-Trivial Work

Provide a short plan with:

- scope,
- likely files,
- risk level,
- implementation steps,
- validation plan.

## Stop Conditions

Stop and ask for human approval when:

- the requested behavior conflicts with Payroll123 architecture,
- a company-specific request appears to require global behavior,
- payroll formulas or legal/statutory calculations are ambiguous,
- destructive data operations are requested,
- production credentials or secrets would be needed.
