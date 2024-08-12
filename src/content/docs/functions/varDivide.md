---
title: $varDivide
description: Shorthand for $var[...;$calculate[$get[...] / $get[...]]].
---

Shorthand for $var[...;$calculate[$get[...] / $get[...]]].
## Parameters
|  Name  |             Description             | Enforced | Default Value |
|--------|-------------------------------------|----------|---------------|
| Name   | Variable name.                      | Yes      | None          |
| Amount | Amount to divide the variable with. | Yes      | None          |
## Example
```
$varDivide[name;amount]
```
## Function Aliases
- $varDiv
- $letDiv
- $setDiv