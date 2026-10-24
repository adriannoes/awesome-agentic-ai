---
name: operator-hiring-comms
description: Draft or send stage-aware candidate hiring emails in the configured hiring operator's own voice. Use for application acknowledgments, phone-screen invitations, take-home requests, scheduling, rejections, and candidate follow-ups.
---

# Operator hiring communications

## First use

Ask the operator for and verify:

- sender account and signature;
- role title and stage;
- candidate name and exact recipient email;
- full prior email thread;
- scheduling link, timezone, duration, buffers, and meeting defaults;
- approved stage-specific templates and voice examples;
- whether this run may draft, schedule, or send.

Do not copy another person's voice or calendar link. Learn the operator's preferences from approved examples and keep them in operator-owned configuration.

## Drafting principles

- Acknowledge the candidate's actual investment at the current stage.
- State the decision or next step plainly.
- Use short, human paragraphs and specific verified details.
- Do not fabricate praise, rationale, feedback, future promises, or “resume on file” language.
- After a phone screen, exercise, or interview, thank the candidate for that work specifically.
- If delay is material, acknowledge it briefly without overexplaining.
- Use the candidate's first name only after verification.
- Never use a scheduling link until its owner and settings have been tested.

## Send gate

Immediately before sending:

1. re-read the full thread and candidate record;
2. verify stage, role, recipient, sender, and all dates/links;
3. search Sent mail and the Notion communications log for a prior equivalent message;
4. show the exact text for approval unless the operator explicitly authorized this template and trigger;
5. send from only the configured account;
6. verify the provider message in Sent;
7. then update stage and communications metadata using the provider message ID.

If send status is uncertain, do not retry or mutate Notion until Sent mail resolves the ambiguity.

## Automatic reaction mode

Automatic sends are allowed only after controlled acceptance tests pass and the operator explicitly opts in. A decision reaction must match the configured immutable Slack member ID, unique top-level applicant post, candidate, role, and configured stage. Both reactions, an unknown actor, a thread reaction, duplicate posts, prior candidate contact, or identity mismatch means send nothing and report the exception.

## Decision changes and test isolation

- Establish an approved activation cutoff; do not treat old decisions as new send permission. Historical backfill needs separate approval.
- Re-read the live reaction before sending. A removed or changed decision invalidates pending send approval; conflicting reactions block both actions.
- Once a decision email is verified sent for a candidate, role and stage, a changed reaction never sends the opposite decision. Removing/readding the same reaction never resets the duplicate guard.
- Use an atomic candidate/role/stage claim or serialized execution across duplicate posts and different emojis. Reconcile uncertain send/claim state before proceeding.
- Production runs exclude synthetic/test records. Explicit test mode accepts only private allowlisted fixtures and verified team-owned recipients.

## Candidate communications style

Apply [candidate-hiring-comms](../candidate-hiring-comms/SKILL.md) for stage-specific drafting alongside these operational gates. Adapt the templates to the person hiring’s approved voice and verified context. The drafting skill does not grant sender identity or permission to send.
