---
title: $downloadImage
description: Downloads a cached image into your file system.
---

Downloads a cached image into your file system.
:::danger
**$downloadImage** is only usable inside **$createCanvas**.
:::
## Parameters
|   Name   |             Description             | Enforced | Default Value |
|----------|-------------------------------------|----------|---------------|
| Image ID | Cached image ID to be downloaded.   | Yes      | None          |
| Path     | File path to download the image to. | Yes      | None          |
## Example
```eats
$downloadImage[imageId;path]
```