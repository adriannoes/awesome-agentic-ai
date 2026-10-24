# Every Hiring Automations Kit

This package helps the operator configure a hiring workflow in Codex without inheriting another operator's identity, calendar, email account, voice, or private candidate data.

## First response to the operator

Say this before configuring anything:

> I’ll help you set this up one piece at a time. First we’ll connect and verify the systems the workflow needs. Then I’ll present the automation options individually, explain what each one does, ask how you want it to behave, and show you the exact configuration before I build or activate it. We’ll test every selected workflow with controlled data before it can contact a real candidate or change a live record.

Then explain the dependency:

> Before scoring, Slack reactions, or candidate email can work reliably, we need to identify the role or roles you own, the approved hiring plan and scorecard for each role, one canonical candidate record in Notion, and one unique top-level applicant post in Slack for each candidate. We’ll establish that source of truth first.

## First-load connection walkthrough

Ask the operator to connect these sources one at a time. After each connection, perform only the listed safe read and show the verified identity. Do not continue past a failed or ambiguous check.

1. **Slack**
   - Ask the operator to connect the intended Slack workspace.
   - Resolve `<sender-email>` live and verify that the immutable member ID is `<operator-slack-member-id>`.
   - Verify read access to `<applicant-channel>` and record its current channel ID.
2. **Gmail**
   - Ask the operator to connect the account that should send candidate communications.
   - Read the authenticated account identity and confirm it is the intended sender. Do not send a test email yet.
3. **Google Calendar**
   - Ask the operator to connect the calendar used for candidate interviews.
   - Read the calendar owner, timezone, and one harmless future event. Confirm the intended calendar and timezone.
4. **Notion**
   - Ask the operator to connect the intended Notion workspace.
   - Ask for the central Jobs/Job Applications registry and one role-specific hiring-plan link. Verify read access only.
5. **Google Drive**
   - Ask the operator to connect the account used for hiring plans, exercises, and interview materials.
   - Verify access to one user-selected hiring document. Do not create or share files during onboarding.

Record all verified values in `CUSTOMIZATION_WORKSHEET.md`. If a connector is unavailable, explain which automation depends on it and continue only with modules that do not require it.

## Hard rules

- Do not install, activate, schedule, post, edit, email, or mutate Notion during the initial walkthrough.
- Do not copy another person's voice, sender identity, calendar link, Slack reaction identity, or candidate data.
- Verify live identities and permissions; never trust a display name or a stale placeholder.
- Treat Gmail Sent mail as the authority for whether a candidate email was sent.
- Treat actual Slack messages as the authority for whether an application was posted.
- Never test with a real candidate. Use controlled internal email addresses and temporary private records/posts, then delete the test data.
- Start in draft or dry-run mode. Automatic sends require the operator's explicit approval after supervised tests pass.
- Preserve candidate confidentiality. Do not copy resumes, transcripts, or candidate answers into setup logs.
- Never activate overlapping automations that can act on the same role, reaction, candidate, or application source.

## Known values to verify, not assume

| Item | Expected value | Verification |
| --- | --- | --- |
| the operator's Every email | `<sender-email>` | Confirm authenticated Gmail and Calendar accounts |
| the operator's Slack member ID | `<operator-slack-member-id>` | Resolve live by email and compare the immutable ID |
| the operator's team/title | `<operator-title>` | Confirm current role and hiring ownership |
| Roles the operator owns |  | Ask the operator; verify against live hiring plans |
| Applicant channel | `<applicant-channel>` | Resolve the live channel ID and access |
| Timezone | `<IANA-timezone>` | Confirm with the operator and connected Calendar |

## First-load interview

Ask these questions conversationally in small groups. Record each answer as `verified`, `pending`, or `not applicable` in `CUSTOMIZATION_WORKSHEET.md`. Do not present all questions at once.

### 1. Roles and canonical intake

- Which role or roles are you hiring for now?
- Link each role's hiring plan, shape of candidate, approved scorecard, application form, and candidate database. If a plan is missing, start from `HIRING_PLAN_TEMPLATE.md` and obtain role-owner approval before using its criteria.
- Where do candidates currently originate: Notion form, referral, email, Slack DM, sourcing, or another system?
- For informal candidates, what minimum information must exist before screening?
- Should Codex propose a Notion record for approval before creating it during rollout?
- Which source is authoritative when information conflicts?

### 2. Scoring and Slack

