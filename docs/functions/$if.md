# $if
Send something if the condition is true.

### Parameters:
| Name      | Type                | Description                        | Optional |
| --------- | ------------------- | ---------------------------------- | -------- |
| condition | String              | The condition (true) will execute. | false    |
| status    | Number              | The response http status.          | false    |
| body      | Record<string, any> | The JSON object to send.           | false    |

### Example:
```js
// http://localhost:port/route

$if[$getQuery[text]==undefined;400;{
    "status": 400,
    "means": "Bad request.",
    "text": "Missing query parameter 'text'."
}]
```
