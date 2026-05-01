---
name: frontend-design
description: Design and implement distinctive, production-ready frontend interfaces. Use when creating or restyling web pages, components, or applications (HTML/CSS/JS, React, Vue, etc.)
---

# Frontend Design

**Source:** [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) (Apache-2.0)

## Overview

Design and implement memorable frontend interfaces with a clear, intentional aesthetic. Output must be real, working code — not just mood boards. Design thinking + execution: every visual choice rooted in purpose and context.

## When to Use

- Create a new web page, landing page, dashboard, or app UI
- Design or redesign frontend components or screens
- Improve typography, layout, color, motion, or visual polish
- Convert a concept or brief into a high-fidelity, coded interface

## Inputs to Gather

Before coding, identify:
- **Purpose & audience:** What problem does this UI solve? Who uses it?
- **Brand/voice:** Any reference brands, tone, or visual inspiration?
- **Technical constraints:** Framework, CSS strategy, accessibility, performance
- **Content constraints:** Required copy, assets, data, features

If not provided, ask 2–4 targeted questions or state reasonable assumptions.

## Design Thinking (Required)

Commit to a **single, bold aesthetic direction**. Name it and execute it consistently. Examples:
- Brutalist / raw / utilitarian
- Editorial / magazine / typographic
- Luxury / refined / minimal
- Retro-futuristic / cyber / neon
- Art-deco / geometric / ornamental

**Avoid generic AI aesthetics.** No "default" fonts, color schemes, or stock layouts.

Before writing code, define:
1. **Visual direction** — one sentence that describes the vibe
2. **Differentiator** — what should be memorable?
3. **Typography system** — display + body fonts, scale, weight
4. **Color system** — dominant, accent, neutral; CSS variables
5. **Layout strategy** — grid rhythm, spacing scale
6. **Motion strategy** — 1–2 meaningful interaction moments

## Implementation Principles

- **Working code:** HTML/CSS/JS or framework code that runs as-is
- **Semantic & accessible:** headings, labels, focus states, keyboard nav
- **Responsive:** fluid layouts, breakpoints
- **Tokenized styling:** CSS variables for colors, spacing, radii
- **Modern layout:** CSS Grid/Flex, avoid brittle positioning

## Aesthetic Guidelines

**Typography:** Avoid default fonts (Inter, Roboto, Arial). Use a distinct display font + refined body font.

**Color:** Commit to a palette with strong point-of-view. Avoid timid gradients.

**Composition:** Encourage asymmetry, scale contrast, negative space. Create visual rhythm.

**Motion:** Use sparingly but meaningfully. Honor `prefers-reduced-motion`.

## Avoid

- Cookie-cutter hero + 3 card layouts
- Generic gradients and default font choices
- Unmotivated decorative elements
- Overly flat, characterless component libraries

## Quality Checklist

- Aesthetic direction is unmistakable
- Typography feels intentional
- Layout and spacing are consistent
- Color palette is cohesive and legible
- Interactions enhance without clutter
- Code runs as provided and is production-ready
