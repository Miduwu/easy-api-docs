---
title: Function Placeholders
description: Using placeholders in supported functions.
---

Placeholders are values that some functions support
to handle custom code.

## Functions supporting placeholders
### $createCallback
This function allows the usage of placeholders to
handle the custom parameters of a callback.
```js
// Example
$createCallback[deg2rad;$calculate[%param_0% * $pi / 180]]
```
You must increment the number in `%param_HERE%` to
handle the desired parameter.

### $arrayForEach
This function allows the usage of placeholders to
retrieve the value of the current element in the
iteration.
```js
// Example
$arrayCreate[fruits;Apple,Banana,Mango,Watermelon]
$arrayForEach[fruits;
    $log[Current element: %element%]
]
```

### $try
This function allows the usage of placeholders to
retrieve the value of the error message in the
catch block.
```js
// Example
$try[
    $log;
    $log[Unable to run code with reason: %error%]
]
```

### $objectEntries
This function allows the usage of placeholders to
retrieve the value of the current key/value in the
iteration.
```
// Example
$objectCreate[user;{
    "name": "Cyberghxst",
    "age": "96",
    "joinedAt": "1972"
}]
$objectEntries[user;Current data: **%key%** = **%value%**.]
```

### $setBody
This function allows the usage of placeholders to
handle the body of a canvas response.
```js
// Example
$setBody[%default%]
```