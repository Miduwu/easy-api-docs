# $joinSplits
Get the splits elements in a separator.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| separator   | String      | Separator to join the splits.        | false    |

### Example:
```js
$textSplit[hello|bye|ok;|]
$joinSplits[ - ] // hello - bye - ok
```
