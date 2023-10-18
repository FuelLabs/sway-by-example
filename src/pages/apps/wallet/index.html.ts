// metadata
export const version = "0.37"
export const title = "Wallet"
export const description = "Wallet to Sway"
export const codes = [
  {
    fileName: "errors",
    code: "CmxpYnJhcnk7CgpwdWIgZW51bSBJbml0RXJyb3IgewogICAgQ2Fubm90UmVpbml0aWFsaXplOiAoKSwKICAgIE5vdEluaXRpYWxpemVkOiAoKSwKfQoKcHViIGVudW0gRGVwb3NpdEVycm9yIHsKICAgIE5vdEJhc2VBc3NldDogKCksCiAgICBaZXJvQW1vdW50OiAoKSwKfQoKcHViIGVudW0gQWNjZXNzQ29udHJvbEVycm9yIHsKICAgIE5vdEF1dGhvcml6ZWQ6ICgpLAp9Cg==",
  },
  {
    fileName: "main",
    code: "Y29udHJhY3Q7CgovLyBCQVNFX0FTU0VUX0lECi8vIG1zZ19hc3NldF9pZCwgbXNnX2Ftb3VudAovLyBwYXlhYmxlCi8vIHRyYW5zZmVyIAoKbW9kIGVycm9yczsKCnVzZSBzdGQ6OmF1dGg6Om1zZ19zZW5kZXI7CnVzZSBzdGQ6OnsKICAgIGNhbGxfZnJhbWVzOjptc2dfYXNzZXRfaWQsCiAgICBjb25zdGFudHM6OkJBU0VfQVNTRVRfSUQsCiAgICBjb250ZXh0Ojptc2dfYW1vdW50LAogICAgdG9rZW46OnRyYW5zZmVyLAp9Owp1c2UgOjplcnJvcnM6OntBY2Nlc3NDb250cm9sRXJyb3IsIERlcG9zaXRFcnJvciwgSW5pdEVycm9yfTsKCmFiaSBNeVdhbGxldCB7CiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBvd25lcigpIC0+IE9wdGlvbjxJZGVudGl0eT47CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIGluaXQoKTsKCiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpLCBwYXlhYmxlXQogICAgZm4gZGVwb3NpdCgpOwoKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiBzZW5kKHRvOiBJZGVudGl0eSwgYW1vdW50OiB1NjQpOwp9CgpzdG9yYWdlIHsKICAgIG93bmVyOiBPcHRpb248SWRlbnRpdHk+ID0gT3B0aW9uOjpOb25lLAp9CgppbXBsIE15V2FsbGV0IGZvciBDb250cmFjdCB7CiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBvd25lcigpIC0+IE9wdGlvbjxJZGVudGl0eT4gewogICAgICAgIHN0b3JhZ2Uub3duZXIKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gaW5pdCgpIHsKICAgICAgICByZXF1aXJlKHN0b3JhZ2Uub3duZXIuaXNfbm9uZSgpLCBJbml0RXJyb3I6OkNhbm5vdFJlaW5pdGlhbGl6ZSk7CiAgICAgICAgbGV0IHNlbmRlciA9IG1zZ19zZW5kZXIoKS51bndyYXAoKTsKICAgICAgICBzdG9yYWdlLm93bmVyID0gT3B0aW9uOjpTb21lKHNlbmRlcik7CiAgICB9CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKSwgcGF5YWJsZV0KICAgIGZuIGRlcG9zaXQoKSB7CiAgICAgICAgcmVxdWlyZShzdG9yYWdlLm93bmVyLmlzX3NvbWUoKSwgSW5pdEVycm9yOjpOb3RJbml0aWFsaXplZCk7CiAgICAgICAgcmVxdWlyZShtc2dfYXNzZXRfaWQoKSA9PSBCQVNFX0FTU0VUX0lELCBEZXBvc2l0RXJyb3I6Ok5vdEJhc2VBc3NldCk7CiAgICAgICAgcmVxdWlyZShtc2dfYW1vdW50KCkgPiAwLCBEZXBvc2l0RXJyb3I6Olplcm9BbW91bnQpOwogICAgfQoKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiBzZW5kKHRvOiBJZGVudGl0eSwgYW1vdW50OiB1NjQpIHsKICAgICAgICBsZXQgc2VuZGVyID0gbXNnX3NlbmRlcigpOwogICAgICAgIHJlcXVpcmUoc2VuZGVyLnVud3JhcCgpID09IHN0b3JhZ2Uub3duZXIudW53cmFwKCksIEFjY2Vzc0NvbnRyb2xFcnJvcjo6Tm90QXV0aG9yaXplZCk7CiAgICAgICAgdHJhbnNmZXIoYW1vdW50LCBCQVNFX0FTU0VUX0lELCB0byk7CiAgICB9Cn0K",
  },
]

const html = `<p>Wallet in Sway</p>
<p><code>main.sw</code></p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// BASE_ASSET_ID</span>
<span class="hljs-comment">// msg_asset_id, msg_amount</span>
<span class="hljs-comment">// payable</span>
<span class="hljs-comment">// transfer </span>

<span class="hljs-keyword">mod</span> errors;

<span class="hljs-keyword">use</span> std::auth::msg_sender;
<span class="hljs-keyword">use</span> std::{
    call_frames::msg_asset_id,
    constants::BASE_ASSET_ID,
    context::msg_amount,
    token::transfer,
};
<span class="hljs-keyword">use</span> ::errors::{AccessControlError, DepositError, InitError};

abi MyWallet {
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt;;

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">init</span>();

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit</span>();

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">send</span>(to: Identity, amount: <span class="hljs-type">u64</span>);
}

storage {
    owner: <span class="hljs-type">Option</span>&lt;Identity&gt; = <span class="hljs-type">Option</span>::<span class="hljs-literal">None</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyWallet</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt; {
        storage.owner
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">init</span>() {
        <span class="hljs-title function_ invoke__">require</span>(storage.owner.<span class="hljs-title function_ invoke__">is_none</span>(), InitError::CannotReinitialize);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(sender);
    }

    <span class="hljs-meta">#[storage(read, write), payable]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit</span>() {
        <span class="hljs-title function_ invoke__">require</span>(storage.owner.<span class="hljs-title function_ invoke__">is_some</span>(), InitError::NotInitialized);
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_asset_id</span>() == BASE_ASSET_ID, DepositError::NotBaseAsset);
        <span class="hljs-title function_ invoke__">require</span>(<span class="hljs-title function_ invoke__">msg_amount</span>() &gt; <span class="hljs-number">0</span>, DepositError::ZeroAmount);
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">send</span>(to: Identity, amount: <span class="hljs-type">u64</span>) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = <span class="hljs-title function_ invoke__">msg_sender</span>();
        <span class="hljs-title function_ invoke__">require</span>(sender.<span class="hljs-title function_ invoke__">unwrap</span>() == storage.owner.<span class="hljs-title function_ invoke__">unwrap</span>(), AccessControlError::NotAuthorized);
        <span class="hljs-title function_ invoke__">transfer</span>(amount, BASE_ASSET_ID, to);
    }
}
}
</code></pre>
<p><code>errors.sw</code></p>
<pre><code class="language-rust">
library;

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">InitError</span> {
    CannotReinitialize: (),
    NotInitialized: (),
}

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">DepositError</span> {
    NotBaseAsset: (),
    ZeroAmount: (),
}

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">AccessControlError</span> {
    NotAuthorized: (),
}
</code></pre>
`

export default html
