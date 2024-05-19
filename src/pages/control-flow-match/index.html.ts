// metadata
export const version = "0.59.0"
export const title = "Control Flow - Match Statement"
export const description = "Match statement in Sway"

export const tempFileName = "match.sw"
export const tempPlaygroundLink =
  "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=6fdb0a1a1d3a32a27e272c90bb15dae3"

export const keywords = ["match", "matches", "control", "flow"]

export const codes = [
  {
    fileName: "control_flow_match.rs",
    code: "Y29udHJhY3Q7CgovLyBDb250cm9sIGZsb3cKLy8gQXNzaWduIHZhcmlhYmxlCi8vIEVudW0KCmFiaSBNeUNvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuY3Rpb24oeDogdTY0LCB5OiBPcHRpb248dTY0PikgLT4gdTY0Owp9CgpmbiBkb19zb21ldGhpbmcoKSB7fQoKZm4gZG9fc29tZXRoaW5nX2Vsc2UoKSB7fQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmN0aW9uKHg6IHU2NCwgeTogT3B0aW9uPHU2ND4pIC0+IHU2NCB7CiAgICAgICAgLy8gQ29udHJvbCBmbG93CiAgICAgICAgbWF0Y2ggeCB7CiAgICAgICAgICAgIDAgPT4gZG9fc29tZXRoaW5nKCksCiAgICAgICAgICAgIF8gPT4gZG9fc29tZXRoaW5nX2Vsc2UoKSwKICAgICAgICB9CgogICAgICAgIC8vIEFzc2lnbiB2YXJpYWJsZQogICAgICAgIGxldCByZXM6IHN0ciA9IG1hdGNoIHggewogICAgICAgICAgICAwID0+ICJhIiwKICAgICAgICAgICAgMSA9PiAiYiIsCiAgICAgICAgICAgIDIgPT4gImMiLAogICAgICAgICAgICBfID0+ICJkIiwKICAgICAgICB9OwoKICAgICAgICAvLyBFbnVtCiAgICAgICAgbGV0IHogPSBtYXRjaCB5IHsKICAgICAgICAgICAgT3B0aW9uOjpTb21lKHZhbCkgPT4gdmFsICsgMSwKICAgICAgICAgICAgT3B0aW9uOjpOb25lID0+IDAsCiAgICAgICAgfTsKCiAgICAgICAgegogICAgfQp9Cg==",
  },
]

const html = `<p>Examples of match statement in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Control flow</span>
<span class="hljs-comment">// Assign variable</span>
<span class="hljs-comment">// Enum</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_function</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">Option</span>&lt;<span class="hljs-type">u64</span>&gt;) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">do_something</span>() {}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">do_something_else</span>() {}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_function</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">Option</span>&lt;<span class="hljs-type">u64</span>&gt;) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-comment">// Control flow</span>
        <span class="hljs-keyword">match</span> x {
            <span class="hljs-number">0</span> =&gt; <span class="hljs-title function_ invoke__">do_something</span>(),
            _ =&gt; <span class="hljs-title function_ invoke__">do_something_else</span>(),
        }

        <span class="hljs-comment">// Assign variable</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">res</span>: <span class="hljs-type">str</span> = <span class="hljs-keyword">match</span> x {
            <span class="hljs-number">0</span> =&gt; <span class="hljs-string">"a"</span>,
            <span class="hljs-number">1</span> =&gt; <span class="hljs-string">"b"</span>,
            <span class="hljs-number">2</span> =&gt; <span class="hljs-string">"c"</span>,
            _ =&gt; <span class="hljs-string">"d"</span>,
        };

        <span class="hljs-comment">// Enum</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">z</span> = <span class="hljs-keyword">match</span> y {
            <span class="hljs-type">Option</span>::<span class="hljs-title function_ invoke__">Some</span>(val) =&gt; val + <span class="hljs-number">1</span>,
            <span class="hljs-type">Option</span>::<span class="hljs-literal">None</span> =&gt; <span class="hljs-number">0</span>,
        };

        z
    }
}
</code></pre>`

export default html
