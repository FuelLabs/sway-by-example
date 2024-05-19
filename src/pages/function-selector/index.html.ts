// metadata
export const version = "0.59.0"
export const title = "Function Selector"
export const description = "Example of how function selectors are computed"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "function",
    "functions",
    "selector",
    "selectors",
]

export const codes = [
]

const html = `<p>When a function is called, the first 4 bytes of <code>calldata</code> specifies which function to call.</p>
<p>This 4 bytes is called a function selector.</p>
<p>Take for example, this code below. It uses <code>call</code> to execute <code>transfer</code> on a contract at the address <code>addr</code>.</p>
<pre><code class="language-rust">addr.<span class="hljs-title function_ invoke__">call</span>(abi.<span class="hljs-title function_ invoke__">encodeWithSignature</span>(<span class="hljs-string">"transfer(address,uint256)"</span>, <span class="hljs-number">0</span>xSomeAddress, <span class="hljs-number">123</span>))
</code></pre><p>The first 4 bytes returned from <code>abi.encodeWithSignature(....)</code> is the function selector.</p>
<p>Perhaps you can save a tiny amount of gas if you precompute and inline the function selector in your code?</p>
<p>Here is how the function selector is computed.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
