// metadata
export const version = "0.59.0"
export const title = "Data Locations - Storage, Memory and Calldata"
export const description = "Data locations - storage, memory and calldata"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "data",
    "location",
    "locations",
    "storage",
    "memory",
    "calldata",
]

export const codes = [
]

const html = `<p>Variables are declared as either <code>storage</code>, <code>memory</code> or <code>calldata</code> to explicitly
specify the location of the data.</p>
<ul>
<li><code>storage</code> - variable is a state variable (store on blockchain)</li>
<li><code>memory</code> - variable is in memory and it exists while a function is being called</li>
<li><code>calldata</code> - special data location that contains function arguments</li>
</ul>
<pre><code class="language-rust">
</code></pre>`

export default html
