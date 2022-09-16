# $writeFile
Replaces any content the provided content in the provided file, if the file exists.

### Parameters:
| Name        | Type        | Description                                    | Optional |
| ----------- | ----------- | -----------------------------------------------| -------- |
| path        | String      | The file location.                             | false    |
| content     | String      | The content to replace into the file.          | false    |

### Example:
```js
$writeFile[./assets/files/best.txt;Viva México] //Replaces "Hello" with "Viva México".
```