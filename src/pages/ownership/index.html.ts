// metadata
export const version = "0.8.13"
export const title = "Ownership"
export const description = "An example of ownership in Solidity"
export const codes = [
    {
        fileName: "Ownership.rs",
        code: "Y29udHJhY3Q7CgpkZXAgZXJyb3JzOwoKdXNlIGVycm9yczo6KjsKCnVzZSBzdGQ6OnsKICAgIHJldmVydDo6cmVxdWlyZSwKICAgIGF1dGg6OiB7IEF1dGhFcnJvciwgbXNnX3NlbmRlciB9LAp9OwoKYWJpIE93bmVyc2hpcEV4YW1wbGUgewogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIHJldm9rZV9vd25lcnNoaXAoKTsKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiBzZXRfb3duZXIoaWRlbnRpdHk6IElkZW50aXR5KTsKICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIG93bmVyKCkgLT4gT3B0aW9uPElkZW50aXR5PjsKfQoKc3RvcmFnZSB7CiAgICBvd25lcjogT3B0aW9uPElkZW50aXR5PiA9IE9wdGlvbjo6Tm9uZSwKfQoKaW1wbCBPd25lcnNoaXBFeGFtcGxlIGZvciBDb250cmFjdCB7CiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gcmV2b2tlX293bmVyc2hpcCgpIHsKICAgICAgICBsZXQgc2VuZGVyOiBSZXN1bHQ8SWRlbnRpdHksIEF1dGhFcnJvcj4gPSBtc2dfc2VuZGVyKCk7IAogICAgICAgIHJlcXVpcmUoc2VuZGVyLnVud3JhcCgpID09IHN0b3JhZ2Uub3duZXIudW53cmFwKCksIE93bmVyRXJyb3I6OklzTm90T3duZXIpOwogICAgICAgIHN0b3JhZ2Uub3duZXIgPSBPcHRpb246Ok5vbmUoKTsKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gc2V0X293bmVyKGlkZW50aXR5OiBJZGVudGl0eSkgewogICAgICAgIGxldCBzZW5kZXI6IFJlc3VsdDxJZGVudGl0eSwgQXV0aEVycm9yPiA9IG1zZ19zZW5kZXIoKTsgCiAgICAgICAgcmVxdWlyZShzZW5kZXIudW53cmFwKCkgPT0gc3RvcmFnZS5vd25lci51bndyYXAoKSwgT3duZXJFcnJvcjo6SXNOb3RPd25lcik7CiAgICAgICAgc3RvcmFnZS5vd25lciA9IE9wdGlvbjo6U29tZShpZGVudGl0eSk7CiAgICB9CiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBvd25lcigpIC0+IE9wdGlvbjxJZGVudGl0eT4gewogICAgICAgIHN0b3JhZ2Uub3duZXIKICAgIH0KfQ==",
    },
]

const html = `<p>Key Differences</p>
<ul>
<li>No modifiers</li>
<li>address -&gt; identity</li>
</ul>
<pre><code class="language-rust">contract;

dep errors;

<span class="hljs-keyword">use</span> errors::*;

<span class="hljs-keyword">use</span> std::{
    revert::require,
    auth:: { AuthError, msg_sender },
};

abi OwnershipExample {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">revoke_ownership</span>();
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(identity: Identity);
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt;;
}

storage {
    owner: <span class="hljs-type">Option</span>&lt;Identity&gt; = <span class="hljs-type">Option</span>::<span class="hljs-literal">None</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">OwnershipExample</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">revoke_ownership</span>() {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span>: <span class="hljs-type">Result</span>&lt;Identity, AuthError&gt; = <span class="hljs-title function_ invoke__">msg_sender</span>(); 
        <span class="hljs-title function_ invoke__">require</span>(sender.<span class="hljs-title function_ invoke__">unwrap</span>() == storage.owner.<span class="hljs-title function_ invoke__">unwrap</span>(), OwnerError::IsNotOwner);
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">None</span>();
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(identity: Identity) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span>: <span class="hljs-type">Result</span>&lt;Identity, AuthError&gt; = <span class="hljs-title function_ invoke__">msg_sender</span>(); 
        <span class="hljs-title function_ invoke__">require</span>(sender.<span class="hljs-title function_ invoke__">unwrap</span>() == storage.owner.<span class="hljs-title function_ invoke__">unwrap</span>(), OwnerError::IsNotOwner);
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(identity);
    }
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt; {
        storage.owner
    }
}
</code></pre>
`

export default html
