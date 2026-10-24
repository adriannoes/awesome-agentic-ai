---
name: candidate-screening
description: Score hiring candidates against an approved role-specific scorecard and produce evidence-backed Slack recommendations. Use when reviewing applications, referrals, resumes, LinkedIn profiles, portfolios, or written answers for an initial hiring decision.
---

# Candidate screening

## Hiring plan template

Start from the [public, view-only Hiring Plan Template](https://modern-ton-234.notion.site/Every-Hiring-Plan-Template-3f8ca4f355ac811bb4c7e7ad339d6f69) or the included [Markdown template](../../HIRING_PLAN_TEMPLATE.md). Duplicate it into your own restricted workspace, define the role’s shape of candidate and rubric, and obtain approval before scoring. The blank template is not an approved role-specific scorecard.

## Setup gate

Before scoring, identify and read the exact role hiring plan, shape of candidate, approved scorecard, allowed evidence sources, and recommendation labels. If any are missing, ask the hiring manager to define or approve them. Do not invent a generic scorecard and present it as role truth.

## Evidence rules

- Review only approved evidence: canonical candidate record, verbatim application answers, resume, LinkedIn/portfolio, and source message when configured.
- Separate negative evidence from missing evidence.
- Cite the candidate's actual behavior or words in concise paraphrase; preserve exact written answers where the Slack workflow requires verbatim display.
- Evaluate qualities applicable to the role. Do not reward engineering-style AI projects when the role calls for practical judgment, organization, communication, service, editorial ability, or another role-specific quality.
- Assess writing for specificity, coherence, self-awareness, judgment, and whether it actually answers the question. Fluent but generic language is weak evidence.
- Treat useful AI practice as concrete: what the candidate used it for, how they iterated, how they applied judgment, and what improved. Avoid equating “built with AI” with aptitude.
- Do not infer protected characteristics or use them in scoring.

## Scoring

Use the approved dimension weights and anchors. For every dimension provide:

1. score;
2. evidence;
3. uncertainty or missing evidence;
4. any explicit gating condition.

Compute an overall score only when the approved rubric defines how. Never emit an unexplained number or a vague label such as “conditional screen.” The final recommendation must be one of the hiring manager's approved actions, ordinarily `interview`, `do not interview`, or `needs human review`.

## Slack output

Keep the result compact and decision-ready:

```text
Screening
• <dimension>: <score/anchor> — <evidence>
• <dimension>: <score/anchor> — <evidence>
Uncertainty: <missing evidence or none>
Recommendation: <approved label>
```

The full applicant post should contain one linked candidate name, exact role, approved review evidence, and the native Slack mention for the verified hiring manager. Do not paste long raw URLs when a descriptive link is possible.

## Calibration

When the hiring manager reacts or comments, compare the decision with the prior scoring. Capture durable corrections to evidence interpretation and score anchors, not candidate-specific preferences. Show proposed rubric changes before applying them broadly. Never repost candidates solely to display a rescored result; edit the existing message only when the platform supports safe editing and the hiring manager approves it.
