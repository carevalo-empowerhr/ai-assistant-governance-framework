# Quality Gates

Quality gates decide whether an AI-assisted change can move forward.

## Gate 1: Intake Complete

Pass when:

- request is understood,
- company, plugin, transaction, or report are identified when present,
- risk level is assigned,
- relevant files are inspected.

## Gate 2: Implementation Complete

Pass when:

- change is scoped,
- standards are followed,
- no unrelated edits are present.

## Gate 3: Validation Complete

Pass when:

- syntax validation ran where applicable,
- focused tests or manual checks ran,
- failures are fixed or documented,
- unavailable tests are explained.

## Gate 4: Audit Complete

Required for high-risk work.

Pass when:

- security, payroll data, and PHP 8.4 concerns are reviewed,
- findings are classified,
- residual risk is documented,
- human decision is requested where needed.

## Gate 5: Handoff Complete

Pass when final response includes:

- files changed,
- what changed,
- validation evidence,
- risks and assumptions,
- next required human action if any.
