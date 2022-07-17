# $getPath
Get a path parameter.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| param       | String      | The param in the path to get.        | false    |

### Example:
```js
module.exports = {
    path: '/users/:id',
    code: `
    $send[200;json;{
        text: 'The id is $getPath[id]'
    }]
    `
}
```
