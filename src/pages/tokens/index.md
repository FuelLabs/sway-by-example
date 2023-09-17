---
title: Tokens (UTXO)
version: 0.37
description: Introduction to Sway
---

### UTXO vs ERC20 (Account Model) Analogy

During token transactions instead of just updating the balance of their account like in a bank, the coins they are spending are marked as "spent" and new coins are created for the person they are sending the money to. Think of it like handing over cash to someone and getting change back, instead of just moving numbers around in a computer.

Comparing Fuel's native `UTXO` assets and [Ethereum's ERC20 standard](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20) there are several important differences.

1. No `token.approval()`
2. No `token.transferFrom()`

Using the analogy from before the token contract can be thought as the federal mint and just like in real life there are no `approvals` or `transferFroms` for them to move around the cash thats already minted in your wallet.

Bonus: No approvals and transferFroms means that a comprimised contract cannot steal the tokens in your wallet!

```rust
{{{tokens}}}
```

`Minting` and `Buring` of native UTXO assets still need to be done through the contract transfers can be done freely without the token contract. The federal mint is able to mint and burn toens but cannot control how people spend the cash. Balances are all handled by the `FuelVM` preventing contract storage bloat.
