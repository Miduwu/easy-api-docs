# $createObject
Create an object to be edited later

### Parameters:
| Name     | Type      | Description                  | Optional |
| -------- | --------- | ---------------------------- | -------- |
| object   | Object    | Optional object to edit      | true    |

### Example:
```js
$createObject[{
    "hello": {
        "a": "b"
    }
}]
$setObjectKey[hello.a;c] // Now we can edit it


```
