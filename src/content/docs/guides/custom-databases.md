---
title: Custom Databases
description: A guide on how to use custom databases.
---

Save, get and delete variables from the database, using the DatabaseManager.
:::note
**[midb](https://npmjs.com/package/midb)** is used as default database.
:::

## Setting a custom database
```js
// /index.js
var { API } = require("easy-api.ts");
var { QuickDB } = require("quick.db");

var api = new API(...);

var db = new QuickDB();
api.db.setDatabase(db);
// api.db is the DatabaseManager.
// api.db.driver is the database itself.

// Connecting the database manually.
api.db.start(/* Method to connect your database without being called. (ex. <CustomDB>.connect) */);

api.connect({ port: 5000 });
```

## Connecting the database
```js
// /index.js
var { API } = require("easy-api.ts");

var api = new API(...);

// Connecting the default database.
api.db.start(api.db.driver.start);

api.connect({ port: 5000 });
```