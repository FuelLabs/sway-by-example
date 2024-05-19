// metadata
export const version = "0.59.0"
export const title = "Delegatecall"
export const description = "Example of how to use deletegatecall in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
  "delegatecall",
  "call",
  "contract",
  "contracts",
  "function",
  "functions",
]

export const codes = []

const html = `<p><code>delegatecall</code> is a low level function similar to <code>call</code>.</p>
<p>When contract <code>A</code> executes <code>delegatecall</code> to contract <code>B</code>, <code>B</code>&#39;s code is executed</p>
<p>with contract <code>A</code>&#39;s storage, <code>msg.sender</code> and <code>msg.value</code>.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
