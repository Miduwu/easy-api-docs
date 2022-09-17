# $fileSize
Returns the file size, if the file exists.

### Parameters:
| Name        | Type        | Description                                    | Optional |
| ----------- | ----------- | -----------------------------------------------| -------- |
| path        | String      | The file location.                             | false    |
| decimals    | Number      | How many decimals for the file size number.    | true     |

### Example:
```js
$fileSize[./assets/files/best.txt;2] //Returns: 46.04
```