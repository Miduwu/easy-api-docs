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
$send[$getData[data.translated]] // returns: Bonjour le monde
$request[https://api.miduwu.ga/json/translate?source=auto&target=fr&text=Hello+world]
```

<br/>

__ __
<br/>
<br/>

  The link returned a json
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
  So you have to choose an object and then the value, for example: 
```js
data.source // returns: en
status // returns: 200
```
