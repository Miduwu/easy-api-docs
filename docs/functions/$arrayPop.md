# $arrayPop
Removes the last array item and, optionally, returns it.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |
| return             | String              | Return the element.                          | true     |

### Example:
```js
$var[splits;$split[hello|bye|ok;|]]
$arrayPop[splits;true] // returns: ok
```