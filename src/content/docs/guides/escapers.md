---
title: Escapers
description: A brief guide about what an escaper is and which ones exist.
---

## What is an escaper?
Those **variables/values** will be replaced in our code to the
specified value, like so: **%SEMI%** > **;**

In aoi.js they are defined like: **#ANYTHING#**
```js
// Example
%SEMI%%LPAREN% => ;)
```

## Escaper List
| Escaper    | Replacement   |
| ---------- | ------------- |
| `%LEFT%`   | `]`           |
| `%RIGHT%`  | `[`           |
| `%SEMI%`   | `;`           |
| `%COLON%`  | `:`           |
| `%SPACE%`  | ` `           |
| `%AT%`     | `@`           |
| `%OR%`     | `\|\|`        |
| `%AND%`    | `&&`          |
| `%RPAREN%` | `(`           |
| `%LPAREN%` | `)`           |
| `%DOL%`    | `$`           |