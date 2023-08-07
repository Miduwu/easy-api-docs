---
sidebar_position: 3
---

# Using a custom database
Save, get and delete variables from the database, using the DatabaseManager.

:::info

[midb](https://npmjs.com/package/midb) is used as default database.

:::

```js
const { API } = require("easy-api.ts");
const { QuickDB } = require("quick.db");

const api = new API(...);
api.db["db"] = new QuickDB();

api.route({
    url: "/data",
    method: "GET",
    code: `
        // Function usage can change depending of the usage of custom database methods.
        $setVar: [user;CGX]
        $reply: [
            $setCode: [200]
            $setType: [JSON]
            $setBody: [{
                user: "$getVar:[user]"
            }]
        ]
    `
});

api.connect({ port: 5000 });
```