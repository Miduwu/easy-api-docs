---
title: $addEffect
description: Adds an effect to the canvas.
---

Adds an effect to the canvas.
:::danger
**$addEffect** is only usable inside **$createCanvas**.
:::
## Parameters
|  Name  |         Description          | Enforced | Default Value |
|--------|------------------------------|----------|---------------|
| Effect | The name of the effect.      | Yes      | None          |
| Amount | Filter amount to be applied. | Yes      | None          |
## Example
```eats
$addEffect[effect;amount]
```