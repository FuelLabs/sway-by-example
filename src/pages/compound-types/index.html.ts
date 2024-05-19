// metadata
export const version = "0.59.0"
export const title = "Compound Types"
export const description = "Compound types in Sway"

export const tempFileName = "compound_types.sw"
export const tempPlaygroundLink =
  "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=8030fee56754e3dfaf502d7a55c6090a"

export const keywords = [
  "compound",
  "compounds",
  "data",
  "type",
  "types",
  "variable",
  "variables",
  "string",
  "strings",
  "boolean",
  "uint256",
  "int256",
  "address",
  "uint",
  "int",
  "tuple",
  "tuples",
  "destructure",
  "destructuring",
  "struct",
  "structs",
  "array",
  "arrays",
]

export const codes = [
  {
    fileName: "compounds.rs",
    code: "Y29udHJhY3Q7CgovLyBDb21wb3VuZCB0eXBlcwovLyAtIFR1cGxlcwovLyAtIGRlc3RydWN0dXJpbmcKLy8gLSBTdHJ1Y3RzCi8vIC0gQXJyYXlzCgpzdHJ1Y3QgUG9pbnQgewogICAgeDogdTY0LAogICAgeTogdTY0LAp9CgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiBQb2ludDsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiBQb2ludCB7CiAgICAgICAgLy8gVHVwbGVzCiAgICAgICAgbGV0IHQ6ICh1NjQsIGJvb2wpID0gKDQyLCB0cnVlKTsKICAgICAgICAvLyBBY2Nlc3MgdHVwbGUgdmFsdWUKICAgICAgICBhc3NlcnQodC4wID09IDQyKTsKICAgICAgICBhc3NlcnQodC4xKTsKCiAgICAgICAgLy8gRGVzdHJ1Y3R1cmluZyBhIHR1cGxlICh0eXBlIGFubm90YXRpb24gaXMgb3B0aW9uYWwpCiAgICAgICAgbGV0IChudW0sIGJvbykgPSB0OwoKICAgICAgICAvLyBUdXBsZSBvZiBsZW5ndGggMQogICAgICAgIGxldCBvbmU6ICh1NjQsICkgPSAoMTIzLCApOwoKICAgICAgICAvLyBTdHJ1Y3QKICAgICAgICBsZXQgcCA9IFBvaW50IHsgeDogMSwgeTogMiB9OwogICAgICAgIC8vIEFjY2VzcyBzdHJ1Y3QgZmllbGRzCiAgICAgICAgYXNzZXJ0KHAueCA9PSAxKTsKICAgICAgICBhc3NlcnQocC55ID09IDIpOwoKICAgICAgICAvLyBBcnJheQogICAgICAgIGxldCB1X2FycjogW3U4OyA1XSA9IFsxLCAyLCAzLCA0LCA1XTsKICAgICAgICBsZXQgc19hcnI6IFtzdHI7IDRdID0gWyJjYXQiLCAiZG9nIiwgInNuYWtlIiwgImZpc2giXTsKCiAgICAgICAgbGV0IHN0cnVjdF9hcnI6IFtQb2ludDsgMl0gPSBbUG9pbnQgeyB4OiAxLCB5OiAyIH0sIFBvaW50IHsgeDogMTEsIHk6IDIyIH1dOwoKICAgICAgICAvLyBNdXRhdGluZyBhcnJheQogICAgICAgIGxldCBtdXQgbXV0X2FycjogW2Jvb2w7IDJdID0gW3RydWUsIGZhbHNlXTsKICAgICAgICBtdXRfYXJyWzFdID0gdHJ1ZTsKCiAgICAgICAgcAogICAgfQoKfQo=",
  },
]

const html = `<p>Examples of compound data types in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Compound types</span>
<span class="hljs-comment">// - Tuples</span>
<span class="hljs-comment">// - destructuring</span>
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
        <span class="hljs-keyword">let</span> <span class="hljs-variable">s_arr</span>: [<span class="hljs-type">str</span>; <span class="hljs-number">4</span>] = [<span class="hljs-string">"cat"</span>, <span class="hljs-string">"dog"</span>, <span class="hljs-string">"snake"</span>, <span class="hljs-string">"fish"</span>];

        <span class="hljs-keyword">let</span> <span class="hljs-variable">struct_arr</span>: [Point; <span class="hljs-number">2</span>] = [Point { x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span> }, Point { x: <span class="hljs-number">11</span>, y: <span class="hljs-number">22</span> }];

        <span class="hljs-comment">// Mutating array</span>
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">mut_arr</span>: [<span class="hljs-type">bool</span>; <span class="hljs-number">2</span>] = [<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>];
        mut_arr[<span class="hljs-number">1</span>] = <span class="hljs-literal">true</span>;

        p
    }

}
</code></pre>`

export default html
