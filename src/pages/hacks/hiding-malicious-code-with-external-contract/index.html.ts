// metadata
export const version = "0.59.0"
export const title = "Hiding Malicious Code with External Contract"
export const description =
  "An example of exploit where malicious code is hidden in an external contract in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
  "hack",
  "security",
  "hide",
  "hiding",
  "malicious",
  "code",
  "external",
  "contract",
]

export const codes = []

const html = `<h3>Vulnerability</h3>
<p>In Solidity any address can be casted into specific contract,
even if the contract at the address is not the one being casted.</p>
<p>This can be exploited to hide malicious code. Let&#39;s see how.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Initialize a new contract inside the constructor</li>
<li>Make the address of external contract <code>public</code> so that the code of the
external contract can be reviewed</li>
</ul>
<pre><code class="language-rust">Bar public bar;

<span class="hljs-title function_ invoke__">constructor</span>() public {
    bar = new <span class="hljs-title function_ invoke__">Bar</span>();
}
</code></pre>`

export default html
