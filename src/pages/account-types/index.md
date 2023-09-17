---
title: Account Types
version: 0.37
description: Introduction to Sway
---

Account types encapsulate a `b256` hash to clearly and safely define it's specific use case. Each respective type differs in tokens that can be owned and how they are handled.

1. Addresses includes `Externally Owned Accounts (EOAs)` and `Predicates`
2. ContractIds includes `Contracts`.

|            | UTXOs | Assets |
| ---------- | ----- | ------ |
| Address    | ✅    | ✅     |
| ContractId | ❌    | ✅     |

<br/>

`Identity` account types umbrellas over the previous discussed `Address` and `ContractId` types. It should be used when the excepted type is agnostic.

```
Identity
├── Address
└── ContractId
```

<br/>

```rust
{{{accounts}}}
```
