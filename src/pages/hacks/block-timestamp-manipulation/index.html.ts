// metadata
export const version = "0.59.0"
export const title = "Block Timestamp Manipulation"
export const description = "An example of a Solidity contract vulnerable to block timestamp manipulation"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "hack",
    "security",
    "block",
    "timestamp",
    "manipulation",
]

export const codes = [
]

const html = `<h3>Vulnerability</h3>
<p><code>block.timestamp</code> can be manipulated by miners with the following constraints</p>
<ul>
<li>it cannot be stamped with an earlier time than its parent</li>
<li>it cannot be too far in the future</li>
</ul>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Don&#39;t use <code>block.timestamp</code> for a source of entropy and random number</li>
</ul>
`

export default html
