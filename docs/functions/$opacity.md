# $opacity
Change the canvas context opacity.

### Parameters:
| Name     | Type      | Description              | Optional |
| -------- | --------- | ------------------------ | -------- |
| opacity  | Number    | The new context opacity. | false    |

?> **The opacity must be between "1" and "100"**

### Example:

```js
$createCanvas[512;512] // required to use this function
$loadImage[image;https://i.imgur.com/upR5GuS.png]
$opacity[50]
$drawImage[image;0;0;512;512] // this image will be with 50% opacity.
```
