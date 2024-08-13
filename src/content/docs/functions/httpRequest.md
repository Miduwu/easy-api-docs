---
title: $httpRequest
description: Makes an HTTP request.
---

Makes an HTTP request.
## Parameters
|     Name      |            Description             | Enforced | Default Value |
|---------------|------------------------------------|----------|---------------|
| URL           | Target URL to make the request to. | Yes      | None          |
| Configuration | Request typedConfig body.          | No       | {}            |
## Example
```eats
$httpRequest[url;configuration?]
```