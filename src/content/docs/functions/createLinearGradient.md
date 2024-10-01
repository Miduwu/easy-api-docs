---
title: $createLinearGradient
description: Creates a linear gradient on the given coordinates.
---

Creates a linear gradient on the given coordinates.
:::danger
**$createLinearGradient** is only usable inside **$createCanvas**.
:::
## Parameters
|     Name      |         Description         | Enforced | Default Value |
|---------------|-----------------------------|----------|---------------|
| Gradient Name | The name for this gradient. | Yes      | None          |
| X0            | The X0 coordinate.          | Yes      | None          |
| Y0            | The Y0 coordinate.          | Yes      | None          |
| X1            | The X1 coordinate.          | Yes      | None          |
| Y1            | The Y1 coordinate.          | Yes      | None          |
## Example
```eats
$createLinearGradient[gradientName;x0;y0;x1;y1]
```