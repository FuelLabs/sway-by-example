// metadata
export const version = "0.59.0"
export const title = "Import"
export const description = "Learn how to import other Solidity files"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["import"]

export const codes = []

const html = `<p>You can import local and external files in Solidity.</p>
<h3>Local</h3>
<p>Here is our folder structure.</p>
<pre><code>├── Import.sol
└── Foo.sol
</code></pre><p>Foo.sol</p>
<pre><code class="language-rust">
</code></pre><p>Import.sol</p>
<pre><code class="language-rust">
</code></pre><h3>External</h3>
<p>You can also import from <a href="https://github.com">GitHub</a> by simply copying the url</p>
<pre><code class="language-rust"><span class="hljs-comment">// https://github.com/owner/repo/blob/branch/path/to/Contract.sol</span>
import <span class="hljs-string">"https://github.com/owner/repo/blob/branch/path/to/Contract.sol"</span>;

<span class="hljs-comment">// Example import ECDSA.sol from openzeppelin-contract repo, release-v4.5 branch</span>
<span class="hljs-comment">// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol</span>
import <span class="hljs-string">"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol"</span>;
</code></pre>`

export default html
