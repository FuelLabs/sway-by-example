---
title: Imports
version: 0.8.13
description: Importing libraries in Sway
---
Imports are very useful for code reuseability and interactions. Generally all Sway program types follow the same import paradigm.

main.sw
```rust
{{{imports}}}
```

### Standard Library

### Local

This is the folder structure.
note external ABIs as well
mention errors here
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
    └── math_lib.sw

```

