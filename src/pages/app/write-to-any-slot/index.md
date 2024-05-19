---
title: Write to Any Slot
version: 0.59.0
description: Write to Any Slot
keywords: [app, application, write, any, slot, storage]
---

Solidity storage is like an array of length 2^256.
Each slot in the array can store 32 bytes.

Order of declaration and the type of state variables define which slots it will use.

However using assembly, you can write to any slot.

```rust
{{{Slot}}}
```
