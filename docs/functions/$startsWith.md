# $startsWith
Checks if a string starts with the provided match or not.

### Parameters:
| Name          | Type        | Description                        | Optional |
| ------------- | ----------- | ---------------------------------- | -------- |
| text          | String      | The string to check.               | false    |
| match         | String      | The text to match.                 | false    |

### Example:
```js
$var[text;Hello $ #what are u doing!]
$startsWith[$get[text];Hello] // returns: true
```
