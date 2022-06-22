# $font
Set the canvas font.

### Parameters:
| Name      | Type        | Description             | Optional    |
| --------- | ----------- | ------------------------| ----------- |
| size      | Number      | The font size (pixels). | false       |
| family    | String      | The font family (name). | false       |

> 💡: **You can use the [`$registerFont`](functions/$registerFont.md) to register custom fonts.**

### Example:

$drawText[...] // This text will be '30px Arial'
$font[30;Arial]
$createCanvas
