# $if
Send something if the condition is true.

### Parameters:
| Name      | Type                | Description                        |
| --------- | ------------------- | ---------------------------------- |
| condition | String              | The condition (true) will execute. |
| status    | Number              | The response http status.          |
| body      | Record<string, any> | The JSON object to send.           |

### Example:
```js
// http://localhost:port/route

$if[$getQuery[text]==undefined;400;{
    "status": 400,
    "means": "Bad request.",
    "text": "Missing query parameter 'text'."
}]
```