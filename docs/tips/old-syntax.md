sidebar_position: 7
---

# Old Syntax
With the new interpreter, you can use the new or old syntax, switchable in API constructor options.

If this option isn't specified, the new syntax is used by default.

## Enabling old syntax
```js
const api = new API({
    dots: false
});

api.route({
    url: "/test",
    method: "GET",
    code: `
        $log[HELLO!]
    `
});
```

## Disabling old syntax
If no specified, new syntax is used by default.
```js
const api = new API({
    dots: true
});

api.route({
    url: "/test",
    method: "GET",
    code: `
        $log:
        [HELLO!]
    `
});
```