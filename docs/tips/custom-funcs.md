---
sidebar_position: 4
---

# Custom Functions
## Adding your own function
Add your own function using the `<API>.interpreter` class.
### Example
```js
import { API, Func, EATS_Error } from "easy-api.ts";

const api = new API({...});

api.interpreter.functions.add({
    data: new Func()
    .setName('test'),
    code: async (d, param1) => {
        if(!param1) throw new EATS_Error('Invalid inside provided in: ' + d.func?.name, {});
        return "" // Function return must be a string IN EVERY CASE, if no return needed you can skip this line.
    }
});

api.connect({ port: 3000 });
```

## Using callbacks
The callbacks are callable functions using the EA.TS interpreter, (custom functions)
> Access to the parameters using: `$param[INDEX]`

### Example
```yaml
$function: [throwError;
    $reply:[
        $setCode:[$param[0]]
        $setType:[JSON]
        $setBody:[{
            "status": "$param[0]",
            "error": "$param[1]"
        }]
    ]
    $break
]

$if:[$not:[$query:[hi]];
    $call:[throwError;400;Missing parameter: 'hi']
]

$reply:[
    $setCode:[200]
    $setType:[JSON]
    $setBody:[{}]
]
```