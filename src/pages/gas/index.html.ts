// metadata
export const version = "0.59.0"
export const title = "Gas"
export const description = "Example of gas and gas limit in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "gas",
]

export const codes = [
]

const html = `<h3>How much <code>ether</code> do you need to pay for a transaction?</h3>
<p>You pay <code>gas spent * gas price</code> amount of <code>ether</code>, where</p>
<ul>
<li><code>gas</code> is a unit of computation</li>
<li><code>gas spent</code> is the total amount of <code>gas</code> used in a transaction</li>
<li><code>gas price</code> is how much <code>ether</code> you are willing to pay per <code>gas</code></li>
</ul>
<p>Transactions with higher gas price have higher priority to be included in a block.</p>
<p>Unspent gas will be refunded.</p>
<h3>Gas Limit</h3>
<p>There are 2 upper bounds to the amount of gas you can spend</p>
<ul>
<li><code>gas limit</code> (max amount of gas you&#39;re willing to use for your transaction, set by you)</li>
<li><code>block gas limit</code> (max amount of gas allowed in a block, set by the network)</li>
</ul>
<pre><code class="language-rust">
</code></pre>`

export default html
