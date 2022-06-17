# $condition
Check a condition, it will return 'true' if the condition is true
or 'false' if the condition is false


### Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ------------| --------- |
| condition | String | The condition to check| false |

### Example:

```js
$condition[x==1] // Returns: true
$condition[x==2] // Returns: false

/* If x is equal to 1, it returns true and if 1 is different from x, it returns false. */


// Other examples:
$condition[1==1] // Returns: true
$condition[a!=b] // Returns: true
$condition[3>=5] // Returns: false
$condition[a==b||c==c] // Returns: true
$condition[2<3&&3==3] // Returns: true
```

### Conditionals:
```js
== // Equal
!= // Different
> // Higher
< // Lower
>= // Higher or equal
<= // Lower or equal
&& // And
|| // Or
```
