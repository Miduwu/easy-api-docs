# $setVar
Set a variable in the database.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| name        | String      | The variable name to set.            | false    |
| value       | Any         | The variable value to set.           | false    |

### Example:
```js
$getVar[hi] // ok
$setVar[hi;ok] // We're setting it
```

!> You need to setup the database to use this function. Check [tips](tips.md?id=using-database)
