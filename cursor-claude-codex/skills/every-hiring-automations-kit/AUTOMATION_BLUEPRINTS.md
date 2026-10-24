# Automation blueprints

These are designs, not active scheduled tasks. Configure only the modules the operator selects and approves. Production intake, scoring, communications, prep, recovery and audit runs must exclude registered synthetic/test fixtures; approved test mode uses a separate explicit allowlist.

## A. Candidate intake → Notion + Slack

**Trigger:** a form response, approved referral/DM handoff, or a bounded scheduled sweep of an approved source.

**Method:**

1. Resolve the role and canonical candidate database.
2. Extract only approved candidate fields. Preserve written answers verbatim; do not summarize them.
3. Propose the Notion record when the source is informal. Require approval during rollout.
4. Create or locate exactly one canonical candidate page.
5. Create exactly one top-level message in the verified applicant channel with a linked candidate name, role, complete approved review evidence, and the verified hiring-manager mention.
6. Run `candidate-screening` and append the role-specific scorecard and recommendation when configured.
7. Record a stable delivery key tying source, candidate page, role, and Slack timestamp together.

**New-role behavior:** discover roles from the central registry or make the posting automation part of the required role template. Test the real template path with temporary synthetic data, then remove it.

## B. Candidate screening in Slack

Use `skills/candidate-screening/SKILL.md`. The output should be concise enough for Slack but must show dimension-level evidence, uncertainty, and an allowed recommendation. Do not use unexplained overall numbers.

## C. Slack reaction → candidate email

**Default schedule:** manual during rollout, then bounded weekday runs if the operator wants polling. Scheduled Codex tasks poll; they do not receive a native Slack reaction webhook.

**Rules:**

- Only reactions by the operator's verified immutable Slack member ID count.
- Only the unique top-level applicant post counts; ignore thread reactions.
- `:white_check_mark:` means the approved next-step invitation; `:x:` means the approved stage-specific rejection.
- Read the full Notion record and full sender-account email history first.
- Candidate role and stage must match the configured action.
- Verify name, role, recipient, sender, and every link immediately before any send.
- Conflicting reactions, duplicate posts, uncertain identity, missing link, prior communication, or a mismatched stage means send nothing.
- Establish an approved activation cutoff and baseline. Pre-existing decisions are not authorization for automatic sends; any historical backfill requires separate approval. If reaction timing cannot be established reliably, report uncertainty rather than guessing.
- Re-read live reactions immediately before sending. Removed or changed decisions invalidate pending send authorization; both decisions block sending. Preserve and flag any stale draft so it cannot be sent under old approval.
- Once a decision email is verified sent for this candidate, role and stage, changing the reaction never sends the opposite decision. Removing/readding a reaction never resets this guard. Any subsequent communication requires a separate approved action.
- Use an atomic candidate/role/stage claim or serialize workers across posts and decision emojis. The audit key below is not sufficient as the concurrency lock. An uncertain claim or send must be reconciled, not blindly retried.
- Exclude registered synthetic/test records from production workflows. Test mode may act only on explicitly allowlisted fixtures with verified team-owned recipients; keep fixtures and their ledger outside this kit.
- Verify Sent mail before changing Notion. Store the provider message ID and audit key.
- During rollout, create drafts or require one-by-one approval. Automatic sends require the operator's explicit opt-in after tests.

Suggested audit key:

```text
candidate-comms|<candidate-page-id>|<role-page-id>|<slack-message-ts>|<emoji>
```

## D. Calendar → phone-screen prep

Use `skills/phone-screen-prep/SKILL.md`.

**Recommended bounded schedule:** twice daily, scanning only the next 14 days. Re-read tracked future events so reschedules and cancellations are detected.

**Rules:**

- the operator's authenticated calendar is the source of truth.
- Match the external attendee email to exactly one candidate page.
- Read the role hiring plan for the approved question set and scorecard.
- Preserve all existing content, scores, notes, and transcripts.
- Add only missing pieces and exactly one native meeting-notes/transcript block.
- Never infer scores before the interview.
- Optional reminders should link directly to the prepared candidate page.

Suggested ledger fields: stable event ID, current start time, attendee email, candidate page ID, reminder ID, and last verified state. Do not store resume or transcript content in the ledger.

## E. Delivery recovery monitor

**Recommended schedule:** twice daily during launch, then reduce after reliability is proven.

**Method:**

1. Enumerate every live role and response database from the central registry.
2. Inspect only a bounded recent window, such as 24 hours.
3. Compare each candidate with actual Slack top-level messages and threaded replies using stable identity plus secondary identity checks.
4. Report missing posts in audit mode.
5. In approved repair mode, re-run the duplicate check immediately before posting, create one enriched post, verify it exists, then record delivery.

Never treat a Notion “sent” field as proof when the actual Slack post is absent. If Slack search is incomplete or identity is ambiguous, fail closed and report uncertainty.

## F. Optional weekly pipeline hygiene

Reporting only by default:

- candidates with no recent communication;
- decision reactions with no verified sent email;
- booked screens with missing prep;
- completed screens with blank scorecards;
- exercises or interviews with stale stages;
- active candidates whose next step is unclear.

This workflow must not contact candidates or make hiring decisions automatically.
