# $drawImage
Draws an image in a canvas.

### Parameters:
| Name     | Type      | Description            | Optional |
| -------- | --------- | ---------------------- | -------- |
| id       | String    | The loaded image id.   | false    |
| x        | Number    | X image position.      | false    |
| y        | Number    | Y image position.      | false    |
| width    | Number    | Image width.           | false    |
| height   | Number    | Image height.          | false    |

?> **You need to load an image first using [`$loadImage`](functions/$loadImage)**

### Example:

```js
$drawImage[myCoolId;0;0;512;512]
$loadImage[myCoolId;https://i.imgur.com/upR5GuS.png] // required to use this function
$createCanvas[512;512] // required to use this function
```
