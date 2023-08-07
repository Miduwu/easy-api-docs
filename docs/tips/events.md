---
sidebar_position: 2
---

# Using Events
Now API class can emit some extra events.
## Event Names
- error
- ready
- request

## Example
```js
import { API } from "easy-api.ts";

const api = new API({...});

// When the API is ready.
api.on("ready", () => console.log("API ready!"));

// When the API faces errors.
api.on("error", (e) => console.log("Something internal went wrong!\n", e));

// When a request is received
api.on("request", (r) => console.log("New request!\n", r));
```

## Using Handler
By using events with handler, you can execute ea.ts code for each emitted event.
```js
module.exports["event"] = {
    name: "ready", // Event name,
    code: `
        $log: [API READY!]
    `
};
```