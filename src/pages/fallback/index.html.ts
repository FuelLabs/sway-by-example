// metadata
export const version = "0.59.0"
export const title = "Fallback"
export const description = "Example of how to use fallback in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
  "fallback",
  "function",
  "functions",
  "receive",
  "payable",
  "send",
  "ether",
  "eth",
  "transfer",
]

export const codes = []

const html = `<p><code>fallback</code> is a special function that is executed either when</p>
<ul>
<li>a function that does not exist is called or</li>
<li>Ether is sent directly to a contract but <code>receive()</code> does not exist or <code>msg.data</code> is not empty</li>
</ul>
<p><code>fallback</code> has a 2300 gas limit when called by <code>transfer</code> or <code>send</code>.</p>
<pre><code class="language-rust">
</code></pre><p><code>fallback</code> can optionally take <code>bytes</code> for input and output</p>
<pre><code class="language-rust">
</code></pre>`

export default html
