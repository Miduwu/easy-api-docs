# $random
Select a random field from provided.

### Parameters:
| Name         | Type           | Description                     | Optional    |
| ------------ | -------------- | ------------------------------- | ----------- |
| choices      | ...String      | The choices to get some random. | false       |

### Example:

```js
$random[one;two;three;four;five;six;seven;eight;nine;ten;eleven] // six
$random[yes;no;maybe] // maybe
```
