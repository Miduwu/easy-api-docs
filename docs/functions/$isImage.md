# $isImage
Check if an image ID was loaded.

### Parameters:
| Name          | Type        | Description                             | Optional |
| ------------- | ----------- | --------------------------------------- | -------- |
| id            | String      | The image id you saved with $loadImage. | false    |

### Example:
```js
$loadImage[myId;https://myimage.png] // required to use this function
$loadImage[secondId;hello]
$isImage[myId] // true
$isImage[secondId] // false
```
