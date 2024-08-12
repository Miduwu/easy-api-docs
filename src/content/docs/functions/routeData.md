---
title: $routeData
description: Returns a route additional property.
---

Returns a route additional property.
## Parameters
|   Name   |                       Description                        | Enforced | Default Value |
|----------|----------------------------------------------------------|----------|---------------|
| Route    | The name of the route to extract information from.       | Yes      | None          |
| Property | The name of the property to be extracted from the route. | No       | %default%     |
## Example
```
$routeData[route;property?]
```