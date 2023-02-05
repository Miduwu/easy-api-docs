# $split
Splits a text using a separator.

### Parameters:
| Name          | Type        | Description                              | Optional |
| ------------- | ----------- | ---------------------------------------- | -------- |
| text          | String      | Text to separate using the separator.    | false    |
| separator     | String      | The separator in the text to split.      | false    |

### Example:
```js
$split[Hello|bye|ok;|] // Returns: '["Hello", "bye", "ok"]' (ArrayLike)
```
