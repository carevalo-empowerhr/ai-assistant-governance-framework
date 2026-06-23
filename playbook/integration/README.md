# Integration Guide

Use this guide to make Codex, Claude, or another assistant load this framework for Payroll123 work.

## Best Option

Place `AGENTS.md` and `CLAUDE.md` in the root where the assistant session starts.
If the assistant session starts in the Payroll123 Docker repository, the root should contain both files.

## Pointer Option

If you do not want to duplicate the full files, create short root files that point to this framework.
The assistant MUST follow the pointer and read the framework before modifying code.

## Codex Root Stub

Create or update `AGENTS.md` in the assistant working root with the content below.
Replace `<FRAMEWORK_PATH>` with the actual path to this framework on your machine
(e.g. `/home/user/ai-assistant-governance-framework` or `C:\projects\ai-assistant-governance-framework`).

```markdown
# Payroll123 AI Instructions

Before working on this repository, read and follow:

`<FRAMEWORK_PATH>/AGENTS.md`

The framework rules are mandatory. If this local file conflicts with the framework, follow the stricter Payroll123 safety rule.
```

## Claude Root Stub

Create or update `CLAUDE.md` in the assistant working root with the content below.
Replace `<FRAMEWORK_PATH>` with the actual path to this framework on your machine.

```markdown
# Payroll123 Claude Instructions

Before working on this repository, read and follow:

`<FRAMEWORK_PATH>/CLAUDE.md`

The framework rules are mandatory. If this local file conflicts with the framework, follow the stricter Payroll123 safety rule.
```

## Session Starter Prompt

Use this at the start of an AI session if the assistant does not automatically read project files.
Replace `<FRAMEWORK_PATH>` with the actual path to this framework on your machine.

```text
You are working on Payroll123. Before doing anything, read the AI governance framework at <FRAMEWORK_PATH>. Follow AGENTS.md or CLAUDE.md, then follow the relevant standards, workflows, testing, and audit files for the request.
```

## Verification

Before accepting AI work, check that the assistant response mentions:

- relevant standards read,
- affected company or plugin scope,
- validation performed,
- risk or audit notes for payroll, security, or data changes.
