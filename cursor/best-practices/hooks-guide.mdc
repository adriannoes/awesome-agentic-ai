---
description: Guide for setting up and securing Claude Code hooks.
globs: **/*
alwaysApply: false
---
# Claude Code Hooks Guide

Hooks act as programmable guardrails to intercept and control Claude's actions.

## Configuration
Hooks live in `.claude/hooks/` and are configured in `.claude/settings.json`.

```json
{
  "hooks": {
    "enabled": true
  }
}
```

## Hook Events
- `PreToolUse`: Runs **before** a tool executes (e.g., allow/deny `rm -rf`).
- `PostToolUse`: Runs **after** execution (e.g., log usage).
- `UserPromptSubmit`: Intercepts user input (e.g., enforce prompt format).
- `Notification`: React to system alerts.

## Implementation (Python)
Scripts receive JSON via `stdin` and output JSON via `stdout`.

```python
import sys
import json

def main():
    data = json.load(sys.stdin)
    tool = data.get("tool_name")
    
    if tool == "Bash" and "rm -rf" in data.get("tool_input", ""):
        # Block dangerous command
        print(json.dumps({"permissionDecision": "deny"}))
        sys.exit(2) # Blocking exit code
        
    print(json.dumps({"permissionDecision": "allow"}))

if __name__ == "__main__":
    main()
```

## Security Best Practices
1. **Validate Input**: Always sanitize `tool_input`.
2. **Least Privilege**: Only allow necessary tools.
3. **No Side Effects**: Hooks should be fast and idempotent.
4. **Gitignore**: Don't commit local hooks unless shared.

## Debugging
Use `claude --debug` to see hook execution logs.
Verify setup with `/config`.
