---
title: $setBody
description: Set the response body.
---

Set the response body.
:::danger
**$setBody** is only usable inside **$reply**.
:::
## Parameters
| Name |           Description            | Enforced | Default Value |
|------|----------------------------------|----------|---------------|
| Body | Body for the response to be set. | Yes      | None          |
## Example
```
$setBody[body]
```