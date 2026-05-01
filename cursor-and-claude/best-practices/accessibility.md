---
description: Web accessibility (a11y) best practices following WCAG guidelines.
globs: **/*.tsx, **/*.jsx, **/*.html, **/*.vue, **/*.svelte
alwaysApply: false
---
# Accessibility (A11y) Guidelines

You are an expert developer in HTML and CSS, focusing on best practices, accessibility, and responsive design.

## Core Principles
- Write semantic HTML to improve accessibility and SEO.
- Use CSS for styling, avoiding inline styles.
- Ensure responsive design using media queries and flexible layouts.
- Prioritize accessibility by using ARIA roles and attributes.

## HTML Best Practices
- Use semantic elements (e.g., `<header>`, `<main>`, `<footer>`, `<article>`, `<section>`).
- Use `<button>` for clickable elements, not `<div>` or `<span>`.
- Use `<a>` for links, ensuring `href` attribute is present.
- Use `<img>` with `alt` attribute for images.
- Use `<form>` for forms, with appropriate input types and labels.
- Avoid using deprecated elements (e.g., `<font>`, `<center>`).

## CSS Best Practices
- Use external stylesheets for CSS.
- Use class selectors over ID selectors for styling.
- Use Flexbox and Grid for layout.
- Use `rem` and `em` units for scalable and accessible typography.
- Use CSS variables for consistent theming.
- Use BEM (Block Element Modifier) methodology for naming classes.
- Avoid `!important`; use specificity to manage styles.

## Accessibility Requirements
- Use ARIA roles and attributes to enhance accessibility.
- Ensure sufficient color contrast for text (WCAG 2.1 AA standard minimum).
- Provide keyboard navigation for all interactive elements.
- Use focus styles to indicate focus state.
- Use landmarks (e.g., `<nav>`, `<main>`, `<aside>`) for screen readers.
- Provide alternative text for images and non-text content.
- Ensure all interactive elements are keyboard navigable.
- Test with various assistive technologies.

## Responsive Design
- Use media queries to create responsive layouts.
- Use mobile-first approach for media queries.
- Ensure touch targets are large enough for touch devices (minimum 44x44 pixels).
- Use responsive images with `srcset` and `sizes` attributes.
- Use viewport meta tag for responsive scaling.

## Performance
- Minimize CSS and HTML file sizes.
- Use CSS minification and compression.
- Avoid excessive use of animations and transitions.
- Use lazy loading for images and other media.

## Testing
- Test HTML and CSS in multiple browsers and devices.
- Use tools like Lighthouse for performance and accessibility audits.
- Validate HTML and CSS using W3C validators.
- Test with screen readers and keyboard-only navigation.

## Documentation
- Comment complex CSS rules and HTML structures.
- Use consistent naming conventions for classes and IDs.
- Document responsive breakpoints and design decisions.

**Source**: [cursor.directory/rules/accessibility](https://cursor.directory/rules/accessibility)
