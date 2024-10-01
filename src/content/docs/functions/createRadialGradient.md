---
title: $createRadialGradient
description: Creates a radial gradient using the size and coordinates of two circles.
---

Creates a radial gradient using the size and coordinates of two circles.
:::danger
**$createRadialGradient** is only usable inside **$createCanvas**.
:::
## Parameters
|     Name      |                           Description                            | Enforced | Default Value |
|---------------|------------------------------------------------------------------|----------|---------------|
| Gradient Name | The name for this gradient.                                      | Yes      | None          |
| X0            | The x-axis coordinate of the start circle.                       | Yes      | None          |
| Y0            | The y-axis coordinate of the start circle.                       | Yes      | None          |
| Radius 0      | The radius of the start circle. Must be non-negative and finite. | Yes      | None          |
| X1            | The x-axis coordinate of the end circle.                         | Yes      | None          |
| Y1            | The y-axis coordinate of the end circle.                         | Yes      | None          |
| Radius 1      | The radius of the end circle. Must be non-negative and finite.   | Yes      | None          |
## Example
```eats
$createRadialGradient[gradientName;x0;y0;radius0;x1;y1;radius1]
```