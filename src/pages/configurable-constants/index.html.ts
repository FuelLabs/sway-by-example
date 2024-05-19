// metadata
export const version = "0.59.0"
export const title = "Configurable Constants"
export const description = "Configurable constants in Sway"

export const tempFileName = "configurable_constants.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=7da7f0d28272421d798dfa1b4669c103"

export const keywords = [
    "constant",
    "constants",
    "configurable",
    "configurables",
    "config",
    "configs",
    "data",
    "variable",
    "variables",
]

export const codes = [
    {
        fileName: "config_const.rs",
        code: "Y29udHJhY3Q7CgovLyBDb25maWd1cmFibGUgY29uc3RhbnRzCgpjb25maWd1cmFibGUgewogICAgTVlfTlVNOiB1NjQgPSAxMjMsCiAgICBPV05FUjogQWRkcmVzcyA9IEFkZHJlc3M6OmZyb20oMHgzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKSwKICAgIFBPSU5UOiBQb2ludCA9IFBvaW50IHsgeDogMSwgeTogMiB9LAp9CgpzdHJ1Y3QgUG9pbnQgewogICAgeDogdTY0LAogICAgeTogdTY0LAp9CgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiAodTY0LCBBZGRyZXNzLCBQb2ludCk7Cn0KCmltcGwgTXlDb250cmFjdCBmb3IgQ29udHJhY3QgewogICAgZm4gdGVzdF9mdW5jKCkgLT4gKHU2NCwgQWRkcmVzcywgUG9pbnQpIHsKICAgICAgICAoTVlfTlVNLCBPV05FUiwgUE9JTlQpCiAgICB9Cn0K",
    },
]

const html = `<p>Examples of configurable constants in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Configurable constants</span>

configurable {
    MY_NUM: <span class="hljs-type">u64</span> = <span class="hljs-number">123</span>,
    OWNER: Address = Address::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-number">0x3333333333333333333333333333333333333333333333333333333333333333</span>),
    POINT: Point = Point { x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span> },
}

<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Point</span> {
    x: <span class="hljs-type">u64</span>,
    y: <span class="hljs-type">u64</span>,
}

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, Address, Point);
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, Address, Point) {
        (MY_NUM, OWNER, POINT)
    }
}
</code></pre>`

export default html
