// metadata
export const version = "0.8.13"
export const title = "Interface"
export const description = "An example of interface in Solidity"
export const codes = [
  {
    fileName: "Interface",
    code: "Y29udHJhY3Q7CgphYmkgT3duZXJzaGlwRXhhbXBsZSB7CiAgICAjW3N0b3JhZ2Uod3JpdGUpXQogICAgZm4gcmV2b2tlX293bmVyc2hpcCgpOwogICAgI1tzdG9yYWdlKHdyaXRlKV0KICAgIGZuIHNldF9vd25lcihpZGVudGl0eTogSWRlbnRpdHkpOwogICAgI1tzdG9yYWdlKHJlYWQpXQogICAgZm4gb3duZXIoKSAtPiBPcHRpb248SWRlbnRpdHk+Owp9CgpzdG9yYWdlIHsKICAgIG93bmVyOiBPcHRpb248SWRlbnRpdHk+ID0gT3B0aW9uOjpOb25lLAp9CgppbXBsIE93bmVyc2hpcEV4YW1wbGUgZm9yIENvbnRyYWN0IHsKICAgIC8vIEFOQ0hPUjogcmV2b2tlX293bmVyX2V4YW1wbGUKICAgICNbc3RvcmFnZSh3cml0ZSldCiAgICBmbiByZXZva2Vfb3duZXJzaGlwKCkgewogICAgICAgIHN0b3JhZ2Uub3duZXIgPSBPcHRpb246Ok5vbmUoKTsKICAgIH0KICAgIC8vIEFOQ0hPUl9FTkQ6IHJldm9rZV9vd25lcl9leGFtcGxlCiAgICAvLyBBTkNIT1I6IHNldF9vd25lcl9leGFtcGxlCiAgICAjW3N0b3JhZ2Uod3JpdGUpXQogICAgZm4gc2V0X293bmVyKGlkZW50aXR5OiBJZGVudGl0eSkgewogICAgICAgIHN0b3JhZ2Uub3duZXIgPSBPcHRpb246OlNvbWUoaWRlbnRpdHkpOwogICAgfQogICAgLy8gQU5DSE9SX0VORDogc2V0X293bmVyX2V4YW1wbGUKICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIG93bmVyKCkgLT4gT3B0aW9uPElkZW50aXR5PiB7CiAgICAgICAgc3RvcmFnZS5vd25lcgogICAgfQp9",
  },
  {
    fileName: "Interface2",
    code: "Y29udHJhY3Q7CgphYmkgT3duZXJzaGlwRXhhbXBsZSB7CiAgICAjW3N0b3JhZ2Uod3JpdGUpXQogICAgZm4gcmV2b2tlX293bmVyc2hpcCgpOwogICAgI1tzdG9yYWdlKHdyaXRlKV0KICAgIGZuIHNldF9vd25lcihpZGVudGl0eTogSWRlbnRpdHkpOwogICAgI1tzdG9yYWdlKHJlYWQpXQogICAgZm4gb3duZXIoKSAtPiBPcHRpb248SWRlbnRpdHk+Owp9CgpzdG9yYWdlIHsKICAgIG93bmVyOiBPcHRpb248SWRlbnRpdHk+ID0gT3B0aW9uOjpOb25lLAp9",
  },
]

const html = `<p>You can interact with other contracts by declaring an <code>Interface</code>.</p>
<p>Interface</p>
<ul>
<li>cannot have any functions implemented</li>
<li>can inherit from other interfaces</li>
<li>all declared functions must be external</li>
<li>cannot declare a constructor</li>
<li>cannot declare state variables</li>
</ul>
<pre><code class="language-rust">contract;

abi OwnershipExample {
    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">revoke_ownership</span>();
    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(identity: Identity);
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt;;
}

storage {
    owner: <span class="hljs-type">Option</span>&lt;Identity&gt; = <span class="hljs-type">Option</span>::<span class="hljs-literal">None</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">OwnershipExample</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-comment">// ANCHOR: revoke_owner_example</span>
    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">revoke_ownership</span>() {
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">None</span>();
    }
    <span class="hljs-comment">// ANCHOR_END: revoke_owner_example</span>
    <span class="hljs-comment">// ANCHOR: set_owner_example</span>
    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(identity: Identity) {
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(identity);
    }
    <span class="hljs-comment">// ANCHOR_END: set_owner_example</span>
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt; {
        storage.owner
    }
}
</code></pre>
<ul>
<li>blah</li>
<li>blah </li>
<li>blah</li>
</ul>
<pre><code class="language-rust">contract;

abi OwnershipExample {
    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">revoke_ownership</span>();
    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(identity: Identity);
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt;;
}

storage {
    owner: <span class="hljs-type">Option</span>&lt;Identity&gt; = <span class="hljs-type">Option</span>::<span class="hljs-literal">None</span>,
}
</code></pre>
`

export default html
