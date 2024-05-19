// metadata
export const version = "0.59.0"
export const title = "Uniswap V2"
export const description = "Uniswap V2"

export const tempFileName = "uniswapv2.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=2dd146d75151b0680c6b2190abbab523"

export const keywords = [
    "defi",
    "uniswap",
    "v2",
    "swap",
    "amm",
]

export const codes = [
    {
        fileName: "UniswapV2.rs",
        code: "Ly8gQ29uc3RhbnQgUHJvZHVjdCBBTU0gLSBVbmlzd2FwIFYyLgpjb250cmFjdDsKCnVzZSBzdGFuZGFyZHM6OnNyYzIwOjpTUkMyMDsKdXNlIHN0ZDo6ewogICAgdTEyODo6VTEyOCwKICAgIGhhc2g6OnNoYTI1NiwKICAgIGFzc2V0Ojp0cmFuc2ZlciwKICAgIGhhc2g6Okhhc2gsCiAgICBhc3NldF9pZDo6QXNzZXRJZCwKICAgIGFzc2V0Ojp7CiAgICAgICAgYnVybiwKICAgICAgICBtaW50X3RvLAogICAgfSwKICAgIGNvbnRyYWN0X2lkOjpDb250cmFjdElkLAogICAgY2FsbF9mcmFtZXM6OnsKICAgICAgICBtc2dfYXNzZXRfaWQsCiAgICB9LAogICAgY29udGV4dDo6bXNnX2Ftb3VudCwKICAgIHN0cmluZzo6U3RyaW5nLAp9OwoKYWJpIENvbnN0YW50U3VtQU1NIHsKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSksIHBheWFibGVdCiAgICBmbiBkZXBvc2l0KCk7CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIHdpdGhkcmF3KHJlY2lwaWVudDogSWRlbnRpdHksIGFzc2V0OiBBc3NldElkKTsKCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBnZXRfcG9vbChhc3NldF9hOiBBc3NldElkKSAtPiBPcHRpb248UG9vbD47CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKSwgcGF5YWJsZV0KICAgIGZuIGFkZF9saXF1aWRpdHkoYXNzZXRfYTogQXNzZXRJZCwgYXNzZXRfYjogQXNzZXRJZCkgLT4gdTY0OwoKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSksIHBheWFibGVdCiAgICBmbiByZW1vdmVfbGlxdWlkaXR5KGFzc2V0X2E6IEFzc2V0SWQsIGFzc2V0X2I6IEFzc2V0SWQpIC0+ICh1NjQsIHU2NCk7CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKSwgcGF5YWJsZV0KICAgIGZuIHN3YXAoYXNzZXRfYTogQXNzZXRJZCwgYXNzZXRfYjogQXNzZXRJZCkgLT4gdTY0Owp9CgpzdHJ1Y3QgUG9vbCB7CiAgICByZXNlcnZlX2E6IHU2NCwKICAgIHJlc2VydmVfYjogdTY0LAogICAgdG90YWxfc3VwcGx5OiB1NjQKfQoKc3RvcmFnZSB7CiAgICB0b3RhbF9wb29sczogdTY0ID0gMCwKICAgIHBvb2xzOiBTdG9yYWdlTWFwPEFzc2V0SWQsIFBvb2w+ID0gU3RvcmFnZU1hcCB7fSwKICAgIGRlcG9zaXRzOiBTdG9yYWdlTWFwPChJZGVudGl0eSwgQXNzZXRJZCksIHU2ND4gPSBTdG9yYWdlTWFwIHt9LAp9CgppbXBsIFNSQzIwIGZvciBDb250cmFjdCB7CiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiB0b3RhbF9hc3NldHMoKSAtPiB1NjQgewogICAgICAgIHN0b3JhZ2UudG90YWxfcG9vbHMudHJ5X3JlYWQoKS51bndyYXBfb3IoMCkKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiB0b3RhbF9zdXBwbHkoYXNzZXQ6IEFzc2V0SWQpIC0+IE9wdGlvbjx1NjQ+IHsKICAgICAgICBsZXQgcG9vbCA9IHN0b3JhZ2UucG9vbHMuZ2V0KGFzc2V0KS50cnlfcmVhZCgpOwogICAgICAgIAogICAgICAgIG1hdGNoIHBvb2wgewogICAgICAgICAgICBTb21lKHgpID0+IFNvbWUoeC50b3RhbF9zdXBwbHkpLAogICAgICAgICAgICBOb25lID0+IE5vbmUsCiAgICAgICAgfQogICAgfQoKICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIG5hbWUoYXNzZXQ6IEFzc2V0SWQpIC0+IE9wdGlvbjxTdHJpbmc+IHsKICAgICAgICBTb21lKFN0cmluZzo6ZnJvbV9hc2NpaV9zdHIoZnJvbV9zdHJfYXJyYXkoX190b19zdHJfYXJyYXkoIkNvbnN0YW50U3VtQU1NIikpKSkKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBzeW1ib2woYXNzZXQ6IEFzc2V0SWQpIC0+IE9wdGlvbjxTdHJpbmc+IHsKICAgICAgICBTb21lKFN0cmluZzo6ZnJvbV9hc2NpaV9zdHIoZnJvbV9zdHJfYXJyYXkoX190b19zdHJfYXJyYXkoIkFNTUxQIikpKSkKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBkZWNpbWFscyhhc3NldDogQXNzZXRJZCkgLT4gT3B0aW9uPHU4PiB7CiAgICAgICAgU29tZSg5KQogICAgfQp9CgojW3N0b3JhZ2UocmVhZCwgd3JpdGUpLCBwYXlhYmxlXQpmbiBkZXBvc2l0X29yX2NhbGwoYXNzZXQ6IEFzc2V0SWQpIC0+IHU2NCB7CiAgICBtYXRjaCBtc2dfYW1vdW50KCkgPiAwIHsKICAgICAgICB0cnVlID0+IHsKICAgICAgICAgICAgcmVxdWlyZShtc2dfYXNzZXRfaWQoKSA9PSBhc3NldCwgImludmFsaWQgY2FsbGVkIGFzc2V0IGlkIik7CgogICAgICAgICAgICBtc2dfYW1vdW50KCkKICAgICAgICB9LAogICAgICAgIGZhbHNlID0+IHsKICAgICAgICAgICAgbGV0IG93bmVyID0gbXNnX3NlbmRlcigpLnVud3JhcCgpOwogICAgICAgICAgICBsZXQgYW1vdW50ID0gc3RvcmFnZS5kZXBvc2l0cy5nZXQoKG93bmVyLCBhc3NldCkpLnRyeV9yZWFkKCkudW53cmFwX29yKDApOwoKICAgICAgICAgICAgYW1vdW50CiAgICAgICAgfQogICAgfQp9CgpmbiBiaWcodmFsdWU6IHU2NCkgLT4gVTEyOCB7CiAgICBVMTI4Ojpmcm9tKCgwLCB2YWx1ZSkpCn0KCmZuIG1pbih2YWx1ZV9hOiBVMTI4LCB2YWx1ZV9iOiBVMTI4KSAtPiBVMTI4IHsKICAgIGlmIHZhbHVlX2EgPiB2YWx1ZV9iIHsKICAgICAgICB2YWx1ZV9iCiAgICB9IGVsc2UgewogICAgICAgIHZhbHVlX2EKICAgIH0KfQoKaW1wbCBDb25zdGFudFN1bUFNTSBmb3IgQ29udHJhY3QgewogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKSwgcGF5YWJsZV0KICAgIGZuIGRlcG9zaXQoKSB7CiAgICAgICAgcmVxdWlyZShtc2dfYW1vdW50KCkgPj0gMCwgIkluY29ycmVjdCBhbW91bnQgcHJvdmlkZWQiKTsKCiAgICAgICAgbGV0IG93bmVyID0gbXNnX3NlbmRlcigpLnVud3JhcCgpOwogICAgICAgIGxldCBhc3NldF9pZCA9IG1zZ19hc3NldF9pZCgpOwogICAgICAgIGxldCBhbW91bnQgPSBzdG9yYWdlLmRlcG9zaXRzLmdldCgob3duZXIsIGFzc2V0X2lkKSkudHJ5X3JlYWQoKS51bndyYXBfb3IoMCk7CgogICAgICAgIHN0b3JhZ2UuZGVwb3NpdHMuaW5zZXJ0KChvd25lciwgYXNzZXRfaWQpLCBhbW91bnQgKyBtc2dfYW1vdW50KCkpOwogICAgfQoKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiB3aXRoZHJhdyhyZWNpcGllbnQ6IElkZW50aXR5LCBhc3NldF9pZDogQXNzZXRJZCkgewogICAgICAgIGxldCBvd25lciA9IG1zZ19zZW5kZXIoKS51bndyYXAoKTsKICAgICAgICBsZXQgYmFsYW5jZSA9IHN0b3JhZ2UuZGVwb3NpdHMuZ2V0KChvd25lciwgYXNzZXRfaWQpKS50cnlfcmVhZCgpLnVud3JhcF9vcigwKTsKCiAgICAgICAgdHJhbnNmZXIocmVjaXBpZW50LCBhc3NldF9pZCwgYmFsYW5jZSk7CgogICAgICAgIHN0b3JhZ2UuZGVwb3NpdHMucmVtb3ZlKChvd25lciwgYXNzZXRfaWQpKTsKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpLCBwYXlhYmxlXQogICAgZm4gc3dhcChhc3NldF9hOiBBc3NldElkLCBhc3NldF9iOiBBc3NldElkKSAtPiB1NjQgewogICAgICAgIHJlcXVpcmUobXNnX2Ftb3VudCgpID49IDAsICJJbmNvcnJlY3QgYW1vdW50IHByb3ZpZGVkIik7CgogICAgICAgIGxldCBvd25lciA9IG1zZ19zZW5kZXIoKS51bndyYXAoKTsKICAgICAgICBsZXQgYW1vdW50ID0gZGVwb3NpdF9vcl9jYWxsKGFzc2V0X2EpOwoKICAgICAgICByZXF1aXJlKGFzc2V0X2EgPT0gYXNzZXRfYiwgImludmFsaWQgdG9rZW4iKTsKCiAgICAgICAgbGV0IHN1Yl9pZCA9IHNoYTI1NigoYXNzZXRfYSwgYXNzZXRfYikpOwogICAgICAgIGxldCBwb29sX2lkID0gQXNzZXRJZDo6bmV3KENvbnRyYWN0SWQ6OnRoaXMoKSwgc3ViX2lkKTsKICAgICAgICBsZXQgcG9vbCA9IHN0b3JhZ2UucG9vbHMuZ2V0KHBvb2xfaWQpLnRyeV9yZWFkKCkudW53cmFwKCk7CiAgICAgICAgCiAgICAgICAgbGV0IGFtb3VudF9pbiA9ICgoYmlnKGFtb3VudCkgKiBiaWcoOTk3KSkgLyBiaWcoMTAwMCkpLmFzX3U2NCgpLnVud3JhcCgpOwogICAgICAgIGxldCBhbW91bnRfb3V0ID0gKChiaWcocG9vbC5yZXNlcnZlX2IpICogYmlnKGFtb3VudF9pbikpCiAgICAgICAgICAgIC8gKGJpZyhwb29sLnJlc2VydmVfYSkgKyBiaWcoYW1vdW50X2luKSkpLmFzX3U2NCgpLnVud3JhcCgpOwoKICAgICAgICBzdG9yYWdlLnBvb2xzLmluc2VydChwb29sX2lkLCBQb29sIHsKICAgICAgICAgICAgcmVzZXJ2ZV9hOiBwb29sLnJlc2VydmVfYSArIGFtb3VudF9pbiwKICAgICAgICAgICAgcmVzZXJ2ZV9iOiBwb29sLnJlc2VydmVfYiAtIGFtb3VudF9vdXQsCiAgICAgICAgICAgIHRvdGFsX3N1cHBseTogcG9vbC50b3RhbF9zdXBwbHkKICAgICAgICB9KTsKICAgICAgICAKICAgICAgICB0cmFuc2Zlcihvd25lciwgYXNzZXRfYiwgYW1vdW50X291dCk7CiAgICAgICAgCiAgICAgICAgYW1vdW50X291dAogICAgfQoKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSksIHBheWFibGVdCiAgICBmbiBhZGRfbGlxdWlkaXR5KGFzc2V0X2E6IEFzc2V0SWQsIGFzc2V0X2I6IEFzc2V0SWQpIC0+IHU2NCB7CiAgICAgICAgbGV0IG93bmVyID0gbXNnX3NlbmRlcigpLnVud3JhcCgpOwogICAgICAgIGxldCBhbW91bnRfYSA9IGRlcG9zaXRfb3JfY2FsbChhc3NldF9hKTsKCiAgICAgICAgbGV0IGFtb3VudF9iID0gc3RvcmFnZS5kZXBvc2l0cy5nZXQoKG93bmVyLCBhc3NldF9iKSkudHJ5X3JlYWQoKS51bndyYXBfb3IoMCk7CiAgICAgICAgbGV0IHN1Yl9pZCA9IHNoYTI1NigoYXNzZXRfYSwgYXNzZXRfYikpOwogICAgICAgIGxldCBwb29sX2lkID0gQXNzZXRJZDo6bmV3KENvbnRyYWN0SWQ6OnRoaXMoKSwgc3ViX2lkKTsKICAgICAgICBsZXQgcG9vbCA9IHN0b3JhZ2UucG9vbHMuZ2V0KHBvb2xfaWQpLnRyeV9yZWFkKCkudW53cmFwKCk7CiAgICAgICAgbGV0IG11dCBzaGFyZXMgPSAwOwoKICAgICAgICBpZiAocG9vbC5yZXNlcnZlX2EgPiAwIHx8IHBvb2wucmVzZXJ2ZV9iID4gMCkgewogICAgICAgICAgICByZXF1aXJlKAogICAgICAgICAgICAgICAgYmlnKHBvb2wucmVzZXJ2ZV9hKSAqIGJpZyhhbW91bnRfYSkgPT0gYmlnKHBvb2wucmVzZXJ2ZV9iKSAqIGJpZyhhbW91bnRfYiksICJ4IC8geSAhPSBkeCAvIGR5IgogICAgICAgICAgICApOwogICAgICAgIH0KCiAgICAgICAgaWYgKHBvb2wudG90YWxfc3VwcGx5ID09IDApIHsKICAgICAgICAgICAgc2hhcmVzID0gKGJpZyhhbW91bnRfYSkgKiBiaWcoYW1vdW50X2IpKS5zcXJ0KCkuYXNfdTY0KCkudW53cmFwKCk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgc2hhcmVzID0gbWluKAogICAgICAgICAgICAgICAgKGJpZyhhbW91bnRfYSkgKiBiaWcocG9vbC50b3RhbF9zdXBwbHkpKSAvIGJpZyhwb29sLnJlc2VydmVfYSksCiAgICAgICAgICAgICAgICAoYmlnKGFtb3VudF9iKSAqIGJpZyhwb29sLnRvdGFsX3N1cHBseSkpIC8gYmlnKHBvb2wucmVzZXJ2ZV9iKQogICAgICAgICAgICApLmFzX3U2NCgpLnVud3JhcCgpOwogICAgICAgIH0KCiAgICAgICAgcmVxdWlyZShzaGFyZXMgPiAwLCAic2hhcmVzID0gMCIpOwoKICAgICAgICBtaW50X3RvKG93bmVyLCBzdWJfaWQsIHNoYXJlcyk7CgogICAgICAgIHN0b3JhZ2UucG9vbHMuaW5zZXJ0KHBvb2xfaWQsIFBvb2wgewogICAgICAgICAgICByZXNlcnZlX2E6IGFtb3VudF9hICsgcG9vbC5yZXNlcnZlX2EsCiAgICAgICAgICAgIHJlc2VydmVfYjogYW1vdW50X2IgLSBwb29sLnJlc2VydmVfYiwKICAgICAgICAgICAgdG90YWxfc3VwcGx5OiBwb29sLnRvdGFsX3N1cHBseSArIHNoYXJlcwogICAgICAgIH0pOwoKICAgICAgICBzaGFyZXMKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpLCBwYXlhYmxlXQogICAgZm4gcmVtb3ZlX2xpcXVpZGl0eShhc3NldF9hOiBBc3NldElkLCBhc3NldF9iOiBBc3NldElkKSAtPiAodTY0LCB1NjQpIHsKICAgICAgICBsZXQgb3duZXIgPSBtc2dfc2VuZGVyKCkudW53cmFwKCk7CiAgICAgICAgbGV0IHN1Yl9pZCA9IHNoYTI1NigoYXNzZXRfYSwgYXNzZXRfYikpOwogICAgICAgIGxldCBwb29sX2lkID0gQXNzZXRJZDo6bmV3KENvbnRyYWN0SWQ6OnRoaXMoKSwgc3ViX2lkKTsKCiAgICAgICAgbGV0IHNoYXJlcyA9IGRlcG9zaXRfb3JfY2FsbChwb29sX2lkKTsKICAgICAgICBsZXQgcG9vbCA9IHN0b3JhZ2UucG9vbHMuZ2V0KHBvb2xfaWQpLnRyeV9yZWFkKCkudW53cmFwKCk7CiAgICAgICAgbGV0IGFtb3VudF9hID0gKChiaWcoc2hhcmVzKSAqIGJpZyhwb29sLnJlc2VydmVfYSkpIC8gYmlnKHBvb2wudG90YWxfc3VwcGx5KSkuYXNfdTY0KCkudW53cmFwKCk7CiAgICAgICAgbGV0IGFtb3VudF9iID0gKChiaWcoc2hhcmVzKSAqIGJpZyhwb29sLnJlc2VydmVfYikpIC8gYmlnKHBvb2wudG90YWxfc3VwcGx5KSkuYXNfdTY0KCkudW53cmFwKCk7CgogICAgICAgIHJlcXVpcmUoYW1vdW50X2EgPiAwICYmIGFtb3VudF9iID4gMCwgImFtb3VudDAgb3IgYW1vdW50MSA9IDAiKTsKCiAgICAgICAgYnVybihzdWJfaWQsIHNoYXJlcyk7CgogICAgICAgIHN0b3JhZ2UucG9vbHMuaW5zZXJ0KHBvb2xfaWQsIFBvb2wgewogICAgICAgICAgICByZXNlcnZlX2E6IHBvb2wucmVzZXJ2ZV9hIC0gYW1vdW50X2EsCiAgICAgICAgICAgIHJlc2VydmVfYjogcG9vbC5yZXNlcnZlX2IgLSBhbW91bnRfYiwKICAgICAgICAgICAgdG90YWxfc3VwcGx5OiBwb29sLnRvdGFsX3N1cHBseSAtIHNoYXJlcwogICAgICAgIH0pOwoKICAgICAgICBpZiAoYW1vdW50X2EgPiAwKSB7CiAgICAgICAgICAgIHRyYW5zZmVyKG93bmVyLCBhc3NldF9hLCBhbW91bnRfYSk7CiAgICAgICAgfQogICAgICAgIGlmIChhbW91bnRfYiA+IDApIHsKICAgICAgICAgICAgdHJhbnNmZXIob3duZXIsIGFzc2V0X2IsIGFtb3VudF9iKTsKICAgICAgICB9CiAgICAgICAgCiAgICAgICAgKGFtb3VudF9hLCBhbW91bnRfYikKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBnZXRfcG9vbChhc3NldF9pZDogQXNzZXRJZCkgLT4gT3B0aW9uPFBvb2w+IHsKICAgICAgICBzdG9yYWdlLnBvb2xzLmdldChhc3NldF9pZCkudHJ5X3JlYWQoKQogICAgfQp9Cg==",
    },
]

