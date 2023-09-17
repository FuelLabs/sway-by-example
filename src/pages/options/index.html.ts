// metadata
export const version = "0.8.13"
export const title = "Options"
export const description = "Options in Sway"
export const codes = [
  {
    fileName: "options",
    code: "Y29udHJhY3Q7CgovLyBPcHRpb248VD4gPSBTb21lKFQpIHwgTm9uZQoKYWJpIE15Q29udHJhY3QgewogICAgZm4gdGVzdF9mdW5jKCkgLT4gKE9wdGlvbjxib29sPiwgT3B0aW9uPGJvb2w+LCBPcHRpb248Ym9vbD4pOwp9CgppbXBsIE15Q29udHJhY3QgZm9yIENvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+IChPcHRpb248Ym9vbD4sIE9wdGlvbjxib29sPiwgT3B0aW9uPGJvb2w+KSB7CiAgICAgICAgbGV0IGxpa2VkID0gT3B0aW9uOjpTb21lKHRydWUpOwogICAgICAgIGxldCBkaXNsaWtlZCA9IE9wdGlvbjo6U29tZShmYWxzZSk7CiAgICAgICAgbGV0IG5vbmUgPSBPcHRpb246Ok5vbmU7CiAgICAgICAgKGxpa2VkLCBkaXNsaWtlZCwgbm9uZSkKICAgIH0KfQo=",
  },
]

const html = `<p>Examples of options in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Option&lt;T&gt; = Some(T) | None</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">Option</span>&lt;<span class="hljs-type">bool</span>&gt;, <span class="hljs-type">Option</span>&lt;<span class="hljs-type">bool</span>&gt;, <span class="hljs-type">Option</span>&lt;<span class="hljs-type">bool</span>&gt;);
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">Option</span>&lt;<span class="hljs-type">bool</span>&gt;, <span class="hljs-type">Option</span>&lt;<span class="hljs-type">bool</span>&gt;, <span class="hljs-type">Option</span>&lt;<span class="hljs-type">bool</span>&gt;) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">liked</span> = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-literal">true</span>);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">disliked</span> = <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-literal">false</span>);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">none</span> = <span class="hljs-type">Option</span>::<span class="hljs-literal">None</span>;
        (liked, disliked, none)
    }
}
</code></pre>
`

export default html
