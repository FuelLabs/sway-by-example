// metadata
export const version = "0.59.0"
export const title = "Phishing with tx.origin"
export const description = "An example of phishing with tx.origin in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "hack",
    "security",
    "phishing",
    "tx.origin",
]

export const codes = [
]

const html = `<h3>What&#39;s the difference between <code>msg.sender</code> and <code>tx.origin</code>?</h3>
<p>If contract A calls B, and B calls C, in C <code>msg.sender</code> is B and <code>tx.origin</code> is A.</p>
<h3>Vulnerability</h3>
<p>A malicious contract can deceive the owner of a contract into calling a
function that only the owner should be able to call.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<p>Use <code>msg.sender</code> instead of <code>tx.origin</code></p>
<pre><code class="language-rust">function <span class="hljs-title function_ invoke__">transfer</span>(address payable _to, uint256 _amount) public {
  <span class="hljs-title function_ invoke__">require</span>(msg.sender == owner, <span class="hljs-string">"Not owner"</span>);

  (<span class="hljs-type">bool</span> sent, ) = _to.call{ value: _amount }(<span class="hljs-string">""</span>);
  <span class="hljs-title function_ invoke__">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
}
</code></pre>`

export default html
