---
title: $case
description: A switch case statement.
---

A switch case statement.
:::danger
**$case** is only usable inside **$switch**.
:::
## Parameters
| Name  |             Description             | Enforced | Default Value |
|-------|-------------------------------------|----------|---------------|
| Value | Required value to execute the case. | Yes      | None          |
| Code  | Code to be executed.                | Yes      | None          |
## Example
```eats
$case[value;code]
```