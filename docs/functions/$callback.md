# $callback
Executes a callback created previously.

### Parameters:
| Name      | Type      | Description            | Optional |
| --------- | --------- | ---------------------- | -------- |
| id        | String    | The callback name.     | false    |
| ...params | Any       | Callback parameters.   | false    |

### Examples:
```js
$createCallback[mayus;$uppercase[%PARAM_1%]] // required to use this function.
$callback[mayus;test] // Returns: TEST
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
