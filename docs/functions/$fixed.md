# $fixed
Fix a number decimals.

### Parameters:
| Name          | Type        | Description                         | Optional |
| ------------- | ----------- | ----------------------------------- | -------- |
| number        | Number      | The number to fix, ex: 4.124212     | false    |
| fix           | Number      | Decimals amount. ex: 2              | true     |

### Example:
```js
$fixed[12.214;1] // 12.2
$fixed[12.44444] // 12
```
