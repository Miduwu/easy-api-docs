---
title: $execRegex
description: Executes a regex in a string.
---

Executes a regex in a string.
## Parameters
| Name  |                Description                 | Enforced | Default Value |
|-------|--------------------------------------------|----------|---------------|
| Regex | The regular expression to be executed.     | Yes      | None          |
| Flags | Regular expression flags.                  | No       | g             |
| Text  | Text to execute the regex on.              | Yes      | None          |
| Index | Index to get from the executed expression. | No       |             1 |
## Example
```
$execRegex[regex;flags?;text;index?]
```