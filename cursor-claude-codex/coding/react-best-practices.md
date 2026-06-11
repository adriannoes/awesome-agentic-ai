---
description: React and Next.js best practices for performance, structure, and maintainability.
globs: **/*.tsx, **/*.jsx, **/next.config.js
alwaysApply: false
---
# React & Next.js Best Practices

> "Make it fast, keep it simple, use the platform."

## Core Principles

### 1. Server Components First (RSC)
- Default to **Server Components** for data fetching and heavy rendering.
- Use **Client Components** (`'use client'`) only for interactivity (hooks, event listeners).
- **Pattern**: Pass data from Server Component -> Client Component as props.

```tsx
// Server Component (Page)
export default async function Page() {
  const data = await db.query();
  return <ClientChart data={data} />;
}
```

### 2. Data Fetching
- Use **Suspense** for streaming UI while loading.
- Parallelize requests with `Promise.all` where possible.
- Deduplicate requests (Next.js `fetch` cache is deprecated in v15, use `unstable_cache` or `react.cache`).

### 3. State Management
- **URL as State**: Store filters, pagination, and sort order in URL Search Params.
- **Server State**: Use React Query (TanStack Query) only if complex caching needed beyond RSC.
- **Global State**: Avoid Redux/Zustand unless truly global (e.g., auth, cart). Prefer Context or Composition.

### 4. Performance
- **Images**: Always use `next/image` with explicit dimensions.
- **Fonts**: Use `next/font` for zero layout shift.
- **Dynamic Imports**: Lazy load heavy components.
  ```tsx
  const HeavyMap = dynamic(() => import('./Map'), { ssr: false });
  ```

## File Structure
- `app/`: Routes and layouts.
- `components/ui/`: Dumb, reusable UI components (Buttons, Inputs).
- `components/features/`: Feature-specific logic (AuthForm, UserDashboard).
- `lib/`: Utilities, helpers, hooks.

## Accessibility (a11y)
- Use semantic HTML (`<button>`, not `<div>`).
- Test with keyboard navigation (Tab, Enter).
- Ensure high color contrast.
