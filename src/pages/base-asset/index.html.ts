// metadata
export const version = "0.37"
export const title = "Base Asset"
export const description = "Base asset in Sway"
export const codes = [
  {
    fileName: "base_asset",
    code: "Y29udHJhY3Q7Cgp1c2Ugc3RkOjp7CiAgICBhdXRoOjp7CiAgICAgICAgbXNnX3NlbmRlciwKICAgIH0sCiAgICBjYWxsX2ZyYW1lczo6ewogICAgICAgIGNvbnRyYWN0X2lkLAogICAgICAgIG1zZ19hc3NldF9pZCwKICAgIH0sCiAgICBjb25zdGFudHM6OkJBU0VfQVNTRVRfSUQsCiAgICBjb250ZXh0Ojp7CiAgICAgICAgYmFsYW5jZV9vZiwKICAgICAgICBtc2dfYW1vdW50LAogICAgfSwKICAgIHRva2VuOjp7CiAgICAgICAgdHJhbnNmZXIsCiAgICB9LAp9OwoKYWJpIE15Q29udHJhY3QgewogICAgI1twYXlhYmxlXQogICAgZm4gZGVwb3NpdCgpOwogICAgZm4gd2l0aGRyYXcoYW1vdW50OiB1NjQpOwogICAgZm4gZ2V0X2JhbGFuY2UoKSAtPiB1NjQ7Cn0KCmltcGwgTXlDb250cmFjdCBmb3IgQ29udHJhY3QgewogICAgI1twYXlhYmxlXQogICAgZm4gZGVwb3NpdCgpIHsKICAgICAgICByZXF1aXJlKG1zZ19hc3NldF9pZCgpID09IEJBU0VfQVNTRVRfSUQsICJub3QgYmFzZSBhc3NldCIpOwogICAgICAgIHJlcXVpcmUobXNnX2Ftb3VudCgpID4gMCwgImFtb3VudCA9IDAiKTsKICAgIH0KCiAgICBmbiB3aXRoZHJhdyhhbW91bnQ6IHU2NCkgewogICAgICAgIHRyYW5zZmVyKGFtb3VudCwgQkFTRV9BU1NFVF9JRCwgbXNnX3NlbmRlcigpLnVud3JhcCgpKTsKICAgIH0KCiAgICBmbiBnZXRfYmFsYW5jZSgpIC0+IHU2NCB7CiAgICAgICAgYmFsYW5jZV9vZihCQVNFX0FTU0VUX0lELCBjb250cmFjdF9pZCgpKQogICAgfQp9Cg==",
  },
]

const html = `<p>Examples of base asset in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-keyword">use</span> std::{
    auth::{
        msg_sender,
    },
    call_frames::{
        contract_id,
        msg_asset_id,
    },
    constants::BASE_ASSET_ID,
    context::{
        balance_of,
        msg_amount,
    },
    token::{
        transfer,
    },
};

abi MyContract {
    <span class="hljs-meta">#[payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit</span>();
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">withdraw</span>(amount: <span class="hljs-type">u64</span>);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_balance</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit</span>() {
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_asset_id</span>() == BASE_ASSET_ID, <span class="hljs-string">"not base asset"</span>);
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_amount</span>() &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"amount = 0"</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">withdraw</span>(amount: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">transfer</span>(amount, BASE_ASSET_ID, <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>());
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_balance</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-title function_ invoke__">balance_of</span>(BASE_ASSET_ID, <span class="hljs-title function_ invoke__">contract_id</span>())
    }
}
</code></pre>
`

export default html
