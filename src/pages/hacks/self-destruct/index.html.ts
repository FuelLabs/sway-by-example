// metadata
export const version = "0.59.0"
export const title = "Self Destruct"
export const description = "An example of how to delete your smart contract by calling seldestruct in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "hack",
    "security",
    "selfdestruct",
]

export const codes = [
]

const html = `<p>Contracts can be deleted from the blockchain by calling <code>selfdestruct</code>.</p>
<p><code>selfdestruct</code> sends all remaining Ether stored in the contract to a
designated address.</p>
<h3>Vulnerability</h3>
<p>A malicious contract can use <code>selfdestruct</code> to
force sending Ether to any contract.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<p>Don&#39;t rely on <code>address(this).balance</code></p>
<pre><code class="language-rust">
</code></pre>`

export default html
