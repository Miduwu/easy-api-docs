---
title: Conditional Statements
description: Brief guide on how to use "$stmt".
---

As a new feature of **ea.ts**, we have added **$stmt**. This is a function
that lets you evaluate multiple conditional statements at once.
```
$let[myValue;bedwars]
$stmt[
    $if[$get[myValue]==skyblock;
        ...my code
    ]
    $elseif[$get[myValue]==aidk;
        ...my code
    ]
    $else[
        ...my code
    ]
]
```

:::danger
**$stmt** just allows the execution of **$if**, **$elseif** and **$else** inside its scope.

If you put another function, **it will throw an error**.
:::