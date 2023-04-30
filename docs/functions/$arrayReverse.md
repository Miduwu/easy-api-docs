# $arrayReverse
Reverses the elements orden of an array.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |
| separator          | String              | Separator to join the splits.                | false    |

### Example:
```js
$var[splits;$split[CGX-IS-COOL-OMG;-]]
$arrayReverse[splits;,] // returns: OMG,COOL,IS,CGX
```