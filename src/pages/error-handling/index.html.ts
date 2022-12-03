// metadata
export const version = "0.8.13"
export const title = "Error Handling"
export const description = "Handling different types of errors in Sway"
export const codes = [
    {
        fileName: "error_handling",
        code: "Y29udHJhY3Q7CgpkZXAgZXJyb3JzOwpkZXAgZXJyb3JfaGFuZGxpbmdfbGlicmFyeTsKCnVzZSBlcnJvcnM6Oio7CnVzZSBlcnJvcl9oYW5kbGluZ19saWJyYXJ5OjoqOwoKdXNlIHN0ZDo6ewogICAgcmV2ZXJ0Ojp7CiAgICAgICAgcmV2ZXJ0LAogICAgICAgIHJlcXVpcmUsCiAgICB9LAogICAgYXNzZXJ0Ojphc3NlcnQsCn07CgppbXBsIEVycm9yIGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X3JldmVydChzcGVjaWFsX251bWJlcjogdTY0KSB7CiAgICAgICAgaWYgKHNwZWNpYWxfbnVtYmVyICE9IDQyKSB7CiAgICAgICAgICAgIHJldmVydCgwKQogICAgICAgIH0KICAgIH0KCiAgICBmbiB0ZXN0X3JlcXVpcmUoc3BlY2lhbF9udW1iZXI6IHU2NCkgewogICAgICAgIHJlcXVpcmUoc3BlY2lhbF9udW1iZXIgPT0gNDIsICJTcGVjaWFsIG51bWJlciBtdXN0IGJlIGVxdWFsIHRvIDQyIik7CiAgICB9CgogICAgZm4gdGVzdF9hc3NlcnQoc3BlY2lhbF9udW1iZXI6IHU2NCkgewogICAgICAgIGFzc2VydChzcGVjaWFsX251bWJlciA9PSA0Mik7CiAgICB9CgogICAgZm4gdGVzdF9jdXN0b21fcmVxdWlyZShzcGVjaWFsX251bWJlcjogdTY0KSB7CiAgICAgICAgcmVxdWlyZShzcGVjaWFsX251bWJlciA9PSA0MiwgSW5wdXRFcnJvcjo6SW5wdXRTbWFsbGVyVGhhbjQyKTsKICAgIH0KfQo=",
    },
    {
        fileName: "errors",
        code: "bGlicmFyeSBlcnJvcnM7CgpwdWIgZW51bSBJbnB1dEVycm9yIHsKICAgIElucHV0U21hbGxlclRoYW40MjogKCksCn0=",
    },
]

const html = `<p>Errors will revert all state changes made during a transaction. Similar to Solidity an error can be thrown by utilizing <code>revert</code>, <code>assert</code>, <code>require</code></p>
<ol>
<li><code>revert</code> function calls directly reverts the transaction</li>
<li><code>assert</code> only reverts if a conditional is not met to be <code>true</code></li>
<li><code>require</code> only reverts <em>with an error</em> if a conditional is not met to be <code>true</code></li>
</ol>
<p>Note: <code>revert</code> keyword will panic in a <code>predicate</code></p>
<pre><code class="language-rust">contract;

dep errors;
dep error_handling_library;

<span class="hljs-keyword">use</span> errors::*;
<span class="hljs-keyword">use</span> error_handling_library::*;

<span class="hljs-keyword">use</span> std::{
    revert::{
        revert,
        require,
    },
    assert::assert,
};

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Error</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_revert</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">if</span> (special_number != <span class="hljs-number">42</span>) {
            <span class="hljs-title function_ invoke__">revert</span>(<span class="hljs-number">0</span>)
        }
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_require</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">require</span>(special_number == <span class="hljs-number">42</span>, <span class="hljs-string">"Special number must be equal to 42"</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_assert</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">assert</span>(special_number == <span class="hljs-number">42</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_custom_require</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">require</span>(special_number == <span class="hljs-number">42</span>, InputError::InputSmallerThan42);
    }
}
</code></pre>
<h3 id="external">External</h3>
<p>This is the project structure for importing your own custom errors</p>
<pre><code>└── Import   
    └── src
        ├── main.sw
        └── errors.sw
</code></pre>
<p>Note: Similar to Solidity using custom errors will help save on bytecode size and provide gas savings</p>
<pre><code class="language-rust">library errors;

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">InputError</span> {
    InputSmallerThan42: (),
}
</code></pre>
`

export default html
