# $var
Set a new local variable value.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| name        | String      | The variable name to get the value.  | false    |
| value       | Any         | The value this variable will have.   | false    |

### Example:
```js
// with strings
$var[str;hi]
$uppercase[$get[hi]] // HI

// with arrays
$var[array;[1,2,3]]
$arrayLength[array] // 3
$arrayPush[array;hi]
$get[array] // [1,2,3,"hi"]

// with objects
$var[obj;{}]
$setObjectKey[obj;test;true]
$get[obj] // { "test": true }
```

?> TIP: You can use that for sending exact type in **`$send`**
