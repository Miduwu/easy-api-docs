---
title: $addColorStop
description: Adds a new color stop, defined by an offset and a color, to a given canvas gradient.
---

Adds a new color stop, defined by an offset and a color, to a given canvas gradient.
:::danger
**$addColorStop** is only usable inside **$createCanvas**.
:::
## Parameters
|     Name      |         Description         | Enforced | Default Value |
|---------------|-----------------------------|----------|---------------|
| Gradient Name | The name for this gradient. | Yes      | None          |
| Offset        | The X0 coordinate.          | Yes      | None          |
| Color         | The stop color.             | Yes      | None          |
## Example
```eats
$addColorStop[gradientName;offset;color]
```