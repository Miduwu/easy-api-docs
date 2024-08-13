---
title: $scope
description: Executes a code field inside a different data scope.
---

Executes a code field inside a different data scope.
## Parameters
| Name |                            Description                            | Enforced | Default Value |
|------|-------------------------------------------------------------------|----------|---------------|
| Code | Code to be executed inside the new scope.                         | Yes      | None          |
| New  | Whether create a new scope or inherit data from the parent scope. | No       | false         |
## Example
```eats
$scope[code;new?]
```
## Function Aliases
- $block