---
title: $writeFile
description: Replaces the previews content with the content provided into the provided file.
---

Replaces the previews content with the content provided into the provided file.
## Parameters
|  Name   |                Description                | Enforced | Default Value |
|---------|-------------------------------------------|----------|---------------|
| Path    | The path of the file to write content to. | Yes      | None          |
| Content | The content to write in the file.         | Yes      | None          |
## Example
```
$writeFile[path;content]
```