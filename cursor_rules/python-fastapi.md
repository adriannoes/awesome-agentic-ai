# Python + FastAPI Rules

Use these rules when working with Python and FastAPI projects.

## Code Style
- Use type hints for all function parameters and return values
- Follow PEP 8 style guidelines
- Use dataclasses for data models
- Prefer async/await over callbacks

## API Design
- Use proper HTTP status codes
- Implement proper error handling
- Add request/response models
- Include API documentation

## Database Patterns
- Use SQLAlchemy for ORM
- Implement proper migrations
- Use connection pooling
- Handle database errors gracefully

## Example API Structure
```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float

@app.get("/items/", response_model=List[Item])
async def get_items():
    # Implementation here
    pass
```