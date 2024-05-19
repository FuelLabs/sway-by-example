// metadata
export const version = "0.59.0"
export const title = "Uni-Directional Payment Channel"
export const description = "An example of uni-directional payment channels in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "app",
    "application",
    "uni-directional",
    "payment",
    "channel",
    "signature",
    "cryptography",
]

export const codes = [
]

const html = `<p>Payment channels allow participants to repeatedly transfer Ether off chain.</p>
<p>Here is how this contract is used:</p>
<ul>
<li><code>Alice</code> deploys the contract, funding it with some Ether.</li>
<li><code>Alice</code> authorizes a payment by signing a message (off chain) and sends the signature to <code>Bob</code>.</li>
<li><code>Bob</code> claims his payment by presenting the signed message to the smart contract.</li>
<li>If <code>Bob</code> does not claim his payment, <code>Alice</code> get her Ether back after the contract expires</li>
</ul>
<p>This is called a uni-directional payment channel since the payment can go only in a single direction from <code>Alice</code> to <code>Bob</code>.</p>
<pre><code class="language-rust">
</code></pre><pre><code class="language-rust">
</code></pre>`

export default html