const html = `<p>Constant Product AMM (unaudited) in Sway</p>
<pre><code class="language-rust"><span class="hljs-comment">// Constant Product AMM - Uniswap V2.</span>
contract;

<span class="hljs-keyword">use</span> standards::src20::SRC20;
<span class="hljs-keyword">use</span> std::{
    <span class="hljs-type">u128</span>::U128,
    hash::sha256,
    asset::transfer,
    hash::Hash,
    asset_id::AssetId,
    asset::{
        burn,
        mint_to,
    },
    contract_id::ContractId,
    call_frames::{
        msg_asset_id,
    },
    context::msg_amount,
    string::<span class="hljs-type">String</span>,
};

abi ConstantSumAMM {
    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit</span>();

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">withdraw</span>(recipient: Identity, asset: AssetId);

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_pool</span>(asset_a: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Pool&gt;;

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">add_liquidity</span>(asset_a: AssetId, asset_b: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">remove_liquidity</span>(asset_a: AssetId, asset_b: AssetId) <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, <span class="hljs-type">u64</span>);

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">swap</span>(asset_a: AssetId, asset_b: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Pool</span> {
    reserve_a: <span class="hljs-type">u64</span>,
    reserve_b: <span class="hljs-type">u64</span>,
    total_supply: <span class="hljs-type">u64</span>
}

storage {
    total_pools: <span class="hljs-type">u64</span> = <span class="hljs-number">0</span>,
    pools: StorageMap&lt;AssetId, Pool&gt; = StorageMap {},
    deposits: StorageMap&lt;(Identity, AssetId), <span class="hljs-type">u64</span>&gt; = StorageMap {},
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">SRC20</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">total_assets</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        storage.total_pools.<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap_or</span>(<span class="hljs-number">0</span>)
    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">total_supply</span>(asset: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;<span class="hljs-type">u64</span>&gt; {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">pool</span> = storage.pools.<span class="hljs-title function_ invoke__">get</span>(asset).<span class="hljs-title function_ invoke__">try_read</span>();
        
        <span class="hljs-keyword">match</span> pool {
            <span class="hljs-title function_ invoke__">Some</span>(x) =&gt; <span class="hljs-title function_ invoke__">Some</span>(x.total_supply),
            <span class="hljs-literal">None</span> =&gt; <span class="hljs-literal">None</span>,
        }
    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">name</span>(asset: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;<span class="hljs-type">String</span>&gt; {
        <span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-type">String</span>::<span class="hljs-title function_ invoke__">from_ascii_str</span>(<span class="hljs-title function_ invoke__">from_str_array</span>(__to_str_array(<span class="hljs-string">"ConstantSumAMM"</span>))))
    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">symbol</span>(asset: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;<span class="hljs-type">String</span>&gt; {
        <span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-type">String</span>::<span class="hljs-title function_ invoke__">from_ascii_str</span>(<span class="hljs-title function_ invoke__">from_str_array</span>(__to_str_array(<span class="hljs-string">"AMMLP"</span>))))
    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">decimals</span>(asset: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;<span class="hljs-type">u8</span>&gt; {
        <span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-number">9</span>)
    }
}

<span class="hljs-meta">#[storage(read, write), payable]</span>
<span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit_or_call</span>(asset: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
    <span class="hljs-keyword">match</span> <span class="hljs-title function_ invoke__">msg_amount</span>() &gt; <span class="hljs-number">0</span> {
        <span class="hljs-literal">true</span> =&gt; {
            <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_asset_id</span>() == asset, <span class="hljs-string">"invalid called asset id"</span>);

            <span class="hljs-title function_ invoke__">msg_amount</span>()
        },
        <span class="hljs-literal">false</span> =&gt; {
            <span class="hljs-keyword">let</span> <span class="hljs-variable">owner</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
            <span class="hljs-keyword">let</span> <span class="hljs-variable">amount</span> = storage.deposits.<span class="hljs-title function_ invoke__">get</span>((owner, asset)).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap_or</span>(<span class="hljs-number">0</span>);

            amount
        }
    }
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">big</span>(value: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> U128 {
    U128::<span class="hljs-title function_ invoke__">from</span>((<span class="hljs-number">0</span>, value))
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">min</span>(value_a: U128, value_b: U128) <span class="hljs-punctuation">-&gt;</span> U128 {
    <span class="hljs-keyword">if</span> value_a &gt; value_b {
        value_b
    } <span class="hljs-keyword">else</span> {
        value_a
    }
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">ConstantSumAMM</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit</span>() {
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_amount</span>() &gt;= <span class="hljs-number">0</span>, <span class="hljs-string">"Incorrect amount provided"</span>);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">owner</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">asset_id</span> = <span class="hljs-title function_ invoke__">msg_asset_id</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount</span> = storage.deposits.<span class="hljs-title function_ invoke__">get</span>((owner, asset_id)).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap_or</span>(<span class="hljs-number">0</span>);

        storage.deposits.<span class="hljs-title function_ invoke__">insert</span>((owner, asset_id), amount + <span class="hljs-title function_ invoke__">msg_amount</span>());
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">withdraw</span>(recipient: Identity, asset_id: AssetId) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">owner</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">balance</span> = storage.deposits.<span class="hljs-title function_ invoke__">get</span>((owner, asset_id)).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap_or</span>(<span class="hljs-number">0</span>);

        <span class="hljs-title function_ invoke__">transfer</span>(recipient, asset_id, balance);

        storage.deposits.<span class="hljs-title function_ invoke__">remove</span>((owner, asset_id));
    }

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">swap</span>(asset_a: AssetId, asset_b: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_amount</span>() &gt;= <span class="hljs-number">0</span>, <span class="hljs-string">"Incorrect amount provided"</span>);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">owner</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount</span> = <span class="hljs-title function_ invoke__">deposit_or_call</span>(asset_a);

        <span class="hljs-title function_ invoke__">require</span>(asset_a == asset_b, <span class="hljs-string">"invalid token"</span>);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">sub_id</span> = <span class="hljs-title function_ invoke__">sha256</span>((asset_a, asset_b));
        <span class="hljs-keyword">let</span> <span class="hljs-variable">pool_id</span> = AssetId::<span class="hljs-title function_ invoke__">new</span>(ContractId::<span class="hljs-title function_ invoke__">this</span>(), sub_id);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">pool</span> = storage.pools.<span class="hljs-title function_ invoke__">get</span>(pool_id).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        
        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount_in</span> = ((<span class="hljs-title function_ invoke__">big</span>(amount) * <span class="hljs-title function_ invoke__">big</span>(<span class="hljs-number">997</span>)) / <span class="hljs-title function_ invoke__">big</span>(<span class="hljs-number">1000</span>)).<span class="hljs-title function_ invoke__">as_u64</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount_out</span> = ((<span class="hljs-title function_ invoke__">big</span>(pool.reserve_b) * <span class="hljs-title function_ invoke__">big</span>(amount_in))
            / (<span class="hljs-title function_ invoke__">big</span>(pool.reserve_a) + <span class="hljs-title function_ invoke__">big</span>(amount_in))).<span class="hljs-title function_ invoke__">as_u64</span>().<span class="hljs-title function_ invoke__">unwrap</span>();

        storage.pools.<span class="hljs-title function_ invoke__">insert</span>(pool_id, Pool {
            reserve_a: pool.reserve_a + amount_in,
            reserve_b: pool.reserve_b - amount_out,
            total_supply: pool.total_supply
        });
        
        <span class="hljs-title function_ invoke__">transfer</span>(owner, asset_b, amount_out);
        
        amount_out
    }

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">add_liquidity</span>(asset_a: AssetId, asset_b: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">owner</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount_a</span> = <span class="hljs-title function_ invoke__">deposit_or_call</span>(asset_a);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount_b</span> = storage.deposits.<span class="hljs-title function_ invoke__">get</span>((owner, asset_b)).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap_or</span>(<span class="hljs-number">0</span>);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sub_id</span> = <span class="hljs-title function_ invoke__">sha256</span>((asset_a, asset_b));
        <span class="hljs-keyword">let</span> <span class="hljs-variable">pool_id</span> = AssetId::<span class="hljs-title function_ invoke__">new</span>(ContractId::<span class="hljs-title function_ invoke__">this</span>(), sub_id);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">pool</span> = storage.pools.<span class="hljs-title function_ invoke__">get</span>(pool_id).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">shares</span> = <span class="hljs-number">0</span>;

        <span class="hljs-keyword">if</span> (pool.reserve_a &gt; <span class="hljs-number">0</span> || pool.reserve_b &gt; <span class="hljs-number">0</span>) {
            <span class="hljs-title function_ invoke__">require</span>(
                <span class="hljs-title function_ invoke__">big</span>(pool.reserve_a) * <span class="hljs-title function_ invoke__">big</span>(amount_a) == <span class="hljs-title function_ invoke__">big</span>(pool.reserve_b) * <span class="hljs-title function_ invoke__">big</span>(amount_b), <span class="hljs-string">"x / y != dx / dy"</span>
            );
        }

        <span class="hljs-keyword">if</span> (pool.total_supply == <span class="hljs-number">0</span>) {
            shares = (<span class="hljs-title function_ invoke__">big</span>(amount_a) * <span class="hljs-title function_ invoke__">big</span>(amount_b)).<span class="hljs-title function_ invoke__">sqrt</span>().<span class="hljs-title function_ invoke__">as_u64</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        } <span class="hljs-keyword">else</span> {
            shares = <span class="hljs-title function_ invoke__">min</span>(
                (<span class="hljs-title function_ invoke__">big</span>(amount_a) * <span class="hljs-title function_ invoke__">big</span>(pool.total_supply)) / <span class="hljs-title function_ invoke__">big</span>(pool.reserve_a),
                (<span class="hljs-title function_ invoke__">big</span>(amount_b) * <span class="hljs-title function_ invoke__">big</span>(pool.total_supply)) / <span class="hljs-title function_ invoke__">big</span>(pool.reserve_b)
            ).<span class="hljs-title function_ invoke__">as_u64</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        }

        <span class="hljs-title function_ invoke__">require</span>(shares &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"shares = 0"</span>);

        <span class="hljs-title function_ invoke__">mint_to</span>(owner, sub_id, shares);

        storage.pools.<span class="hljs-title function_ invoke__">insert</span>(pool_id, Pool {
            reserve_a: amount_a + pool.reserve_a,
            reserve_b: amount_b - pool.reserve_b,
            total_supply: pool.total_supply + shares
        });

        shares
    }

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">remove_liquidity</span>(asset_a: AssetId, asset_b: AssetId) <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, <span class="hljs-type">u64</span>) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">owner</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sub_id</span> = <span class="hljs-title function_ invoke__">sha256</span>((asset_a, asset_b));
        <span class="hljs-keyword">let</span> <span class="hljs-variable">pool_id</span> = AssetId::<span class="hljs-title function_ invoke__">new</span>(ContractId::<span class="hljs-title function_ invoke__">this</span>(), sub_id);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">shares</span> = <span class="hljs-title function_ invoke__">deposit_or_call</span>(pool_id);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">pool</span> = storage.pools.<span class="hljs-title function_ invoke__">get</span>(pool_id).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount_a</span> = ((<span class="hljs-title function_ invoke__">big</span>(shares) * <span class="hljs-title function_ invoke__">big</span>(pool.reserve_a)) / <span class="hljs-title function_ invoke__">big</span>(pool.total_supply)).<span class="hljs-title function_ invoke__">as_u64</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">amount_b</span> = ((<span class="hljs-title function_ invoke__">big</span>(shares) * <span class="hljs-title function_ invoke__">big</span>(pool.reserve_b)) / <span class="hljs-title function_ invoke__">big</span>(pool.total_supply)).<span class="hljs-title function_ invoke__">as_u64</span>().<span class="hljs-title function_ invoke__">unwrap</span>();

        <span class="hljs-title function_ invoke__">require</span>(amount_a &gt; <span class="hljs-number">0</span> &amp;&amp; amount_b &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"amount0 or amount1 = 0"</span>);

        <span class="hljs-title function_ invoke__">burn</span>(sub_id, shares);

        storage.pools.<span class="hljs-title function_ invoke__">insert</span>(pool_id, Pool {
            reserve_a: pool.reserve_a - amount_a,
            reserve_b: pool.reserve_b - amount_b,
            total_supply: pool.total_supply - shares
        });

        <span class="hljs-keyword">if</span> (amount_a &gt; <span class="hljs-number">0</span>) {
            <span class="hljs-title function_ invoke__">transfer</span>(owner, asset_a, amount_a);
        }
        <span class="hljs-keyword">if</span> (amount_b &gt; <span class="hljs-number">0</span>) {
            <span class="hljs-title function_ invoke__">transfer</span>(owner, asset_b, amount_b);
        }
        
        (amount_a, amount_b)
    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_pool</span>(asset_id: AssetId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Pool&gt; {
        storage.pools.<span class="hljs-title function_ invoke__">get</span>(asset_id).<span class="hljs-title function_ invoke__">try_read</span>()
    }
}
</code></pre>`

export default html
