# $deleteObjectKey
Delete a key value from a created object.

### Parameters:
| Name      | Type        | Description     | Optional |
| --------- | ----------- | --------------- | -------- |
| keys      | String      | They keys path. | false |

### Example:
```js
$createObject[{
    "hello": {
        "a": {
            "b": true,
            "c": false
        }
    }
}]
$deleteObjectKey[hello.a.b] // will delete that key from the object, Final: { hello: { "a": { "c": false } } }
```
