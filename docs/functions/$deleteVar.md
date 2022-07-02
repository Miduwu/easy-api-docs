# $deleteVar
Delete a variable from the database.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| name        | String      | The variable name to delete.         | false    |

### Example:
```js
$getVar[hi] // undefined
$deleteVar[hi]
$getVar[hi] // ok
$setVar[hi;ok]
```

> ⚠: You need to setup the database to use this function. Check [tips](tips.md)
