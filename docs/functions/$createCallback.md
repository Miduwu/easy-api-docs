# $createCallback
Creates a callback.

### Parameters:
| Name      | Type      | Description            | Optional |
| --------- | --------- | ---------------------- | -------- |
| id        | String    | The callback name.     | false    |
| code      | Code      | The code to execute.   | false    |

### Examples:
```js
$createCallback[minus;$lowercase[%PARAM_1%]]
$callback[minus;TEST] // Returns: test
```

```js
$createCallback[error;
    $send[%PARAM_1%;json;{
        "error": "%PARAM_2%"
    }]
    $break
] // required to use this function.

$if[$getQuery[test]==undefined;$callback[error;400;Missing parameter: 'test']]

$send[200;json;{
    "success": true
}]
```

?> To access the parameters use: `%PARAM_INDEX%`