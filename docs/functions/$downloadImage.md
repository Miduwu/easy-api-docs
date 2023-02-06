# $color
Downloads a image into your API files.

### Parameters:
| Name        | Type        | Description                                                  | Optional |
| ----------- | ----------- | ------------------------------------------------------------ | -------- |
| ID          | String      | The image id you saved with $loadImage.                      | false    |
| Path        | String      | The path where the image will be saved with file extension.  | false    |

### Example:
```js
$loadImage[image;link;$getQuery[avatar]]
$downloadImage[image;$root[assets;file.png]]
```
