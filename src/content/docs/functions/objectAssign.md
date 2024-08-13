---
title: $objectAssign
description: Assign objects to a base object.
---

Assign objects to a base object.
## Parameters
|  Name   |                 Description                  | Enforced | Default Value |
|---------|----------------------------------------------|----------|---------------|
| Name    | The name of the object to assign structs to. | Yes      | None          |
| Objects | Objects to be assigned.                      | Yes      | None          |
## Example
```eats
$objectAssign[name;...objects]
```
## Function Aliases
- $objectMix
- $jsonAssign