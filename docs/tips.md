# Tips

Useful tips to improve your coding experience.

## Handler

Load the routes with a handler.

**Example:**
```js
import { API } from "easy-api.ts";

const api = new API({...})

api.routes.load('./routes')

api.connect()
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
