// metadata
export const version = "0.37"
export const title = "Control Flow - If Statements"
export const description = "If statements in Sway"
export const codes = [
  {
    fileName: "control_flow_if",
    code: "Y29udHJhY3Q7CgovLyBpZiwgZWxzZSBpZiwgZWxzZQovLyBpZiBsZXQKCmFiaSBNeUNvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYyh4OiB1NjQpIC0+IHU2NDsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoeDogdTY0KSAtPiB1NjQgewogICAgICAgIC8vIGlmLCBlbHNlIGlmLCBlbHNlCiAgICAgICAgaWYgeCA8IDEwIHsKICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nCiAgICAgICAgfSBlbHNlIGlmIHggPCAyMCB7CiAgICAgICAgICAgIC8vIGRvIHNvbWV0aGluZyBlbHNlCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIGVsc2UKICAgICAgICB9CgogICAgICAgIC8vIGlmIGxldAogICAgICAgIGxldCBtdXQgeSA9IDA7CiAgICAgICAgaWYgeCA8IDEwIHsKICAgICAgICAgICAgeSA9IHggKiB4OwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHkgPSB4ICsgMTsKICAgICAgICB9CgogICAgICAgIC8vIEFzc2lnbiB0aGUgb3V0Y29tZSBvZiBpZiBzdGF0ZW1lbnRzIHRvIHRoZSB2YXJpYWJsZSB5CiAgICAgICAgbGV0IHkgPSBpZiB4IDwgMTAgewogICAgICAgICAgICAvLyBkbyBzb21ldGhpbmcsIGZvciBleGFtcGxlCiAgICAgICAgICAgIHggKiB4CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIGVsc2UsIGZvciBleGFtcGxlCiAgICAgICAgICAgIHggKyAxCiAgICAgICAgfTsgLy8gTm90aWNlIHNlbWljb2xvbiBoZXJlCgogICAgICAgIHkKICAgIH0KfQo=",
  },
]

const html = `<p>Examples of if statements in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// if, else if, else</span>
<span class="hljs-comment">// if let</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>(x: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>(x: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-comment">// if, else if, else</span>
        <span class="hljs-keyword">if</span> x &lt; <span class="hljs-number">10</span> {
            <span class="hljs-comment">// do something</span>
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> x &lt; <span class="hljs-number">20</span> {
            <span class="hljs-comment">// do something else</span>
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-comment">// do something else</span>
        }

        <span class="hljs-comment">// if let</span>
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">y</span> = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">if</span> x &lt; <span class="hljs-number">10</span> {
            y = x * x;
        } <span class="hljs-keyword">else</span> {
            y = x + <span class="hljs-number">1</span>;
        }

        <span class="hljs-comment">// Assign the outcome of if statements to the variable y</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">y</span> = <span class="hljs-keyword">if</span> x &lt; <span class="hljs-number">10</span> {
            <span class="hljs-comment">// do something, for example</span>
            x * x
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-comment">// do something else, for example</span>
            x + <span class="hljs-number">1</span>
        }; <span class="hljs-comment">// Notice semicolon here</span>

        y
    }
}
</code></pre>
`

export default html
