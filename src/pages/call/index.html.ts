// metadata
export const version = "0.59.0"
export const title = "Call"
export const description =
  "In Solidity call is a low level function to interact with other contracts"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["contract", "contracts", "call", "function", "functions"]

export const codes = []

const html = `<p><code>call</code> is a low level function to interact with other contracts.</p>
<p>This is the recommended method to use when you&#39;re just sending Ether via calling the <code>fallback</code> function.</p>
<p>However it is not the recommend way to call existing functions.</p>
<h3>Few reasons why low-level call is not recommended</h3>
<ul>
<li>Reverts are not bubbled up</li>
<li>Type checks are bypassed</li>
<li>Function existence checks are omitted</li>
</ul>
<pre><code class="language-rust">
</code></pre>`

export default html
