---
title: $env
description: Retrieves a environment variable.
---

Retrieves a environment variable.
## Parameters
|     Name      |                            Description                             | Enforced | Default Value |
|---------------|--------------------------------------------------------------------|----------|---------------|
| Variable Name | The variable name to be retrieved from Node environment variables. | Yes      | None          |
| Authorize     | Whether authorize this variable to be retrieved. (boolean value)   | Yes      | None          |
## Example
```
$env[variableName;authorize]
```