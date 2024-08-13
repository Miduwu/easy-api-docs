---
title: $return
description: Returns a value outside a scope.
---

Returns a value outside a scope.
:::danger
**$return** is only usable inside **$scope**.
:::
## Parameters
| Name  |              Description              | Enforced | Default Value |
|-------|---------------------------------------|----------|---------------|
| Value | Value to be retrieved to the outside. | Yes      | None          |
## Example
```eats
$return[value]
```