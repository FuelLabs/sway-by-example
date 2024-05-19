// metadata
export const version = "0.59.0"
export const title = "Echidna"
export const description = "An example of testing contracts with Echidna"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "test",
    "echidna",
]

export const codes = [
]

const html = `<p>Examples of fuzzing with <a href="https://github.com/crytic/echidna">Echidna</a>.</p>
<ol>
<li>Save the solidity contract as <code>TestEchidna.sol</code></li>
<li>In the folder where your contract is stored execute the following command.</li>
</ol>
<pre><code class="language-shell">docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
</code></pre><p>Inside docker, your code will be stored at <code>/code</code>, in the root directory.</p>
<ol start="3">
<li>See the comments below and execute <code>echidna</code> commands.</li>
</ol>
<pre><code class="language-rust">
</code></pre><h3>Testing Time and Sender</h3>
<p>Echidna can fuzz timestamp. Range of timestamp is set in the configuration. Default is 7 days.</p>
<p>Contract callers can also be set in the configuration. Default accounts are</p>
<ul>
<li><code>0x10000</code></li>
<li><code>0x20000</code></li>
<li><code>0x30000</code></li>
</ul>
<pre><code class="language-rust">
</code></pre>`

export default html
