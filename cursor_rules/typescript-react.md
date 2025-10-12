# TypeScript + React Rules

Use these rules when working with TypeScript and React projects.

## Code Style
- Use functional components with hooks
- Prefer const assertions for object literals
- Use explicit return types for complex functions
- Always define interfaces for props

## Component Patterns
- Extract custom hooks for complex logic
- Use React.memo for performance optimization
- Implement proper error boundaries
- Follow the single responsibility principle

## TypeScript Best Practices
- Use strict mode
- Define proper types for all props
- Use generics when appropriate
- Avoid any type

## Example Component Structure
```typescript
interface ComponentProps {
  title: string;
  onAction: (id: string) => void;
}

export const Component: React.FC<ComponentProps> = ({ title, onAction }) => {
  // Component logic here
  return <div>{title}</div>;
};
```