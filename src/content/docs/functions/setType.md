---
title: $setType
description: Set the response type.
---

Set the response type.
:::danger
**$setType** is only usable inside **$reply**.
:::
## Parameters
| Name |           Description            | Enforced | Default Value |
|------|----------------------------------|----------|---------------|
| Type | Type for the response to be set. | Yes      | None          |
## Example
```eats
$setType[type]
```