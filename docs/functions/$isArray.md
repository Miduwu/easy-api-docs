# $isArray
Check if the inside is an array or not.

### Parameters
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |

### Example
```js
$var[mine;$split[hello|1|2;|]]
$isArray[mine] // Returns: true
```