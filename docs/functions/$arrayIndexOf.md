# $arrayIndexOf
Returns index of element which matches text.

### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| query          | Any                 | The element to search into the splitted text.| false    |

### Example:
```js
$var[splits;$split[hello|bye|ok;|]]
$arrayIndexOf[splits;bye] // returns: 2
```