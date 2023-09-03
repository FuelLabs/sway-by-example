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
  - [ ] functions (return outputs, `ref mut`)
  - [ ] structs
  - [ ] tuples
  - [ ] enums
  - [ ] constants
  - [ ] configurable constants
  - [ ] std lib types - option
  - [ ] std lib types - result
  - [ ] control flow
    - [ ] if
    - [ ] match
    - [ ] while loop
  - [ ] logging
  - [ ] test in sway
