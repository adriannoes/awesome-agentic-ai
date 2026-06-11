---
description: Best practices for production-ready Dockerfiles and containerization.
globs: **/Dockerfile*
alwaysApply: false
---
# Docker Expert Guidelines

> "Build small, secure, and reproducible containers."

## Core Principles

### 1. Multi-Stage Builds
Always use multi-stage builds to keep the final image size small.
```dockerfile
# Build Stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["npm", "start"]
```

### 2. Security First
- **Non-Root User**: Never run the application as root.
  ```dockerfile
  RUN addgroup -S appgroup && adduser -S appuser -G appgroup
  USER appuser
  ```
- **Pin Versions**: Use specific versions for base images and packages.
  `FROM python:3.9.16-slim-bullseye` instead of `FROM python:latest`.
- **Scan for Vulnerabilities**: Use tools like Trivy or Scout.

### 3. Optimization
- **.dockerignore**: Always include a `.dockerignore` file (exclude `.git`, `node_modules`, `venv`).
- **Layer Caching**: Order instructions from least to most frequently changed.
  - Copy dependency files first (`package.json`, `requirements.txt`).
  - Install dependencies.
  - Copy source code last.

### 4. Entrypoints & CMD
- Use `ENTRYPOINT` for the main executable and `CMD` for default arguments.
- Handle OS signals (SIGTERM) correctly for graceful shutdowns.

## Validation Checklist
- [ ] Is the base image pinned?
- [ ] Are we running as a non-root user?
- [ ] Is there a `.dockerignore`?
- [ ] Are sensitive files excluded?
- [ ] Is the image size optimized (multi-stage)?
