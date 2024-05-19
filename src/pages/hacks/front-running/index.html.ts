// metadata
export const version = "0.59.0"
export const title = "Front Running"
export const description =
  "An example of a Solidity contract vulnerable to front running"

export const keywords = ["hack", "security", "front", "running"]

export const codes = [
  {
    fileName: "FrontRunning.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8qCkFsaWNlIGNyZWF0ZXMgYSBndWVzc2luZyBnYW1lLgpZb3Ugd2luIDEwIGV0aGVyIGlmIHlvdSBjYW4gZmluZCB0aGUgY29ycmVjdCBzdHJpbmcgdGhhdCBoYXNoZXMgdG8gdGhlIHRhcmdldApoYXNoLiBMZXQncyBzZWUgaG93IHRoaXMgY29udHJhY3QgaXMgdnVsbmVyYWJsZSB0byBmcm9udCBydW5uaW5nLgoqLwoKLyoKMS4gQWxpY2UgZGVwbG95cyBGaW5kVGhpc0hhc2ggd2l0aCAxMCBFdGhlci4KMi4gQm9iIGZpbmRzIHRoZSBjb3JyZWN0IHN0cmluZyB0aGF0IHdpbGwgaGFzaCB0byB0aGUgdGFyZ2V0IGhhc2guICgiRXRoZXJldW0iKQozLiBCb2IgY2FsbHMgc29sdmUoIkV0aGVyZXVtIikgd2l0aCBnYXMgcHJpY2Ugc2V0IHRvIDE1IGd3ZWkuCjQuIEV2ZSBpcyB3YXRjaGluZyB0aGUgdHJhbnNhY3Rpb24gcG9vbCBmb3IgdGhlIGFuc3dlciB0byBiZSBzdWJtaXR0ZWQuCjUuIEV2ZSBzZWVzIEJvYidzIGFuc3dlciBhbmQgY2FsbHMgc29sdmUoIkV0aGVyZXVtIikgd2l0aCBhIGhpZ2hlciBnYXMgcHJpY2UKICAgdGhhbiBCb2IgKDEwMCBnd2VpKS4KNi4gRXZlJ3MgdHJhbnNhY3Rpb24gd2FzIG1pbmVkIGJlZm9yZSBCb2IncyB0cmFuc2FjdGlvbi4KICAgRXZlIHdvbiB0aGUgcmV3YXJkIG9mIDEwIGV0aGVyLgoKV2hhdCBoYXBwZW5lZD8KVHJhbnNhY3Rpb25zIHRha2Ugc29tZSB0aW1lIGJlZm9yZSB0aGV5IGFyZSBtaW5lZC4KVHJhbnNhY3Rpb25zIG5vdCB5ZXQgbWluZWQgYXJlIHB1dCBpbiB0aGUgdHJhbnNhY3Rpb24gcG9vbC4KVHJhbnNhY3Rpb25zIHdpdGggaGlnaGVyIGdhcyBwcmljZSBhcmUgdHlwaWNhbGx5IG1pbmVkIGZpcnN0LgpBbiBhdHRhY2tlciBjYW4gZ2V0IHRoZSBhbnN3ZXIgZnJvbSB0aGUgdHJhbnNhY3Rpb24gcG9vbCwgc2VuZCBhIHRyYW5zYWN0aW9uCndpdGggYSBoaWdoZXIgZ2FzIHByaWNlIHNvIHRoYXQgdGhlaXIgdHJhbnNhY3Rpb24gd2lsbCBiZSBpbmNsdWRlZCBpbiBhIGJsb2NrCmJlZm9yZSB0aGUgb3JpZ2luYWwuCiovCgpjb250cmFjdCBGaW5kVGhpc0hhc2ggewogICAgYnl0ZXMzMiBwdWJsaWMgY29uc3RhbnQgaGFzaCA9CiAgICAgICAgMHg1NjRjY2FmNzU5NGQ2NmIxZWFhZWEyNGZlMDFmMDU4NWJmNTJlZTcwODUyYWY0ZWFjMGNjNGIwNDcxMWNkMGUyOwoKICAgIGNvbnN0cnVjdG9yKCkgcGF5YWJsZSB7fQoKICAgIGZ1bmN0aW9uIHNvbHZlKHN0cmluZyBtZW1vcnkgc29sdXRpb24pIHB1YmxpYyB7CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgaGFzaCA9PSBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChzb2x1dGlvbikpLCAiSW5jb3JyZWN0IGFuc3dlciIKICAgICAgICApOwoKICAgICAgICAoYm9vbCBzZW50LCkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IDEwIGV0aGVyfSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQo=",
  },
  {
    fileName: "PreventFrontRunning.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8qCiAgIE5vdyBMZXQncyBzZWUgaG93IHRvIGd1YXJkIGZyb20gZnJvbnQgcnVubmluZyB1c2luZyBjb21taXQgcmV2ZWFsIHNjaGVtZS4KKi8KCi8qCjEuIEFsaWNlIGRlcGxveXMgU2VjdXJlZEZpbmRUaGlzSGFzaCB3aXRoIDEwIEV0aGVyLgoyLiBCb2IgZmluZHMgdGhlIGNvcnJlY3Qgc3RyaW5nIHRoYXQgd2lsbCBoYXNoIHRvIHRoZSB0YXJnZXQgaGFzaC4gKCJFdGhlcmV1bSIpLgozLiBCb2IgdGhlbiBmaW5kcyB0aGUga2VjY2FrMjU2KEFkZHJlc3MgaW4gbG93ZXJjYXNlICsgU29sdXRpb24gKyBTZWNyZXQpLiAKICAgQWRkcmVzcyBpcyBoaXMgd2FsbGV0IGFkZHJlc3MgaW4gbG93ZXJjYXNlLCBzb2x1dGlvbiBpcyAiRXRoZXJldW0iLCBTZWNyZXQgaXMgbGlrZSBhbiBwYXNzd29yZCAoIm15c2VjcmV0IikgCiAgIHRoYXQgb25seSBCb2Iga25vd3Mgd2hpYyBCb2IgdXNlcyB0byBjb21taXQgYW5kIHJldmVhbCB0aGUgc29sdXRpb24uCiAgIGtlY2NhazI1NjYoIjB4ZjM5RmQ2ZTUxYWFkODhGNkY0Y2U2YUI4ODI3Mjc5Y2ZmRmI5MjI2NkV0aGVyZXVtbXlzZWNyZXQiKSA9ICcweGY5NWIxZGQ2MWVkYzNiZDk2MmNkZWEzOTg3YzZmNTViY2I3MTRhMDJhMmMzZWI3M2JkOTYwZDZiNDM4N2ZjMzYnCjMuIEJvYiB0aGVuIGNhbGxzIGNvbW1pdFNvbHV0aW9uKCIweGY5NWIxZGQ2MWVkYzNiZDk2MmNkZWEzOTg3YzZmNTViY2I3MTRhMDJhMmMzZWI3M2JkOTYwZDZiNDM4N2ZjMzYiKSwgCiAgIHdoZXJlIGhlIGNvbW1pdHMgdGhlIGNhbGN1bGF0ZWQgc29sdXRpb24gaGFzaCB3aXRoIGdhcyBwcmljZSBzZXQgdG8gMTUgZ3dlaS4KNC4gRXZlIGlzIHdhdGNoaW5nIHRoZSB0cmFuc2FjdGlvbiBwb29sIGZvciB0aGUgYW5zd2VyIHRvIGJlIHN1Ym1pdHRlZC4KNS4gRXZlIHNlZXMgQm9iJ3MgYW5zd2VyIGFuZCBoZSBhbHNvIGNhbGxzIGNvbW1pdFNvbHV0aW9uKCIweGY5NWIxZGQ2MWVkYzNiZDk2MmNkZWEzOTg3YzZmNTViY2I3MTRhMDJhMmMzZWI3M2JkOTYwZDZiNDM4N2ZjMzYiKQogICB3aXRoIGEgaGlnaGVyIGdhcyBwcmljZSB0aGFuIEJvYiAoMTAwIGd3ZWkpLgo2LiBFdmUncyB0cmFuc2FjdGlvbiB3YXMgbWluZWQgYmVmb3JlIEJvYidzIHRyYW5zYWN0aW9uLCBidXQgRXZlIGhhcyBub3QgZ290IHRoZSByZXdhcmQgeWV0LgogICBIZSBuZWVkcyB0byBjYWxsIHJldmVhbFNvbHV0aW9uKCkgd2l0aCBleGFjdCBzZWNyZXQgYW5kIHNvbHV0aW9uLCBzbyBsZXRzIHNheSBoZSBpcyB3YXRjaGluZyB0aGUgdHJhbnNhY3Rpb24gcG9vbAogICB0byBmcm9udCBydW4gQm9iIGFzIGhlIGRpZCBwcmV2aW91c2x5CjcuIFRoZW4gQm9iIGNhbGxzIHRoZSByZXZlYWxTb2x1dGlvbigiRXRoZXJldW0iLCAibXlzZWNyZXQiKSB3aXRoIGdhcyBwcmljZSBzZXQgdG8gMTUgZ3dlaTsKOC4gTGV0J3MgY29uc2lkZXIgdGhhdCBFdmUncyB3aG8ncyB3YXRjaGluZyB0aGUgdHJhbnNhY3Rpb24gcG9vbCwgZmluZCdzIEJvYidzIHJldmVhbCBzb2x1dGlvbiB0cmFuc2FjdGlvbiBhbmQgaGUgYWxzbyBjYWxscyAKICAgcmV2ZWFsU29sdXRpb24oIkV0aGVyZXVtIiwgIm15c2VjcmV0Iikgd2l0aCBoaWdoZXIgZ2FzIHByaWNlIHRoYW4gQm9iICgxMDAgZ3dlaSkKOS4gTGV0J3MgY29uc2lkZXIgdGhhdCB0aGlzIHRpbWUgYWxzbyBFdmUncyByZXZlYWwgdHJhbnNhY3Rpb24gd2FzIG1pbmVkIGJlZm9yZSBCb2IncyB0cmFuc2FjdGlvbiwgYnV0IEV2ZSB3aWxsIGJlCiAgIHJldmVydGVkIHdpdGggIkhhc2ggZG9lc24ndCBtYXRjaCIgZXJyb3IuIFNpbmNlIHRoZSByZXZlYWxTb2x1dGlvbigpIGZ1bmN0aW9uIGNoZWNrcyB0aGUgaGFzaCB1c2luZyAKICAga2VjY2FrMjU2KG1zZy5zZW5kZXIgKyBzb2x1dGlvbiArIHNlY3JldCkuIFNvIHRoaXMgdGltZSBldmUgZmFpbHMgdG8gd2luIHRoZSByZXdhcmQuCjEwLkJ1dCBCb2IncyByZXZlYWxTb2x1dGlvbigiRXRoZXJldW0iLCAibXlzZWNyZXQiKSBwYXNzZXMgdGhlIGhhc2ggY2hlY2sgYW5kIGdldHMgdGhlIHJld2FyZCBvZiAxMCBldGhlci4KKi8KCmNvbnRyYWN0IFNlY3VyZWRGaW5kVGhpc0hhc2ggewogICAgLy8gU3RydWN0IGlzIHVzZWQgdG8gc3RvcmUgdGhlIGNvbW1pdCBkZXRhaWxzCiAgICBzdHJ1Y3QgQ29tbWl0IHsKICAgICAgICBieXRlczMyIHNvbHV0aW9uSGFzaDsKICAgICAgICB1aW50MjU2IGNvbW1pdFRpbWU7CiAgICAgICAgYm9vbCByZXZlYWxlZDsKICAgIH0KCiAgICAvLyBUaGUgaGFzaCB0aGF0IGlzIG5lZWRlZCB0byBiZSBzb2x2ZWQKICAgIGJ5dGVzMzIgcHVibGljIGhhc2ggPQogICAgICAgIDB4NTY0Y2NhZjc1OTRkNjZiMWVhYWVhMjRmZTAxZjA1ODViZjUyZWU3MDg1MmFmNGVhYzBjYzRiMDQ3MTFjZDBlMjsKCiAgICAvLyBBZGRyZXNzIG9mIHRoZSB3aW5uZXIKICAgIGFkZHJlc3MgcHVibGljIHdpbm5lcjsKCiAgICAvLyBQcmljZSB0byBiZSByZXdhcmRlZAogICAgdWludDI1NiBwdWJsaWMgcmV3YXJkOwoKICAgIC8vIFN0YXR1cyBvZiBnYW1lCiAgICBib29sIHB1YmxpYyBlbmRlZDsKCiAgICAvLyBNYXBwaW5nIHRvIHN0b3JlIHRoZSBjb21taXQgZGV0YWlscyB3aXRoIGFkZHJlc3MKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBDb21taXQpIGNvbW1pdHM7CgogICAgLy8gTW9kaWZpZXIgdG8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgYWN0aXZlCiAgICBtb2RpZmllciBnYW1lQWN0aXZlKCkgewogICAgICAgIHJlcXVpcmUoIWVuZGVkLCAiQWxyZWFkeSBlbmRlZCIpOwogICAgICAgIF87CiAgICB9CgogICAgY29uc3RydWN0b3IoKSBwYXlhYmxlIHsKICAgICAgICByZXdhcmQgPSBtc2cudmFsdWU7CiAgICB9CgogICAgLyogCiAgICAgICBDb21taXQgZnVuY3Rpb24gdG8gc3RvcmUgdGhlIGhhc2ggY2FsY3VsYXRlZCB1c2luZyBrZWNjYWsyNTYoYWRkcmVzcyBpbiBsb3dlcmNhc2UgKyBzb2x1dGlvbiArIHNlY3JldCkuIAogICAgICAgVXNlcnMgY2FuIG9ubHkgY29tbWl0IG9uY2UgYW5kIGlmIHRoZSBnYW1lIGlzIGFjdGl2ZS4KICAgICovCiAgICBmdW5jdGlvbiBjb21taXRTb2x1dGlvbihieXRlczMyIF9zb2x1dGlvbkhhc2gpIHB1YmxpYyBnYW1lQWN0aXZlIHsKICAgICAgICBDb21taXQgc3RvcmFnZSBjb21taXQgPSBjb21taXRzW21zZy5zZW5kZXJdOwogICAgICAgIHJlcXVpcmUoY29tbWl0LmNvbW1pdFRpbWUgPT0gMCwgIkFscmVhZHkgY29tbWl0dGVkIik7CiAgICAgICAgY29tbWl0LnNvbHV0aW9uSGFzaCA9IF9zb2x1dGlvbkhhc2g7CiAgICAgICAgY29tbWl0LmNvbW1pdFRpbWUgPSBibG9jay50aW1lc3RhbXA7CiAgICAgICAgY29tbWl0LnJldmVhbGVkID0gZmFsc2U7CiAgICB9CgogICAgLyogCiAgICAgICAgRnVuY3Rpb24gdG8gZ2V0IHRoZSBjb21taXQgZGV0YWlscy4gSXQgcmV0dXJucyBhIHR1cGxlIG9mIChzb2x1dGlvbkhhc2gsIGNvbW1pdFRpbWUsIHJldmVhbFN0YXR1cyk7ICAKICAgICAgICBVc2VycyBjYW4gZ2V0IHNvbHV0aW9uIG9ubHkgaWYgdGhlIGdhbWUgaXMgYWN0aXZlIGFuZCB0aGV5IGhhdmUgY29tbWl0dGVkIGEgc29sdXRpb25IYXNoCiAgICAqLwogICAgZnVuY3Rpb24gZ2V0TXlTb2x1dGlvbigpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIGdhbWVBY3RpdmUKICAgICAgICByZXR1cm5zIChieXRlczMyLCB1aW50MjU2LCBib29sKQogICAgewogICAgICAgIENvbW1pdCBzdG9yYWdlIGNvbW1pdCA9IGNvbW1pdHNbbXNnLnNlbmRlcl07CiAgICAgICAgcmVxdWlyZShjb21taXQuY29tbWl0VGltZSAhPSAwLCAiTm90IGNvbW1pdHRlZCB5ZXQiKTsKICAgICAgICByZXR1cm4gKGNvbW1pdC5zb2x1dGlvbkhhc2gsIGNvbW1pdC5jb21taXRUaW1lLCBjb21taXQucmV2ZWFsZWQpOwogICAgfQogICAgLyogCiAgICAgICAgRnVuY3Rpb24gdG8gcmV2ZWFsIHRoZSBjb21taXQgYW5kIGdldCB0aGUgcmV3YXJkLiAKICAgICAgICBVc2VycyBjYW4gZ2V0IHJldmVhbCBzb2x1dGlvbiBvbmx5IGlmIHRoZSBnYW1lIGlzIGFjdGl2ZSBhbmQgdGhleSBoYXZlIGNvbW1pdHRlZCBhIHNvbHV0aW9uSGFzaCBiZWZvcmUgdGhpcyBibG9jayBhbmQgbm90IHJldmVhbGVkIHlldC4KICAgICAgICBJdCBnZW5lcmF0ZXMgYW4ga2VjY2FrMjU2KG1zZy5zZW5kZXIgKyBzb2x1dGlvbiArIHNlY3JldCkgYW5kIGNoZWNrcyBpdCB3aXRoIHRoZSBwcmV2aW91c2x5IGNvbW1pdGVkIGhhc2guICAKICAgICAgICBBc3N1bWluZyB0aGF0IGEgY29tbWl0IHdhcyBhbHJlYWR5IGluY2x1ZGVkIG9uIGNoYWluLCBmcm9udCBydW5uZXJzIHdpbGwgbm90IGJlIGFibGUgdG8gcGFzcyB0aGlzIGNoZWNrIHNpbmNlIHRoZSBtc2cuc2VuZGVyIGlzIGRpZmZlcmVudC4KICAgICAgICBUaGVuIHRoZSBhY3R1YWwgc29sdXRpb24gaXMgY2hlY2tlZCB1c2luZyBrZWNjYWsyNTYoc29sdXRpb24pLCBpZiB0aGUgc29sdXRpb24gbWF0Y2hlcywgdGhlIHdpbm5lciBpcyBkZWNsYXJlZCwgCiAgICAgICAgdGhlIGdhbWUgaXMgZW5kZWQgYW5kIHRoZSByZXdhcmQgYW1vdW50IGlzIHNlbnQgdG8gdGhlIHdpbm5lci4KICAgICovCgogICAgZnVuY3Rpb24gcmV2ZWFsU29sdXRpb24oc3RyaW5nIG1lbW9yeSBfc29sdXRpb24sIHN0cmluZyBtZW1vcnkgX3NlY3JldCkKICAgICAgICBwdWJsaWMKICAgICAgICBnYW1lQWN0aXZlCiAgICB7CiAgICAgICAgQ29tbWl0IHN0b3JhZ2UgY29tbWl0ID0gY29tbWl0c1ttc2cuc2VuZGVyXTsKICAgICAgICByZXF1aXJlKGNvbW1pdC5jb21taXRUaW1lICE9IDAsICJOb3QgY29tbWl0dGVkIHlldCIpOwogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIGNvbW1pdC5jb21taXRUaW1lIDwgYmxvY2sudGltZXN0YW1wLAogICAgICAgICAgICAiQ2Fubm90IHJldmVhbCBpbiB0aGUgc2FtZSBibG9jayIKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoIWNvbW1pdC5yZXZlYWxlZCwgIkFscmVhZHkgY29tbWl0ZWQgYW5kIHJldmVhbGVkIik7CgogICAgICAgIGJ5dGVzMzIgc29sdXRpb25IYXNoID0KICAgICAgICAgICAga2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQobXNnLnNlbmRlciwgX3NvbHV0aW9uLCBfc2VjcmV0KSk7CiAgICAgICAgcmVxdWlyZShzb2x1dGlvbkhhc2ggPT0gY29tbWl0LnNvbHV0aW9uSGFzaCwgIkhhc2ggZG9lc24ndCBtYXRjaCIpOwoKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfc29sdXRpb24pKSA9PSBoYXNoLCAiSW5jb3JyZWN0IGFuc3dlciIKICAgICAgICApOwoKICAgICAgICB3aW5uZXIgPSBtc2cuc2VuZGVyOwogICAgICAgIGVuZGVkID0gdHJ1ZTsKCiAgICAgICAgKGJvb2wgc2VudCwpID0gcGF5YWJsZShtc2cuc2VuZGVyKS5jYWxse3ZhbHVlOiByZXdhcmR9KCIiKTsKICAgICAgICBpZiAoIXNlbnQpIHsKICAgICAgICAgICAgd2lubmVyID0gYWRkcmVzcygwKTsKICAgICAgICAgICAgZW5kZWQgPSBmYWxzZTsKICAgICAgICAgICAgcmV2ZXJ0KCJGYWlsZWQgdG8gc2VuZCBldGhlci4iKTsKICAgICAgICB9CiAgICB9Cn0K",
  },
]

