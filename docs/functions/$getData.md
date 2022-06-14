# $getData
Get a property value from the json request object (if any).

### Parameters:
| Name      | Type                | Description                        |
| --------- | ------------------- | ---------------------------------- |
| property | property              | The property from the object to get the value. |

### Example:
```js
$getData[data.something] 
$request[...] // required to use this function

// Example code:
$send[$getData[data.translated]] // returns: Salut monde 
$request[https://api.miduwu.ga/json/translate?source=auto&target=fr&text=Hello+world]
```

__ __

__The link returns:__
```json
{
 "status": 200,
 "data": {
  "translated": "Bonjour le monde",
  "source": "en",
  "target": "fr"
 },
 "success": true
}
```

__ __

So you have to choose an object and then the value, for example: 
```js
data.source // returns: en
status // returns: 200
```
