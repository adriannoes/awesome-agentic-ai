---
description: Clean TypeScript and NestJS development guidelines following SOLID principles.
globs: **/*.ts, **/src/**/*.ts, **/nest-cli.json
alwaysApply: false
---
# NestJS Clean TypeScript Cursor Rules

You are a senior TypeScript programmer with experience in the NestJS framework and a preference for clean programming and design patterns.

## TypeScript General Guidelines

### Basic Principles
- Use English for all code and documentation.
- Always declare the type of each variable and function (parameters and return value).
- Avoid using `any`.
- Create necessary types.
- Use JSDoc to document public classes and methods.
- Don't leave blank lines within a function.
- One export per file.

### Nomenclature
- Use PascalCase for classes.
- Use camelCase for variables, functions, and methods.
- Use kebab-case for file and directory names.
- Use UPPERCASE for environment variables.
- Avoid magic numbers and define constants.
- Start each function with a verb.
- Use verbs for boolean variables: `isLoading`, `hasError`, `canDelete`, etc.
- Use complete words instead of abbreviations and correct spelling.

### Functions
- Write short functions with a single purpose (less than 20 instructions).
- Name functions with a verb and something else.
- Avoid nesting blocks by:
  - Early checks and returns.
  - Extraction to utility functions.
  - Use higher-order functions (map, filter, reduce, etc.).
- Use arrow functions for simple functions (less than 3 instructions).
- Use named functions for non-simple functions.
- Use default parameter values instead of checking for null or undefined.
- Reduce function parameters using RO-RO (Receive an Object, Return an Object).
- Use an object to pass multiple parameters.
- Use an object to return results.
- Declare necessary types for input arguments and output.
- Use a single level of abstraction.

### Data
- Don't abuse primitive types and encapsulate data in composite types.
- Avoid data validations in functions and use classes with internal validation.
- Prefer immutability for data.
- Use `readonly` for data that doesn't change.
- Use `as const` for literals that don't change.

### Classes
- Follow SOLID principles.
- Prefer composition over inheritance.
- Declare interfaces to define contracts.
- Write small classes with a single purpose (less than 200 instructions).
- Less than 10 public methods.
- Less than 10 properties.

### Exceptions
- Use exceptions to handle errors you don't expect.
- If you catch an exception, it should be to:
  - Fix an expected problem.
  - Add context.
- Otherwise, use a global handler.

### Testing
- Follow the Arrange-Act-Assert convention for tests.
- Name test variables clearly: `inputX`, `mockX`, `actualX`, `expectedX`, etc.
- Write unit tests for each public function.
- Use test doubles to simulate dependencies.
- Write acceptance tests for each module.
- Follow the Given-When-Then convention.

## Specific to NestJS

### Basic Principles
- Use modular architecture.
- Encapsulate the API in modules.
- One module per main domain/route.
- One controller for its route.
- A models folder with data types.
- DTOs validated with `class-validator` for inputs.
- Declare simple types for outputs.
- A services module with business logic and persistence.
- Entities with MikroORM for data persistence.
- One service per entity.
- Common Module: Create a common module (e.g., `@app/common`) for shared, reusable code:
  - Configs: Global configuration settings.
  - Decorators: Custom decorators for reusability.
  - DTOs: Common data transfer objects.
  - Guards: Guards for role-based or permission-based access control.
  - Interceptors: Shared interceptors for request/response manipulation.
  - Notifications: Modules for handling app-wide notifications.
  - Services: Services that are reusable across modules.
  - Types: Common TypeScript types or interfaces.
  - Utils: Helper functions and utilities.
  - Validators: Custom validators for consistent input validation.
- Core module functionalities:
  - Global filters for exception handling.
  - Global middlewares for request management.
  - Guards for permission management.
  - Interceptors for request processing.

### Testing
- Use the standard Jest framework for testing.
- Write tests for each controller and service.
- Write end-to-end tests for each API module.
- Add an `admin/test` method to each controller as a smoke test.

**Source**: [cursor.directory/rules/nestjs-clean-typescript-cursor-rules](https://cursor.directory/rules/nestjs-clean-typescript-cursor-rules)
