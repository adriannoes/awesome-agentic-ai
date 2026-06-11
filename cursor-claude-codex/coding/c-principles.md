---
description: "C language coding standards and best practices. Apply when working on C source, headers, or Makefiles."
globs:
  - "**/*.c"
  - "**/*.h"
  - "Makefile"
  - "**/Makefile.*"
  - "*.mk"
alwaysApply: false
---
# C Programming Guidelines

## Basic Principles

- Use English for all code and documentation.
- Always declare the type of each variable and function (parameters and return value).
- Use C99 or later; avoid compiler-specific extensions unless documented.
- Use Doxygen-style comments to document public APIs (modules, functions, types).
- Don't leave blank lines within a function body.
- One definition per translation unit; declare in headers, define in one `.c` file.
- Prefer small, focused translation units over large single files.

## Nomenclature

- Use `PascalCase` or `snake_case` for type names (struct/typedef); be consistent in the project.
- Use `snake_case` for variables, functions, and file names (common C and POSIX convention).
- Use `UPPER_SNAKE_CASE` for macros and constants (`#define`).
- Use `UPPERCASE` for environment variables.
- Avoid magic numbers; use named constants or `enum`.
- Name functions with a verb where possible (e.g. `parse_config`, `get_user_input`).
- Use verb-like names for booleans: `is_ready`, `has_error`, `can_retry`.
- Prefer full words over abbreviations; exceptions: `i`, `j`, `k` in loops, `err` for error codes, `ctx` for context, `buf` for buffer, `len` for length.

## Functions

- Keep functions short and single-purpose (e.g. under ~30 lines).
- One level of abstraction per function.
- Use early checks and returns to avoid deep nesting.
- Extract complex logic into helper functions with clear names.
- Prefer returning an error code (e.g. `int` or `bool`) and use output parameters for results (e.g. `int parse_config(const char *path, config_t *out)`).
- Use output parameters (pointers) or small structs to return multiple values; avoid global state.
- Document ownership of pointers (who allocates, who frees) in comments or a project convention.
- Use a single level of abstraction inside each function.

## Data and Types

- Prefer `struct` and `typedef` to give data clear names; avoid "anonymous" aggregates.
- Use `const` for parameters and data that are not modified.
- Use `enum` for fixed sets of values instead of bare integers or macros.
- For "optional" or error+value results, use a dedicated result type (e.g. struct with `int error` and payload) or an agreed error-code convention.
- Avoid global variables; when necessary, keep them in one module and access via functions.
- Prefer fixed-size integers from `<stdint.h>` when size matters (`uint32_t`, `intptr_t`, etc.).

## Structures and Encapsulation

- Group related data in `struct`s; keep them cohesive.
- Prefer composition: structs containing other structs instead of duplicating fields.
- Document the lifetime and ownership of pointers inside structs.
- Use opaque pointers (pointer to incomplete type in the header) to hide implementation details and keep ABI stable.
- Keep struct size and layout stable; avoid exposing internal buffers in public headers when possible.

## Error Handling

- Use return codes (e.g. `int` with 0 = success, non-zero = error) or a small enum for errors.
- Document error codes in the header or a central `errors.h`; use named constants, not raw numbers.
- Use `errno` only when matching POSIX/C library conventions; otherwise prefer explicit return codes.
- Check return values of all functions that can fail; handle or propagate errors.
- Avoid `setjmp`/`longjmp` unless in constrained contexts (e.g. deep callback stacks); prefer explicit return paths.
- Clean up resources (e.g. `free`, `fclose`) on all paths; use `goto` to a single cleanup block when it improves readability.

## Memory and Resources

- Pair every allocation with a single, clear owner and a matching free at the same abstraction level.
- Prefer `malloc`/`calloc`/`free` in a consistent style; avoid mixing with allocators unless documented.
- Avoid memory leaks: free in the reverse order of allocation when dependencies exist.
- Use `free(ptr); ptr = NULL` after free to reduce use-after-free mistakes (or use a wrapper that does this).
- Avoid buffer overflows: use bounded functions (`snprintf`, `strncpy` with care, or custom safe wrappers) and pass buffer size explicitly.
- Prefer stack allocation for small, short-lived data; use heap for large or dynamically sized data.
- Document which functions allocate memory that the caller must free (e.g. "Caller must free with `thing_free()`").

## Preprocessor and Headers

- Use include guards (`#ifndef FOO_H` / `#define FOO_H` / `#endif`) or `#pragma once` if supported and project-standard.
- Include only what you need; prefer forward declarations in headers to reduce coupling.
- Put only declarations and shared types in headers; keep implementation in `.c` files.
- Use `static` for file-local functions and globals; use `extern` only in headers for shared globals (prefer accessor functions).
- Minimize macros; prefer `inline` functions or small helpers for type-safe "macros".
- Name macros in `UPPER_SNAKE_CASE`; parenthesize all macro arguments and the whole expression.

## Project Structure

- Organize code into logical directories, for example:
  - `include/` or `inc/` for public headers
  - `src/` for source files
  - `test/` for tests
  - `lib/` or `third_party/` for internal or external libraries
  - `doc/` for documentation
- Use Makefile or a single, well-understood build system (e.g. CMake for C-only).
- One main `.c` per module; one corresponding header for the public API.
- Keep a consistent naming scheme (e.g. `module_name.c` and `module_name.h`).

## Standard Library and Portability

- Use the C standard library (C99/C11) where it fits: `string.h`, `stdlib.h`, `stdint.h`, `stdbool.h`, etc.
- Prefer standard functions over custom implementations for clarity and portability.
- For strings, be aware of `strlen`, `strcpy` vs `strncpy`/`snprintf`; always consider buffer size.
- Use `size_t` for sizes and counts; avoid signed types for lengths unless the API requires it.
- Avoid reliance on undefined or implementation-defined behavior; document any assumptions (e.g. two's complement, `CHAR_BIT`).

## Concurrency and Thread Safety

- Document which functions are thread-safe, which require external locking, and which are not thread-safe.
- Use a single concurrency model (e.g. POSIX threads, or a small internal API) and stick to it.
- Protect shared data with mutexes (or equivalent); avoid global mutable state where possible.
- Prefer thread-local storage or passing context through parameters over global state.

## Testing

- Follow Arrange–Act–Assert in tests.
- Name test symbols clearly: e.g. `input_*`, `expected_*`, `actual_*`.
- Write unit tests for public functions; use test doubles or stubs for external I/O or heavy dependencies.
- Prefer a single test harness (e.g. Check, Unity, or a minimal custom runner) across the project.
- Add integration tests for modules and critical paths.

## Security and Robustness

- Validate all external input (file, network, user); check bounds and null where the contract requires it.
- Use bounded string and buffer operations; never use unbounded `sprintf` or `strcpy` with user-controlled data.
- Do not commit secrets or credentials; use configuration, environment variables, or a secure credential store.
- Prefer explicit checks (e.g. null, length) over assumptions; fail fast with clear behavior on invalid input.
