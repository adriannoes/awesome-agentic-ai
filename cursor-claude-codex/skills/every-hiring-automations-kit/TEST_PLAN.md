# Test plan

No workflow may contact a real candidate or mutate a live candidate record until its applicable tests pass.

## Rollout sequence

1. Verify live identities, permissions, role links, database schema, channel, templates, scheduling link, and calendar.
2. Inventory every existing overlapping automation.
3. Run a read-only audit and show the operator exactly what would happen.
4. Create controlled private test data using team-owned email addresses. Label it clearly as synthetic and register exact record IDs in a private test allowlist. Production runs always exclude synthetic records; only an explicitly approved test run may act on allowlisted fixtures.
5. Run one supervised end-to-end test per selected path.
6. Verify the result in the destination system, not merely in the automation log.
7. Delete synthetic artifacts that can safely be deleted. If fixtures are deliberately retained for verification, mark candidate records Withdrawn/test-only and enforce production exclusion; a label or stage alone is not sufficient. Keep retained fixtures in the private test allowlist. Retain only sanitized evidence in this kit.
8. Activate at the least frequent useful cadence. Review every action and no-op during the first week.

## Acceptance table

| Area | Scenario | Expected result |
| --- | --- | --- |
| Connections | Slack, Gmail, Calendar, Notion, and Drive connected one at a time | Each authenticated identity and required read permission is verified before configuration continues |
| Intake | One controlled referral/form candidate | Exactly one Notion record and one top-level Slack post; candidate name is linked; correct hiring manager is a resolved native mention |
| Intake | Missing email or ambiguous role | No record/post mutation; exact exception reported |
| Intake | Repeated run | No duplicate record or Slack post |
| Screening | Complete controlled evidence | Dimension-level scorecard cites evidence and produces an allowed recommendation |
| Screening | Missing evidence | Missing evidence is labeled; no invented facts or false penalty |
| Screening | Second run with unchanged evidence | Existing approved result is not duplicated or silently overwritten |
| Reaction | Operator green check on controlled top-level post | One invitation draft/send from the operator with correct name, role, recipient, and verified operator booking link |
| Reaction | Operator red X on controlled top-level post | One approved stage-specific rejection draft/send from the operator |
| Reaction | Another person's emoji or a thread reaction | No action |
| Reaction | Both decisions, duplicate posts, identity mismatch, or stage mismatch | No email; ambiguity reported |
| Reaction | Decision exists before the approved activation cutoff | No automatic draft/send; baseline recorded and any historical backfill requires separate approval |
| Reaction | Decision removed before final send check | No send; retained draft cannot send without a new verified approval |
| Reaction | Decision changes before send, or both decisions appear | No send; stale draft/claim cannot authorize either message; report for human review |
| Reaction | Decision changes after a verified send | No opposite invitation/rejection; retain sent-message evidence and report if needed |
| Reaction | Same decision removed and re-added | No duplicate draft/send and no reset of the communication guard |
| Concurrency | Two workers claim the same candidate/role/stage simultaneously, including different Slack posts or emojis | Exactly one atomic claim; at most one approved email; other worker stops and verifies state |
| Concurrency | Worker fails after send or claim outcome is uncertain | Reconcile Sent and claim state; do not blindly release the claim or resend |
| Test isolation | Synthetic record appears in a production sweep, including a retained Withdrawn fixture | No production evaluation, draft, send, backfill or prep for the fixture |
| Test isolation | Supervised test uses an explicitly allowlisted fixture | Only verified team-owned recipients permitted; production records remain excluded |
| Email | Send succeeds but Notion update fails | Never resend; repair metadata using the verified provider message ID |
| Email | Send state cannot be verified | No stage mutation and no automatic retry |
| Prep | Controlled calendar event with exact candidate-email match | One Phone screen section, approved questions, blank scorecard, event link, and exactly one native meeting-notes block |
| Prep | Rescheduled event | Time/link updated without touching notes or scores; reminder replaced without duplication |
| Prep | Cancelled/declined event | No new prep or reminder; any pending reminder is safely removed or flagged |
| Prep | Ambiguous attendee identity | No Notion write; exception reported |
| Delivery | Controlled Notion application with no Slack post | Monitor detects it; approved repair mode creates exactly one post |
| Delivery | Existing threaded or top-level Slack match | No duplicate backfill |
| New role | Add a temporary test role through the real template path | Intake and monitor discover it automatically; remove the test role after evidence is captured |
| Collision | An existing automation overlaps the proposed scope | New automation remains inactive until ownership is resolved |

Activation is blocked if an applicable test is unrun, failed, or only inferred to pass.
