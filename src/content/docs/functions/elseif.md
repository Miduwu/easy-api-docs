---
title: $elseif
description: else if statement.
---

else if statement.
:::danger
**$elseif** is only usable inside **$stmt**.
:::
## Parameters
|   Name    |               Description                | Enforced | Default Value |
|-----------|------------------------------------------|----------|---------------|
| Condition | The condition to be evaluated.           | Yes      | None          |
| Then code | Code to execute if the condition is met. | Yes      | None          |
## Example
```eats
$elseif[condition;thenCode]
```