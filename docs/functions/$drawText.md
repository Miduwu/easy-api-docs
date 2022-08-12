# $drawText
Draws a text box in the canvas.

### Parameters:
| Name     | Type      | Description                                | Optional |
| -------- | --------- | ------------------------------------------ | -------- |
| x        | Number    | X text  position.                          | false    |
| y        | Number    | Y text  position.                          | false    |
| width    | Number    | Text width.                                | false    |
| height   | Number    | Text height.                               | false    |
| align    | String    | Text align (right\|left\|center).          | true     |
| vAlign   | String    | Text vertical align (top\|bottom\|middle). | true     |

### Example:

```js
$drawText[Hello this is a text;20;20;450;400] // This will draw that text.
$createCanvas[512;512] // required to use this function
```

**Explanation:**

![image](https://i.imgur.com/qV2x2zV.jpg ':size=650x500')
