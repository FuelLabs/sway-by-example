// metadata
export const version = "0.59.0"
export const title = "Gas Saving Techniques"
export const description = "Some gas saving techniques"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "gas",
    "golf",
]

export const codes = [
]

const html = `<p>Some gas saving techniques.</p>
<ul>
<li>Replacing <code>memory</code> with <code>calldata</code></li>
<li>Loading state variable to memory</li>
<li>Replace for loop <code>i++</code> with <code>++i</code></li>
<li>Caching array elements</li>
<li>Short circuit</li>
</ul>
<pre><code class="language-rust">
</code></pre>`

export default html
