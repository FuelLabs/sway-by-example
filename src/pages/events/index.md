---
title: Events
version: 0.8.13
description: Introduction to Sway
---

In Sway `events` are defined as `structs` typically as its own library to be imported in like errors or interfaces. By utilizing `logs` from the standard library, custom events can be `emitted` to be picked up and indexed at the end of function runs.

`main.sw`

```rust
{{{events}}}
```

`events.sw`

```rust
{{{lib}}}
```
