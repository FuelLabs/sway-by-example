---
title: Hiding Malicious Code with External Contract
version: 0.59.0
description: An example of exploit where malicious code is hidden in an external contract in Solidity
keywords: [hack, security, hide, hiding, malicious, code, external, contract]
---

### Vulnerability

In Solidity any address can be casted into specific contract,
even if the contract at the address is not the one being casted.

This can be exploited to hide malicious code. Let's see how.

```rust
{{{ExternalContract}}}
```

### Preventative Techniques

- Initialize a new contract inside the constructor
- Make the address of external contract `public` so that the code of the
  external contract can be reviewed

```rust
Bar public bar;

constructor() public {
    bar = new Bar();
}
```
