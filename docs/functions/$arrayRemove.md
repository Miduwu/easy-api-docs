# $arrayRemove
Removes a array element and, optionally, returns it.

### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| index          | Number              | The element index.                           | false    |
| return         | Boolean             | Return the element.                          | false    |

### Example:
```js
$var[splits;$split[CGX-IS-COOL-OMG;-]]
$arrayRemove[splits;4] // returns: OMG
```