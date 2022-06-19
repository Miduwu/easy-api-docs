# EASY-API.TS
Make your own API with ease.

![image](https://i.imgur.com/upR5GuS.png)

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

## You must know...
- You need node **>=14**
- The code start reading from bottom to the top.
- This is a wrapper of express extended with custom functions like canvas.
- This can contain some bugs (report it).
- This is package can be used in JavaScript (use const instead import) and TypeScript
- We'd like you to join our support server.
