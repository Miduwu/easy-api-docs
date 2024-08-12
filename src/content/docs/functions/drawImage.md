---
title: $drawImage
description: Draws an image over the canvas.
---

Draws an image over the canvas.
:::danger
**$drawImage** is only usable inside **$createCanvas**.
:::
## Parameters
|  Name  |             Description             | Enforced | Default Value |
|--------|-------------------------------------|----------|---------------|
| ID     | The image ID.                       | Yes      | None          |
| X      | X coordinate to place the image to. | Yes      | None          |
| Y      | Y coordinate to place the image to. | Yes      | None          |
| Width  | Image width.                        | Yes      | None          |
| Height | Image height.                       | Yes      | None          |
| Radius | Image corner radius.                | No       |             0 |
## Example
```
$drawImage[id;x;y;width;height;radius?]
```