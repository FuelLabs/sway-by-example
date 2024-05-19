// metadata
export const version = "0.59.0"
export const title = "Bypass Contract Size Check"
export const description = "An example of bypassing contract size check"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "hack",
    "security",
    "bypass",
    "contract",
    "size",
    "check",
    "extcodesize",
]

export const codes = [
]

const html = `<h3>Vulnerability</h3>
<p>If an address is a contract then the size of code stored at the address will be greater than 0 right?</p>
<p>Let&#39;s see how we can create a contract with code size returned by <code>extcodesize</code> equal to 0.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
