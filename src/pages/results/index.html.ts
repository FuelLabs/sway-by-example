// metadata
export const version = "0.8.13"
export const title = "Results"
export const description = "Results in Sway"
export const codes = [
    {
        fileName: "results",
        code: "Y29udHJhY3Q7CgovLyBSZXN1bHQ8VCwgRT4gPSBPayhUKSB8IEVycihFKQoKZW51bSBNYXRoRXJyb3IgewogICAgRGl2QnlaZXJvOiAoKSwKfQoKZm4gZGl2KHg6IHU2NCwgeTogdTY0KSAtPiBSZXN1bHQ8dTY0LCBNYXRoRXJyb3I+IHsKICAgIGlmIHkgPT0gMCB7CiAgICAgICAgcmV0dXJuIFJlc3VsdDo6RXJyKE1hdGhFcnJvcjo6RGl2QnlaZXJvKTsKICAgIH0KCiAgICBSZXN1bHQ6Ok9rKHggLyB5KQp9CgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Rpdih4OiB1NjQsIHk6IHU2NCkgLT4gdTY0Owp9CgppbXBsIE15Q29udHJhY3QgZm9yIENvbnRyYWN0IHsKICAgIGZuIHRlc3RfZGl2KHg6IHU2NCwgeTogdTY0KSAtPiB1NjQgewogICAgICAgIGxldCByZXMgPSBkaXYoeCwgeSk7CiAgICAgICAgbWF0Y2ggcmVzIHsKICAgICAgICAgICAgUmVzdWx0OjpPayh2YWwpID0+IHZhbCwKICAgICAgICAgICAgUmVzdWx0OjpFcnIoZXJyKSA9PiByZXZlcnQoMCksCiAgICAgICAgfQogICAgfQp9Cg==",
    },
]

const html = `<p>Examples of results in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Result&lt;T, E&gt; = Ok(T) | Err(E)</span>

<span class="hljs-keyword">enum</span> <span class="hljs-title class_">MathError</span> {
    DivByZero: (),
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">div</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Result</span>&lt;<span class="hljs-type">u64</span>, MathError&gt; {
    <span class="hljs-keyword">if</span> y == <span class="hljs-number">0</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-type">Result</span>::<span class="hljs-title function_ invoke__">Err</span>(MathError::DivByZero);
    }

    <span class="hljs-type">Result</span>::<span class="hljs-title function_ invoke__">Ok</span>(x / y)
}

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_div</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_div</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">res</span> = <span class="hljs-title function_ invoke__">div</span>(x, y);
        <span class="hljs-keyword">match</span> res {
            <span class="hljs-type">Result</span>::<span class="hljs-title function_ invoke__">Ok</span>(val) =&gt; val,
            <span class="hljs-type">Result</span>::<span class="hljs-title function_ invoke__">Err</span>(err) =&gt; <span class="hljs-title function_ invoke__">revert</span>(<span class="hljs-number">0</span>),
        }
    }
}
</code></pre>
`

export default html
