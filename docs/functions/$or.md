# $or
Checks whether at least one conditions are met, returns true or false.

### Parameters:
| Name        | Type        | Description                            | Optional |
| ----------- | ----------- | ---------------------------------------| -------- |
| conditions  | Any         | Conditions to check.                   | false    |

### Example:
```js
$or[1==0;2==1;3==3] // returns: true
```