// metadata
export const version = "0.59.0"
export const title = "Signature Replay"
export const description = "An example of a contract vulnerable to signature replay attack"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "hack",
    "security",
    "cryptography",
    "signature",
    "replay",
]

export const codes = [
]

const html = `<p>Signing messages off-chain and having a contract that requires that signature before executing
a function is a useful technique.</p>
<p>For example this technique is used to:</p>
<ul>
<li>reduce number of transaction on chain</li>
<li>gas-less transaction, called <code>meta transaction</code></li>
</ul>
<h3>Vulnerability</h3>
<p>Same signature can be used multiple times to execute a function. This can be harmful
if the signer&#39;s intention was to approve a transaction once.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<p>Sign messages with <code>nonce</code> and address of the contract.</p>
<pre><code class="language-rust">
</code></pre><pre><code class="language-rust">
</code></pre>`

export default html
