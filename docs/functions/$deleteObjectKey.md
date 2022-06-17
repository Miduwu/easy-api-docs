# $deleteObjectKey
Delete a key value from a created object.

### Parameters:
| Name      | Type                | Description                        | Optional |
| --------- | ------------------- | ---------------------------------- | -------- |
| name | String              | Name of the key value you want to delete . | false |

### Example:
```js
$deleteObjectKey[hello] // will delete that key from the object, Final: { start: 'hiii' }
$setObjectKey[hello;hi]
$setObjectKey[start;hiii]
$createObject
```
