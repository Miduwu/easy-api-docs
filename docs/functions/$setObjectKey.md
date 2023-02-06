# $setObjectKey
Set a key value to the created object.

### Parameters:
| Name               | Type   | Description                                  | Optional |
| ------------------ | ------ | -------------------------------------------- | -------- |
| variable name      | String | The variable name where the object is saved. | false    |
| keys               | String | The property name.                           | false    | 
| value              | Any    | The value of this property.                  | false    |

### Example:
```js
$var[eats;{ "interpreter": "empy" }] // Required to use this function.
$setObjectKey[eats;routes;ola] // This creates a new property, so: { "interpreter": "empy", "routes": "ola" }
```
