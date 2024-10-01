---
title: $setLetterSpacing
description: Specifies the spacing between letters when drawing text.
---

Specifies the spacing between letters when drawing text.
:::danger
**$setLetterSpacing** is only usable inside **$createCanvas**.
:::
## Parameters
|  Name  |         Description         | Enforced | Default Value |
|--------|-----------------------------|----------|---------------|
| Amount | The spacing amount in "px". | Yes      | None          |
## Example
```eats
$setLetterSpacing[amount]
```