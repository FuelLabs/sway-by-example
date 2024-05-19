// metadata
export const version = "0.59.0"
export const title = "Constants"
export const description = "Constants in Sway"

export const tempFileName = "constants.sw"
export const tempPlaygroundLink =
  "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=bb40306362c1e9471daaff3edd82da06"

export const keywords = ["constant", "constants", "data", "variable", "variables"]

export const codes = [
  {
    fileName: "constants.rs",
    code: "CmNvbnRyYWN0OwoKLy8gQ29uc3RhbnRzCgovLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKY29uc3QgWkVST19CMjU2OiBiMjU2ID0gYjI1Njo6bWluKCk7CmNvbnN0IFpFUk9fQUREUkVTUyA9IEFkZHJlc3M6OmZyb20oWkVST19CMjU2KTsKCi8vIEFzc29jaWF0ZWQgY29uc3RhbnRzCnN0cnVjdCBQb2ludCB7CiAgICB4OiB1NjQsCiAgICB5OiB1NjQsCn0KCmltcGwgUG9pbnQgewogICAgY29uc3QgWkVSTzogUG9pbnQgPSBQb2ludCB7IHg6IDAsIHk6IDAgfTsKfQoKYWJpIE15Q29udHJhY3QgewogICAgZm4gdGVzdF9mdW5jKCkgLT4gUG9pbnQ7Cn0KCmltcGwgTXlDb250cmFjdCBmb3IgQ29udHJhY3QgewogICAgZm4gdGVzdF9mdW5jKCkgLT4gUG9pbnQgewogICAgICAgIC8vIENhbiBhbHNvIGRlZmluZSBhIGNvbnN0YW50IGluc2lkZSBhIGZ1bmN0aW9uCiAgICAgICAgY29uc3QgTVlfTlVNOiB1NjQgPSAxMjM7CiAgICAgICAgUG9pbnQ6OlpFUk8KICAgIH0KfQo=",
  },
]

const html = `<p>Examples of constants in Sway</p>
<pre><code class="language-rust">
contract;

<span class="hljs-comment">// Constants</span>

<span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000000</span>
<span class="hljs-keyword">const</span> ZERO_B256: b256 = b256::<span class="hljs-title function_ invoke__">min</span>();
<span class="hljs-keyword">const</span> ZERO_ADDRESS = Address::<span class="hljs-title function_ invoke__">from</span>(ZERO_B256);

<span class="hljs-comment">// Associated constants</span>
<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Point</span> {
    x: <span class="hljs-type">u64</span>,
    y: <span class="hljs-type">u64</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Point</span> {
    <span class="hljs-keyword">const</span> ZERO: Point = Point { x: <span class="hljs-number">0</span>, y: <span class="hljs-number">0</span> };
}

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Point;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Point {
        <span class="hljs-comment">// Can also define a constant inside a function</span>
        <span class="hljs-keyword">const</span> MY_NUM: <span class="hljs-type">u64</span> = <span class="hljs-number">123</span>;
        Point::ZERO
    }
}
</code></pre>`

export default html
