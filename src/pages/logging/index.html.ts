// metadata
export const version = "0.59.0"
export const title = "Logging"
export const description = "Logging in Sway"

export const tempFileName = "log.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=482f66e84b069054c075ac03cd728bb3"

export const keywords = [
    "log",
    "logs",
    "logging",
]

export const codes = [
    {
        fileName: "logging.rs",
        code: "Y29udHJhY3Q7Cgp1c2Ugc3RkOjpsb2dnaW5nOjpsb2c7CgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMobXNnOiBzdHJbNF0pOwp9CgppbXBsIE15Q29udHJhY3QgZm9yIENvbnRyYWN0IHsKICAgIGZuIHRlc3RfZnVuYyhtc2c6IHN0cls0XSkgewogICAgICAgIGxvZyhtc2cpOwogICAgfQp9Cg==",
    },
]

const html = `<p>Examples of logging in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-keyword">use</span> std::logging::log;

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>(msg: <span class="hljs-type">str</span>[<span class="hljs-number">4</span>]);
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>(msg: <span class="hljs-type">str</span>[<span class="hljs-number">4</span>]) {
        <span class="hljs-title function_ invoke__">log</span>(msg);
    }
}
</code></pre>`

export default html
