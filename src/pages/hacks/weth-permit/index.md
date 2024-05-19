---
title: WETH Permit
version: 0.59.0
description: An example of WETH permit hack
keywords: [hack, security, weth, permit]
---

### Vulnerability

Most ERC20 have the `permit` function to approve a spender if a valid signature is provided.

However `WETH` does not. Surprisingly, when `permit` is called on `WETH`, the function call will execute without any errors.

This is because the `fallback` inside `WETH` is execute when `permit` is called.

### Example

0. Alice gives infinite approval for `ERC20Bank` to spend `WETH`
1. Alice calls `deposit`, deposits 1 WETH into `ERC20Bank`
2. Attacker calls `depositWithPermit`, passes an empty signature and transfers all tokens from Alice into `ERC20Bank`, crediting the attacker for the deposit.
3. Attacker withdraws all tokens credited to him.

### ERC20Bank

```rust
{{{ERC20Bank}}}
```

### Exploit

```rust
{{{ERC20BankExploitTest}}}
```

### Other contracts

```rust
{{{IERC20}}}
```

```rust
{{{IERC20Permit}}}
```

```rust
{{{ERC20}}}
```

```rust
{{{WETH}}}
```
