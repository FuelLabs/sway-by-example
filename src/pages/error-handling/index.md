---
title: Error Handling
version: 0.37
description: Handling different types of errors in Sway
---

Errors will revert all state changes made during a transaction. Similar to Solidity an error can be thrown by utilizing `revert`, `assert`, `require`

1. `revert` function calls directly reverts the transaction
2. `assert` only reverts if a conditional is not met to be `true`
3. `require` only reverts _with an error_ if a conditional is not met to be `true`

Note: `revert` keyword will panic in a `predicate`

```rust
{{{error_handling}}}
```

### External

This is the project structure for importing your own custom errors

```
└── Import
    └── src
        ├── main.sw
        └── errors.sw
```

Note: Similar to Solidity using custom errors will help save on bytecode size and provide gas savings

```rust
{{{errors}}}
```
