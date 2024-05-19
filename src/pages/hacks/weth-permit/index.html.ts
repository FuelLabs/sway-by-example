// metadata
export const version = "0.59.0"
export const title = "WETH Permit"
export const description = "An example of WETH permit hack"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["hack", "security", "weth", "permit"]

export const codes = []

const html = `<h3>Vulnerability</h3>
<p>Most ERC20 have the <code>permit</code> function to approve a spender if a valid signature is provided.</p>
<p>However <code>WETH</code> does not. Surprisingly, when <code>permit</code> is called on <code>WETH</code>, the function call will execute without any errors.</p>
<p>This is because the <code>fallback</code> inside <code>WETH</code> is execute when <code>permit</code> is called.</p>
<h3>Example</h3>
<ol start="0">
<li>Alice gives infinite approval for <code>ERC20Bank</code> to spend <code>WETH</code></li>
<li>Alice calls <code>deposit</code>, deposits 1 WETH into <code>ERC20Bank</code></li>
<li>Attacker calls <code>depositWithPermit</code>, passes an empty signature and transfers all tokens from Alice into <code>ERC20Bank</code>, crediting the attacker for the deposit.</li>
<li>Attacker withdraws all tokens credited to him.</li>
</ol>
<h3>ERC20Bank</h3>
<pre><code class="language-rust">
</code></pre><h3>Exploit</h3>
<pre><code class="language-rust">
</code></pre><h3>Other contracts</h3>
<pre><code class="language-rust">
</code></pre><pre><code class="language-rust">
</code></pre><pre><code class="language-rust">
</code></pre><pre><code class="language-rust">
</code></pre>`

export default html
