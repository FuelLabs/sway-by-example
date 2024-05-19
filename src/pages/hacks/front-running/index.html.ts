// metadata
export const version = "0.59.0"
export const title = "Front Running"
export const description =
  "An example of a Solidity contract vulnerable to front running"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["hack", "security", "front", "running"]

export const codes = []

const html = `<h3>Vulnerability</h3>
<p>Transactions take some time before they are mined. An attacker can watch the transaction pool
and send a transaction, have it included in a block before the original transaction.
This mechanism can be abused to re-order transactions to the attacker&#39;s advantage.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>use commit-reveal scheme (<a href="https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8">https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8</a>)</li>
<li>use submarine send (<a href="https://libsubmarine.org/">https://libsubmarine.org/</a>)</li>
</ul>
<h3>Commit-Reveal Schemes</h3>
<p>A commitment scheme is a cryptographic algorithm used to allow someone to commit to a value while keeping it hidden from others with the ability to reveal it later. The values in a commitment scheme are binding, meaning that no one can change them once committed. The scheme has two phases: a commit phase in which a value is chosen and specified, and a reveal phase in which the value is revealed and checked.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
