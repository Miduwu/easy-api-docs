---
title: $isImage
description: Check if the given ID belongs to a valid cached image ID.
---

Check if the given ID belongs to a valid cached image ID.
:::danger
**$isImage** is only usable inside **$createCanvas**.
:::
## Parameters
|   Name   |            Description            | Enforced | Default Value |
|----------|-----------------------------------|----------|---------------|
| Image ID | Cached image ID to be downloaded. | Yes      | None          |
## Example
```eats
$isImage[imageId]
```