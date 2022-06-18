# $split
Splits a text using a separator.

### Parameters:
| Name          | Type        | Description                              | Optional |
| ------------- | ----------- | ---------------------------------------- | -------- |
| text          | String      | Text to separate using the separator.    | false    |
| separator     | String      | The separator in the text to split.      | false    |

### Example:
```js
$getSplit[3] // this function will get the element from a position in the splits
$split[Hello|bye|ok;|] // this only splits the text
```
