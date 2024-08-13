---
title: $loadImage
description: Load a new image and save it using the given ID.
---

Load a new image and save it using the given ID.
:::danger
**$loadImage** is only usable inside **$createCanvas**.
:::
## Parameters
|   Name   |          Description          | Enforced | Default Value |
|----------|-------------------------------|----------|---------------|
| Image ID | Image identificator.          | Yes      | None          |
| Type     | Source type.                  | Yes      | None          |
| Source   | Source to get the image from. | Yes      | None          |
## Example
```eats
$loadImage[imageId;type;source]
```