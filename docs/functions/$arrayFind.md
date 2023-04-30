# $arrayFind
Returns the first element that mets to the condition.

### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| query          | Any                 | The element to search into the splitted text.| false    |

### Example:
```js
$var[splits;$split[CGX-IS-COOL-OMG;-]]
$log[$arrayFind[splits;IS]] // returns: IS
```