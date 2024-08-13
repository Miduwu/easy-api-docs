---
title: $translate
description: Adds a translation transformation to the current matrix by moving the canvas and its origin "X" units horizontally and "Y" units vertically on the grid.
---

Adds a translation transformation to the current matrix by moving the canvas and its origin "X" units horizontally and "Y" units vertically on the grid.
:::danger
**$translate** is only usable inside **$createCanvas**.
:::
## Parameters
| Name |            Description             | Enforced | Default Value |
|------|------------------------------------|----------|---------------|
| X    | X coordinate to place the text to. | Yes      | None          |
| Y    | Y coordinate to place the text to. | Yes      | None          |
## Example
```eats
$translate[x;y]
```