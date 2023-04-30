# $arrayIncludes
Returns whether an array includes an element or not.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |
| ...querys          | String              | Elements to search for.                      | false    |

### Example:
```js
$var[splits;$split[hello|bye|ok;|]]
$arrayIncludes[splits;hola;adios] // returns: false
```