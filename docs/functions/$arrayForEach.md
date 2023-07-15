# $arrayForEach
Executed a code field for each array element.

### Parameters:
| Name           | Type                | Description                                  | Optional |
| -------------- | ------------------- | -------------------------------------------- | -------- |
| variable name  | String              | The variable name where the array is saved.  | false    |
| code           | String              | The code to execute.                         | false    |

### Example:
```js
$var[splits;$split[BANANA,APPLE,PEAR,WATERMELON,MANGO;,]]
$arrayForEach[splits;
    $log[%ITEM%] // This will log each element.
]
```

!> Use "%ITEM% to get the array element.