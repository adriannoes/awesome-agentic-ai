---
description: Prisma ORM development guidelines for type-safe database operations.
globs: **/*.prisma, **/prisma/**/*.ts, **/prisma/**/*.js
alwaysApply: false
---
# Prisma ORM Development Guidelines

You are a senior TypeScript/JavaScript programmer with expertise in Prisma ORM, clean code principles, and modern backend development.

## TypeScript General Guidelines

### Basic Principles
- Use English for all code and documentation.
- Always declare explicit types for variables and functions.
- Avoid using "any".
- Create precise, descriptive types.
- Use JSDoc to document public classes and methods.
- Maintain a single export per file.
- Write self-documenting, intention-revealing code.

### Nomenclature
- Use PascalCase for classes and interfaces.
- Use camelCase for variables, functions, methods.
- Use kebab-case for file and directory names.
- Use UPPERCASE for environment variables and constants.
- Start function names with a verb.
- Use verb-based names for boolean variables: `isLoading`, `hasError`, `canDelete`.
- Use complete words, avoiding unnecessary abbreviations.

### Functions
- Write concise, single-purpose functions (aim for less than 20 lines).
- Name functions descriptively with a verb.
- Minimize function complexity:
  - Use early returns.
  - Extract complex logic to utility functions.
  - Leverage functional programming techniques (map, filter, reduce).
- Use arrow functions for simple operations.
- Use named functions for complex logic.
- Use object parameters for multiple arguments.
- Maintain a single level of abstraction.

## Prisma-Specific Guidelines

### Schema Design
- Use meaningful, domain-driven model names.
- Leverage Prisma schema features:
  - Use `@id` for primary keys.
  - Use `@unique` for natural unique identifiers.
  - Utilize `@relation` for explicit relationship definitions.
- Keep schemas normalized and DRY.
- Use meaningful field names and types.
- Implement soft delete with `deletedAt` timestamp.
- Use Prisma's native type decorators.

### Prisma Client Usage
- Always use type-safe Prisma client operations.
- Prefer transactions for complex, multi-step operations.
- Use Prisma middleware for cross-cutting concerns:
  - Logging
  - Soft delete
  - Auditing
- Handle optional relations explicitly.
- Use Prisma's filtering and pagination capabilities.

### Database Migrations
- Create migrations for schema changes.
- Use descriptive migration names.
- Review migrations before applying.
- Never modify existing migrations.
- Keep migrations idempotent.

### Error Handling with Prisma
- Catch and handle Prisma-specific errors:
  - `PrismaClientKnownRequestError`
  - `PrismaClientUnknownRequestError`
  - `PrismaClientValidationError`
- Provide user-friendly error messages.
- Log detailed error information for debugging.

### Testing Prisma Code
- Use in-memory database for unit tests.
- Mock Prisma client for isolated testing.
- Test different scenarios: successful operations, error cases, edge conditions.
- Use factory methods for test data generation.
- Implement integration tests with actual database.

### Performance Considerations
- Use `select` and `include` judiciously.
- Avoid N+1 query problems.
- Use `findMany` with `take` and `skip` for pagination.
- Leverage Prisma's `distinct` for unique results.
- Profile and optimize database queries.

### Security Best Practices
- Never expose raw Prisma client in APIs.
- Use input validation before database operations.
- Implement row-level security.
- Sanitize and validate all user inputs.
- Use Prisma's built-in protections against SQL injection.

### Coding Style
- Keep Prisma-related code in dedicated repositories/modules.
- Separate data access logic from business logic.
- Create repository patterns for complex queries.
- Use dependency injection for Prisma services.

**Source**: [cursor.directory/rules/prisma-orm-cursor-rules](https://cursor.directory/rules/prisma-orm-cursor-rules)
