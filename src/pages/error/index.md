---
title: Error
version: 0.59.0
description: Example of how to throw errors in Solidity
keywords: [error, errors, require, revert, assert]
---

An error will undo all changes made to the state during a transaction.

You can throw an error by calling `require`, `revert` or `assert`.

- `require` is used to validate inputs and conditions before execution.
- `revert` is similar to `require`. See the code below for details.
- `assert` is used to check for code that should never be false. Failing
  assertion probably means that there is a bug.

Use custom error to save gas.

```rust
{{{Error}}}
```

Here is another example

```rust
{{{Account}}}
```
