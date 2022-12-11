# $measureText
Measure the text with the actual canvas context settings.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| text        | String      | The text to measure.  | false    |
| type        | String      | The type to get (width/height/object).   | false    |

### Example:
```js
$createCanvas[10;10] // not an important canvas, we're creating one to set up the text settings.
$font[50;Arial] // Setting up the font size to measure it
$var[width;$measureText[Hello;width]]
$var[height;$measureText[Hello;height]]

$createCanvas[$get[width];$get[height]] // now we're creating a corresponding canvas with the text size
$font[50;Arial]
$drawText[Hello;...]
```

**If the type is `object` then it will return something like:**
```json
{
    "width": number,
    "height": "number
}
```