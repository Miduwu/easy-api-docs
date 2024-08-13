---
title: $objectSet
description: Set a property in an object.
---

Set a property in an object.
## Parameters
| Name  |            Description             | Enforced | Default Value |
|-------|------------------------------------|----------|---------------|
| Name  | The name of the object.            | Yes      | None          |
| Path  | Object property path to be setted. | Yes      | None          |
| Value | The value for the object property. | Yes      | None          |
## Example
```eats
$objectSet[name;path;value]
```
## Function Aliases
- $setObjectKey
- $setObjectProperty