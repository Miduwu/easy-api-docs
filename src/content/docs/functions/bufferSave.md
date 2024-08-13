---
title: $bufferSave
description: Save the requested buffer into your file system.
---

Save the requested buffer into your file system.
## Parameters
| Name |                    Description                    | Enforced | Default Value |
|------|---------------------------------------------------|----------|---------------|
| Name | The name of the array.                            | Yes      | None          |
| Path | Path to save the file to, must include extension. | Yes      | None          |
## Example
```eats
$bufferSave[name;path]
```