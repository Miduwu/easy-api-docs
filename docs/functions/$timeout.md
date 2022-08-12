# $timeout
Set the max timeout for this route and the JSON response.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| miliseconds | Number      | The max timeout for this route.      | false    |
| status      | Number      | The status for the response when timeout.   | false    |
| response    | Record<string, any> | The JSON response to send when timeout. | false |

### Example:
```js
$send[wrong fields] // this will give an error

// so this will set the max timeout, if there isnt a response after that time then it will reply this
$timeout[$parseTime[30s];500;{
    "error": "Something internal went wrong"
}]
```

!> Learn how to use **$parseTime** clicking: [here](functions/$parseTime.md)