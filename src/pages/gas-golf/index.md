---
title: Gas Saving Techniques
version: 0.59.0
description: Some gas saving techniques
keywords: [gas, golf]
---

Some gas saving techniques.

- Replacing `memory` with `calldata`
- Loading state variable to memory
- Replace for loop `i++` with `++i`
- Caching array elements
- Short circuit

```rust
{{{GasGolf}}}
```
