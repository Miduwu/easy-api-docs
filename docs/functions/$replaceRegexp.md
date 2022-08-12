# $replaceRegexp
Replace something using RegExp.

### Parameters:
| Name          | Type        | Description                        | Optional |
| ------------- | ----------- | ---------------------------------- | -------- |
| text          | String      | The number to fix, ex: 4.124212    | false    |
| regexp        | RegExp      | The regexp without the flag.       | false    |
| flag          | RegExpFlag | The regexp flag.                    | false    |
| replacement   | String      | Anything to replace that regexp.   | false    |

### Example:
```js
$replaceRegexp[$get[text];/[^a-zA-Z0-9]/;g;] // Hello  what are u doing
$var[text;Hello $ #what are u doing!]
```
