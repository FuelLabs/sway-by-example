// metadata
export const version = "0.37"
export const title = "Tuples"
export const description = "Tuples in Sway"
export const codes = [
    {
        fileName: "tuples",
        code: "Y29udHJhY3Q7CgovLyBUdXBsZXMKLy8gLSBDcmVhdGUsIHJlYWQsIHVwZGF0ZQovLyAtIE5lc3RlZAovLyAtIERlc3RydWN0dXJlIGFuZCAiXyIKCmFiaSBNeUNvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+ICh1NjQsIChzdHJbNF0sIGJvb2wpKTsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiAodTY0LCAoc3RyWzRdLCBib29sKSkgewogICAgICAgIGxldCBtdXQgdHVwbGU6ICh1NjQsIGJvb2wsIHU2NCkgPSAoMSwgZmFsc2UsIDIpOwogICAgICAgIHR1cGxlLjAgPSAxMjM7CiAgICAgICAgbGV0IHggPSB0dXBsZS4wOwoKICAgICAgICBsZXQgbmVzdGVkID0gKDEsICgiRnVlbCIsIGZhbHNlKSk7CiAgICAgICAgbGV0IHMgPSBuZXN0ZWQuMS4wOwoKICAgICAgICBsZXQgKG4sIChzLCBiKSkgPSBuZXN0ZWQ7CiAgICAgICAgLy8gU2tpcCB2YXJpYWJsZXMgZm9yIDAgYW5kIDEuMSAKICAgICAgICBsZXQgKF8sIChzLCBfKSkgPSBuZXN0ZWQ7CgogICAgICAgIG5lc3RlZAogICAgfQp9Cg==",
    },
]

const html = `<p>Examples of tuples in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Tuples</span>
<span class="hljs-comment">// - Create, read, update</span>
<span class="hljs-comment">// - Nested</span>
<span class="hljs-comment">// - Destructure and "_"</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, (<span class="hljs-type">str</span>[<span class="hljs-number">4</span>], <span class="hljs-type">bool</span>));
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, (<span class="hljs-type">str</span>[<span class="hljs-number">4</span>], <span class="hljs-type">bool</span>)) {
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">tuple</span>: (<span class="hljs-type">u64</span>, <span class="hljs-type">bool</span>, <span class="hljs-type">u64</span>) = (<span class="hljs-number">1</span>, <span class="hljs-literal">false</span>, <span class="hljs-number">2</span>);
        tuple.<span class="hljs-number">0</span> = <span class="hljs-number">123</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">x</span> = tuple.<span class="hljs-number">0</span>;

        <span class="hljs-keyword">let</span> <span class="hljs-variable">nested</span> = (<span class="hljs-number">1</span>, (<span class="hljs-string">"Fuel"</span>, <span class="hljs-literal">false</span>));
        <span class="hljs-keyword">let</span> <span class="hljs-variable">s</span> = nested.<span class="hljs-number">1.0</span>;

        <span class="hljs-keyword">let</span> (n, (s, b)) = nested;
        <span class="hljs-comment">// Skip variables for 0 and 1.1 </span>
        <span class="hljs-keyword">let</span> (_, (s, _)) = nested;

        nested
    }
}
</code></pre>
`

export default html
