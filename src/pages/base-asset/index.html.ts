// metadata
export const version = "0.59.0"
export const title = "Base Asset"
export const description = "Base asset in Sway"

export const tempFileName = "base_asset.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=06d9ad29e06c49f295191d7b054763bd"

export const keywords = [
    "base",
    "asset",
    "assets",
    "ethereum",
    "token",
    "tokens",
    "eth",
]

export const codes = [
    {
        fileName: "base_asset.rs",
        code: "Y29udHJhY3Q7Cgp1c2Ugc3RkOjp7CiAgICBhdXRoOjp7CiAgICAgICAgbXNnX3NlbmRlciwKICAgIH0sCiAgICBjYWxsX2ZyYW1lczo6ewogICAgICAgIG1zZ19hc3NldF9pZCwKICAgIH0sCiAgICBjb250cmFjdF9pZDo6Q29udHJhY3RJZCwKICAgIGNvbnRleHQ6OnsKICAgICAgICBiYWxhbmNlX29mLAogICAgICAgIG1zZ19hbW91bnQsCiAgICB9LAogICAgYXNzZXQ6OnsKICAgICAgICB0cmFuc2ZlciwKICAgIH0sCn07CgphYmkgTXlDb250cmFjdCB7CiAgICAjW3BheWFibGVdCiAgICBmbiBkZXBvc2l0KCk7CiAgICBmbiB3aXRoZHJhdyhhbW91bnQ6IHU2NCk7CiAgICBmbiBnZXRfYmFsYW5jZSgpIC0+IHU2NDsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICAjW3BheWFibGVdCiAgICBmbiBkZXBvc2l0KCkgewogICAgICAgIHJlcXVpcmUobXNnX2Fzc2V0X2lkKCkgPT0gQXNzZXRJZDo6YmFzZSgpLCAibm90IGJhc2UgYXNzZXQiKTsKICAgICAgICByZXF1aXJlKG1zZ19hbW91bnQoKSA+IDAsICJhbW91bnQgPSAwIik7CiAgICB9CgogICAgZm4gd2l0aGRyYXcoYW1vdW50OiB1NjQpIHsKICAgICAgICB0cmFuc2Zlcihtc2dfc2VuZGVyKCkudW53cmFwKCksIEFzc2V0SWQ6OmJhc2UoKSwgYW1vdW50KTsKICAgIH0KCiAgICBmbiBnZXRfYmFsYW5jZSgpIC0+IHU2NCB7CiAgICAgICAgYmFsYW5jZV9vZihDb250cmFjdElkOjp0aGlzKCksIEFzc2V0SWQ6OmJhc2UoKSkKICAgIH0KfQo=",
    },
]

const html = `<p>Examples of base asset in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-keyword">use</span> std::{
    auth::{
        msg_sender,
    },
    call_frames::{
        msg_asset_id,
    },
    contract_id::ContractId,
    context::{
        balance_of,
        msg_amount,
    },
    asset::{
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
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_asset_id</span>() == AssetId::<span class="hljs-title function_ invoke__">base</span>(), <span class="hljs-string">"not base asset"</span>);
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_amount</span>() &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"amount = 0"</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">withdraw</span>(amount: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">transfer</span>(<span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>(), AssetId::<span class="hljs-title function_ invoke__">base</span>(), amount);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_balance</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-title function_ invoke__">balance_of</span>(ContractId::<span class="hljs-title function_ invoke__">this</span>(), AssetId::<span class="hljs-title function_ invoke__">base</span>())
    }
}
</code></pre>`

export default html
