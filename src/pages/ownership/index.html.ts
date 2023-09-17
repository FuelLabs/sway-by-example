// metadata
export const version = "0.37"
export const title = "Ownership"
export const description = "An example of ownership in Solidity"
export const codes = [
  {
    fileName: "ownership",
    code: "Y29udHJhY3Q7CgpkZXAgZXJyb3JzOwoKdXNlIGVycm9yczo6KjsKCnVzZSBzdGQ6OnsKICAgIHJldmVydDo6cmVxdWlyZSwKICAgIGF1dGg6OiB7IEF1dGhFcnJvciwgbXNnX3NlbmRlciB9LAp9OwoKYWJpIE93bmVyc2hpcEV4YW1wbGUgewogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIHJldm9rZV9vd25lcnNoaXAoKTsKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiBzZXRfb3duZXIoaWRlbnRpdHk6IElkZW50aXR5KTsKICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIG93bmVyKCkgLT4gT3B0aW9uPElkZW50aXR5PjsKfQoKc3RvcmFnZSB7CiAgICBvd25lcjogT3B0aW9uPElkZW50aXR5PiA9IE9wdGlvbjo6Tm9uZSwKfQoKaW1wbCBPd25lcnNoaXBFeGFtcGxlIGZvciBDb250cmFjdCB7CiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gcmV2b2tlX293bmVyc2hpcCgpIHsKICAgICAgICBsZXQgc2VuZGVyOiBSZXN1bHQ8SWRlbnRpdHksIEF1dGhFcnJvcj4gPSBtc2dfc2VuZGVyKCk7IAogICAgICAgIC8vIE93bmVyc2hpcCBhY2Nlc3MgY29udHJvbCEKICAgICAgICByZXF1aXJlKHNlbmRlci51bndyYXAoKSA9PSBzdG9yYWdlLm93bmVyLnVud3JhcCgpLCBPd25lckVycm9yOjpJc05vdE93bmVyKTsKICAgICAgICBzdG9yYWdlLm93bmVyID0gT3B0aW9uOjpOb25lKCk7CiAgICB9CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIHNldF9vd25lcihpZGVudGl0eTogSWRlbnRpdHkpIHsKICAgICAgICBsZXQgc2VuZGVyOiBSZXN1bHQ8SWRlbnRpdHksIEF1dGhFcnJvcj4gPSBtc2dfc2VuZGVyKCk7IAogICAgICAgIC8vIE93bmVyc2hpcCBhY2Nlc3MgY29udHJvbCEKICAgICAgICByZXF1aXJlKHNlbmRlci51bndyYXAoKSA9PSBzdG9yYWdlLm93bmVyLnVud3JhcCgpLCBPd25lckVycm9yOjpJc05vdE93bmVyKTsKICAgICAgICBzdG9yYWdlLm93bmVyID0gT3B0aW9uOjpTb21lKGlkZW50aXR5KTsKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBvd25lcigpIC0+IE9wdGlvbjxJZGVudGl0eT4gewogICAgICAgIHN0b3JhZ2Uub3duZXIKICAgIH0KfQ==",
  },
]

const html = `<p>There are NO <code>modifers</code> in Sway meaning functions that require access control needs to be error checked differently. Setting and revoking ownership needs to have their own functions as well.</p>
<p>Note: <code>Identity</code> type is used here because the owner can be an <code>Address</code> or a <code>ContractId</code></p>
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
        <span class="hljs-comment">// Ownership access control!</span>
        <span class="hljs-title function_ invoke__">require</span>(sender.<span class="hljs-title function_ invoke__">unwrap</span>() == storage.owner.<span class="hljs-title function_ invoke__">unwrap</span>(), OwnerError::IsNotOwner);
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">None</span>();
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(identity: Identity) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span>: <span class="hljs-type">Result</span>&lt;Identity, AuthError&gt; = <span class="hljs-title function_ invoke__">msg_sender</span>(); 
        <span class="hljs-comment">// Ownership access control!</span>
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
