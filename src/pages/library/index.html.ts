// metadata
export const version = "0.59.0"
export const title = "Library"
export const description =
  "Example of how to write and use libraries in your Solidity code"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["library"]

export const codes = []

const html = `<p>Libraries are similar to contracts, but you can&#39;t declare any state variable and
you can&#39;t send ether.</p>
<p>A library is embedded into the contract if all library functions are internal.</p>
<p>Otherwise the library must be deployed and then linked before the contract is deployed.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
