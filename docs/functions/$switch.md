# $switch
Look for a non-negative option.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| ...choices  | ...Any      | The choices to look for.             | false    |

### Usage:
```js
$switch[...choices]
```

### Example:
```js
$switch[undefined;undefined;hi] //Returns: hi
```

?> **Note:** If all options are undefined, then it will return undefined.
