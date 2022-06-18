# $loadImage
Loads an image and save id as an ID.

### Parameters:
| Name          | Type        | Description                           | Optional |
| ------------- | ----------- | ------------------------------------- | -------- |
| id            | String      | The image ID.                         | false    |
| type          | String      | Type (path \| link)                    | false    |
| body          | String      | The image URL or path depending type. | false    |

### Example:
```js
$loadImage[myPathImg;path;./image.png] // for local images.
$loadImage[myUrlImg;link;https://...] // for remote images.
```
