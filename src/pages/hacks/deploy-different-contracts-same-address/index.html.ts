// metadata
export const version = "0.59.0"
export const title = "Deploy Different Contracts at the Same Address"
export const description =
  "An example of a Solidity contract vulnerable to deploy different contracts at the same address"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
  "hack",
  "security",
  "deploy",
  "salt",
  "create",
  "create2",
  "different",
  "contract",
  "same",
  "address",
]

export const codes = []

const html = `<p>Contract address deployed with <code>create</code> is computed in the following way.</p>
<pre><code>contract address = last 20 bytes of sha3(rlp_encode(sender, nonce))
</code></pre><p>where <code>sender</code> is the address of the deployer and <code>nonce</code> is the number of transactions sent by <code>sender</code>.</p>
<p>Hence it is possible to deploy different contracts at the same address if we can somehow reset the <code>nonce</code>.</p>
<p>Below is an example of how a DAO can be hacked.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
