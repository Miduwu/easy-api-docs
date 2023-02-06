# $arrayPush
Pushes a element to the provided array.

### Parameters:
| Name               | Type                | Description                                  | Optional |
| ------------------ | ------------------- | -------------------------------------------- | -------- |
| variable name      | String              | The variable name where the array is saved.  | false    |
| element            | String              | Element to push into the array.              | false    |
### Example
```js
$var[arrayLoaded;$split[a|b|c;|]] // "["a", "b", "c"]"
$arrayPush[arrayLoaded;waos] // It will push "waos", so: "["a", "b", "c", "waos"]"
```