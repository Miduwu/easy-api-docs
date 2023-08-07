---
sidebar_position: 5
---

# Reading
esy-api.ts can read from top to bottom and bottom to top, to switch between reading modes, use the constructor options.
```js
import { API } from "easy-api.ts";

const api = new API({
    reverse: true // Now is reading from bottom to top.
});

```