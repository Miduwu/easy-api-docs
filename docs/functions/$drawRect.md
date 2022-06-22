# $drawRect
Draws a rectangle in a canvas.

### Parameters:
| Name     | Type      | Description            | Optional |
| -------- | --------- | ---------------------- | -------- |
| x        | Number    | X rectangle position.      | false    |
| y        | Number    | Y rectangle position.      | false    |
| width    | Number    | Rectangle width.           | false    |
| height   | Number    | Rectangle height.          | false    |
| radius   | Number    | An optional circle radius. | true     |

### Example:

\`\`\`js

$drawRect[x;y;width;height;radius?]

// Example with the options:
$drawRect[0;0;512;512] // Draws the rectangle 
$createCanvas[512;512] // required to use this function
\`\`\`
