---
title: $onlyIf
description: Executes a error code if the condition is not met.
---

Executes a error code if the condition is not met.
## Parameters
|    Name    |                     Description                     | Enforced | Default Value |
|------------|-----------------------------------------------------|----------|---------------|
| Expression | The expression to be evaluated.                     | Yes      | None          |
| Error Code | The code to be execute if the condition is not met. | Yes      | None          |
## Example
```
$onlyIf[expression;errorCode]
```