# Payroll123 AI Assistant Governance Framework

This repository defines the mandatory operating rules for AI-assisted development on Payroll123.
It is designed to work with Codex, Claude, and any future assistant that can read Markdown project instructions.

## Purpose

Use this framework to keep AI work consistent, auditable, secure, and aligned with Payroll123 architecture.
The framework covers:

- Assistant behavior and required workflow.
- Payroll123 architecture and coding standards.
- Security, privacy, and payroll data rules.
- Company extension precedence.
- Testing and regression expectations.
- PHP 8.4 compatibility audits.
- Change documentation and review templates.

## Entry Points

The root files are the files most AI tools are likely to read first:

| File | Intended consumer | Purpose |
| --- | --- | --- |
| `AGENTS.md` | Codex and other agentic coding tools | Mandatory AI operating instructions. |
| `CLAUDE.md` | Claude Code | Mandatory Claude project context and rule index. |
| `README.md` | Humans and assistants | Framework overview and navigation. |

When starting a new AI session, the assistant MUST read `AGENTS.md` or `CLAUDE.md` first, then follow the linked standards relevant to the request.

## Directory Structure

```text
.
|-- AGENTS.md                        ← entry point for Codex and agentic tools
|-- CLAUDE.md                        ← entry point for Claude Code
|-- README.md
|-- payroll123/                      ← clone Payroll123 source code here
|-- playbook/
|   |-- audits/
|   |   |-- 00-audit-protocol.md
|   |   |-- 01-php84-compatibility-audit.md
|   |   |-- 02-security-audit.md
|   |   `-- 03-payroll-data-audit.md
|   |-- governance/
|   |   |-- 00-operating-model.md
|   |   |-- 01-agent-routing.md
|   |   |-- 02-definition-of-done.md
|   |   |-- 03-change-control.md
|   |   |-- 04-risk-classification.md
|   |   `-- 05-quality-gates.md
|   |-- integration/
|   |   |-- README.md
|   |   |-- claude-root-stub.md
|   |   |-- codex-root-stub.md
|   |   `-- session-starter-prompts.md
|   |-- standards/
|   |   |-- 00-project-context.md
|   |   |-- 01-architecture.md
|   |   |-- 02-php84-coding-standard.md
|   |   |-- 03-database-and-sql.md
|   |   |-- 04-security-and-privacy.md
|   |   `-- 05-company-extension-rules.md
|   |-- templates/
|   |   |-- audit-report.md
|   |   |-- change-log.md
|   |   |-- implementation-plan.md
|   |   |-- request-brief.md
|   |   `-- test-report.md
|   |-- testing/
|   |   |-- 00-testing-strategy.md
|   |   |-- 01-test-plan-template.md
|   |   |-- 02-regression-checklist.md
|   |   `-- 03-php84-compatibility-checklist.md
|   `-- workflows/
|       |-- 01-request-intake.md
|       |-- 02-implementation.md
|       |-- 03-review.md
|       `-- 04-release.md
```

## Setup

```bash
# 1. Clone this governance repository
git clone <governance-repo-url> ai-assistant-governance-framework

# 2. Clone Payroll123 inside it (mantiene su propio historial git)
git clone <payroll123-repo-url> ai-assistant-governance-framework/payroll123

# 3. Abrir ai-assistant-governance-framework/ en Claude Code o Codex
#    La IA lee CLAUDE.md o AGENTS.md automáticamente y aplica todas las reglas.
```

`payroll123/` está en `.gitignore` — tiene su propio repositorio y nada de su contenido
se versiona aquí.

## How To Use This Framework

1. Open this repository root in Claude Code or Codex.
2. The AI reads `CLAUDE.md` or `AGENTS.md` automatically on session start.
3. Ask the AI to work on Payroll123 — it will find the code under `payroll123/` and apply all governance rules.
4. Require every AI-generated change to include:
   - a short implementation plan for non-trivial work,
   - changed files,
   - validation commands or reasons validation could not run,
   - risk notes when payroll, security, permissions, or data are involved.

## Non-Negotiable Principles

- Payroll correctness is business-critical.
- Security and privacy rules override speed.
- Existing Payroll123 architecture wins over generic best practices.
- Company-specific changes belong in company extensions when possible.
- SQL MUST use prepared statements through PDO.
- AI MUST NOT invent business rules, database fields, permissions, or payroll formulas.
- Every meaningful change MUST be testable, reviewable, and auditable.

## Maintenance

Update this framework when Payroll123 architecture, runtime versions, deployment practices, or audit requirements change.
When a rule changes, update the most specific file and then update the root entry points if the rule is mandatory for every assistant session.
