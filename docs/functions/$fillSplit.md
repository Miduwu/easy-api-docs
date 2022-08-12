# $fillSplit
Replace a split element with something.
### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| element     | String      | Element of the split.        | false    |
| something   | String      | Something to replace the element.         | true    |

### Example:
```js
$joinSplits[|] // hello|yes|ok
$fillSplit[bye;yes]
$textSplit[hello|bye|ok;|]
```

