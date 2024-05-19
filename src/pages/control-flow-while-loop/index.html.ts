// metadata
export const version = "0.59.0"
export const title = "Control Flow - While Loop"
export const description = "While loop in Sway"

export const tempFileName = "while.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=6365c7551a2abcb4fec4781d2a704acf"

export const keywords = [
    "while",
    "loop",
    "control",
    "flow",
]

export const codes = [
    {
        fileName: "control_flow_while_loop.rs",
        code: "Y29udHJhY3Q7CgovLyBXaGlsZSBsb29wcwovLyBjb250aW51ZSBhbmQgYnJlYWsKCmFiaSBNeUNvbnRyYWN0IHsKICAgIGZuIGV4YW1wbGVfMSgpIC0+IHU2NDsKICAgIGZuIGV4YW1wbGVfMigpIC0+IHU2NDsKICAgIGZuIGV4YW1wbGVfMygpIC0+IHU2NDsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiBleGFtcGxlXzEoKSAtPiB1NjQgewogICAgICAgIGxldCBtdXQgdG90YWwgPSAwOwogICAgICAgIGxldCBtdXQgaSA9IDA7CiAgICAgICAgd2hpbGUgaSA8IDUgewogICAgICAgICAgICBpICs9IDE7CiAgICAgICAgICAgIHRvdGFsICs9IGk7CiAgICAgICAgfQoKICAgICAgICAvLyB0b3RhbCA9IDEgKyAyICsgMyArIDQgKyA1CiAgICAgICAgdG90YWwKICAgIH0KCiAgICBmbiBleGFtcGxlXzIoKSAtPiB1NjQgewogICAgICAgIC8vIGNvbnRpbnVlIC0gc3VtIG9kZHMKICAgICAgICBsZXQgbXV0IHRvdGFsID0gMDsKICAgICAgICBsZXQgbXV0IGkgPSAwOwogICAgICAgIHdoaWxlIGkgPCA1IHsKICAgICAgICAgICAgaSArPSAxOwogICAgICAgICAgICAvLyBTa2lwIGlmIGV2ZW4KICAgICAgICAgICAgaWYgaSAlIDIgPT0gMCB7CiAgICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgfQogICAgICAgICAgICB0b3RhbCArPSBpOwogICAgICAgIH0KCiAgICAgICAgLy8gdG90YWwgPSAxICsgMyArIDUKICAgICAgICB0b3RhbAogICAgfQoKICAgIGZuIGV4YW1wbGVfMygpIC0+IHU2NCB7CiAgICAgICAgLy8gYnJlYWsKICAgICAgICBsZXQgbXV0IHRvdGFsID0gMDsKICAgICAgICBsZXQgbXV0IGkgPSAwOwogICAgICAgIHdoaWxlIGkgPCA1IHsKICAgICAgICAgICAgaSArPSAxOwogICAgICAgICAgICBpZiBpID4gMyB7CiAgICAgICAgICAgICAgICAvLyBFeGl0IGxvb3AKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHRvdGFsICs9IGk7CiAgICAgICAgfQoKICAgICAgICAvLyB0b3RhbCA9IDEgKyAyICsgMwogICAgICAgIHRvdGFsCiAgICB9Cn0K",
    },
]

const html = `<p>Examples of while loop in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// While loops</span>
<span class="hljs-comment">// continue and break</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">example_1</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">example_2</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">example_3</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">example_1</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">total</span> = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">i</span> = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">while</span> i &lt; <span class="hljs-number">5</span> {
            i += <span class="hljs-number">1</span>;
            total += i;
        }

        <span class="hljs-comment">// total = 1 + 2 + 3 + 4 + 5</span>
        total
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">example_2</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-comment">// continue - sum odds</span>
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">total</span> = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">i</span> = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">while</span> i &lt; <span class="hljs-number">5</span> {
            i += <span class="hljs-number">1</span>;
            <span class="hljs-comment">// Skip if even</span>
            <span class="hljs-keyword">if</span> i % <span class="hljs-number">2</span> == <span class="hljs-number">0</span> {
                <span class="hljs-keyword">continue</span>;
            }
            total += i;
        }

        <span class="hljs-comment">// total = 1 + 3 + 5</span>
        total
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">example_3</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-comment">// break</span>
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">total</span> = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">i</span> = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">while</span> i &lt; <span class="hljs-number">5</span> {
            i += <span class="hljs-number">1</span>;
            <span class="hljs-keyword">if</span> i &gt; <span class="hljs-number">3</span> {
                <span class="hljs-comment">// Exit loop</span>
                <span class="hljs-keyword">break</span>;
            }
            total += i;
        }

        <span class="hljs-comment">// total = 1 + 2 + 3</span>
        total
    }
}
</code></pre>`

export default html
