# Customization worksheet

Do not replace a blank with a guess. Mark each value `verified`, `pending`, or `not applicable` and record the evidence used.

## Identity and access

| Field | Value | Status | Evidence |
| --- | --- | --- | --- |
| Gmail sender | `<sender-email>` | pending | Authenticated account identity |
| Google Calendar owner | `<sender-email>` | pending | Calendar identity |
| Slack member ID | `<operator-slack-member-id>` | pending | Live lookup by email |
| Slack workspace | `<workspace-name>` | pending | Live workspace identity |
| Applicant channel | `<applicant-channel>` | pending | Live channel lookup and access |
| Notion workspace | `<workspace-name>` | pending | Connected workspace identity |
| Google Drive account | `<drive-account>` | pending | Connected account identity |
| Codex recruiting thread ID |  | pending | operator-owned thread |
| Timezone | `<IANA-timezone>` | pending | the operator and Calendar confirmation |

Use [HIRING_PLAN_TEMPLATE.md](HIRING_PLAN_TEMPLATE.md) to define a new role’s scope, shape of candidate, interview plan and scorecard before approval.

## Roles and intake

Create one copy of this table per role.

| Field | Value | Status |
| --- | --- | --- |
| Exact role title |  | pending |
| Hiring-plan URL |  | pending |
| Shape-of-candidate/scorecard URL |  | pending |
| Application-form URL |  | pending |
| Candidate database URL/data-source ID |  | pending |
| Central live-role registry URL |  | pending |
| Candidate source(s) |  | pending |
| Minimum record fields |  | pending |
| Hiring-manager Slack ID(s) |  | pending |
| Approved evidence sources |  | pending |
| Approved recommendation labels |  | pending |
| Stage/rejected property names |  | pending |
| Communications-log location |  | pending |

## Candidate communication

| Field | Value | Status |
| --- | --- | --- |
| Booking URL |  | pending |
| Screen duration |  | pending |
| Buffer |  | pending |
| Video/location default |  | pending |
| Invite template |  | pending |
| Application rejection template |  | pending |
| Later-stage rejection templates |  | pending |
| the operator's signature |  | pending |
| Approved voice examples |  | pending |
| Green-check emoji name | `white_check_mark` | pending |
| Red-X emoji name | `x` | pending |
| Initial send mode | draft | pending |
| Activation cutoff and historical-reaction baseline |  | pending |
| Atomic claim/serialization owner and store |  | pending |
| Production exclusion rule for synthetic records |  | pending |
| Private test fixture allowlist and verified internal recipients |  | pending |

## Phone-screen prep

| Field | Value | Status |
| --- | --- | --- |
| Calendar scan window | next 14 days | pending |
| Scan cadence |  | pending |
| Event-title rules |  | pending |
| Approved questions |  | pending |
| Approved scorecard |  | pending |
| Reminder destination/cadence |  | pending |
| Native Notion meeting-notes creation supported |  | pending |

## Ownership and collision check

List every existing automation that can post, email, mutate candidate stage, or prepare candidate pages. For each, record owner, trigger, scope, schedule, and whether it will remain active. Never activate overlapping senders for the same role and decision source.

| Automation | Owner | Trigger/schedule | Roles/stages | Mutations | Keep active? | Verified |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
