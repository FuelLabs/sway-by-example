// metadata
export const version = "0.59.0"
export const title = "Vault Inflation"
export const description = "An example of vault inflation"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["hack", "security", "inflation", "erc4626", "vault"]

export const codes = []

const html = `<h3>Vulnerability</h3>
<p>Vault shares can be inflated by donating ERC20 token to the vault.</p>
<p>Attacker can exploit this behavior to steal other user&#39;s deposits.</p>
<h3>Example</h3>
<p>User 0 front runs user 1&#39;s deposit.</p>
<ol>
<li>User 0 deposits <code>1</code>.</li>
<li>User 0 donates <code>100 * 1e18</code>. This inflates the value of each share.</li>
<li>User 1 deposits <code>100 * 1e18</code>. This mints 0 shares to user 1.</li>
<li>User 0 withdraws all <code>200 * 1e18 + 1</code>.</li>
</ol>
<h3>Protections</h3>
<ul>
<li>Min shares -&gt; protects from front running</li>
<li>Internal balance -&gt; protects from donation</li>
<li>Dead shares -&gt; contract is first depositor</li>
<li>Decimal offset (OpenZeppelin ERC4626)</li>
</ul>
<pre><code class="language-rust">
</code></pre>`

export default html
