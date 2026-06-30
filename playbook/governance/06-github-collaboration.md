# GitHub Collaboration Model

This document describes the branch strategy, access model, pull request process,
and automated checks configured for this repository.

## Access Model

| User | Role | Can approve PR | Can merge |
|------|------|---------------|-----------|
| `carevalo-empowerhr` | Admin | Yes | Yes |
| `lrojas-empowerhr` | Write (via team `merge-leads`) | Yes | Yes |
| `Kgomez-empowerhr` | Triage (Outside Collaborator) | Yes | No |

**Why Triage for Kelly:** Triage allows reviewing and approving pull requests without
granting the ability to execute a merge. Write is required to merge.

**Team `merge-leads`:** Contains only `lrojas-empowerhr`. Grants Write access to the
repository. Adding a member to this team gives them merge rights.

## Branch Strategy

| Branch | Purpose | Protected |
|--------|---------|-----------|
| `master` | Stable branch. Source of truth for the published playbook. | Yes |
| `qa` | Pre-merge validation branch. | Yes |
| `dev` | Active development. Not protected. | No |
| `feature/*` | Short-lived branches for individual changes. | No |

Promotion path:

```
feature branch → pull request → master → GitHub Pages (auto-deploy)
```

## Pull Request Process

Every change to `master` or `qa` MUST go through a pull request.

### Steps

1. Create a focused branch from `master` or `dev`.
2. Make the change. Keep it scoped to one purpose.
3. Push the branch and open a pull request on GitHub.
4. GitHub loads the PR template automatically — fill every section.
5. Wait for both automated checks to pass.
6. Request review from Kelly and Leandro (both are CODEOWNERS).
7. Both must approve before the merge is unblocked.
8. Leandro executes the merge once all conditions are met.

### Pull Request Template

The file `.github/pull_request_template.md` is loaded automatically by GitHub
when a new PR is opened. It provides a consistent structure for every PR:

- **Summary** — one-line description of what the PR does.
- **Why** — reason the change is needed.
- **What Changed** — specific list of modifications.
- **Testing** — checklist confirming self-review and CI pass.
- **Risk** — Low, Medium, or High.
- **Rollback Plan** — how to revert if the change causes a problem.
- **Linked Work** — `Closes #123` to link related issues.

Filling the template before requesting review is mandatory. Reviewers should
not approve a PR with an empty or incomplete description.

## Automated Checks (GitHub Actions)

Two workflows run automatically on every pull request:

### `pr-checks.yml` — Pull Request Checks

Triggers on PRs targeting `master` or `qa`.

**Job: Validate repository**
- Confirms `CODEOWNERS` exists.
- Confirms the playbook directory structure is intact.
- Blocks the PR if binary or sensitive files (`.docx`, `.pptx`, `.env`, etc.)
  are included in the diff.

**Job: Build Docusaurus site**
- Installs dependencies and builds the `website/` Docusaurus project.
- Fails if the site does not build successfully.

### `deploy.yml` — Deploy Playbook to GitHub Pages

Triggers on push to `master`. Builds and publishes the Docusaurus site to
GitHub Pages automatically after a successful merge.

## Ruleset: `protect-qa-and-master`

Applies to `master` and `qa`. Bypass list is empty — no one is exempt.

| Rule | Status |
|------|--------|
| Restrict creations | Enabled |
| Restrict deletions | Enabled |
| Restrict updates | Disabled — access roles handle merge rights |
| Block force pushes | Enabled |
| Require a pull request before merging | Enabled — 2 approvals, Code Owners required |
| Require status checks to pass | Enabled — `Validate repository`, `Build Docusaurus site` |

## CODEOWNERS

File: `.github/CODEOWNERS`

```
* @Kgomez-empowerhr @lrojas-empowerhr
```

All files require approval from both Kelly and Leandro. The ruleset enforces
that Code Owner reviews are required, so both approvals must be present before
the merge button is enabled for Leandro.
