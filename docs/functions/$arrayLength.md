# $arrayLength
Returns the length of the provided array.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |

### Example
```js
$var[arrayLoaded;$split[a|b|c;|]]
$arrayLength[arrayLoaded] // Returns: 3
```