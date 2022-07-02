# $root
Join a root into the main runner.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| ...parts    | ...String   | The parts of a root.                 | false    |

### Example:
```js
// If the process cwd is '/homme/runner/'
$root[assets;backgrounds;file.png] // will return: '/home/runner/assets/backgrounds/file.png'
```
