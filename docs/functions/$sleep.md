# $sleep
Await a process.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| miliseconds | Number      | The time to wait                 .   | false    |

### Example:
```js
$log[This will be logged after 20 seconds L]
$sleep[$math[20 * 1000]]
$log[ok starting]
```
