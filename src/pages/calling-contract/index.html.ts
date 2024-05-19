// metadata
export const version = "0.59.0"
export const title = "Calling Other Contract"
export const description =
  "In Solidity, contract can call other contracts in several ways"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
  "calling",
  "other",
  "contract",
  "contracts",
  "call",
  "function",
  "functions",
]

export const codes = []

const html = `<p>Contract can call other contracts in 2 ways.</p>
<p>The easiest way to is to just call it, like <code>A.foo(x, y, z)</code>.</p>
<p>Another way to call other contracts is to use the low-level <code>call</code>.</p>
<p>This method is not recommended.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
