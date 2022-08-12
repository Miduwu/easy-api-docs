# $deleteObjectKey
Delete a key value from a created object.

### Parameters:
| Name      | Type        | Description     | Optional |
| --------- | ----------- | --------------- | -------- |
| keys      | String      | They keys path. | false |

### Example:
```js
$deleteObjectKey[hello.a.b] // will delete that key from the object, Final: { hello: { "a": { "c": false } } }
$createObject[{
    "hello": {
        "a": {
            "b": true,
            "c": false
        }
    }
}]
```
