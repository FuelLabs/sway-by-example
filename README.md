# sway-by-example

Examples of Sway programs

### Development

```shell
npm i
nom run start
```

### Production

```shell
npm run deploy
```

### Memo

```shell
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/array

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts
```

### TODO

- [ ] update npm

- Basic

  - [x] variables (immutable, `mut`, type annotations)
  - [x] built-in
    - [x] primitive types (`u64`, `bool`, `str[]`, `b256`)
    - [x] compound type (tuple, struct, array)
  - [x] blockchain types (`Address`, `ContractId` and `Identity`)
  - [x] functions (return outputs, `ref mut`)
  - [x] structs
  - [x] tuples
  - [x] enums
  - [x] constants
  - [x] configurable constants
  - [x] std lib types - option
  - [x] std lib types - result
  - [x] control flow
    - [x] if
    - [x] match
    - [x] while loop
  - [x] logging
  - [ ] test in sway

- Blockchain

  - [x] msg_sender (ownership)
  - [ ] base asset (wallet)
  - [ ] native support for assets (wrapped token)
  - [x] events
  - [x] storage map (simple, nested)
  - [x] vector (storage, heap) (nft)
  - [ ] hash
  - [ ] crypto signature (air drop)
  - [ ] calling contracts (multi sig)
    - [ ] call
    - [ ] low level call
  - [ ] function purity
  - [ ] identifier (address and contract id)

- rename sway files from `.rs` to `.sw`
- move `hello-sway` repo to here?

- [ ] Integrate https://github.com/t4sk/hello-sway
