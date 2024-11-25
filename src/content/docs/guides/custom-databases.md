---
title: Custom Databases
description: A guide on how to use custom databases.
---

Save, get and delete variables from the database, using the DatabaseManager.
:::note
**[midb](https://npmjs.com/package/midb)** is used as default database.
:::

## Creating a custom database
To create a custom database, you must require and extend the `BaseDatabase` class.
Here you can look an example.
```js
const { Database, Table, YAMLDriver } = require('st.db')
const { BaseDatabase } = require('../lib/main')

/**
 * @class CustomDatabase
 * @template {Database} T
 * @template {Record<'name' | 'value' | 'table', string>} Args
 * @extends {BaseDatabase<T, Args>}
 */
class CustomDatabase extends BaseDatabase {
    /**
     * @type {Database}
     */
    driver = new Database({
        driver: new YAMLDriver(__dirname + '/database.yaml')
    })

    /**
     * @type {Map<string, Table>}
     */
    tables = new Map()

    /**
     * Creates a new instance of the `CustomDatabase` class.
     * @param {string[] | undefined} tables - The tables to be initialized.
     */
    constructor(tables = ['main']) {
        super()
        
        if (!tables.includes('main')) tables.unshift('main');
        tables.forEach((table) => this.tables.set(table, new Table(table, this.driver)))
    }

    /**
     * @template {void} Return - The value to return.
     * @param {Args} args - Delete value args.
     * @returns {Promise<Return>}
     */
    async deleteValue({ name }) {
        const fetchedTable = this.tables.get(table ?? 'main')
        await fetchedTable.delete(name)
    }

    /**
     * @template {ReturnType<Database['get']>} Return - The value to return.
     * @param {Args} args - Get value args.
     * @returns {Promise<Return>}
     */
    async getValue({ name, table }) {
        const fetchedTable = this.tables.get(table ?? 'main')
        return await fetchedTable.get(name)
    }

    /**
     * @template {boolean} Return - The value to return.
     * @param {Args} args - Delete value args.
     * @returns {Promise<Return>}
     */
    async hasValue({ name, table }) {
        const fetchedTable = this.tables.get(table ?? 'main')
        return await fetchedTable.has(name)
    }

    /**
     * @template {void} Return - The value to return.
     * @param {Args} args - Set value args.
     * @returns {Promise<Return>}
     */
    async setValue({ name, value, table }) {
        const fetchedTable = this.tables.get(table ?? 'main')
        await fetchedTable.set(name, value)
    }

    /**
     * In this case, do nothing as this lib does not require connection or something.
     * @returns {void}
     */
    start() {
        return
    }
}

module.exports = CustomDatabase
```

## Attaching the database
You simply must fill the database options in API constructor.
```js
var CustomDatabase = require('./path/to/my/custom/database/class')
var { APIFunction, API } = require('easy-api.ts')

var api = new API({
    dots: false,
    reverse: false,
    databaseOptions: {
        customOptions: ['main'], // Custom options for your custom database constructor.
        disableDefault: false, // Whether disable the native database (will be overrided anyway.)
        overrideDatabaseWith: () => CustomDatabase
        // This option is important, this MUST be a function that returns
        // the uninstanced class of your custom database.
    }
})

// Use api.db.start() in case your database needs it.
```