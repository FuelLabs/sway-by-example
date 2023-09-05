// metadata
export const version = "0.8.13"
export const title = "Structs"
export const description = "Structs in Sway"
export const codes = [
    {
        fileName: "structs",
        code: "Y29udHJhY3Q7CgovLyBTdHJ1Y3RzCi8vIC0gQ3JlYXRlLCByZWFkIGFuZCB1cGRhdGUKLy8gLSBTaG9ydGhhbmQgbm90YXRpb24KLy8gLSBEZXN0cnVjdHVyZQoKc3RydWN0IFBvaW50IHsKICAgIHg6IHU2NCwKICAgIHk6IHU2NCwKfQoKLy8gTmVzdGVkIHN0cnVjdApzdHJ1Y3QgTGluZSB7CiAgICBwMDogUG9pbnQsCiAgICBwMTogUG9pbnQsCn0KCmFiaSBNeUNvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+IExpbmU7Cn0KCmltcGwgTXlDb250cmFjdCBmb3IgQ29udHJhY3QgewogICAgZm4gdGVzdF9mdW5jKCkgLT4gTGluZSB7CiAgICAgICAgLy8gQ3JlYXRlLCByZWFkIGFuZCB1cGRhdGUKICAgICAgICBsZXQgbXV0IHAwID0gUG9pbnQgeyB4OiAxLCB5OiAyIH07CgogICAgICAgIHAwLnggPSAxMTsKCiAgICAgICAgLy8gU2hvcnRoYW5kCiAgICAgICAgbGV0IHg6IHU2NCA9IDEyMzsKICAgICAgICBsZXQgeTogdTY0ID0gMTIzOwoKICAgICAgICBsZXQgcDEgPSBQb2ludCB7IHgsIHkgfTsKCiAgICAgICAgLy8gTmVzdGVkIHN0cnVjdHMKICAgICAgICBsZXQgbGluZSA9IExpbmUgeyBwMCwgcDEgfTsKCiAgICAgICAgLy8gRGVzdHJ1Y3R1cmUKICAgICAgICBsZXQgTGluZSB7CiAgICAgICAgICAgIHAwOiBQb2ludCB7IHg6IHgwLCB5OiB5MCB9LAogICAgICAgICAgICBwMTogUG9pbnQgeyB4OiB4MSwgeTogeTFsIH0sCiAgICAgICAgfSA9IGxpbmU7CgogICAgICAgIGxpbmUKICAgIH0KfQo=",
    },
]

const html = `<p>Examples of structs in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Structs</span>
<span class="hljs-comment">// - Create, read and update</span>
<span class="hljs-comment">// - Shorthand notation</span>
<span class="hljs-comment">// - Destructure</span>

<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Point</span> {
    x: <span class="hljs-type">u64</span>,
    y: <span class="hljs-type">u64</span>,
}

<span class="hljs-comment">// Nested struct</span>
<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Line</span> {
    p0: Point,
    p1: Point,
}

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Line;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Line {
        <span class="hljs-comment">// Create, read and update</span>
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">p0</span> = Point { x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span> };

        p0.x = <span class="hljs-number">11</span>;

        <span class="hljs-comment">// Shorthand</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">x</span>: <span class="hljs-type">u64</span> = <span class="hljs-number">123</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">y</span>: <span class="hljs-type">u64</span> = <span class="hljs-number">123</span>;

        <span class="hljs-keyword">let</span> <span class="hljs-variable">p1</span> = Point { x, y };

        <span class="hljs-comment">// Nested structs</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">line</span> = Line { p0, p1 };

        <span class="hljs-comment">// Destructure</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">Line</span> {
            p0: Point { x: x0, y: y0 },
            p1: Point { x: x1, y: y1l },
        } = line;

        line
    }
}
</code></pre>
`

export default html
