# $arrayLastIndexOf
Returns the last index of element which matches text.

### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| query          | Any                 | The element to search into the splitted text.| false    |

### Example:
```js
$var[splits;$split[hello|bye|bye;|]]
$arrayLastIndexOf[splits;bye] // returns: 3
```