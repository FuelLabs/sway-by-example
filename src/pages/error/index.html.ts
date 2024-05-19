// metadata
export const version = "0.59.0"
export const title = "Error"
export const description = "Example of how to throw errors in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "error",
    "errors",
    "require",
    "revert",
    "assert",
]

export const codes = [
]

const html = `<p>An error will undo all changes made to the state during a transaction.</p>
<p>You can throw an error by calling <code>require</code>, <code>revert</code> or <code>assert</code>.</p>
<ul>
<li><code>require</code> is used to validate inputs and conditions before execution.</li>
<li><code>revert</code> is similar to <code>require</code>. See the code below for details.</li>
<li><code>assert</code> is used to check for code that should never be false. Failing
assertion probably means that there is a bug.</li>
</ul>
<p>Use custom error to save gas.</p>
<pre><code class="language-rust">
</code></pre><p>Here is another example</p>
<pre><code class="language-rust">
</code></pre>`

export default html
