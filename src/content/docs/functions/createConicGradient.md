---
title: $createConicGradient
description: Creates a gradient around a point with given coordinates.
---

Creates a gradient around a point with given coordinates.
:::danger
**$createConicGradient** is only usable inside **$createCanvas**.
:::
## Parameters
|     Name      |                                                                     Description                                                                      | Enforced | Default Value |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------|
| Gradient Name | The name for this gradient.                                                                                                                          | Yes      | None          |
| Start Angle   | The angle at which to begin the gradient, in radians. The angle starts from a line going horizontally right from the center, and proceeds clockwise. | Yes      | None          |
| X             | The x-axis coordinate of the center of the gradient.                                                                                                 | Yes      | None          |
| Y             | The y-axis coordinate of the center of the gradient.                                                                                                 | Yes      | None          |
## Example
```eats
$createConicGradient[gradientName;startAngle;x;y]
```