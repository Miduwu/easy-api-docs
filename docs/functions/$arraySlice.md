# $arraySlice
Returns an array slice.

### Parameters
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| start          | String              | Which element the slice will start.          | false    |
| end            | String              | Which element the slice will end.            | false    |

### Example
```js
$var[myArray;$split[ok|si|no|waos|omaga;|]]
$arraySlice[myArray;2;4] // Returns: si - no - waos
```
