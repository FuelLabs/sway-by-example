---
title: Import
version: 0.59.0
description: Learn how to import other Solidity files
keywords: [import]
---

You can import local and external files in Solidity.

### Local

Here is our folder structure.

```
├── Import.sol
└── Foo.sol
```

Foo.sol

```rust
{{{Foo}}}
```

Import.sol

```rust
{{{Import}}}
```

### External

You can also import from [GitHub](https://github.com) by simply copying the url

```rust
// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ECDSA.sol from openzeppelin-contract repo, release-v4.5 branch
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";
```
