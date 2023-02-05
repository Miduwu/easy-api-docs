# $findSplitIndex
Finds a text into the elements, if the text is found, returns its index, otherwise returns 0.

### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| query          | Any                 | The element to search into the splitted text.| false    |

### Example:
```js
$var[myArray;$split[hello|bye|ok;|]] // "["hello", "bye", "ok"]"
$arrayFindIndex[myArray;Hola] // Returns 3
```
