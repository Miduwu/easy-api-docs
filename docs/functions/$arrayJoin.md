# $arrayJoin
Get the array elements in a separator.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |
| separator          | String              | Separator to join the splits.                | false    |

### Example:
```js
$var[myArray;$split[hello|bye|ok;|]] // "["hello", "bye", "ok"]"
$arrayJoin[myArray; - ] // hello - bye - ok
```
