# $drawRect
Draws a rectangle in a canvas.

### Parameters:
| Name     | Type      | Description            | Optional |
| -------- | --------- | ---------------------- | -------- |
| id       | String    | The generated rectangle id.   | false    |
| x        | Number    | X rectangle position.      | false    |
| y        | Number    | Y rectangle position.      | false    |
| width    | Number    | Rectangle width.           | false    |
| height   | Number    | Rectangle height.          | false    |

> **You need to load an image first using [`$loadImage`](functions/$loadImage)**

### Example:

```js
$drawRect[myCoolId;0;0;512;512] // Draws the rectangle 
$loadImage[myCoolId;https://i.imgur.com/upR5GuS.png] // required to use this function
$createCanvas[512;512] // required to use this function
```
