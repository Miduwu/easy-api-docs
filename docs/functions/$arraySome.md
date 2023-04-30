# $arraySome
Check if at least one array elements meets the condition.

### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| comparisor     | Comparisor          | The comparisor to check the condition.       | false    |
| query          | Any                 | The element to search into the splitted text.| false    |

### Comparisor types:
- `==` Equal to...
- `!=` Not equal to...
- `<=` Minor or equal than...
- `>=` Greather or equal than...
- `<`: Minor than...
- `>`: Greather than...

### Example:
```js
$var[splits;$split[CGX-IS-COOL-OMG;-]]
$log[$arraySome[splits;==;COOL]] // returns: true
```