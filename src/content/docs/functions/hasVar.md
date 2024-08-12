---
title: $hasVar
description: Check if a variable exists in the database.
---

Check if a variable exists in the database.
> Shown usage belongs to the default database.
> Usage can change if another databases are used.
## Parameters
|     Name      |                 Description                  | Enforced | Default Value |
|---------------|----------------------------------------------|----------|---------------|
| Variable Name | Variable name to be created in the database. | Yes      | None          |
| Table         | Database table to check the variable in.     | No       | main          |
## Example
```
$hasVar[variableName;table?]
```