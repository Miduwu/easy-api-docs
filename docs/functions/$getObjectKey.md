# $getObjectKey
Get the value of a property.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the object is saved. | false    |
| keys               | String \| $default  | The name of the value you want to get.       | false    |

### Example:
```js
$var[elo;{ "virus": true }] // Required to use this function.
$getObjectKey[elo;virus] // Returns true.
```
