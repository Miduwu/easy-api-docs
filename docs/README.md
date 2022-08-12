# EASY-API ![img](https://cdn.discordapp.com/emojis/978823080300380170.png ':size=20')
A powerful library to create your own API with ease.

![image](https://camo.githubusercontent.com/1b637c74e2bcd2feb02d7a3ca3d61263bed5d673dfd472ee663157db1d2000f6/68747470733a2f2f692e696d6775722e636f6d2f326b735a5342792e6a7067 ':size=750')

## Easy setup

```js
import { API } from "easy-api.ts"; // use 'const { API } = require("easy-api.ts")' for JavaScript

const api = new API({
    port: process.env.PORT || 3000,
    spaces: 1
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

?> ![img](https://cdn.discordapp.com/emojis/829109483526422570.png ':size=13') Synced with **1.1.0** version.