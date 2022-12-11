# $getSplit
Get a split element from the splitted text.

### Parameters:
| Name          | Type        | Description                         | Optional |
| ------------- | ----------- | ----------------------------------- | -------- |
| index         | Number      | The element position.               | false    |

### Example:
```js
$split[hello|bye|ok;|] // required to use this function
$getSplit[2] // bye
```
