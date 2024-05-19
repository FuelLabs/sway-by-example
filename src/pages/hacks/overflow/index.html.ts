// metadata
export const version = "0.59.0"
export const title = "Arithmetic Overflow and Underflow"
export const description =
  "An example of hacking Solidity with arithmetic overflow / underflow"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["hack", "security", "arithmetic", "overflow", "underflow"]

export const codes = []

const html = `<h3>Vulnerability</h3>
<h5>Solidity &lt; 0.8</h5>
<p>Integers in Solidity overflow / underflow without any errors</p>
<h5>Solidity &gt;= 0.8</h5>
<p>Default behaviour of Solidity 0.8 for overflow / underflow is to throw an error.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li><p>Use <a href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol" target="__blank">SafeMath</a> to will prevent arithmetic overflow and underflow</p>
</li>
<li><p>Solidity 0.8 defaults to throwing an error for overflow / underflow</p>
</li>
</ul>
`

export default html
