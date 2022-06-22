# Tips

Useful tips to improve your coding experience.

## Handler

Load the routes with a handler.

**Example (Setup):**
```js
import { API } from "easy-api.ts";

const api = new API({...})

api.routes.load('./routes')

api.connect()
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
        const unpacked = d.unpack(d)
        if(!unpacked.inside) return Utils.Warn('Invalid inside provided in:', d.func)
        return {
            code: d.code.resolve(`${d.func}[${unpacked.inside}]`, unpacked.inside + '< was a test.')
        }
    }
})

api.connect()
```
