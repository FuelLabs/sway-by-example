// metadata
export const version = "0.59.0"
export const title = "Sending Ether (transfer, send, call)"
export const description = "An example of sending Ether in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "sending",
    "send",
    "ether",
    "eth",
    "transfer",
    "send",
    "call",
    "fallback",
    "receive",
    "payable",
    "function",
    "functions",
]

export const codes = [
]

const html = `<h3>How to send Ether?</h3>
<p>You can send Ether to other contracts by</p>
<ul>
<li><code>transfer</code> (2300 gas, throws error)</li>
<li><code>send</code> (2300 gas, returns bool)</li>
<li><code>call</code> (forward all gas or set gas, returns bool)</li>
</ul>
<h3>How to receive Ether?</h3>
<p>A contract receiving Ether must have at least one of the functions below</p>
<ul>
<li><code>receive() external payable</code></li>
<li><code>fallback() external payable</code></li>
</ul>
<p><code>receive()</code> is called if <code>msg.data</code> is empty, otherwise <code>fallback()</code> is called.</p>
<h3>Which method should you use?</h3>
<p><code>call</code> in combination with re-entrancy guard is the recommended method to use after December 2019.</p>
<p>Guard against re-entrancy by</p>
<ul>
<li>making all state changes before calling other contracts</li>
<li>using re-entrancy guard modifier</li>
</ul>
<pre><code class="language-rust">
</code></pre>`

export default html
