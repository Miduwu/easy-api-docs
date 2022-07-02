# $tryIf
Try an internal code if a condition is true.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| condition   | String      | The condition to check.              | false    |
| code        | String      | The internal code.                   | false    |

> **INTERNAL CODE SYNTAX:** `@function(inside;more;splits)`

> **EXAMPLE:** `@send(200;json;{})`

### Example:
```js
$tryIf[$getQuery[image]==undefined;
    @break
    @ignore(Now we're breaking it to stop executing the above code (outside tryIf).)
    @log(There is not provided image.)
    @send(400;json;{
        error: 'Missing image.'
    })
]
```
