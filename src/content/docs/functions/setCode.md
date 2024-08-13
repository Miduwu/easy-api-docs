---
title: $setCode
description: Set the response code.
---

Set the response code.
:::danger
**$setCode** is only usable inside **$reply**.
:::
## Parameters
| Name |               Description               | Enforced | Default Value |
|------|-----------------------------------------|----------|---------------|
| Code | Status code for the response to be set. | Yes      | None          |
## Example
```eats
$setCode[code]
```