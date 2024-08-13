---
title: $deleteObjectKey
description: Deletes a property from an object.
---

Deletes a property from an object.
## Parameters
| Name |                     Description                     | Enforced | Default Value |
|------|-----------------------------------------------------|----------|---------------|
| Name | The name of the object to delete the property from. | Yes      | None          |
| Key  | Property key to be deleted.                         | Yes      | None          |
## Example
```eats
$deleteObjectKey[name;key]
```