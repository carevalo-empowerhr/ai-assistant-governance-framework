# Session Starter Prompts

Use these prompts when an AI assistant does not automatically load repository files.

## General

```text
You are working on Payroll123. Before doing anything, read the AI governance framework at <FRAMEWORK_PATH>. Follow AGENTS.md or CLAUDE.md, then follow the relevant standards, workflows, testing, and audit files for the request.
```

> Replace `<FRAMEWORK_PATH>` with the actual path to the framework on your machine.

## Implementation

```text
Before implementing, read the Payroll123 AI governance framework. Identify company code, plugin/base scope, risk level, implementation plan, and validation plan. Follow the framework definition of done.
```

## Review

```text
Review this Payroll123 change using the AI governance framework. Lead with findings by severity. Focus on payroll correctness, company isolation, authorization, SQL safety, PHP 8.4 compatibility, and missing tests.
```

## Audit

```text
Audit this Payroll123 change using the AI governance framework. Classify each finding as KEEP, KEEP (PHP8), REVERT, ADJUST, or NEEDS HUMAN DECISION. Do not group unrelated diffs.
```
