# $isImage
Check if an image ID was loaded.

### Parameters:
| Name          | Type        | Description                             | Optional |
| ------------- | ----------- | --------------------------------------- | -------- |
| id            | String      | The image id you saved with $loadImage. | false    |

### Example:
```js
$isImage[secondId] // false
$isImage[myId] // true
$loadImage[secondId;hello]
$loadImage[myId;https://myimage.png] // required to use this function
```
