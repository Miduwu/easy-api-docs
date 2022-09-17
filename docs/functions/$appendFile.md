# $appendFile
Appends content to the end of the file, if the file exists.

### Parameters:
| Name        | Type        | Description                            | Optional |
| ----------- | ----------- | ---------------------------------------| -------- |
| path        | String      | The file location.                     | false    |
| content     | String      | The new content to add to the file.    | false    |

### Example:
```js
$appendFile[./assets/files/best.txt;Hello] //Writes "Hello" into the "best.txt" file.
```
