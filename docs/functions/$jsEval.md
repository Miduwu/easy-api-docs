# $jsEval
Evaluate a javascript code.

### Parameters:
| Name      | Type                | Description                        |
| --------- | ------------------- | ---------------------------------- |
| return| Boolean              | Choose to return the code or not.

| code | String              | The js code you are going to evaluate.

### Example:
```js
$jsEval[yes;console.log("hello world")] // return: Hello world
$jsEval[no;console.log("hello world")] // return: 
```
