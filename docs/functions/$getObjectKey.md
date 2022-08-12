# $getObjectKey
Get the value of a property.

### Parameters:
| Name      | Type                | Description                            | Optional |
| --------- | ------------------- | -------------------------------------- | -------- |
| keys      | String \| $default  | The name of the value you want to get. | false    |

### Example:
```js
$getObjectKey[text] // return: Hello
$createObject[{
    "text": "Hello"
}] // required to use this function 
```
