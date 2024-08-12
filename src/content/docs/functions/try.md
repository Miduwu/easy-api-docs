---
title: $try
description: Try to execute the given code, if something goes wrong, catch code is executed.
---

Try to execute the given code, if something goes wrong, catch code is executed.
## Parameters
|     Name     |                  Description                   | Enforced | Default Value |
|--------------|------------------------------------------------|----------|---------------|
| Code         | Code to be executed.                           | Yes      | None          |
| Catch Code   | Code to be executed in case some error ocurrs. | Yes      | None          |
| Finally Code | Code to be executed finally.                   | No       | None          |
## Example
```
$try[code;catchCode;finallyCode?]
```