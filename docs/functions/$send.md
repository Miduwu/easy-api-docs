# $send
Send something to the http response.

### Parameters:
| Name          | Type               | Description                                                     | Optional |
| ------------- | ------------------ | --------------------------------------------------------------- | -------- |
| status        | Number             | The http response status. Ex: 200.                              | false    |
| type          | String             | The response type (json\|safe\|canvas\|file\|redirect\|other).  | false    |
| body          | Object \| $default | The body (JSON for this type, $default for 'safe' and 'canvas') | false    |

### Example:
```js
// for jsons
$send[200;json;{
    "data": "Hello!"
}]

// for safe objects
$createObject
$setObjectKey[data;Hello!]
$send[200;safe;$default]

// for canvas
$createCanvas
// more canvas things here...
$send[200;canvas;$default]

// for files (json, html, etc...)
$send[200;file;./location/file.ext]

// for redirects
$send[200;redirect;https://google.com]

// for other things (texts, html, etc...)
$send[200;other;
<h1>Test</h1>
<p>This is a cool HTML test</p>
]
```
