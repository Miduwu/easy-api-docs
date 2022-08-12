# $addEffect
Apply an effect to the canvas context.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| effect      | String      | The effect name to apply.            | false    |
| number      | Number      | How many pixels/percentage.          | false    |

### Effects:
- **`blur`** Applies a Gaussian blur to the drawing. A value of `0` leaves the input unchanged.
- **`brightness`** Applies a linear multiplier to the drawing, making it appear brighter or darker. A value of `100` leaves the input unchanged.
- **`contrast`** Adjusts the contrast of the drawing. A value of `100` leaves the drawing unchanged.
- **`grayscale`** Converts the drawing to grayscale. A value of `100` is completely grayscale. A value of `0` leaves the drawing unchanged.
- **`invert`** Inverts the drawing. A value of `100` means complete inversion. A value of `0` leaves the drawing unchanged.
- **`saturate`** Saturates the drawing. A value of `0` means completely un-saturated. A value of `100` leaves the drawing unchanged.
- **`sepia`** Converts the drawing to sepia. A value of `100` means completely sepia. A value of `0` leaves the drawing unchanged.

?> [`CanvasRenderingContext2D/filter`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)

?> 💡: Remove the effect using [`$removeEffect`](functions/$removeEffect.md)

### Example:
```js
...
$addEffect[grayscale;50]
$createCanvas[512;512]
```
