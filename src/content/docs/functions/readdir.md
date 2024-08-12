---
title: $readdir
description: Read a folder and returns its file list.
---

Read a folder and returns its file list.
## Parameters
|   Name    |             Description             | Enforced | Default Value |
|-----------|-------------------------------------|----------|---------------|
| Path      | The path to be readed.              | Yes      | None          |
| Separator | Text separator to join the results. | No       | ,             |
## Example
```
$readdir[path;separator?]
```