# $timeout
Set the max timeout for this route and the JSON response.

### Parameters:
| Name        | Type        | Description                          | Optional |
| ----------- | ----------- | ------------------------------------ | -------- |
| miliseconds | Number      | The max timeout for this route.      | false    |
| code        | String      | The code to execute when timeout.    | false    |

### Example:
```js
// so this will set the max timeout, if there isnt a response after that time then it will reply this
$timeout[$parseTime[30s];
    $send[400;json;{
        "error": "Something internal went wrong"
    }]
]

$send[wrong fields] // this will give an error
```

!> Learn how to use **$parseTime** clicking: [here](functions/$parseTime.md)