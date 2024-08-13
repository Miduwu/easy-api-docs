---
title: $deleteVar
description: Delete a variable from the database.
---

Delete a variable from the database.
> Shown usage belongs to the default database.
> Usage can change if another databases are used.
## Parameters
|     Name      |                  Description                   | Enforced | Default Value |
|---------------|------------------------------------------------|----------|---------------|
| Variable Name | Variable name to be deleted from the database. | Yes      | None          |
| Table         | Database table to delete the variable from.    | No       | main          |
## Example
```eats
$deleteVar[variableName;table?]
```