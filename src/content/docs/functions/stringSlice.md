---
title: $stringSlice
description: Get a part of a text, from X to Y.
---

Get a part of a text, from X to Y.
## Parameters
| Name |      Description       | Enforced | Default Value |
|------|------------------------|----------|---------------|
| Text | The text to work with. | Yes      | None          |
| From | Slicing start index.   | Yes      | None          |
| To   | Slicing end index.     | No       | textLength    |
## Example
```
$stringSlice[text;from;to?]
```
## Function Aliases
- $slice