// metadata
export const version = "0.59.0"
export const title = "Storage Map"
export const description = "Storage map in Sway"

export const tempFileName = "storage_map.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=d7bec2e59873b43faf462c4168f362c9"

export const keywords = [
    "storage",
    "map",
    "maps",
]

export const codes = [
    {
        fileName: "storage_map.rs",
        code: "Y29udHJhY3Q7Cgp1c2Ugc3RkOjp7CiAgICBoYXNoOjpIYXNoLAogICAgYXV0aDo6bXNnX3NlbmRlcgp9OwoKLy8gU3RvcmFnZU1hcAovLyAtIGJhc2ljIChpbnNlcnQsIHJlYWQsIHVwZGF0ZSwgcmVtb3ZlKQovLyAtIG5lc3RlZAoKYWJpIE15Q29udHJhY3QgewogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIGJhc2ljX2V4YW1wbGVzKCk7CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIG5lc3RlZF9leGFtcGxlcygpOwp9CgpzdG9yYWdlIHsKICAgIGJhbGFuY2Vfb2Y6IFN0b3JhZ2VNYXA8SWRlbnRpdHksIHU2ND4gPSBTdG9yYWdlTWFwIHt9LAogICAgYWxsb3dhbmNlOiBTdG9yYWdlTWFwPChJZGVudGl0eSwgSWRlbnRpdHkpLCB1NjQ+ID0gU3RvcmFnZU1hcCB7fSwKfQoKY29uc3QgQUREUjogYjI1NiA9IDB4MTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDsKCmltcGwgTXlDb250cmFjdCBmb3IgQ29udHJhY3QgewogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIGJhc2ljX2V4YW1wbGVzKCkgewogICAgICAgIGxldCBzZW5kZXIgPSBtc2dfc2VuZGVyKCkudW53cmFwKCk7CgogICAgICAgIC8vIEluc2VydAogICAgICAgIHN0b3JhZ2UuYmFsYW5jZV9vZi5pbnNlcnQoc2VuZGVyLCAxMjMpOwogICAgICAgIC8vIFJlYWQKICAgICAgICBsZXQgYmFsID0gc3RvcmFnZS5iYWxhbmNlX29mLmdldChzZW5kZXIpLnRyeV9yZWFkKCkudW53cmFwX29yKDApOwogICAgICAgIC8vIFVwZGF0ZQogICAgICAgIHN0b3JhZ2UuYmFsYW5jZV9vZi5pbnNlcnQoc2VuZGVyLCBiYWwgKyAxKTsKICAgICAgICAvLyBSZW1vdmUKICAgICAgICBzdG9yYWdlLmJhbGFuY2Vfb2YucmVtb3ZlKHNlbmRlcik7CiAgICB9CgogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIG5lc3RlZF9leGFtcGxlcygpIHsKICAgICAgICBsZXQgc2VuZGVyID0gbXNnX3NlbmRlcigpLnVud3JhcCgpOwogICAgICAgIGxldCBzcGVuZGVyID0gSWRlbnRpdHk6OkFkZHJlc3MoQWRkcmVzczo6ZnJvbShBRERSKSk7CgogICAgICAgIC8vIFJlYWQKICAgICAgICBsZXQgdmFsID0gc3RvcmFnZS5hbGxvd2FuY2UuZ2V0KChzZW5kZXIsIHNwZW5kZXIpKS50cnlfcmVhZCgpLnVud3JhcF9vcigwKTsKICAgICAgICAvLyBJbnNlcnQgLyB1cGRhdGUKICAgICAgICBzdG9yYWdlLmFsbG93YW5jZS5pbnNlcnQoKHNlbmRlciwgc3BlbmRlciksIHZhbCArIDEpOwogICAgICAgIC8vIFJlbW92ZQogICAgICAgIHN0b3JhZ2UuYWxsb3dhbmNlLnJlbW92ZSgoc2VuZGVyLCBzcGVuZGVyKSk7CiAgICB9Cn0K",
    },
]

const html = `<p>Examples of storage map in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-keyword">use</span> std::{
    hash::Hash,
    auth::msg_sender
};

<span class="hljs-comment">// StorageMap</span>
<span class="hljs-comment">// - basic (insert, read, update, remove)</span>
<span class="hljs-comment">// - nested</span>

abi MyContract {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">basic_examples</span>();

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">nested_examples</span>();
}

storage {
    balance_of: StorageMap&lt;Identity, <span class="hljs-type">u64</span>&gt; = StorageMap {},
    allowance: StorageMap&lt;(Identity, Identity), <span class="hljs-type">u64</span>&gt; = StorageMap {},
}

<span class="hljs-keyword">const</span> ADDR: b256 = <span class="hljs-number">0x1000000000000000000000000000000000000000000000000000000000000000</span>;

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">basic_examples</span>() {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();

        <span class="hljs-comment">// Insert</span>
        storage.balance_of.<span class="hljs-title function_ invoke__">insert</span>(sender, <span class="hljs-number">123</span>);
        <span class="hljs-comment">// Read</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">bal</span> = storage.balance_of.<span class="hljs-title function_ invoke__">get</span>(sender).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap_or</span>(<span class="hljs-number">0</span>);
        <span class="hljs-comment">// Update</span>
        storage.balance_of.<span class="hljs-title function_ invoke__">insert</span>(sender, bal + <span class="hljs-number">1</span>);
        <span class="hljs-comment">// Remove</span>
        storage.balance_of.<span class="hljs-title function_ invoke__">remove</span>(sender);
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">nested_examples</span>() {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        <span class="hljs-keyword">let</span> <span class="hljs-variable">spender</span> = Identity::<span class="hljs-title function_ invoke__">Address</span>(Address::<span class="hljs-title function_ invoke__">from</span>(ADDR));

        <span class="hljs-comment">// Read</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">val</span> = storage.allowance.<span class="hljs-title function_ invoke__">get</span>((sender, spender)).<span class="hljs-title function_ invoke__">try_read</span>().<span class="hljs-title function_ invoke__">unwrap_or</span>(<span class="hljs-number">0</span>);
        <span class="hljs-comment">// Insert / update</span>
        storage.allowance.<span class="hljs-title function_ invoke__">insert</span>((sender, spender), val + <span class="hljs-number">1</span>);
        <span class="hljs-comment">// Remove</span>
        storage.allowance.<span class="hljs-title function_ invoke__">remove</span>((sender, spender));
    }
}
</code></pre>`

export default html
