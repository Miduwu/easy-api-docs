---
title: Not Found Handler
description: How to set a custom "not found" error handler.
---

You can set a custom code for **not found routes** using: `<API>.setNotFoundHandler` method.
```js
// /index.js
var api = new API(...);

api.setNotFoundHandler(`
$reply[
    $setCode[404]
    $setType[json]
    $setBody[{ "msg": "route not found." }]
]
`);
```