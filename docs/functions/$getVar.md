# $getVar
Get a variable value from the database.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| name        | String      | The variable name to get.            | false    |

### Example:
```js
$getVar[hi] // ok
$setVar[hi;ok]
```

!> You need to setup the database to use this function. Check [tips](tips.md?id=using-database)
