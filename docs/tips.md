# Tips

Useful tips to improve your coding experience.

## Handler

Load the routes with a handler.

**Example (Setup):**
```js
import { API } from "easy-api.ts";

const api = new API({...})

api.routes.load('./routes').then(() => {
    api.connect() // We're starting the API when the source is ready.
})
```

**Example (route):**
```js
// path: './routes/../../../route.js'
module.exports = {
    path: '/endpoint/name',
    details: {
        description: 'Anything',
        more_X_keys: 'anything'
    },
    code: `
    $send[200;json;{
        success: true
    }]
    `
}
```

-- --

## Using database

Save, get and delete variables from the database.

**Example (Setup):**
```js
import { API } from "easy-api.ts";

const api = new API({
    port: process.env.PORT || 3000,
    database: {
        enabled: true, // VERY IMPORTANT TO ENABLE IT!!
        type: 'replit', // You can use: 'replit' | 'mongo' | 'quickdb' | 'default'
        // mongoUrl: '...'
    }
})

api.connect()
```

**Functions:**

`$deleteVar[var name]` [docs here.](functions/$deleteVar.md)

`$getVar[var name]` [docs here.](functions/$getVar.md)

`$setVar[var name;value]` [docs here.](functions/$setVar.md)

-- --

## Adding your own function

Add your own function using the `<API>.interpreter` class.

**Example:**
```js
import { API, FunctionBuilder, Utils } from "easy-api.ts";

const api = new API({...})

api.interpreter.addFunction({
    data: new FunctionBuilder()
    .setName('test'),
    code: async d => {
        await d.func.resolve_fields(d) // required to load overloads
        if(!d.func.inside) return Utils.Warn('Invalid inside provided in:', d.func)
        return {
            code: d.code.replace(d.func.id, `${d.func.inside} its the inside!`)
        }
    }
})

api.connect()
```

-- --

## Using callbacks

The callbacks are callable functions using the EA.TS interpreter, (custom functions)

?> Access to the parameters using: `%PARAM_index%`

**Example:**
```
$createCallback[throwError;
    $send[%PARAM_1%;json;
        { "status": %PARAM_1%, "error": "%PARAM_2%" }
    ]
    $break
]

$if[$getQuery[hi]==undefined;$callback[throwError;400;Missing parameter: 'hi']]

$send[200;json;{}]
```

## Reverse reading
Now ea.ts reads from top to bottom, but also can read from bottom to top, to switch between read modes, use the constructor options object.

**Example:**
```js
import { API, FunctionBuilder, Utils } from "easy-api.ts";

const api = new API({
    port: process.env['port'],
    spaces: 2,
    reverseReading: true
});
```