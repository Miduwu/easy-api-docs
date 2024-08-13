---
title: $drawText
description: Draws a text over the canvas.
---

Draws a text over the canvas.
:::danger
**$drawText** is only usable inside **$createCanvas**.
:::
## Parameters
|      Name      |             Description              | Enforced | Default Value |
|----------------|--------------------------------------|----------|---------------|
| Text           | The text to be placed in the canvas. | Yes      | None          |
| X              | X coordinate to place the text to.   | Yes      | None          |
| Y              | Y coordinate to place the text to.   | Yes      | None          |
| Width          | Textbox width.                       | Yes      | None          |
| Height         | Textbox height.                      | Yes      | None          |
| Align          | Text align.                          | No       | left          |
| Vertical Align | Text vertical align.                 | No       | top           |
## Example
```eats
$drawText[text;x;y;width;height;align?;verticalAlign?]
```