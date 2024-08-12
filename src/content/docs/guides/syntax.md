---
title: Syntax style
description: A brief guide about the syntax styles in easy-api.ts
---

Since **3.0.0**, there is an option to switch between syntax
styles in easy-api.ts

## Switching styles
You can use both syntaxes in each code, but you can set a
default one in API constructor options under `dots` property.
```js
// /index.js
var api = new API({
    dots: Boolean // true for "dotted" style, false for old.
});
```

## Styles
### Dotted
You can set this style by setting `true` the dots property.
```
$function: [arg;arg;...]

$function:[arg;arg;...]

$function: [
    arg;arg;...
]

$function:
[
    arg;arg;...
]
```

### Old
You can set this style by setting `false` the dots property.
```
$function[arg;arg;...]

$function[
    arg;arg;...
]
```