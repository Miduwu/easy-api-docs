# $request

 Make an http request.

### Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ----------- | -------- |
|  url | String | The link to make the request. | false |
| config | Record<string, any> | The config object (see below). | true |
| headers | ...String:string | The headers fields. | true |

### Config prototype:
```json
{
    method: string, // the request method (see axios docs)
    logError?: boolean, // if some errors happens it will log to the console
    data?: any // the body (like for http POST requests)
}
```

### Example:

```js
// GET method:
$request[https://api.miduwu.ga/json/calendar]

// POST method:
$request[https://anylink;{
    method: 'POST',
    data: 'anything to post, this also can be a JSON.'
}]

// POST method (with headers):
$request[https://anylink;{
    method: 'POST',
    data: 'anything'
};headerName:headerValue;headerName2:headerValue2]
```
?> 💡: You can use [**`$getData`**](/functions/$getData.md) function to get the data from this request.

#### TIP: You can send logs with Discord Webhooks:
```
$request[https://discord.com/api/v9/webhooks/:id/:token;{
    method: 'POST',
    data: { content: 'New request!', embeds: [{title: 'A new request!', description: 'In /endpoint'}] },
    logError: true
}]
```
