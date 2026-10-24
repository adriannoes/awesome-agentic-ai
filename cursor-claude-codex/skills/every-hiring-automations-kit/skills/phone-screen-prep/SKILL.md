---
name: phone-screen-prep
description: Transform a raw candidate Notion record into a consistent pre-phone-screen workspace using a verified calendar event, role-approved questions and scorecard, and one native meeting-notes transcript block.
---

# Phone-screen prep

## Purpose

Prepare—not evaluate—a candidate record before a phone screen. The structure must be reusable and must never copy another candidate's personal data.

## Required inputs

- authenticated operator calendar;
- full event record and stable event ID;
- exact external attendee email;
- canonical candidate database and role hiring plan;
- role-approved interview questions and scorecard;
- a connected Notion tool capable of preserving page content and, when possible, creating a native meeting-notes block.

## Identity gate

Match the event attendee email to exactly one candidate. A name-only match is insufficient unless supported by strong corroboration and explicitly recorded. Reject internal debriefs, unrelated meetings, rejected/closed candidates, and ambiguous matches.

## Idempotent transformation

Preserve every existing application field, note, score, transcript, link, and stage. Add only missing pieces:

1. **Interviewer brief** — blank or evidence-based prep only when separately approved; never pre-score the interview.
2. **Original application** — keep the existing source content and links intact.
3. **Phone screen**
   - verified calendar event and invitation link;
   - approved uniform questions;
   - blank approved scorecard with explicit scoring anchors;
   - one `Meeting notes` heading;
   - exactly one native Notion meeting-notes/transcript block.

If the native meeting-notes block cannot be created, do not fake it with ordinary text. Report the limitation.

## Event changes

- Re-read tracked future events each run.
- On reschedule, update time/link without changing notes or scores; replace any reminder without duplication.
- On cancellation, deletion, or candidate decline, create no new prep or reminder. Remove an exact pending reminder when supported; otherwise report manual action.
- If attendee email changes, re-run identity verification.

## Output and reminders

Report only newly prepared pages, changed events, ambiguity, failures, and manual action. Stay quiet when nothing changed. Optional reminders should link directly to the candidate page and contain no resume or transcript content.
