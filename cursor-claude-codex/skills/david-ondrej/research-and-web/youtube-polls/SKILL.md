---
name: youtube-polls
description: Use when David wants to create, track, or analyze YouTube community polls. Triggers on "youtube poll", "next poll", "poll results".
---

# YouTube Polls

Goal: research our YouTube audience — what problems they have, what they'd pay for, who they are. Every poll keeps improving our knowledge of the audience.

## Rules

- One clear question + exactly four options.
- Each poll stands alone. Never assume voters saw or voted in any other poll — no follow-ups that depend on prior polls.
- Options must be very clear, 3–6 words max.
- Each poll is its own independent research question. NEVER design a poll as a follow-up to, or a drill-down into, a previous poll's result. Treat every poll as if it's the first and only thing we ever ask the audience. Generate questions from scratch against our research goals — not from what we last asked.

## Ground polls in real channel data (DeepAPI)

Before designing a poll, you can pull real audience data through DeepAPI (David's own product — we dogfood it):

- `POST /v1/scrape/youtube/channel` with `{"channels": ["DavidOndrej"]}` — recent videos + view counts, to see which topics the audience actually watches.
- `POST /v1/scrape/youtube/search` with a topic query — what's trending in the niche right now.

Auth, cost caps, and examples: `deepapi` skill. Use the data to inform question choice; the poll rules above still apply unchanged.
