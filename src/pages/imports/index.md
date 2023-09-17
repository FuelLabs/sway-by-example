---
title: Imports
version: 0.37
description: Importing libraries in Sway
---

Imports are very useful for code reuseability and interactions. Generally all Sway program types follow the same import paradigm.

`main.sw`

```rust
{{{imports}}}
```

### Standard Library

### Local

This is the folder structure.

```
└── Import
    └── src
        ├── main.sw
        └── imports_library.sw
```

### External

This is the project structure.

```
├── Import
│   ├── src
│   │   └── main.sw
│   └── Forc.toml
└── math_lib
    ├── concentrated
    │   ├── I24.sw
    │   ├── Q64x64.sw
    │   ├── Q128x128.sw
    │   └── full_math.sw
    └── math_lib.sw
```

External imports should be defined as a dependacy within `Forc.toml`

`Forc.toml`

```rust
{{{forc}}}
```

Note: It is good practice if you have a complex library to have an entry point for the sublibraries

`math_lib.sw`

```rust
{{{math_lib}}}
```
