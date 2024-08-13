---
title: $fileSize
description: Returns the file size.
---

Returns the file size.
## Parameters
|   Name   |                 Description                 | Enforced | Default Value |
|----------|---------------------------------------------|----------|---------------|
| Path     | The path of the file to be checked.         | Yes      | None          |
| Decimals | How many decimals for the file size number. | No       |             2 |
## Example
```eats
$fileSize[path;decimals?]
```