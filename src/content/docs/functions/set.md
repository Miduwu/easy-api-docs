---
title: $set
description: Creates a environment variable.
---

Creates a environment variable.
## Parameters
|      Name      |                   Description                   | Enforced | Default Value |
|----------------|-------------------------------------------------|----------|---------------|
| Variable Name  | Variable name to be created in the environment. | Yes      | None          |
| Variable Value | The value for the environment variable.         | Yes      | None          |
## Example
```eats
$set[variableName;variableValue]
```
## Function Aliases
- $var
- $let
- $createTemporaryVar