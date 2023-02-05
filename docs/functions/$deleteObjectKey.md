# $deleteObjectKey
Delete a key value from a created object.

### Parameters:
| Name               | Type        | Description                                  | Optional |
| ------------------ | ----------- | -------------------------------------------- | -------- |
| variable name      | String      | The variable name where the object is saved. | false    |
| keys               | String      | They keys path.                              | false    |

### Example:
```js
$var[myObject;{}] // This creates an empty object, so: {}
$setObjectKey[myObject;miau;true] // This sets a property to the object, so: { "miau": true }
$deleteObjectKey[myObject;miau] // This deletes the "miau" property so: {}
```
