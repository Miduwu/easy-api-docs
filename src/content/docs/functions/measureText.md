---
title: $measureText
description: Measure all dimensions of a text.
---

Measure all dimensions of a text.
:::danger
**$measureText** is only usable inside **$createCanvas**.
:::
## Parameters
| Name |             Description              | Enforced | Default Value |
|------|--------------------------------------|----------|---------------|
| Text | The text to be placed in the canvas. | Yes      | None          |
| Type | Return data style.                   | Yes      | None          |
## Example
```eats
$measureText[text;type]
```