# EASY-API ![img](https://cdn.discordapp.com/emojis/978823080300380170.png ':size=20')
A powerful library to create your own API with ease.

![image](https://camo.githubusercontent.com/1b637c74e2bcd2feb02d7a3ca3d61263bed5d673dfd472ee663157db1d2000f6/68747470733a2f2f692e696d6775722e636f6d2f326b735a5342792e6a7067 ':size=750')

## Easy setup

```js
import { API } from "easy-api.ts"; // use 'const { API } = require("easy-api.ts")' for JavaScript

const api = new API({
    port: process.env.PORT || 3000,
    spaces: 1,
    reverseReading: false
})

api.routes.add({
    path: '/color',
    code: `
    $ignore[Check docs to see how does functions work ;)]
    $if[$getQuery[hex]==undefined||$isValidHex[$getQuery[hex]]==false;
        $send[400;json;{
            "error": "Invalid hex color code provided"
        }]
        $break $ignore[IMPORTANT!!]
    ]

    $createCanvas[512;512]
    $color[$getQuery[hex]]
    $drawRect[0;0;512;512]
    $send[200;canvas;$default]
    `
    `
})

// Lets load the handler...
api.routes.load('./routes').then(() => {
    console.log('Source loaded.')
    api.connect() // We're connecting to the API when the source is loaded.
})
```

## You need to know...
- You need node **>=14**
- This is a wrapper of express extended with custom functions like canvas.
- This can contain some bugs (report it).
- We'd like you to join our support server.

?> ![img](https://cdn.discordapp.com/emojis/829109483526422570.png ':size=13') Synced with **2.0.0** version.
