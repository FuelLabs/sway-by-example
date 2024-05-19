// metadata
export const version = "0.59.0"
export const title = "Visibility"
export const description =
  "An example of external, internal, private and public functions in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
  "visibility",
  "function",
  "functions",
  "internal",
  "private",
  "public",
  "external",
]

export const codes = []

const html = `<p>Functions and state variables have to declare whether they are accessible by other contracts.</p>
<p>Functions can be declared as</p>
<ul>
<li><code>public</code> - any contract and account can call</li>
<li><code>private</code> - only inside the contract that defines the function</li>
<li><code>internal</code>- only inside contract that inherits an <code>internal</code> function</li>
<li><code>external</code> - only other contracts and accounts can call</li>
</ul>
<p>State variables can be declared as <code>public</code>, <code>private</code>, or <code>internal</code> but not <code>external</code>.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
