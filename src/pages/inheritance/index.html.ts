// metadata
export const version = "0.59.0"
export const title = "Inheritance"
export const description = "Example of inheritance in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
  "inheritance",
  "super",
  "override",
  "virtual",
  "is",
  "contract",
  "contracts",
]

export const codes = []

const html = `<p>Solidity supports multiple inheritance. Contracts can inherit other contract by using the <code>is</code> keyword.</p>
<p>Function that is going to be overridden by a child contract must be declared as <code>virtual</code>.</p>
<p>Function that is going to override a parent function must use the keyword <code>override</code>.</p>
<p>Order of inheritance is important.</p>
<p>You have to list the parent contracts in the order from “most base-like” to “most derived”.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
