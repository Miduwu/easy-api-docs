---
title: Reverse Reading
description: Which reading style do you prefer?
---

**easy-api.ts** can read from **top-to-bottom** and **bottom-to-top**,
to switch between reading modes, use the constructor options.
```js
var { API } = require("easy-api.ts");

var api = new API({
    reverse: true // Now is reading from bottom-to-top.
});
```

:::danger
Reverse reading can be unstable, expect bugs and stuff happening.
Report those bugs to the developers.
:::