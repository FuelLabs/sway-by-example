---
title: Denial of Service
version: 0.59.0
description: An example of denial of service hack in Solidity
keywords: [hack, security, denial, service]
---

### Vulnerability

There are many ways to attack a smart contract to make it unusable.

One exploit we introduce here is denial of service by making the function to send Ether fail.

```rust
{{{DenialOfService}}}
```

### Preventative Techniques

One way to prevent this is to allow the users to withdraw their Ether instead of sending it.

Here is a example.

```rust
{{{PreventDenialOfService}}}
```
