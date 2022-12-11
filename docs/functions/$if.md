# $if
Executes a code something if the condition is true or false.

### Parameters:
| Name         | Type    | Description                                    | Optional |
| ------------ | ------- | ---------------------------------------------- | -------- |
| condition    | String  | The condition (true) will execute.             | false    |
| then code    | String  | The code to execute when condition is true.    | false    |
| else code    | String  | The code to execute when condition is false.   | false    |

### Example:
```js
// http://localhost:port/route

$if[$getQuery[text]==undefined;
    $send[400;json;{
        "error": "Missing parameters"
    }]
;
    $send[200;json;{
        "success": true
    }]
]
```
