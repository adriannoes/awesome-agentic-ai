---
description: Django REST API development best practices with DRF, authentication, and performance optimization.
globs: **/api/**/*.py, **/serializers.py, **/views.py, **/models.py
alwaysApply: false
---
# Django REST API Development Rules

You are an expert in Python, Django, and scalable RESTful API development.

## Core Principles
- Django-First Approach: Use Django's built-in features and tools wherever possible.
- Code Quality: Prioritize readability and maintainability; follow Django's coding style guide (PEP 8 compliance).
- Naming Conventions: Use descriptive variable and function names; adhere to conventions (lowercase with underscores).
- Modular Architecture: Structure your project in a modular way using Django apps.
- Performance Awareness: Always consider scalability and performance implications.

## Project Structure

### Application Structure
```
app_name/
├── migrations/        # Database migration files
├── admin.py           # Django admin configuration
├── apps.py            # App configuration
├── models.py          # Database models
├── managers.py        # Custom model managers
├── signals.py         # Django signals
├── tasks.py           # Celery tasks (if applicable)
└── __init__.py        # Package initialization
```

### API Structure
```
api/
└── v1/
    └── app_name/
        ├── urls.py        # URL routing
        ├── serializers.py # Data serialization
        ├── views.py       # API views
        ├── permissions.py # Custom permissions
        ├── filters.py     # Custom filters
        └── validators.py  # Custom validators
```

## Django/Python Development Guidelines

### Views and API Design
- Use Class-Based Views: Leverage Django's class-based views (CBVs) with DRF's APIViews.
- RESTful Design: Follow RESTful principles strictly with proper HTTP methods and status codes.
- Keep Views Light: Focus views on request handling; keep business logic in models, managers, and services.
- Consistent Response Format: Use unified response structure for both success and error cases.

### Models and Database
- ORM First: Leverage Django's ORM for database interactions; avoid raw SQL queries unless necessary.
- Business Logic in Models: Keep business logic in models and custom managers.
- Query Optimization: Use `select_related` and `prefetch_related` for related object fetching.
- Database Indexing: Implement proper database indexing for frequently queried fields.
- Transactions: Use `transaction.atomic()` for data consistency in critical operations.

### Serializers and Validation
- DRF Serializers: Use Django REST Framework serializers for data validation and serialization.
- Custom Validation: Implement custom validators for complex business rules.
- Field-Level Validation: Use serializer field validation for input sanitization.
- Nested Serializers: Properly handle nested relationships with appropriate serializers.

### Authentication and Permissions
- JWT Authentication: Use `djangorestframework_simplejwt` for JWT token-based authentication.
- Custom Permissions: Implement granular permission classes for different user roles.
- Security Best Practices: Implement proper CSRF protection, CORS configuration, and input sanitization.

### URL Configuration
- URL Patterns: Use `urlpatterns` to define clean URL patterns.
- Nested Routing: Use `include()` for modular URL organization.
- API Versioning: Implement proper API versioning strategy (URL-based versioning recommended).

## Performance and Scalability

### Query Optimization
- N+1 Problem Prevention: Always use `select_related` and `prefetch_related` appropriately.
- Query Monitoring: Monitor query counts and execution time in development.
- Database Connection Pooling: Implement connection pooling for high-traffic applications.
- Caching Strategy: Use Django's cache framework with Redis/Memcached.

### Response Optimization
- Pagination: Standardize pagination across all list endpoints.
- Field Selection: Allow clients to specify required fields to reduce payload size.
- Compression: Enable response compression for large payloads.

## Error Handling and Logging

### Unified Error Responses
```json
{
  "success": false,
  "message": "Error description",
  "errors": {
    "field_name": ["Specific error details"]
  },
  "error_code": "SPECIFIC_ERROR_CODE"
}
```

### Exception Handling
- Custom Exception Handler: Implement global exception handling for consistent error responses.
- Django Signals: Use Django signals to decouple error handling and post-model activities.
- Proper HTTP Status Codes: Use appropriate HTTP status codes (400, 401, 403, 404, 422, 500, etc.).

### Logging Strategy
- Structured Logging: Implement structured logging for API monitoring and debugging.
- Request/Response Logging: Log API calls with execution time, user info, and response status.
- Performance Monitoring: Log slow queries and performance bottlenecks.

**Source**: [cursor.directory/rules/django-rest-api-development-rules-adnan](https://cursor.directory/rules/django-rest-api-development-rules-adnan)
