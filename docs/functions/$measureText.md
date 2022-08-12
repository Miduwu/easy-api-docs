# $measureText
Measure the text with the actual canvas context settings.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| text        | String      | The text to measure.  | false    |
| type        | String      | The type to get (width/height/object).   | false    |

### Example:
```js
$drawText[Hello;...]
$font[50;Arial]
$createCanvas[$get[width];$get[height]] // now we're creating a corresponding canvas with the text size

$let[height;$measureText[Hello;height]]
$let[width;$measureText[Hello;width]]
$font[50;Arial] // Setting up the font size to measure it
$createCanvas[10;10] // not an important canvas, we're creating one to set up the text settings.
```

**If the type is `object` then it will return something like:**
```json
{
    "width": number,
    "height": "number
}
```