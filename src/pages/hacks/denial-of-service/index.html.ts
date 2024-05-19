// metadata
export const version = "0.59.0"
export const title = "Denial of Service"
export const description = "An example of denial of service hack in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["hack", "security", "denial", "service"]

export const codes = []

const html = `<h3>Vulnerability</h3>
<p>There are many ways to attack a smart contract to make it unusable.</p>
<p>One exploit we introduce here is denial of service by making the function to send Ether fail.</p>
<pre><code class="language-rust">
</code></pre><h3>Preventative Techniques</h3>
<p>One way to prevent this is to allow the users to withdraw their Ether instead of sending it.</p>
<p>Here is a example.</p>
<pre><code class="language-rust">
</code></pre>`

export default html
