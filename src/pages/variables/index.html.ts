// metadata
export const version = "0.59.0"
export const title = "Variables"
export const description = "Variables in Sway"

export const tempFileName = "variables.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=26803ea06904a41f2c03a6be18f01cdd"

export const keywords = [
    "variables",
    "variable",
    "local",
    "global",
    "state",
    "data",
]

export const codes = [
    {
        fileName: "variables.rs",
        code: "Y29udHJhY3Q7CgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiB1NjQ7Cn0KCmltcGwgTXlDb250cmFjdCBmb3IgQ29udHJhY3QgewogICAgZm4gdGVzdF9mdW5jKCkgLT4gdTY0IHsKICAgICAgICAvLyBJbW11dGFibGUKICAgICAgICAvLyAwIDw9IHU2NCA8PSAyKio2NCAtIDEKICAgICAgICBsZXQgeCA9IDU7CiAgICAgICAgLy8gQ2Fubm90IHJlLWFzc2lnbiB4IHRvIGFub3RoZXIgdmFsdWUKICAgICAgICAvLyB4ID0gNjsKCiAgICAgICAgLy8gTXV0YWJsZQogICAgICAgIGxldCBtdXQgeSA9IDU7CiAgICAgICAgeSA9IDY7CgogICAgICAgIC8vIFR5cGUgYW5ub3RhdGlvbnMKICAgICAgICBsZXQgaTogdTMyID0gMTIzOwoKICAgICAgICB5CiAgICB9Cn0K",
    },
]

const html = `<p>Examples of variables in Sway</p>
<pre><code class="language-rust">contract;

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-comment">// Immutable</span>
        <span class="hljs-comment">// 0 &lt;= u64 &lt;= 2**64 - 1</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">x</span> = <span class="hljs-number">5</span>;
        <span class="hljs-comment">// Cannot re-assign x to another value</span>
        <span class="hljs-comment">// x = 6;</span>

        <span class="hljs-comment">// Mutable</span>
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">y</span> = <span class="hljs-number">5</span>;
        y = <span class="hljs-number">6</span>;

        <span class="hljs-comment">// Type annotations</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">i</span>: <span class="hljs-type">u32</span> = <span class="hljs-number">123</span>;

        y
    }
}
</code></pre>`

export default html
