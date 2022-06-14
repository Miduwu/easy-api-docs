# $jsEval
Evaluate a javascript code.

### Parameters:
| Name      | Type                | Description                            |
| --------- | ------------------- | -------------------------------------- |
| return    | Boolean             | Choose to return the code or not.      |
| code      | String              | The js code you are going to evaluate. |

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
