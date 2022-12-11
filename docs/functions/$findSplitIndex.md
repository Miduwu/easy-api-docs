# $findSplitIndex
Finds a text into a splitted text, if the text is found, returns its index, otherwise returns 0.

### Parameters:
| Name        | Type        | Description                                           | Optional |
| ----------- | ----------- | ----------------------------------------------------- | -------- |
| query       | Any         | The element to search into the splitted text          | false    |

### Usage:
```js
$findSplitIndex[query]
```

### Example:
```js
$split[Hello,Hi,Hola;,]
$findSplitIndex[Hola] //returns 3
```
