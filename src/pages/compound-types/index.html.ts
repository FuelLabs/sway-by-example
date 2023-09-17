// metadata
export const version = "0.37"
export const title = "Compound Types"
export const description = "Compound types in Sway"
export const codes = [
  {
    fileName: "compounds",
    code: "Y29udHJhY3Q7CgovLyBDb21wb3VuZCB0eXBlcwovLyAtIFR1cGxlcwovLyAgIC0gZGVzdHJ1Y3R1cmluZwovLyAtIFN0cnVjdHMKLy8gLSBBcnJheXMKCnN0cnVjdCBQb2ludCB7CiAgICB4OiB1NjQsCiAgICB5OiB1NjQsCn0KCmFiaSBNeUNvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+IFBvaW50Owp9CgppbXBsIE15Q29udHJhY3QgZm9yIENvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+IFBvaW50IHsKICAgICAgICAvLyBUdXBsZXMKICAgICAgICBsZXQgdDogKHU2NCwgYm9vbCkgPSAoNDIsIHRydWUpOwogICAgICAgIC8vIEFjY2VzcyB0dXBsZSB2YWx1ZQogICAgICAgIGFzc2VydCh0LjAgPT0gNDIpOwogICAgICAgIGFzc2VydCh0LjEpOwoKICAgICAgICAvLyBEZXN0cnVjdHVyaW5nIGEgdHVwbGUgKHR5cGUgYW5ub3RhdGlvbiBpcyBvcHRpb25hbCkKICAgICAgICBsZXQgKG51bSwgYm9vKSA9IHQ7CgogICAgICAgIC8vIFR1cGxlIG9mIGxlbmd0aCAxCiAgICAgICAgbGV0IG9uZTogKHU2NCwgKSA9ICgxMjMsICk7CgogICAgICAgIC8vIFN0cnVjdAogICAgICAgIGxldCBwID0gUG9pbnQgeyB4OiAxLCB5OiAyIH07CiAgICAgICAgLy8gQWNjZXNzIHN0cnVjdCBmaWVsZHMKICAgICAgICBhc3NlcnQocC54ID09IDEpOwogICAgICAgIGFzc2VydChwLnkgPT0gMik7CgogICAgICAgIC8vIEFycmF5CiAgICAgICAgbGV0IHVfYXJyOiBbdTg7IDVdID0gWzEsIDIsIDMsIDQsIDVdOwogICAgICAgIGxldCBzX2FycjogW3N0clszXTsgM10gPSBbImNhdCIsICJkb2ciLCAicmF0Il07CgogICAgICAgIGxldCBzdHJ1Y3RfYXJyOiBbUG9pbnQ7IDJdID0gW1BvaW50IHsgeDogMSwgeTogMiB9LCBQb2ludCB7IHg6IDExLCB5OiAyMiB9XTsKCiAgICAgICAgLy8gTXV0YXRpbmcgYXJyYXkKICAgICAgICBsZXQgbXV0IG11dF9hcnI6IFtib29sOyAyXSA9IFt0cnVlLCBmYWxzZV07CiAgICAgICAgbXV0X2FyclsxXSA9IHRydWU7CgogICAgICAgIHAKICAgIH0KCn0K",
  },
]

const html = `<p>Examples of compound data types in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Compound types</span>
<span class="hljs-comment">// - Tuples</span>
<span class="hljs-comment">//   - destructuring</span>
<span class="hljs-comment">// - Structs</span>
<span class="hljs-comment">// - Arrays</span>

<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Point</span> {
    x: <span class="hljs-type">u64</span>,
    y: <span class="hljs-type">u64</span>,
}

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Point;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Point {
        <span class="hljs-comment">// Tuples</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">t</span>: (<span class="hljs-type">u64</span>, <span class="hljs-type">bool</span>) = (<span class="hljs-number">42</span>, <span class="hljs-literal">true</span>);
        <span class="hljs-comment">// Access tuple value</span>
        <span class="hljs-title function_ invoke__">assert</span>(t.<span class="hljs-number">0</span> == <span class="hljs-number">42</span>);
        <span class="hljs-title function_ invoke__">assert</span>(t.<span class="hljs-number">1</span>);

        <span class="hljs-comment">// Destructuring a tuple (type annotation is optional)</span>
        <span class="hljs-keyword">let</span> (num, boo) = t;

        <span class="hljs-comment">// Tuple of length 1</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">one</span>: (<span class="hljs-type">u64</span>, ) = (<span class="hljs-number">123</span>, );

        <span class="hljs-comment">// Struct</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">p</span> = Point { x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span> };
        <span class="hljs-comment">// Access struct fields</span>
        <span class="hljs-title function_ invoke__">assert</span>(p.x == <span class="hljs-number">1</span>);
        <span class="hljs-title function_ invoke__">assert</span>(p.y == <span class="hljs-number">2</span>);

        <span class="hljs-comment">// Array</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">u_arr</span>: [<span class="hljs-type">u8</span>; <span class="hljs-number">5</span>] = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
        <span class="hljs-keyword">let</span> <span class="hljs-variable">s_arr</span>: [<span class="hljs-type">str</span>[<span class="hljs-number">3</span>]; <span class="hljs-number">3</span>] = [<span class="hljs-string">"cat"</span>, <span class="hljs-string">"dog"</span>, <span class="hljs-string">"rat"</span>];

        <span class="hljs-keyword">let</span> <span class="hljs-variable">struct_arr</span>: [Point; <span class="hljs-number">2</span>] = [Point { x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span> }, Point { x: <span class="hljs-number">11</span>, y: <span class="hljs-number">22</span> }];

        <span class="hljs-comment">// Mutating array</span>
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">mut_arr</span>: [<span class="hljs-type">bool</span>; <span class="hljs-number">2</span>] = [<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>];
        mut_arr[<span class="hljs-number">1</span>] = <span class="hljs-literal">true</span>;

        p
    }

}
</code></pre>
`

export default html
