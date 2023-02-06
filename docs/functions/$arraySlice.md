# $arraySlice
Returns an array slice.

### Parameters
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| start          | String              | Which element the slice will start.          | false    |
| end            | String              | Which element the slice will end.            | false    |
| join           | String              | Separator to join the elements.              | true     |

### Example
```js
$var[myArray;$split[ok|xd|si|no|waos|omaga;|]]
$arraySlice[myArray;2;5; - ] // Returns: si - no - waos
```