# Audit Trail

Every AI-assisted change must leave a traceable record that allows a reviewer
to reconstruct what changed, why it changed, who approved it, and whether it
was validated.

## Required Evidence Per Risk Level

| Risk | Minimum audit record |
|------|----------------------|
| Low | PR description, passing CI checks, one approval |
| Medium | PR description, risk notes, regression evidence, two approvals |
| High | PR description, before/after behavior, test report, audit findings, human approval before deployment |

See `playbook/governance/04-risk-classification.md` for risk assignment criteria.

## Pull Request As Audit Record

The pull request is the primary audit record for every change. The PR template
fields are mandatory for audit purposes:

- **Summary** — what the change does.
- **Why** — the business or technical reason.
- **What Changed** — specific files and behavior affected.
- **Testing** — validation evidence.
- **Risk** — assigned level with justification if non-obvious.
- **Rollback Plan** — how to revert if the change causes a problem.

A PR with missing or placeholder fields does not satisfy the audit requirement
and MUST NOT be approved until complete.

## Commit Messages

Commit messages must describe the intent of the change, not just the mechanism.

Acceptable: `Fix null check in overtime calculation for part-time employees`
Not acceptable: `fix bug`, `update file`, `changes`

## High-Risk Audit Findings

For high-risk changes, the assistant must produce an audit report before the PR
is submitted for review. The report must classify each finding as:

- `KEEP` — behavior is correct, no action needed.
- `REVERT` — change introduces unacceptable risk, must be undone.
- `ADJUST` — change needs modification before it is safe.
- `NEEDS HUMAN DECISION` — risk cannot be assessed without human input.

No high-risk PR may be merged with an open `NEEDS HUMAN DECISION` finding
that has not received an explicit human resolution in the PR comments.

## Retention

GitHub retains the full PR history including comments, reviews, CI results,
and approval timestamps. This history is the audit log. Do not close PRs
without merging unless the change is formally cancelled and the reason is
documented in a PR comment.
