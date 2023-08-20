---
title: Initialization
version: 0.8.13
description: Local, state and global variables
---

There are no `constructors` in Sway so initializations are done slightly differently. Predetermined variables can be declared under `constants` in `forc.toml`. Upon compile time variables will be initalized and can be passed into the contract's storage.

`forc.toml`

```rust
{{{forc}}}
```

`main.sw`

```rust
{{{initialization}}}
```

Another different approach is to keep track of an `initialization state` by creating your own constructor. Initialization can then be enforced by requiring subsequent related functions to check if the state has been initalized.

`main.sw`

```rust
{{{old_initialization}}}
```
