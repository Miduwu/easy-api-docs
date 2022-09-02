# $escape
Escape a text.

> **This function was made to prevent bugs**

### Parameters:
| Name          | Type        | Description                         | Optional |
| ------------- | ----------- | ----------------------------------- | -------- |
| text          | String      | The text to escape.                 | false    |

### Example:
```js
$condition[$escape[==]==$escape[==]] // => '@equal@equal==@equal@equal' (true)
$condition[======] // This can't be used.

$condition[$escape[<:v]==$escape[<;v]] // => '@lower@colonv==@lower@semiv' (true)
$condition[<:v==<;v] // This can't be used.
```

?> Check escapers in: **[escapers](escapers.md)**
