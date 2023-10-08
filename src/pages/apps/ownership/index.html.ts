// metadata
export const version = "0.37"
export const title = "Ownership"
export const description = "Ownership in Sway"
export const codes = [
  {
    fileName: "errors",
    code: "bGlicmFyeTsKCnB1YiBlbnVtIEFjY2Vzc0NvbnRyb2xFcnJvciB7CiAgICBVbmF1dGhvcml6ZWRFcnJvcjogKCksCn0KCnB1YiBlbnVtIEluaXRFcnJvciB7CiAgICBDYW5ub3RSZWluaXRpYWxpemU6ICgpLAp9Cg==",
  },
  {
    fileName: "ownership",
    code: "CmNvbnRyYWN0OwoKbW9kIGVycm9yczsKCnVzZSBzdGQ6OmF1dGg6Onttc2dfc2VuZGVyfTsKdXNlIDo6ZXJyb3JzOjp7QWNjZXNzQ29udHJvbEVycm9yLCBJbml0RXJyb3J9OwoKCi8vIGNvbmZpZ3VyYWJsZSB7Ci8vICAgICBPV05FUjogSWRlbnRpdHkgPSBJZGVudGl0eTo6QWRkcmVzcyhBZGRyZXNzOjpmcm9tKDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkpLAovLyB9CgpzdG9yYWdlIHsKICAgIG93bmVyOiBPcHRpb248SWRlbnRpdHk+ID0gT3B0aW9uOjpOb25lLAp9CgphYmkgTXlDb250cmFjdCB7CiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gaW5pdCgpOwoKICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIG93bmVyKCkgLT4gT3B0aW9uPElkZW50aXR5PjsKCiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gc2V0X293bmVyKGlkOiBJZGVudGl0eSk7Cn0KCmltcGwgTXlDb250cmFjdCBmb3IgQ29udHJhY3QgewogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIGluaXQoKSB7CiAgICAgICAgcmVxdWlyZShzdG9yYWdlLm93bmVyLmlzX25vbmUoKSwgSW5pdEVycm9yOjpDYW5ub3RSZWluaXRpYWxpemUpOwogICAgICAgIGxldCBzZW5kZXIgPSBtc2dfc2VuZGVyKCkudW53cmFwKCk7CiAgICAgICAgc3RvcmFnZS5vd25lciA9IE9wdGlvbjo6U29tZShzZW5kZXIpOwogICAgfQoKICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIG93bmVyKCkgLT4gT3B0aW9uPElkZW50aXR5PiB7CiAgICAgICAgc3RvcmFnZS5vd25lcgogICAgfQoKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiBzZXRfb3duZXIoaWQ6IElkZW50aXR5KSB7CiAgICAgICAgbGV0IHNlbmRlciA9IG1zZ19zZW5kZXIoKTsKICAgICAgICByZXF1aXJlKHNlbmRlci51bndyYXAoKSA9PSBzdG9yYWdlLm93bmVyLnVud3JhcCgpLCBBY2Nlc3NDb250cm9sRXJyb3I6OlVuYXV0aG9yaXplZEVycm9yKTsKICAgICAgICBzdG9yYWdlLm93bmVyID0gT3B0aW9uOjpTb21lKGlkKTsKICAgIH0KfQo=",
  },
]

const html = `<p>Examples of ownership and <code>msg_sender</code> in Sway</p>
<pre><code>src/
├── errors.sw
└── main.sw
</code></pre>
<p><code>main.sw</code></p>
<pre><code class="language-rust">
contract;

<span class="hljs-keyword">mod</span> errors;

<span class="hljs-keyword">use</span> std::auth::{msg_sender};
<span class="hljs-keyword">use</span> ::errors::{AccessControlError, InitError};


<span class="hljs-comment">// configurable {</span>
<span class="hljs-comment">//     OWNER: Identity = Identity::Address(Address::from(0x0000000000000000000000000000000000000000000000000000000000000000)),</span>
<span class="hljs-comment">// }</span>

storage {
    owner: <span class="hljs-type">Option</span>&lt;Identity&gt; = <span class="hljs-type">Option</span>::<span class="hljs-literal">None</span>,
}

abi MyContract {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">init</span>();

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt;;

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(id: Identity);
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">init</span>() {
        <span class="hljs-title function_ invoke__">require</span>(storage.owner.<span class="hljs-title function_ invoke__">is_none</span>(), InitError::CannotReinitialize);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(sender);
    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">owner</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;Identity&gt; {
        storage.owner
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">set_owner</span>(id: Identity) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = <span class="hljs-title function_ invoke__">msg_sender</span>();
        <span class="hljs-title function_ invoke__">require</span>(sender.<span class="hljs-title function_ invoke__">unwrap</span>() == storage.owner.<span class="hljs-title function_ invoke__">unwrap</span>(), AccessControlError::UnauthorizedError);
        storage.owner = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(id);
    }
}
</code></pre>
<p><code>errors.sw</code></p>
<pre><code class="language-rust">library;

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">AccessControlError</span> {
    UnauthorizedError: (),
}

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">InitError</span> {
    CannotReinitialize: (),
}
</code></pre>
`

export default html
