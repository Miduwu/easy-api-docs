# $arraySort
Sorts the given array.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |

### Example:
```js
$var[myArray;$split[Hello|Im|CGX;|]] // Returns: "["Hello", "Im", "CGX"]"
$arraySort[myArray] // Returns: "["CGX", "Hello", "Im"]"
```
