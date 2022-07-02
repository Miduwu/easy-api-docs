# $slice
Get a part from a text.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| text        | String      | The source text.                     | false    |
| from        | Number      | The number to start.                 | false    |
| to          | Number      | The number to finish.                | true     |

### Example:
```js
$slice[Hello;2] // ello
$slice[Hello;3;4] // ll
```
