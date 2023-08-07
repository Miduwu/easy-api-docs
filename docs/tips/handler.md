---
sidebar_position: 1
---

# Handler
Load the routes with a handler.
## Example (Setup)
```js
import { API } from "easy-api.ts";

const api = new API({...});

api.load("./routes").then(() => {
    api.connect({ port: 3000 }); // We're starting the API when the source is ready.
});
```
## Example (Route)
```js
// path: './routes/../../../route.js'
module.exports["route"] = {
    url: '/endpoint/name',
    method: "GET",
    code: `
        $reply:[
            $setCode:[200]
            $setType:[JSON]
            $setBody:[{
                "success": true
            }]
        ]
    `
}
```