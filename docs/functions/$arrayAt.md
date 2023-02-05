# $arrayAt
Get a element from the given array.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |
| index              | Number              | The index of the element you will get.       | false    |

### Example:
```js
$var[myArray;$split[hello|bye|ok;|]] // Required to use this function
$arrayAt[myArray;2] // bye
```
