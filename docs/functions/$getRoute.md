# $getRoute
Get a route property

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| keys        | String      | The property from route to get.      | false    |

**Endpoint template example:**
```js
module.exports = {
    path: '/myendpoint',
    details: {
        description: 'This is my endpoint description lol',
        usage: '?text=String'
    },
    code: `...`
}
```

### Example:
```js
$getRoute[/myendpoint;path] // /myendpoint
$getRoute[/myendpoint;details.description] // This is my endpoint description lol
$getRoute[/myendpoint;details.usage] // ?text=String
```
