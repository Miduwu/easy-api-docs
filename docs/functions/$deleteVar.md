# $deleteVar
Delete a variable from the database.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| name        | String      | The variable name to delete.         | false    |

### Example:
```js
$setVar[hi;ok]
$getVar[hi] // ok
$deleteVar[hi]
$getVar[hi] // undefined
```

!> You need to setup the database to use this function. Check [tips](tips.md?id=using-database)
