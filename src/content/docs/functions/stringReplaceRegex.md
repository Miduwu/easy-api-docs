---
title: $stringReplaceRegex
description: Replace something in the provided text using regular expressions.
---

Replace something in the provided text using regular expressions.
## Parameters
|   Name   |              Description              | Enforced | Default Value |
|----------|---------------------------------------|----------|---------------|
| Text     | The text to work with.                | Yes      | None          |
| Regex    | The regular expression to be matched. | Yes      | None          |
| Replacer | The word to replace the match with.   | No       |               |
| Flags    | The flags for the regular expression. | No       | g             |
## Example
```eats
$stringReplaceRegex[text;regex;replacer?;flags?]
```
## Function Aliases
- $replaceWithRegex
- $replaceRegex
- $stringReplaceWithRegex