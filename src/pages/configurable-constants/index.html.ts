// metadata
export const version = "0.37"
export const title = "Configurable Constants"
export const description = "Configurable constants in Sway"
export const codes = [
    {
        fileName: "config_const",
        code: "Y29udHJhY3Q7CgovLyBDb25maWd1cmFibGUgY29uc3RhbnRzCgpjb25maWd1cmFibGUgewogICAgTVlfTlVNOiB1NjQgPSAxMjMsCiAgICBTVFI6IHN0cls0XSA9ICJmdWVsIiwKICAgIE9XTkVSOiBBZGRyZXNzID0gQWRkcmVzczo6ZnJvbSgweDMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMpLAogICAgUE9JTlQ6IFBvaW50ID0gUG9pbnQgeyB4OiAxLCB5OiAyIH0sCn0KCnN0cnVjdCBQb2ludCB7CiAgICB4OiB1NjQsCiAgICB5OiB1NjQsCn0KCmFiaSBNeUNvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+ICh1NjQsIHN0cls0XSwgQWRkcmVzcywgUG9pbnQpOwp9CgppbXBsIE15Q29udHJhY3QgZm9yIENvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYygpIC0+ICh1NjQsIHN0cls0XSwgQWRkcmVzcywgUG9pbnQpIHsKICAgICAgICAoTVlfTlVNLCBTVFIsIE9XTkVSLCBQT0lOVCkKICAgIH0KfQo=",
    },
]

const html = `<p>Examples of configurable constants in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Configurable constants</span>

configurable {
    MY_NUM: <span class="hljs-type">u64</span> = <span class="hljs-number">123</span>,
    STR: <span class="hljs-type">str</span>[<span class="hljs-number">4</span>] = <span class="hljs-string">"fuel"</span>,
    OWNER: Address = Address::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-number">0x3333333333333333333333333333333333333333333333333333333333333333</span>),
    POINT: Point = Point { x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span> },
}

<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Point</span> {
    x: <span class="hljs-type">u64</span>,
    y: <span class="hljs-type">u64</span>,
}

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, <span class="hljs-type">str</span>[<span class="hljs-number">4</span>], Address, Point);
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> (<span class="hljs-type">u64</span>, <span class="hljs-type">str</span>[<span class="hljs-number">4</span>], Address, Point) {
        (MY_NUM, STR, OWNER, POINT)
    }
}
</code></pre>
`

export default html
