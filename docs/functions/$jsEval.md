# $jsEval
Evaluate a javascript code.

### Parameters:
| Name      | Type                | Description                            | Optional |
| --------- | ------------------- | -------------------------------------- | -------- |
| return    | Boolean             | Choose to return the code or not.      | false    |
| code      | String              | The js code you are going to evaluate. | false    |

### Example:
```js
$jsEval[true;
const hi = "Hello world"
hi
] // return: Hello world
$jsEval[false;
const hi = "Hello world"
hi
] // return: 
```
