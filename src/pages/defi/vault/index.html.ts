// metadata
export const version = "0.59.0"
export const title = "Vault"
export const description = "Vault"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "defi",
    "vault",
]

export const codes = [
]

const html = `<p>Simple example of vault contract, commonly used in DeFi protocols.</p>
<p>Most vaults on the mainnet are more complex. Here we will focus on the math for calculating shares to mint on deposit and the amount of token to withdraw.</p>
<h3>How the contract works</h3>
<ol>
<li>Some amount of shares are minted when an user deposits.</li>
<li>The DeFi protocol would use the users&#39; deposits to generate yield (somehow).</li>
<li>User burn shares to withdraw his tokens + yield.</li>
</ol>
<pre><code class="language-rust">
</code></pre>`

export default html
