# $parseTime
Parse the provided time, if type is number it will return string.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| time        | String \| Number      | The miliseconds or text to parse.  | false    |
| long       | Boolean      | If the returned time will be long (only for text)   | true    |

### Example:
```js
$parseTime[2000;true] // 2 seconds
$parseTime[2000] // 2s

$parseTime[2s] // 2000
```
