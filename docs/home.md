---
sidebar_position: 1
---

# EASY-API ![img](https://cdn.discordapp.com/emojis/978823080300380170.png ':size=20')
A powerful library to create your own API with ease.

![image](https://camo.githubusercontent.com/1b637c74e2bcd2feb02d7a3ca3d61263bed5d673dfd472ee663157db1d2000f6/68747470733a2f2f692e696d6775722e636f6d2f326b735a5342792e6a7067 ':size=750')
## Install
> `npm i easy-api.ts`

## Features
- 🚀 Optimized and advanced codes and functions.
- 📝 Easy to learn.
- 📚 Constant updates.
- 🔥 Image manipulation.

## Easy setup
```js
const { API } = require("easy-api.ts"); // Use: import { API } from 'easy-api.ts'; for TypeScript.

const api = new API({
    reverse: false
});

api.route({
    url: '/color',
    method: "GET",
    code: `
    $ignore:[Check docs to see how does functions work ;)]
    $if:[$or:[$query:[hex]==null;$isValidHex:[$query:[hex]]==false];
        $response:[
            $setCode:[400]
            $setType:[json]
            $setBody:[{
                "error": "Invalid hex color code provided"
            }]
        ]
        $break $ignore:[IMPORTANT!!]
    ]

    $createCanvas:[
        $setDimentions:[512;512]
        $color:[$query:[hex]]
        $drawRect:[0;0;512;512]
    ]
    $response: [
        $setCode:[200]
        $setType:[canvas]
        $setBody:[$default]
    ]
    `
    `
})

// Lets load the handler...
api.load('./routes').then(() => {
    console.log('Source loaded.')
    api.connect({ port: process.env["PORT"] || 3000 }) // We're connecting to the API when the source is loaded.
})
```

## You need to know...
- You need node **>=14**
- This is a wrapper of express extended with custom functions like canvas.
- This can contain some bugs (report it).
- We'd like you to join our support server.