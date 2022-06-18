# $send
Send something to the http response.

### Parameters:
| Name          | Type               | Description                                                     | Optional |
| ------------- | ------------------ | --------------------------------------------------------------- | -------- |
| status        | Number             | The http response status. Ex: 200.                              | false    |
| type          | String             | The response type (json|safe|canvas)                            | false    |
| body          | Object \| $default | The body (JSON for this type, $default for 'safe' and 'canvas') | false    |

### Example:
```js
// for jsons
$send[200;json;{
    "data": "Hello!"
}]

// for safe objects
$send[200;safe;$default]
$setObjectKey[data;Hello!]
$createObject

// for canvas
$send[200;canvas;$default]
// more canvas things here...
$createCanvas
```
