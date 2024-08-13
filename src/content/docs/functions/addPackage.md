---
title: $addPackage
description: Adds a require package to the $jsEval code.
---

Adds a require package to the $jsEval code.
## Parameters
|     Name     |                                                        Description                                                        | Enforced | Default Value |
|--------------|---------------------------------------------------------------------------------------------------------------------------|----------|---------------|
| Require Name | How must this package be required.                                                                                        | Yes      | None          |
| Property     | Property to be required from the package. Use %default% to use the default CJS import: const package = require("package") | No       | %DEFAULT%     |
## Example
```eats
$addPackage[requireName;property?]
```
## Function Aliases
- $define