# $font
Set the canvas font.

### Parameters:
| Name      | Type        | Description             | Optional    |
| --------- | ----------- | ------------------------| ----------- |
| size      | Number      | The font size (pixels). | false       |
| family    | String      | The font family (name). | true        |
| style     | String      | The font style.         | true        |

?> 💡: **You can use the [`$registerFont`](functions/$registerFont.md) to register custom fonts.**

### Example:
```js
$drawText[...] // This text will be 'bold 30px Arial'
$font[30;Arial;bold]
$createCanvas[512;512]
```
