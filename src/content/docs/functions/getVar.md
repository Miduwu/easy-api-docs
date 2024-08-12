---
title: $getVar
description: Get a variable from the database.
---

Get a variable from the database.
> Shown usage belongs to the default database.
> Usage can change if another databases are used.
## Parameters
|     Name      |                   Description                    | Enforced | Default Value |
|---------------|--------------------------------------------------|----------|---------------|
| Variable Name | Variable name to be retrieves from the database. | Yes      | None          |
| Table         | Database table to get the variable from.         | No       | main          |
## Example
```
$getVar[variableName;table?]
```