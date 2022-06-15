# EASY-API.TS
Make your own API with ease.

![image](https://i.imgur.com/xqy1Ta2.png)

## Easy setup

```js
import { API } from "easy-api.ts";

const api = new API({
    port: 3000
})

api.routes.add({
    path: '/owoify',
    details: { description: 'Owoify your text.' },
    code: `
    $ignore[check documentation for more details about every function]
    $send[200;json;{
        "data": "$replaceText[$replaceText[$getQuery[text];r;w];l;w]"
    }]
    $if[$getQuery[text]==;400;json;{
        "error": "Missing query parameter 'text'"
    }]
    `
})

api.connect()
```
