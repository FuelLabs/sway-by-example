---
title: Ownership
version: 0.8.13
description: An example of ownership in Solidity
---

There are NO `modifers` in Sway meaning functions that require access control needs to be error checked differently. Setting and revoking ownership needs to have their own functions as well.

Note: `Identity` type is used here because the owner can be an `Address` or a `ContractId`

```rust
{{{ownership}}}
```
