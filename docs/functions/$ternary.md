# $ternary
Checks a condition then return a result depending the fields provided.

### Parameters:
| Name        | Type        | Description                                   | Optional |
| ----------- | ----------- | --------------------------------------------- | -------- |
| condition   | String      | The condition to check.                       | false    |
| ifTrue      | Any         | Anything to return if the condition is true.  | false    |
| ifFalse     | Any         | Anything to return if the condition is false. | false    |

### Example:
```js
$ternary[$getQuery[image]==undefined;No provided.;Provided.]

$var[a;true]
$var[b;yes]

$ternary[$get[a]==true||$get[a]==false;true;false] // true, it is boolean!
$ternary[$get[b]==true||$get[b]==false;true;false] // false, it is not boolean!
```
