---
title: Calling Other Contracts
version: 0.8.13
description: Introduction to Sway
---

Contract to contract calls can simply be done by importing the callee's `abi` and calling the desired functions.

`main.sw`

```rust
{{{contract_caller}}}
```

`interface.sw`

```rust
{{{interface}}}
```