- Which evidence may be used for each role: application answers, resume, LinkedIn, portfolio, source message, or other material?
- Should Slack show dimension-level scores, a concise recommendation, an overall score, or some combination?
- What are the approved recommendation labels?
- Who should be tagged on each role's post? Resolve the immutable Slack ID for every hiring manager.
- Should each candidate have one unique top-level Slack post? This is recommended because reactions need a stable target.
- What should happen when evidence is incomplete or the score is borderline?

### 3. Candidate communications

- What is the operator's tested public scheduling link?
- What duration, timezone, buffers, location/video defaults, and availability should candidates see?
- What sender name and signature should be used?
- Provide a few approved examples of the operator's candidate-email voice.
- Should Codex create drafts, require one-by-one approval, or eventually send automatically after testing?
- Confirm the decision emoji names. Recommended: `:white_check_mark:` for invite and `:x:` for reject.
- Are there roles, stages, or messages where a reaction must never send email?

### 4. Phone-screen preparation

- Which calendar is authoritative?
- How far ahead should Codex scan, and how often?
- Which event-title patterns count as candidate screens?
- Should questions and scorecards come from each role's hiring plan or a separately approved template?
- Where should exceptions and pre-interview reminders appear?
- Should candidate pages receive a native meeting-notes/transcript block, and can the connected Notion tool create one?

### 5. Reliability and ownership

- Who owns the workspace-level Notion-to-Slack application pipeline?
- Which existing automations already post, email, change candidate stages, or prepare pages?
- Who should receive exceptions when identity, stage, or delivery is ambiguous?
- What cadence is worth the cost: manual, daily, or several bounded runs per workday?

## Present these options one at a time

For each option: explain it, ask for behavior preferences, show the proposed configuration, and wait for the operator's approval before building. Do not present a wall of choices.

1. **Candidate intake → Notion + Slack**
   - Creates or finds one canonical candidate record and one unique top-level applicant post.
   - Includes the complete approved review evidence, links the candidate name, and tags the verified hiring manager.

2. **Candidate screening in Slack**
   - Uses the exact role's approved scorecard and evidence rules.
   - Produces dimension-level evidence and a clear approved recommendation.

3. **Slack decision reaction → candidate email**
   - Only the operator's verified immutable Slack member ID counts for the operator's workflow.
   - A green check produces the approved phone-screen invitation from the operator's account with the operator's verified scheduling link.
   - A red X produces the approved stage-specific rejection from the operator's account.
   - Starts with drafts or a supervised single-send pilot.

4. **Calendar → prepared candidate record**
   - Finds newly booked or changed candidate screens on the operator's calendar.
   - Matches by exact attendee email to one Notion candidate.
   - Adds role-approved questions, a blank scorecard, event links, and one native meeting-notes/transcript block without duplication.

5. **Delivery recovery monitor**
   - Compares recent live Notion applications with actual Slack messages and reports or repairs missing posts.
   - Discovers live roles from the central registry so new roles are not silently omitted.

6. **Optional pipeline hygiene**
   - Audits candidates with no recent communication, reactions with no verified email, interviews with no prep, and stale stages.
   - Reporting only by default; never contacts candidates automatically.

## Required reading

- `HIRING_PLAN_TEMPLATE.md`
- `CUSTOMIZATION_WORKSHEET.md`
- `TEST_PLAN.md`
- `skills/candidate-screening/SKILL.md`
- `skills/operator-hiring-comms/SKILL.md`
- `skills/candidate-hiring-comms/SKILL.md`
- `skills/phone-screen-prep/SKILL.md`
- `AUTOMATION_BLUEPRINTS.md`

## Core lessons embedded in this package

- Screening quality depends on a role-specific scorecard and evidence, not a squishy overall “why.”
- One candidate per top-level Slack post makes rating and downstream automation reliable.
- Reactions are decisions only when actor, message level, candidate identity, role, and stage all match.
- Candidate-facing mail must be stage-aware and read the full communication history before sending.
- A prepared candidate page should preserve the original application and add a uniform Phone screen section with approved questions, a blank scorecard, event links, and exactly one native meeting-notes/transcript block.
- Delivery monitoring is necessary because a healthy Notion trigger does not prove a Slack message actually appeared.
- Skills hold reusable judgment; scheduled tasks provide cadence; connectors provide live data and actions.

## Communications skill selection

Read `skills/operator-hiring-comms/SKILL.md` for sender, identity, history, approval and send gates. Read `skills/candidate-hiring-comms/SKILL.md` for stage-specific drafting. Adapt the templates to the person hiring’s approved voice examples. The drafting skill never grants permission to send.
