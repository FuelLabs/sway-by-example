// metadata
export const version = "0.37"
export const title = "Functions"
export const description = "Functions in Sway"
export const codes = [
    {
        fileName: "functions",
        code: "Y29udHJhY3Q7CgovLyBGdW5jdGlvbnMKLy8gLSBJbnRlcm5hbCBhbmQgZXh0ZXJuYWwgZnVuY3Rpb25zCi8vIC0gcmVmIG11dAovLyAtIFJldHVybiBtdWx0aXBsZSBvdXRwdXRzCgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiAodTY0LCBib29sKTsKfQoKZm4gZXEoeDogdTY0LCB5OiB1NjQpIC0+IGJvb2wgewogICAgeCA9PSB5Cn0KCmZuIGluYyhyZWYgbXV0IG51bTogdTY0KSB7CiAgICBudW0gKz0gMTsKfQoKZm4gc3dhcF9tdXQocmVmIG11dCBwYWlyOiAodTY0LCB1NjQpKSB7CiAgICBsZXQgdG1wID0gcGFpci4wOwogICAgcGFpci4wID0gcGFpci4xOwogICAgcGFpci4xID0gdG1wOwp9CgpmbiBzd2FwKHg6IHU2NCwgeTogdTY0KSAtPiAodTY0LCB1NjQpIHsKICAgICh5LCB4KQp9CgppbXBsIE15Q29udHJhY3QgZm9yIENvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+ICh1NjQsIGJvb2wpIHsKICAgICAgICBhc3NlcnQoZXEoMTEsIDExKSk7CiAgICAgICAgYXNzZXJ0KCFlcSgxMSwgMTIpKTsKCiAgICAgICAgbGV0IG11dCBudW06IHU2NCA9IDEyMzsKICAgICAgICBpbmMobnVtKTsKICAgICAgICBhc3NlcnQobnVtID09IDEyMyArIDEpOwoKICAgICAgICBsZXQgbXV0IHBhaXIgPSAoMTIsIDEzKTsKICAgICAgICBzd2FwX211dChwYWlyKTsKICAgICAgICBhc3NlcnQocGFpci4wID09IDEzKTsKICAgICAgICBhc3NlcnQocGFpci4xID09IDEyKTsKCiAgICAgICAgbGV0IHggPSAxOwogICAgICAgIGxldCB5ID0gMjsKICAgICAgICBsZXQgKHksIHgpID0gc3dhcCh4LCB5KTsKICAgICAgICBhc3NlcnQoeSA9PSAxKTsKICAgICAgICBhc3NlcnQoeCA9PSAyKTsKICAgICAgICAoMTIzLCB0cnVlKQogICAgfQp9Cg==",
    },
]

const html = `<p>Examples of function in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Functions</span>
<span class="hljs-comment">// - Internal and external functions</span>
<span class="hljs-comment">// - ref mut</span>
<span class="hljs-comment">// - Return multiple outputs</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, <span class="hljs-type">bool</span>);
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">eq</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">bool</span> {
    x == y
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">inc</span>(<span class="hljs-keyword">ref</span> <span class="hljs-keyword">mut</span> num: <span class="hljs-type">u64</span>) {
    num += <span class="hljs-number">1</span>;
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">swap_mut</span>(<span class="hljs-keyword">ref</span> <span class="hljs-keyword">mut</span> pair: (<span class="hljs-type">u64</span>, <span class="hljs-type">u64</span>)) {
    <span class="hljs-keyword">let</span> <span class="hljs-variable">tmp</span> = pair.<span class="hljs-number">0</span>;
    pair.<span class="hljs-number">0</span> = pair.<span class="hljs-number">1</span>;
    pair.<span class="hljs-number">1</span> = tmp;
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">swap</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, <span class="hljs-type">u64</span>) {
    (y, x)
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, <span class="hljs-type">bool</span>) {
        <span class="hljs-title function_ invoke__">assert</span>(<span class="hljs-title function_ invoke__">eq</span>(<span class="hljs-number">11</span>, <span class="hljs-number">11</span>));
        <span class="hljs-title function_ invoke__">assert</span>(!<span class="hljs-title function_ invoke__">eq</span>(<span class="hljs-number">11</span>, <span class="hljs-number">12</span>));

        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">num</span>: <span class="hljs-type">u64</span> = <span class="hljs-number">123</span>;
        <span class="hljs-title function_ invoke__">inc</span>(num);
        <span class="hljs-title function_ invoke__">assert</span>(num == <span class="hljs-number">123</span> + <span class="hljs-number">1</span>);

        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">pair</span> = (<span class="hljs-number">12</span>, <span class="hljs-number">13</span>);
        <span class="hljs-title function_ invoke__">swap_mut</span>(pair);
        <span class="hljs-title function_ invoke__">assert</span>(pair.<span class="hljs-number">0</span> == <span class="hljs-number">13</span>);
        <span class="hljs-title function_ invoke__">assert</span>(pair.<span class="hljs-number">1</span> == <span class="hljs-number">12</span>);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">x</span> = <span class="hljs-number">1</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">y</span> = <span class="hljs-number">2</span>;
        <span class="hljs-keyword">let</span> (y, x) = <span class="hljs-title function_ invoke__">swap</span>(x, y);
        <span class="hljs-title function_ invoke__">assert</span>(y == <span class="hljs-number">1</span>);
        <span class="hljs-title function_ invoke__">assert</span>(x == <span class="hljs-number">2</span>);
        (<span class="hljs-number">123</span>, <span class="hljs-literal">true</span>)
    }
}
</code></pre>
`

export default html
