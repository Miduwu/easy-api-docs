---
title: $xor
description: Creates an string of unique values that is the symmetric difference of the given elements. The order of result values is determined by the order they occur in the given elements.
---

Creates an string of unique values that is the symmetric difference of the given elements. The order of result values is determined by the order they occur in the given elements.
## Parameters
|        Name        |                  Description                  | Enforced | Default Value |
|--------------------|-----------------------------------------------|----------|---------------|
| Separator          | Elements and result separator.                | Yes      | None          |
| Lefthand Elements  | Lefthand elements to apply the XOR function.  | Yes      | None          |
| Righthand Elements | Righthand elements to apply the XOR function. | Yes      | None          |
## Example
```eats
$xor[separator;lefthandElements;righthandElements]
```