# EASY-API.TS
Make your own API with ease.

![image](https://i.imgur.com/upR5GuS.png)

## Easy setup

```js
import { API } from "easy-api.ts"; // use 'const { API } = require("easy-api.ts")' for JavaScript

const api = new API({
    port: process.env.PORT || 3000
})

api.routes.add({
    path: '/color',
    code: `
    $ignore[Check docs to see how does functions work]
    $send[200;canvas;$default]
    $drawRect[0;0;512;512]
    $color[$getQuery[hex]]
    $createCanvas[512;512]
    $if[$isValidHex[$getQuery[hex]]==false;400;{
        error: "Invalid hex code provided."
    }]
    $if[$getQuery[hex]==undefined;400;{
        error: "Missing 'hex' parameter."
    }]
    `
})

// Lets load the handler...
api.routes.load('./routes').then(() => {
    console.log('Source loaded.')
    api.connect() // We're connecting to the API when the source is loaded.
})
```

## You must know...
- You need node **>=14**
- The code start reading from bottom to the top.
- This is a wrapper of express extended with custom functions like canvas.
- This can contain some bugs (report it).
- This is package can be used in JavaScript (use const instead import) and TypeScript
- We'd like you to join our support server.
