# $condition
Checks a condition, it will return 'true' or 'false'


### Parameters:
| Name | Type | Description |
| ---- | ---- | ------------|
| condition | String | The condition to check|

### Example:

```js
$condition[1==1] // true
$condition[a!=b] // true
$condition[3>=5] // false
$condition[a==b||c==c] // true
$condition[2<3&&3==3] // true
```
