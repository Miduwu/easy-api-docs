---
title: $ternary
description: Executes a ternary statement.
---

Executes a ternary statement.
## Parameters
|    Name    |                     Description                     | Enforced | Default Value |
|------------|-----------------------------------------------------|----------|---------------|
| Expression | The expression to be evaluated.                     | Yes      | None          |
| Then       | The code to be execute if the condition is met.     | Yes      | None          |
| Else       | The code to be execute if the condition is not met. | No       | None          |
## Example
```eats
$ternary[expression;then;else?]
```
## Function Aliases
- $if