---
title: $ram
description: Returns how many RAM is being used by the process.
---

Returns how many RAM is being used by the process.
## Parameters
|   Name   |                Description                | Enforced | Default Value |
|----------|-------------------------------------------|----------|---------------|
| Type     | RAM type to be selected.                  | No       | MB            |
| Decimals | How many decimals to round the ram usage. | No       |             2 |
## Example
```eats
$ram[type?;decimals?]
```