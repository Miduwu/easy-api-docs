---
title: $advancedReplace
description: Replace text with advanced options.
---

Replace text with advanced options.
## Parameters
|   Name    |                   Description                   | Enforced | Default Value |
|-----------|-------------------------------------------------|----------|---------------|
| Text      | The text to work with.                          | Yes      | None          |
| Match     | The word to be matched.                         | Yes      | None          |
| New Value | The new value to replace the match with.        | No       |               |
| Amount    | How many times to perform the replacement.      | No       |            -1 |
| Direction | Direction of replacement. (forward or backward) | No       | fwd           |
## Example
```eats
$advancedReplace[text;match;newValue?;amount?;direction?]
```
## Function Aliases
- $advancedReplaceText