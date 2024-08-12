---
title: $setVar
description: Creates a variable in the database.
---

Creates a variable in the database.
> Shown usage belongs to the default database.
> Usage can change if another databases are used.
## Parameters
|      Name      |                 Description                  | Enforced | Default Value |
|----------------|----------------------------------------------|----------|---------------|
| Variable Name  | Variable name to be created in the database. | Yes      | None          |
| Variable Value | The value for the variable.                  | Yes      | None          |
| Table          | Database table to save the variable into.    | No       | main          |
## Example
```
$setVar[variableName;variableValue;table?]
```