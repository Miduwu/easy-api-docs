---
title: $varSubstract
description: Shorthand for $var[...;$calculate[$get[...] - $get[...]]].
---

Shorthand for $var[...;$calculate[$get[...] - $get[...]]].
## Parameters
|  Name  |                 Description                 | Enforced | Default Value |
|--------|---------------------------------------------|----------|---------------|
| Name   | Variable name.                              | Yes      | None          |
| Amount | Amount to be substracted from the variable. | Yes      | None          |
## Example
```
$varSubstract[name;amount]
```
## Function Aliases
- $varSub
- $letSub
- $setSub