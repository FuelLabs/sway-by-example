// metadata
export const version = "0.59.0"
export const title = "Accessing Private Data"
export const description = "An example of accessing private data from a Solidity smart contract"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "hack",
    "security",
    "access",
    "accessing",
    "private",
    "data",
    "storage",
]

export const codes = [
]

const html = `<h3>Vulnerability</h3>
<p>All data on a smart contract can be read.</p>
<p>Let&#39;s see how we can read <code>private</code> data. In the process you will learn how Solidity stores state variables.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Don&#39;t store sensitive information on the blockchain.</li>
</ul>
`

export default html
