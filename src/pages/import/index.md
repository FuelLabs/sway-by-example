---
title: Imports
version: 0.59.0
description: Importing libraries in Sway
tempFileName: "imports.sw"
tempPlaygroundLink: "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=ceb06dd4b2978d0767e750927a232ccd"
keywords: [import, imports, library, libraries]
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
└── libraries
    ├── data_structures.sw
    └── lib.sw
```

External imports should be defined as a dependacy within `Forc.toml`

`Forc.toml`

```rust
{{{forc}}}
```

Note: It is good practice if you have a complex library to have an entry point for the sublibraries. Be sure to update the name of the entry point in the library if the default `main.sw` is not used. Make the necessary changes in the corresponding `Forc.toml` file of the library project.

`library.sw`

```rust
{{{library}}}
```