const html = `<h3>Vulnerability</h3>
<p>Transactions take some time before they are mined. An attacker can watch the transaction pool
and send a transaction, have it included in a block before the original transaction.
This mechanism can be abused to re-order transactions to the attacker&#39;s advantage.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.59.0;</span>

<span class="hljs-comment">/*
Alice creates a guessing game.
You win 10 ether if you can find the correct string that hashes to the target
hash. Let&#x27;s see how this contract is vulnerable to front running.
*/</span>

<span class="hljs-comment">/*
1. Alice deploys FindThisHash with 10 Ether.
2. Bob finds the correct string that will hash to the target hash. ("Ethereum")
3. Bob calls solve("Ethereum") with gas price set to 15 gwei.
4. Eve is watching the transaction pool for the answer to be submitted.
5. Eve sees Bob&#x27;s answer and calls solve("Ethereum") with a higher gas price
   than Bob (100 gwei).
6. Eve&#x27;s transaction was mined before Bob&#x27;s transaction.
   Eve won the reward of 10 ether.

What happened?
Transactions take some time before they are mined.
Transactions not yet mined are put in the transaction pool.
Transactions with higher gas price are typically mined first.
An attacker can get the answer from the transaction pool, send a transaction
with a higher gas price so that their transaction will be included in a block
before the original.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FindThisHash</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> hash <span class="hljs-operator">=</span>
        <span class="hljs-number">0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">solve</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> solution</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(
            hash <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(solution)), <span class="hljs-string">"Incorrect answer"</span>
        );

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-number">10</span> <span class="hljs-literal">ether</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>use commit-reveal scheme (<a href="https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8">https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8</a>)</li>
<li>use submarine send (<a href="https://libsubmarine.org/">https://libsubmarine.org/</a>)</li>
</ul>
<h3>Commit-Reveal Schemes</h3>
<p>A commitment scheme is a cryptographic algorithm used to allow someone to commit to a value while keeping it hidden from others with the ability to reveal it later. The values in a commitment scheme are binding, meaning that no one can change them once committed. The scheme has two phases: a commit phase in which a value is chosen and specified, and a reveal phase in which the value is revealed and checked.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.59.0;</span>

<span class="hljs-comment">/*
   Now Let&#x27;s see how to guard from front running using commit reveal scheme.
*/</span>

<span class="hljs-comment">/*
1. Alice deploys SecuredFindThisHash with 10 Ether.
2. Bob finds the correct string that will hash to the target hash. ("Ethereum").
3. Bob then finds the keccak256(Address in lowercase + Solution + Secret). 
   Address is his wallet address in lowercase, solution is "Ethereum", Secret is like an password ("mysecret") 
   that only Bob knows whic Bob uses to commit and reveal the solution.
   keccak2566("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266Ethereummysecret") = &#x27;0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36&#x27;
3. Bob then calls commitSolution("0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36"), 
   where he commits the calculated solution hash with gas price set to 15 gwei.
4. Eve is watching the transaction pool for the answer to be submitted.
5. Eve sees Bob&#x27;s answer and he also calls commitSolution("0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36")
   with a higher gas price than Bob (100 gwei).
6. Eve&#x27;s transaction was mined before Bob&#x27;s transaction, but Eve has not got the reward yet.
   He needs to call revealSolution() with exact secret and solution, so lets say he is watching the transaction pool
   to front run Bob as he did previously
7. Then Bob calls the revealSolution("Ethereum", "mysecret") with gas price set to 15 gwei;
8. Let&#x27;s consider that Eve&#x27;s who&#x27;s watching the transaction pool, find&#x27;s Bob&#x27;s reveal solution transaction and he also calls 
   revealSolution("Ethereum", "mysecret") with higher gas price than Bob (100 gwei)
9. Let&#x27;s consider that this time also Eve&#x27;s reveal transaction was mined before Bob&#x27;s transaction, but Eve will be
   reverted with "Hash doesn&#x27;t match" error. Since the revealSolution() function checks the hash using 
   keccak256(msg.sender + solution + secret). So this time eve fails to win the reward.
10.But Bob&#x27;s revealSolution("Ethereum", "mysecret") passes the hash check and gets the reward of 10 ether.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SecuredFindThisHash</span> </span>{
    <span class="hljs-comment">// Struct is used to store the commit details</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Commit</span> {
        <span class="hljs-keyword">bytes32</span> solutionHash;
        <span class="hljs-keyword">uint256</span> commitTime;
        <span class="hljs-keyword">bool</span> revealed;
    }

    <span class="hljs-comment">// The hash that is needed to be solved</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> hash <span class="hljs-operator">=</span>
        <span class="hljs-number">0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2</span>;

    <span class="hljs-comment">// Address of the winner</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-comment">// Price to be rewarded</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> reward;

    <span class="hljs-comment">// Status of game</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> ended;

    <span class="hljs-comment">// Mapping to store the commit details with address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> Commit) commits;

    <span class="hljs-comment">// Modifier to check if the game is active</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">gameActive</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>ended, <span class="hljs-string">"Already ended"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        reward <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-comment">/* 
       Commit function to store the hash calculated using keccak256(address in lowercase + solution + secret). 
       Users can only commit once and if the game is active.
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">commitSolution</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _solutionHash</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">gameActive</span> </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Already committed"</span>);
        commit.solutionHash <span class="hljs-operator">=</span> _solutionHash;
        commit.commitTime <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
        commit.revealed <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-comment">/* 
        Function to get the commit details. It returns a tuple of (solutionHash, commitTime, revealStatus);  
        Users can get solution only if the game is active and they have committed a solutionHash
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMySolution</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title">gameActive</span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span>, <span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">bool</span></span>)
    </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Not committed yet"</span>);
        <span class="hljs-keyword">return</span> (commit.solutionHash, commit.commitTime, commit.revealed);
    }
    <span class="hljs-comment">/* 
        Function to reveal the commit and get the reward. 
        Users can get reveal solution only if the game is active and they have committed a solutionHash before this block and not revealed yet.
        It generates an keccak256(msg.sender + solution + secret) and checks it with the previously commited hash.  
        Assuming that a commit was already included on chain, front runners will not be able to pass this check since the msg.sender is different.
        Then the actual solution is checked using keccak256(solution), if the solution matches, the winner is declared, 
        the game is ended and the reward amount is sent to the winner.
    */</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">revealSolution</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _solution, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _secret</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">gameActive</span>
    </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Not committed yet"</span>);
        <span class="hljs-built_in">require</span>(
            commit.commitTime <span class="hljs-operator">&lt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>,
            <span class="hljs-string">"Cannot reveal in the same block"</span>
        );
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>commit.revealed, <span class="hljs-string">"Already commited and revealed"</span>);

        <span class="hljs-keyword">bytes32</span> solutionHash <span class="hljs-operator">=</span>
            <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _solution, _secret));
        <span class="hljs-built_in">require</span>(solutionHash <span class="hljs-operator">=</span><span class="hljs-operator">=</span> commit.solutionHash, <span class="hljs-string">"Hash doesn&#x27;t match"</span>);

        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_solution)) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> hash, <span class="hljs-string">"Incorrect answer"</span>
        );

        winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        ended <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: reward}(<span class="hljs-string">""</span>);
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>sent) {
            winner <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>);
            ended <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Failed to send ether."</span>);
        }
    }
}
</code></pre>`

export default html
