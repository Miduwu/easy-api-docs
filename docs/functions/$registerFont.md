# $registerFont
Register a custom font from a path.

### Parameters:
| Name         | Type     | Description                        | Optional    |
| ------------ | -------- | ---------------------------------- | ----------- |
| path         | String   | The font file location.            | false       |
| family       | String   | The font family to register (name) | false       |

!> **Allowed font formats: ".ttf", ".otf"**

### Example:

```js
$drawText[...]
$font[30;Any name] // Now we can use it
$createCanvas[512;512]
$registerFont[./assets/myfont.ttf;Any name] // We register it with a custon name
```
