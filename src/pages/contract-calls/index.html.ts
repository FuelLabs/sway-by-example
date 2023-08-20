// metadata
export const version = "0.8.13"
export const title = "Calling Other Contracts"
export const description = "Introduction to Sway"
export const codes = [
  {
    fileName: "contract_caller",
    code: "Y29udHJhY3Q7CgpkZXAgYWxpY2U7CnVzZSBhbGljZTo6QWxpY2U7CgphYmkgQm9iIHsKICAgICNbc3RvcmFnZSh3cml0ZSwgcmVhZCldCiAgICBmbiBjb3B5X2FsaWNlc19udW1iZXIoY29udHJhY3RfaWQ6IGIyNTYpIC0+IHU2NDsKfQoKc3RvcmFnZSB7CiAgICBjb3BpZWRfbnVtYmVyOiB1NjQgPSAwLAp9CgppbXBsIEJvYiBmb3IgQ29udHJhY3QgewogICAgI1tzdG9yYWdlKHdyaXRlLCByZWFkKV0KICAgIGZuIGNvcHlfYWxpY2VzX251bWJlcihjb250cmFjdF9pZDogYjI1NikgLT4gdTY0IHsKICAgICAgICAvLyBDYWxsaW5nIG90aGVyIGNvbnRyYWN0cwogICAgICAgIGxldCBhbGljZV9jb250cmFjdCA9IGFiaShBbGljZSwgY29udHJhY3RfaWQpOwogICAgICAgIHN0b3JhZ2UuY29waWVkX251bWJlciA9IGFsaWNlX2NvbnRyYWN0LmdldF9udW1iZXIoKTsKICAgICAgICByZXR1cm4gc3RvcmFnZS5jb3BpZWRfbnVtYmVyOwogICAgfQp9Cg==",
  },
  {
    fileName: "interface",
    code: "Y29udHJhY3Q7CgphYmkgQWxpY2UgewogICAgI1tzdG9yYWdlKHJlYWQpXQogICAgZm4gZ2V0X251bWJlcigpIC0+IHU2NDsKfQoKc3RvcmFnZSB7CiAgICBmYXZvdXJpdGVfbnVtYmVyOiB1NjQgPSA0MiwKfQoKaW1wbCBBbGljZSBmb3IgQ29udHJhY3QgewogICAgI1tzdG9yYWdlKHJlYWQpXQogICAgZm4gZ2V0X251bWJlcigpIC0+IHU2NCB7CiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuZmF2b3VyaXRlX251bWJlcjsKICAgIH0KfQo=",
  },
]

const html = `<p>Contract to contract calls can simply be done by importing the callee&#39;s <code>abi</code> and calling the desired functions.</p>
<p><code>main.sw</code></p>
<pre><code class="language-rust">contract;

dep alice;
<span class="hljs-keyword">use</span> alice::Alice;

abi Bob {
    <span class="hljs-meta">#[storage(write, read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">copy_alices_number</span>(contract_id: b256) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

storage {
    copied_number: <span class="hljs-type">u64</span> = <span class="hljs-number">0</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Bob</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(write, read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">copy_alices_number</span>(contract_id: b256) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-comment">// Calling other contracts</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">alice_contract</span> = <span class="hljs-title function_ invoke__">abi</span>(Alice, contract_id);
        storage.copied_number = alice_contract.<span class="hljs-title function_ invoke__">get_number</span>();
        <span class="hljs-keyword">return</span> storage.copied_number;
    }
}
</code></pre>
<p><code>interface.sw</code></p>
<pre><code class="language-rust">contract;

abi Alice {
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_number</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

storage {
    favourite_number: <span class="hljs-type">u64</span> = <span class="hljs-number">42</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Alice</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_number</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">return</span> storage.favourite_number;
    }
}
</code></pre>
`

export default html
