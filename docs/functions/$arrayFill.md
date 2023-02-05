# $arrayFill
Replace a array element with something.
### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| element        | String              | Element of the split.                        | false    |
| something      | String              | Something to replace the element.            | true     |

### Example:
```js
$var[myArray;$split[ok|si|no;|]]
$arrayFill[myArray;ok;yes] // Replaces "ok" with "yes", so: ["yes", "si", "no"]
```

