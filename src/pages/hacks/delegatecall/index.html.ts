// metadata
export const version = "0.59.0"
export const title = "Delegatecall"
export const description = "An example of exploits using delegatecall in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "hack",
    "security",
    "delegatecall",
]

export const codes = [
]

const html = `<h3>Vulnerability</h3>
<p><code>delegatecall</code> is tricky to use and wrong usage or incorrect understanding
can lead to devastating results.</p>
<p>You must keep 2 things in mind when using <code>delegatecall</code></p>
<ol>
<li><code>delegatecall</code> preserves context (storage, caller, etc...)</li>
<li>storage layout must be the same for the contract calling <code>delegatecall</code> and the contract getting called</li>
</ol>
<pre><code class="language-rust">
</code></pre><p>Here is another example.</p>
<p>You will need to understand how Solidity stores
state variables before you can understand this exploit.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Use stateless <code>Library</code></li>
</ul>
`

export default html
