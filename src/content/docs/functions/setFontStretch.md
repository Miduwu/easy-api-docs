---
title: $setFontStretch
description: Specifies how the font may be expanded or condensed when drawing text.
---

Specifies how the font may be expanded or condensed when drawing text.
:::danger
**$setFontStretch** is only usable inside **$createCanvas**.
:::
## Parameters
| Name  |             Description             | Enforced | Default Value |
|-------|-------------------------------------|----------|---------------|
| Value | The font stretch value as a string. | No       | None          |
## Example
```eats
$setFontStretch[value?]
```