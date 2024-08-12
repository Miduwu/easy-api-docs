---
title: $drawRect
description: Draws a rectangle over the canvas.
---

Draws a rectangle over the canvas.
:::danger
**$drawRect** is only usable inside **$createCanvas**.
:::
## Parameters
|  Name  |               Description               | Enforced | Default Value |
|--------|-----------------------------------------|----------|---------------|
| X      | X coordinate to place the rectangle to. | Yes      | None          |
| Y      | Y coordinate to place the rectangle to. | Yes      | None          |
| Width  | Rectangle width.                        | Yes      | None          |
| Height | Rectangle height.                       | Yes      | None          |
| Radius | Rectangle corner radius.                | No       |             0 |
## Example
```
$drawRect[x;y;width;height;radius?]
```