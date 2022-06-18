# $replaceText
Replace something in the text with another thing.

### Parameters:
| Name        | Type        | Description                             | Optional |
| ----------- | ----------- | --------------------------------------- | -------- |
| source      | String      | The source text to do the replacements. | false    |
| text        | String      | The text to replace in the source.      | false    |
| replacement | String      | The replacement to use.                 | false    |

### Example:
```js
$replaceText[Hello xd bye!;xd;haha] // Hello haha bye!
```
